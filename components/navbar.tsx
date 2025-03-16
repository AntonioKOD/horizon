"use client"

import type React from "react"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/dist/ScrollTrigger"
import logo from '@/public/logohorizon.svg'
import Image from "next/image"
import logoLight from '@/public/logohorizon-light.svg'

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  // Add this function to the Navbar component to ensure smooth scrolling to the contact section
  const scrollToContact = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    const contactSection = document.getElementById("contact")
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" })
    }
    setIsMenuOpen(false)
  }

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
      className={`navbar fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white/95 backdrop-blur-md shadow-md py-2" : "bg-black/30 backdrop-blur-sm py-4"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
        <Link href="/" className="flex items-center">
            <div className="relative h-10 w-40">
              {scrolled ? (
              <Image src={logo} alt="Horizon Fix Logo" fill/>
              ) : (
              <Image src={logoLight} alt="Horizon Fix Logo" fill />
              )}
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link
              href="/services"
              className={`text-base font-medium transition-colors duration-300 ${
                scrolled ? "text-gray-800 hover:text-primary" : "text-white hover:text-primary drop-shadow-sm"
              }`}
            >
              Services
            </Link>
            <Link
              href="/about"
              className={`text-base font-medium transition-colors duration-300 ${
                scrolled ? "text-gray-800 hover:text-primary" : "text-white hover:text-primary drop-shadow-sm"
              }`}
            >
              About
            </Link>
            <Link
              href="/projects"
              className={`text-base font-medium transition-colors duration-300 ${
                scrolled ? "text-gray-800 hover:text-primary" : "text-white hover:text-primary drop-shadow-sm"
              }`}
            >
              Projects
            </Link>
            <Link
              href="/testimonials"
              className={`text-base font-medium transition-colors duration-300 ${
                scrolled ? "text-gray-800 hover:text-primary" : "text-white hover:text-primary drop-shadow-sm"
              }`}
            >
              Testimonials
            </Link>
            <Link
              href="/#contact"
              onClick={scrollToContact}
              className="bg-primary text-white hover:bg-primary/90 px-5 py-2 rounded-md transition-colors shadow-md"
            >
              Contact Us
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <div className="flex items-center md:hidden">
            <button
              className={`transition-colors duration-300 ${scrolled ? "text-gray-800" : "text-white"}`}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-md absolute top-full left-0 right-0 shadow-md">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <Link
              href="/services"
              className="text-base font-medium text-gray-800 hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Services
            </Link>
            <Link
              href="/about"
              className="text-base font-medium text-gray-800 hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link
              href="/projects"
              className="text-base font-medium text-gray-800 hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Projects
            </Link>
            <Link
              href="/testimonials"
              className="text-base font-medium text-gray-800 hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Testimonials
            </Link>
            <Link
              href="/contact"
              className="bg-primary text-white hover:bg-primary/90 px-5 py-2 rounded-md transition-colors inline-block"
              onClick={scrollToContact}
            >
              Contact Us
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}

