"use client";

import { motion } from "framer-motion";
import { useLocale } from "@/lib/i18n";
import { Button } from "@/components/ui/Button";
import { SectionKicker } from "@/components/ui/SectionKicker";
import { fadeUp, viewportOnce } from "@/lib/motion";
import { generalTelegramLink } from "@/lib/telegram";

const links = [
  { label: "Instagram", href: "https://www.instagram.com/eleonora.kupczyk/", value: "@eleonora.kupczyk" },
  { label: "Telegram", href: "https://t.me/eleonora_kupczyk", value: "@eleonora_kupczyk" },
  { label: "tel", href: "tel:+37256950304", value: "+372 569 50 304" },
  { label: "E-mail", href: "mailto:eleonora.kupczyk@gmail.com", value: "eleonora.kupczyk@gmail.com" },
];

export function Contact() {
  const { t, lang } = useLocale();

  return (
    <section
      id="contact"
      className="px-5 sm:px-[clamp(20px,5vw,60px)] pt-5 sm:pt-[clamp(20px,3vw,40px)] pb-11 sm:pb-[clamp(44px,6vw,90px)] max-w-[1320px] mx-auto"
    >
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        variants={fadeUp}
        className="bg-(--color-dark) text-(--color-on-dark) rounded-[32px] px-7 sm:px-[clamp(28px,5vw,80px)] py-10 sm:py-[clamp(40px,6vw,96px)] grid grid-cols-1 md:grid-cols-[1.2fr_.8fr] gap-7 md:gap-[clamp(28px,5vw,72px)] items-end"
      >
        <div>
          <SectionKicker tone="on-dark">{t.contactKicker}</SectionKicker>
          <h2 className="font-(family-name:--font-display) font-medium text-(length:--text-headline) leading-[1.02] mb-6 sm:mb-[clamp(22px,3vw,32px)]">
            {t.contactTitle}
          </h2>
          <p className="text-[clamp(15px,1.4vw,19px)] leading-relaxed text-(--color-on-dark)/72 max-w-[42ch] mb-7 sm:mb-[clamp(26px,3vw,36px)]">
            {t.contactBody}
          </p>
          <Button variant="solid-accent" href={generalTelegramLink(lang)}>
            {t.contactCta} <span aria-hidden="true">→</span>
          </Button>
        </div>
        <div className="flex flex-col gap-3.5 text-sm">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="flex justify-between gap-3 no-underline text-(--color-on-dark) border-t border-(--color-on-dark)/20 pt-3.5 transition-opacity duration-250 ease-(--ease-transition) hover:opacity-70"
            >
              <span className="text-(--color-on-dark)/55">
                {link.label === "tel" ? t.phone : link.label}
              </span>
              {link.value}
            </a>
          ))}
        </div>
      </motion.div>
      <div className="flex justify-between text-[11px] font-semibold tracking-[0.1em] uppercase text-(--color-text-faint) mt-5.5">
        <span>© 2026 Eleonora Kupczyk</span>
        <span>Tallinn, Estonia</span>
      </div>
    </section>
  );
}
