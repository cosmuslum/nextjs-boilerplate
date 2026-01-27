// i18n.ts
export const locales = ["tr", "en", "es", "ar", "nl"] as const;

export const defaultLocale = "tr";

export type Locale = (typeof locales)[number];
