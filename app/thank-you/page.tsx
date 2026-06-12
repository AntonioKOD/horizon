import Link from "next/link"
import { CheckCircle, Phone } from "lucide-react"

// Conversion page for ad tracking (Google Ads / Meta destination goal).
// Noindexed: it has no value as a search landing page.
export const metadata = {
  title: "Request Received",
  description: "We received your request and will get back to you shortly.",
  robots: { index: false, follow: false },
}

export default function ThankYouPage() {
  return (
    <main className="flex min-h-screen flex-col">
      <section className="py-24 md:py-32 bg-gray-50 flex-1">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-2xl mx-auto text-center bg-white rounded-lg shadow-lg p-10 md:p-14">
            <div className="bg-green-100 text-green-600 rounded-full p-4 inline-flex mb-6">
              <CheckCircle size={48} />
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Request Received!</h1>
            <p className="text-lg text-gray-600 mb-8">
              Thanks for reaching out to Horizon Fix Plumbing. A member of our team will contact you shortly to confirm
              the details and get you scheduled.
            </p>

            <div className="bg-gray-50 rounded-lg p-6 mb-8">
              <p className="text-gray-700 font-medium mb-3">Have an active leak or emergency right now?</p>
              <a
                href="tel:+19788937728"
                className="inline-flex items-center bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-md text-lg font-bold transition-colors"
              >
                <Phone className="h-5 w-5 mr-2" />
                Call +1 978 893 7728
              </a>
            </div>

            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                href="/"
                className="bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-md font-medium transition-colors"
              >
                Back to Home
              </Link>
              <Link
                href="/services"
                className="bg-white border border-gray-300 hover:bg-gray-50 text-gray-700 px-6 py-3 rounded-md font-medium transition-colors"
              >
                Browse Our Services
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
