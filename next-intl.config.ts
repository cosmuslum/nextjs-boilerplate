import type {getRequestConfig} from "next-intl/server";
import {defaultLocale, locales} from "./i18n";

export default (async ({locale}) => {
  const safeLocale = locales.includes(locale as any) ? locale : defaultLocale;

  return {
    locale: safeLocale,
    messages: (await import(`./messages/${safeLocale}.json`)).default
  };
}) satisfies ReturnType<typeof getRequestConfig>;
