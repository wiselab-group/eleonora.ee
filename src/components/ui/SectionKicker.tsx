interface SectionKickerProps {
  children: string;
  tone?: "default" | "on-dark";
  align?: "left" | "center";
}

export function SectionKicker({
  children,
  tone = "default",
  align = "left",
}: SectionKickerProps) {
  const toneClass =
    tone === "on-dark" ? "text-(--color-accent)" : "text-(--color-text-faint)";
  const alignClass = align === "center" ? "text-center" : "";

  return (
    <div
      className={`text-xs font-bold tracking-[0.22em] uppercase mb-4 ${toneClass} ${alignClass}`}
    >
      {children}
    </div>
  );
}
