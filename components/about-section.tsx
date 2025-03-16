"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { CheckCircle, ArrowRight } from "lucide-react"

export function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    const section = sectionRef.current
    if (!section) return

    // Animate image
    gsap.fromTo(
      ".about-image",
      { x: -100, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".about-image",
          start: "top 75%",
        },
      },
    )

    // Animate content
    gsap.fromTo(
      ".about-content",
      { x: 100, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".about-content",
          start: "top 75%",
        },
      },
    )

    // Animate list items
    gsap.fromTo(
      ".about-feature",
      { y: 20, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.6,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".about-features",
          start: "top 80%",
        },
      },
    )

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill())
    }
  }, [])

  const features = [
    "25+ years of industry experience",
    "Certified and skilled professionals",
    "Quality materials and craftsmanship",
    "On-time project completion",
  ]

  return (
    <section id="about" ref={sectionRef} className="py-12 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div className="about-image relative h-[400px] rounded-lg overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
              alt="About Horizon Fix"
              fill
              className="object-cover"
            />
          </div>

          <div className="about-content">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">About Horizon Fix</h2>
            <p className="text-lg text-gray-700 mb-4">
              Since our founding, Horizon Fix has been at the forefront of the construction industry, delivering
              exceptional building solutions that stand the test of time. Our commitment to quality, innovation, and
              customer satisfaction has made us a trusted partner for projects of all sizes.
            </p>

            <div className="about-features grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
              {features.map((feature, index) => (
                <div key={index} className="about-feature flex items-center">
                  <CheckCircle className="h-5 w-5 text-primary mr-2 flex-shrink-0" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>

            <Link
              href="/about"
              className="inline-flex items-center bg-primary hover:bg-primary/90 text-white px-5 py-2 rounded-md transition-colors"
            >
              Learn More About Us <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

