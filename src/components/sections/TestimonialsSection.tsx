"use client";

import { m } from "framer-motion";
import type { Testimonials } from "@/lib/i18n";
import { fadeUp, viewportOnce } from "@/lib/motion";

interface TestimonialsSectionProps {
  testimonials: Testimonials;
}

const MARQUEE_SECONDS_PER_ITEM = 6;
// Same reasoning as WorkGallerySection: size the base run in real pixels so a
// handful of unique cards still tile past the widest realistic viewport
// before the loop point, or the doubled track is narrower than the screen
// and the mask reveals bare background past both ends.
const CARD_PX = 380 + 16;
const WIDEST_VIEWPORT_PX = 2600;
const MIN_BASE_REPEATS = Math.ceil(WIDEST_VIEWPORT_PX / CARD_PX);

export function TestimonialsSection({
  testimonials,
}: TestimonialsSectionProps) {
  const items = testimonials.items;
  const repeats = Math.max(1, Math.ceil(MIN_BASE_REPEATS / items.length));
  const base = Array.from({ length: repeats }, () => items).flat();
  const duration = `${base.length * MARQUEE_SECONDS_PER_ITEM}s`;

  return (
    <div className="mt-10 pt-8 border-t border-(--color-border)">
      <div className="max-w-[1320px] mx-auto px-5 sm:px-[clamp(20px,5vw,60px)]">
        <h4 className="font-(family-name:--font-display) font-medium text-(length:--text-title) leading-[1.05] m-0 mb-10">
          {testimonials.label}
        </h4>
      </div>
      <m.div
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        variants={fadeUp}
        className="overflow-hidden"
      >
        <div
          className="marquee-track flex w-max gap-4 pb-1"
          style={{ "--marquee-duration": duration } as React.CSSProperties}
        >
          {[base, base].map((group, groupIndex) => (
            <div
              key={groupIndex}
              aria-hidden={groupIndex === 1}
              className="flex gap-4 shrink-0"
            >
              {group.map((item, index) => (
                <figure
                  key={`${groupIndex}-${index}-${item.name}`}
                  className="flex flex-col shrink-0 w-[82vw] sm:w-[380px] m-0 bg-(--color-surface) rounded-3xl p-6 sm:p-7 shadow-[0_2px_0_rgba(59,46,38,0.04)]"
                >
                  <span
                    aria-hidden="true"
                    className="font-(family-name:--font-display) italic text-(--color-accent-text) text-[clamp(40px,4.4vw,52px)] leading-none mb-1 select-none"
                  >
                    “
                  </span>
                  <blockquote className="m-0 mb-6 grow">
                    <p className="font-(family-name:--font-display) italic font-medium text-[clamp(17px,1.7vw,21px)] leading-[1.35] text-(--color-text) m-0">
                      {item.quote}
                    </p>
                  </blockquote>
                  <figcaption className="flex flex-col pt-4 border-t border-(--color-border)">
                    <span className="font-(family-name:--font-display) font-medium text-[clamp(15px,1.4vw,17px)] leading-tight">
                      {item.name}
                    </span>
                    <span className="text-[11px] font-bold tracking-[0.06em] uppercase text-(--color-text-faint)">
                      {item.role}
                    </span>
                  </figcaption>
                </figure>
              ))}
            </div>
          ))}
        </div>
      </m.div>
    </div>
  );
}
