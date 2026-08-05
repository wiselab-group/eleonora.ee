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
      className={`group relative shrink-0 overflow-hidden rounded-2xl bg-(--color-tag-bg) ${
        isVideo
          ? "w-[38vw] sm:w-[164px] aspect-9/16"
          : "w-[46vw] sm:w-[196px] aspect-[4/5]"
      }`}
    >
      <Image
        src={image}
        alt={alt}
        fill
        sizes={
          isVideo
            ? "(max-width: 640px) 38vw, 164px"
            : "(max-width: 640px) 46vw, 196px"
        }
        className={`object-cover transition-opacity duration-250 ease-(--ease-transition) ${
          isVideo ? "group-hover:opacity-80" : "group-hover:opacity-88"
        }`}
        placeholder={typeof image === "string" ? undefined : "blur"}
      />

      {isVideo ? (
        <>
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-gradient-to-t from-(--color-primary)/55 via-transparent to-transparent"
          />
          <span
            aria-hidden="true"
            className="absolute inset-0 flex items-center justify-center opacity-90 transition-[opacity,transform] duration-250 ease-(--ease-transition) group-hover:opacity-100"
          >
            <Play
              width={40}
              height={40}
              strokeWidth={2}
              className="stroke-(--color-surface-alt) drop-shadow-[0_2px_6px_rgba(59,46,38,0.45)]"
            />
          </span>
        </>
      ) : (
        <m.div
          aria-hidden="true"
          variants={developWash}
          className="absolute inset-0 bg-(--color-tag-bg)"
        />
      )}
    </m.a>
  );
}
