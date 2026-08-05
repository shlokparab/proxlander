import { ImageResponse } from "next/og";
import { getCompany } from "../../data/companies";

export const alt = "A company in the Proxima Mumbai network";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpenGraphImage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const company = getCompany(slug);
  const name = company?.name ?? "Proxima Mumbai";
  const sector = company?.sector ?? "Founder network";

  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: "58px 64px",
        overflow: "hidden",
        position: "relative",
        background: "#f4f1e9",
        color: "#11110f",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: 16, fontSize: 22, letterSpacing: "0.02em" }}>
        <div style={{ width: 26, height: 26, borderRadius: 999, background: "#8e351f" }} />
        <div style={{ display: "flex" }}>PROXIMA / MUMBAI</div>
      </div>

      <div style={{ display: "flex", flexDirection: "column", zIndex: 2 }}>
        <div style={{ display: "flex", color: "#8e351f", fontSize: 22, letterSpacing: "0.12em", textTransform: "uppercase" }}>{sector}</div>
        <div style={{ display: "flex", maxWidth: 1050, marginTop: 18, fontFamily: "serif", fontSize: name.length > 16 ? 112 : 146, lineHeight: 0.82, letterSpacing: "-0.065em", textTransform: "uppercase" }}>{name}</div>
      </div>

      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", zIndex: 2 }}>
        <div style={{ display: "flex", fontSize: 24, color: "#5f5d57" }}>Company profile · Builders in motion.</div>
        <div style={{ display: "flex", fontSize: 18, letterSpacing: "0.08em", textTransform: "uppercase" }}>proximamumbai.com</div>
      </div>

      <div style={{ position: "absolute", right: -140, bottom: -260, width: 680, height: 680, borderRadius: 999, border: "90px solid rgba(142,53,31,.15)" }} />
      <div style={{ position: "absolute", right: 110, bottom: -190, width: 430, height: 430, borderRadius: 999, border: "2px solid rgba(142,53,31,.45)" }} />
    </div>,
    size,
  );
}
