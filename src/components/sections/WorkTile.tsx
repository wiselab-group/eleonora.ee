"use client";

import Image, { type StaticImageData } from "next/image";
import { m } from "framer-motion";
import { Play } from "lucide-react";
import { developWash, fadeUp } from "@/lib/motion";

interface WorkTileProps {
  href: string;
  alt: string;
  playLabel?: string;
  kind: "photo" | "video";
  image: StaticImageData | string;
}

export function WorkTile({ href, alt, playLabel, kind, image }: WorkTileProps) {
  const isVideo = kind === "video";

  return (
    <m.a
      variants={fadeUp}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
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
            <span className="flex items-center justify-center w-10 h-10 rounded-full bg-(--color-surface-alt)/90">
              <Play
                width={14}
                height={14}
                strokeWidth={0}
                className="ml-0.5 fill-(--color-primary)"
              />
            </span>
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
