"use client"

import { useEffect, useRef } from "react"
import Link from "next/link"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { ArrowRight, Wrench, Home, Wind, Droplet, Zap, Hammer, Building, Paintbrush, Building2 } from "lucide-react"

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
      id: "hvac-services",
      title: "HVAC Services",
      description: "Expert HVAC repairs, maintenance, and installations. Always on call for heating and cooling emergencies.",
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
      description: "Quick response plumbing services for leaks, repairs, and installations. No job too small.",
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
      description: "Licensed electricians for outlets, switches, repairs, and safety inspections. Always available.",
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
      description: "Expert masonry work from small repairs to larger projects. Brick, stone, and concrete specialists.",
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
      description: "Complete handyman solutions for all your home repair and maintenance needs. No job too small!",
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
      description: "Full-service home renovations from kitchen and bathroom remodels to complete home transformations.",
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
      description: "Professional interior and exterior painting services. Quality finishes for your home or business.",
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
      description: "Expert roofing installation, repair, and maintenance. Protect your home with quality roofing solutions.",
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
      description: "Professional siding installation and repair. Enhance your home's curb appeal and protection.",
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
    <section
      id="services"
      ref={sectionRef}
      className="py-12 bg-gray-50"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80')",
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
            Always on call for HVAC, plumbing, electrical, masonry, handyman services, painting, roofing, siding, and home renovations. No job too small—quick response times, expert tradespeople.
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

