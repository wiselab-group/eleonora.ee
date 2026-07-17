"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useLocale, type Locale } from "@/lib/i18n";

const LOCALES: Locale[] = ["ru", "en"];

export function LanguageToggle() {
  const { lang, toggleLang } = useLocale();
  const reduceMotion = useReducedMotion();

  return (
    <button
      type="button"
      onClick={toggleLang}
      aria-label="Switch language"
      className="group relative isolate inline-flex items-center gap-0.5 font-body cursor-pointer select-none rounded-full bg-(--color-tag-bg) p-1 transition-opacity duration-250 ease-(--ease-transition) hover:opacity-88 active:opacity-70"
    >
      {LOCALES.map((locale) => (
        <span
          key={locale}
          className={`relative isolate rounded-full px-3 py-1.5 text-[11px] font-bold uppercase tracking-[0.04em] transition-colors duration-250 ease-(--ease-transition) ${
            locale === lang
              ? "text-white"
              : "text-(--color-tag-text) opacity-55 group-hover:opacity-80"
          }`}
        >
          {locale === lang && (
            <motion.span
              layoutId="lang-pill"
              transition={
                reduceMotion
                  ? { duration: 0 }
                  : { type: "spring", stiffness: 380, damping: 32 }
              }
              className="absolute inset-0 z-[-1] rounded-full bg-(--color-accent-text)"
            />
          )}
          {locale}
        </span>
      ))}
    </button>
  );
}
