import { ContactForm } from "@/components/contact-form"
import { Mail, MapPin, Phone, Clock, Send, CheckCircle } from "lucide-react"

export const metadata = {
  title: "Contact Us - Horizon Fix",
  description: "Get in touch with Horizon Fix for all your construction and renovation needs.",
}

export default function ContactPage() {
  const contactInfo = [
    {
      icon: <MapPin className="h-6 w-6 text-primary" />,
      title: "Our Location",
      details: ["123 Construction Avenue", "Building District, NY 10001", "United States"],
    },
    {
      icon: <Phone className="h-6 w-6 text-primary" />,
      title: "Phone Number",
      details: ["+1 (555) 123-4567", "+1 (555) 987-6543"],
    },
    {
      icon: <Mail className="h-6 w-6 text-primary" />,
      title: "Email Address",
      details: ["info@horizonfix.com", "support@horizonfix.com"],
    },
    {
      icon: <Clock className="h-6 w-6 text-primary" />,
      title: "Business Hours",
      details: ["Monday - Friday: 8:00 AM - 6:00 PM", "Saturday: 9:00 AM - 4:00 PM", "Sunday: Closed"],
    },
  ]

  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="relative py-16 md:py-24 bg-gray-900 text-white">
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></div>
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl md:text-5xl font-bold mb-4">Contact Us</h1>
            <p className="text-lg md:text-xl text-gray-300">
              Have questions or ready to start your project? Get in touch with our team today.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((item, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="bg-primary/10 p-3 rounded-full inline-block mb-4">{item.icon}</div>
                <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                <div className="space-y-1">
                  {item.details.map((detail, idx) => (
                    <p key={idx} className="text-gray-600">
                      {detail}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form and Map */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <div className="bg-primary/5 p-6 rounded-lg mb-6">
                <h2 className="text-2xl font-bold mb-2 flex items-center">
                  <Send className="h-5 w-5 mr-2 text-primary" /> Send Us a Message
                </h2>
                <p className="text-gray-600 mb-0">
                  Fill out the form below and our team will get back to you as soon as possible.
                </p>
              </div>

              <ContactForm />
            </div>

            <div>
              <div className="bg-primary/5 p-6 rounded-lg mb-6">
                <h2 className="text-2xl font-bold mb-2 flex items-center">
                  <MapPin className="h-5 w-5 mr-2 text-primary" /> Our Location
                </h2>
                <p className="text-gray-600 mb-0">
                  Visit our office to discuss your project in person. We&apos;re conveniently located in the heart of the
                  city.
                </p>
              </div>

              <div className="h-[400px] bg-gray-200 rounded-lg overflow-hidden shadow-md">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.15830869428!2d-74.11976397304605!3d40.69766374874431!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sus!4v1616603736742!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy"
                  title="Horizon Fix Location"
                ></iframe>
              </div>

              <div className="mt-6 bg-gray-50 p-6 rounded-lg shadow-sm">
                <h3 className="text-lg font-semibold mb-3">Getting Here</h3>
                <div className="space-y-3">
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-2 mt-1 flex-shrink-0" />
                    <p className="text-gray-600">Convenient parking available in our building garage</p>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-2 mt-1 flex-shrink-0" />
                    <p className="text-gray-600">5-minute walk from Central Station subway stop</p>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-2 mt-1 flex-shrink-0" />
                    <p className="text-gray-600">Bus routes 42, 53, and 67 stop directly in front of our building</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Find answers to common questions about our services and processes.
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-4">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3">What areas do you serve?</h3>
              <p className="text-gray-600">
                We primarily serve the greater New York metropolitan area, including all five boroughs, Long Island, and
                parts of New Jersey and Connecticut. For larger projects, we may consider locations outside of our
                primary service area.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3">How do I get a quote for my project?</h3>
              <p className="text-gray-600">
                You can request a quote by filling out our contact form, calling our office, or sending us an email.
                We&apos;ll schedule a consultation to discuss your project requirements and provide you with a detailed
                estimate.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3">Are you licensed and insured?</h3>
              <p className="text-gray-600">
                Yes, Horizon Fix is fully licensed and insured. We carry comprehensive liability insurance and workers&apos;
                compensation coverage for all our employees and projects.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3">How long will my project take?</h3>
              <p className="text-gray-600">
                Project timelines vary depending on the scope and complexity of the work. During our initial
                consultation, we&apos;ll provide you with an estimated timeline for your specific project. We pride ourselves
                on completing projects on schedule.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Contact */}
      <section className="py-10 bg-red-600 text-white">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-2xl font-bold mb-3">24/7 Emergency Services</h2>
          <p className="text-lg mb-4 max-w-3xl mx-auto">
            For urgent construction or maintenance issues, our emergency team is available 24/7.
          </p>
          <div className="text-2xl font-bold flex items-center justify-center">
            <Phone className="h-6 w-6 mr-2 animate-pulse" />
            Emergency Hotline: +1 (555) 911-HELP
          </div>
        </div>
      </section>
    </main>
  )
}

