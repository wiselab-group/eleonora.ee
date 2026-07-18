"use client";

import Image, { type StaticImageData } from "next/image";
import { motion } from "framer-motion";
import { useLocale, type Service } from "@/lib/i18n";
import { fadeUp } from "@/lib/motion";
import { serviceTelegramLink } from "@/lib/telegram";

interface ServiceCardProps {
  service: Service;
  image: StaticImageData;
  imageAlt: string;
  duration: string;
  choose: string;
  variant: "panel" | "stacked";
}

export function ServiceCard({
  service,
  image,
  imageAlt,
  duration,
  choose,
  variant,
}: ServiceCardProps) {
  const { lang } = useLocale();

  const numBadge = (
    <span className="font-(family-name:--font-display) italic text-base text-(--color-accent-text)">
      {service.num}
    </span>
  );

  const tag = (
    <span className="text-(length:--text-label) font-bold tracking-[0.06em] uppercase text-(--color-tag-text) bg-(--color-tag-bg) rounded-full px-2.75 py-0.75">
      {service.tag}
    </span>
  );

  const priceAndCta = (
    <>
      <div className="font-(family-name:--font-display) font-medium text-[clamp(26px,3.2vw,44px)] leading-none tracking-[-0.01em]">
        {service.price}
      </div>
      <div className="inline-flex items-center gap-1.5 mt-3.5 text-xs font-bold text-white bg-(--color-accent-text) rounded-full px-4 py-2">
        {choose} →
      </div>
    </>
  );

  if (variant === "panel") {
    return (
      <a
        href={serviceTelegramLink(service, lang)}
        target="_blank"
        rel="noopener noreferrer"
        className="group flex flex-col h-full max-h-[min(520px,calc(100dvh-var(--services-title-space)))] w-[min(78vw,340px)] bg-(--color-surface) rounded-3xl p-5 sm:p-6 no-underline text-inherit shadow-[0_2px_0_rgba(59,46,38,0.04)] transition-shadow duration-250 ease-(--ease-transition) hover:shadow-[0_22px_44px_rgba(59,46,38,0.12)]"
      >
        <div className="aspect-4/3 overflow-hidden rounded-[18px] bg-(--color-tag-bg) relative mb-4">
          <Image
            src={image}
            alt={imageAlt}
            fill
            sizes="340px"
            className="object-cover"
            placeholder="blur"
          />
        </div>
        <div className="flex items-baseline gap-3 flex-wrap mb-2">
          {numBadge}
          <h3 className="font-(family-name:--font-display) font-medium text-(length:--text-title) leading-[1.05] m-0">
            {service.title}
          </h3>
        </div>
        <div className="mb-2">{tag}</div>
        <p className="text-[clamp(13px,1.1vw,14px)] leading-relaxed text-(--color-text-faint) mb-2">
          {service.desc}
        </p>
        <span className="text-(length:--text-label) font-bold tracking-[0.1em] uppercase text-(--color-text-faint)">
          {duration} · {service.dur}
        </span>
        <div className="mt-auto pt-4">{priceAndCta}</div>
      </a>
    );
  }

  return (
    <motion.a
      variants={fadeUp}
      href={serviceTelegramLink(service, lang)}
      target="_blank"
      rel="noopener noreferrer"
      className="group grid grid-cols-[88px_1fr] sm:grid-cols-[128px_1fr_auto] gap-4.5 sm:gap-[clamp(18px,2.6vw,40px)] items-center bg-(--color-surface) rounded-3xl p-4 sm:p-[clamp(16px,1.6vw,22px)] no-underline text-inherit shadow-[0_2px_0_rgba(59,46,38,0.04)] transition-shadow duration-250 ease-(--ease-transition) hover:shadow-[0_22px_44px_rgba(59,46,38,0.12)]"
    >
      <div className="aspect-square overflow-hidden rounded-[18px] bg-(--color-tag-bg) relative">
        <Image
          src={image}
          alt={imageAlt}
          fill
          sizes="128px"
          className="object-cover"
          placeholder="blur"
        />
      </div>
      <div className="min-w-0 col-span-2 sm:col-span-1">
        <div className="flex items-baseline gap-3 flex-wrap mb-2">
          {numBadge}
          <h3 className="font-(family-name:--font-display) font-medium text-(length:--text-title) leading-[1.05] m-0">
            {service.title}
          </h3>
          {tag}
        </div>
        <p className="text-[clamp(13px,1.1vw,14px)] leading-relaxed text-(--color-text-faint) mb-2 max-w-[58ch]">
          {service.desc}
        </p>
        <span className="text-(length:--text-label) font-bold tracking-[0.1em] uppercase text-(--color-text-faint)">
          {duration} · {service.dur}
        </span>
      </div>
      <div className="text-right whitespace-nowrap pr-1 sm:pr-[clamp(6px,1vw,18px)] col-span-2 sm:col-span-1">
        {priceAndCta}
      </div>
    </motion.a>
  );
}
