import type { AnchorHTMLAttributes, ReactNode } from "react";

type ButtonVariant = "solid-dark" | "solid-accent" | "outline";

interface ButtonProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
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

export function Button({
  variant = "solid-dark",
  className = "",
  children,
  ...props
}: ButtonProps) {
  return (
    <a
      {...props}
      className={`inline-flex items-center gap-2.5 rounded-full px-6.5 py-4 text-sm font-bold no-underline transition-opacity duration-250 ease-(--ease-transition) ${variantClasses[variant]} ${className}`}
    >
      {children}
    </a>
  );
}
