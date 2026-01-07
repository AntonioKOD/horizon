import Image from "next/image"
import Link from "next/link"
import { Phone, Clock, ShieldAlert, AlertTriangle } from "lucide-react"
import Head from "next/head"
export const metadata = {
  title: "Emergency Services - Horizon Fix",
  description: "24/7 emergency construction and repair services from Horizon Fix.",
}

export default function EmergencyPage() {
  const emergencyServices = [
    {
      title: "HVAC Emergencies",
      description: "24/7 emergency HVAC service for heating and cooling failures, especially during extreme weather conditions.",
      icon: <ShieldAlert className="h-10 w-10 text-red-500" />,
    },
    {
      title: "Plumbing Emergencies",
      description: "Rapid response to flooding, leaks, burst pipes, and water damage to prevent further destruction.",
      icon: <AlertTriangle className="h-10 w-10 text-red-500" />,
    },
    {
      title: "Electrical Emergencies",
      description: "Emergency electrical repairs to restore power and address safety hazards, including outages and sparking.",
      icon: <AlertTriangle className="h-10 w-10 text-red-500" />,
    },
    {
      title: "Masonry & Structural",
      description: "Immediate assessment and temporary solutions for structural issues, foundation problems, and masonry damage that pose safety risks.",
      icon: <ShieldAlert className="h-10 w-10 text-red-500" />,
    },
  ]

  return (
    <>
    <Head>
        <title>Emergency Services | Horizon Fix – 24/7 Rapid Repairs & Support</title>
        <meta name="description" content="When emergencies strike, Horizon Fix is here 24/7 to deliver rapid, reliable repairs in HVAC, plumbing, electrical, masonry, and handyman services. Always on call, always ready to help." />
        <link rel="canonical" href="https://horizonfix.com/emergency" />
        {/* Open Graph Tags */}
        <meta property="og:title" content="Emergency Services | Horizon Fix – 24/7 Rapid Repairs & Support" />
        <meta property="og:description" content="For urgent repairs in HVAC, plumbing, electrical, masonry, or handyman services, trust Horizon Fix's emergency services. We provide swift, expert support around the clock." />
        <meta property="og:url" content="https://horizonfix.com/emergency" />
        <meta property="og:type" content="website" />
        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Emergency Services | Horizon Fix – 24/7 Rapid Repairs & Support" />
        <meta name="twitter:description" content="Need immediate repairs? Horizon Fix offers 24/7 emergency services for HVAC, plumbing, electrical, masonry, and handyman needs, ensuring your home stays safe and comfortable." />
      </Head>
    <main className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="relative py-20 md:py-28 bg-red-600 text-white">
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1503596476-1c12a8ba09a9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></div>
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl md:text-5xl font-bold mb-6">24/7 Emergency Services</h1>
            <p className="text-xl md:text-2xl mb-8">Immediate response when you need it most.</p>
            <div className="text-3xl font-bold mb-8 flex items-center justify-center">
              <Phone className="h-8 w-8 mr-3 animate-pulse" />
              +1 (617) 415-8731 
            </div>
            <Link
              href="tel:+16174158731"
              className="bg-white text-red-600 hover:bg-gray-100 px-8 py-3 rounded-md text-lg font-bold transition-colors inline-flex items-center"
            >
              <Phone className="h-5 w-5 mr-2" />
              Call Now
            </Link>
          </div>
        </div>
      </section>

      {/* Emergency Services */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Our Emergency Services</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We provide rapid response to urgent HVAC, plumbing, electrical, masonry, and handyman emergencies to protect your property and ensure safety. Always on call, always ready.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {emergencyServices.map((service, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow text-center"
              >
                <div className="flex justify-center mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">How Our Emergency Response Works</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We&apos;ve streamlined our emergency response process to ensure you get help as quickly as possible.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="bg-red-100 text-red-600 w-12 h-12 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                1
              </div>
              <h3 className="text-xl font-semibold mb-3">Call Our Emergency Line</h3>
              <p className="text-gray-600">
                Contact our 24/7 emergency hotline at +1 (617) 415-8731 to speak with our emergency response team.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="bg-red-100 text-red-600 w-12 h-12 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                2
              </div>
              <h3 className="text-xl font-semibold mb-3">Immediate Assessment</h3>
              <p className="text-gray-600">
                Our team will assess the situation over the phone and dispatch emergency personnel to your location.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="bg-red-100 text-red-600 w-12 h-12 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                3
              </div>
              <h3 className="text-xl font-semibold mb-3">Rapid Response</h3>
              <p className="text-gray-600">
                Our emergency team will arrive at your location to address the immediate issue and prevent further
                damage.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Contact Info */}
      <section className="py-20 bg-red-600 text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Emergency Contact Information</h2>
              <p className="text-xl mb-8">
                Our emergency response team is available 24 hours a day, 7 days a week, including holidays.
              </p>

              <div className="space-y-6">
                <div className="flex items-start">
                  <Phone className="h-6 w-6 mr-4 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-semibold">Emergency Hotline</h3>
                    <p className="text-xl">+1 (617) 415-8731</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Clock className="h-6 w-6 mr-4 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-semibold">Response Time</h3>
                    <p>Typically within 1 hour</p>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <Link
                  href="tel:+16174158731"
                  className="bg-white text-red-600 hover:bg-gray-100 px-8 py-3 rounded-md text-lg font-bold transition-colors inline-flex items-center"
                >
                  <Phone className="h-5 w-5 mr-2" />
                  Call Now
                </Link>
              </div>
            </div>

            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                alt="Emergency Response Team"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Emergency Services FAQ</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">Common questions about our emergency services.</p>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3">How does Horizon Fix handle emergency service requests?</h3>
              <p className="text-gray-600">
              At Horizon Fix, we understand that emergencies can occur at any time. We're always on call with expert tradespeople available 24/7
              to address urgent HVAC, plumbing, electrical, masonry, and handyman issues promptly. When you call our emergency line, we prioritize your request and dispatch the right professional to your location for a swift response.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3">Are there additional charges for emergency services</h3>
              <p className="text-gray-600">
              Service fees, including any additional charges for emergency responses, are determined by the individual professionals. We recommend discussing pricing details directly with the service provider before confirming any work to ensure transparency and alignment with your budget.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3">What are your emergency service rates?</h3>
              <p className="text-gray-600">
                Emergency service rates vary depending on the nature of the emergency, time of day, and required
                resources. We provide a cost estimate before beginning any work and work with insurance companies when
                applicable.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3">How quickly can I expect a response to my emergency request?</h3>
              <p className="text-gray-600">
              Response times can vary based on factors such as the time of day and the availability of professionals in your area. However, our platform is designed to facilitate rapid connections, aiming to have a qualified professional address your emergency as quickly as possible.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
    </>
  )
}

