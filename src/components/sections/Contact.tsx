"use client";

import { m } from "framer-motion";
import { useLocale } from "@/lib/i18n";
import { Button } from "@/components/ui/Button";
import { SectionKicker } from "@/components/ui/SectionKicker";
import { TelegramIcon } from "@/components/ui/TelegramIcon";
import { fadeUp, viewportOnce } from "@/lib/motion";
import { generalTelegramLink } from "@/lib/telegram";

const links = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/eleonora.kupczyk/",
    value: "@eleonora.kupczyk",
    external: true,
  },
  {
    label: "Telegram",
    href: "https://t.me/eleonora_kupczyk",
    value: "@eleonora_kupczyk",
    external: true,
  },
  {
    label: "tel",
    href: "tel:+37256950304",
    value: "+372 569 50 304",
    external: false,
  },
  {
    label: "E-mail",
    href: "mailto:eleonora.kupczyk@gmail.com",
    value: "eleonora.kupczyk@gmail.com",
    external: false,
  },
];

export function Contact() {
  const { t, lang } = useLocale();

  return (
    <section
      id="contact"
      className="pt-5 sm:pt-[clamp(20px,3vw,40px)] bg-(--color-dark) text-(--color-on-dark)"
    >
      <m.div
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        variants={fadeUp}
        className="px-5 sm:px-[clamp(20px,5vw,60px)] md:px-0 py-10 sm:py-[clamp(40px,6vw,96px)]"
      >
        <div className="max-w-[1320px] mx-auto md:px-[clamp(28px,5vw,80px)] grid grid-cols-1 md:grid-cols-[1.2fr_.8fr] gap-7 md:gap-[clamp(28px,5vw,72px)] items-end">
          <div>
            <SectionKicker tone="on-dark">{t.contactKicker}</SectionKicker>
            <h2 className="font-(family-name:--font-display) font-medium text-(length:--text-headline) leading-[1.02] mb-6 sm:mb-[clamp(22px,3vw,32px)]">
              {t.contactTitle}
            </h2>
            <p className="text-[clamp(15px,1.4vw,19px)] leading-relaxed text-(--color-on-dark)/72 max-w-[42ch] mb-8 sm:mb-[clamp(32px,4vw,44px)]">
              {t.contactBody}
            </p>
            <Button
              variant="solid-accent"
              href={generalTelegramLink(lang)}
              target="_blank"
              rel="noopener noreferrer"
            >
              <TelegramIcon />
              {t.contactCta}
            </Button>
          </div>
          <div className="flex flex-col gap-3.5 text-sm">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.external ? "_blank" : undefined}
                rel={link.external ? "noopener noreferrer" : undefined}
                className="flex justify-between gap-3 no-underline text-(--color-on-dark) border-t border-(--color-on-dark)/20 pt-3.5 transition-opacity duration-250 ease-(--ease-transition) hover:opacity-70 active:opacity-55"
              >
                <span className="text-(--color-on-dark)/55">
                  {link.label === "tel" ? t.phone : link.label}
                </span>
                {link.value}
              </a>
            ))}
          </div>
        </div>
      </m.div>
      <div className="flex flex-wrap justify-between items-center gap-x-4 gap-y-2 text-[11px] font-semibold tracking-[0.1em] uppercase text-(--color-text-faint) bg-(--color-bg) px-5 sm:px-[clamp(20px,5vw,60px)] py-4">
        <span>© 2026 Eleonora Kupczyk</span>
        <a
          href="https://wiselab.ee/"
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex items-baseline gap-1.5 no-underline normal-case tracking-normal text-(--color-text-faint) transition-opacity duration-250 ease-(--ease-transition) active:opacity-55"
        >
          <span>Built by</span>
          <span className="font-(family-name:--font-inter) font-extrabold text-[13px] leading-none text-(--color-text-faint) transition-colors duration-250 ease-(--ease-transition) group-hover:text-(--color-wiselab-ink)">
            wiselab
            <span className="text-(--color-text-faint) transition-colors duration-250 ease-(--ease-transition) group-hover:text-(--color-wiselab-dot)">
              .
            </span>
          </span>
        </a>
      </div>
    </section>
  );
}
