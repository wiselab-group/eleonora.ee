"use client";

import { m, useTransform, type MotionValue } from "framer-motion";

interface ServicesProgressProps {
  progress: MotionValue<number>;
  count: number;
}

export function ServicesProgress({ progress, count }: ServicesProgressProps) {
  return (
    <div
      className="absolute bottom-8 sm:bottom-10 left-5 sm:left-[clamp(20px,5vw,60px)] flex items-center gap-2"
      role="progressbar"
      aria-label="Services scroll progress"
      aria-valuemin={1}
      aria-valuemax={count}
    >
      {Array.from({ length: count }).map((_, index) => (
        <ServicesProgressDot
          key={index}
          index={index}
          count={count}
          progress={progress}
        />
      ))}
    </div>
  );
}

function ServicesProgressDot({
  index,
  count,
  progress,
}: {
  index: number;
  count: number;
  progress: MotionValue<number>;
}) {
  const step = 1 / count;
  const start = index * step;
  const end = start + step;
  const opacity = useTransform(
    progress,
    [Math.max(start - step, 0), start, end],
    [0.3, 1, 0.3],
  );
  const scaleX = useTransform(
    progress,
    [Math.max(start - step, 0), start, end],
    [1, 1.6, 1],
  );

  return (
    <m.span
      style={{ opacity, scaleX }}
      className="h-[3px] w-5 sm:w-6 rounded-full bg-(--color-accent-text) will-change-transform origin-left"
    />
  );
}
