"use client";

import * as React from "react";
import Lottie from "lottie-react";
import { usePrefersReducedMotion } from "@/lib/useMediaQuery";
import { spiralFastData } from "./spiralAnimationData";

export type SpiralLoaderProps = {
  size?: number;
  className?: string;
};

export function SpiralLoader({ size = 16, className = "" }: SpiralLoaderProps) {
  const prefersReducedMotion = usePrefersReducedMotion();

  return (
    <div
      className={`relative shrink-0 ${className}`}
      style={{ width: size, height: size }}
      role="status"
      aria-label="Loading"
    >
      {prefersReducedMotion ? (
        <svg
          viewBox="0 0 25 13"
          width="100%"
          height="100%"
          style={{ overflow: "visible" }}
        >
          <g transform="translate(8, 6.5)" opacity={0.24}>
            <path
              d="M-12,6 C-7.548,6 -5.264,2.704 -4.975,-1.012 C-4.745,-3.639 -6.218,-6 -8,-6 C-9.782,-6 -11.255,-3.639 -11.025,-1.012 C-10.736,2.704 -8.452,6 -4,6 C0.548,6 3.264,2.704 3.025,-1.012 C2.795,-3.639 1.782,-6 0,-6 C-1.782,-6 -3.255,-3.639 -3.025,-1.012 C-2.736,2.704 -0.452,6 4,6 C8.452,6 11.264,2.704 11.025,-1.012 C10.793,-3.639 9.782,-6 8,-6 C6.218,-6 4.748,-3.639 4.98,-1.012 C5.272,2.704 7.548,6 12,6"
              fill="none"
              stroke="var(--color-accent)"
              strokeWidth={1.4}
              strokeLinecap="round"
              strokeLinejoin="round"
              pathLength={1}
              strokeDasharray="0.33 0.67"
              strokeDashoffset={-0.23}
            />
          </g>
        </svg>
      ) : (
        <>
          <Lottie
            animationData={spiralFastData}
            loop
            autoplay
            style={{ width: "100%", height: "100%" }}
          />
        </>
      )}
    </div>
  );
}
