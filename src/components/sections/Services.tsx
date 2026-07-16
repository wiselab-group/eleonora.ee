"use client";

import { motion } from "framer-motion";
import { useLocale } from "@/lib/i18n";
import { ServiceRow } from "./ServiceRow";
import { serviceImages } from "@/lib/tiles";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/motion";

export function Services() {
  const { t } = useLocale();

  return (
    <section id="services" className="px-5 sm:px-[clamp(20px,5vw,60px)] py-10 sm:py-[clamp(40px,6vw,90px)] max-w-[1320px] mx-auto">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        variants={fadeUp}
        className="text-center mb-9 sm:mb-[clamp(30px,4vw,52px)]"
      >
        <h2 className="font-(family-name:--font-display) font-medium text-(length:--text-headline) leading-none m-0">
          {t.servicesTitle}
        </h2>
      </motion.div>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        variants={staggerContainer}
        className="flex flex-col gap-3 sm:gap-[clamp(12px,1.6vw,18px)]"
      >
        {t.services.map((service, index) => (
          <ServiceRow
            key={service.num}
            service={service}
            image={serviceImages[index]}
            duration={t.duration}
            choose={t.choose}
          />
        ))}
      </motion.div>
    </section>
  );
}
