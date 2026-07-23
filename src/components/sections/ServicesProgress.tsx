"use client";

import { m, useTransform, type MotionValue } from "framer-motion";

interface ServicesProgressProps {
  progress: MotionValue<number>;
  count: number;
  variant?: "pinned" | "static";
}

export function ServicesProgress({
  progress,
  count,
  variant = "pinned",
}: ServicesProgressProps) {
  const positionClass =
    variant === "pinned"
      ? "absolute bottom-8 sm:bottom-10 left-5 sm:left-[clamp(20px,5vw,60px)]"
      : "";

  return (
    <div
      className={`${positionClass} flex items-center gap-3`}
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
  const end = index === count - 1 ? 1 : start + step;

  const isActive = useTransform(
    progress,
    (value) => value >= start && value <= end,
  );
  const opacity = useTransform(isActive, (active) => (active ? 1 : 0.3));
  const scaleX = useTransform(isActive, (active) => (active ? 1.6 : 1));

  return (
    <m.span
      style={{ opacity, scaleX }}
      className="h-[3px] w-5 sm:w-6 rounded-full bg-(--color-accent-text) will-change-transform origin-center transition-all"
    />
  );
}
