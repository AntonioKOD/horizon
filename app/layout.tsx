import type React from "react"
import "./globals.css"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import {GoogleAnalytics} from "@next/third-parties/google"

export const metadata = {
  title: "Horizon Fix Plumbing - 24/7 Plumbing Experts | South Shore MA",
  description:
    "Horizon Fix Plumbing provides fast, reliable plumbing services throughout the South Shore of Massachusetts, including emergency repairs, drain cleaning, water heater service, fixture installation, and leak detection.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <GoogleAnalytics gaId="G-DX5YDB1X36" />
          <Navbar />
          {children}
          <Footer />
      </body>
    </html>
  )
}

