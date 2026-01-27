import Link from "next/link";
import { useTranslations } from "next-intl";

export default function LocaleHome({ params }: { params: { locale: string } }) {
  const t = useTranslations("home");
  const locale = params.locale;

  return (
    <section className="max-w-4xl mx-auto">
      <h1 className="text-4xl font-extrabold mb-4">{t("title")}</h1>
      <p className="text-white/70 mb-10">{t("subtitle")}</p>

      <div className="flex gap-3">
        <Link
          href={`/${locale}/lessons`}
          className="px-6 py-3 rounded-xl bg-white/10 hover:bg-white/15 border border-white/10 transition"
        >
          {t("lessonsCta")}
        </Link>

        <Link
          href={`/${locale}/login`}
          className="px-6 py-3 rounded-xl bg-green-500/80 hover:bg-green-500 text-black font-semibold transition"
        >
          {t("loginCta")}
        </Link>
      </div>

      <p className="mt-8 text-white/50 text-sm">Locale: {locale}</p>
    </section>
  );
}
