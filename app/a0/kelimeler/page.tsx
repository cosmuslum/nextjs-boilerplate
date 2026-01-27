"use client";

import React, { useEffect, useMemo, useState } from "react";
import { speakDutch, getDutchVoices, saveVoiceName, getSavedVoiceName } from "../../_shared/tts";

type Item = { nl: string; tr: string; note?: string };

const WORDS: Item[] = [
  { nl: "huis", tr: "ev", note: "huyss gibi" },
  { nl: "school", tr: "okul" },
  { nl: "werk", tr: "iş" },
  { nl: "vriend", tr: "arkadaş" },
  { nl: "vrouw", tr: "kadın" },
  { nl: "man", tr: "erkek" },
  { nl: "kind", tr: "çocuk" },
  { nl: "water", tr: "su" },
  { nl: "brood", tr: "ekmek" },
  { nl: "melk", tr: "süt" },
  { nl: "goed", tr: "iyi" },
  { nl: "slecht", tr: "kötü" },
  { nl: "groot", tr: "büyük" },
  { nl: "klein", tr: "küçük" },
  { nl: "vandaag", tr: "bugün" },
  { nl: "morgen", tr: "yarın" },
];

const PHRASES: Item[] = [
  { nl: "Hallo", tr: "Merhaba" },
  { nl: "Goedemorgen", tr: "Günaydın" },
  { nl: "Goedenavond", tr: "İyi akşamlar" },
  { nl: "Tot ziens", tr: "Görüşürüz" },
  { nl: "Dank je wel", tr: "Teşekkür ederim" },
  { nl: "Alsjeblieft", tr: "Lütfen / Buyurun" },
  { nl: "Sorry", tr: "Özür dilerim" },
  { nl: "Ik begrijp het niet", tr: "Anlamıyorum" },
  { nl: "Kunt u dat herhalen?", tr: "Tekrar eder misiniz?" },
  { nl: "Waar is het toilet?", tr: "Tuvalet nerede?" },
];

function shuffle<T>(arr: T[]) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

export default function A0KelimelerPage() {
  // Mini test
  const quizPool = useMemo(() => shuffle([...WORDS, ...PHRASES]).slice(0, 10), []);
  const [idx, setIdx] = useState(0);
  const [picked, setPicked] = useState<string | null>(null);
  const [score, setScore] = useState(0);

  const current = quizPool[idx];

  const options = useMemo(() => {
    if (!current) return [];
    const others = shuffle(quizPool.filter((x) => x.nl !== current.nl)).slice(0, 3);
    return shuffle([current, ...others]).map((x) => x.tr);
  }, [idx]);

  const onAnswer = (ans: string) => {
    if (!current) return;
    setPicked(ans);
    if (ans === current.tr) setScore((s) => s + 1);
    setTimeout(() => {
      setPicked(null);
      setIdx((i) => Math.min(i + 1, quizPool.length));
    }, 750);
  };

  const resetQuiz = () => window.location.reload();

  return (
    <main style={s.page}>
      <div style={s.container}>
        <h1 style={s.h1}>A0 – Kelimeler</h1>
        <p style={s.sub}>
          Türkçe → Hollandaca. Her kartta <b>🔊</b> ile net telaffuz.
        </p>

        <VoicePicker />

        <section style={s.section}>
          <h2 style={s.h2}>1) Temel kelimeler</h2>
          <div style={s.grid}>
            {WORDS.map((w) => (
              <div key={w.nl} style={s.card}>
                <div style={s.row}>
                  <div>
                    <div style={s.nl}>{w.nl}</div>
                    <div style={s.tr}>{w.tr}</div>
                    {w.note ? <div style={s.note}>{w.note}</div> : null}
                  </div>
                  <button style={s.play} onClick={() => speakDutch(w.nl)}>
                    🔊
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section style={s.section}>
          <h2 style={s.h2}>2) Günlük kalıplar</h2>
          <div style={s.grid}>
            {PHRASES.map((p) => (
              <div key={p.nl} style={s.card}>
                <div style={s.row}>
                  <div>
                    <div style={s.nl}>{p.nl}</div>
                    <div style={s.tr}>{p.tr}</div>
                  </div>
                  <button style={s.play} onClick={() => speakDutch(p.nl)}>
                    🔊
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section style={s.section}>
          <h2 style={s.h2}>3) Mini test (Dinle → Türkçesini seç)</h2>

          {idx >= quizPool.length ? (
            <div style={s.quizDone}>
              <div style={s.quizTitle}>Bitti! 🎉</div>
              <div style={s.quizScore}>
                Skor: {score} / {quizPool.length}
              </div>
              <button style={s.bigBtn} onClick={resetQuiz}>
                Tekrar başlat
              </button>
            </div>
          ) : (
            <div style={s.quizBox}>
              <div style={s.quizTop}>
                <div style={s.quizCounter}>
                  Soru {idx + 1} / {quizPool.length}
                </div>
                <button style={s.bigBtn} onClick={() => speakDutch(current.nl)}>
                  🔊 Dinle
                </button>
              </div>

              <div style={s.quizWord}>{current.nl}</div>

              <div style={s.options}>
                {options.map((o) => {
                  const isCorrect = picked && o === current.tr;
                  const isWrong = picked && o === picked && o !== current.tr;

                  return (
                    <button
                      key={o}
                      onClick={() => (picked ? null : onAnswer(o))}
                      style={{
                        ...s.optBtn,
                        ...(isCorrect ? s.correct : {}),
                        ...(isWrong ? s.wrong : {}),
                      }}
                    >
                      {o}
                    </button>
                  );
                })}
              </div>

              <div style={s.quizHint}>
                İpucu: Önce 🔊 dinle, sonra anlamı seç.
              </div>
            </div>
          )}
        </section>

        <div style={s.navRow}>
          <a href="/a0" style={s.linkBtn}>← A0 Ana Sayfa</a>
          <a href="/a0/cumleler" style={s.linkBtn}>Sonraki: Cümleler →</a>
        </div>
      </div>
    </main>
  );
}

function VoicePicker() {
  const [voices, setVoices] = useState<SpeechSynthesisVoice[]>([]);
  const [selected, setSelected] = useState<string>("");

  useEffect(() => {
    const load = () => {
      const v = getDutchVoices();
      setVoices(v);
      setSelected(getSavedVoiceName() || (v[0]?.name ?? ""));
    };
    load();
    window.speechSynthesis?.addEventListener?.("voiceschanged", load as any);
    return () => window.speechSynthesis?.removeEventListener?.("voiceschanged", load as any);
  }, []);

  return (
    <div style={s.voiceBox}>
      <div style={s.voiceTitle}>Hollandaca ses</div>
      <select
        value={selected}
        onChange={(e) => {
          setSelected(e.target.value);
          saveVoiceName(e.target.value);
        }}
        style={s.select}
      >
        {voices.length === 0 ? (
          <option value="">Dutch (nl) voice bulunamadı</option>
        ) : (
          voices.map((v) => (
            <option key={v.name} value={v.name}>
              {v.name} — {v.lang}
            </option>
          ))
        )}
      </select>
      <button style={s.testBtn} onClick={() => speakDutch("Goedemorgen. Dit is Nederlands.")}>
        🔊 Test
      </button>
      <div style={s.voiceHint}>
        Net telaffuz için cihazında <b>Dutch (nl-NL)</b> voice yüklü olmalı.
      </div>
    </div>
  );
}

const s: Record<string, React.CSSProperties> = {
  page: { minHeight: "100vh", background: "#070A12", color: "white", padding: "32px 0" },
  container: { maxWidth: 1100, margin: "0 auto", padding: "0 16px" },
  h1: { fontSize: 34, marginBottom: 6 },
  sub: { opacity: 0.75, marginBottom: 12, lineHeight: 1.6 },

  voiceBox: {
    marginTop: 10,
    marginBottom: 18,
    background: "rgba(255,255,255,0.04)",
    border: "1px solid rgba(255,255,255,0.10)",
    borderRadius: 14,
    padding: 12,
    display: "flex",
    gap: 10,
    alignItems: "center",
    flexWrap: "wrap",
  },
  voiceTitle: { fontWeight: 900, opacity: 0.9 },
  select: {
    padding: "10px 12px",
    borderRadius: 12,
    background: "rgba(0,0,0,0.25)",
    color: "white",
    border: "1px solid rgba(255,255,255,0.14)",
    minWidth: 260,
  },
  testBtn: {
    cursor: "pointer",
    border: "none",
    borderRadius: 12,
    padding: "10px 12px",
    background: "rgba(120,140,255,0.95)",
    color: "#0B1020",
    fontWeight: 950,
  },
  voiceHint: { fontSize: 12, opacity: 0.65 },

  section: { marginTop: 24 },
  h2: { fontSize: 18, marginBottom: 12 },
  grid: { display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))", gap: 14 },
  card: { background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.10)", borderRadius: 16, padding: 14 },
  row: { display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: 10 },
  nl: { fontSize: 18, fontWeight: 950 },
  tr: { marginTop: 4, opacity: 0.9 },
  note: { marginTop: 6, fontSize: 12, opacity: 0.65, lineHeight: 1.4 },
  play: { cursor: "pointer", border: "none", borderRadius: 12, padding: "10px 12px", background: "rgba(0,200,255,0.18)", color: "white", fontWeight: 950 },

  quizBox: { background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.10)", borderRadius: 16, padding: 16 },
  quizTop: { display: "flex", alignItems: "center", justifyContent: "space-between", gap: 12, flexWrap: "wrap" },
  quizCounter: { opacity: 0.75 },
  quizWord: { fontSize: 28, fontWeight: 950, marginTop: 12, marginBottom: 12 },
  options: { display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 10 },
  optBtn: { cursor: "pointer", padding: "12px 12px", borderRadius: 12, border: "1px solid rgba(255,255,255,0.12)", background: "rgba(255,255,255,0.06)", color: "white", fontWeight: 900 },
  correct: { border: "1px solid rgba(0,255,160,0.4)", background: "rgba(0,255,160,0.12)" },
  wrong: { border: "1px solid rgba(255,80,80,0.45)", background: "rgba(255,80,80,0.12)" },
  quizHint: { marginTop: 10, fontSize: 12, opacity: 0.65, lineHeight: 1.5 },

  quizDone: { background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.10)", borderRadius: 16, padding: 16, textAlign: "center" },
  quizTitle: { fontSize: 22, fontWeight: 950 },
  quizScore: { marginTop: 8, opacity: 0.85, marginBottom: 12 },
  bigBtn: { cursor: "pointer", border: "none", borderRadius: 12, padding: "10px 12px", background: "rgba(120,140,255,0.95)", color: "#0B1020", fontWeight: 950 },

  navRow: { marginTop: 22, display: "flex", justifyContent: "space-between", gap: 10, flexWrap: "wrap" },
  linkBtn: { textDecoration: "none", color: "rgba(255,255,255,0.92)", background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.12)", padding: "10px 12px", borderRadius: 12, fontWeight: 900 },
};
