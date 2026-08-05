"use client";

import { useEffect, useRef, useState } from "react";
import Image, { type StaticImageData } from "next/image";

interface ServiceVideoPreviewProps {
  src: string;
  poster: StaticImageData;
  posterAlt: string;
}

/**
 * Looping muted video preview for a service card. Plays only while the
 * card is in view, freezes on the poster frame otherwise, and never
 * autoplays under prefers-reduced-motion.
 */
export function ServiceVideoPreview({
  src,
  poster,
  posterAlt,
}: ServiceVideoPreviewProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [inView, setInView] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(
    () =>
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches,
  );

  useEffect(() => {
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    const onChange = (e: MediaQueryListEvent) => setReducedMotion(e.matches);
    query.addEventListener("change", onChange);
    return () => query.removeEventListener("change", onChange);
  }, []);

  useEffect(() => {
    const node = videoRef.current;
    if (!node || reducedMotion) return;
    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold: 0.4 },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, [reducedMotion]);

  useEffect(() => {
    const node = videoRef.current;
    if (!node || reducedMotion) return;
    if (inView) {
      node.play().catch(() => {});
    } else {
      node.pause();
    }
  }, [inView, reducedMotion]);

  const videoVisible = !reducedMotion && inView;

  return (
    <>
      <Image
        src={poster}
        alt={posterAlt}
        fill
        sizes="272px"
        className={`object-cover will-change-transform transition-[transform,opacity] duration-[900ms] ease-(--ease-transition) motion-safe:[@media(hover:hover)]:group-hover:scale-[1.08] motion-reduce:transition-none ${videoVisible ? "opacity-0" : "opacity-100"}`}
        placeholder="blur"
      />
      {!reducedMotion && (
        <video
          ref={videoRef}
          src={src}
          muted
          loop
          playsInline
          preload="metadata"
          aria-hidden="true"
          className={`absolute inset-0 h-full w-full object-cover will-change-transform transition-[transform,opacity] duration-[900ms] ease-(--ease-transition) motion-safe:[@media(hover:hover)]:group-hover:scale-[1.08] ${videoVisible ? "opacity-100" : "opacity-0"}`}
        />
      )}
    </>
  );
}
