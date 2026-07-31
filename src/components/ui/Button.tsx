import {
  useRef,
  type AnchorHTMLAttributes,
  type PointerEvent,
  type ReactNode,
} from "react";
import { m, useMotionValue, useSpring, type Variants } from "framer-motion";
import { usePrefersReducedMotion } from "@/lib/useMediaQuery";

type ButtonVariant = "solid-dark" | "solid-accent" | "outline";

const MAGNETIC_PULL_PX = 8;
const MAGNETIC_SPRING = { stiffness: 150, damping: 15, mass: 0.2 };

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
  const ref = useRef<HTMLAnchorElement>(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, MAGNETIC_SPRING);
  const springY = useSpring(y, MAGNETIC_SPRING);

  const handlePointerMove = (event: PointerEvent<HTMLAnchorElement>) => {
    if (prefersReducedMotion || !ref.current) return;
    const bounds = ref.current.getBoundingClientRect();
    const relX =
      (event.clientX - (bounds.left + bounds.width / 2)) / (bounds.width / 2);
    const relY =
      (event.clientY - (bounds.top + bounds.height / 2)) / (bounds.height / 2);
    x.set(relX * MAGNETIC_PULL_PX);
    y.set(relY * MAGNETIC_PULL_PX);
  };

  const handlePointerLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <m.a
      {...props}
      ref={ref}
      initial="rest"
      whileTap="tap"
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
      style={{ x: springX, y: springY }}
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
