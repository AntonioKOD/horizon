import { ImageResponse } from "next/og"
import { TOWNS, getTown } from "@/lib/towns"

export const alt = "Local plumber - Horizon Fix Plumbing"
export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

export function generateStaticParams() {
  return TOWNS.map((town) => ({ town: town.slug }))
}

export default async function OgImage({ params }: { params: Promise<{ town: string }> }) {
  const { town: slug } = await params
  const town = getTown(slug)
  const townName = town ? town.name : "South Shore"

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
        <div style={{ fontSize: 32, fontWeight: 700, color: "#FF7A00", marginBottom: 24 }}>
          Horizon Fix Plumbing
        </div>
        <div style={{ fontSize: 68, fontWeight: 800, lineHeight: 1.1, marginBottom: 16 }}>
          {`Plumber in ${townName}, MA`}
        </div>
        <div style={{ fontSize: 34, color: "#d1d5db", marginBottom: 40 }}>
          {"24/7 Emergency Service · Licensed & Insured · Upfront Pricing"}
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
