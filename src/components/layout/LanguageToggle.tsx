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

  return (
    <span className="group relative isolate inline-flex items-center gap-0.5 font-body select-none rounded-full bg-(--color-tag-bg) p-1">
      <span
        aria-hidden="true"
        style={{ transform: `translateX(${activeIndex * 100}%)` }}
        className="absolute inset-y-1 left-1 w-[calc(50%-4px)] rounded-full bg-(--color-accent-text) transition-transform duration-300 ease-(--ease-transition) motion-reduce:transition-none"
      />
      {LOCALES.map((locale) => (
        <Link
          key={locale}
          href={localizedPath(pathname, locale, lang)}
          onClick={() => setLocaleCookie(locale)}
          aria-label={`Switch language to ${locale}`}
          aria-current={locale === lang ? "true" : undefined}
          className={`relative isolate flex items-center justify-center rounded-full px-3 py-1.5 text-[11px] font-bold uppercase tracking-[0.04em] no-underline cursor-pointer transition-colors duration-250 ease-(--ease-transition) before:absolute before:-inset-2.5 before:content-[''] ${
            locale === lang
              ? "text-white"
              : "text-(--color-tag-text) opacity-55 hover:opacity-80"
          }`}
        >
          {locale}
        </Link>
      ))}
    </span>
  );
}
