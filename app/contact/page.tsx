import { ContactSectionHome } from "@/components/contact-section-home"
import { Mail, Phone, Clock } from "lucide-react"
import Head from "next/head"

export const metadata = {
  title: "Contact Us - Horizon Fix",
  description: "Get in touch with Horizon Fix for all your HVAC, plumbing, electrical, masonry, handyman, and home renovation needs. Always on call, always ready to help.",
}

export default function ContactPage() {
  const contactInfo = [
    {
      icon: <Phone className="h-6 w-6 text-primary" />,
      title: "Phone Number",
      details: ["+1 978 893 7728",],
    },
    {
      icon: <Mail className="h-6 w-6 text-primary" />,
      title: "Email Address",
      details: ["hello@horizonfix.com",],
    },
    {
      icon: <Clock className="h-6 w-6 text-primary" />,
      title: "Business Hours",
      details: ["24/7 Emergency Services"],
    },
  ]

  return (
    <>
    <Head>
        <title>Contact Horizon Fix | Always On Call Handyman & Home Service Experts | South Shore MA</title>
        <meta name="description" content="Reach out to Horizon Fix for HVAC, plumbing, electrical, masonry, handyman, and home renovation services throughout the South Shore of Massachusetts. Serving Quincy, Plymouth, Weymouth, Hingham, Cohasset, Scituate, Duxbury, Kingston, and surrounding towns. Always on call, quick response times, expert tradespeople available 24/7." />
        <link rel="canonical" href="https://horizonfix.com/contact" />
        {/* Open Graph Tags */}
        <meta property="og:title" content="Contact Horizon Fix | Always On Call Handyman & Home Service Experts | South Shore MA" />
        <meta property="og:description" content="Contact Horizon Fix today for expert HVAC, plumbing, electrical, masonry, handyman, and home renovation services throughout the South Shore of Massachusetts. Serving Quincy, Plymouth, Weymouth, Hingham, Cohasset, Scituate, Duxbury, Kingston, and surrounding towns. Always on call, always ready to help." />
        <meta property="og:url" content="https://horizonfix.com/contact" />
        <meta property="og:type" content="website" />
        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Contact Horizon Fix | Always On Call Handyman & Home Service Experts | South Shore MA" />
        <meta name="twitter:description" content="Reach out to Horizon Fix for expert HVAC, plumbing, electrical, masonry, handyman, and home renovation services throughout the South Shore of Massachusetts. Serving Quincy, Plymouth, Weymouth, Hingham, Cohasset, Scituate, Duxbury, Kingston, and surrounding towns. Always on call, quick response times." />
      </Head>
    <main className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="relative py-16 md:py-24 bg-gray-900 text-white">
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage:
              "url('https://files.manuscdn.com/user_upload_by_module/session_file/110397790/KBLcXbqbAbNUkoee.jpeg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></div>
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl md:text-5xl font-bold mb-4">Contact Us</h1>
            <p className="text-lg md:text-xl text-gray-300">
              Always on call for all your home service needs. Have questions or ready to start your project? Get in touch with our team today.
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

      {/* Contact Form and Map - Replace with ContactSectionVisible */}
      <ContactSectionHome />

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
                We primarily serve the South Shore area of Massachusetts, including communities from Quincy to Plymouth and surrounding towns. For larger projects, we may consider locations outside of our
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
              <h3 className="text-xl font-semibold mb-3">How does Horizon Fix ensure that professionals are licensed and insured</h3>
              <p className="text-gray-600">
              At Horizon Fix, we prioritize connecting you with professionals who meet your project&apos;s specific requirements. While we strive to match you with qualified experts, it’s essential to verify that any professional you consider hiring possesses the necessary licenses and insurance for your area. We recommend discussing these credentials directly with the professional and, if needed, contacting their licensing authority or insurance provider for confirmation.
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
            For urgent issues, our emergency team is available 24/7.
          </p>
          <div className="text-2xl font-bold flex items-center justify-center">
            <Phone className="h-6 w-6 mr-2 animate-pulse" />
            Emergency Hotline: +1 978 893 7728
          </div>
        </div>
      </section>
    </main>
    </>
  )
}

