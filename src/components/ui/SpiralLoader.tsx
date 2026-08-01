"use client";

import { m } from "framer-motion";
import { usePrefersReducedMotion } from "@/lib/useMediaQuery";

// Reference shape: 4 repeating loops, chased by a moving trimmed arc.
const SPIRAL_PATH =
  "M-12,6 C-7.548,6 -5.264,2.704 -4.975,-1.012 C-4.745,-3.639 -6.218,-6 -8,-6 C-9.782,-6 -11.255,-3.639 -11.025,-1.012 C-10.736,2.704 -8.452,6 -4,6 C0.548,6 3.264,2.704 3.025,-1.012 C2.795,-3.639 1.782,-6 0,-6 C-1.782,-6 -3.255,-3.639 -3.025,-1.012 C-2.736,2.704 -0.452,6 4,6 C8.452,6 11.264,2.704 11.025,-1.012 C10.793,-3.639 9.782,-6 8,-6 C6.218,-6 4.748,-3.639 4.98,-1.012 C5.272,2.704 7.548,6 12,6";

// Mirrors the reference: 4 fast beats, then 2 slow beats, looping forever.
const FAST_BEATS = 4;
const SLOW_BEATS = 2;
const FAST_DURATION = 0.483;
const SLOW_DURATION = 0.983;
const BEAT_COUNT = FAST_BEATS + SLOW_BEATS;
const LOOP_WIDTH = 8;

const beatDurations = [
  ...Array(FAST_BEATS).fill(FAST_DURATION),
  ...Array(SLOW_BEATS).fill(SLOW_DURATION),
];
const totalDuration = beatDurations.reduce((sum, d) => sum + d, 0);

const times = (() => {
  const acc = [0];
  let running = 0;
  for (const d of beatDurations) {
    running += d;
    acc.push(running / totalDuration);
  }
  return acc;
})();

// Each beat travels one loop-width in the same direction — no reversal —
// then the loop wraps instantly back to the start (repeatType: "loop").
const xKeyframes = Array.from(
  { length: BEAT_COUNT + 1 },
  (_, i) => 12 - i * LOOP_WIDTH,
);
const dashKeyframes = Array.from(
  { length: BEAT_COUNT + 1 },
  (_, i) => 0.77 - i * 0.33,
);

const loopTransition = {
  duration: totalDuration,
  times,
  ease: "easeInOut" as const,
  repeat: Infinity,
  repeatType: "loop" as const,
};

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
      <svg
        viewBox="0 0 25 13"
        width="100%"
        height="100%"
        style={{ overflow: "visible" }}
      >
        {prefersReducedMotion ? (
          <g transform="translate(8, 6.5)" opacity={0.24}>
            <path
              d={SPIRAL_PATH}
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
        ) : (
          <m.g
            animate={{ x: xKeyframes }}
            initial={{ x: 12, y: 6.5 }}
            transition={{ x: loopTransition }}
            style={{ willChange: "transform" }}
          >
            <m.path
              d={SPIRAL_PATH}
              fill="none"
              stroke="var(--color-accent)"
              strokeWidth={1.4}
              strokeLinecap="round"
              strokeLinejoin="round"
              opacity={0.24}
              pathLength={1}
              strokeDasharray="0.33 0.67"
              initial={{ strokeDashoffset: 0.77 }}
              animate={{ strokeDashoffset: dashKeyframes }}
              transition={{ strokeDashoffset: loopTransition }}
              style={{ willChange: "stroke-dashoffset" }}
            />
          </m.g>
        )}
      </svg>
    </div>
  );
}
