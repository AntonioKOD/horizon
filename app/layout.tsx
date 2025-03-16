import type React from "react"
import "./globals.css"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { EmergencyButton } from "@/components/emergency-button"

export const metadata = {
  title: "Horizon Fix - Building Tomorrow's Infrastructure Today",
  description:
    "Horizon Fix delivers exceptional construction and renovation services with precision, reliability, and innovation.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
          <Navbar />
          {children}
          <Footer />
          <EmergencyButton />
      </body>
    </html>
  )
}

