import type { Variants } from "framer-motion";

export const EASE_REVEAL: [number, number, number, number] = [
  0.25, 0.1, 0.25, 1,
];

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease: EASE_REVEAL },
  },
};

export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08 },
  },
};

export const viewportOnce = { once: true, margin: "-80px" } as const;

export const developIn: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 1.1, ease: EASE_REVEAL },
  },
};

export const developWash: Variants = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 0,
    transition: { duration: 1.1, ease: EASE_REVEAL },
  },
};
