"use client";

import Image from "next/image";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useLocale } from "@/lib/i18n";
import { Button } from "@/components/ui/Button";
import { fadeUp, staggerContainer } from "@/lib/motion";
import { generalTelegramLink } from "@/lib/telegram";
import eleonoraPhoto from "../../../public/images/eleonora.webp";

export function Hero() {
  const { t, lang } = useLocale();

  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);
  const springConfig = { stiffness: 120, damping: 20, mass: 0.5 };
  const rotateX = useSpring(useTransform(pointerY, [-0.5, 0.5], [3, -3]), springConfig);
  const rotateY = useSpring(useTransform(pointerX, [-0.5, 0.5], [-3, 3]), springConfig);

  function handlePointerMove(event: React.PointerEvent<HTMLDivElement>) {
    if (event.pointerType !== "mouse") return;
    const bounds = event.currentTarget.getBoundingClientRect();
    pointerX.set((event.clientX - bounds.left) / bounds.width - 0.5);
    pointerY.set((event.clientY - bounds.top) / bounds.height - 0.5);
  }

  function handlePointerLeave() {
    pointerX.set(0);
    pointerY.set(0);
  }

  return (
    <motion.section
      initial="hidden"
      animate="visible"
      variants={staggerContainer}
      className="grid grid-cols-1 md:grid-cols-[1.05fr_.95fr] gap-7 md:gap-[clamp(28px,5vw,72px)] items-center px-5 sm:px-[clamp(20px,5vw,60px)] pt-[clamp(30px,5vw,72px)] pb-[clamp(48px,8vw,96px)] max-w-[1320px] mx-auto"
    >
      <motion.div variants={fadeUp}>
        <div className="inline-flex items-center gap-2 bg-(--color-tag-bg) text-(--color-tag-text) rounded-full px-4 py-1.75 text-xs font-bold tracking-[0.08em] uppercase mb-6 sm:mb-[clamp(20px,3vw,30px)]">
          SMM · UGC · Tallinn
        </div>
        <h1 className="font-(family-name:--font-display) font-medium text-[clamp(52px,9.5vw,104px)] leading-[0.94] tracking-[-0.02em] m-0">
          Eleonora
          <br />
          <span className="italic font-normal">Kupczyk</span>
        </h1>
        <p className="text-[clamp(16px,1.5vw,20px)] leading-relaxed text-(--color-text-muted) max-w-[34ch] my-6 sm:my-[clamp(24px,3.5vw,40px)]">
          {t.tagline}
        </p>
        <div className="flex flex-wrap gap-5 items-center">
          <Button href={generalTelegramLink(lang)} target="_blank" rel="noopener noreferrer">
            {t.heroCta} <span aria-hidden="true">→</span>
          </Button>
          <a
            href="https://www.instagram.com/eleonora.kupczyk/"
            target="_blank"
            rel="noopener noreferrer"
            className="no-underline text-(--color-text-faint) text-sm font-semibold border-b border-transparent pb-0.5 transition-[border-color,opacity] duration-250 ease-(--ease-transition) hover:border-(--color-accent) active:opacity-55"
          >
            @eleonora.kupczyk
          </a>
        </div>
      </motion.div>

      <motion.div
        variants={fadeUp}
        className="relative perspective-distant"
        onPointerMove={handlePointerMove}
        onPointerLeave={handlePointerLeave}
      >
        <motion.div
          style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
          className="motion-reduce:transform-none!"
        >
          <div className="aspect-[4/5] overflow-hidden rounded-t-[200px] rounded-b-3xl bg-(--color-surface-alt) shadow-[0_30px_60px_rgba(59,46,38,0.16)] relative">
            <Image
              src={eleonoraPhoto}
              alt="Eleonora Kupczyk"
              fill
              sizes="(max-width: 768px) 100vw, 45vw"
              className="object-cover"
              placeholder="blur"
              priority
            />
          </div>
          <div className="absolute -bottom-4.5 -left-4.5 bg-(--color-surface-alt) rounded-2xl px-5 py-3.5 shadow-[0_16px_36px_rgba(59,46,38,0.14)] font-(family-name:--font-display) italic text-[clamp(15px,1.4vw,18px)] text-(--color-text) transform-[translateZ(40px)]">
            {t.heroBadge}
          </div>
        </motion.div>
      </motion.div>
    </motion.section>
  );
}
