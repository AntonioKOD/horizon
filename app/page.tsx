import { HeroSection } from "@/components/hero-section"
import { ServicesSection } from "@/components/services-section"
import { AboutSection } from "@/components/about-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { ContactSectionHome } from "@/components/contact-section-home"
import { StatsSection } from "@/components/stats-section"
import { ProjectsSection } from "@/components/projects-section"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <HeroSection />
      <ServicesSection />
      <AboutSection />
      <StatsSection />
      <ProjectsSection/>
      <TestimonialsSection />
      <ContactSectionHome/>
    </main>
  )
}

