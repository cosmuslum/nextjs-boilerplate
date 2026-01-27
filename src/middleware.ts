import createMiddleware from "next-intl/middleware";

export default createMiddleware({
  locales: ["tr", "nl", "ar", "ku", "en"],
  defaultLocale: "tr"
});

export const config = {
  matcher: ["/((?!api|_next|.*\\..*).*)"]
};