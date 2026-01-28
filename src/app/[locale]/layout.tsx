import {NextIntlClientProvider} from "next-intl";
import {getMessages} from "next-intl/server";
import {notFound} from "next/navigation";
import {locales, type Locale} from "../../../i18n";
import TopBar from "@/components/TopBar";

export default async function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: {locale: Locale};
}) {
  const locale = params.locale;

  if (!locales.includes(locale)) notFound();

  const messages = await getMessages();

  return (
    <NextIntlClientProvider messages={messages}>
      <div>
        <TopBar />
        <main className="container" style={{paddingTop: 22}}>{children}</main>
        <footer className="footer">
          <div style={{fontWeight: 900, opacity: .9}}>NederLearn</div>
          <div style={{marginTop: 6, fontSize: 12, opacity: .75}}>© {new Date().getFullYear()} NederLearn</div>
        </footer>
      </div>
    </NextIntlClientProvider>
  );
}
