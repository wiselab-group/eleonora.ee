"use client";

import Image, { type StaticImageData } from "next/image";
import { m } from "framer-motion";
import { Play } from "lucide-react";
import type { Locale, Service } from "@/lib/i18n";
import { fadeUp } from "@/lib/motion";
import { serviceTelegramLink } from "@/lib/telegram";

interface ServiceCardProps {
  service: Service;
  lang: Locale;
  image?: StaticImageData;
  imageAlt?: string;
  duration: string;
  choose: string;
}

export function ServiceCard({
  service,
  lang,
  image,
  imageAlt,
  duration,
  choose,
}: ServiceCardProps) {
  return (
    <m.a
      variants={fadeUp}
      href={serviceTelegramLink(service, lang)}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex flex-col h-full w-[min(78vw,272px)] shrink-0 bg-(--color-surface) rounded-3xl p-4 sm:p-5 no-underline text-inherit shadow-[0_2px_0_rgba(59,46,38,0.04)] transition-shadow duration-250 ease-(--ease-transition) hover:shadow-[0_22px_44px_rgba(59,46,38,0.12)]"
    >
      <div className="aspect-[4/3] overflow-hidden rounded-2xl bg-(--color-tag-bg) relative mb-4 shrink-0">
        {image ? (
          <Image
            src={image}
            alt={imageAlt ?? ""}
            fill
            sizes="272px"
            className="object-cover"
            placeholder="blur"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="font-(family-name:--font-display) italic text-[clamp(24px,3.4vw,32px)] text-(--color-accent-text)/40">
              {service.num}
            </span>
          </div>
        )}
        {service.mediaKind === "video" && (
          <span
            aria-hidden="true"
            className="absolute inset-0 flex items-center justify-center"
          >
            <span className="flex items-center justify-center w-9 h-9 rounded-full bg-(--color-surface-alt)/90">
              <Play
                width={13}
                height={13}
                strokeWidth={0}
                className="ml-0.5 fill-(--color-primary)"
              />
            </span>
          </span>
        )}
      </div>
      <div className="flex items-baseline gap-2 mb-1.5 shrink-0">
        <span className="font-(family-name:--font-display) italic text-sm text-(--color-accent-text)">
          {service.num}
        </span>
        <h3 className="font-(family-name:--font-display) font-medium text-[clamp(17px,1.8vw,22px)] leading-[1.1] m-0">
          {service.title}
        </h3>
      </div>
      <div className="mb-2.5 shrink-0">
        <span className="text-(length:--text-label) font-bold tracking-[0.06em] uppercase text-(--color-tag-text) bg-(--color-tag-bg) rounded-full px-2.5 py-0.5">
          {service.tag}
        </span>
      </div>
      <p className="text-[13px] leading-relaxed text-(--color-text-faint) mb-3 shrink-0 grow">
        {service.desc}
      </p>
      <span className="text-[11px] font-bold tracking-[0.08em] uppercase text-(--color-text-faint) shrink-0">
        {duration} · {service.dur}
      </span>
      <div className="mt-3 pt-3 flex flex-wrap items-center justify-between gap-2 shrink-0">
        <div className="font-(family-name:--font-display) font-medium text-[clamp(19px,2vw,26px)] leading-none tracking-[-0.01em] whitespace-nowrap">
          {service.price}
        </div>
        <div className="inline-flex items-center justify-center gap-1.5 shrink-0 text-xs font-bold text-white bg-(--color-accent-text) rounded-full px-4 py-2.5">
          {choose} →
        </div>
      </div>
    </m.a>
  );
}
