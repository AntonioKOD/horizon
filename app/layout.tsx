import type React from "react"
import "./globals.css"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

export const metadata = {
  title: "Horizon Fix - Always On Call Handyman & Home Service Experts",
  description:
    "Horizon Fix - Always on call for HVAC, plumbing, electrical, masonry, and handyman services. No job too small, quick response times, expert tradespeople available 24/7.",
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
      </body>
    </html>
  )
}

