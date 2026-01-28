import Link from "next/link";
import { getLessonBySlug, lessons } from "@/lib/lessons";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return lessons.map((l) => ({ slug: l.slug }));
}

export default function LessonDetailPage({ params }: { params: { slug: string } }) {
  const lesson = getLessonBySlug(params.slug);
  if (!lesson) return notFound();

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold">{lesson.title}</h1>
          <p className="muted mt-1">{lesson.summary}</p>
        </div>
        <Link className="btn-ghost" href="/dersler">← Geri</Link>
      </div>

      <article className="card p-8 space-y-4">
        {lesson.content.map((p, i) => (
          <p key={i} className="leading-7 text-zinc-800">
            {p}
          </p>
        ))}
      </article>
    </div>
  );
}
