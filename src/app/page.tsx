import { LazyMotion, domAnimation } from "framer-motion";
import { Header } from "@/components/layout/Header";
import { Hero } from "@/components/sections/Hero";
import { Services } from "@/components/sections/Services";
import { Shorts } from "@/components/sections/Shorts";
import { Feed } from "@/components/sections/Feed";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <LazyMotion features={domAnimation} strict>
      <Header />
      <main>
        <Hero />
        <Services />
        <Shorts />
        <Feed />
        <Contact />
      </main>
    </LazyMotion>
  );
}
