"use client";

import { motion } from "framer-motion";
import { developIn } from "@/lib/motion";
import { LanguageToggle } from "./LanguageToggle";

export function Header() {
  return (
    <motion.header
      initial="hidden"
      animate="visible"
      variants={developIn}
      className="flex items-center justify-end px-4 sm:px-[clamp(20px,5vw,60px)] py-4.5 absolute top-0 right-0 z-40"
    >
      <LanguageToggle />
    </motion.header>
  );
}
