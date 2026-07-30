"use client";

import { useState } from "react";
import { m, AnimatePresence } from "framer-motion";
import type { Locale, Translation } from "@/lib/i18n";
import { ServiceCard } from "./ServiceCard";
import { CollabPanel } from "./CollabPanel";
import { WorkGallerySection } from "./WorkGallerySection";
import { serviceImages, workGallery } from "@/lib/tiles";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/motion";

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
            role="tablist"
            aria-label={t.servicesTitle}
            className="flex gap-2 overflow-x-auto scrollbar-none mb-6 sm:mb-8"
          >
            {tabs.map((tab) => (
              <button
                key={tab.id}
                type="button"
                role="tab"
                aria-selected={active === tab.id}
                onClick={() => setActive(tab.id)}
                className={`shrink-0 text-left rounded-full px-4 py-2.5 sm:px-5 sm:py-3 text-sm font-bold tracking-[0.02em] transition-colors duration-250 ease-(--ease-transition) ${
                  active === tab.id
                    ? "bg-(--color-accent-text) text-white"
                    : "bg-(--color-surface) text-(--color-text-faint) hover:text-(--color-text)"
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
                    <div className="flex gap-4 overflow-x-auto snap-x snap-mandatory scroll-px-5 sm:scroll-px-[calc(max(0px,(100vw-1320px)/2)+clamp(20px,5vw,60px))] px-5 sm:pl-[calc(max(0px,(100vw-1320px)/2)+clamp(20px,5vw,60px))] py-17.5 -my-17.5 scrollbar-none">
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
                              group.id === "shoot" ? t.serviceAlt[index] : undefined
                            }
                            duration={t.duration}
                            choose={t.choose}
                          />
                        </div>
                      ))}
                      <div aria-hidden="true" className="shrink-0 w-5" />
                    </div>
                    <div className="max-w-[1320px] mx-auto px-5 sm:px-[clamp(20px,5vw,60px)]">
                      <WorkGallerySection
                        items={workGallery[group.id]}
                        gallery={t.workGalleries[group.id]}
                      />
                    </div>
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
                  <WorkGallerySection
                    items={workGallery.collab}
                    gallery={t.workGalleries.collab}
                  />
                </div>
              </m.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
