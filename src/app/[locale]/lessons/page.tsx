import Link from "next/link";
import { getLessons } from "@/lib/lessonService";

export default async function LessonsPage({ params }: { params: { locale: string } }) {
  const { locale } = params;
  const lessons = await getLessons().catch(() => []);

  return (
    <section className="max-w-5xl mx-auto">
      <h1 className="text-3xl font-extrabold mb-8">Dersler</h1>

      {lessons.length === 0 ? (
        <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
          <p className="text-white/70">Henüz ders eklenmemiş.</p>
          <p className="text-white/40 text-sm mt-2">
            Admin panelden Firestore&apos;a <code>lessons</code> koleksiyonuna kayıt ekle.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {lessons.map((lesson) => {
            const title = lesson.title?.[locale] || lesson.title?.tr || "Ders";
            const desc = lesson.description?.[locale] || lesson.description?.tr || "";
            return (
              <Link
                key={lesson.id}
                href={`/${locale}/lessons/${lesson.id}`}
                className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition"
              >
                <h3 className="text-xl font-bold mb-2">{title}</h3>
                <p className="text-white/60">{desc}</p>
                <p className="text-white/30 text-xs mt-4">ID: {lesson.id}</p>
              </Link>
            );
          })}
        </div>
      )}
    </section>
  );
}
