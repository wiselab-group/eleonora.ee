import type { Metadata } from "next";
import { Playfair_Display, Nunito_Sans } from "next/font/google";
import { LocaleProvider } from "@/lib/i18n";
import "./globals.css";

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

const siteUrl = "https://eleonorakupczyk.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Eleonora Kupczyk — SMM · UGC · Tallinn",
  description:
    "Маркетолог из Таллинна. Создаю контент, обучаю и консультирую — помогаю раскрыть себя и заявить о себе в социальных сетях.",
  openGraph: {
    title: "Eleonora Kupczyk — SMM · UGC · Tallinn",
    description:
      "Маркетолог из Таллинна. Создаю контент, обучаю и консультирую — помогаю раскрыть себя и заявить о себе в социальных сетях.",
    url: siteUrl,
    siteName: "Eleonora Kupczyk",
    locale: "ru_RU",
    type: "website",
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ru"
      className={`${playfair.variable} ${nunito.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <LocaleProvider>{children}</LocaleProvider>
      </body>
    </html>
  );
}
