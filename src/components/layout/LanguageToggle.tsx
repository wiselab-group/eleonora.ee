"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { LOCALES, type Locale } from "@/lib/i18n";

const COOKIE_NAME = "NEXT_LOCALE";

interface LanguageToggleProps {
  lang: Locale;
}

function localizedPath(pathname: string, target: Locale, current: Locale) {
  const rest = pathname.startsWith(`/${current}`)
    ? pathname.slice(`/${current}`.length)
    : pathname;
  return `/${target}${rest}`;
}

function setLocaleCookie(locale: Locale) {
  document.cookie = `${COOKIE_NAME}=${locale}; path=/; max-age=31536000`;
}

export function LanguageToggle({ lang }: LanguageToggleProps) {
  const pathname = usePathname();
  const activeIndex = LOCALES.indexOf(lang);
  const nextLang = LOCALES[(activeIndex + 1) % LOCALES.length];

  return (
    <Link
      href={localizedPath(pathname, nextLang, lang)}
      onClick={() => setLocaleCookie(nextLang)}
      aria-label={`Switch language to ${nextLang}`}
      className="group relative isolate inline-flex items-center gap-0.5 font-body no-underline select-none rounded-full bg-(--color-tag-bg) p-1 transition-opacity duration-250 ease-(--ease-transition) hover:opacity-88 active:opacity-70"
    >
      <span
        aria-hidden="true"
        style={{ transform: `translateX(${activeIndex * 100}%)` }}
        className="absolute inset-y-1 left-1 w-[calc(50%-4px)] rounded-full bg-(--color-accent-text) transition-transform duration-300 ease-(--ease-transition) motion-reduce:transition-none"
      />
      {LOCALES.map((locale) => (
        <span
          key={locale}
          className={`relative isolate flex items-center justify-center rounded-full px-3 py-1.5 text-[11px] font-bold uppercase tracking-[0.04em] transition-colors duration-250 ease-(--ease-transition) ${
            locale === lang
              ? "text-white"
              : "text-(--color-tag-text) opacity-55 group-hover:opacity-80"
          }`}
        >
          {locale}
        </span>
      ))}
    </Link>
  );
}
