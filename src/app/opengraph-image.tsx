import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const runtime = "nodejs";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  const [playfair, playfairItalic, nunito, nunitoSemibold] = await Promise.all([
    readFile(join(process.cwd(), "src/app/fonts/playfair-600.woff")),
    readFile(join(process.cwd(), "src/app/fonts/playfair-600-italic.woff")),
    readFile(join(process.cwd(), "src/app/fonts/nunito-400.woff")),
    readFile(join(process.cwd(), "src/app/fonts/nunito-600.woff")),
  ]);

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "80px 88px",
          backgroundColor: "#ede3d5",
          fontFamily: "Nunito Sans",
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
              fontSize: "22px",
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              color: "#5a4a40",
              fontFamily: "Nunito Sans",
              fontWeight: 600,
            }}
          >
            content you want to watch
          </div>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "28px",
          }}
        >
          <div
            style={{
              display: "flex",
              fontFamily: "Playfair Display",
              fontWeight: 600,
              fontStyle: "italic",
              fontSize: "96px",
              lineHeight: 1.05,
              color: "#3b2e26",
            }}
          >
            Eleonora Kupczyk
          </div>
          <div
            style={{
              display: "flex",
              fontSize: "30px",
              lineHeight: 1.5,
              color: "#5a4a40",
              maxWidth: "880px",
              fontFamily: "Nunito Sans",
              fontWeight: 400,
            }}
          >
            SMM & UGC marketer based in Tallinn — content, coaching, consulting.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "16px",
          }}
        >
          <div
            style={{
              fontSize: "22px",
              color: "#3b2e26",
              fontFamily: "Nunito Sans",
              fontWeight: 600,
            }}
          >
            eleonora.ee
          </div>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: "Playfair Display", data: playfair, weight: 600, style: "normal" },
        { name: "Playfair Display", data: playfairItalic, weight: 600, style: "italic" },
        { name: "Nunito Sans", data: nunito, weight: 400, style: "normal" },
        { name: "Nunito Sans", data: nunitoSemibold, weight: 600, style: "normal" },
      ],
    }
  );
}
