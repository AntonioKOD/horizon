import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { Phone, CheckCircle, AlertCircle, Clock, ShieldCheck, BadgeDollarSign } from "lucide-react"
import { SERVICE_PAGES, getServicePage } from "@/lib/service-pages"
import { TOWNS } from "@/lib/towns"
import { SITE, JsonLd, serviceSchema, breadcrumbSchema, faqSchema } from "@/lib/seo"
import { LeadForm } from "@/components/lead-form"

export function generateStaticParams() {
  return SERVICE_PAGES.map((service) => ({ slug: service.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const service = getServicePage(slug)
  if (!service) {
    return { title: "Page Not Found - Horizon Fix Plumbing" }
  }
  return {
    title: service.title,
    description: service.metaDescription,
    alternates: { canonical: `/services/${service.slug}` },
    openGraph: {
      title: service.title,
      description: service.metaDescription,
      url: `${SITE.url}/services/${service.slug}`,
      type: "website",
    },
  }
}

export default async function ServiceLandingPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const service = getServicePage(slug)
  if (!service) {
    notFound()
  }

  const pageUrl = `${SITE.url}/services/${service.slug}`

  return (
    <main className="flex min-h-screen flex-col">
      <JsonLd
        data={serviceSchema({
          name: service.name,
          description: service.metaDescription,
          url: pageUrl,
          areaServed: TOWNS.map((t) => `${t.name}, MA`),
        })}
      />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: SITE.url },
          { name: "Services", url: `${SITE.url}/services` },
          { name: service.name, url: pageUrl },
        ])}
      />
      <JsonLd data={faqSchema(service.faqs)} />

      {/* Hero */}
      <section className="relative py-16 md:py-24 bg-gray-900 text-white">
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `url('${service.image}')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></div>
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-3xl md:text-5xl font-bold mb-6">{service.headline}</h1>
              <p className="text-lg md:text-xl text-gray-300 mb-8">{service.intro}</p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="tel:+19788937728"
                  className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-md text-lg font-bold transition-colors inline-flex items-center justify-center"
                >
                  <Phone className="h-5 w-5 mr-2" />
                  Call {SITE.phoneDisplay}
                </a>
                <a
                  href="#quote"
                  className="bg-white text-gray-900 hover:bg-gray-100 px-8 py-3 rounded-md text-lg font-medium transition-colors text-center"
                >
                  Get a Free Quote
                </a>
              </div>
              <div className="flex flex-wrap gap-6 mt-8 text-sm text-gray-300">
                <span className="flex items-center">
                  <Clock className="h-4 w-4 mr-2 text-primary" /> 24/7 Emergency Service
                </span>
                <span className="flex items-center">
                  <ShieldCheck className="h-4 w-4 mr-2 text-primary" /> Licensed &amp; Insured
                </span>
                <span className="flex items-center">
                  <BadgeDollarSign className="h-4 w-4 mr-2 text-primary" /> Upfront Pricing
                </span>
              </div>
            </div>
            <div id="quote">
              <LeadForm
                defaultService={service.slug === "water-heater-services" ? "water-heater" : service.slug === "pipe-leak-repair" ? "leak-repair" : service.slug === "fixture-installation" ? "fixtures" : service.slug === "sewer-line-services" ? "sewer" : service.slug}
                source={`service-${service.slug}`}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Pain points */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Sound Familiar?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {service.painPoints.map((point) => (
                <div key={point} className="bg-white rounded-lg shadow-md p-5 flex items-start">
                  <AlertCircle className="h-5 w-5 text-red-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">{point}</span>
                </div>
              ))}
            </div>
            <p className="text-center text-lg text-gray-600 mt-8">
              We fix all of these — usually in a single visit, always with a price you approve first.
            </p>
          </div>
        </div>
      </section>

      {/* What's included */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
            <div className="relative h-[360px] rounded-lg overflow-hidden">
              <Image src={service.image} alt={service.name} fill className="object-cover" />
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6">What&apos;s Included</h2>
              <div className="space-y-3">
                {service.included.map((item) => (
                  <div key={item} className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-2 mt-1 flex-shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ — visible content backing the FAQPage schema */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-10 text-center">{service.name} — Frequently Asked Questions</h2>
            <div className="space-y-6">
              {service.faqs.map((faq) => (
                <div key={faq.question} className="bg-white rounded-lg shadow-md p-6">
                  <h3 className="text-lg font-semibold mb-3 flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-2 mt-1 flex-shrink-0" />
                    {faq.question}
                  </h3>
                  <p className="text-gray-700">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Other services + areas */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-2xl font-bold mb-6">More Plumbing Services</h2>
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {SERVICE_PAGES.filter((s) => s.slug !== service.slug).map((other) => (
              <Link
                key={other.slug}
                href={`/services/${other.slug}`}
                className="bg-gray-100 hover:bg-gray-200 text-gray-800 px-5 py-2 rounded-full transition-colors"
              >
                {other.name}
              </Link>
            ))}
          </div>
          <Link href="/service-areas" className="text-primary font-medium hover:underline">
            See all the South Shore towns we serve →
          </Link>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Get It Fixed?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Call now or request a free quote — we respond fast and price everything upfront.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="tel:+19788937728"
              className="bg-white text-primary hover:bg-gray-100 px-8 py-3 rounded-md text-lg font-bold transition-colors inline-flex items-center justify-center"
            >
              <Phone className="h-5 w-5 mr-2" />
              {SITE.phoneDisplay}
            </a>
            <a
              href="#quote"
              className="bg-transparent border-2 border-white hover:bg-white/10 text-white px-8 py-3 rounded-md text-lg font-medium transition-colors"
            >
              Get a Free Quote
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}
