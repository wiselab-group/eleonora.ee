"use client";

import Image, { type StaticImageData } from "next/image";
import { motion } from "framer-motion";
import { fadeUp } from "@/lib/motion";

interface ShortCardProps {
  thumbnail: StaticImageData;
  href: string;
  alt: string;
  playLabel: string;
}

export function ShortCard({ thumbnail, href, alt, playLabel }: ShortCardProps) {
  return (
    <motion.a
      variants={fadeUp}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={playLabel}
      className="group relative shrink-0 w-[clamp(148px,32vw,220px)] aspect-9/16 overflow-hidden rounded-[18px] bg-(--color-tag-bg) snap-start"
    >
      <Image
        src={thumbnail}
        alt={alt}
        fill
        sizes="(max-width: 768px) 32vw, 220px"
        className="object-cover"
        placeholder="blur"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-t from-(--color-primary)/45 via-transparent to-transparent"
      />
      <span
        aria-hidden="true"
        className="absolute inset-0 flex items-center justify-center opacity-90 transition-opacity duration-250 ease-(--ease-transition) group-hover:opacity-100"
      >
        <span className="flex items-center justify-center w-12 h-12 rounded-full bg-(--color-surface-alt)/90">
          <svg viewBox="0 0 24 24" width="16" height="16" className="ml-0.5 fill-(--color-primary)">
            <path d="M8 5v14l11-7z" />
          </svg>
        </span>
      </span>
    </motion.a>
  );
}
