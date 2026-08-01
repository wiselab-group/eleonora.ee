import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { LOCALES, getDictionary, type Locale } from "@/lib/i18n";
import { siteUrl } from "@/lib/site";
import { Header } from "@/components/layout/Header";
import { ScrollProgress } from "@/components/layout/ScrollProgress";
import { Hero } from "@/components/sections/Hero";
import { Services } from "@/components/sections/Services";
import { Contact } from "@/components/sections/Contact";

interface PageProps {
  params: Promise<{ locale: string }>;
}

export function generateStaticParams() {
  return LOCALES.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { locale } = await params;
  if (!LOCALES.includes(locale as Locale)) {
    notFound();
  }
  const t = getDictionary(locale as Locale);
  const path = `/${locale}`;

  return {
    title: `Eleonora Kupczyk – ${t.metaTitle}`,
    description: t.tagline,
    alternates: {
      canonical: path,
      languages: {
        en: "/en",
        ru: "/ru",
        "x-default": "/en",
      },
    },
    openGraph: {
      title: t.metaTitle,
      description: t.tagline,
      url: `${siteUrl}${path}`,
      siteName: "Eleonora Kupczyk",
      locale: locale === "ru" ? "ru_RU" : "en_US",
      alternateLocale: locale === "ru" ? ["en_US"] : ["ru_RU"],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: t.metaTitle,
      description: t.tagline,
    },
  };
}

export default async function Home({ params }: PageProps) {
  const { locale } = await params;
  if (!LOCALES.includes(locale as Locale)) {
    notFound();
  }
  const lang = locale as Locale;
  const t = getDictionary(lang);

  return (
    <>
      <ScrollProgress />
      <Header lang={lang} />
      <main>
        <Hero t={t} lang={lang} />
        <Services t={t} lang={lang} />
        <Contact t={t} lang={lang} />
      </main>
    </>
  );
}
