"use client";

import { useEffect, useMemo, useState } from "react";
import { usePathname } from "next/navigation";

type WordPair = { nl: string; tr: string };

type Props = {
  words: WordPair[];
  lessonId?: string;

  /** ✅ Senin mevcut “sesli” component’in ne render ediyorsa buraya child olarak koyacağız */
  children?: React.ReactNode;
};

function safeKey(s: string) {
  return (s || "").toLowerCase().trim();
}

function uniqPairs(words: WordPair[]) {
  const seen = new Set<string>();
  const out: WordPair[] = [];
  for (const w of words || []) {
    const k = `${safeKey(w.nl)}__${safeKey(w.tr)}`;
    if (!w?.nl || !w?.tr) continue;
    if (seen.has(k)) continue;
    seen.add(k);
    out.push({ nl: w.nl.trim(), tr: w.tr.trim() });
  }
  return out;
}

function shuffle<T>(arr: T[]) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

type QuizQ = {
  id: string;
  promptNl: string;
  correctTr: string;
  options: string[];
};

export default function LessonContentPremium({ words, lessonId, children }: Props) {
  const pathname = usePathname();
  const list = useMemo(() => uniqPairs(words), [words]);

  const storageKey = useMemo(() => {
    const base = lessonId ? `lesson:${lessonId}` : `path:${pathname || "unknown"}`;
    return `dutchlearn:learnedWords:${base}`;
  }, [lessonId, pathname]);

  const [openCard, setOpenCard] = useState<string | null>(null);
  const [learned, setLearned] = useState<Record<string, boolean>>({});
  const [tab, setTab] = useState<"words" | "test">("words");

  const [quiz, setQuiz] = useState<QuizQ[]>([]);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(storageKey);
      if (!raw) return;
      const parsed = JSON.parse(raw) as string[];
      const map: Record<string, boolean> = {};
      for (const k of parsed || []) map[k] = true;
      setLearned(map);
    } catch {}
  }, [storageKey]);

  useEffect(() => {
    try {
      const keys = Object.keys(learned).filter((k) => learned[k]);
      localStorage.setItem(storageKey, JSON.stringify(keys));
    } catch {}
  }, [learned, storageKey]);

  const learnedCount = useMemo(
    () => Object.keys(learned).filter((k) => learned[k]).length,
    [learned]
  );

  const total = list.length;
  const progressPct = total > 0 ? Math.round((learnedCount / total) * 100) : 0;

  function toggleLearned(nl: string) {
    const k = safeKey(nl);
    setLearned((prev) => ({ ...prev, [k]: !prev[k] }));
  }

  function buildQuiz() {
    const base = shuffle(list).slice(0, Math.min(3, list.length));
    const questions: QuizQ[] = base.map((w, idx) => {
      const distractors = shuffle(
        list.filter((x) => safeKey(x.nl) !== safeKey(w.nl)).map((x) => x.tr)
      ).slice(0, 3);

      const options = shuffle([w.tr, ...distractors]).slice(0, 4);

      return {
        id: `${safeKey(w.nl)}_${idx}`,
        promptNl: w.nl,
        correctTr: w.tr,
        options,
      };
    });

    setQuiz(questions);
    setAnswers({});
    setSubmitted(false);
    setTab("test");
  }

  const score = useMemo(() => {
    if (!submitted) return 0;
    let s = 0;
    for (const q of quiz) if (answers[q.id] === q.correctTr) s++;
    return s;
  }, [submitted, quiz, answers]);

  const CardShell = ({ children: c }: { children: React.ReactNode }) => (
    <section className="rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl p-8 shadow-xl">
      {c}
    </section>
  );

  return (
    <div className="space-y-6">
      {/* ✅ Sesli sistem (eski component’in) burada kalsın */}
      {children ? <div className="space-y-6">{children}</div> : null}

      {/* Üst bar */}
      <CardShell>
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <div className="text-white font-extrabold text-2xl">📘 Ders İçeriği</div>
            <div className="text-white/60 mt-1">
              Kartlardan çalış, “Öğrendim” ile ilerlemeni kaydet, mini test çöz.
            </div>

            <div className="mt-4 flex items-center gap-3">
              <div className="text-white/70 text-sm">
                İlerleme: <span className="text-white font-semibold">{learnedCount}</span> /{" "}
                <span className="text-white/80">{total}</span> ({progressPct}%)
              </div>

              <button
                onClick={() => setLearned({})}
                className="text-xs px-3 py-1.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-white/70 transition"
              >
                Sıfırla
              </button>
            </div>

            <div className="mt-3 h-2 w-full max-w-md rounded-full bg-white/10 overflow-hidden">
              <div className="h-full bg-white/40 rounded-full transition-all" style={{ width: `${progressPct}%` }} />
            </div>
          </div>

          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setTab("words")}
              className={`px-4 py-2 rounded-2xl border text-sm font-semibold transition ${
                tab === "words"
                  ? "bg-white/15 border-white/20 text-white"
                  : "bg-white/5 border-white/10 text-white/70 hover:bg-white/10"
              }`}
            >
              Kelimeler
            </button>

            <button
              onClick={buildQuiz}
              disabled={list.length === 0}
              className="px-4 py-2 rounded-2xl bg-emerald-500/80 hover:bg-emerald-500 border border-emerald-400/30 text-sm font-extrabold text-black transition disabled:opacity-50"
            >
              Mini Test (3 Soru)
            </button>
          </div>
        </div>
      </CardShell>

      {/* Kelimeler */}
      {tab === "words" && (
        <CardShell>
          <div className="flex items-center justify-between gap-4 mb-6">
            <div>
              <h2 className="text-white font-extrabold text-xl">Kelimeler</h2>
              <p className="text-white/60 text-sm mt-1">
                Hover’da çeviri görünür. Kartı tıklayınca sabit açılır.
              </p>
            </div>

            <div className="text-white/60 text-sm">
              Toplam: <span className="text-white/80 font-semibold">{total}</span>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {list.map((w) => {
              const k = safeKey(w.nl);
              const isLearned = !!learned[k];
              const isOpen = openCard === k;

              return (
                <div
                  key={k}
                  className={`group rounded-3xl border backdrop-blur-xl p-5 shadow-lg transition cursor-pointer ${
                    isLearned
                      ? "bg-white/10 border-white/20"
                      : "bg-black/20 border-white/10 hover:bg-white/10 hover:border-white/20"
                  }`}
                  onClick={() => setOpenCard((prev) => (prev === k ? null : k))}
                >
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <div className="text-white font-extrabold text-lg">{w.nl}</div>

                      <div
                        className={`mt-2 text-white/70 text-sm leading-relaxed transition ${
                          isOpen ? "opacity-100" : "opacity-0 group-hover:opacity-100"
                        }`}
                      >
                        {w.tr}
                      </div>

                      {!isOpen && <div className="mt-2 text-white/40 text-xs">İpucu: Hover veya tıkla</div>}
                    </div>

                    <div className="flex flex-col items-end gap-2">
                      <span
                        className={`text-xs px-2.5 py-1 rounded-full border ${
                          isLearned
                            ? "bg-emerald-500/20 border-emerald-400/30 text-emerald-200"
                            : "bg-white/5 border-white/10 text-white/50"
                        }`}
                      >
                        {isLearned ? "Öğrenildi ✅" : "Yeni"}
                      </span>

                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          toggleLearned(w.nl);
                        }}
                        className={`text-xs px-3 py-2 rounded-2xl border font-semibold transition ${
                          isLearned
                            ? "bg-white/5 hover:bg-white/10 border-white/10 text-white/70"
                            : "bg-emerald-500/80 hover:bg-emerald-500 border-emerald-400/30 text-black"
                        }`}
                      >
                        {isLearned ? "Geri al" : "Öğrendim"}
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </CardShell>
      )}

      {/* Mini Test */}
      {tab === "test" && (
        <CardShell>
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-6">
            <div>
              <h2 className="text-white font-extrabold text-xl">🧠 Mini Test</h2>
              <p className="text-white/60 text-sm mt-1">3 soru — NL kelimenin TR karşılığını seç.</p>
            </div>

            <div className="flex gap-2">
              <button
                onClick={() => setTab("words")}
                className="px-4 py-2 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 text-white/70 font-semibold transition"
              >
                Kelimelere dön
              </button>
              <button
                onClick={buildQuiz}
                className="px-4 py-2 rounded-2xl bg-white/10 hover:bg-white/15 border border-white/10 text-white font-extrabold transition"
              >
                Yeni test oluştur
              </button>
            </div>
          </div>

          <div className="space-y-5">
            {quiz.map((q, idx) => {
              const selected = answers[q.id];
              const isCorrect = submitted && selected === q.correctTr;
              const isWrong = submitted && selected && selected !== q.correctTr;

              return (
                <div key={q.id} className="rounded-3xl bg-black/20 border border-white/10 p-6">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <div className="text-white/60 text-sm">Soru {idx + 1}</div>
                      <div className="text-white font-extrabold text-lg mt-1">“{q.promptNl}” ne demek?</div>
                    </div>

                    {submitted && (
                      <span
                        className={`text-xs px-2.5 py-1 rounded-full border ${
                          isCorrect
                            ? "bg-emerald-500/20 border-emerald-400/30 text-emerald-200"
                            : "bg-rose-500/20 border-rose-400/30 text-rose-200"
                        }`}
                      >
                        {isCorrect ? "Doğru ✅" : "Yanlış"}
                      </span>
                    )}
                  </div>

                  <div className="mt-4 grid sm:grid-cols-2 gap-3">
                    {q.options.map((opt) => {
                      const active = selected === opt;

                      const style = submitted
                        ? opt === q.correctTr
                          ? "border-emerald-400/30 bg-emerald-500/10"
                          : active
                          ? "border-rose-400/30 bg-rose-500/10"
                          : "border-white/10 bg-white/5"
                        : active
                        ? "border-white/30 bg-white/10"
                        : "border-white/10 bg-white/5 hover:bg-white/10 hover:border-white/20";

                      return (
                        <button
                          key={opt}
                          disabled={submitted}
                          onClick={() => setAnswers((p) => ({ ...p, [q.id]: opt }))}
                          className={`text-left rounded-2xl border px-4 py-3 text-white/90 transition ${style}`}
                        >
                          {opt}
                        </button>
                      );
                    })}
                  </div>

                  {submitted && isWrong && (
                    <div className="mt-4 text-sm text-white/70">
                      Doğru cevap: <span className="text-white font-semibold">{q.correctTr}</span>
                    </div>
                  )}
                </div>
              );
            })}

            <div className="flex items-center justify-between gap-4">
              <div className="text-white/70 text-sm">
                {submitted ? (
                  <>
                    Skor: <span className="text-white font-extrabold">{score}</span> /{" "}
                    <span className="text-white/80">{quiz.length}</span>
                  </>
                ) : (
                  "Cevaplarını seç ve bitir."
                )}
              </div>

              {!submitted ? (
                <button
                  onClick={() => setSubmitted(true)}
                  className="px-5 py-3 rounded-2xl bg-emerald-500/80 hover:bg-emerald-500 border border-emerald-400/30 text-black font-extrabold transition"
                >
                  Testi Bitir
                </button>
              ) : (
                <button
                  onClick={() => {
                    const correct = quiz.filter((q) => answers[q.id] === q.correctTr);
                    if (correct.length) {
                      setLearned((prev) => {
                        const next = { ...prev };
                        for (const q of correct) next[safeKey(q.promptNl)] = true;
                        return next;
                      });
                    }
                    buildQuiz();
                  }}
                  className="px-5 py-3 rounded-2xl bg-white/10 hover:bg-white/15 border border-white/10 text-white font-extrabold transition"
                >
                  Yeni Test + Doğruları Kaydet
                </button>
              )}
            </div>
          </div>
        </CardShell>
      )}
    </div>
  );
}