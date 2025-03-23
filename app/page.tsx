import { HeroSection } from "@/components/hero-section"
import { ServicesSection } from "@/components/services-section"
import { AboutSection } from "@/components/about-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { ContactSectionHome } from "@/components/contact-section-home"
import { StatsSection } from "@/components/stats-section"
import { ProjectsSection } from "@/components/projects-section"
import Head from "next/head"

export default function Home() {
  return (
    <>
    <Head>
        <title>Horizon Fix | Expert Construction, Remodeling & Home Service Solutions</title>
        <meta name="description" content="Horizon Fix delivers precision construction, renovation, and remodeling services. From plumbing and electrical upgrades to HVAC solutions and modern remodels, we build tomorrow’s infrastructure today." />
        <link rel="canonical" href="https://horizonfix.com" />
        {/* Open Graph Tags */}
        <meta property="og:title" content="Horizon Fix | Expert Construction, Remodeling & Home Service Solutions" />
        <meta property="og:description" content="Discover Horizon Fix – a trusted partner for construction, renovation, plumbing, electrical, HVAC, and remodeling services that transform your home." />
        <meta property="og:url" content="https://horizonfix.com" />
        <meta property="og:type" content="website" />
        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Horizon Fix | Expert Construction, Remodeling & Home Service Solutions" />
        <meta name="twitter:description" content="Horizon Fix delivers precision in construction, renovation, and remodeling, including plumbing, electrical, and HVAC upgrades. Explore our services today!" />
      </Head>
    <main className="flex min-h-screen flex-col">
      <HeroSection />
      <ServicesSection />
      <AboutSection />
      <StatsSection />
      <ProjectsSection/>
      <TestimonialsSection />
      <ContactSectionHome/>
    </main>
    </>
  )
}

