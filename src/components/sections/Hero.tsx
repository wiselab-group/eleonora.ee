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
      className="relative h-[88vh] min-h-[560px] max-h-[880px] overflow-hidden"
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

      <div className="relative h-full flex flex-col justify-between px-5 sm:px-[clamp(20px,5vw,60px)] pt-[clamp(28px,5vw,56px)] pb-[clamp(28px,5vw,48px)] max-w-[1320px] mx-auto">
        <motion.div variants={fadeUp} className="max-w-[38ch]">
          <div className="inline-flex items-center gap-2 bg-(--color-bg)/90 text-(--color-tag-text) rounded-full px-4 py-1.75 text-xs font-bold tracking-[0.08em] uppercase mb-4 sm:mb-5">
            SMM · UGC · Tallinn
          </div>
          <p className="text-[clamp(15px,1.4vw,19px)] leading-relaxed text-(--color-bg) max-w-[32ch]">
            {t.tagline}
          </p>
        </motion.div>

        <div>
          <motion.h1
            variants={fadeUp}
            className="font-(family-name:--font-display) font-medium text-(--color-bg) text-[clamp(72px,13vw,208px)] leading-[0.86] tracking-[-0.02em] m-0"
          >
            Eleonora
            <br />
            <span className="italic font-normal">Kupczyk</span>
          </motion.h1>

          <motion.div
            variants={fadeUp}
            className="flex flex-wrap gap-5 items-center mt-6 sm:mt-[clamp(24px,3vw,36px)]"
          >
            <Button href={generalTelegramLink(lang)} target="_blank" rel="noopener noreferrer">
              {t.heroCta} <span aria-hidden="true">→</span>
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
      </div>
    </motion.section>
  );
}
