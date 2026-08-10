import { ImageResponse } from "next/og";
import sharp from "sharp";
import { getCompany } from "../../data/companies";

export const alt = "A company in the Proxima Mumbai network";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

async function loadCompanyImage(url?: string) {
  if (!url) return undefined;

  try {
    const response = await fetch(url, { next: { revalidate: 86400 } });
    if (!response.ok) return undefined;

    const png = await sharp(Buffer.from(await response.arrayBuffer()))
      .resize(440, 280, { fit: "inside", withoutEnlargement: true })
      .png()
      .toBuffer();

    return Uint8Array.from(png).buffer;
  } catch {
    return undefined;
  }
}

export default async function OpenGraphImage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const company = getCompany(slug);
  const name = company?.name ?? "Proxima Mumbai";
  const sector = company?.sector ?? "Founder network";
  const companyImage = await loadCompanyImage(company?.image);
  const nameSize = name.length > 18 ? 52 : name.length > 12 ? 62 : name.length > 9 ? 72 : 84;

  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: "52px 58px",
        overflow: "hidden",
        position: "relative",
        background: "#f4f1e9",
        color: "#11110f",
      }}
    >
      {companyImage && (
        <div
          style={{
            position: "absolute",
            top: 145,
            right: 40,
            width: 460,
            height: 320,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: 10,
            overflow: "hidden",
            background: "#ffffff",
            border: "1px solid rgba(17,17,15,.18)",
          }}
        >
          {/* ImageResponse requires a native image element for raster assets. */}
          <img
            src={companyImage as unknown as string}
            alt=""
            width="440"
            height="280"
            style={{ width: 440, height: 280, objectFit: "contain" }}
          />
        </div>
      )}

      <div style={{ display: "flex", alignItems: "center", gap: 14, fontSize: 20, letterSpacing: "0.02em", zIndex: 2 }}>
        <div style={{ width: 26, height: 26, borderRadius: 999, background: "#8e351f" }} />
        <div style={{ display: "flex" }}>PROXIMA / MUMBAI</div>
      </div>

      <div style={{ display: "flex", flexDirection: "column", width: companyImage ? 550 : 1050, zIndex: 2 }}>
        <div style={{ display: "flex", color: "#8e351f", fontSize: 19, letterSpacing: "0.12em", textTransform: "uppercase" }}>{sector}</div>
        <div style={{ display: "flex", maxWidth: companyImage ? 550 : 1050, marginTop: 18, fontFamily: "serif", fontSize: companyImage ? nameSize : name.length > 16 ? 112 : 146, lineHeight: 0.84, letterSpacing: "-0.06em", textTransform: "uppercase" }}>{name}</div>
      </div>

      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", width: companyImage ? 550 : "100%", zIndex: 2 }}>
        <div style={{ display: "flex", fontSize: 21, color: "#5f5d57" }}>Company profile · Builders in motion.</div>
        {!companyImage && <div style={{ display: "flex", fontSize: 18, letterSpacing: "0.08em", textTransform: "uppercase" }}>proximamumbai.com</div>}
      </div>

      {!companyImage && <div style={{ position: "absolute", right: -140, bottom: -260, width: 680, height: 680, borderRadius: 999, border: "90px solid rgba(142,53,31,.15)" }} />}
      {!companyImage && <div style={{ position: "absolute", right: 110, bottom: -190, width: 430, height: 430, borderRadius: 999, border: "2px solid rgba(142,53,31,.45)" }} />}
      {companyImage && <div style={{ position: "absolute", top: 0, bottom: 0, left: 659, width: 1, background: "rgba(17,17,15,.18)", zIndex: 3 }} />}
    </div>,
    size,
  );
}
