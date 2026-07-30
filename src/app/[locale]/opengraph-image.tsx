import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { notFound } from "next/navigation";
import { LOCALES, getDictionary, type Locale } from "@/lib/i18n";

export const runtime = "nodejs";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

interface ImageProps {
  params: Promise<{ locale: string }>;
}

export default async function Image({ params }: ImageProps) {
  const { locale } = await params;
  if (!LOCALES.includes(locale as Locale)) {
    notFound();
  }
  const t = getDictionary(locale as Locale);

  const [playfair, playfairItalic, nunito, nunitoSemibold, photo] =
    await Promise.all([
      readFile(join(process.cwd(), "src/app/fonts/playfair-600.woff")),
      readFile(join(process.cwd(), "src/app/fonts/playfair-600-italic.woff")),
      readFile(join(process.cwd(), "src/app/fonts/nunito-400.ttf")),
      readFile(join(process.cwd(), "src/app/fonts/nunito-600.ttf")),
      readFile(join(process.cwd(), "src/app/og-assets/eleonora.jpg")),
    ]);

  const photoSrc = `data:image/jpeg;base64,${photo.toString("base64")}`;
  const [ogDescriptionLead, ogDescriptionRest] =
    t.ogDescription.split(/\s*—\s*/);

  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        position: "relative",
        backgroundColor: "#3b2e26",
        fontFamily: "Nunito Sans",
      }}
    >
      <img
        src={photoSrc}
        alt=""
        width={1200}
        height={630}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "1200px",
          height: "630px",
          objectFit: "cover",
          objectPosition: "68% 22%",
        }}
      />
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "1200px",
          height: "630px",
          display: "flex",
          backgroundImage:
            "linear-gradient(0deg, rgba(59,46,38,0.9) 0%, rgba(59,46,38,0.72) 32%, rgba(59,46,38,0.55) 50%, rgba(59,46,38,0.3) 68%, rgba(59,46,38,0.08) 100%)",
        }}
      />

      <div
        style={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          width: "100%",
          height: "100%",
          padding: "72px 88px",
          gap: "26px",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "14px",
          }}
        >
          <div
            style={{
              width: "8px",
              height: "8px",
              borderRadius: "999px",
              backgroundColor: "#c98e84",
              display: "flex",
            }}
          />
          <div
            style={{
              fontSize: "20px",
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              color: "#ede3d5",
              opacity: 0.85,
              fontFamily: "Nunito Sans",
              fontWeight: 600,
            }}
          >
            {t.heroBadge}
          </div>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            fontFamily: "Playfair Display",
            fontWeight: 600,
            fontSize: "108px",
            lineHeight: 0.94,
            letterSpacing: "-0.02em",
            color: "#ede3d5",
          }}
        >
          <span>Eleonora</span>
          <span
            style={{ display: "flex", fontStyle: "italic", color: "#c98e84" }}
          >
            Kupczyk
          </span>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            fontSize: "26px",
            lineHeight: 1.5,
            color: "#ede3d5",
            opacity: 0.85,
            maxWidth: "620px",
            fontFamily: "Nunito Sans",
            fontWeight: 400,
          }}
        >
          <span>
            {ogDescriptionRest ? `${ogDescriptionLead} —` : ogDescriptionLead}
          </span>
          {ogDescriptionRest ? <span>{ogDescriptionRest}</span> : null}
        </div>
      </div>
    </div>,
    {
      ...size,
      fonts: [
        {
          name: "Playfair Display",
          data: playfair,
          weight: 600,
          style: "normal",
        },
        {
          name: "Playfair Display",
          data: playfairItalic,
          weight: 600,
          style: "italic",
        },
        { name: "Nunito Sans", data: nunito, weight: 400, style: "normal" },
        {
          name: "Nunito Sans",
          data: nunitoSemibold,
          weight: 600,
          style: "normal",
        },
      ],
    },
  );
}
