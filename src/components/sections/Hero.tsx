"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useLocale } from "@/lib/i18n";
import { Button } from "@/components/ui/Button";
import { fadeUp, staggerContainer } from "@/lib/motion";
import { generalTelegramLink } from "@/lib/telegram";
import eleonoraPhoto from "../../../public/images/eleonora.webp";

export function Hero() {
  const { t, lang } = useLocale();

  return (
    <motion.section
      initial="hidden"
      animate="visible"
      variants={staggerContainer}
      className="grid grid-cols-1 md:grid-cols-[1.05fr_.95fr] gap-7 md:gap-[clamp(28px,5vw,72px)] items-center px-5 sm:px-[clamp(20px,5vw,60px)] pt-[clamp(30px,5vw,72px)] pb-[clamp(24px,4vw,48px)] max-w-[1320px] mx-auto"
    >
      <motion.div variants={fadeUp}>
        <div className="inline-flex items-center gap-2 bg-(--color-tag-bg) text-(--color-tag-text) rounded-full px-4 py-1.75 text-xs font-bold tracking-[0.08em] uppercase mb-6 sm:mb-[clamp(20px,3vw,30px)]">
          SMM · UGC · Tallinn
        </div>
        <h1 className="font-(family-name:--font-display) font-medium text-[clamp(46px,8vw,104px)] leading-[0.98] tracking-[-0.01em] m-0">
          Eleonora
          <br />
          <span className="italic font-normal">Kupczyk</span>
        </h1>
        <p className="text-[clamp(16px,1.5vw,20px)] leading-relaxed text-(--color-text-muted) max-w-[34ch] my-6 sm:my-[clamp(22px,3vw,32px)]">
          {t.tagline}
        </p>
        <div className="flex flex-wrap gap-3.5 items-center">
          <Button href={generalTelegramLink(lang)}>
            {t.heroCta} <span aria-hidden="true">→</span>
          </Button>
          <a
            href="https://www.instagram.com/eleonora.kupczyk/"
            className="no-underline text-(--color-text) text-sm font-bold border-b-[1.5px] border-(--color-accent) pb-0.5 transition-opacity duration-250 ease-(--ease-transition) hover:opacity-70"
          >
            @eleonora.kupczyk
          </a>
        </div>
      </motion.div>

      <motion.div variants={fadeUp} className="relative">
        <div className="aspect-[4/5] overflow-hidden rounded-t-[200px] rounded-b-3xl bg-(--color-surface-alt) shadow-[0_30px_60px_rgba(59,46,38,0.16)] relative">
          <Image
            src={eleonoraPhoto}
            alt="Eleonora Kupczyk"
            fill
            sizes="(max-width: 768px) 100vw, 45vw"
            className="object-cover"
            placeholder="blur"
            priority
          />
        </div>
        <div className="absolute -bottom-4.5 -left-4.5 bg-(--color-surface-alt) rounded-2xl px-5 py-3.5 shadow-[0_16px_36px_rgba(59,46,38,0.14)] font-(family-name:--font-display) italic text-[clamp(15px,1.4vw,18px)] text-(--color-text)">
          {t.heroBadge}
        </div>
      </motion.div>
    </motion.section>
  );
}
