import type { Metadata, Viewport } from "next";
import { notFound } from "next/navigation";
import { Playfair_Display, Nunito_Sans, Inter } from "next/font/google";
import { LazyMotion, domAnimation } from "framer-motion";
import { LOCALES, type Locale } from "@/lib/i18n";
import { siteUrl } from "@/lib/site";
import { SmoothScroll } from "@/components/layout/SmoothScroll";
import { Preloader } from "@/components/layout/Preloader";
import "../globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  display: "swap",
});

const nunito = Nunito_Sans({
  variable: "--font-nunito",
  subsets: ["latin", "cyrillic"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["700", "800"],
  display: "swap",
});

export const viewport: Viewport = {
  viewportFit: "cover",
  themeColor: "#ede3d5",
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      name: "Eleonora Kupczyk",
      jobTitle: "SMM & UGC marketer",
      url: siteUrl,
      address: {
        "@type": "PostalAddress",
        addressLocality: "Tallinn",
        addressCountry: "EE",
      },
      email: "mailto:eleonora.kupczyk@gmail.com",
      telephone: "+37256950304",
      sameAs: [
        "https://www.instagram.com/eleonora.kupczyk/",
        "https://t.me/eleonora_kupczyk",
      ],
    },
    {
      "@type": "Organization",
      name: "Eleonora Kupczyk",
      url: siteUrl,
      email: "mailto:eleonora.kupczyk@gmail.com",
      sameAs: [
        "https://www.instagram.com/eleonora.kupczyk/",
        "https://t.me/eleonora_kupczyk",
      ],
    },
  ],
};

interface RootLayoutProps {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}

export function generateStaticParams() {
  return LOCALES.map((locale) => ({ locale }));
}

export default async function RootLayout({
  children,
  params,
}: RootLayoutProps) {
  const { locale } = await params;
  if (!LOCALES.includes(locale as Locale)) {
    notFound();
  }

  return (
    <html
      lang={locale}
      className={`${playfair.variable} ${nunito.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <LazyMotion features={domAnimation} strict>
          <Preloader />
          <SmoothScroll />
          {children}
        </LazyMotion>
      </body>
    </html>
  );
}
