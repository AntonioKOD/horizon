import Image from "next/image"
import Link from "next/link"
import { CheckCircle, Wrench, Home, Wind, Droplet, Zap, Hammer, Building, Paintbrush, Building2 } from "lucide-react"
import Head from "next/head"

export const metadata = {
  title: "Services - Horizon Fix",
  description: "Explore our comprehensive range of handyman and home automation services.",
}



export default function ServicesPage() {
  const services = [
    {
      id: "hvac-services",
      title: "HVAC Services",
      description: "Expert HVAC repairs, maintenance, and installations. Always on call for heating and cooling emergencies. Quick response times for all your HVAC needs.",
      icon: <Wind className="h-12 w-12 text-primary" />,
      image:
        "https://images.unsplash.com/photo-1621905251918-48116d1b5b21?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      features: [
        "AC repair and maintenance",
        "Heating system repairs",
        "Ductwork cleaning",
        "Thermostat installation",
        "Filter replacement",
        "Emergency HVAC service",
      ],
    },
    {
      id: "plumbing-services",
      title: "Plumbing Services",
      description: "Quick response plumbing services for leaks, repairs, and installations. No job too small. Licensed plumbers available 24/7 for all your plumbing needs.",
      icon: <Droplet className="h-12 w-12 text-primary" />,
      image:
        "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      features: [
        "Leak repairs",
        "Faucet and fixture installation",
        "Drain cleaning",
        "Toilet repair",
        "Pipe repairs",
        "Water heater service",
      ],
    },
    {
      id: "electrical-services",
      title: "Electrical Services",
      description: "Licensed electricians for outlets, switches, repairs, and safety inspections. Always available for electrical emergencies and routine work.",
      icon: <Zap className="h-12 w-12 text-primary" />,
      image:
        "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      features: [
        "Outlet and switch installation",
        "Circuit breaker repairs",
        "Lighting installation",
        "Electrical troubleshooting",
        "Panel upgrades",
        "Safety inspections",
      ],
    },
    {
      id: "masonry-services",
      title: "Masonry Services",
      description: "Expert masonry work from small repairs to larger projects. Brick, stone, and concrete specialists. Quality craftsmanship for all your masonry needs.",
      icon: <Building className="h-12 w-12 text-primary" />,
      image:
        "https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      features: [
        "Brick and stone repairs",
        "Chimney repair",
        "Patio and walkway work",
        "Foundation repairs",
        "Tuckpointing",
        "Masonry restoration",
      ],
    },
    {
      id: "handyman-services",
      title: "Handyman Services",
      description: "Complete handyman solutions for all your home repair and maintenance needs. No job too small! Quick, reliable service for all your odd jobs.",
      icon: <Wrench className="h-12 w-12 text-primary" />,
      image:
        "https://images.unsplash.com/photo-1504148455328-c376907d081c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      features: [
        "Furniture assembly",
        "Door and window repairs",
        "Cabinet work",
        "Painting and touch-ups",
        "Drywall repairs",
        "General maintenance",
      ],
    },
    {
      id: "home-renovations",
      title: "Home Renovations",
      description: "Full-service home renovations from kitchen and bathroom remodels to complete home transformations. Expert project management from start to finish.",
      icon: <Home className="h-12 w-12 text-primary" />,
      image:
        "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      features: [
        "Kitchen renovations",
        "Bathroom renovations",
        "Room additions",
        "Basement finishing",
        "Whole home renovations",
        "Design consultation",
      ],
    },
    {
      id: "painting-services",
      title: "Painting Services",
      description: "Professional interior and exterior painting services. Quality finishes for your home or business. Expert painters with attention to detail.",
      icon: <Paintbrush className="h-12 w-12 text-primary" />,
      image:
        "https://images.unsplash.com/photo-1563453392212-326f5e854473?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      features: [
        "Interior painting",
        "Exterior painting",
        "Cabinet painting",
        "Deck and fence staining",
        "Color consultation",
        "Pressure washing prep",
      ],
    },
    {
      id: "roofing-services",
      title: "Roofing Services",
      description: "Expert roofing installation, repair, and maintenance. Protect your home with quality roofing solutions. Licensed and insured roofers.",
      icon: <Home className="h-12 w-12 text-primary" />,
      image:
        "https://images.unsplash.com/photo-1503387762-592deb58ef4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      features: [
        "Roof installation",
        "Roof repairs",
        "Roof replacement",
        "Leak detection and repair",
        "Gutter installation",
        "Roof inspections",
      ],
    },
    {
      id: "siding-services",
      title: "Siding Services",
      description: "Professional siding installation and repair. Enhance your home's curb appeal and protection. Expert installation for all siding types.",
      icon: <Building2 className="h-12 w-12 text-primary" />,
      image:
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      features: [
        "Siding installation",
        "Siding repair",
        "Siding replacement",
        "Vinyl siding",
        "Fiber cement siding",
        "Siding maintenance",
      ],
    },
  ]

  return (
    <>
    <Head>
        <title>Our Services | Horizon Fix – Always On Call Handyman & Home Service Experts</title>
        <meta name="description" content="Always on call for HVAC, plumbing, electrical, masonry, handyman services, painting, roofing, siding, and home renovations. No job too small. Expert tradespeople available 24/7 for all your home service needs." />
        <link rel="canonical" href="https://horizonfix.com/services" />
        {/* Open Graph Tags */}
        <meta property="og:title" content="Our Services | Horizon Fix – Always On Call Handyman & Home Service Experts" />
        <meta property="og:description" content="Discover expert HVAC, plumbing, electrical, masonry, handyman, painting, roofing, siding, and home renovation services at Horizon Fix. Always on call, quick response times, no job too small." />
        <meta property="og:url" content="https://horizonfix.com/services" />
        <meta property="og:type" content="website" />
        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Our Services | Horizon Fix – Always On Call Handyman & Home Service Experts" />
        <meta name="twitter:description" content="Always on call for HVAC, plumbing, electrical, masonry, handyman services, painting, roofing, siding, and home renovations. Expert tradespeople available 24/7." />
      </Head>
    <main className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="relative py-20 md:py-28 bg-gray-900 text-white">
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></div>
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl md:text-5xl font-bold mb-6">Our Services</h1>
            <p className="text-lg md:text-xl text-gray-300">
              Always on call for HVAC, plumbing, electrical, masonry, handyman services, painting, roofing, siding, and home renovations. No job too small—quick response times, expert tradespeople available 24/7.
            </p>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Comprehensive Home Solutions</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              From small repairs to full home renovations, we provide expert services across all trades including HVAC, plumbing, electrical, masonry, handyman, painting, roofing, and siding. Always on call, quick response times, and no job too small.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <div key={service.id} className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <Link href={`#${service.id}`} className="text-primary font-medium hover:underline">
                  Learn more
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Service Sections */}
      {services.map((service, index) => (
        <section key={service.id} id={service.id} className={`py-20 ${index % 2 === 0 ? "bg-white" : "bg-gray-50"}`}>
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className={`${index % 2 === 1 ? "lg:order-last" : ""}`}>
                <div className="relative h-[400px] rounded-lg overflow-hidden">
                  <Image src={service.image || "/placeholder.svg"} alt={service.title} fill className="object-cover" />
                </div>
              </div>

              <div>
                <div className="mb-4">{service.icon}</div>
                <h2 className="text-3xl font-bold mb-4">{service.title}</h2>
                <p className="text-lg text-gray-700 mb-6">{service.description}</p>

                <div className="space-y-3">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary mr-2 mt-1 flex-shrink-0" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-8">
                  <Link
                    href="/contact"
                    className="bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-md font-medium transition-colors inline-block"
                  >
                    Request a Quote
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* CTA Section */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Start Your Project?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Contact us today to discuss your HVAC, plumbing, electrical, masonry, handyman, painting, roofing, siding, or renovation needs. Always on call, always ready to help.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/contact"
              className="bg-white text-primary hover:bg-gray-100 px-8 py-3 rounded-md text-lg font-medium transition-colors"
            >
              Contact Us
            </Link>
            <Link
              href="/about"
              className="bg-transparent border-2 border-white hover:bg-white/10 text-white px-8 py-3 rounded-md text-lg font-medium transition-colors"
            >
              Learn About Us
            </Link>
          </div>
        </div>
      </section>
    </main>
    </>
  )
}

