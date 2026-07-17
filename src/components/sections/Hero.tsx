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
      className="relative h-dvh min-h-[560px] overflow-hidden"
    >
      <div className="absolute inset-0">
        <Image
          src={eleonoraPhoto}
          alt="Eleonora Kupczyk"
          fill
          sizes="100vw"
          className="object-cover object-[68%_22%] saturate-[0.85] sepia-[0.12]"
          placeholder="blur"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-(--color-primary)/75 via-(--color-primary)/15 to-(--color-primary)/35" />
      </div>

      <div className="relative h-full flex flex-col justify-center gap-6 sm:gap-[clamp(24px,3vw,36px)] px-5 sm:px-[clamp(20px,5vw,60px)] max-w-[1320px] mx-auto">
        <motion.h1
          variants={fadeUp}
          className="font-(family-name:--font-display) font-medium text-(--color-bg) text-[clamp(72px,13vw,208px)] leading-[0.86] tracking-[-0.02em] m-0"
        >
          Eleonora
          <br />
          <span className="italic font-normal">Kupczyk</span>
        </motion.h1>

        <motion.p
          variants={fadeUp}
          className="text-[clamp(15px,1.4vw,19px)] leading-relaxed text-(--color-bg) max-w-[32ch]"
        >
          {t.tagline}
        </motion.p>

        <motion.div variants={fadeUp} className="flex flex-wrap gap-5 items-center">
          <Button
            variant="solid-accent"
            href={generalTelegramLink(lang)}
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg
              aria-hidden="true"
              viewBox="0 0 24 24"
              width="18"
              height="18"
              fill="currentColor"
              className="shrink-0"
            >
              <path d="M21.05 3.76 2.83 10.8c-1.24.5-1.24 1.2-.23 1.5l4.68 1.46 1.8 5.6c.22.6.35.85.72.85.34 0 .5-.15.7-.36l1.95-1.9 4.05 2.99c.75.42 1.28.2 1.47-.7l2.66-12.53c.28-1.13-.42-1.64-1.53-1.15Zm-11.6 9.6-1.13-3.7L18.4 6.1c.4-.24.77-.11.47.15Z" />
            </svg>
            {t.heroCta}
          </Button>
          <a
            href="https://www.instagram.com/eleonora.kupczyk/"
            target="_blank"
            rel="noopener noreferrer"
            className="no-underline text-(--color-bg) text-sm font-semibold border-b border-transparent pb-0.5 transition-[border-color,opacity] duration-250 ease-(--ease-transition) hover:border-(--color-accent) active:opacity-70"
          >
            @eleonora.kupczyk
          </a>
        </motion.div>
      </div>
    </motion.section>
  );
}
