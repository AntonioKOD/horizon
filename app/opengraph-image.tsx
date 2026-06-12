import { ImageResponse } from "next/og"

export const alt = "Horizon Fix Plumbing - 24/7 Plumbing Experts | South Shore MA"
export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "linear-gradient(135deg, #111827 0%, #1f2937 60%, #374151 100%)",
          color: "#ffffff",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", marginBottom: 32 }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: 72,
              height: 72,
              borderRadius: 9999,
              background: "#FF7A00",
              fontSize: 40,
              marginRight: 24,
            }}
          >
            🔧
          </div>
          <div style={{ fontSize: 36, fontWeight: 700, color: "#FF7A00" }}>Horizon Fix Plumbing</div>
        </div>
        <div style={{ fontSize: 64, fontWeight: 800, lineHeight: 1.1, marginBottom: 24 }}>
          24/7 Plumbing Experts
        </div>
        <div style={{ fontSize: 36, color: "#d1d5db", marginBottom: 40 }}>
          South Shore, Massachusetts
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            fontSize: 32,
            fontWeight: 700,
            background: "#FF7A00",
            borderRadius: 12,
            padding: "16px 32px",
            alignSelf: "flex-start",
          }}
        >
          📞 +1 978 893 7728
        </div>
      </div>
    ),
    size,
  )
}
