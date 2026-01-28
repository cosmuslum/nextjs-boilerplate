import { lessons } from "../../../lib/lessons";
import { notFound } from "next/navigation";

export default function LessonPage({ params }) {
  const lesson = lessons.find((l) => l.slug === params.slug);
  if (!lesson) return notFound();

  return (
    <div className="mx-auto max-w-4xl px-4 py-10">
      <a
        href="/dersler"
        className="inline-flex rounded-xl border border-white/15 bg-white/5 px-4 py-2 text-sm text-white/80 hover:bg-white/10"
      >
        ← Derslere geri
      </a>

      <h1 className="mt-6 text-3xl font-semibold text-white">{lesson.title}</h1>
      <p className="mt-2 text-white/70">{lesson.summary}</p>

      <div className="mt-8 space-y-4 rounded-2xl border border-white/10 bg-white/5 p-6">
        {Array.isArray(lesson.content)
          ? lesson.content.map((p, i) => (
              <p key={i} className="leading-7 text-white/80">
                {p}
              </p>
            ))
          : (
            <p className="leading-7 text-white/80">{lesson.content}</p>
          )}
      </div>
    </div>
  );
}
