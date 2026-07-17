"use client";

import { motion } from "framer-motion";
import { useLocale } from "@/lib/i18n";
import { ServiceRow } from "./ServiceRow";
import { serviceImages } from "@/lib/tiles";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/motion";

export function Services() {
  const { t } = useLocale();

  return (
    <section
      id="services"
      className="px-5 sm:px-[clamp(20px,5vw,60px)] pt-12 sm:pt-[clamp(48px,7vw,100px)] pb-10 sm:pb-[clamp(40px,6vw,90px)] max-w-[1320px] mx-auto"
    >
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        variants={fadeUp}
        className="text-left mb-6 sm:mb-[clamp(24px,3vw,36px)]"
      >
        <h2 className="font-(family-name:--font-display) font-medium text-(length:--text-headline) leading-none max-w-[16ch] m-0">
          {t.servicesTitle}
        </h2>
      </motion.div>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        variants={staggerContainer}
        className="flex flex-col gap-4 sm:gap-[clamp(18px,2.2vw,28px)]"
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
