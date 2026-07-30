"use client";

import { m } from "framer-motion";
import type { WorkGallery } from "@/lib/i18n";
import type { WorkItem } from "@/lib/tiles";
import { staggerContainer, viewportOnce } from "@/lib/motion";
import { WorkTile } from "./WorkTile";

interface WorkGallerySectionProps {
  items: WorkItem[];
  gallery: WorkGallery;
}

export function WorkGallerySection({ items, gallery }: WorkGallerySectionProps) {
  return (
    <div className="mt-8 pt-6 border-t border-(--color-border)">
      <h4 className="text-xs font-bold tracking-[0.06em] text-(--color-text-faint) mb-4">
        {gallery.label}
      </h4>
      <m.div
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        variants={staggerContainer}
        className="flex gap-3 overflow-x-auto snap-x snap-mandatory scroll-px-5 sm:scroll-px-0 -mx-5 sm:mx-0 px-5 sm:px-0 pb-1 scrollbar-none"
      >
        {items.map((item, index) => (
          <WorkTile
            key={item.href}
            kind={item.kind}
            image={item.image}
            href={item.href}
            alt={gallery.alt[index]}
            playLabel={gallery.playLabel}
          />
        ))}
      </m.div>
    </div>
  );
}
