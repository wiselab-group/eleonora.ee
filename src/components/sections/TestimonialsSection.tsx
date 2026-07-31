"use client";

import { m } from "framer-motion";
import type { Testimonials } from "@/lib/i18n";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/motion";

interface TestimonialsSectionProps {
  testimonials: Testimonials;
}

export function TestimonialsSection({
  testimonials,
}: TestimonialsSectionProps) {
  return (
    <div className="mt-10 pt-8 border-t border-(--color-border)">
      <div className="max-w-[1320px] mx-auto px-5 sm:px-[clamp(20px,5vw,60px)]">
        <h4 className="font-(family-name:--font-display) font-medium text-(length:--text-title) leading-[1.05] m-0 mb-10">
          {testimonials.label}
        </h4>
        <m.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-3 gap-4"
        >
          {testimonials.items.map((item) => (
            <m.figure
              key={item.name}
              variants={fadeUp}
              className="flex flex-col h-full m-0 bg-(--color-surface) rounded-3xl p-6 sm:p-7 shadow-[0_2px_0_rgba(59,46,38,0.04)]"
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
            </m.figure>
          ))}
        </m.div>
      </div>
    </div>
  );
}
