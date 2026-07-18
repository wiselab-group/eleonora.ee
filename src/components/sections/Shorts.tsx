"use client";

import { m } from "framer-motion";
import { useLocale } from "@/lib/i18n";
import { shorts } from "@/lib/tiles";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/motion";
import { ShortCard } from "./ShortCard";

const YOUTUBE_CHANNEL_URL = "https://www.youtube.com/@eleonora.kupczyk";

export function Shorts() {
  const { t } = useLocale();

  return (
    <section
      id="shorts"
      className="px-5 sm:px-[clamp(20px,5vw,60px)] py-10 sm:py-[clamp(40px,6vw,90px)] max-w-[1320px] mx-auto"
    >
      <m.div
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        variants={fadeUp}
        className="grid grid-cols-1 md:grid-cols-[1fr_auto] gap-6 items-end mb-7 sm:mb-[clamp(22px,3vw,38px)]"
      >
        <div>
          <h2 className="font-(family-name:--font-display) font-medium text-(length:--text-headline) leading-[1.05] max-w-[16ch] m-0 mb-3">
            {t.shortsTitle}
          </h2>
          <p className="text-[clamp(15px,1.4vw,19px)] leading-relaxed text-(--color-text-muted) max-w-[46ch] m-0">
            {t.shortsBody}
          </p>
        </div>
        <a
          href={YOUTUBE_CHANNEL_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="no-underline text-sm font-bold text-white bg-(--color-accent-text) rounded-full px-5.5 py-2.75 transition-opacity duration-250 ease-(--ease-transition) hover:opacity-88 active:opacity-75 whitespace-nowrap justify-self-start md:justify-self-end"
        >
          {t.shortsCta} →
        </a>
      </m.div>
      <m.div
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        variants={staggerContainer}
        className="grid grid-cols-4 gap-3 sm:gap-[clamp(12px,1.4vw,20px)]"
      >
        {shorts.map((short, index) => (
          <ShortCard
            key={index}
            thumbnail={short.thumbnail}
            href={short.href}
            alt={t.shortsAlt[index]}
            playLabel={t.shortsPlay}
          />
        ))}
      </m.div>
    </section>
  );
}
