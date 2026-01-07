"use client"

import type React from "react"

import { useEffect, useRef } from "react"
import Link from "next/link"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

export function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    const section = sectionRef.current
    if (!section) return

    const tl = gsap.timeline()

    tl.fromTo(".hero-title", { y: 100, opacity: 0 }, { y: 0, opacity: 1, duration: 1, ease: "power3.out" })
      .fromTo(".hero-subtitle", { y: 50, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" }, "-=0.6")
      .fromTo(".hero-button", { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6, ease: "power3.out" }, "-=0.4")
      .fromTo(".hero-overlay", { opacity: 0.9 }, { opacity: 0.7, duration: 1.5 }, "-=1")

    // Animate the scroll arrow
    gsap.to(".scroll-arrow", {
      y: 10,
      repeat: -1,
      yoyo: true,
      duration: 1,
      ease: "power1.inOut",
    })

    return () => {
      tl.kill()
    }
  }, [])

  // Function to handle smooth scrolling
  const scrollToServices = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    const servicesSection = document.getElementById("services")
    if (servicesSection) {
      window.scrollTo({
        top: servicesSection.offsetTop,
        behavior: "smooth",
      })
    }
  }

  return (
    <section
      ref={sectionRef}
      className="relative h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="hero-overlay absolute inset-0 bg-black opacity-70"></div>
      <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
        <h1 className="hero-title text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
          Your Trusted Handyman & Home Service Experts
        </h1>
        <p className="hero-subtitle text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto">
          Always on call for HVAC, plumbing, electrical, masonry, and handyman services. No job too small—from quick repairs to home renovations, we're here 24/7.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link
            href="/services"
            className="hero-button bg-primary hover:bg-primary/90 text-white px-8 py-3 rounded-md text-lg font-medium transition-colors"
          >
            Our Services
          </Link>
          <Link
            href="#contact"
            className="hero-button bg-white hover:bg-gray-100 text-gray-900 px-8 py-3 rounded-md text-lg font-medium transition-colors"
          >
            Get a Quote
          </Link>
        </div>
      </div>

      <div className="absolute bottom-10 left-0 right-0 flex justify-center">
        <a
          href="#services"
          onClick={scrollToServices}
          className="scroll-arrow bg-white/10 backdrop-blur-sm p-2 rounded-full hover:bg-white/20 transition-colors"
          aria-label="Scroll down"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-white"
          >
            <path d="M12 5v14M5 12l7 7 7-7" />
          </svg>
        </a>
      </div>
    </section>
  )
}

