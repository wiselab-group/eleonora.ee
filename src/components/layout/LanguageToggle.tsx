"use client";

import { useLocale } from "@/lib/i18n";

export function LanguageToggle() {
  const { langLabel, toggleLang } = useLocale();

  return (
    <button
      type="button"
      onClick={toggleLang}
      aria-label="Switch language"
      className="font-(family-name:--font-body) cursor-pointer bg-transparent border border-(--color-border) rounded-full px-3.5 py-1.5 text-xs font-bold text-(--color-text) transition-opacity duration-250 ease-(--ease-transition) hover:opacity-70 active:opacity-55"
    >
      {langLabel}
    </button>
  );
}
