"use client";

import { useRef } from "react";
import { m, useScroll, useTransform } from "framer-motion";
import type { Locale, Translation } from "@/lib/i18n";
import { useMediaQuery, usePrefersReducedMotion } from "@/lib/useMediaQuery";
import { ServiceCard } from "./ServiceCard";
import { ServicesProgress } from "./ServicesProgress";
import { useTrackScrollDistance, useViewportHeight } from "./useServicesTrack";
import { serviceImages } from "@/lib/tiles";
import { fadeUp, viewportOnce } from "@/lib/motion";

const PIN_DISTANCE_FACTOR = 0.7;
const DESKTOP_QUERY = "(min-width: 1024px)";

interface ServicesProps {
  t: Translation;
  lang: Locale;
}

export function Services({ t, lang }: ServicesProps) {
  const prefersReducedMotion = usePrefersReducedMotion();
  const isDesktop = useMediaQuery(DESKTOP_QUERY);
  const isPinned = isDesktop && !prefersReducedMotion;
  const trackRef = useRef<HTMLDivElement>(null);
  const pinRef = useRef<HTMLDivElement>(null);
  const scrollDistance = useTrackScrollDistance(trackRef, isPinned);
  const viewportHeight = useViewportHeight(isPinned);

  const pinDistance = scrollDistance * PIN_DISTANCE_FACTOR;

  const { scrollYProgress } = useScroll({
    target: isPinned ? pinRef : undefined,
    offset: ["start start", "end end"],
  });

  const x = useTransform(scrollYProgress, [0, 1], [0, -scrollDistance]);

  const title = (
    <h2 className="font-(family-name:--font-display) font-medium text-(length:--text-headline) leading-none max-w-[16ch] m-0">
      {t.servicesTitle}
    </h2>
  );

  if (!isPinned) {
    return (
      <section id="services" className="relative bg-(--color-bg)">
        <m.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={fadeUp}
          className="text-left px-5 sm:px-[clamp(20px,5vw,60px)] mb-6 sm:mb-[clamp(24px,3vw,36px)] pt-12 sm:pt-[clamp(48px,7vw,100px)]"
        >
          {title}
        </m.div>
        <div
          className="flex gap-4 sm:gap-5 overflow-x-auto snap-x snap-mandatory scroll-px-5 sm:scroll-px-[clamp(20px,5vw,60px)] px-5 sm:px-[clamp(20px,5vw,60px)] pb-10 sm:pb-[clamp(40px,6vw,90px)] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          role="group"
          aria-label={t.servicesTitle}
        >
          {t.services.map((service, index) => (
            <div key={service.num} className="shrink-0 snap-start">
              <ServiceCard
                service={service}
                lang={lang}
                image={serviceImages[index]}
                imageAlt={t.serviceAlt[index]}
                duration={t.duration}
                choose={t.choose}
                variant="panel"
              />
            </div>
          ))}
          <div aria-hidden="true" className="shrink-0 w-px" />
        </div>
      </section>
    );
  }

  return (
    <section id="services" className="relative">
      <div
        ref={pinRef}
        style={{ height: `${viewportHeight + pinDistance}px` }}
        className="relative"
      >
        <div className="sticky top-0 h-screen flex flex-col justify-center overflow-hidden [--services-title-space:180px] sm:[--services-title-space:220px]">
          <div className="text-left px-5 sm:px-[clamp(20px,5vw,60px)] max-w-[1320px] mb-6 sm:mb-[clamp(24px,3vw,36px)] shrink-0">
            {title}
          </div>
          <m.div
            ref={trackRef}
            style={{ x }}
            className="flex will-change-transform pl-5 sm:pl-[clamp(20px,5vw,60px)]"
          >
            {t.services.map((service, index) => (
              <div
                key={service.num}
                className="shrink-0 pr-4 sm:pr-[clamp(16px,1.8vw,28px)]"
              >
                <ServiceCard
                  service={service}
                  lang={lang}
                  image={serviceImages[index]}
                  imageAlt={t.serviceAlt[index]}
                  duration={t.duration}
                  choose={t.choose}
                  variant="panel"
                />
              </div>
            ))}
            <div
              aria-hidden="true"
              className="shrink-0 w-5 sm:w-[clamp(20px,5vw,60px)]"
            />
          </m.div>
          <ServicesProgress
            progress={scrollYProgress}
            count={t.services.length}
          />
        </div>
      </div>
    </section>
  );
}
