"use client";

import Link from "next/link";

export default function QuizStartButton({
  lessonId,
  locale,
}: {
  lessonId: string;
  locale: string;
}) {
  return (
    <Link
      href={`/${locale}/lessons/${lessonId}/quiz`}
      className="px-8 py-4 rounded-2xl bg-purple-600 hover:bg-purple-700 transition text-white font-semibold shadow-xl w-full md:w-auto text-center"
    >
      🧠 Quiz Başlat
    </Link>
  );
}