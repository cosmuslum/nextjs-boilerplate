import Link from "next/link";
import type { Lesson } from "@/lib/lessons";

export default function LessonCard({ lesson }: { lesson: Lesson }) {
  return (
    <Link
      href={`/dersler/${lesson.slug}`}
      className="card p-6 hover:bg-zinc-50 transition"
    >
      <div className="flex items-start justify-between gap-3">
        <div>
          <h3 className="font-semibold">{lesson.title}</h3>
          <p className="muted mt-1">{lesson.summary}</p>
        </div>
        <span className="text-xs rounded-xl border border-zinc-200 px-2 py-1 text-zinc-700">
          {lesson.level}
        </span>
      </div>
    </Link>
  );
}
