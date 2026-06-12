"use client"

import type React from "react"
import { useState } from "react"
import { useRouter } from "next/navigation"
import { Send, AlertCircle } from "lucide-react"

type LeadFormProps = {
  // Pre-selects the service dropdown (e.g. "emergency-plumbing")
  defaultService?: string
  // Appended to the message so we know which landing page converted (e.g. "plumber-quincy")
  source?: string
  heading?: string
  buttonLabel?: string
}

export function LeadForm({ defaultService = "", source = "", heading = "Get a Fast, Free Quote", buttonLabel = "Get My Free Quote" }: LeadFormProps) {
  const router = useRouter()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: defaultService,
    message: "",
  })
  const [errors, setErrors] = useState<{ [key: string]: string }>({})
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }))
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    const newErrors: { [key: string]: string } = {}
    if (!formData.name.trim()) newErrors.name = "Name is required"
    if (!formData.email.trim()) {
      newErrors.email = "Email is required"
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid"
    }
    if (!formData.message.trim()) newErrors.message = "Please describe your plumbing issue"
    setErrors(newErrors)
    if (Object.keys(newErrors).length > 0) return

    setIsSubmitting(true)
    try {
      const res = await fetch("/api/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          service: formData.service,
          message: source ? `[${source}] ${formData.message}` : formData.message,
        }),
      })
      if (!res.ok) throw new Error("Failed to submit form")
      router.push("/thank-you")
    } catch {
      setErrors({ form: "There was an error sending your request. Please call us at +1 978 893 7728." })
      setIsSubmitting(false)
    }
  }

  return (
    <div className="bg-white rounded-lg shadow-xl p-6 md:p-8">
      <h3 className="text-2xl font-bold mb-2">{heading}</h3>
      <p className="text-gray-600 mb-6">Tell us what&apos;s going on and we&apos;ll get right back to you.</p>

      <form onSubmit={handleSubmit} className="space-y-4">
        {errors.form && (
          <div className="bg-red-50 text-red-500 p-4 rounded-md flex items-start">
            <AlertCircle className="h-5 w-5 mr-2 mt-0.5 flex-shrink-0" />
            <span>{errors.form}</span>
          </div>
        )}

        <div>
          <label htmlFor="lead-name" className="block text-sm font-medium text-gray-700 mb-1">
            Your Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="lead-name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className={`w-full px-4 py-2 border ${errors.name ? "border-red-500 bg-red-50" : "border-gray-300"} rounded-md focus:ring-primary focus:border-primary`}
            placeholder="John Doe"
          />
          {errors.name && <p className="mt-1 text-sm text-red-500">{errors.name}</p>}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="lead-email" className="block text-sm font-medium text-gray-700 mb-1">
              Email <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              id="lead-email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={`w-full px-4 py-2 border ${errors.email ? "border-red-500 bg-red-50" : "border-gray-300"} rounded-md focus:ring-primary focus:border-primary`}
              placeholder="john@example.com"
            />
            {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email}</p>}
          </div>
          <div>
            <label htmlFor="lead-phone" className="block text-sm font-medium text-gray-700 mb-1">
              Phone
            </label>
            <input
              type="tel"
              id="lead-phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
              placeholder="(781) 555-0123"
            />
          </div>
        </div>

        <div>
          <label htmlFor="lead-service" className="block text-sm font-medium text-gray-700 mb-1">
            What do you need help with?
          </label>
          <select
            id="lead-service"
            name="service"
            value={formData.service}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
          >
            <option value="">Select a service</option>
            <option value="emergency-plumbing">Emergency Plumbing</option>
            <option value="drain-cleaning">Drain Cleaning</option>
            <option value="leak-repair">Pipe and Leak Repair</option>
            <option value="water-heater">Water Heater Service</option>
            <option value="fixtures">Fixture Installation</option>
            <option value="sewer">Sewer and Main Line</option>
            <option value="other">Other</option>
          </select>
        </div>

        <div>
          <label htmlFor="lead-message" className="block text-sm font-medium text-gray-700 mb-1">
            Describe the issue <span className="text-red-500">*</span>
          </label>
          <textarea
            id="lead-message"
            name="message"
            rows={3}
            value={formData.message}
            onChange={handleChange}
            className={`w-full px-4 py-2 border ${errors.message ? "border-red-500 bg-red-50" : "border-gray-300"} rounded-md focus:ring-primary focus:border-primary`}
            placeholder="Tell us about your plumbing issue..."
          ></textarea>
          {errors.message && <p className="mt-1 text-sm text-red-500">{errors.message}</p>}
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-primary hover:bg-primary/90 text-white py-3 px-6 rounded-md text-lg font-semibold transition-colors flex items-center justify-center disabled:opacity-70"
        >
          {isSubmitting ? (
            "Sending..."
          ) : (
            <>
              <Send className="h-5 w-5 mr-2" /> {buttonLabel}
            </>
          )}
        </button>
        <p className="text-xs text-gray-500 text-center">
          No obligation. We respond fast — or call us now at{" "}
          <a href="tel:+19788937728" className="text-primary font-medium">
            +1 978 893 7728
          </a>
        </p>
      </form>
    </div>
  )
}
