"use client";

import { useLocale } from "@/lib/i18n";
import { LanguageToggle } from "./LanguageToggle";
import { Button } from "@/components/ui/Button";

export function Header() {
  const { t } = useLocale();

  const navItems = [
    { href: "#about", label: t.nav_about },
    { href: "#services", label: t.nav_services },
    { href: "#feed", label: t.nav_feed },
    { href: "#contact", label: t.nav_contact },
  ];

  return (
    <header className="flex items-center justify-between gap-6 px-5 sm:px-[clamp(20px,5vw,60px)] py-4.5 sticky top-0 bg-(--color-bg)/85 backdrop-blur-md z-40">
      <div className="font-(family-name:--font-display) italic text-xl whitespace-nowrap">
        Eleonora Kupczyk
      </div>
      <nav className="hidden md:flex gap-7.5 text-[13px] font-semibold text-(--color-text-faint)">
        {navItems.map((item) => (
          <a
            key={item.href}
            href={item.href}
            className="no-underline border-b border-transparent transition-[border-color,opacity] duration-250 ease-(--ease-transition) hover:border-(--color-accent)"
          >
            {item.label}
          </a>
        ))}
      </nav>
      <div className="flex items-center gap-3">
        <LanguageToggle />
        <Button
          variant="solid-accent"
          href="https://t.me/eleonora_kupczyk"
          className="px-4.5 py-2.25 text-xs"
        >
          Telegram
        </Button>
      </div>
    </header>
  );
}
