import { getTranslations } from "next-intl/server";
import type { LocaleKey } from "@/lib/cmsService";
import { getCmsDoc } from "@/lib/cmsService";

type PrivacyCmsDoc = {
  markdown?: Partial<Record<LocaleKey, string>>;
  updatedAt?: number;
};

function pickCmsText(
  doc: PrivacyCmsDoc | null,
  locale: LocaleKey
): string {
  const md = doc?.markdown || {};
  return (
    md[locale]?.trim() ||
    md.tr?.trim() ||
    md.nl?.trim() ||
    md.en?.trim() ||
    md.ar?.trim() ||
    md.ku?.trim() ||
    ""
  );
}

export default async function PrivacyPage({
  params,
}: {
  params: { locale: string };
}) {
  const locale = (params.locale || "tr") as LocaleKey;
  const t = await getTranslations({ locale });

  // ✅ Firestore: cms/privacy -> { markdown: {tr,nl,en,ar,ku} }
  const cms = await getCmsDoc<PrivacyCmsDoc>("privacy");
  const cmsText = pickCmsText(cms, locale);

  // ✅ Fallback: CMS boşsa çevirilerden üret (eski yapı bozulmasın)
  const sections = ["intro", "data", "usage", "sharing", "cookies", "retention", "rights", "security", "changes", "contact"] as const;

  const fallbackText = sections
    .map((key) => {
      const title = t(`privacy.sections.${key}.title`);
      const text = t(`privacy.sections.${key}.text`);
      return `## ${title}\n\n${text}\n`;
    })
    .join("\n");

  const finalText = (cmsText || fallbackText).trim();

  return (
    <main className="min-h-[calc(100vh-70px)] text-white relative overflow-hidden">
      <section className="relative z-10 max-w-5xl mx-auto px-6 py-16">
        {/* Header */}
        <div className="rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl p-10 shadow-xl mb-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/10 text-white/80 text-sm mb-5">
            🛡️ {t("privacy.badge")}
          </div>

          <h1 className="text-4xl md:text-5xl font-extrabold mb-3">
            {t("privacy.title")}
          </h1>
          <p className="text-white/60 text-lg leading-relaxed">
            {t("privacy.subtitle")}
          </p>

          <div className="mt-6 text-white/50 text-sm">
            {t("privacy.lastUpdatedLabel")}:{" "}
            <span className="text-white/70 font-semibold">
              {t("privacy.lastUpdatedValue")}
            </span>
          </div>
        </div>

        {/* Content */}
        <article className="rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl p-10 shadow-xl prose prose-invert max-w-none">
          {/* Basit markdown render (başlık + paragraflar) */}
          {finalText.split("\n").map((line, idx) => {
            const l = line.trim();
            if (!l) return <div key={idx} className="h-3" />;

            if (l.startsWith("# ")) {
              return (
                <h2 key={idx} className="text-3xl font-extrabold mt-0">
                  {l.replace("# ", "")}
                </h2>
              );
            }
            if (l.startsWith("## ")) {
              return (
                <h3 key={idx} className="text-2xl font-extrabold mt-8">
                  {l.replace("## ", "")}
                </h3>
              );
            }
            if (l.startsWith("- ")) {
              return (
                <ul key={idx} className="list-disc pl-6">
                  <li>{l.replace("- ", "")}</li>
                </ul>
              );
            }
            return (
              <p key={idx} className="text-white/75 leading-relaxed">
                {l}
              </p>
            );
          })}
        </article>

        <p className="text-white/40 text-sm mt-6">
          {t("privacy.footerNote")}
        </p>
      </section>
    </main>
  );
}