import Image from "next/image"
import Link from "next/link"
import { CheckCircle, Wrench, Flame, Droplet, Waves, ShowerHead, AlertTriangle } from "lucide-react"
import Head from "next/head"

export const metadata = {
  title: "Plumbing Services - Horizon Fix | South Shore MA",
  description: "Explore plumbing services from Horizon Fix, including emergency plumbing, drain cleaning, water heater repair, leak detection, and fixture installation throughout South Shore Massachusetts.",
}

export default function ServicesPage() {
  const services = [
    {
      id: "emergency-plumbing",
      title: "Emergency Plumbing",
      description: "Immediate plumbing response for burst pipes, flooding fixtures, and urgent leaks. Licensed plumbers available 24/7 across the South Shore.",
      icon: <AlertTriangle className="h-12 w-12 text-primary" />,
      image:
        "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      features: [
        "Burst pipe repairs",
        "Emergency shutoff guidance",
        "Overflowing fixture response",
        "After-hours dispatch",
        "Water damage prevention",
        "Rapid on-site diagnostics",
      ],
    },
    {
      id: "drain-cleaning",
      title: "Drain Cleaning",
      description: "Clear slow and blocked drains in kitchens, bathrooms, and main lines with professional equipment and camera-verified results.",
      icon: <Droplet className="h-12 w-12 text-primary" />,
      image:
        "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      features: [
        "Kitchen sink clogs",
        "Shower and tub clogs",
        "Main line cleaning",
        "Hydro-jetting",
        "Camera inspections",
        "Preventive maintenance",
      ],
    },
    {
      id: "water-heater-services",
      title: "Water Heater Services",
      description: "Repair, replacement, and maintenance for tank and tankless water heaters so you never run out of hot water.",
      icon: <Flame className="h-12 w-12 text-primary" />,
      image:
        "https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      features: [
        "No-hot-water diagnosis",
        "Pilot and thermostat repairs",
        "Anode rod replacement",
        "Tankless descaling",
        "New water heater installation",
        "Efficiency optimization",
      ],
    },
    {
      id: "pipe-leak-repair",
      title: "Pipe and Leak Repair",
      description: "Find and fix hidden leaks, corroded piping, and persistent water pressure issues before they cause costly damage.",
      icon: <Wrench className="h-12 w-12 text-primary" />,
      image:
        "https://images.unsplash.com/photo-1581578731548-c6a0c3f2f2c0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      features: [
        "Leak detection",
        "Pipe section replacement",
        "Frozen pipe repair",
        "Water pressure troubleshooting",
        "Repiping planning",
        "Slab leak support",
      ],
    },
    {
      id: "fixture-installation",
      title: "Fixture Installation",
      description: "Install and replace faucets, toilets, sinks, disposals, and shower valves with clean workmanship and tested results.",
      icon: <ShowerHead className="h-12 w-12 text-primary" />,
      image:
        "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      features: [
        "Faucet upgrades",
        "Toilet installation",
        "Sink replacement",
        "Garbage disposal installs",
        "Shower valve replacement",
        "Final leak testing",
      ],
    },
    {
      id: "sewer-line-services",
      title: "Sewer and Main Line Services",
      description: "Diagnose and resolve sewer backups, root intrusion, and main line damage with camera inspections and lasting repairs.",
      icon: <Waves className="h-12 w-12 text-primary" />,
      image:
        "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      features: [
        "Sewer camera inspections",
        "Main line clog removal",
        "Root intrusion clearing",
        "Backflow prevention",
        "Sewer odor diagnosis",
        "Line repair coordination",
      ],
    },
  ]

  return (
    <>
    <Head>
        <title>Plumbing Services | Horizon Fix Plumbing | South Shore MA</title>
        <meta name="description" content="Explore our full plumbing service list: emergency plumbing, drain cleaning, water heater repair, leak detection, sewer support, and fixture installation across South Shore Massachusetts." />
        <link rel="canonical" href="https://horizonfix.com/services" />
        {/* Open Graph Tags */}
        <meta property="og:title" content="Plumbing Services | Horizon Fix Plumbing | South Shore MA" />
        <meta property="og:description" content="Need dependable plumbing service? We provide emergency repairs, clog removal, water heater work, and leak solutions for homes and small businesses." />
        <meta property="og:url" content="https://horizonfix.com/services" />
        <meta property="og:type" content="website" />
        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Plumbing Services | Horizon Fix Plumbing | South Shore MA" />
        <meta name="twitter:description" content="From urgent leaks to planned installations, Horizon Fix Plumbing delivers fast, professional plumbing services across South Shore MA." />
      </Head>
    <main className="flex min-h-screen flex-col">
      {/* Hero Section */}
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
            <h1 className="text-3xl md:text-5xl font-bold mb-6">Our Services</h1>
            <p className="text-lg md:text-xl text-gray-300">
              Plumbing only. Fast response times, honest recommendations, and durable repairs done right.
            </p>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Complete Plumbing Solutions</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              From quick repairs to full system upgrades, we handle residential and light commercial plumbing with
              professionalism and care.
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
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Need Plumbing Help Today?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Contact us now for emergency plumbing, maintenance, or fixture installation. We are ready to help.
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
