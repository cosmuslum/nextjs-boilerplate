import { getRequestConfig } from "next-intl/server";

export const locales = ["tr", "nl", "ar", "ku"] as const;
export type AppLocale = (typeof locales)[number];
export const defaultLocale: AppLocale = "tr";

export default getRequestConfig(async ({ locale }) => {
  // locale undefined gelirse default'a düş
  const safeLocale = (locales as readonly string[]).includes(locale || "")
    ? (locale as AppLocale)
    : defaultLocale;

  return {
    locale: safeLocale,
    messages: (await import(`./locales/${safeLocale}/common.json`)).default
  };
});
