import type React from "react"
import type { Metadata } from "next"
import "./globals.css"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { GoogleAnalytics } from "@next/third-parties/google"
import { SITE, JsonLd, organizationSchema, websiteSchema, plumberSchema } from "@/lib/seo"

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: "Horizon Fix Plumbing - 24/7 Plumbing Experts | South Shore MA",
    template: "%s | Horizon Fix Plumbing",
  },
  description:
    "Horizon Fix Plumbing provides fast, reliable plumbing services throughout the South Shore of Massachusetts, including emergency repairs, drain cleaning, water heater service, fixture installation, and leak detection.",
  // Relative self-canonical: each page canonicalizes to its own URL unless it
  // overrides this. An absolute URL here would make every page claim to be
  // a duplicate of the homepage.
  alternates: { canonical: "./" },
  openGraph: {
    type: "website",
    siteName: SITE.name,
    title: "Horizon Fix Plumbing - 24/7 Plumbing Experts | South Shore MA",
    description:
      "Emergency plumbing, drain cleaning, water heater repair, leak detection, and fixture installation from trusted local plumbers serving South Shore MA.",
    url: SITE.url,
  },
  twitter: {
    card: "summary_large_image",
    title: "Horizon Fix Plumbing - 24/7 Plumbing Experts | South Shore MA",
    description:
      "Need a plumber now? Horizon Fix Plumbing handles emergencies, clogs, leaks, water heaters, and pipe repairs across South Shore Massachusetts.",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <JsonLd data={organizationSchema()} />
        <JsonLd data={websiteSchema()} />
        <JsonLd data={plumberSchema()} />
        <GoogleAnalytics gaId="G-DX5YDB1X36" />
          <Navbar />
          {children}
          <Footer />
      </body>
    </html>
  )
}
