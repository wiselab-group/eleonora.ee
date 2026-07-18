import type { AnchorHTMLAttributes, ReactNode } from "react";
import { m, type Variants } from "framer-motion";

type ButtonVariant = "solid-dark" | "solid-accent" | "outline";

interface ButtonProps extends Omit<
  AnchorHTMLAttributes<HTMLAnchorElement>,
  "onDrag" | "onDragStart" | "onDragEnd" | "onAnimationStart" | "onAnimationEnd"
> {
  variant?: ButtonVariant;
  children: ReactNode;
}

const variantClasses: Record<ButtonVariant, string> = {
  "solid-dark":
    "bg-(--color-dark) text-(--color-on-dark) hover:opacity-88 active:opacity-75",
  "solid-accent":
    "bg-(--color-accent-text) text-white hover:opacity-88 active:opacity-75",
  outline:
    "border border-(--color-border) text-(--color-text) hover:opacity-70 active:opacity-55",
};

const pulseRing: Variants = {
  rest: { opacity: 0, scale: 1 },
  tap: {
    opacity: [0, 0.5, 0],
    scale: [1, 1.35],
    transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] },
  },
};

export function Button({
  variant = "solid-dark",
  className = "",
  children,
  ...props
}: ButtonProps) {
  return (
    <m.a
      {...props}
      initial="rest"
      whileTap="tap"
      className={`relative inline-flex items-center gap-2.5 rounded-full px-6.5 py-4 text-sm font-bold no-underline transition-opacity duration-250 ease-(--ease-transition) ${variantClasses[variant]} ${className}`}
    >
      <m.span
        aria-hidden="true"
        variants={pulseRing}
        className="absolute inset-0 rounded-full bg-accent motion-reduce:hidden"
      />
      {children}
    </m.a>
  );
}
