import Image from "next/image"
import Link from "next/link"
import { CheckCircle, AirVent, Home, UtilityPole } from "lucide-react"
import { Icon } from "lucide-react"
import {faucet} from '@lucide/lab'

export const metadata = {
  title: "Services - Horizon Fix",
  description: "Explore our comprehensive range of construction and renovation services.",
}

const Plumbing = ({ className }: { className?: string }) => <Icon iconNode={faucet} size={24} className={className} />


export default function ServicesPage() {
  const services = [
    {
      id: "plumbing",
      title: "Plumbing",
      description: "Our expert plumbing teams ensure efficient and reliable solutions for both residential and commercial properties.",
      icon: <Plumbing className="h-12 w-12 text-primary" />,
      image:
        "https://images.unsplash.com/photo-1503387762-592deb58ef4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
      features: [
        "Installation and repair services",
        "Water heater services",
        "Pipe maintenance and repair",
        "Drain cleaning services",
        "Emergency plumbing services",
        "Commercial plumbing solutions",
      ],
    },
    {
      id: "Electrical Services",
      title: "Electrical Services",
      description: "Professional electrical services for residential and commercial properties to ensure safety and efficiency.",
      icon: <UtilityPole className="h-12 w-12 text-primary" />,
      image:
        "https://images.unsplash.com/photo-1581235720704-06d3acfcb36f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
      features: [
        "Wiring and rewiring services",
        "Electrical panel upgrades",
        "Lighting installation and repair",
        "Outlet and switch installation",
        "Emergency electrical services",
        "Commercial electrical solutions",
      ],
    },
    {
      id: "roofing-services",
      title: "Roofing Services",
      description: "Professional roofing services to protect your property and enhance its curb appeal.",
      icon: <Home className="h-12 w-12 text-primary" />,
      image:
        "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
      features: [
        "Roof installation and replacement",
        "Roof repair and maintenance",
        "Gutter installation and repair",
        "Roof inspection services",
        "Emergency roofing services",
        "Commercial roofing solutions",

      ],
    },
    {
      id: "hvac-services",
      title: "HVAC Services",
      description: "Heating, ventilation, and air conditioning services to keep your property comfortable and energy-efficient.",
      icon: <AirVent className="h-12 w-12 text-primary" />,
      image:
        "https://images.unsplash.com/photo-1487958449943-2429e8be8625?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
      features: [
        "System installation and replacement",
        "HVAC repair and maintenance",
        "Duct cleaning and repair",
        "Indoor air quality services",
        "Emergency HVAC services",
        "Commercial HVAC solutions",
      ],
    },
  ]

  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="relative py-20 md:py-28 bg-gray-900 text-white">
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></div>
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl md:text-5xl font-bold mb-6">Our Services</h1>
            <p className="text-lg md:text-xl text-gray-300">
              We offer a comprehensive range of construction and renovation services tailored to meet your specific
              needs and exceed your expectations.
            </p>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Comprehensive Construction Solutions</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              From initial concept to final completion, we provide end-to-end services to bring your construction and
              renovation projects to life.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <div key={service.id} className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <Link href={`#${service.id}`} className="text-primary font-medium hover:underline">
                  Learn more
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Service Sections */}
      {services.map((service, index) => (
        <section key={service.id} id={service.id} className={`py-20 ${index % 2 === 0 ? "bg-white" : "bg-gray-50"}`}>
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className={`${index % 2 === 1 ? "lg:order-last" : ""}`}>
                <div className="relative h-[400px] rounded-lg overflow-hidden">
                  <Image src={service.image || "/placeholder.svg"} alt={service.title} fill className="object-cover" />
                </div>
              </div>

              <div>
                <div className="mb-4">{service.icon}</div>
                <h2 className="text-3xl font-bold mb-4">{service.title}</h2>
                <p className="text-lg text-gray-700 mb-6">{service.description}</p>

                <div className="space-y-3">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary mr-2 mt-1 flex-shrink-0" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-8">
                  <Link
                    href="/contact"
                    className="bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-md font-medium transition-colors inline-block"
                  >
                    Request a Quote
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* CTA Section */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Start Your Project?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Contact us today to discuss your construction or renovation needs and get a free consultation.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/contact"
              className="bg-white text-primary hover:bg-gray-100 px-8 py-3 rounded-md text-lg font-medium transition-colors"
            >
              Contact Us
            </Link>
            <Link
              href="/about"
              className="bg-transparent border-2 border-white hover:bg-white/10 text-white px-8 py-3 rounded-md text-lg font-medium transition-colors"
            >
              Learn About Us
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}

