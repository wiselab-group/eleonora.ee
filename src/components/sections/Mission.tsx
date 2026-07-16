"use client";

import { motion } from "framer-motion";
import { useLocale } from "@/lib/i18n";
import { fadeUp, viewportOnce } from "@/lib/motion";

export function Mission() {
  const { t } = useLocale();

  return (
    <section className="px-5 sm:px-[clamp(20px,5vw,60px)] py-[clamp(20px,3vw,40px)] max-w-[1320px] mx-auto">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        variants={fadeUp}
        className="bg-(--color-tag-bg) rounded-[28px] px-7 sm:px-[clamp(28px,6vw,96px)] py-12 sm:py-[clamp(48px,8vw,104px)] text-left"
      >
        <p className="font-(family-name:--font-display) italic font-medium text-(length:--text-headline) leading-[1.08] max-w-[15ch] ml-0 mr-auto text-(--color-accent-text) text-balance">
          {t.mission}
        </p>
      </motion.div>
    </section>
  );
}
