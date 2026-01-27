import { db } from "@/lib/firebase";
import { doc, getDoc } from "firebase/firestore";
import LessonContent from "@/components/lesson/LessonContent";
import Link from "next/link";
import { getTranslations } from "next-intl/server";

type LocaleKey = "tr" | "nl" | "en" | "ar" | "ku";

type LessonDoc = {
  title: Record<LocaleKey, string>;
  description: Record<LocaleKey, string>;
  content: Record<LocaleKey, string>;
  level: "BEGINNER" | "INTERMEDIATE" | "ADVANCED";
  updatedAt?: number;
};

// content içinden kelimeleri yakalayan parser
// Beklenen satır formatları:
// 1. **been** — bacak
// 1) been - bacak
// - been — bacak
function parseWordsFromContent(markdown: string) {
  const lines = (markdown || "").split("\n");
  const out: { nl: string; tr: string }[] = [];

  for (const raw of lines) {
    const line = raw.trim();
    if (!line) continue;

    // bold varsa temizle
    const cleaned = line.replace(/\*\*/g, "");

    // numara / dash prefix temizle
    const noPrefix = cleaned.replace(/^(\d+[\.\)]\s+|-+\s+)/, "");

    // ayırıcılar: — veya - veya :
    const parts =
      noPrefix.split(" — ").length >= 2
        ? noPrefix.split(" — ")
        : noPrefix.split(" - ").length >= 2
        ? noPrefix.split(" - ")
        : noPrefix.split(": ").length >= 2
        ? noPrefix.split(": ")
        : null;

    if (!parts) continue;

    const nl = (parts[0] || "").trim();
    const tr = (parts[1] || "").trim();
    if (nl && tr) out.push({ nl, tr });
  }

  return out;
}

export default async function LessonDetailPage({
  params,
}: {
  params: { locale: string; id: string };
}) {
  const locale = (params.locale || "tr") as LocaleKey;
  const id = params.id;

  const t = await getTranslations({ locale });

  const snap = await getDoc(doc(db, "lessons", id));
  if (!snap.exists()) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center text-white/70">
        {t("common.notFound")}
      </div>
    );
  }

  const lesson = snap.data() as LessonDoc;

  const title =
    lesson.title?.[locale] || lesson.title?.tr || `${t("lessons.defaultLesson")} #${id}`;
  const desc = lesson.description?.[locale] || lesson.description?.tr || "";

  const content = lesson.content?.[locale] || lesson.content?.tr || "";
  const words = parseWordsFromContent(content);

  return (
    <main className="w-full max-w-6xl mx-auto px-6 py-12 space-y-8">
      {/* Header */}
      <div className="rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl p-10 shadow-xl">
        <div className="flex items-start justify-between gap-4 flex-col md:flex-row">
          <div>
            <h1 className="text-4xl font-extrabold text-white mb-2">{title}</h1>
            <p className="text-white/60">{desc}</p>
          </div>

          <Link
            href={`/${locale}/lessons`}
            className="px-5 py-3 rounded-2xl bg-white/10 hover:bg-white/15 border border-white/10 text-white font-semibold transition"
          >
            ← {t("common.back")}
          </Link>
        </div>
      </div>

      {/* Words Section */}
      {words.length > 0 ? (
        <LessonContent words={words} />
      ) : (
        <section className="rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl p-8 shadow-xl text-white/70">
          İçerikte kelime listesi bulunamadı. (content formatını kontrol et)
        </section>
      )}
    </main>
  );
}