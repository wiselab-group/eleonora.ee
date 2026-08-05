"use client";

import { useSyncExternalStore } from "react";
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

// `svh`/`dvh` + `env(safe-area-inset-bottom)` don't reliably add up to the
// real screen height in iOS home-screen PWAs — the exact shortfall varies
// by device/WebKit build, so a fixed calc() under- or over-shoots. Reading
// `window.innerHeight` directly is the only value that always matches what's
// actually visible, so the hero is sized from that instead of a CSS unit.
//
// `innerHeight` itself changes continuously on mobile as the browser chrome
// (address bar, pull-to-refresh) shows/hides during ordinary scrolling —
// following it live would reflow the hero, and the photo inside it, on every
// one of those frames. The hero only needs to match the real device height
// once; it's re-measured on `orientationchange` and on `resize` gaps wide
// enough to be an actual window resize rather than chrome-driven wobble.
const CHROME_WOBBLE_THRESHOLD_PX = 80;

let reportedHeight = typeof window === "undefined" ? 0 : window.innerHeight;

function subscribeToViewportResize(onChange: () => void) {
  const handleResize = () => {
    const height = window.innerHeight;
    if (Math.abs(height - reportedHeight) < CHROME_WOBBLE_THRESHOLD_PX) return;
    reportedHeight = height;
    onChange();
  };

  const handleOrientationChange = () => {
    reportedHeight = window.innerHeight;
    onChange();
  };

  window.addEventListener("resize", handleResize);
  window.addEventListener("orientationchange", handleOrientationChange);
  return () => {
    window.removeEventListener("resize", handleResize);
    window.removeEventListener("orientationchange", handleOrientationChange);
  };
}

function getViewportHeightSnapshot() {
  return reportedHeight;
}

function useViewportHeight() {
  return useSyncExternalStore(
    subscribeToViewportResize,
    getViewportHeightSnapshot,
    () => 0,
  );
}

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
  const viewportHeight = useViewportHeight();

  return (
    <m.section
      initial="hidden"
      animate="visible"
      variants={staggerContainer}
      style={viewportHeight ? { height: viewportHeight } : undefined}
      className="relative h-svh min-h-140 overflow-hidden"
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
