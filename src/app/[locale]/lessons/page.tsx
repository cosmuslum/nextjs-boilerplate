"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";
import { db } from "@/lib/firebase";
import { collection, getDocs } from "firebase/firestore";

type LessonLevel = "BEGINNER" | "INTERMEDIATE" | "ADVANCED";

type Lesson = {
  id: string;
  level: LessonLevel;
  title: Record<string, string>;
  description: Record<string, string>;
  updatedAt?: number;
};

type LevelKey = "beginner" | "intermediate" | "advanced";

export default function LessonsPage() {
  const locale = useLocale();
  const t = useTranslations();

  const [all, setAll] = useState<Lesson[]>([]);
  const [loading, setLoading] = useState(true);

  // ✅ Accordion state (tek tek aç/kapa)
  const [open, setOpen] = useState<LevelKey>("beginner");

  // ✅ Çeviri yoksa key basmasın diye fallback
  const FALLBACK = useMemo(() => {
    const isTr = locale === "tr";
    const isNl = locale === "nl";
    const isEn = locale === "en";
    const isAr = locale === "ar";
    const isKu = locale === "ku";

    const countLabel = (count: number) => {
      if (isTr) return `${count} ders`;
      if (isNl) return `${count} lessen`;
      if (isAr) return `${count} دروس`;
      if (isKu) return `${count} ders`; // KU için şimdilik basit
      return `${count} lessons`; // EN default
    };

    const subtitle = (k: LevelKey) => {
      if (isTr) {
        return {
          beginner: "Temel kelimeler, cümle kurma, günlük ifadeler.",
          intermediate: "Zamanlar, daha uzun diyaloglar ve pratik.",
          advanced: "Daha akıcı konuşma, okuma anlama ve günlük kullanım.",
        }[k];
      }
      if (isNl) {
        return {
          beginner: "Basiswoorden, zinnen vormen, dagelijkse uitdrukkingen.",
          intermediate: "Tijden, langere gesprekken en oefenen.",
          advanced: "Vloeiender spreken, leesbegrip en dagelijks gebruik.",
        }[k];
      }
      if (isAr) {
        return {
          beginner: "مفردات أساسية، تكوين جمل، عبارات يومية.",
          intermediate: "الأزمنة، محادثات أطول، وتمارين تطبيقية.",
          advanced: "طلاقة أكبر، فهم القراءة، واستخدام يومي.",
        }[k];
      }
      if (isKu) {
        return {
          beginner: "Peyvên bingehîn, avakirina hevokan, gotinên rojane.",
          intermediate: "Dem, gotûbêjên dirêjتر, û pratîk.",
          advanced: "Axaftina bêhtir, fêmkirina xwendinê, û bikaranîna rojane.",
        }[k];
      }
      // EN default
      return {
        beginner: "Basic words, forming sentences, everyday phrases.",
        intermediate: "Tenses, longer conversations, and practice.",
        advanced: "More fluent speaking, reading comprehension, daily usage.",
      }[k];
    };

    return { countLabel, subtitle };
  }, [locale]);

  function safeT(key: string, fallback: string, values?: any) {
    // next-intl v3: t.has var
    // yoksa try/catch ile key basmasını engelleriz
    // @ts-ignore
    if (typeof t.has === "function" && t.has(key)) return t(key, values);
    try {
      const val = t(key, values);
      if (val === key) return fallback;
      return val;
    } catch {
      return fallback;
    }
  }

  useEffect(() => {
    async function load() {
      setLoading(true);
      try {
        const snap = await getDocs(collection(db, "lessons"));
        const items = snap.docs.map((d) => ({
          id: d.id,
          ...(d.data() as any),
        })) as Lesson[];

        items.sort((a, b) => (b.updatedAt || 0) - (a.updatedAt || 0));
        setAll(items);
      } catch (e) {
        console.error("Lessons load error:", e);
        setAll([]);
      } finally {
        setLoading(false);
      }
    }

    load();
  }, []);

  const grouped = useMemo(() => {
    return {
      beginner: all.filter((x) => x.level === "BEGINNER"),
      intermediate: all.filter((x) => x.level === "INTERMEDIATE"),
      advanced: all.filter((x) => x.level === "ADVANCED"),
    };
  }, [all]);

  function LevelSection({
    levelKey,
    titleKey,
    defaultTitle,
    items,
  }: {
    levelKey: LevelKey;
    titleKey: string;
    defaultTitle: string;
    items: Lesson[];
  }) {
    const isOpen = open === levelKey;

    const headerTitle = safeT(titleKey, defaultTitle);
    const headerSubtitle = safeT(
      `lessonsUi.levelSubtitle.${levelKey}`,
      FALLBACK.subtitle(levelKey)
    );

    const countText = safeT(
      "lessonsUi.countLabel",
      FALLBACK.countLabel(items.length),
      { count: items.length }
    );

    return (
      <section className="rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl shadow-xl overflow-hidden">
        {/* Header (clickable) */}
        <button
          type="button"
          onClick={() => setOpen(isOpen ? ("" as any) : levelKey)}
          className="w-full text-left p-6 md:p-8 flex items-start justify-between gap-4 hover:bg-white/5 transition"
        >
          <div>
            <h2 className="text-2xl font-extrabold text-white">{headerTitle}</h2>
            <p className="text-white/60 mt-1">{headerSubtitle}</p>
          </div>

          <div className="flex items-center gap-3">
            <div className="text-white/60 text-sm px-3 py-1 rounded-full bg-black/25 border border-white/10">
              {countText}
            </div>

            <span className="text-white/70 text-lg select-none">
              {isOpen ? "▾" : "▸"}
            </span>
          </div>
        </button>

        {/* Body */}
        {isOpen && (
          <div className="px-6 md:px-8 pb-8">
            {loading ? (
              <p className="text-white/60">{safeT("common.loading", "Loading...")}</p>
            ) : items.length === 0 ? (
              <p className="text-white/60">{safeT("lessons.empty", "No lessons yet.")}</p>
            ) : (
              <div className="grid md:grid-cols-2 gap-4">
                {items.map((lesson) => (
                  <Link
                    key={lesson.id}
                    href={`/${locale}/lessons/${lesson.id}`}
                    className="group block rounded-3xl bg-black/30 border border-white/10 p-6 hover:bg-white/10 hover:border-white/20 transition"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <h3 className="text-white font-bold text-lg">
                          {lesson.title?.[locale] ||
                            lesson.title?.tr ||
                            safeT("lessons.defaultLesson", "Lesson")}
                        </h3>
                        <p className="text-white/60 text-sm mt-2 leading-relaxed">
                          {lesson.description?.[locale] || lesson.description?.tr || ""}
                        </p>
                      </div>

                      <div className="text-white/40 text-sm font-semibold">
                        #{lesson.id}
                      </div>
                    </div>

                    <div className="mt-4 text-sm text-white/70 group-hover:text-white transition">
                      → {safeT("lessons.defaultLesson", "Lesson")}
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </div>
        )}
      </section>
    );
  }

  return (
    <div className="w-full max-w-6xl mx-auto px-6 py-12 space-y-6">
      {/* Header */}
      <div className="rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl p-10 shadow-xl">
        <h1 className="text-4xl font-extrabold text-white mb-2">
          {safeT("lessons.title", "Lessons")}
        </h1>
        <p className="text-white/60">{safeT("lessons.subtitle", "Lessons by level.")}</p>
      </div>

      <LevelSection
        levelKey="beginner"
        titleKey="lessons.level.beginner"
        defaultTitle="A0 → A1 (Beginner)"
        items={grouped.beginner}
      />

      <LevelSection
        levelKey="intermediate"
        titleKey="lessons.level.intermediate"
        defaultTitle="A1 → A2 (Intermediate)"
        items={grouped.intermediate}
      />

      <LevelSection
        levelKey="advanced"
        titleKey="lessons.level.advanced"
        defaultTitle="A2 → B1 (Advanced)"
        items={grouped.advanced}
      />
    </div>
  );
}