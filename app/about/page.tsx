import Image from "next/image"
import Link from "next/link"
import { CheckCircle, Award, Users, Clock, Target, Shield } from "lucide-react"
import Head from "next/head"
export const metadata = {
  title: "About Us - Horizon Fix",
  description: "Learn about Horizon Fix, our mission, values, and the team behind our success.",
}

export default function AboutPage() {

  const values = [
    {
      title: "Excellence",
      description: "We strive for excellence in every aspect of our work, from planning to execution.",
      icon: <Award className="h-10 w-10 text-primary" />,
    },
    {
      title: "Integrity",
      description: "We conduct our business with honesty, transparency, and ethical practices.",
      icon: <Shield className="h-10 w-10 text-primary" />,
    },
    {
      title: "Collaboration",
      description: "We believe in the power of teamwork and partnership with our clients.",
      icon: <Users className="h-10 w-10 text-primary" />,
    },
    {
      title: "Timeliness",
      description: "We respect deadlines and deliver projects on schedule without compromising quality.",
      icon: <Clock className="h-10 w-10 text-primary" />,
    },
    {
      title: "Innovation",
      description: "We embrace new technologies and methods to provide cutting-edge solutions.",
      icon: <Target className="h-10 w-10 text-primary" />,
    },
  ]

  return (
    <>
   <Head>
        <title>About Us | Horizon Fix – Always On Call Handyman & Home Service Experts</title>
        <meta name="description" content="Learn about Horizon Fix, your trusted handyman and home service experts. Always on call for HVAC, plumbing, electrical, masonry, and handyman services. No job too small, quick response times, 24/7 availability." />
        <link rel="canonical" href="https://horizonfix.com/about" />
        {/* Open Graph Tags */}
        <meta property="og:title" content="About Us | Horizon Fix – Always On Call Handyman & Home Service Experts" />
        <meta property="og:description" content="Discover our story and commitment to excellence at Horizon Fix. Always on call for HVAC, plumbing, electrical, masonry, and handyman services. Expert tradespeople available 24/7." />
        <meta property="og:url" content="https://horizonfix.com/about" />
        <meta property="og:type" content="website" />
        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="About Us | Horizon Fix – Always On Call Handyman & Home Service Experts" />
        <meta name="twitter:description" content="Learn more about Horizon Fix's commitment to always being on call for all your home service needs. Expert tradespeople, quick response times, no job too small." />
      </Head>
    <main className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="relative py-20 md:py-28 bg-gray-900 text-white">
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1565008447742-97f6f38c985c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></div>
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl md:text-5xl font-bold mb-6">About Horizon Fix</h1>
            <p className="text-lg md:text-xl text-gray-300">
            At Horizon Fix, we&apos;re always on call for all your home service needs. From HVAC and plumbing to electrical, masonry, and handyman services, we provide expert tradespeople who respond quickly and deliver quality work. No job is too small—we&apos;re here 24/7 to help with everything from quick repairs to home renovations.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative h-[500px] rounded-lg overflow-hidden">
              <Image
                src="https://files.manuscdn.com/user_upload_by_module/session_file/110397790/sEXtsZuhzSZMyOHQ.jpg"
                alt="Horizon Fix History"
                fill
                className="object-cover"
              />
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-6">Our Story</h2>
              <p className="text-lg text-gray-700 mb-6">
              Horizon Fix was founded on the principle that homeowners need reliable, always-available service professionals. We recognized that whether it&apos;s a small leak, a broken outlet, or a heating emergency, you need someone who will respond quickly and get the job done right. That&apos;s why we&apos;re always on call, ready to help with HVAC, plumbing, electrical, masonry, and handyman services.
              </p>
              <p className="text-lg text-gray-700 mb-6">
              We&apos;ve built a team of expert tradespeople across all disciplines, ensuring that no matter what your home needs, we have the right person for the job. From small repairs to full home renovations, we approach every project with the same commitment to quality, professionalism, and customer satisfaction. No job is too small, and we&apos;re always ready to help.
              </p>
              <p className="text-lg text-gray-700">
              Our customer-centric approach means we prioritize quick response times, transparent communication, and quality workmanship. We understand that home service needs don&apos;t always happen during business hours, which is why we&apos;re available 24/7. Your satisfaction is our success, and we&apos;re committed to being your trusted home service partner.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Our Core Values</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              These principles guide our decisions, shape our culture, and define how we work with our clients and
              partners.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow text-center"
              >
                <div className="flex justify-center mb-4">{value.icon}</div>
                <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Achievements</h2>
              <p className="text-lg text-gray-700 mb-6">
                Over the years, Horizon Fix has been recognized for our commitment to excellence, innovation, and
                sustainable practices in the construction industry.
              </p>

              <div className="space-y-4">
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold">Comprehensive Training</h3>
                    <p className="text-gray-600">Our team undergoes regular training to stay updated on best practices in customer service and the latest industry trends.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold">Advanced Technology Integration</h3>
                    <p className="text-gray-600">Utilizing cuttin-edge tools to streamline proecesses and improve communication with our clients</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold">Feedback-Driven Improvements</h3>
                    <p className="text-gray-600">Actively seeking and analyzing client feedback to continually refine our services and address any areas for improvement.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="relative h-64 rounded-lg overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
                  alt="Award Ceremony"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative h-64 rounded-lg overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
                  alt="Green Building"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative h-64 rounded-lg overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
                  alt="Completed Project"
                  fill
                  className="object-cover"
                />
              </div>
  
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Work With Us?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Contact us today to discuss your project needs and discover how Horizon Fix can bring your vision to life.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/contact"
              className="bg-white text-primary hover:bg-gray-100 px-8 py-3 rounded-md text-lg font-medium transition-colors"
            >
              Contact Us
            </Link>
            <Link
              href="/services"
              className="bg-transparent border-2 border-white hover:bg-white/10 text-white px-8 py-3 rounded-md text-lg font-medium transition-colors"
            >
              Explore Our Services
            </Link>
          </div>
        </div>
      </section>
    </main>
    </>
  )
}

