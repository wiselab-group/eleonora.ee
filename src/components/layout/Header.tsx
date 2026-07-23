"use client";

import { m } from "framer-motion";
import type { Locale } from "@/lib/i18n";
import { developIn } from "@/lib/motion";
import { LanguageToggle } from "./LanguageToggle";

interface HeaderProps {
  lang: Locale;
}

export function Header({ lang }: HeaderProps) {
  return (
    <m.header
      initial="hidden"
      animate="visible"
      variants={developIn}
      className="flex items-center justify-end px-4 sm:px-[clamp(20px,5vw,60px)] py-4.5 absolute top-0 right-0 z-40"
    >
      <LanguageToggle lang={lang} />
    </m.header>
  );
}
