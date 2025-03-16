"use client"

import type React from "react"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Mail, Phone, Send, ArrowRight, AlertCircle } from "lucide-react"

export function ContactSectionHome() {
  const sectionRef = useRef<HTMLElement>(null)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  })

  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState("")

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    const section = sectionRef.current
    if (!section) return

    // Animate section title
    gsap.fromTo(
      ".contact-home-title",
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        scrollTrigger: {
          trigger: ".contact-home-title",
          start: "top 80%",
        },
      },
    )

    // Animate form
    gsap.fromTo(
      ".contact-home-form",
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".contact-home-form",
          start: "top 75%",
        },
      },
    )

    // Animate contact info
    gsap.fromTo(
      ".contact-home-info",
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".contact-home-info",
          start: "top 75%",
        },
      },
    )

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill())
    }
  }, [])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      setError("Please fill in all required fields.")
      return
    }

    // In a real application, you would send this data to your backend
    console.log("Form submitted:", formData)

    // Show success message and reset form
    setSubmitted(true)
    setError("")
    setFormData({
      name: "",
      email: "",
      phone: "",
      service: "",
      message: "",
    })

    // Reset success message after 5 seconds
    setTimeout(() => {
      setSubmitted(false)
    }, 5000)
  }

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="py-12 bg-gray-900 text-white"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
        position: "relative",
      }}
    >
      <div className="absolute inset-0 bg-gray-900/90"></div>
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-10">
          <h2 className="contact-home-title text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Ready to start your project? Contact us today for a free consultation and quote.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 contact-home-form">
            {submitted ? (
              <div className="bg-primary/10 p-8 rounded-lg text-center">
                <div className="bg-primary/20 text-primary rounded-full p-3 inline-flex mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="40"
                    height="40"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                    <polyline points="22 4 12 14.01 9 11.01"></polyline>
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-2">Thank You!</h3>
                <p className="text-gray-300 mb-6">
                  Your message has been sent successfully. We&apos;ll get back to you as soon as possible.
                </p>
                <Link
                  href="/services"
                  className="inline-flex items-center bg-primary hover:bg-primary/90 text-white px-5 py-2 rounded-md transition-colors"
                >
                  Explore Our Services <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-white/5 backdrop-blur-sm p-6 rounded-lg">
                {error && (
                  <div className="bg-red-500/20 text-red-100 p-4 rounded-md mb-6 flex items-start">
                    <AlertCircle className="h-5 w-5 mr-2 mt-0.5 flex-shrink-0" />
                    <span>{error}</span>
                  </div>
                )}

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
                      Your Name <span className="text-red-400">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-2 bg-white/10 border border-gray-700 rounded-md focus:ring-primary focus:border-primary text-white"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
                      Email Address <span className="text-red-400">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-2 bg-white/10 border border-gray-700 rounded-md focus:ring-primary focus:border-primary text-white"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-1">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-2 bg-white/10 border border-gray-700 rounded-md focus:ring-primary focus:border-primary text-white"
                    />
                  </div>
                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-gray-300 mb-1">
                      Service Interested In
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full px-4 py-2 bg-white/10 border border-gray-700 rounded-md focus:ring-primary focus:border-primary text-white"
                    >
                      <option value="">Select a service</option>
                      <option value="construction">Construction</option>
                      <option value="renovation">Renovation</option>
                      <option value="interior">Interior Design</option>
                      <option value="architecture">Architecture</option>
                      <option value="maintenance">Maintenance</option>
                      <option value="material">Material Supply</option>
                    </select>
                  </div>
                </div>

                <div className="mb-6">
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">
                    Your Message <span className="text-red-400">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-2 bg-white/10 border border-gray-700 rounded-md focus:ring-primary focus:border-primary text-white"
                    placeholder="Tell us about your project..."
                    required
                  ></textarea>
                </div>

                <div className="flex items-center mb-6">
                  <input
                    type="checkbox"
                    id="privacy-home"
                    className="h-4 w-4 text-primary focus:ring-primary border-gray-700 rounded bg-white/10"
                    required
                  />
                  <label htmlFor="privacy-home" className="ml-2 block text-sm text-gray-300">
                    I agree to the{" "}
                    <a href="#" className="text-primary hover:underline">
                      Privacy Policy
                    </a>{" "}
                    and consent to being contacted regarding my inquiry.
                  </label>
                </div>

                <button
                  type="submit"
                  className="w-full bg-primary hover:bg-primary/90 text-white py-3 px-6 rounded-md transition-colors flex items-center justify-center"
                >
                  <Send className="h-4 w-4 mr-2" /> Send Message
                </button>
              </form>
            )}
          </div>

          <div className="contact-home-info space-y-6">
            <div className="bg-white/5 backdrop-blur-sm p-6 rounded-lg">
              <div className="flex items-start">
                <div className="bg-primary/20 p-3 rounded-full mr-4">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Call Us</h3>
                  <p className="text-gray-300">+1 (555) 123-4567</p>
                  <p className="text-gray-400 text-sm">Mon-Fri, 8:00 AM - 6:00 PM</p>
                </div>
              </div>
            </div>

            <div className="bg-white/5 backdrop-blur-sm p-6 rounded-lg">
              <div className="flex items-start">
                <div className="bg-primary/20 p-3 rounded-full mr-4">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Email Us</h3>
                  <p className="text-gray-300">info@horizonfix.com</p>
                  <p className="text-gray-400 text-sm">We&apos;ll respond within 24 hours</p>
                </div>
              </div>
            </div>

            <div className="bg-primary p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-3">Emergency Service</h3>
              <p className="mb-4">Need urgent assistance? Our emergency team is available 24/7.</p>
              <div className="text-xl font-bold flex items-center">
                <Phone className="h-5 w-5 mr-2 animate-pulse" />
                +1 (555) 911-HELP
              </div>
            </div>

            <div className="bg-white/5 backdrop-blur-sm p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-3">Visit Our Office</h3>
              <p className="text-gray-300 mb-2">
                123 Construction Avenue
                <br />
                Building District, NY 10001
              </p>
              <Link href="/contact" className="inline-flex items-center text-primary hover:underline">
                Get Directions <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

