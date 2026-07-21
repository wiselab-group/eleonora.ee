"use client";

import Image from "next/image";
import { m } from "framer-motion";
import { useLocale } from "@/lib/i18n";
import { feedPosts } from "@/lib/tiles";
import {
  developIn,
  developWash,
  staggerContainer,
  viewportOnce,
} from "@/lib/motion";
import { InstagramIcon } from "@/components/ui/InstagramIcon";

export function Feed() {
  const { t } = useLocale();

  return (
    <section
      id="feed"
      className="bg-(--color-bg) px-5 sm:px-[clamp(20px,5vw,60px)] py-10 sm:py-[clamp(40px,6vw,90px)] max-w-[1320px] mx-auto"
    >
      <div className="flex items-center justify-between gap-6 flex-wrap mb-7 sm:mb-[clamp(22px,3vw,38px)]">
        <h2 className="font-(family-name:--font-display) font-medium text-(length:--text-headline) leading-none m-0">
          {t.feedTitle}
        </h2>
        <a
          href="https://www.instagram.com/eleonora.kupczyk/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label={t.feedCta}
          className="inline-flex items-center gap-2 no-underline text-sm font-bold text-white bg-(--color-dark) rounded-full px-5.5 py-2.75 transition-opacity duration-250 ease-(--ease-transition) hover:opacity-88 active:opacity-75"
        >
          <InstagramIcon />
          <span className="hidden sm:inline">{t.feedCta}</span>
        </a>
      </div>
      <m.div
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        variants={staggerContainer}
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 md:grid-rows-2 gap-2 sm:gap-[clamp(8px,1.2vw,16px)]"
      >
        {feedPosts.map((post, index) => (
          <m.a
            key={index}
            href={post.href}
            target="_blank"
            rel="noopener noreferrer"
            variants={developIn}
            className={`group relative block rounded-2xl overflow-hidden ${
              index === 0
                ? "col-span-2 aspect-square md:aspect-auto md:row-span-2"
                : "aspect-[4/5]"
            }`}
          >
            <Image
              src={post.image}
              alt={t.feedAlt[index]}
              fill
              sizes={
                index === 0
                  ? "(max-width: 768px) 100vw, 45vw"
                  : "(max-width: 768px) 33vw, 16vw"
              }
              className="object-cover transition-opacity duration-250 ease-(--ease-transition) group-hover:opacity-88"
              placeholder="blur"
            />
            <m.div
              aria-hidden="true"
              variants={developWash}
              className="absolute inset-0 bg-(--color-tag-bg)"
            />
          </m.a>
        ))}
      </m.div>
    </section>
  );
}
