"use client"

import { useEffect, useRef } from "react"
import Link from "next/link"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { ArrowRight, Droplet, Wrench, Flame, ShowerHead, Waves } from "lucide-react"

export function ServicesSection() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    const section = sectionRef.current
    if (!section) return

    // Animate section title
    gsap.fromTo(
      ".services-title",
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        scrollTrigger: {
          trigger: ".services-title",
          start: "top 80%",
        },
      },
    )

    // Animate service cards
    gsap.fromTo(
      ".service-card",
      { y: 100, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".services-grid",
          start: "top 75%",
        },
      },
    )

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill())
    }
  }, [])

  const services = [
    {
      id: "emergency-plumbing",
      title: "Emergency Plumbing",
      description: "24/7 rapid response for burst pipes, overflowing toilets, and urgent leaks.",
      icon: <Waves className="h-12 w-12 text-primary" />,
      image:
        "https://files.manuscdn.com/user_upload_by_module/session_file/110397790/eTzBJAcNEkNEblop.jpg",
      features: [
        "Burst pipe repairs",
        "Emergency shutoff support",
        "Overflowing fixture response",
        "After-hours dispatch",
        "Leak containment",
        "Same-day diagnostics",
      ],
    },
    {
      id: "drain-cleaning",
      title: "Drain Cleaning",
      description: "Clear blocked sinks, tubs, showers, and main lines with professional tools.",
      icon: <Droplet className="h-12 w-12 text-primary" />,
      image:
        "https://files.manuscdn.com/user_upload_by_module/session_file/110397790/VLwawltljfTVIhKk.jpg",
      features: [
        "Kitchen drain clogs",
        "Bathroom drain clogs",
        "Main line cleaning",
        "Hydro-jetting",
        "Root intrusion removal",
        "Preventive maintenance",
      ],
    },
    {
      id: "water-heater-services",
      title: "Water Heater Services",
      description: "Repair, replacement, and maintenance for tank and tankless water heaters.",
      icon: <Flame className="h-12 w-12 text-primary" />,
      image:
        "https://files.manuscdn.com/user_upload_by_module/session_file/110397790/yfVBWFIqlCOmzCZq.jpg",
      features: [
        "No hot water diagnosis",
        "Anode rod replacement",
        "Tankless descaling",
        "Pilot and thermostat repair",
        "New unit installation",
        "Efficiency tuning",
      ],
    },
    {
      id: "pipe-leak-repair",
      title: "Pipe and Leak Repair",
      description: "Detect and repair hidden leaks, corroded pipes, and recurring water pressure issues.",
      icon: <Wrench className="h-12 w-12 text-primary" />,
      image:
        "https://files.manuscdn.com/user_upload_by_module/session_file/110397790/oqDtRorPcRNtKeAK.jpg",
      features: [
        "Slab leak detection",
        "Pipe section replacement",
        "Pressure troubleshooting",
        "Frozen pipe repair",
        "Repiping planning",
        "Water damage prevention",
      ],
    },
    {
      id: "bath-kitchen-fixtures",
      title: "Bathroom and Kitchen Fixtures",
      description: "Install or replace faucets, toilets, sinks, garbage disposals, and shower valves.",
      icon: <ShowerHead className="h-12 w-12 text-primary" />,
      image:
        "https://files.manuscdn.com/user_upload_by_module/session_file/110397790/ePwFtRArjRhKTYan.webp",
      features: [
        "Faucet replacement",
        "Toilet installation",
        "Sink and trap upgrades",
        "Disposal installation",
        "Shower valve replacement",
        "Fixture leak fixes",
      ],
    },
  ]

  return (
    <section
      id="services"
      ref={sectionRef}
      className="py-12 bg-gray-50"
      style={{
        backgroundImage:
          "url('https://files.manuscdn.com/user_upload_by_module/session_file/110397790/ifOogEuKaTcmifDI.webp')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
        position: "relative",
      }}
    >
      <div className="absolute inset-0 bg-gray-50/95"></div>
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-10">
          <h2 className="services-title text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Plumbing only. Fast response, honest communication, and long-lasting repairs for homes and small businesses.
          </p>
        </div>

        <div className="services-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="service-card bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="mb-3">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600 mb-3">{service.description}</p>
              <Link
                href={`/services#${service.id}`}
                className="text-primary font-medium flex items-center hover:underline"
              >
                Learn more <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center">
          <Link href="/services" className="inline-flex items-center text-primary font-semibold hover:underline">
            View all services <ArrowRight className="ml-1 h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}

