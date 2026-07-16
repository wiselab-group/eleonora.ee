"use client";

import { motion } from "framer-motion";
import { useLocale } from "@/lib/i18n";
import { SectionKicker } from "@/components/ui/SectionKicker";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/motion";

export function About() {
  const { t } = useLocale();

  return (
    <motion.section
      id="about"
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      variants={staggerContainer}
      className="grid grid-cols-1 md:grid-cols-[.9fr_1.1fr] gap-7 md:gap-[clamp(28px,5vw,72px)] items-center px-5 sm:px-[clamp(20px,5vw,60px)] py-11 sm:py-[clamp(44px,6vw,96px)] max-w-[1320px] mx-auto"
    >
      <motion.div
        variants={fadeUp}
        className="aspect-square overflow-hidden rounded-[28px] bg-(--color-surface-alt) shadow-[0_24px_50px_rgba(59,46,38,0.14)]"
      />
      <motion.div variants={fadeUp}>
        <SectionKicker>{t.aboutKicker}</SectionKicker>
        <h2 className="font-(family-name:--font-display) font-medium text-[clamp(30px,4.4vw,58px)] leading-[1.05] mb-5 sm:mb-[clamp(20px,3vw,28px)]">
          {t.aboutTitle}
        </h2>
        <p className="text-[clamp(15px,1.35vw,18px)] leading-[1.75] text-(--color-text-muted) max-w-[52ch] mb-6">
          {t.aboutBody}
        </p>
        <p className="font-(family-name:--font-display) italic text-[clamp(20px,2.2vw,28px)] leading-[1.3] text-[#9a6a5e] max-w-[36ch] m-0">
          &ldquo;{t.aboutQuote}&rdquo;
        </p>
      </motion.div>
    </motion.section>
  );
}
