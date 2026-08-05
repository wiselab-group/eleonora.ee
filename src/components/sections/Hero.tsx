"use client";

import Image from "next/image";
import { m } from "framer-motion";
import type { Locale, Translation } from "@/lib/i18n";
import { Button } from "@/components/ui/Button";
import { TelegramIcon } from "@/components/ui/TelegramIcon";
import { InstagramIcon } from "@/components/ui/InstagramIcon";
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

interface HeroProps {
  t: Translation;
  lang: Locale;
}

export function Hero({ t, lang }: HeroProps) {
  return (
    <m.section
      initial="hidden"
      animate="visible"
      variants={staggerContainer}
      className="relative h-dvh min-h-140 overflow-hidden"
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

      <div className="relative h-full flex flex-col justify-end gap-6 sm:gap-[clamp(24px,3.2vw,40px)] pl-(--gutter-x) pr-(--gutter-x-right) pb-10 sm:pb-[clamp(96px,14vh,140px)] max-w-330 mx-auto">
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
          className="text-[clamp(15px,1.4vw,19px)] leading-relaxed text-(--color-bg)/85 max-w-[48ch] m-0"
        >
          {t.tagline}
        </m.p>

        <m.div variants={fadeUp} className="flex flex-wrap gap-5 items-center">
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
            <InstagramIcon />
            <span className="hidden sm:inline text-sm font-bold">
              eleonora.kupczyk
            </span>
          </a>
        </m.div>
      </div>
    </m.section>
  );
}
