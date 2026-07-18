import type { ElementType, HTMLAttributes, ReactNode } from "react";

interface GradientTextProps extends HTMLAttributes<HTMLElement> {
  className?: string;
  children: ReactNode;
  as?: ElementType;
}

export function GradientText({
  className = "",
  children,
  as: Component = "span",
  ...props
}: GradientTextProps) {
  return (
    <Component
      {...props}
      className={`gradient-text motion-reduce:!text-(--color-bg) ${className}`}
    >
      {children}
    </Component>
  );
}
