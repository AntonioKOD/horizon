"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    // Animate navbar on load
    gsap.fromTo(".navbar", { y: -100, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" })

    // Change navbar style on scroll
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`navbar fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-white shadow-md py-2" : "bg-transparent py-4"}`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center">
            <span className="text-2xl font-bold text-primary">Horizon Fix</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/services" className="text-base font-medium hover:text-primary transition-colors">
              Services
            </Link>
            <Link href="/about" className="text-base font-medium hover:text-primary transition-colors">
              About
            </Link>
            <Link href="/projects" className="text-base font-medium hover:text-primary transition-colors">
              Projects
            </Link>
            <Link href="/testimonials" className="text-base font-medium hover:text-primary transition-colors">
              Testimonials
            </Link>
            <Link
              href="/contact"
              className="bg-primary hover:bg-primary/90 text-white px-5 py-2 rounded-md transition-colors"
            >
              Contact Us
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-gray-800" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white absolute top-full left-0 right-0 shadow-md">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <Link
              href="/#services"
              className="text-base font-medium hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Services
            </Link>
            <Link
              href="/#about"
              className="text-base font-medium hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link
              href="/#projects"
              className="text-base font-medium hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Projects
            </Link>
            <Link
              href="/#testimonials"
              className="text-base font-medium hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Testimonials
            </Link>
            <Link
              href="/#contact"
              className="bg-primary hover:bg-primary/90 text-white px-5 py-2 rounded-md transition-colors inline-block"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact Us
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}

