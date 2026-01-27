import type { Metadata } from "next";
import "../globals.css";
import TopBar from "@/components/TopBar";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, getTranslations } from "next-intl/server";

export const metadata: Metadata = {
  title: "DutchLearn",
  description: "Hollandaca öğrenme platformu",
};

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const messages = await getMessages();
  const t = await getTranslations({ locale: params.locale });

  return (
    <NextIntlClientProvider messages={messages}>
      {/* ✅ FULL BACKGROUND */}
      <div className="fixed inset-0 -z-10 bg-gradient-to-br from-[#0f1c3f] via-[#1b1445] to-[#3c1b5a]" />
      <div className="fixed inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(59,130,246,0.35),transparent_60%)]" />
      <div className="fixed inset-0 -z-10 bg-[radial-gradient(circle_at_bottom_right,rgba(168,85,247,0.35),transparent_60%)]" />

      <div className="min-h-screen w-full text-white">
        <TopBar />

        <div className="min-h-[calc(100vh-70px)] flex flex-col">
          <main className="flex-1 w-full">{children}</main>

          {/* ✅ SINGLE FOOTER (all pages) */}
          <footer className="w-full py-10 text-center text-white/50 text-sm border-t border-white/10">
            <p>
              © 2026{" "}
              <span className="text-white/70 font-semibold">DutchLearn</span> •{" "}
              {t("footer.rights")}
            </p>

            <p className="mt-2 text-white/40">{t("footer.subtitle")}</p>

            <div className="flex justify-center gap-6 mt-6 text-white/60">
              <a
                href={`/${params.locale}/privacy`}
                className="hover:text-white transition"
              >
                {t("footer.privacy")}
              </a>
              <a
                href={`/${params.locale}/support`}
                className="hover:text-white transition"
              >
                {t("footer.support")}
              </a>
              <a
                href={`/${params.locale}/contact`}
                className="hover:text-white transition"
              >
                {t("footer.contact")}
              </a>
            </div>
          </footer>
        </div>
      </div>
    </NextIntlClientProvider>
  );
}