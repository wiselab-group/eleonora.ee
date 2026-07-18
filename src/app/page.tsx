import { Header } from "@/components/layout/Header";
import { Hero } from "@/components/sections/Hero";
import { Services } from "@/components/sections/Services";
import { Feed } from "@/components/sections/Feed";
import { Shorts } from "@/components/sections/Shorts";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
        <Feed />
        <Shorts />
        <Contact />
      </main>
    </>
  );
}
