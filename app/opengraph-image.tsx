import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";
import { site } from "@/lib/site";

export const alt =
  "Monica Gobbetti, corretora de planos de saúde e odontológicos em Curitiba";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const photo = await readFile(join(process.cwd(), "public/monica-2.jpg"), "base64");
const photoSrc = `data:image/jpeg;base64,${photo}`;

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          background: site.colors.deepest,
          color: "white",
        }}
      >
        <div
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            padding: "0 72px",
          }}
        >
          <div
            style={{
              fontSize: 22,
              letterSpacing: 4,
              textTransform: "uppercase",
              color: site.colors.electric,
            }}
          >
            Corretora em Curitiba · Todo o Brasil
          </div>
          <div style={{ marginTop: 24, fontSize: 64, lineHeight: 1.08, fontWeight: 600 }}>
            Planos de saúde e odontológicos
          </div>
          <div style={{ marginTop: 24, fontSize: 30, lineHeight: 1.35, opacity: 0.85 }}>
            Para você, sua família e sua empresa, com atendimento antes,
            durante e depois da contratação.
          </div>
          <div
            style={{
              marginTop: 44,
              display: "flex",
              alignItems: "center",
              gap: 16,
              fontSize: 30,
            }}
          >
            <div
              style={{
                width: 14,
                height: 14,
                borderRadius: 999,
                background: site.colors.electric,
              }}
            />
            {site.name} · {site.phoneDisplay}
          </div>
        </div>
        {/* eslint-disable-next-line @next/next/no-img-element, jsx-a11y/alt-text */}
        <img
          src={photoSrc}
          width={420}
          height={630}
          style={{ objectFit: "cover", objectPosition: "center 20%" }}
        />
      </div>
    ),
    size,
  );
}
