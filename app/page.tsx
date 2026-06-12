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
        <title>Horizon Fix Plumbing | 24/7 Plumbing Experts | South Shore MA</title>
        <meta name="description" content="Horizon Fix Plumbing is always on call for emergency plumbing, drain cleaning, leak repairs, water heater service, fixture installation, and sewer solutions throughout the South Shore of Massachusetts." />
        <link rel="canonical" href="https://horizonfix.com" />
        {/* Open Graph Tags */}
        <meta property="og:title" content="Horizon Fix Plumbing | 24/7 Plumbing Experts | South Shore MA" />
        <meta property="og:description" content="Emergency plumbing, drain cleaning, water heater repair, leak detection, and fixture installation from trusted local plumbers serving South Shore MA." />
        <meta property="og:url" content="https://horizonfix.com" />
        <meta property="og:type" content="website" />
        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Horizon Fix Plumbing | 24/7 Plumbing Experts | South Shore MA" />
        <meta name="twitter:description" content="Need a plumber now? Horizon Fix Plumbing handles emergencies, clogs, leaks, water heaters, and pipe repairs across South Shore Massachusetts." />
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

