"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { ChevronLeft, ChevronRight, Quote, ArrowRight } from "lucide-react"

export function TestimonialsSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const [currentIndex, setCurrentIndex] = useState(0)

  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Homeowner",
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80",
      quote:
        "Horizon Fix transformed our outdated home into a modern masterpiece. Their attention to detail and commitment to quality exceeded our expectations.",
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "Business Owner",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80",
      quote:
        "Working with Horizon Fix on our office renovation was a seamless experience. They delivered on time and within budget, with exceptional craftsmanship.",
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      role: "Property Developer",
      image:
        "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80",
      quote:
        "As a developer, I've worked with many construction firms, but Horizon Fix stands out for their reliability, expertise, and innovative solutions.",
    },
  ]

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    const section = sectionRef.current
    if (!section) return

    // Animate section title
    gsap.fromTo(
      ".testimonials-title",
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        scrollTrigger: {
          trigger: ".testimonials-title",
          start: "top 80%",
        },
      },
    )

    // Initial animation for testimonial
    animateTestimonial()

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill())
    }
  }, [])

  useEffect(() => {
    // Animate testimonial when index changes
    animateTestimonial()
  }, [currentIndex])

  const animateTestimonial = () => {
    gsap.fromTo(
      ".testimonial-content",
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        ease: "power3.out",
      },
    )
  }

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1))
  }

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1))
  }

  const currentTestimonial = testimonials[currentIndex]

  return (
    <section id="testimonials" ref={sectionRef} className="py-12 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-10">
          <h2 className="testimonials-title text-3xl md:text-4xl font-bold mb-4">What Our Clients Say</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Don&apos;t just take our word for it. Hear from our satisfied clients about their experience working with Horizon
            Fix.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="testimonial-content bg-white rounded-lg shadow-lg p-6 md:p-8 relative">
            <Quote className="h-10 w-10 text-primary/20 absolute top-6 left-6" />

            <div className="flex flex-col md:flex-row items-center gap-6">
              <div className="relative w-20 h-20 rounded-full overflow-hidden flex-shrink-0">
                <Image
                  src={currentTestimonial.image || "/placeholder.svg"}
                  alt={currentTestimonial.name}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="text-center md:text-left">
                <p className="text-lg text-gray-700 mb-4 italic">&quot;{currentTestimonial.quote}&quot;</p>
                <h4 className="text-lg font-semibold">{currentTestimonial.name}</h4>
                <p className="text-gray-600">{currentTestimonial.role}</p>
              </div>
            </div>
          </div>

          <div className="flex justify-center mt-6 gap-4">
            <button
              onClick={prevTestimonial}
              className="p-2 rounded-full bg-gray-200 hover:bg-gray-300 transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              onClick={nextTestimonial}
              className="p-2 rounded-full bg-gray-200 hover:bg-gray-300 transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>

          <div className="mt-8 text-center">
            <Link href="/testimonials" className="inline-flex items-center text-primary font-medium hover:underline">
              Read More Testimonials <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

