"use client"

import { useEffect, useRef } from "react"
import Link from "next/link"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Building2, Hammer, PaintBucket, Ruler, Truck, Wrench, ArrowRight } from "lucide-react"

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
      title: "Construction",
      description: "Full-service construction for residential and commercial projects with expert craftsmanship.",
      icon: <Building2 className="h-10 w-10 text-primary" />,
    },
    {
      title: "Renovation",
      description: "Transform your existing space with our comprehensive renovation services.",
      icon: <Hammer className="h-10 w-10 text-primary" />,
    },
    {
      title: "Interior Design",
      description: "Creative interior design solutions that blend functionality with aesthetic appeal.",
      icon: <PaintBucket className="h-10 w-10 text-primary" />,
    },
    {
      title: "Architecture",
      description: "Innovative architectural designs that bring your vision to life with precision.",
      icon: <Ruler className="h-10 w-10 text-primary" />,
    },
    {
      title: "Maintenance",
      description: "Regular maintenance services to keep your property in optimal condition.",
      icon: <Wrench className="h-10 w-10 text-primary" />,
    },
    {
      title: "Material Supply",
      description: "Quality construction materials delivered on time for your project needs.",
      icon: <Truck className="h-10 w-10 text-primary" />,
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

