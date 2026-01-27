"use client";

import { useEffect, useMemo, useRef, useState } from "react";

type WordItem = { nl: string; tr: string };

export default function LessonContent({ words }: { words: WordItem[] }) {
  const [query, setQuery] = useState("");
  const [showTR, setShowTR] = useState(true);
  const [onlyNL, setOnlyNL] = useState(false);

  const [speakingIndex, setSpeakingIndex] = useState<number | null>(null);
  const queueRef = useRef<number[]>([]);
  const playingQueueRef = useRef(false);

  /** ---------------- TTS (Dutch voice picker) ---------------- */
  function hasTTS() {
    return typeof window !== "undefined" && "speechSynthesis" in window;
  }

  function pickDutchVoice() {
    if (!hasTTS()) return null;
    const voices = window.speechSynthesis.getVoices?.() || [];
    if (!voices.length) return null;

    // 1) dil önceliği
    const preferred = ["nl-NL", "nl-BE", "nl"];
    const byLang = voices.find((v) =>
      preferred.some((lng) => (v.lang || "").toLowerCase().startsWith(lng.toLowerCase()))
    );
    if (byLang) return byLang;

    // 2) isimden yakala (bazı platformlarda "Dutch" yazıyor)
    const byName = voices.find((v) => /dutch|nederlands|hollands|nl/i.test(v.name || ""));
    return byName || null;
  }

  function stopSpeak() {
    if (!hasTTS()) return;
    try {
      window.speechSynthesis.cancel();
    } catch {}
    setSpeakingIndex(null);
    playingQueueRef.current = false;
    queueRef.current = [];
  }

  function speakDutch(text: string, index?: number) {
    if (!hasTTS()) return false;

    try {
      window.speechSynthesis.cancel();

      const u = new SpeechSynthesisUtterance(text);
      u.lang = "nl-NL";

      const voice = pickDutchVoice();
      if (voice) u.voice = voice;

      u.rate = 0.95;
      u.pitch = 1;
      u.volume = 1;

      if (typeof index === "number") setSpeakingIndex(index);

      u.onend = () => {
        // sıradaki kuyruk devam etsin
        if (playingQueueRef.current && queueRef.current.length) {
          const next = queueRef.current.shift()!;
          const nextWord = filtered[next];
          if (nextWord) speakDutch(nextWord.nl, next);
          else stopSpeak();
          return;
        }
        setSpeakingIndex(null);
        playingQueueRef.current = false;
      };

      u.onerror = () => {
        setSpeakingIndex(null);
        playingQueueRef.current = false;
      };

      window.speechSynthesis.speak(u);
      return true;
    } catch {
      return false;
    }
  }

  // Bazı tarayıcılarda voice listesi geç gelir; bu tetikleyici önemli
  useEffect(() => {
    if (!hasTTS()) return;
    try {
      window.speechSynthesis.getVoices();
      window.speechSynthesis.onvoiceschanged = () => {
        window.speechSynthesis.getVoices();
      };
    } catch {}
    return () => {
      try {
        // @ts-ignore
        window.speechSynthesis.onvoiceschanged = null;
      } catch {}
    };
  }, []);
  /** ---------------------------------------------------------- */

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return words;

    return words.filter((w) => {
      const nl = (w.nl || "").toLowerCase();
      const tr = (w.tr || "").toLowerCase();
      return nl.includes(q) || tr.includes(q);
    });
  }, [words, query]);

  function copyText(text: string) {
    if (typeof navigator === "undefined") return;
    navigator.clipboard?.writeText(text).catch(() => {});
  }

  function playAll() {
    if (!filtered.length) return;
    stopSpeak();

    // indeksleri kuyrukla
    queueRef.current = filtered.map((_, i) => i).slice(1);
    playingQueueRef.current = true;

    speakDutch(filtered[0].nl, 0);
  }

  return (
    <section className="rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl p-8 shadow-xl">
      {/* Header */}
      <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-8">
        <div>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/10 text-white/80 text-sm">
            📘 Kelime Listesi
            <span className="text-white/50">•</span>
            <span className="text-white/70">{filtered.length} kelime</span>
          </div>

          <h2 className="text-3xl font-extrabold text-white mt-4">
            Hollandaca Kelimeler
          </h2>
          <p className="text-white/60 mt-2 max-w-2xl">
            Kelimeleri dinle, kopyala, tekrar et. İstersen Türkçe çeviriyi gizleyip
            sadece Hollandaca çalış.
          </p>
        </div>

        {/* Controls */}
        <div className="flex flex-col sm:flex-row gap-3 sm:items-center">
          <div className="relative">
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Kelime ara (NL / TR)..."
              className="w-full sm:w-[320px] px-4 py-3 rounded-2xl bg-black/35 border border-white/10 text-white placeholder:text-white/40 outline-none focus:border-white/25"
            />
          </div>

          <button
            onClick={() => setShowTR((s) => !s)}
            className="px-4 py-3 rounded-2xl bg-white/10 hover:bg-white/15 border border-white/10 text-white font-semibold transition"
          >
            {showTR ? "TR Gizle" : "TR Göster"}
          </button>

          <button
            onClick={() => setOnlyNL((s) => !s)}
            className={`px-4 py-3 rounded-2xl border text-white font-semibold transition ${
              onlyNL
                ? "bg-blue-500/25 border-blue-500/30 hover:bg-blue-500/30"
                : "bg-white/10 border-white/10 hover:bg-white/15"
            }`}
          >
            {onlyNL ? "Sadece NL: Açık" : "Sadece NL: Kapalı"}
          </button>

          <button
            onClick={playAll}
            className="px-5 py-3 rounded-2xl bg-green-500/90 hover:bg-green-500 text-black font-extrabold transition"
            disabled={!hasTTS() || filtered.length === 0}
            title={!hasTTS() ? "Tarayıcınız TTS desteklemiyor." : ""}
          >
            🔊 Hepsini Dinle
          </button>

          <button
            onClick={stopSpeak}
            className="px-4 py-3 rounded-2xl bg-red-500/80 hover:bg-red-500 text-white font-semibold transition"
            disabled={!hasTTS()}
          >
            ⛔ Durdur
          </button>
        </div>
      </div>

      {/* List */}
      {filtered.length === 0 ? (
        <div className="rounded-3xl bg-black/25 border border-white/10 p-8 text-white/70">
          Sonuç bulunamadı.
        </div>
      ) : (
        <div className="grid lg:grid-cols-2 gap-4">
          {filtered.map((w, i) => {
            const active = speakingIndex === i;

            return (
              <div
                key={`${w.nl}-${i}`}
                className={`rounded-3xl border p-6 transition ${
                  active
                    ? "bg-white/12 border-white/25 shadow-[0_0_0_1px_rgba(255,255,255,0.10)]"
                    : "bg-black/25 border-white/10 hover:bg-white/10 hover:border-white/20"
                }`}
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="min-w-0">
                    <div className="flex items-center gap-2">
                      <span className="text-xs px-3 py-1 rounded-full bg-white/10 border border-white/10 text-white/70">
                        #{i + 1}
                      </span>

                      {active && (
                        <span className="text-xs px-3 py-1 rounded-full bg-green-500/20 border border-green-500/25 text-green-200">
                          Çalıyor…
                        </span>
                      )}
                    </div>

                    <h3 className="text-white font-extrabold text-xl mt-4 break-words">
                      {w.nl}
                    </h3>

                    {!onlyNL && (
                      <p
                        className={`mt-2 text-sm leading-relaxed break-words ${
                          showTR ? "text-white/70" : "text-white/30 blur-[2px] select-none"
                        }`}
                      >
                        {w.tr}
                      </p>
                    )}
                  </div>

                  <div className="flex flex-col gap-2 shrink-0">
                    <button
                      onClick={() => speakDutch(w.nl, i)}
                      className="px-4 py-2 rounded-2xl bg-blue-500/80 hover:bg-blue-500 text-white font-bold transition"
                      disabled={!hasTTS()}
                      title={!hasTTS() ? "Tarayıcınız TTS desteklemiyor." : "nl-NL aksanıyla dinle"}
                    >
                      🔊 NL Dinle
                    </button>

                    <button
                      onClick={() => copyText(w.nl)}
                      className="px-4 py-2 rounded-2xl bg-white/10 hover:bg-white/15 border border-white/10 text-white font-semibold transition"
                    >
                      📋 NL Kopyala
                    </button>

                    {!onlyNL && (
                      <button
                        onClick={() => copyText(w.tr)}
                        className="px-4 py-2 rounded-2xl bg-white/10 hover:bg-white/15 border border-white/10 text-white font-semibold transition"
                      >
                        📋 TR Kopyala
                      </button>
                    )}
                  </div>
                </div>

                {/* tiny footer */}
                <div className="mt-4 text-xs text-white/40">
                  İpucu: “Sadece NL” açıp tekrar ederek çalış.
                </div>
              </div>
            );
          })}
        </div>
      )}

      {!hasTTS() && (
        <div className="mt-6 rounded-3xl bg-yellow-500/10 border border-yellow-500/20 p-5 text-yellow-200 text-sm">
          Tarayıcın Text-to-Speech desteklemiyor. (Örn: bazı iOS webview’larda)
          Chrome/Edge/Safari’de deneyebilirsin.
        </div>
      )}
    </section>
  );
}

