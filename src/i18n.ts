import { getRequestConfig } from "next-intl/server";

const locales = ["tr", "nl", "en", "ar", "ku"] as const;
type AppLocale = (typeof locales)[number];

function isLocale(x: string): x is AppLocale {
  return (locales as readonly string[]).includes(x);
}

// Basit deep-merge: target’taki eksikleri source’dan tamamlar
function deepMerge<T extends Record<string, any>>(source: T, target: T): T {
  const out: any = Array.isArray(source) ? [...source] : { ...source };

  for (const key of Object.keys(target || {})) {
    const sv = (source as any)[key];
    const tv = (target as any)[key];

    if (
      sv &&
      tv &&
      typeof sv === "object" &&
      typeof tv === "object" &&
      !Array.isArray(sv) &&
      !Array.isArray(tv)
    ) {
      out[key] = deepMerge(sv, tv);
    } else {
      out[key] = tv;
    }
  }

  return out as T;
}

export default getRequestConfig(async ({ locale }) => {
  const safeLocale: AppLocale = isLocale(locale) ? locale : "tr";

  // ✅ TR her zaman base olsun
  const trMessages = (await import("./locales/tr/common.json")).default;

  // ✅ Seçili dil TR ise direkt TR
  if (safeLocale === "tr") {
    return { messages: trMessages };
  }

  // ✅ Seçili dil varsa üstüne merge
  const localeMessages = (
    await import(`./locales/${safeLocale}/common.json`)
  ).default;

  return {
    messages: deepMerge(trMessages, localeMessages),
  };
});