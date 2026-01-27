export const locales = ["tr", "nl", "ar", "ku"] as const;
export const defaultLocale = "tr";

export type Locale = (typeof locales)[number];