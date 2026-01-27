import Link from "next/link";
import { getLessonById } from "@/lib/lessonService";

export default async function LessonDetailPage({
  params
}: {
  params: { locale: string; id: string };
}) {
  const { locale, id } = params;

  const lesson = await getLessonById(id);

  if (!lesson) {
    return (
      <section className="max-w-3xl mx-auto">
        <div className="bg-white/5 border border-white/10 rounded-2xl p-8 text-center">
          <h2 className="text-2xl font-bold mb-2">Ders bulunamadı</h2>
          <p className="text-white/60 mb-6">ID: {id}</p>
          <Link href={`/${locale}/lessons`} className="px-5 py-3 rounded-xl bg-white/10 hover:bg-white/15 border border-white/10 transition inline-flex">
            ⬅ Derslere Dön
          </Link>
        </div>
      </section>
    );
  }

  const title = lesson.title?.[locale] || lesson.title?.tr || "Ders";
  const content =
    lesson.content?.[locale] ||
    lesson.content?.tr ||
    "Bu dersin içeriği yakında eklenecek.";

  return (
    <section className="max-w-3xl mx-auto">
      <div className="flex items-center justify-between mb-6">
        <Link href={`/${locale}/lessons`} className="text-white/80 hover:text-white transition">
          ⬅ Derslere Dön
        </Link>
        <Link
          href={`/${locale}/lessons/${id}/quiz`}
          className="px-5 py-2.5 rounded-xl bg-green-500/80 hover:bg-green-500 text-black font-semibold transition"
        >
          Quiz&apos;e Başla ✅
        </Link>
      </div>

      <div className="bg-white/5 border border-white/10 rounded-3xl p-10 backdrop-blur-md shadow-xl">
        <h1 className="text-3xl font-extrabold mb-4">{title}</h1>
        <article className="text-white/90 leading-8 text-lg whitespace-pre-line">
          {content}
        </article>
      </div>
    </section>
  );
}
