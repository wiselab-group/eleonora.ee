"use client";

import { m } from "framer-motion";
import { useTabPill } from "@/lib/useTabPill";
import { usePrefersReducedMotion } from "@/lib/useMediaQuery";

interface Tab {
  id: string;
  label: string;
}

interface ServicesTabListProps {
  tabs: Tab[];
  active: string;
  onChange: (id: string) => void;
  ariaLabel: string;
}

export function ServicesTabList({
  tabs,
  active,
  onChange,
  ariaLabel,
}: ServicesTabListProps) {
  const prefersReducedMotion = usePrefersReducedMotion();
  const { tabListRef, pill, skipPillAnimation, registerTab } =
    useTabPill(active);

  return (
    <div
      ref={tabListRef}
      role="tablist"
      aria-label={ariaLabel}
      className="relative isolate flex flex-col min-[520px]:flex-row min-[520px]:w-fit max-w-full gap-1 min-[520px]:overflow-x-auto scrollbar-none rounded-[28px] min-[520px]:rounded-full bg-(--color-tag-bg) p-1 mb-6 sm:mb-8"
    >
      {pill && (
        <m.span
          aria-hidden="true"
          initial={false}
          animate={{
            x: pill.x,
            y: pill.y,
            width: pill.width,
            height: pill.height,
          }}
          transition={{
            duration: prefersReducedMotion || skipPillAnimation ? 0 : 0.5,
            ease: [0.25, 0.1, 0.25, 1],
          }}
          className="absolute top-0 left-0 -z-10 rounded-3xl min-[520px]:rounded-full bg-(--color-accent-text) motion-reduce:transition-none"
        />
      )}
      {tabs.map((tab) => (
        <button
          key={tab.id}
          ref={registerTab(tab.id)}
          type="button"
          role="tab"
          aria-selected={active === tab.id}
          onClick={() => onChange(tab.id)}
          className={`relative shrink-0 text-left rounded-full px-6 py-4 text-sm font-bold tracking-[0.02em] cursor-pointer transition-[color,opacity] duration-250 ease-(--ease-transition) ${
            active === tab.id
              ? "text-white"
              : "text-(--color-tag-text) opacity-100 hover:opacity-100 lg:opacity-75"
          }`}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
}
