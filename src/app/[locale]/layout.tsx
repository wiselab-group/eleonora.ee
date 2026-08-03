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
        <style
          dangerouslySetInnerHTML={{
            __html: `
#static-preloader{position:fixed;inset:0;z-index:100;display:flex;align-items:center;justify-content:center;background:#ede3d5}
#static-preloader svg{width:40px;height:40px}
#static-preloader path{stroke:#c98e84;stroke-dasharray:0.33 0.67;animation:static-preloader-spin 1.6s linear infinite}
@keyframes static-preloader-spin{to{stroke-dashoffset:-1}}
@media (prefers-reduced-motion: reduce){#static-preloader path{animation:none;stroke-dashoffset:-0.23}}
body[data-preloader-hydrated] #static-preloader{display:none}
`,
          }}
        />
        <div id="static-preloader" role="status" aria-label="Loading">
          <svg viewBox="0 0 25 13" style={{ overflow: "visible" }}>
            <g transform="translate(8, 6.5)" opacity={0.7}>
              <path
                d="M-12,6 C-7.548,6 -5.264,2.704 -4.975,-1.012 C-4.745,-3.639 -6.218,-6 -8,-6 C-9.782,-6 -11.255,-3.639 -11.025,-1.012 C-10.736,2.704 -8.452,6 -4,6 C0.548,6 3.264,2.704 3.025,-1.012 C2.795,-3.639 1.782,-6 0,-6 C-1.782,-6 -3.255,-3.639 -3.025,-1.012 C-2.736,2.704 -0.452,6 4,6 C8.452,6 11.264,2.704 11.025,-1.012 C10.793,-3.639 9.782,-6 8,-6 C6.218,-6 4.748,-3.639 4.98,-1.012 C5.272,2.704 7.548,6 12,6"
                fill="none"
                strokeWidth={1.4}
                strokeLinecap="round"
                strokeLinejoin="round"
                pathLength={1}
              />
            </g>
          </svg>
        </div>
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
