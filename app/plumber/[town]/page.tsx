import Link from "next/link"
import { notFound } from "next/navigation"
import { Phone, CheckCircle, Clock, ShieldCheck, BadgeDollarSign, MapPin } from "lucide-react"
import { TOWNS, getTown, townFaqs } from "@/lib/towns"
import { SERVICE_PAGES } from "@/lib/service-pages"
import { SITE, JsonLd, plumberSchema, breadcrumbSchema, faqSchema } from "@/lib/seo"
import { LeadForm } from "@/components/lead-form"

export function generateStaticParams() {
  return TOWNS.map((town) => ({ town: town.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ town: string }> }) {
  const { town: slug } = await params
  const town = getTown(slug)
  if (!town) {
    return { title: "Page Not Found - Horizon Fix Plumbing" }
  }
  return {
    title: `Plumber in ${town.name}, MA | 24/7 Emergency Service`,
    description: `Need a plumber in ${town.name}, MA? Horizon Fix Plumbing offers 24/7 emergency service, drain cleaning, water heaters, and leak repair in ${town.name}. Call ${SITE.phoneDisplay}.`,
    alternates: { canonical: `/plumber/${town.slug}` },
    openGraph: {
      title: `Plumber in ${town.name}, MA | 24/7 | Horizon Fix Plumbing`,
      description: `Licensed plumbers serving ${town.name} and the South Shore. Emergency plumbing, drains, water heaters, and leak repair with upfront pricing.`,
      url: `${SITE.url}/plumber/${town.slug}`,
      type: "website",
    },
  }
}

export default async function TownPage({ params }: { params: Promise<{ town: string }> }) {
  const { town: slug } = await params
  const town = getTown(slug)
  if (!town) {
    notFound()
  }

  const faqs = townFaqs(town)
  const pageUrl = `${SITE.url}/plumber/${town.slug}`
  const nearbyTowns = town.nearby.map((s) => getTown(s)).filter(Boolean)

  return (
    <main className="flex min-h-screen flex-col">
      <JsonLd data={plumberSchema({ areaServed: [`${town.name}, MA`], pageUrl })} />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: SITE.url },
          { name: "Service Areas", url: `${SITE.url}/service-areas` },
          { name: `Plumber in ${town.name}, MA`, url: pageUrl },
        ])}
      />
      <JsonLd data={faqSchema(faqs)} />

      {/* Hero */}
      <section className="relative py-16 md:py-24 bg-gray-900 text-white">
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage:
              "url('https://files.manuscdn.com/user_upload_by_module/session_file/110397790/ifOogEuKaTcmifDI.webp')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></div>
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="inline-flex items-center bg-primary/90 text-white text-sm px-3 py-1 rounded-full mb-4">
                <MapPin className="h-4 w-4 mr-1" /> Serving {town.name} and the South Shore
              </p>
              <h1 className="text-3xl md:text-5xl font-bold mb-6">Plumber in {town.name}, MA</h1>
              <p className="text-lg md:text-xl text-gray-300 mb-8">
                24/7 emergency plumbing, drain cleaning, water heaters, and leak repair for {town.name} homes and
                businesses. Licensed, insured, and priced upfront — no surprises.
              </p>
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
              <LeadForm source={`plumber-${town.slug}`} heading={`Get a Fast, Free Quote in ${town.name}`} />
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Plumbing Services in {town.name}</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Every service we offer is available throughout {town.name}, from quick fixture swaps to middle-of-the-night
              emergencies.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICE_PAGES.map((service) => (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow block"
              >
                <h3 className="text-xl font-semibold mb-2">{service.name}</h3>
                <p className="text-gray-600 mb-3">{service.metaDescription.split(".")[0]}.</p>
                <span className="text-primary font-medium hover:underline">Learn more</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Local knowledge */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Why {town.name} Homes Call Us</h2>
            <p className="text-lg text-gray-700 mb-4">{town.housingNote}</p>
            <p className="text-lg text-gray-700 mb-8">{town.systemsNote}</p>

            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4 flex items-center">
                <MapPin className="h-5 w-5 mr-2 text-primary" /> Areas of {town.name} We Serve
              </h3>
              <div className="flex flex-wrap gap-2">
                {town.areas.map((area) => (
                  <span key={area} className="bg-white border border-gray-200 px-3 py-1 rounded-full text-sm text-gray-700">
                    {area}
                  </span>
                ))}
              </div>
              <p className="text-sm text-gray-500 mt-4">
                Zip codes: {town.zips.join(", ")} &middot; {town.county} County
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ — visible content backing the FAQPage schema */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-10 text-center">
              {town.name} Plumbing — Frequently Asked Questions
            </h2>
            <div className="space-y-6">
              {faqs.map((faq) => (
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

      {/* Nearby towns — internal links */}
      {nearbyTowns.length > 0 && (
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <h2 className="text-2xl font-bold mb-6">We Also Serve Nearby Towns</h2>
            <div className="flex flex-wrap justify-center gap-3">
              {nearbyTowns.map(
                (nearby) =>
                  nearby && (
                    <Link
                      key={nearby.slug}
                      href={`/plumber/${nearby.slug}`}
                      className="bg-gray-100 hover:bg-gray-200 text-gray-800 px-5 py-2 rounded-full transition-colors"
                    >
                      Plumber in {nearby.name}, MA
                    </Link>
                  ),
              )}
              <Link
                href="/service-areas"
                className="bg-primary/10 hover:bg-primary/20 text-primary px-5 py-2 rounded-full font-medium transition-colors"
              >
                All Service Areas
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Need a Plumber in {town.name} Today?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Call now for 24/7 emergency service, or request a free quote and we&apos;ll get right back to you.
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
