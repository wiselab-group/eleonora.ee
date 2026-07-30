"use client";

import { m } from "framer-motion";
import type { Locale, CollabFormat } from "@/lib/i18n";
import { fadeUp } from "@/lib/motion";
import { collabTelegramLink } from "@/lib/telegram";

interface CollabPanelProps {
  lang: Locale;
  title: string;
  desc: string;
  formats: CollabFormat[];
  barter: string;
  cta: string;
}

export function CollabPanel({
  lang,
  title,
  desc,
  formats,
  barter,
  cta,
}: CollabPanelProps) {
  return (
    <m.div
      variants={fadeUp}
      className="flex flex-col md:flex-row gap-6 md:gap-10 w-full max-w-[720px] bg-(--color-surface) rounded-3xl p-6 sm:p-8 shadow-[0_2px_0_rgba(59,46,38,0.04)]"
    >
      <div className="md:w-[38%] shrink-0">
        <h3 className="font-(family-name:--font-display) font-medium text-(length:--text-title) leading-[1.05] m-0 mb-3">
          {title}
        </h3>
        <p className="text-[clamp(13px,1.1vw,14px)] leading-relaxed text-(--color-text-faint) mb-4">
          {desc}
        </p>
        <p className="text-[clamp(12px,1vw,13px)] leading-relaxed text-(--color-text-faint)/80 italic">
          {barter}
        </p>
      </div>
      <div className="flex-1 flex flex-col justify-between min-w-0">
        <ul className="flex flex-col divide-y divide-(--color-border) mb-5">
          {formats.map((format) => (
            <li
              key={format.label}
              className="flex items-baseline justify-between gap-4 py-3 first:pt-0 last:pb-0"
            >
              <span className="text-[clamp(13px,1.1vw,15px)] leading-snug">
                {format.label}
              </span>
              <span className="font-(family-name:--font-display) font-medium text-[clamp(15px,1.4vw,18px)] whitespace-nowrap">
                {format.price}
              </span>
            </li>
          ))}
        </ul>
        <a
          href={collabTelegramLink(lang)}
          target="_blank"
          rel="noopener noreferrer"
          className="self-start inline-flex items-center justify-center gap-1.5 text-sm font-bold text-white bg-(--color-accent-text) rounded-full px-5 py-3 no-underline transition-opacity duration-250 ease-(--ease-transition) hover:opacity-88"
        >
          {cta} →
        </a>
      </div>
    </m.div>
  );
}
