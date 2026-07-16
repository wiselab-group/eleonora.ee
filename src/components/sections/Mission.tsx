"use client";

import { motion } from "framer-motion";
import { useLocale } from "@/lib/i18n";
import { SectionKicker } from "@/components/ui/SectionKicker";
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
        className="bg-(--color-tag-bg) rounded-[28px] px-7 sm:px-[clamp(28px,5vw,72px)] py-10 sm:py-[clamp(40px,6vw,84px)] text-center"
      >
        <SectionKicker align="center">{t.missionLabel}</SectionKicker>
        <p className="font-(family-name:--font-display) font-normal text-[clamp(26px,4.4vw,58px)] leading-[1.14] mx-auto max-w-[18ch] text-[#4a382f] text-balance">
          {t.mission}
        </p>
      </motion.div>
    </section>
  );
}
