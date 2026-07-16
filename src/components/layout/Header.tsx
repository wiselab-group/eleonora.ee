"use client";

import { useLocale } from "@/lib/i18n";
import { LanguageToggle } from "./LanguageToggle";
import { Button } from "@/components/ui/Button";
import { generalTelegramLink } from "@/lib/telegram";

export function Header() {
  const { t, lang } = useLocale();

  const navItems = [
    { href: "#services", label: t.nav_services },
    { href: "#feed", label: t.nav_feed },
    { href: "#contact", label: t.nav_contact },
  ];

  return (
    <header className="flex items-center justify-between gap-2 sm:gap-6 px-4 sm:px-[clamp(20px,5vw,60px)] py-4.5 sticky top-0 bg-(--color-bg)/85 backdrop-blur-md z-40">
      <div className="font-(family-name:--font-display) text-base sm:text-xl whitespace-nowrap shrink-0">
        Eleonora <span className="italic font-normal">Kupczyk</span>
      </div>
      <nav className="hidden md:flex gap-7.5 text-(length:--text-label) font-semibold text-(--color-text-faint)">
        {navItems.map((item) => (
          <a
            key={item.href}
            href={item.href}
            className="no-underline border-b border-transparent transition-[border-color,opacity] duration-250 ease-(--ease-transition) hover:border-(--color-accent) active:opacity-70"
          >
            {item.label}
          </a>
        ))}
      </nav>
      <div className="flex items-center gap-2 sm:gap-3 shrink-0">
        <LanguageToggle />
        <Button
          variant="solid-accent"
          href={generalTelegramLink(lang)}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Telegram"
          className="px-3 py-2.25 sm:px-4.5 text-xs"
        >
          <svg
            aria-hidden="true"
            viewBox="0 0 24 24"
            width="16"
            height="16"
            fill="currentColor"
            className="shrink-0"
          >
            <path d="M21.05 3.76 2.83 10.8c-1.24.5-1.24 1.2-.23 1.5l4.68 1.46 1.8 5.6c.22.6.35.85.72.85.34 0 .5-.15.7-.36l1.95-1.9 4.05 2.99c.75.42 1.28.2 1.47-.7l2.66-12.53c.28-1.13-.42-1.64-1.53-1.15Zm-11.6 9.6-1.13-3.7L18.4 6.1c.4-.24.77-.11.47.15Z" />
          </svg>
          <span className="hidden sm:inline">Telegram</span>
        </Button>
      </div>
    </header>
  );
}
