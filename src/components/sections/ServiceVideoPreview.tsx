"use client";

import { useEffect, useRef, useSyncExternalStore } from "react";
import Image, { type StaticImageData } from "next/image";

function subscribeToMediaQuery(query: string) {
  return (onChange: () => void) => {
    const mql = window.matchMedia(query);
    mql.addEventListener("change", onChange);
    return () => mql.removeEventListener("change", onChange);
  };
}

function useMediaQuery(query: string): boolean {
  return useSyncExternalStore(
    subscribeToMediaQuery(query),
    () => window.matchMedia(query).matches,
    () => false,
  );
}

interface ServiceVideoPreviewProps {
  src: string;
  poster: StaticImageData;
  posterAlt: string;
  hovered: boolean;
}

/**
 * Looping muted video preview for a service card. Plays only while a
 * hover-capable pointer rests on the card (hover state is owned by the
 * card so the whole card area triggers it, not just the image), freezes
 * on the poster frame otherwise (including all touch devices), and
 * never autoplays under prefers-reduced-motion.
 */
export function ServiceVideoPreview({
  src,
  poster,
  posterAlt,
  hovered,
}: ServiceVideoPreviewProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  // Server snapshot is always false; the real value syncs in right after
  // hydration via useSyncExternalStore, so no hydration mismatch occurs.
  const canHover = useMediaQuery("(hover: hover)");
  const reducedMotion = useMediaQuery("(prefers-reduced-motion: reduce)");

  useEffect(() => {
    const node = videoRef.current;
    if (!node || reducedMotion || !canHover) return;
    if (hovered) {
      node.currentTime = 0;
      node.play().catch(() => {});
    } else {
      node.pause();
    }
  }, [hovered, reducedMotion, canHover]);

  const videoVisible = !reducedMotion && canHover && hovered;

  return (
    <div className="absolute inset-0 overflow-hidden will-change-transform transition-transform duration-[900ms] ease-(--ease-transition) motion-safe:[@media(hover:hover)]:group-hover:scale-[1.08] motion-reduce:transition-none">
      <Image
        src={poster}
        alt={posterAlt}
        fill
        sizes="272px"
        className={`object-cover transition-opacity duration-250 ease-(--ease-transition) ${videoVisible ? "opacity-0" : "opacity-100"}`}
        placeholder="blur"
      />
      {!reducedMotion && canHover && (
        <video
          ref={videoRef}
          src={src}
          muted
          loop
          playsInline
          preload="metadata"
          aria-hidden="true"
          className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-250 ease-(--ease-transition) ${videoVisible ? "opacity-100" : "opacity-0"}`}
        />
      )}
    </div>
  );
}
