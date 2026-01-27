// /i18n.ts
export const locales = ["tr", "en", "es", "ar", "nl"] as const;
export const defaultLocale = "tr" as const;

export type Locale = (typeof locales)[number];
