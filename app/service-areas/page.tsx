import Link from "next/link"
import { MapPin, Phone } from "lucide-react"
import { TOWNS } from "@/lib/towns"
import { SITE, JsonLd, plumberSchema, breadcrumbSchema } from "@/lib/seo"

export const metadata = {
  title: "Service Areas | Plumber South Shore MA",
  description: `Horizon Fix Plumbing serves ${TOWNS.length} South Shore Massachusetts towns including Quincy, Weymouth, Hingham, Plymouth, and Marshfield. 24/7 emergency plumbing. Call ${SITE.phoneDisplay}.`,
  alternates: { canonical: "/service-areas" },
  openGraph: {
    title: "Service Areas | Plumber South Shore MA",
    description: "Find your town — licensed plumbers serving the entire South Shore of Massachusetts, 24/7.",
    url: `${SITE.url}/service-areas`,
    type: "website",
  },
}

export default function ServiceAreasPage() {
  const norfolkTowns = TOWNS.filter((t) => t.county === "Norfolk")
  const plymouthTowns = TOWNS.filter((t) => t.county === "Plymouth")

  return (
    <main className="flex min-h-screen flex-col">
      <JsonLd data={plumberSchema({ areaServed: TOWNS.map((t) => `${t.name}, MA`), pageUrl: `${SITE.url}/service-areas` })} />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: SITE.url },
          { name: "Service Areas", url: `${SITE.url}/service-areas` },
        ])}
      />

      {/* Hero */}
      <section className="relative py-20 md:py-28 bg-gray-900 text-white">
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
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl md:text-5xl font-bold mb-6">South Shore MA Service Areas</h1>
            <p className="text-lg md:text-xl text-gray-300 mb-8">
              Licensed plumbers serving {TOWNS.length} towns across the South Shore — 24/7 for emergencies, with upfront
              pricing everywhere we go.
            </p>
            <a
              href="tel:+19788937728"
              className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-md text-lg font-bold transition-colors inline-flex items-center"
            >
              <Phone className="h-5 w-5 mr-2" />
              Call {SITE.phoneDisplay}
            </a>
          </div>
        </div>
      </section>

      {/* Town directory */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-5xl mx-auto">
            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-6 flex items-center">
                <MapPin className="h-6 w-6 mr-2 text-primary" /> Norfolk County
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {norfolkTowns.map((town) => (
                  <Link
                    key={town.slug}
                    href={`/plumber/${town.slug}`}
                    className="bg-white p-5 rounded-lg shadow-md hover:shadow-lg transition-shadow block"
                  >
                    <h3 className="text-lg font-semibold mb-1">Plumber in {town.name}, MA</h3>
                    <p className="text-sm text-gray-500">{town.zips.join(", ")}</p>
                  </Link>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-6 flex items-center">
                <MapPin className="h-6 w-6 mr-2 text-primary" /> Plymouth County
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {plymouthTowns.map((town) => (
                  <Link
                    key={town.slug}
                    href={`/plumber/${town.slug}`}
                    className="bg-white p-5 rounded-lg shadow-md hover:shadow-lg transition-shadow block"
                  >
                    <h3 className="text-lg font-semibold mb-1">Plumber in {town.name}, MA</h3>
                    <p className="text-sm text-gray-500">{town.zips.join(", ")}</p>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Don&apos;t See Your Town?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            We cover the surrounding South Shore communities too. Give us a call — if we can reach you, we&apos;ll help you.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="tel:+19788937728"
              className="bg-white text-primary hover:bg-gray-100 px-8 py-3 rounded-md text-lg font-bold transition-colors inline-flex items-center justify-center"
            >
              <Phone className="h-5 w-5 mr-2" />
              {SITE.phoneDisplay}
            </a>
            <Link
              href="/contact"
              className="bg-transparent border-2 border-white hover:bg-white/10 text-white px-8 py-3 rounded-md text-lg font-medium transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
