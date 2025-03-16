"use client"

import type React from "react"

import { useState } from "react"
import { Send, AlertCircle } from "lucide-react"

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    service: "",
    message: "",
    projectType: "",
    budget: "",
    timeframe: "",
  })

  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState("")

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
      subject: "",
      service: "",
      message: "",
      projectType: "",
      budget: "",
      timeframe: "",
    })

    // Reset success message after 5 seconds
    setTimeout(() => {
      setSubmitted(false)
    }, 5000)
  }

  return (
    <div className="p-6 rounded-lg shadow-md">
      {submitted ? (
        <div className="text-center py-8">
          <div className="bg-green-100 text-green-600 rounded-full p-3 inline-flex mb-4">
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
          <p className="text-gray-600">
            Your message has been sent successfully. We&apos;ll get back to you as soon as possible.
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-5">
          {error && (
            <div className="bg-red-50 text-red-500 p-4 rounded-md flex items-start">
              <AlertCircle className="h-5 w-5 mr-2 mt-0.5 flex-shrink-0" />
              <span>{error}</span>
            </div>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                Your Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email Address <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
                required
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
              />
            </div>
            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
                placeholder="e.g., Project Inquiry"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div>
              <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1">
                Service Interested In
              </label>
              <select
                id="service"
                name="service"
                value={formData.service}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
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
            <div>
              <label htmlFor="projectType" className="block text-sm font-medium text-gray-700 mb-1">
                Project Type
              </label>
              <select
                id="projectType"
                name="projectType"
                value={formData.projectType}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
              >
                <option value="">Select project type</option>
                <option value="residential">Residential</option>
                <option value="commercial">Commercial</option>
                <option value="industrial">Industrial</option>
                <option value="institutional">Institutional</option>
                <option value="other">Other</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div>
              <label htmlFor="budget" className="block text-sm font-medium text-gray-700 mb-1">
                Estimated Budget
              </label>
              <select
                id="budget"
                name="budget"
                value={formData.budget}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
              >
                <option value="">Select budget range</option>
                <option value="under25k">Under $25,000</option>
                <option value="25k-50k">$25,000 - $50,000</option>
                <option value="50k-100k">$50,000 - $100,000</option>
                <option value="100k-250k">$100,000 - $250,000</option>
                <option value="250k-500k">$250,000 - $500,000</option>
                <option value="over500k">Over $500,000</option>
              </select>
            </div>
            <div>
              <label htmlFor="timeframe" className="block text-sm font-medium text-gray-700 mb-1">
                Desired Timeframe
              </label>
              <select
                id="timeframe"
                name="timeframe"
                value={formData.timeframe}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
              >
                <option value="">Select timeframe</option>
                <option value="immediate">Immediate (ASAP)</option>
                <option value="1-3months">1-3 months</option>
                <option value="3-6months">3-6 months</option>
                <option value="6-12months">6-12 months</option>
                <option value="flexible">Flexible</option>
              </select>
            </div>
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
              Your Message <span className="text-red-500">*</span>
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              value={formData.message}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
              placeholder="Tell us about your project..."
              required
            ></textarea>
          </div>

          <div className="flex items-center">
            <input
              type="checkbox"
              id="privacy"
              className="h-4 w-4 text-primary focus:ring-primary border-gray-300 rounded"
              required
            />
            <label htmlFor="privacy" className="ml-2 block text-sm text-gray-700">
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
  )
}

