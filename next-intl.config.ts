export const locales = ["tr", "nl", "en", "ar", "ku"] as const;
export const defaultLocale = "tr";
export type AppLocale = (typeof locales)[number];