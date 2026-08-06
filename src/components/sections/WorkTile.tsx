"use client";

import Image, { type StaticImageData } from "next/image";
import { m } from "framer-motion";
import { Play } from "lucide-react";
import { developWash } from "@/lib/motion";

interface WorkTileProps {
  href: string;
  alt: string;
  playLabel?: string;
  kind: "photo" | "video";
  image: StaticImageData | string;
  tabIndex?: number;
}

export function WorkTile({
  href,
  alt,
  playLabel,
  kind,
  image,
  tabIndex,
}: WorkTileProps) {
  const isVideo = kind === "video";

  return (
    <m.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      tabIndex={tabIndex}
      aria-label={isVideo ? playLabel : alt}
      className="group relative shrink-0 overflow-hidden rounded-2xl bg-(--color-tag-bg) w-[46vw] sm:w-49 aspect-4/5"
    >
      <Image
        src={image}
        alt={alt}
        fill
        sizes="(max-width: 640px) 46vw, 196px"
        className="object-cover transition-opacity duration-250 ease-(--ease-transition) group-hover:opacity-88"
        placeholder={typeof image === "string" ? undefined : "blur"}
      />

      <m.div
        aria-hidden="true"
        variants={developWash}
        className="absolute inset-0 bg-(--color-tag-bg)"
      />

      {isVideo && (
        <span
          aria-hidden="true"
          className="absolute inset-0 flex items-center justify-center opacity-90 transition-[opacity,transform] duration-250 ease-(--ease-transition) group-hover:opacity-100"
        >
          <span className="relative w-14 h-14 rounded-full bg-(--color-primary)/65">
            <Play
              className="absolute top-1/2 left-1/2 w-[52%] h-[52%] -translate-x-[45%] -translate-y-1/2 fill-(--color-surface-alt)"
              strokeWidth={0}
            />
          </span>
        </span>
      )}
    </m.a>
  );
}
