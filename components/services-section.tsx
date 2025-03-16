"use client"

import { useEffect, useRef } from "react"
import Link from "next/link"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { ArrowRight, AirVent, Home, UtilityPole } from "lucide-react"
import { Icon } from "lucide-react"
import { faucet } from '@lucide/lab'

const Plumbing = ({ className }: { className?: string }) => <Icon iconNode={faucet} size={24} className={className} />

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
      id: "plumbing",
      title: "Plumbing",
      description: "Our expert plumbing teams ensure efficient and reliable solutions for both residential and commercial properties.",
      icon: <Plumbing className="h-12 w-12 text-primary" />,
      image:
        "https://images.unsplash.com/photo-1503387762-592deb58ef4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
      features: [
        "Installation and repair services",
        "Water heater services",
        "Pipe maintenance and repair",
        "Drain cleaning services",
        "Emergency plumbing services",
        "Commercial plumbing solutions",
      ],
    },
    {
      id: "Electrical Services",
      title: "Electrical Services",
      description: "Professional electrical services for residential and commercial properties to ensure safety and efficiency.",
      icon: <UtilityPole className="h-12 w-12 text-primary" />,
      image:
        "https://images.unsplash.com/photo-1581235720704-06d3acfcb36f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
      features: [
        "Wiring and rewiring services",
        "Electrical panel upgrades",
        "Lighting installation and repair",
        "Outlet and switch installation",
        "Emergency electrical services",
        "Commercial electrical solutions",
      ],
    },
    {
      id: "roofing-services",
      title: "Roofing Services",
      description: "Professional roofing services to protect your property and enhance its curb appeal.",
      icon: <Home className="h-12 w-12 text-primary" />,
      image:
        "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
      features: [
        "Roof installation and replacement",
        "Roof repair and maintenance",
        "Gutter installation and repair",
        "Roof inspection services",
        "Emergency roofing services",
        "Commercial roofing solutions",

      ],
    },
    {
      id: "hvac-services",
      title: "HVAC Services",
      description: "Heating, ventilation, and air conditioning services to keep your property comfortable and energy-efficient.",
      icon: <AirVent className="h-12 w-12 text-primary" />,
      image:
        "https://images.unsplash.com/photo-1487958449943-2429e8be8625?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
      features: [
        "System installation and replacement",
        "HVAC repair and maintenance",
        "Duct cleaning and repair",
        "Indoor air quality services",
        "Emergency HVAC services",
        "Commercial HVAC solutions",
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
          "url('https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80')",
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
            We offer a comprehensive range of construction and renovation services to meet all your building needs.
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
                href={`/services#${service.title.toLowerCase()}`}
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

