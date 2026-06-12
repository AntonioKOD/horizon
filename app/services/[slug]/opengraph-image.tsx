import { ImageResponse } from "next/og"
import { SERVICE_PAGES, getServicePage } from "@/lib/service-pages"

export const alt = "Plumbing service - Horizon Fix Plumbing"
export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

export function generateStaticParams() {
  return SERVICE_PAGES.map((service) => ({ slug: service.slug }))
}

export default async function OgImage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const service = getServicePage(slug)
  const name = service ? service.name : "Plumbing Services"

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
        <div style={{ fontSize: 64, fontWeight: 800, lineHeight: 1.1, marginBottom: 16 }}>{name}</div>
        <div style={{ fontSize: 34, color: "#d1d5db", marginBottom: 40 }}>
          South Shore, MA · 24/7 Emergency Service · Upfront Pricing
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
