"use client";

import { useEffect, useRef, useState, useSyncExternalStore } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useLocale } from "@/lib/i18n";
import { ServiceCard } from "./ServiceCard";
import { serviceImages } from "@/lib/tiles";
import { fadeUp, viewportOnce } from "@/lib/motion";

const REDUCED_MOTION_QUERY = "(prefers-reduced-motion: reduce)";

function subscribeReducedMotion(callback: () => void) {
  const mediaQuery = window.matchMedia(REDUCED_MOTION_QUERY);
  mediaQuery.addEventListener("change", callback);
  return () => mediaQuery.removeEventListener("change", callback);
}

function getReducedMotionSnapshot() {
  return window.matchMedia(REDUCED_MOTION_QUERY).matches;
}

function usePrefersReducedMotion() {
  return useSyncExternalStore(
    subscribeReducedMotion,
    getReducedMotionSnapshot,
    () => false,
  );
}

function useTrackScrollDistance(
  trackRef: React.RefObject<HTMLDivElement | null>,
  enabled: boolean,
) {
  const [distance, setDistance] = useState(0);

  useEffect(() => {
    const node = trackRef.current;
    if (!node || !enabled) return;

    const measure = () => {
      setDistance(Math.max(node.scrollWidth - window.innerWidth, 0));
    };

    measure();
    const observer = new ResizeObserver(measure);
    observer.observe(node);
    window.addEventListener("resize", measure);

    return () => {
      observer.disconnect();
      window.removeEventListener("resize", measure);
    };
  }, [trackRef, enabled]);

  return distance;
}

function useViewportHeight(enabled: boolean) {
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (!enabled) return;
    const measure = () => setHeight(window.innerHeight);
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, [enabled]);

  return height;
}

export function Services() {
  const { t } = useLocale();
  const prefersReducedMotion = usePrefersReducedMotion();
  const isPinned = !prefersReducedMotion;
  const trackRef = useRef<HTMLDivElement>(null);
  const pinRef = useRef<HTMLDivElement>(null);
  const scrollDistance = useTrackScrollDistance(trackRef, isPinned);
  const viewportHeight = useViewportHeight(isPinned);

  const { scrollYProgress } = useScroll({
    target: pinRef,
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
      <section id="services" className="relative">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={fadeUp}
          className="text-left px-5 sm:px-[clamp(20px,5vw,60px)] max-w-[1320px] mx-auto pt-12 sm:pt-[clamp(48px,7vw,100px)] mb-6 sm:mb-[clamp(24px,3vw,36px)]"
        >
          {title}
        </motion.div>
        <div className="px-5 sm:px-[clamp(20px,5vw,60px)] max-w-[1320px] mx-auto pb-10 sm:pb-[clamp(40px,6vw,90px)]">
          <div className="flex flex-col gap-4 sm:gap-[clamp(18px,2.2vw,28px)]">
            {t.services.map((service, index) => (
              <ServiceCard
                key={service.num}
                service={service}
                image={serviceImages[index]}
                duration={t.duration}
                choose={t.choose}
                variant="stacked"
              />
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="services" className="relative">
      <div
        ref={pinRef}
        style={{ height: `${viewportHeight + scrollDistance}px` }}
        className="relative"
      >
        <div className="sticky top-0 h-screen flex flex-col justify-center overflow-hidden">
          <div className="text-left px-5 sm:px-[clamp(20px,5vw,60px)] max-w-[1320px] mx-auto mb-6 sm:mb-[clamp(24px,3vw,36px)] shrink-0">
            {title}
          </div>
          <motion.div
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
                  image={serviceImages[index]}
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
          </motion.div>
        </div>
      </div>
    </section>
  );
}
