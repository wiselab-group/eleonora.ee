"use client";

import Image from "next/image";
import { m } from "framer-motion";
import { Play } from "lucide-react";
import { fadeUp } from "@/lib/motion";

interface ShortCardProps {
  thumbnail: string;
  href: string;
  alt: string;
  playLabel: string;
  index: number;
}

export function ShortCard({
  thumbnail,
  href,
  alt,
  playLabel,
  index,
}: ShortCardProps) {
  const offset = index % 2 === 1;

  return (
    <m.a
      variants={fadeUp}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={playLabel}
      className={`group relative w-[62vw] sm:w-auto shrink-0 sm:shrink snap-center sm:snap-align-none aspect-9/16 overflow-hidden rounded-[18px] bg-(--color-tag-bg) ${
        offset ? "sm:translate-y-[clamp(14px,3vw,28px)]" : ""
      }`}
    >
      <Image
        src={thumbnail}
        alt={alt}
        fill
        sizes="(max-width: 640px) 78vw, 25vw"
        className="object-cover transition-opacity duration-250 ease-(--ease-transition) group-hover:opacity-80"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-t from-(--color-primary)/55 via-transparent to-transparent"
      />
      <span
        aria-hidden="true"
        className="absolute top-3.5 left-3.5 sm:top-4 sm:left-4 font-(family-name:--font-display) text-sm text-(--color-on-dark)/80"
      >
        {String(index + 1).padStart(2, "0")}
      </span>
      <span
        aria-hidden="true"
        className="absolute inset-0 flex items-center justify-center opacity-90 transition-[opacity,transform] duration-250 ease-(--ease-transition) group-hover:opacity-100"
      >
        <span className="flex items-center justify-center w-12 h-12 rounded-full bg-(--color-surface-alt)/90">
          <Play
            width={16}
            height={16}
            strokeWidth={0}
            className="ml-0.5 fill-(--color-primary)"
          />
        </span>
      </span>
      <span
        aria-hidden="true"
        className="absolute bottom-0 inset-x-0 px-4 pb-4 pt-8 bg-gradient-to-t from-(--color-primary)/90 to-transparent text-(--color-on-dark) text-xs font-bold opacity-0 translate-y-1.5 transition-[opacity,translate] duration-250 ease-(--ease-transition) will-change-transform group-hover:opacity-100 group-hover:translate-y-0"
      >
        {playLabel}
      </span>
    </m.a>
  );
}
