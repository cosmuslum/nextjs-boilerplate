"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { getQuizzesByLessonId } from "@/lib/quizService";

export default function LessonQuizPage() {
  const { locale, id } = useParams<{ locale: string; id: string }>();
  const router = useRouter();

  const [quizzes, setQuizzes] = useState<any[]>([]);
  const [index, setIndex] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [correct, setCorrect] = useState<number>(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    (async () => {
      const data = await getQuizzesByLessonId(id);
      data.sort((a: any, b: any) => (a.order || 0) - (b.order || 0));
      setQuizzes(data);
    })();
  }, [id]);

  if (quizzes.length === 0) {
    return <div className="text-white/70">Bu ders için quiz yok.</div>;
  }

  const q = quizzes[index];
  const question = q.question?.[locale] || q.question?.tr;
  const options = q.options?.[locale] || q.options?.tr;

  const submit = () => {
    if (selected === null) return;

    if (selected === q.correctIndex) setCorrect((c) => c + 1);

    setSelected(null);

    if (index + 1 >= quizzes.length) {
      setDone(true);
    } else {
      setIndex((i) => i + 1);
    }
  };

  if (done) {
    return (
      <div className="bg-white/5 border border-white/10 rounded-3xl p-8 text-center">
        <h1 className="text-3xl font-extrabold text-white mb-2">Quiz Tamamlandı ✅</h1>
        <p className="text-white/70 mb-6">
          Skor: {correct} / {quizzes.length}
        </p>
        <button
          onClick={() => router.push(`/${locale}/lessons/${id}`)}
          className="px-5 py-3 rounded-xl bg-green-500/80 hover:bg-green-500 text-white font-semibold transition"
        >
          Derse Dön
        </button>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="bg-white/5 border border-white/10 rounded-3xl p-8">
        <h1 className="text-2xl font-bold text-white">
          Quiz {index + 1} / {quizzes.length}
        </h1>
        <p className="text-white/70 mt-2">{question}</p>
      </div>

      <div className="grid gap-3">
        {options.map((opt: string, i: number) => (
          <button
            key={i}
            onClick={() => setSelected(i)}
            className={`text-left px-5 py-4 rounded-2xl border transition
              ${
                selected === i
                  ? "bg-white/15 border-white/30 text-white"
                  : "bg-white/5 border-white/10 hover:bg-white/10 text-white/90"
              }`}
          >
            {opt}
          </button>
        ))}
      </div>

      <button
        onClick={submit}
        className="px-6 py-3 rounded-xl bg-blue-500/80 hover:bg-blue-500 text-white font-semibold transition"
      >
        Cevabı Gönder →
      </button>
    </div>
  );
}