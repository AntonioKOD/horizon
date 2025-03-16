import type React from "react"
import "./globals.css"
import { Navbar } from "@/components/navbar"
import { ThemeProvider } from "@/components/theme-provider"
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
        <ThemeProvider attribute="class" defaultTheme="light">
          <Navbar />
          {children}
          <Footer />
          <EmergencyButton />
        </ThemeProvider>
      </body>
    </html>
  )
}

