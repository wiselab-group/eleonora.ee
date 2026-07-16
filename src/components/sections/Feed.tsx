"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useLocale } from "@/lib/i18n";
import { feedImages } from "@/lib/tiles";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/motion";

export function Feed() {
  const { t } = useLocale();

  return (
    <section id="feed" className="px-5 sm:px-[clamp(20px,5vw,60px)] py-10 sm:py-[clamp(40px,6vw,90px)] max-w-[1320px] mx-auto">
      <div className="flex items-end justify-between gap-6 flex-wrap mb-7 sm:mb-[clamp(22px,3vw,38px)]">
        <h2 className="font-(family-name:--font-display) font-medium text-(length:--text-headline) leading-none m-0">
          {t.feedTitle}
        </h2>
        <a
          href="https://www.instagram.com/eleonora.kupczyk/"
          target="_blank"
          rel="noopener noreferrer"
          className="no-underline text-sm font-bold text-white bg-(--color-dark) rounded-full px-5.5 py-2.75 transition-opacity duration-250 ease-(--ease-transition) hover:opacity-88 active:opacity-75"
        >
          {t.feedCta} →
        </a>
      </div>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        variants={staggerContainer}
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 md:grid-rows-2 gap-2 sm:gap-[clamp(8px,1.2vw,16px)]"
      >
        {feedImages.map((tile, index) => (
          <motion.div
            key={index}
            variants={fadeUp}
            className={`relative rounded-2xl overflow-hidden ${
              index === 0
                ? "col-span-2 aspect-square md:aspect-auto md:row-span-2"
                : "aspect-[4/5]"
            }`}
          >
            <Image
              src={tile}
              alt={`${t.feedAlt} ${index + 1}`}
              fill
              sizes={index === 0 ? "(max-width: 768px) 100vw, 45vw" : "(max-width: 768px) 33vw, 16vw"}
              className="object-cover"
              placeholder="blur"
            />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
