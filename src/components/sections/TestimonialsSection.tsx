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
    <div className="mt-10 pt-8 border-t border-(--color-border) px-5 sm:px-[clamp(20px,5vw,60px)]">
      <div className="max-w-[1320px] mx-auto">
        <h4 className="font-(family-name:--font-display) font-medium text-(length:--text-title) leading-[1.05] m-0 mb-5">
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
              className="flex flex-col h-full m-0 bg-(--color-surface) rounded-3xl p-6 shadow-[0_2px_0_rgba(59,46,38,0.04)]"
            >
              <blockquote className="m-0 mb-4 grow">
                <p className="text-[clamp(14px,1.3vw,16px)] leading-relaxed text-(--color-text) m-0">
                  “{item.quote}”
                </p>
              </blockquote>
              <figcaption className="flex flex-col">
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
