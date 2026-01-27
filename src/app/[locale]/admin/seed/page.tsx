"use client";

import { useMemo, useState } from "react";
import { useLocale } from "next-intl";
import { db } from "@/lib/firebase";
import {
  doc,
  setDoc,
  writeBatch,
  serverTimestamp,
  collection,
} from "firebase/firestore";

import { A0A1_VOCAB_500 } from "./a0a1_vocab_500";

type LocaleKey = "tr" | "nl" | "en" | "ar" | "ku";
type LessonLevel = "BEGINNER" | "INTERMEDIATE" | "ADVANCED";

const LOCALES: LocaleKey[] = ["tr", "nl", "en", "ar", "ku"];

function pickBase(map: Partial<Record<LocaleKey, string>>) {
  return (
    map.tr?.trim() ||
    map.nl?.trim() ||
    map.en?.trim() ||
    map.ar?.trim() ||
    map.ku?.trim() ||
    ""
  );
}

function ensureLocales(map: Partial<Record<LocaleKey, string>>) {
  const base = pickBase(map);
  return {
    tr: map.tr?.trim() || base,
    nl: map.nl?.trim() || base,
    en: map.en?.trim() || base,
    ar: map.ar?.trim() || base,
    ku: map.ku?.trim() || base,
  } as Record<LocaleKey, string>;
}

function chunk<T>(arr: T[] | undefined, size: number) {
  const safe = Array.isArray(arr) ? arr : [];
  const out: T[][] = [];
  for (let i = 0; i < safe.length; i += size) out.push(safe.slice(i, i + size));
  return out;
}

function shuffle<T>(arr: T[]) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function mdWordList(words: { nl: string; tr: string }[]) {
  const lines = [
    "### Kelime Listesi",
    "",
    "| NL | TR |",
    "|---|---|",
    ...words.map((w) => `| **${w.nl}** | ${w.tr} |`),
    "",
    "> İpucu: Kelimeleri yüksek sesle tekrar et ve her kelimeyle 1 kısa cümle kurmayı dene.",
  ];
  return lines.join("\n");
}

function buildLessonTitles(index1to10: number) {
  // 10 ders için profesyonel konu başlıkları
  const topics = [
    {
      tr: "Selamlaşma & Temel İfadeler",
      nl: "Begroeten & basiszinnen",
      en: "Greetings & basic phrases",
      ar: "التحية والعبارات الأساسية",
      ku: "Silav û gotinên bingehîn",
    },
    {
      tr: "Kişiler & Zamirler",
      nl: "Personen & voornaamwoorden",
      en: "People & pronouns",
      ar: "الأشخاص والضمائر",
      ku: "Kes û cînav",
    },
    {
      tr: "Sayılar & Saat",
      nl: "Getallen & tijd",
      en: "Numbers & time",
      ar: "الأرقام والوقت",
      ku: "Hejmar û dem",
    },
    {
      tr: "Günler, Aylar & Tarih",
      nl: "Dagen, maanden & datum",
      en: "Days, months & dates",
      ar: "الأيام والأشهر والتواريخ",
      ku: "Roj, meh û dîrok",
    },
    {
      tr: "Renkler & Sıfatlar",
      nl: "Kleuren & bijvoeglijke naamwoorden",
      en: "Colors & adjectives",
      ar: "الألوان والصفات",
      ku: "Reng û sifet",
    },
    {
      tr: "Ev & Eşyalar",
      nl: "Huis & spullen",
      en: "Home & items",
      ar: "المنزل والأغراض",
      ku: "Mal û tişt",
    },
    {
      tr: "Yiyecek & İçecek",
      nl: "Eten & drinken",
      en: "Food & drinks",
      ar: "الطعام والشراب",
      ku: "Xwarin û vexwarin",
    },
    {
      tr: "Şehir & Ulaşım",
      nl: "Stad & vervoer",
      en: "City & transport",
      ar: "المدينة والمواصلات",
      ku: "Bajar û guhastin",
    },
    {
      tr: "Günlük Fiiller",
      nl: "Dagelijkse werkwoorden",
      en: "Daily verbs",
      ar: "الأفعال اليومية",
      ku: "Lêkerên rojane",
    },
    {
      tr: "Sağlık & Duygular",
      nl: "Gezondheid & gevoelens",
      en: "Health & feelings",
      ar: "الصحة والمشاعر",
      ku: "Ewlehîya tenduristî û hest",
    },
  ];

  const t = topics[index1to10 - 1] || topics[0];

  return {
    title: {
      tr: `A0→A1 — Ders ${index1to10}: ${t.tr}`,
      nl: `A0→A1 — Les ${index1to10}: ${t.nl}`,
      en: `A0→A1 — Lesson ${index1to10}: ${t.en}`,
      ar: `A0→A1 — الدرس ${index1to10}: ${t.ar}`,
      ku: `A0→A1 — Ders ${index1to10}: ${t.ku}`,
    },
    desc: {
      tr: "Bu ders; kelime listesi + kısa pratik + quiz ile temel seviyeyi sağlamlaştırır.",
      nl: "Deze les versterkt de basis met woordenschat, korte oefening en quiz.",
      en: "This lesson builds strong foundations with vocabulary, practice, and a quiz.",
      ar: "هذا الدرس يعزز الأساس بالمفردات والتدريب والاختبار القصير.",
      ku: "Ev ders bingehê bi peyv, pratîk û quiz bihêz dike.",
    },
  } as {
    title: Record<LocaleKey, string>;
    desc: Record<LocaleKey, string>;
  };
}

function makeQuizPack(
  lessonId: string,
  words50: { nl: string; tr: string }[],
  quizCount = 10
) {
  // 10 quiz: NL kelime -> TR karşılık (çoktan seçmeli)
  const base = words50.slice(0, Math.min(words50.length, quizCount));
  const allTr = words50.map((w) => w.tr);

  return base.map((w, i) => {
    const correct = w.tr;
    const wrongPool = allTr.filter((x) => x !== correct);
    const wrong = shuffle(wrongPool).slice(0, 3);
    const optionsTr = shuffle([correct, ...wrong]);

    const correctIndex = optionsTr.indexOf(correct);

    const question = {
      tr: `“${w.nl}” kelimesinin Türkçesi nedir?`,
      nl: `Wat betekent “${w.nl}” in het Turks?`,
      en: `What is the Turkish meaning of “${w.nl}”?`,
      ar: `ما معنى “${w.nl}” باللغة التركية؟`,
      ku: `Wateya tirkî ya “${w.nl}” çi ye؟`,
    } satisfies Record<LocaleKey, string>;

    // seçenekler: tüm dillerde aynı TR seçenekleri gösteriyoruz (kırılmasın diye)
    const options = optionsTr.map((opt) => ensureLocales({ tr: opt }));

    return {
      id: `${lessonId}_q${String(i + 1).padStart(2, "0")}`,
      lessonId,
      question,
      options,
      correctIndex,
      createdAt: Date.now(),
      updatedAt: Date.now(),
    };
  });
}

export default function AdminSeedPage() {
  const locale = useLocale() as LocaleKey;

  const [busy, setBusy] = useState(false);
  const [log, setLog] = useState<string[]>([]);
  const [done, setDone] = useState(false);

  const words = useMemo(() => A0A1_VOCAB_500 || [], []);
  const lessons10 = useMemo(() => chunk(words, 50).slice(0, 10), [words]);

  async function seedA0A1_500() {
    setBusy(true);
    setDone(false);
    setLog([]);

    try {
      if (!Array.isArray(words) || words.length < 500) {
        throw new Error(`Kelime listesi eksik: ${words?.length || 0}/500`);
      }

      const batch = writeBatch(db);

      // 10 ders (1..10) BEGINNER
      lessons10.forEach((words50, idx) => {
        const n = idx + 1;
        const lessonId = String(n); // IMPORTANT: /lessons/1 gibi çalışsın diye
        const { title, desc } = buildLessonTitles(n);

        const content = ensureLocales({
          tr: [
            `## Ders ${n}`,
            "",
            "Bu derste 50 kelime var. Aşağıdaki listeyi çalış, sonra quiz çöz.",
            "",
            mdWordList(words50),
          ].join("\n"),
          nl: [
            `## Les ${n}`,
            "",
            "Deze les bevat 50 woorden. Bestudeer de lijst en maak daarna de quiz.",
            "",
            mdWordList(words50),
          ].join("\n"),
          en: [
            `## Lesson ${n}`,
            "",
            "This lesson contains 50 words. Study the list and then take the quiz.",
            "",
            mdWordList(words50),
          ].join("\n"),
          ar: [
            `## الدرس ${n}`,
            "",
            "يحتوي هذا الدرس على 50 كلمة. ادرس القائمة ثم أجب عن الاختبار.",
            "",
            mdWordList(words50),
          ].join("\n"),
          ku: [
            `## Ders ${n}`,
            "",
            "Di vê dersê de 50 peyv hene. Lîsteyê bixwîne, paşê quizê bike.",
            "",
            mdWordList(words50),
          ].join("\n"),
        });

        const lessonDoc = {
          level: "BEGINNER" as LessonLevel,
          orderIndex: n,
          title: ensureLocales(title),
          description: ensureLocales(desc),
          content,
          createdAt: Date.now(),
          updatedAt: Date.now(),
          updatedAtServer: serverTimestamp(),
        };

        batch.set(doc(db, "lessons", lessonId), lessonDoc, { merge: true });

        // quizzes (10 adet)
        const quizzes = makeQuizPack(lessonId, words50, 10);
        quizzes.forEach((q) => {
          batch.set(doc(db, "quizzes", q.id), q, { merge: true });
        });
      });

      // küçük bir "seed meta" dokümanı (opsiyonel)
      batch.set(
        doc(db, "seedRuns", "a0a1_500"),
        {
          name: "A0A1_500",
          lessonCount: 10,
          words: 500,
          quizzesPerLesson: 10,
          totalQuizzes: 100,
          updatedAt: Date.now(),
          updatedAtServer: serverTimestamp(),
        },
        { merge: true }
      );

      setLog((p) => [...p, "⏳ Firestore batch hazırlanıyor..."]);
      await batch.commit();
      setLog((p) => [...p, "✅ Seed tamamlandı: 10 ders + 100 quiz yazıldı."]);
      setDone(true);
    } catch (e: any) {
      console.error(e);
      setLog((p) => [...p, `❌ Hata: ${e?.message || String(e)}`]);
      setDone(false);
    } finally {
      setBusy(false);
    }
  }

  const ui = {
    title: {
      tr: "Seed Paneli",
      nl: "Seed-paneel",
      en: "Seed Panel",
      ar: "لوحة التهيئة (Seed)",
      ku: "Panelê Seed",
    },
    subtitle: {
      tr: "A0→A1 için 500 kelimeyi 10 derse eşit böler ve her derse 10 quiz ekler.",
      nl: "Verdeelt 500 A0→A1-woorden in 10 lessen en voegt 10 quizzen per les toe.",
      en: "Splits 500 A0→A1 words into 10 lessons and adds 10 quizzes per lesson.",
      ar: "يقسم 500 كلمة لمستوى A0→A1 إلى 10 دروس ويضيف 10 اختبارات لكل درس.",
      ku: "500 peyvên A0→A1 di 10 dersan de parve dike û ji bo her dersê 10 quiz lê zêde dike.",
    },
    cta: {
      tr: "A0→A1 (500 kelime) Seed Başlat",
      nl: "Start A0→A1 (500 woorden) Seed",
      en: "Start A0→A1 (500 words) Seed",
      ar: "بدء Seed A0→A1 (500 كلمة)",
      ku: "Destpêkirina Seed A0→A1 (500 peyv)",
    },
    note: {
      tr: "Not: Aynı ID’ler varsa merge ile günceller (ders 1..10 / quizzes: 1_q01 gibi).",
      nl: "Let op: Bij dezelfde ID’s wordt geüpdatet met merge.",
      en: "Note: If IDs exist, it updates via merge.",
      ar: "ملاحظة: إذا كانت المعرفات موجودة سيتم التحديث عبر merge.",
      ku: "Têbînî: Heke ID hebe, bi merge tê nûkirin.",
    },
    stats: {
      tr: (w: number) => `Kelime: ${w} • Ders: 10 • Quiz: 100`,
      nl: (w: number) => `Woorden: ${w} • Lessen: 10 • Quizzen: 100`,
      en: (w: number) => `Words: ${w} • Lessons: 10 • Quizzes: 100`,
      ar: (w: number) => `الكلمات: ${w} • الدروس: 10 • الاختبارات: 100`,
      ku: (w: number) => `Peyv: ${w} • Ders: 10 • Quiz: 100`,
    },
  };

  return (
    <div className="w-full max-w-6xl mx-auto px-6 py-10">
      {/* Hero */}
      <div className="rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl p-10 shadow-xl">
        <div className="inline-flex items-center gap-2 rounded-full bg-black/30 border border-white/10 px-4 py-2 text-white/80 text-sm">
          🌱 {ui.title[locale] || ui.title.tr}
        </div>

        <h1 className="text-4xl md:text-5xl font-extrabold text-white mt-6">
          {ui.title[locale] || ui.title.tr}
        </h1>

        <p className="text-white/70 mt-3 max-w-3xl">
          {ui.subtitle[locale] || ui.subtitle.tr}
        </p>

        <div className="mt-6 flex flex-wrap items-center gap-3">
          <button
            disabled={busy}
            onClick={seedA0A1_500}
            className="rounded-2xl px-6 py-3 bg-emerald-500/90 hover:bg-emerald-500 text-black font-bold shadow-lg disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {busy ? "⏳..." : ui.cta[locale] || ui.cta.tr}
          </button>

          <div className="text-white/60 text-sm">
            {ui.stats[locale]?.(words.length) || ui.stats.tr(words.length)}
          </div>
        </div>

        <p className="text-white/50 text-sm mt-3">{ui.note[locale] || ui.note.tr}</p>
      </div>

      {/* Preview cards */}
      <div className="grid md:grid-cols-3 gap-4 mt-8">
        {Array.from({ length: 3 }).map((_, i) => {
          const label =
            i === 0 ? "A0 → A1" : i === 1 ? "A1 → A2" : "A2 → B1";
          const desc =
            i === 0
              ? "500 kelime • 10 ders • 100 quiz"
              : "Hazırlanacak (sonra ekleriz)";
          const active = i === 0;

          return (
            <div
              key={i}
              className="rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl p-7 shadow-xl"
            >
              <div className="text-white font-extrabold text-2xl">{label}</div>
              <div className="text-white/60 mt-2">{desc}</div>
              <div className="mt-4 text-sm text-white/70">
                {active ? "Seed hazır" : "Şimdilik pasif"}
              </div>
            </div>
          );
        })}
      </div>

      {/* Log */}
      <div className="mt-8 rounded-3xl bg-black/30 border border-white/10 backdrop-blur-xl p-6 shadow-xl">
        <div className="flex items-center justify-between">
          <h2 className="text-white font-extrabold text-xl">Log</h2>
          {done ? (
            <span className="text-emerald-300 font-semibold">✅ OK</span>
          ) : (
            <span className="text-white/50 text-sm">{busy ? "Çalışıyor..." : "Bekliyor"}</span>
          )}
        </div>

        <div className="mt-4 space-y-2">
          {log.length === 0 ? (
            <p className="text-white/60 text-sm">
              Henüz işlem yapılmadı. Başlat’a tıklayın.
            </p>
          ) : (
            log.map((x, idx) => (
              <p key={idx} className="text-white/80 text-sm">
                {x}
              </p>
            ))
          )}
        </div>
      </div>
    </div>
  );
}