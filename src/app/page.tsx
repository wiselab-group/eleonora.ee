import { Header } from "@/components/layout/Header";
import { Hero } from "@/components/sections/Hero";
import { Mission } from "@/components/sections/Mission";
import { About } from "@/components/sections/About";
import { Services } from "@/components/sections/Services";
import { Feed } from "@/components/sections/Feed";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Mission />
        <About />
        <Services />
        <Feed />
        <Contact />
      </main>
    </>
  );
}
