import { NextResponse, type NextRequest } from "next/server";
import { LOCALES, type Locale } from "@/lib/i18n";

const DEFAULT_LOCALE: Locale = "en";
const COOKIE_NAME = "NEXT_LOCALE";

function detectFromAcceptLanguage(header: string | null): Locale {
  if (!header) return DEFAULT_LOCALE;
  const preferred = header.split(",")[0]?.trim().toLowerCase();
  if (preferred?.startsWith("ru")) return "ru";
  return DEFAULT_LOCALE;
}

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const isLocalized = LOCALES.some(
    (locale) => pathname === `/${locale}` || pathname.startsWith(`/${locale}/`),
  );
  if (isLocalized) {
    return NextResponse.next();
  }

  const cookieLocale = request.cookies.get(COOKIE_NAME)?.value;
  const locale: Locale = LOCALES.includes(cookieLocale as Locale)
    ? (cookieLocale as Locale)
    : detectFromAcceptLanguage(request.headers.get("accept-language"));

  const url = request.nextUrl.clone();
  url.pathname = `/${locale}${pathname === "/" ? "" : pathname}`;
  return NextResponse.redirect(url);
}

export const config = {
  matcher: ["/((?!_next|api|favicon.ico|.*\\..*).*)"],
};
