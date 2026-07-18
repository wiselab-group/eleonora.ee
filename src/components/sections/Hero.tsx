"use client";

import Image from "next/image";
import { m } from "framer-motion";
import { useLocale } from "@/lib/i18n";
import { Button } from "@/components/ui/Button";
import { TelegramIcon } from "@/components/ui/TelegramIcon";
import { fadeUp, staggerContainer } from "@/lib/motion";
import { generalTelegramLink } from "@/lib/telegram";
import { GradientText } from "@/components/ui/GradientText";
import eleonoraPhoto from "../../../public/images/eleonora.webp";

const imageReveal = {
  hidden: { opacity: 0, scale: 1.06 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 1.4,
      ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number],
    },
  },
};

export function Hero() {
  const { t, lang } = useLocale();

  return (
    <m.section
      initial="hidden"
      animate="visible"
      variants={staggerContainer}
      className="relative h-dvh min-h-[560px] overflow-hidden"
    >
      <div className="absolute inset-0">
        <m.div
          variants={imageReveal}
          className="absolute inset-0 motion-reduce:opacity-100 motion-reduce:scale-100"
        >
          <Image
            src={eleonoraPhoto}
            alt="Eleonora Kupczyk"
            fill
            sizes="100vw"
            className="object-cover object-[68%_22%] saturate-[0.85] sepia-[0.12]"
            placeholder="blur"
            priority
          />
        </m.div>
        <div className="absolute inset-0 bg-gradient-to-t from-(--color-primary)/92 via-(--color-primary)/25 to-(--color-primary)/10" />
      </div>

      <div className="relative h-full flex flex-col justify-end gap-6 sm:gap-[clamp(24px,3.2vw,40px)] px-5 sm:px-[clamp(20px,5vw,60px)] pb-10 sm:pb-[clamp(96px,14vh,140px)] max-w-[1320px] mx-auto">
        <m.h1
          variants={fadeUp}
          className="font-(family-name:--font-display) font-medium text-(--color-bg) text-[clamp(72px,13vw,208px)] leading-[0.84] tracking-[-0.02em] m-0"
        >
          Eleonora
          <br />
          <GradientText as="span" className="italic font-normal">
            Kupczyk
          </GradientText>
        </m.h1>

        <m.p
          variants={fadeUp}
          className="text-[clamp(14px,1.2vw,17px)] leading-relaxed text-(--color-bg)/85 max-w-[40ch] m-0"
        >
          {t.tagline}
        </m.p>

        <m.div
          variants={fadeUp}
          className="flex flex-wrap gap-5 items-center"
        >
          <Button
            variant="solid-accent"
            href={generalTelegramLink(lang)}
            target="_blank"
            rel="noopener noreferrer"
          >
            <TelegramIcon />
            {t.heroCta}
          </Button>
          <a
            href="https://www.instagram.com/eleonora.kupczyk/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram @eleonora.kupczyk"
            className="inline-flex items-center gap-2.5 justify-center size-13 sm:size-auto text-(--color-bg) no-underline transition-opacity duration-250 ease-(--ease-transition) hover:opacity-70 active:opacity-50"
          >
            <svg
              aria-hidden="true"
              viewBox="0 0 24 24"
              width="18"
              height="18"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              className="shrink-0"
            >
              <rect x="3" y="3" width="18" height="18" rx="5" />
              <circle cx="12" cy="12" r="4" />
              <circle
                cx="17.2"
                cy="6.8"
                r="0.6"
                fill="currentColor"
                stroke="none"
              />
            </svg>
            <span className="hidden sm:inline text-sm font-bold">
              eleonora.kupczyk
            </span>
          </a>
        </m.div>
      </div>
    </m.section>
  );
}
