"use client";

import { useLocale, type Locale } from "@/lib/i18n";

const LOCALES: Locale[] = ["en", "ru"];

export function LanguageToggle() {
  const { lang, toggleLang } = useLocale();
  const activeIndex = LOCALES.indexOf(lang);

  return (
    <button
      type="button"
      onClick={toggleLang}
      aria-label="Switch language"
      className="group relative isolate inline-flex items-center gap-0.5 font-body cursor-pointer select-none rounded-full bg-(--color-tag-bg) p-1 transition-opacity duration-250 ease-(--ease-transition) hover:opacity-88 active:opacity-70 before:absolute before:-inset-2.5 before:content-['']"
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
    </button>
  );
}
