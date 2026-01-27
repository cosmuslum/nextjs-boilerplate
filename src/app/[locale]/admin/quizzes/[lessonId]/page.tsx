"use client";

import { useEffect, useState } from "react";
import { useSearchParams, useParams } from "next/navigation";
import { useTranslations } from "next-intl";
import { addQuiz, deleteQuiz, getAllQuizzes } from "@/lib/quizService";

type Quiz = {
  id: string;
  lessonId: string;
  question: Record<string, string>;
  options: Record<string, string[]>;
  correctIndex: number;
};

export default function AdminQuizzesPage() {
  const t = useTranslations();
  const params = useParams() as { locale?: string };
  const locale = params?.locale || "tr";

  const searchParams = useSearchParams();
  const presetLessonId = searchParams.get("lessonId") || "";

  const [quizzes, setQuizzes] = useState<Quiz[]>([]);
  const [loading, setLoading] = useState(true);

  const [lessonId, setLessonId] = useState(presetLessonId);

  const [questionTR, setQuestionTR] = useState("");
  const [questionNL, setQuestionNL] = useState("");
  const [questionEN, setQuestionEN] = useState("");
  const [questionAR, setQuestionAR] = useState("");
  const [questionKU, setQuestionKU] = useState("");

  const [opt1, setOpt1] = useState("");
  const [opt2, setOpt2] = useState("");
  const [opt3, setOpt3] = useState("");
  const [opt4, setOpt4] = useState("");

  const [correctIndex, setCorrectIndex] = useState(0);

  const fetchQuizzes = async () => {
    setLoading(true);
    const data = await getAllQuizzes();
    setQuizzes(data as any);
    setLoading(false);
  };

  useEffect(() => {
    fetchQuizzes();
  }, []);

  const createQuiz = async () => {
    if (!lessonId.trim() || !questionTR.trim()) {
      alert(t("adminQuiz.alertRequired"));
      return;
    }

    // Not: seçenekleri şimdilik ortak giriyoruz (istersen ayrı alan da yaparız)
    await addQuiz({
      lessonId: lessonId.trim(),
      question: {
        tr: questionTR,
        nl: questionNL,
        en: questionEN,
        ar: questionAR,
        ku: questionKU,
      },
      options: {
        tr: [opt1, opt2, opt3, opt4],
        nl: [opt1, opt2, opt3, opt4],
        en: [opt1, opt2, opt3, opt4],
        ar: [opt1, opt2, opt3, opt4],
        ku: [opt1, opt2, opt3, opt4],
      },
      correctIndex,
    });

    setQuestionTR("");
    setQuestionNL("");
    setQuestionEN("");
    setQuestionAR("");
    setQuestionKU("");
    setOpt1("");
    setOpt2("");
    setOpt3("");
    setOpt4("");
    setCorrectIndex(0);

    fetchQuizzes();
  };

  const removeQuiz = async (quizId: string) => {
    if (!confirm(t("adminQuiz.confirmDelete", { id: quizId }))) return;
    await deleteQuiz(quizId);
    fetchQuizzes();
  };

  const filtered = lessonId ? quizzes.filter((q) => q.lessonId === lessonId) : quizzes;

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="bg-white/5 border border-white/10 rounded-3xl p-8">
        <h1 className="text-2xl font-bold text-white">{t("adminQuiz.title")}</h1>
        <p className="text-white/60 mt-2">{t("adminQuiz.subtitle")}</p>
      </div>

      {/* Add Quiz */}
      <div className="bg-white/5 border border-white/10 rounded-3xl p-8 space-y-4">
        <h2 className="text-white font-semibold text-lg">{t("adminQuiz.addTitle")}</h2>

        <input
          value={lessonId}
          onChange={(e) => setLessonId(e.target.value)}
          placeholder={t("adminQuiz.lessonIdPlaceholder")}
          className="px-4 py-3 rounded-xl bg-black/40 border border-white/10 text-white w-full"
        />

        <div className="grid md:grid-cols-2 gap-4">
          <input
            value={questionTR}
            onChange={(e) => setQuestionTR(e.target.value)}
            placeholder={t("adminQuiz.questionTR")}
            className="px-4 py-3 rounded-xl bg-black/40 border border-white/10 text-white"
          />
          <input
            value={questionNL}
            onChange={(e) => setQuestionNL(e.target.value)}
            placeholder={t("adminQuiz.questionNL")}
            className="px-4 py-3 rounded-xl bg-black/40 border border-white/10 text-white"
          />
          <input
            value={questionEN}
            onChange={(e) => setQuestionEN(e.target.value)}
            placeholder={t("adminQuiz.questionEN")}
            className="px-4 py-3 rounded-xl bg-black/40 border border-white/10 text-white"
          />
          <input
            value={questionAR}
            onChange={(e) => setQuestionAR(e.target.value)}
            placeholder={t("adminQuiz.questionAR")}
            className="px-4 py-3 rounded-xl bg-black/40 border border-white/10 text-white"
          />
          <input
            value={questionKU}
            onChange={(e) => setQuestionKU(e.target.value)}
            placeholder={t("adminQuiz.questionKU")}
            className="px-4 py-3 rounded-xl bg-black/40 border border-white/10 text-white md:col-span-2"
          />
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          <input
            value={opt1}
            onChange={(e) => setOpt1(e.target.value)}
            placeholder={t("adminQuiz.opt1")}
            className="px-4 py-3 rounded-xl bg-black/40 border border-white/10 text-white"
          />
          <input
            value={opt2}
            onChange={(e) => setOpt2(e.target.value)}
            placeholder={t("adminQuiz.opt2")}
            className="px-4 py-3 rounded-xl bg-black/40 border border-white/10 text-white"
          />
          <input
            value={opt3}
            onChange={(e) => setOpt3(e.target.value)}
            placeholder={t("adminQuiz.opt3")}
            className="px-4 py-3 rounded-xl bg-black/40 border border-white/10 text-white"
          />
          <input
            value={opt4}
            onChange={(e) => setOpt4(e.target.value)}
            placeholder={t("adminQuiz.opt4")}
            className="px-4 py-3 rounded-xl bg-black/40 border border-white/10 text-white"
          />
        </div>

        <div className="flex items-center gap-3">
          <span className="text-white/70 text-sm">{t("adminQuiz.correct")}</span>
          <select
            value={correctIndex}
            onChange={(e) => setCorrectIndex(Number(e.target.value))}
            className="px-4 py-2 rounded-xl bg-black/40 border border-white/10 text-white"
          >
            <option value={0}>1</option>
            <option value={1}>2</option>
            <option value={2}>3</option>
            <option value={3}>4</option>
          </select>
        </div>

        <button
          onClick={createQuiz}
          className="px-6 py-3 rounded-xl bg-green-500/80 hover:bg-green-500 text-white font-semibold transition"
        >
          {t("adminQuiz.addButton")}
        </button>
      </div>

      {/* Quiz list */}
      <div className="bg-white/5 border border-white/10 rounded-3xl p-8">
        <h2 className="text-white font-semibold text-lg mb-4">
          {t("adminQuiz.listTitle")}{" "}
          {lessonId ? `(${t("adminQuiz.filterLessonId", { id: lessonId })})` : ""}
        </h2>

        {loading ? (
          <div className="text-white/70">{t("common.loading")}</div>
        ) : filtered.length === 0 ? (
          <div className="text-white/70">{t("adminQuiz.none")}</div>
        ) : (
          <div className="space-y-3">
            {filtered.map((q) => (
              <div
                key={q.id}
                className="flex items-center justify-between bg-black/30 border border-white/10 rounded-2xl p-4"
              >
                <div>
                  <div className="text-white font-semibold">
                    {t("adminQuiz.lessonIdLabel")}: {q.lessonId}
                  </div>

                  {/* ekranda aktif dilde göster, yoksa TR */}
                  <div className="text-white/70 text-sm">
                    {q.question?.[locale] || q.question?.tr || "-"}
                  </div>
                </div>

                <button
                  onClick={() => removeQuiz(q.id)}
                  className="px-4 py-2 rounded-xl bg-red-500/70 hover:bg-red-500 text-white text-sm font-semibold transition"
                >
                  {t("adminQuiz.deleteButton")}
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}