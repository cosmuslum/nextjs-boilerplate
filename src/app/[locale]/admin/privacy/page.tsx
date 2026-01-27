"use client";

import { useEffect, useMemo, useState } from "react";
import { useLocale, useTranslations } from "next-intl";
import type { LocaleKey } from "@/lib/cmsService";
import { getCmsDoc, savePrivacyMarkdown } from "@/lib/cmsService";

const LOCALES: LocaleKey[] = ["tr", "nl", "en", "ar", "ku"];

type PrivacyCmsDoc = {
  markdown?: Partial<Record<LocaleKey, string>>;
  updatedAt?: number;
};

export default function AdminPrivacyPage() {
  const t = useTranslations();
  const locale = useLocale() as LocaleKey;

  const [active, setActive] = useState<LocaleKey>(
    LOCALES.includes(locale) ? locale : "tr"
  );

  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [err, setErr] = useState("");
  const [ok, setOk] = useState("");

  const [markdown, setMarkdown] = useState<Record<LocaleKey, string>>({
    tr: "",
    nl: "",
    en: "",
    ar: "",
    ku: "",
  });

  const activeValue = useMemo(
    () => markdown[active] ?? "",
    [markdown, active]
  );

  useEffect(() => {
    let mounted = true;

    (async () => {
      setLoading(true);
      setErr("");
      setOk("");

      try {
        const doc = await getCmsDoc<PrivacyCmsDoc>("privacy");

        const md = doc?.markdown || {};

        // boşsa bile tüm diller garanti dolu olsun
        const merged: Record<LocaleKey, string> = {
          tr: md.tr ?? "",
          nl: md.nl ?? "",
          en: md.en ?? "",
          ar: md.ar ?? "",
          ku: md.ku ?? "",
        };

        if (mounted) setMarkdown(merged);
      } catch (e: any) {
        console.error(e);
        if (mounted) setErr(e?.message || "Yüklenemedi.");
      } finally {
        if (mounted) setLoading(false);
      }
    })();

    return () => {
      mounted = false;
    };
  }, []);

  function setActiveText(v: string) {
    setMarkdown((prev) => ({ ...prev, [active]: v }));
  }

  async function handleSave() {
    setSaving(true);
    setErr("");
    setOk("");

    try {
      // Firestore'a markdown kaydet
      await savePrivacyMarkdown(markdown);
      setOk("✅ Kaydedildi.");
    } catch (e: any) {
      console.error(e);
      setErr(e?.message || "Kaydedilemedi.");
    } finally {
      setSaving(false);
    }
  }

  function handleLoadSample() {
    // İstersen başlangıç şablonu: profesyonel markdown
    const sample = `# ${t("privacy.title")}

_${t("privacy.subtitle")}_

## 1) ${t("privacy.sections.intro.title")}
${t("privacy.sections.intro.text")}

## 2) ${t("privacy.sections.data.title")}
${t("privacy.sections.data.text")}

## 3) ${t("privacy.sections.usage.title")}
${t("privacy.sections.usage.text")}

## 4) ${t("privacy.sections.security.title")}
${t("privacy.sections.security.text")}

## 5) ${t("privacy.sections.contact.title")}
${t("privacy.sections.contact.text")}
`;
    setActiveText(sample);
    setOk("✅ Şablon eklendi (aktif dile).");
  }

  return (
    <div className="w-full max-w-6xl mx-auto px-6 py-10">
      <div className="rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl p-8 shadow-xl">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div>
            <h1 className="text-3xl md:text-4xl font-extrabold text-white">
              {t("privacy.title")}
            </h1>
            <p className="text-white/60 mt-2">
              Admin panelinden Gizlilik sayfasının içeriğini (Markdown) 5 dilde yönet.
            </p>
          </div>

          <div className="flex gap-3">
            <button
              onClick={handleLoadSample}
              type="button"
              disabled={loading || saving}
              className="px-5 py-3 rounded-2xl bg-white/10 hover:bg-white/15 border border-white/10 text-white font-semibold transition disabled:opacity-60"
            >
              Şablon Ekle
            </button>

            <button
              onClick={handleSave}
              type="button"
              disabled={loading || saving}
              className="px-5 py-3 rounded-2xl bg-green-500/90 hover:bg-green-500 text-black font-extrabold transition disabled:opacity-60"
            >
              {saving ? "Kaydediliyor..." : "Kaydet"}
            </button>
          </div>
        </div>

        {/* Tabs */}
        <div className="mt-6 flex flex-wrap gap-2">
          {LOCALES.map((l) => (
            <button
              key={l}
              onClick={() => setActive(l)}
              type="button"
              className={[
                "px-4 py-2 rounded-2xl border transition text-sm font-semibold",
                active === l
                  ? "bg-white/15 border-white/25 text-white"
                  : "bg-black/20 border-white/10 text-white/70 hover:bg-white/10",
              ].join(" ")}
            >
              {l.toUpperCase()}
            </button>
          ))}
        </div>

        {/* Editor */}
        <div className="mt-6">
          {loading ? (
            <div className="text-white/70">{t("common.loading")}</div>
          ) : (
            <div className="rounded-3xl bg-black/20 border border-white/10 p-5">
              <div className="flex items-center justify-between mb-3">
                <div className="text-white/80 text-sm">
                  Aktif dil:{" "}
                  <span className="font-bold">{active.toUpperCase()}</span>
                </div>
                <div className="text-white/50 text-xs">
                  Format: Markdown (## başlıklar, listeler vb.)
                </div>
              </div>

              <textarea
                value={activeValue}
                onChange={(e) => setActiveText(e.target.value)}
                className="w-full min-h-[440px] rounded-2xl bg-black/30 border border-white/10 text-white/90 p-4 outline-none focus:border-white/25 transition text-sm"
                placeholder="Gizlilik metnini Markdown olarak yaz..."
              />
            </div>
          )}
        </div>

        {/* Alerts */}
        {err && (
          <div className="mt-5 p-4 rounded-2xl bg-red-500/10 border border-red-500/20 text-red-200 text-sm">
            ❌ {err}
          </div>
        )}
        {ok && (
          <div className="mt-5 p-4 rounded-2xl bg-green-500/10 border border-green-500/20 text-green-200 text-sm">
            {ok}
          </div>
        )}
      </div>
    </div>
  );
}