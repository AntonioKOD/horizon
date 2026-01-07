import { HeroSection } from "@/components/hero-section"
import { ServicesSection } from "@/components/services-section"
import { AboutSection } from "@/components/about-section"
import { ContactSectionHome } from "@/components/contact-section-home"
import { StatsSection } from "@/components/stats-section"
import Head from "next/head"

export default function Home() {
  return (
    <>
    <Head>
        <title>Horizon Fix | Always On Call Handyman & Home Service Experts</title>
        <meta name="description" content="Horizon Fix - Always on call for HVAC, plumbing, electrical, masonry, and handyman services. No job too small. Quick response times, expert tradespeople, 24/7 availability for all your home service needs." />
        <link rel="canonical" href="https://horizonfix.com" />
        {/* Open Graph Tags */}
        <meta property="og:title" content="Horizon Fix | Always On Call Handyman & Home Service Experts" />
        <meta property="og:description" content="Always on call for HVAC, plumbing, electrical, masonry, and handyman services. From small repairs to home renovations, we're your trusted home service experts available 24/7." />
        <meta property="og:url" content="https://horizonfix.com" />
        <meta property="og:type" content="website" />
        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Horizon Fix | Always On Call Handyman & Home Service Experts" />
        <meta name="twitter:description" content="Always on call for HVAC, plumbing, electrical, masonry, and handyman services. No job too small. Expert tradespeople available 24/7 for all your home service needs." />
      </Head>
    <main className="flex min-h-screen flex-col">
      <HeroSection />
      <ServicesSection />
      <AboutSection />
      <StatsSection />
      <ContactSectionHome/>
    </main>
    </>
  )
}

