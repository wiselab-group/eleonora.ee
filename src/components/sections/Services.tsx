"use client";

import { useLayoutEffect, useRef, useState } from "react";
import { m, AnimatePresence } from "framer-motion";
import type { Locale, Translation } from "@/lib/i18n";
import { ServiceCard } from "./ServiceCard";
import { CollabPanel } from "./CollabPanel";
import { WorkGallerySection } from "./WorkGallerySection";
import { TestimonialsSection } from "./TestimonialsSection";
import { serviceImages, workGallery } from "@/lib/tiles";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/motion";
import { usePrefersReducedMotion } from "@/lib/useMediaQuery";

interface ServicesProps {
  t: Translation;
  lang: Locale;
}

export function Services({ t, lang }: ServicesProps) {
  const tabs = [
    ...t.serviceGroups.map((group) => ({ id: group.id, label: group.kicker })),
    { id: "collab" as const, label: t.collabKicker },
  ];
  const [active, setActive] = useState<string>(tabs[0].id);
  const prefersReducedMotion = usePrefersReducedMotion();
  const tabListRef = useRef<HTMLDivElement>(null);
  const tabRefs = useRef(new Map<string, HTMLButtonElement>());
  const [pill, setPill] = useState<{
    x: number;
    y: number;
    width: number;
    height: number;
  } | null>(null);
  const [skipPillAnimation, setSkipPillAnimation] = useState(true);
  const isFirstMeasure = useRef(true);
  const activeRef = useRef(active);

  useLayoutEffect(() => {
    activeRef.current = active;
    const node = tabRefs.current.get(active);
    if (node) {
      setPill({
        x: node.offsetLeft,
        y: node.offsetTop,
        width: node.offsetWidth,
        height: node.offsetHeight,
      });
    }
    setSkipPillAnimation(isFirstMeasure.current);
    isFirstMeasure.current = false;
  }, [active]);

  useLayoutEffect(() => {
    const list = tabListRef.current;
    if (!list) return;
    let skippedInitialCall = false;
    const observer = new ResizeObserver(() => {
      if (!skippedInitialCall) {
        skippedInitialCall = true;
        return;
      }
      requestAnimationFrame(() => {
        const node = tabRefs.current.get(activeRef.current);
        if (node) {
          setSkipPillAnimation(true);
          setPill({
            x: node.offsetLeft,
            y: node.offsetTop,
            width: node.offsetWidth,
            height: node.offsetHeight,
          });
        }
      });
    });
    observer.observe(list);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="services" className="relative bg-(--color-bg)">
      <m.div
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        variants={fadeUp}
        className="text-left max-w-[1320px] mx-auto px-5 sm:px-[clamp(20px,5vw,60px)] mb-8 sm:mb-[clamp(32px,4vw,48px)] pt-12 sm:pt-[clamp(48px,7vw,100px)]"
      >
        <h2 className="font-(family-name:--font-display) font-medium text-(length:--text-headline) leading-none max-w-[16ch] m-0">
          {t.servicesTitle}
        </h2>
      </m.div>

      <div className="pb-14 sm:pb-[clamp(56px,7vw,100px)]">
        <div className="max-w-[1320px] mx-auto px-5 sm:px-[clamp(20px,5vw,60px)]">
          <div
            ref={tabListRef}
            role="tablist"
            aria-label={t.servicesTitle}
            className="relative isolate flex flex-col min-[520px]:flex-row min-[520px]:w-fit max-w-full gap-1 min-[520px]:overflow-x-auto scrollbar-none rounded-[28px] min-[520px]:rounded-full bg-(--color-tag-bg) p-1 mb-6 sm:mb-8"
          >
            {pill && (
              <m.span
                aria-hidden="true"
                initial={false}
                animate={{
                  x: pill.x,
                  y: pill.y,
                  width: pill.width,
                  height: pill.height,
                }}
                transition={{
                  duration: prefersReducedMotion || skipPillAnimation ? 0 : 0.5,
                  ease: [0.25, 0.1, 0.25, 1],
                }}
                className="absolute top-0 left-0 -z-10 rounded-3xl min-[520px]:rounded-full bg-(--color-accent-text) motion-reduce:transition-none"
              />
            )}
            {tabs.map((tab) => (
              <button
                key={tab.id}
                ref={(node) => {
                  if (node) tabRefs.current.set(tab.id, node);
                  else tabRefs.current.delete(tab.id);
                }}
                type="button"
                role="tab"
                aria-selected={active === tab.id}
                onClick={() => setActive(tab.id)}
                className={`relative shrink-0 text-left rounded-full px-6 py-4 text-sm font-bold tracking-[0.02em] cursor-pointer transition-[color,opacity] duration-250 ease-(--ease-transition) ${
                  active === tab.id
                    ? "text-white"
                    : "text-(--color-tag-text) opacity-100 hover:opacity-100 lg:opacity-75"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        <div className="min-w-0">
          <AnimatePresence mode="wait">
            {t.serviceGroups.map(
              (group) =>
                active === group.id && (
                  <m.div
                    key={group.id}
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                    variants={staggerContainer}
                    role="tabpanel"
                  >
                    <div className="flex gap-4 overflow-x-auto overscroll-x-contain snap-x snap-mandatory scroll-px-5 sm:scroll-px-[calc(max(0px,(100vw-1320px)/2)+clamp(20px,5vw,60px))] px-5 sm:pl-[calc(max(0px,(100vw-1320px)/2)+clamp(20px,5vw,60px))] py-17.5 -my-17.5 scrollbar-none">
                      {group.services.map((service, index) => (
                        <div key={service.num} className="snap-start">
                          <ServiceCard
                            service={service}
                            lang={lang}
                            image={
                              group.id === "shoot"
                                ? serviceImages[index]
                                : undefined
                            }
                            imageAlt={
                              group.id === "shoot"
                                ? t.serviceAlt[index]
                                : undefined
                            }
                            duration={t.duration}
                            choose={t.choose}
                          />
                        </div>
                      ))}
                      <div aria-hidden="true" className="shrink-0 w-5" />
                    </div>
                    {group.id === "shoot" ? (
                      <WorkGallerySection
                        items={workGallery.shoot}
                        gallery={t.workGalleries.shoot}
                      />
                    ) : (
                      <TestimonialsSection testimonials={t.testimonials} />
                    )}
                  </m.div>
                ),
            )}
            {active === "collab" && (
              <m.div
                key="collab"
                initial="hidden"
                animate="visible"
                exit="hidden"
                variants={fadeUp}
                role="tabpanel"
              >
                <div className="max-w-[1320px] mx-auto px-5 sm:px-[clamp(20px,5vw,60px)]">
                  <CollabPanel
                    lang={lang}
                    title={t.collabTitle}
                    desc={t.collabDesc}
                    formats={t.collabFormats}
                    barter={t.collabBarter}
                    cta={t.collabCta}
                  />
                </div>
                <WorkGallerySection
                  items={workGallery.collab}
                  gallery={t.workGalleries.collab}
                />
              </m.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
