"use client";

import { useLocale } from "@/lib/i18n";

export function LanguageToggle() {
  const { langLabel, toggleLang } = useLocale();

  return (
    <button
      type="button"
      onClick={toggleLang}
      aria-label="Switch language"
      className="inline-flex items-center justify-center font-(family-name:--font-body) cursor-pointer bg-(--color-bg)/90 border border-(--color-bg) rounded-full px-3.5 min-h-11 text-xs font-bold text-(--color-tag-text) shadow-[0_4px_16px_rgba(59,46,38,0.18)] transition-opacity duration-250 ease-(--ease-transition) hover:opacity-80 active:opacity-60"
    >
      {langLabel}
    </button>
  );
}
