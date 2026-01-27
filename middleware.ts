import { NextRequest, NextResponse } from "next/server";

const locales = ["nl", "tr", "en", "es", "ar"] as const;
const defaultLocale = "nl";

function pickLocale(req: NextRequest) {
  const header = req.headers.get("accept-language") || "";
  const preferred = header.split(",").map((p) => p.trim().toLowerCase());

  // Basit eşleştirme
  for (const p of preferred) {
    if (p.startsWith("tr")) return "tr";
    if (p.startsWith("en")) return "en";
    if (p.startsWith("es")) return "es";
    if (p.startsWith("ar")) return "ar";
    if (p.startsWith("nl")) return "nl";
  }
  return defaultLocale;
}

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  // next internals
  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    pathname.includes(".")
  ) {
    return NextResponse.next();
  }

  // Zaten locale ile başlıyorsa dokunma
  const hasLocale = locales.some(
    (loc) => pathname === `/${loc}` || pathname.startsWith(`/${loc}/`)
  );
  if (hasLocale) return NextResponse.next();

  // Root veya locale'siz her şeyi locale'a yönlendir
  const locale = pickLocale(req);
  const url = req.nextUrl.clone();
  url.pathname = `/${locale}${pathname === "/" ? "" : pathname}`;
  return NextResponse.redirect(url);
}

export const config = {
  matcher: ["/((?!_next|api).*)"],
};
