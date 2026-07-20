"use client";

import { m, useScroll, useSpring } from "framer-motion";
import { usePrefersReducedMotion } from "@/lib/useMediaQuery";

export function ScrollProgress() {
  const prefersReducedMotion = usePrefersReducedMotion();
  const { scrollYProgress } = useScroll();
  const smoothed = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <m.div
      style={{ scaleX: prefersReducedMotion ? scrollYProgress : smoothed }}
      className="fixed top-0 left-0 right-0 z-50 h-[2px] origin-left bg-(--color-accent-text) will-change-transform"
      aria-hidden="true"
    />
  );
}
