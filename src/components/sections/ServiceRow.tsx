"use client";

import Image, { type StaticImageData } from "next/image";
import { motion } from "framer-motion";
import { useLocale, type Service } from "@/lib/i18n";
import { fadeUp } from "@/lib/motion";
import { serviceTelegramLink } from "@/lib/telegram";

interface ServiceRowProps {
  service: Service;
  image: StaticImageData;
  duration: string;
  choose: string;
}

export function ServiceRow({ service, image, duration, choose }: ServiceRowProps) {
  const { lang } = useLocale();

  return (
    <motion.a
      variants={fadeUp}
      href={serviceTelegramLink(service, lang)}
      target="_blank"
      rel="noopener noreferrer"
      className="grid grid-cols-[88px_1fr] sm:grid-cols-[128px_1fr_auto] gap-4.5 sm:gap-[clamp(18px,2.6vw,40px)] items-center bg-(--color-surface) rounded-3xl p-4 sm:p-[clamp(16px,1.6vw,22px)] no-underline text-inherit shadow-[0_2px_0_rgba(59,46,38,0.04)] transition-[transform,box-shadow] duration-250 ease-(--ease-transition) hover:-translate-y-[3px] hover:shadow-[0_22px_44px_rgba(59,46,38,0.12)] active:translate-y-0 active:shadow-[0_2px_0_rgba(59,46,38,0.04)]"
    >
      <div className="aspect-square overflow-hidden rounded-[18px] bg-(--color-tag-bg) relative">
        <Image
          src={image}
          alt={service.title}
          fill
          sizes="128px"
          className="object-cover"
          placeholder="blur"
        />
      </div>
      <div className="min-w-0 col-span-2 sm:col-span-1">
        <div className="flex items-baseline gap-3 flex-wrap mb-2">
          <span className="font-(family-name:--font-display) italic text-base text-(--color-accent-text)">
            {service.num}
          </span>
          <h3 className="font-(family-name:--font-display) font-medium text-(length:--text-title) leading-[1.05] m-0">
            {service.title}
          </h3>
          <span className="text-(length:--text-label) font-bold tracking-[0.06em] uppercase text-(--color-tag-text) bg-(--color-tag-bg) rounded-full px-2.75 py-0.75">
            {service.tag}
          </span>
        </div>
        <p className="text-[clamp(13px,1.15vw,15px)] leading-relaxed text-(--color-text-faint) mb-2 max-w-[64ch]">
          {service.desc}
        </p>
        <span className="text-(length:--text-label) font-bold tracking-[0.1em] uppercase text-(--color-text-faint)">
          {duration} · {service.dur}
        </span>
      </div>
      <div className="text-right whitespace-nowrap pr-1 sm:pr-[clamp(6px,1vw,18px)] col-span-2 sm:col-span-1">
        <div className="font-(family-name:--font-display) font-medium text-[clamp(24px,2.8vw,38px)] leading-none">
          {service.price}
        </div>
        <div className="inline-flex items-center gap-1.5 mt-3 text-xs font-bold text-white bg-(--color-accent-text) rounded-full px-4 py-2">
          {choose} →
        </div>
      </div>
    </motion.a>
  );
}
