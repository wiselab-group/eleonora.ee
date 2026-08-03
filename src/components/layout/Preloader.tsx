"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, m } from "framer-motion";
import { usePrefersReducedMotion } from "@/lib/useMediaQuery";
import { SpiralLoader } from "@/components/ui/SpiralLoader";

export function Preloader() {
  const [isLoading, setIsLoading] = useState(true);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (document.readyState === "complete") {
      const id = requestAnimationFrame(() => setIsLoading(false));
      return () => cancelAnimationFrame(id);
    }

    const handleLoad = () => setIsLoading(false);
    window.addEventListener("load", handleLoad);
    return () => window.removeEventListener("load", handleLoad);
  }, []);

  useEffect(() => {
    const staticPreloader = document.getElementById("static-preloader");
    staticPreloader?.remove();
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <m.div
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            transition: {
              duration: prefersReducedMotion ? 0.01 : 0.6,
              ease: [0.25, 0.1, 0.25, 1],
            },
          }}
          className="fixed inset-0 z-100 flex items-center justify-center bg-bg"
        >
          <SpiralLoader size={40} />
        </m.div>
      )}
    </AnimatePresence>
  );
}
