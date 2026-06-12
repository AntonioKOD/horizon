import type React from "react"

export const SITE = {
  name: "Horizon Fix Plumbing",
  legalName: "Horizon Fix",
  url: "https://horizonfix.com",
  phone: "+19788937728",
  phoneDisplay: "+1 978 893 7728",
  email: "hello@horizonfix.com",
  logo: "https://horizonfix.com/logohorizon-light.svg",
  region: "South Shore, Massachusetts",
  description:
    "24/7 plumbing company serving the South Shore of Massachusetts: emergency plumbing, drain cleaning, water heater service, leak repair, fixture installation, and sewer line work.",
}

// Serialize JSON-LD safely for <script> context: escape "<" so a value can
// never close the script tag or open a new one.
export function jsonLdString(data: object): string {
  return JSON.stringify(data).replace(/</g, "\\u003c")
}

export function JsonLd({ data }: { data: object }) {
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLdString(data) }} />
}

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${SITE.url}/#organization`,
    name: SITE.name,
    url: SITE.url,
    logo: SITE.logo,
    email: SITE.email,
    telephone: SITE.phone,
  }
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE.url}/#website`,
    name: SITE.name,
    url: SITE.url,
    publisher: { "@id": `${SITE.url}/#organization` },
  }
}

export function plumberSchema(opts?: { areaServed?: string[]; pageUrl?: string }) {
  return {
    "@context": "https://schema.org",
    "@type": "Plumber",
    // Page-scoped @id when a pageUrl is given so per-page Plumber blocks
    // (with town-specific areaServed) don't collide with the sitewide one.
    "@id": opts?.pageUrl ? `${opts.pageUrl}#plumber` : `${SITE.url}/#plumber`,
    name: SITE.name,
    url: opts?.pageUrl ?? SITE.url,
    image: SITE.logo,
    telephone: SITE.phone,
    email: SITE.email,
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      addressRegion: "MA",
      addressCountry: "US",
    },
    areaServed: (opts?.areaServed ?? ["South Shore, Massachusetts"]).map((name) => ({
      "@type": "City",
      name,
    })),
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        opens: "00:00",
        closes: "23:59",
      },
    ],
    parentOrganization: { "@id": `${SITE.url}/#organization` },
  }
}

export function breadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: item.url,
    })),
  }
}

export function faqSchema(faqs: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  }
}

export function serviceSchema(opts: { name: string; description: string; url: string; areaServed?: string[] }) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: opts.name,
    description: opts.description,
    url: opts.url,
    serviceType: opts.name,
    provider: { "@id": `${SITE.url}/#plumber` },
    areaServed: (opts.areaServed ?? ["South Shore, Massachusetts"]).map((name) => ({
      "@type": "City",
      name,
    })),
  }
}
