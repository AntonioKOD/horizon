import Link from "next/link"
import { ProjectsGrid } from "@/components/projects-grid"
import Head from "next/head"

export const metadata = {
  title: "Our Projects - Horizon Fix | South Shore MA",
  description:
    "Explore our portfolio of completed plumbing projects throughout the South Shore of Massachusetts.",
}

export default function ProjectsPage() {
  return (
    <>
    <Head>
        <title>Our Plumbing Projects | Horizon Fix Plumbing | South Shore MA</title>
        <meta name="description" content="Browse our plumbing project portfolio including leak repairs, repiping, drain solutions, water heater upgrades, and fixture installations." />
        <link rel="canonical" href="https://horizonfix.com/projects" />
        {/* Open Graph Tags */}
        <meta property="og:title" content="Our Plumbing Projects | Horizon Fix Plumbing | South Shore MA" />
        <meta property="og:description" content="See real plumbing projects from emergency repairs to full system upgrades completed by Horizon Fix Plumbing." />
        <meta property="og:url" content="https://horizonfix.com/projects" />
        <meta property="og:type" content="website" />
        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Our Plumbing Projects | Horizon Fix Plumbing | South Shore MA" />
        <meta name="twitter:description" content="Explore plumbing case studies from Horizon Fix Plumbing across South Shore Massachusetts." />
      </Head>
    <main className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="relative py-20 md:py-28 bg-gray-900 text-white">
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></div>
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl md:text-5xl font-bold mb-6">Our Projects</h1>
            <p className="text-lg md:text-xl text-gray-300">
              Explore completed plumbing projects that showcase our craftsmanship and problem-solving.
            </p>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <ProjectsGrid />

      {/* CTA Section */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Start Your Project?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Contact us today to discuss your plumbing needs and get a free consultation.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/contact"
              className="bg-white text-primary hover:bg-gray-100 px-8 py-3 rounded-md text-lg font-medium transition-colors"
            >
              Contact Us
            </Link>
            <Link
              href="/services"
              className="bg-transparent border-2 border-white hover:bg-white/10 text-white px-8 py-3 rounded-md text-lg font-medium transition-colors"
            >
              Explore Our Services
            </Link>
          </div>
        </div>
      </section>
    </main>
    </>
  )
}

