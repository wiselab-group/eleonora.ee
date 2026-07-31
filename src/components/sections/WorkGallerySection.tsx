"use client";

import { m } from "framer-motion";
import type { WorkGallery } from "@/lib/i18n";
import type { WorkItem } from "@/lib/tiles";
import { fadeUp, viewportOnce } from "@/lib/motion";
import { WorkTile } from "./WorkTile";

interface WorkGallerySectionProps {
  items: WorkItem[];
  gallery: WorkGallery;
}

const MARQUEE_SECONDS_PER_ITEM = 4.5;
// Widest a single tile gets (photo tile, mobile) plus its gap, used to size
// the base run in real pixels rather than item count — a handful of unique
// items must still tile past the widest realistic viewport before the loop
// point, or the doubled track is narrower than the screen and the mask
// reveals bare background past both ends.
const MAX_TILE_PX = 196 + 12;
const WIDEST_VIEWPORT_PX = 2600;
const MIN_BASE_REPEATS = Math.ceil(WIDEST_VIEWPORT_PX / MAX_TILE_PX);

export function WorkGallerySection({
  items,
  gallery,
}: WorkGallerySectionProps) {
  const repeats = Math.max(1, Math.ceil(MIN_BASE_REPEATS / items.length));
  const base = Array.from({ length: repeats }, () => items).flat();
  const duration = `${base.length * MARQUEE_SECONDS_PER_ITEM}s`;

  return (
    <div className="mt-16 pt-10 border-t border-(--color-border)">
      <div className="max-w-[1320px] mx-auto px-5 sm:px-[clamp(20px,5vw,60px)]">
        <h4 className="font-(family-name:--font-display) font-medium text-(length:--text-title) leading-[1.05] m-0 mb-10">
          {gallery.label}
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
          className="marquee-track flex w-max gap-3 pb-1"
          style={{ "--marquee-duration": duration } as React.CSSProperties}
        >
          {[base, base].map((group, groupIndex) => (
            <div
              key={groupIndex}
              aria-hidden={groupIndex === 1}
              className="flex gap-3 shrink-0"
            >
              {group.map((item, index) => (
                <WorkTile
                  key={`${groupIndex}-${index}-${item.href}`}
                  kind={item.kind}
                  image={item.image}
                  href={item.href}
                  alt={gallery.alt[index % items.length]}
                  playLabel={gallery.playLabel}
                  tabIndex={groupIndex === 1 ? -1 : undefined}
                />
              ))}
            </div>
          ))}
        </div>
      </m.div>
    </div>
  );
}
