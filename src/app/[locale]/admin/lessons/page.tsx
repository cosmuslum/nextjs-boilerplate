"use client";

import { useEffect, useState } from "react";
import { useLocale, useTranslations } from "next-intl";
import {
  addLesson,
  deleteLesson,
  getAllLessons,
  LessonLevel,
  updateLesson,
} from "@/lib/lessonService";

type LessonRow = {
  id: string;
  level: LessonLevel;
  orderIndex?: number;
  title?: Record<string, string>;
  description?: Record<string, string>;
  content?: Record<string, string>;
};

const LEVELS: { key: LessonLevel; labelKey: string }[] = [
  { key: "BEGINNER", labelKey: "lessons.level.beginner" },
  { key: "INTERMEDIATE", labelKey: "lessons.level.intermediate" },
  { key: "ADVANCED", labelKey: "lessons.level.advanced" },
];

const LOCALES = ["tr", "nl", "en", "ar", "ku"] as const;
type LocaleKey = (typeof LOCALES)[number];

function safeText(map: any, locale: string) {
  return map?.[locale] || map?.tr || map?.nl || map?.en || map?.ar || map?.ku || "";
}

export default function AdminLessonsPage() {
  const locale = useLocale();
  const t = useTranslations();

  const [loading, setLoading] = useState(true);
  const [items, setItems] = useState<LessonRow[]>([]);

  // form
  const [level, setLevel] = useState<LessonLevel>("BEGINNER");
  const [orderIndex, setOrderIndex] = useState<number>(1);

  const [title, setTitle] = useState<Record<LocaleKey, string>>({
    tr: "",
    nl: "",
    en: "",
    ar: "",
    ku: "",
  });
  const [description, setDescription] = useState<Record<LocaleKey, string>>({
    tr: "",
    nl: "",
    en: "",
    ar: "",
    ku: "",
  });
  const [content, setContent] = useState<Record<LocaleKey, string>>({
    tr: "",
    nl: "",
    en: "",
    ar: "",
    ku: "",
  });

  async function refresh() {
    setLoading(true);
    const data = (await getAllLessons()) as any;
    setItems(data);
    setLoading(false);
  }

  useEffect(() => {
    refresh();
  }, []);

  function clearForm() {
    setLevel("BEGINNER");
    setOrderIndex(1);
    setTitle({ tr: "", nl: "", en: "", ar: "", ku: "" });
    setDescription({ tr: "", nl: "", en: "", ar: "", ku: "" });
    setContent({ tr: "", nl: "", en: "", ar: "", ku: "" });
  }

  async function handleCreate() {
    if (!title.tr.trim() && !title.nl.trim() && !title.en.trim() && !title.ar.trim() && !title.ku.trim()) {
      alert("En az 1 dilde başlık gir.");
      return;
    }

    await addLesson({
      level,
      orderIndex,
      title,
      description,
      content,
    });

    clearForm();
    await refresh();
  }

  async function handleDelete(id: string) {
    if (!confirm(`Ders silinsin mi? (id=${id})`)) return;
    await deleteLesson(id);
    await refresh();
  }

  async function handleQuickFixI18n(id: string) {
    // hiçbir şey yazmadan updateLesson çağırınca lessonService normalize eder → eksikleri otomatik tamamlar
    await updateLesson(id, {});
    await refresh();
    alert("✅ Bu ders için eksik dil alanları otomatik tamamlandı.");
  }

  const Card = ({ children }: { children: React.ReactNode }) => (
    <div className="rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl shadow-xl p-8">
      {children}
    </div>
  );

  const Input = (props: any) => (
    <input
      {...props}
      className={
        "w-full px-4 py-3 rounded-2xl bg-black/30 border border-white/10 text-white placeholder:text-white/40 outline-none focus:border-white/25 transition " +
        (props.className || "")
      }
    />
  );

  const Textarea = (props: any) => (
    <textarea
      {...props}
      className={
        "w-full px-4 py-3 rounded-2xl bg-black/30 border border-white/10 text-white placeholder:text-white/40 outline-none focus:border-white/25 transition min-h-[110px] " +
        (props.className || "")
      }
    />
  );

  return (
    <div className="w-full max-w-6xl mx-auto px-6 py-12 space-y-8">
      <Card>
        <h1 className="text-3xl font-extrabold text-white">
          {t("admin.lessons")}
        </h1>
        <p className="text-white/60 mt-2">
          Ders ekle / sil — TR/NL/EN/AR/KU otomatik yazılır.
        </p>
      </Card>

      {/* CREATE */}
      <Card>
        <h2 className="text-white font-bold text-xl mb-6">➕ Yeni Ders</h2>

        <div className="grid md:grid-cols-3 gap-4">
          <div>
            <label className="text-white/70 text-sm">Seviye</label>
            <select
              value={level}
              onChange={(e) => setLevel(e.target.value as LessonLevel)}
              className="w-full mt-2 px-4 py-3 rounded-2xl bg-black/30 border border-white/10 text-white outline-none"
            >
              {LEVELS.map((l) => (
                <option key={l.key} value={l.key}>
                  {t(l.labelKey)}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="text-white/70 text-sm">Sıra (orderIndex)</label>
            <Input
              type="number"
              value={orderIndex}
              onChange={(e: any) => setOrderIndex(Number(e.target.value || 0))}
              className="mt-2"
            />
          </div>

          <div className="flex items-end">
            <button
              onClick={handleCreate}
              className="w-full px-6 py-3 rounded-2xl bg-green-500/90 hover:bg-green-500 text-black font-extrabold transition"
            >
              ✅ {t("common.save")}
            </button>
          </div>
        </div>

        <div className="mt-8 grid lg:grid-cols-2 gap-6">
          {/* TITLE */}
          <div className="rounded-3xl bg-black/20 border border-white/10 p-6">
            <h3 className="text-white font-bold mb-4">Başlık (title)</h3>
            <div className="grid grid-cols-1 gap-3">
              {LOCALES.map((lc) => (
                <Input
                  key={lc}
                  value={title[lc]}
                  onChange={(e: any) => setTitle((p) => ({ ...p, [lc]: e.target.value }))}
                  placeholder={`${lc.toUpperCase()} title`}
                />
              ))}
            </div>
            <p className="text-white/50 text-xs mt-3">
              Sadece TR girsen bile kaydederken otomatik diğer dillere de yazılır.
            </p>
          </div>

          {/* DESCRIPTION */}
          <div className="rounded-3xl bg-black/20 border border-white/10 p-6">
            <h3 className="text-white font-bold mb-4">Açıklama (description)</h3>
            <div className="grid grid-cols-1 gap-3">
              {LOCALES.map((lc) => (
                <Input
                  key={lc}
                  value={description[lc]}
                  onChange={(e: any) =>
                    setDescription((p) => ({ ...p, [lc]: e.target.value }))
                  }
                  placeholder={`${lc.toUpperCase()} description`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* CONTENT */}
        <div className="mt-6 rounded-3xl bg-black/20 border border-white/10 p-6">
          <h3 className="text-white font-bold mb-4">İçerik (content)</h3>
          <div className="grid lg:grid-cols-2 gap-4">
            {LOCALES.map((lc) => (
              <div key={lc}>
                <div className="text-white/70 text-sm mb-2">{lc.toUpperCase()}</div>
                <Textarea
                  value={content[lc]}
                  onChange={(e: any) => setContent((p) => ({ ...p, [lc]: e.target.value }))}
                  placeholder={`${lc.toUpperCase()} content`}
                />
              </div>
            ))}
          </div>
        </div>
      </Card>

      {/* LIST */}
      <Card>
        <div className="flex items-center justify-between gap-4 mb-6">
          <h2 className="text-white font-bold text-xl">📚 Mevcut Dersler</h2>
          <button
            onClick={refresh}
            className="px-4 py-2 rounded-xl bg-white/10 hover:bg-white/15 border border-white/10 text-white font-semibold transition"
          >
            Yenile
          </button>
        </div>

        {loading ? (
          <div className="text-white/70">{t("common.loading")}</div>
        ) : items.length === 0 ? (
          <div className="text-white/70">Henüz ders yok.</div>
        ) : (
          <div className="space-y-3">
            {items.map((x) => (
              <div
                key={x.id}
                className="rounded-3xl bg-black/25 border border-white/10 p-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4"
              >
                <div className="min-w-0">
                  <div className="text-white font-extrabold text-lg truncate">
                    {safeText(x.title, locale) || t("lessons.defaultLesson")}
                  </div>
                  <div className="text-white/60 text-sm mt-1">
                    {safeText(x.description, locale)}
                  </div>
                  <div className="text-white/40 text-xs mt-2">
                    id: {x.id} • order: {x.orderIndex ?? 0} • level: {x.level}
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => handleQuickFixI18n(x.id)}
                    className="px-4 py-2 rounded-xl bg-blue-500/80 hover:bg-blue-500 text-white font-bold transition"
                  >
                    Auto i18n Fix
                  </button>

                  <button
                    onClick={() => handleDelete(x.id)}
                    className="px-4 py-2 rounded-xl bg-red-500/80 hover:bg-red-500 text-white font-bold transition"
                  >
                    {t("common.delete")}
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </Card>
    </div>
  );
}