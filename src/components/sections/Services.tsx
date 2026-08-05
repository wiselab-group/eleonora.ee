"use client";

import { useState } from "react";
import { m, AnimatePresence } from "framer-motion";
import {
  Camera,
  MessageCircle,
  Handshake,
  type LucideIcon,
} from "lucide-react";
import type { Locale, Translation } from "@/lib/i18n";
import { ServiceCard } from "./ServiceCard";
import { CollabPanel } from "./CollabPanel";
import { WorkGallerySection } from "./WorkGallerySection";
import { TestimonialsSection } from "./TestimonialsSection";
import { ServicesTabList } from "./ServicesTabList";
import { serviceImages, consultServiceImages, workGallery } from "@/lib/tiles";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/motion";

interface ServicesProps {
  t: Translation;
  lang: Locale;
}

const tabIcons: Record<string, LucideIcon> = {
  shoot: Camera,
  consult: MessageCircle,
  collab: Handshake,
};

export function Services({ t, lang }: ServicesProps) {
  const tabs = [
    ...t.serviceGroups.map((group) => ({
      id: group.id,
      label: group.kicker,
      icon: tabIcons[group.id],
    })),
    { id: "collab" as const, label: t.collabKicker, icon: tabIcons.collab },
  ];
  const [active, setActive] = useState<string>(tabs[0].id);

  return (
    <section id="services" className="relative bg-(--color-bg)">
      <m.div
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        variants={fadeUp}
        className="text-left max-w-[1320px] mx-auto pl-(--gutter-x) pr-(--gutter-x-right) mb-8 sm:mb-[clamp(32px,4vw,48px)] pt-12 sm:pt-[clamp(48px,7vw,100px)]"
      >
        <h2 className="font-(family-name:--font-display) font-medium text-(length:--text-headline) leading-none max-w-[16ch] m-0">
          {t.servicesTitle}
        </h2>
      </m.div>

      <div className="pb-14 sm:pb-[clamp(56px,7vw,100px)]">
        <div className="max-w-[1320px] mx-auto pl-(--gutter-x) pr-(--gutter-x-right)">
          <ServicesTabList
            tabs={tabs}
            active={active}
            onChange={setActive}
            ariaLabel={t.servicesTitle}
          />
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
                    <div className="flex gap-4 overflow-x-auto overscroll-x-contain snap-x snap-mandatory scroll-pl-(--gutter-x) scroll-pr-(--gutter-x-right) sm:scroll-px-[calc(max(0px,(100vw-1320px)/2)+clamp(20px,5vw,60px))] pl-(--gutter-x) pr-(--gutter-x-right) sm:pr-0 sm:pl-[calc(max(0px,(100vw-1320px)/2)+clamp(20px,5vw,60px))] py-17.5 -my-17.5 scrollbar-none">
                      {group.services.map((service, index) => (
                        <div key={service.num} className="snap-start">
                          <ServiceCard
                            service={service}
                            lang={lang}
                            image={
                              group.id === "shoot"
                                ? serviceImages[index]
                                : consultServiceImages[index]
                            }
                            imageAlt={
                              group.id === "shoot"
                                ? t.serviceAlt[index]
                                : t.consultServiceAlt[index]
                            }
                            duration={t.duration}
                            choose={t.choose}
                          />
                        </div>
                      ))}
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
                <div className="max-w-[1320px] mx-auto pl-(--gutter-x) pr-(--gutter-x-right)">
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
