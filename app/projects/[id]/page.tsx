import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowLeft, Calendar, MapPin, Building, CheckCircle } from "lucide-react"

// Define project type
type Project = {
  id: number
  title: string
  description: string
  category: string
  image: string
  location?: string
  year?: string
  client?: string
  featured?: boolean
  fullDescription?: string
  challenges?: string[]
  solutions?: string[]
  results?: string[]
  gallery?: string[]
}

// This would typically come from a database or API
const getProjectData = (id: number): Project | undefined => {
  const projects: Project[] = [
    {
        id: 1,
        title: "Modern Apartment Complex",
        description: "A luxury apartment complex featuring modern amenities and sustainable design elements.",
        category: "residential",
        image:
          "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
        location: "New York, NY",
        year: "2023",
        client: "Urban Living Developers",
        featured: true,
      },
      {
        id: 2,
        title: "Corporate Office Tower",
        description: "A state-of-the-art office building designed for productivity and employee well-being.",
        category: "commercial",
        image:
          "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
        location: "Chicago, IL",
        year: "2022",
        client: "Global Business Solutions",
        featured: true,
      },
      {
        id: 3,
        title: "Manufacturing Facility",
        description: "An efficient and sustainable manufacturing facility with state-of-the-art equipment.",
        category: "industrial",
        image:
          "https://images.unsplash.com/photo-1581093450021-4a7360e9a6b5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
        location: "Detroit, MI",
        year: "2022",
        client: "American Manufacturing Co.",
      },
      {
        id: 4,
        title: "Luxury Villa Renovation",
        description: "Complete renovation of a historic villa, preserving its character while adding modern comforts.",
        category: "renovation",
        image:
          "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
        location: "Miami, FL",
        year: "2023",
        client: "Private Owner",
        featured: true,
      },
      {
        id: 5,
        title: "Shopping Mall Development",
        description: "A modern shopping mall with a focus on customer experience and sustainable design.",
        category: "commercial",
        image:
          "https://images.unsplash.com/photo-1519567241046-7f570eee3ce6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
        location: "Los Angeles, CA",
        year: "2021",
        client: "Retail Ventures Inc.",
      },
      {
        id: 6,
        title: "Warehouse Construction",
        description: "A large-scale warehouse with advanced logistics systems and energy-efficient features.",
        category: "industrial",
        image:
          "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
        location: "Seattle, WA",
        year: "2022",
        client: "Global Logistics Partners",
      },
      {
        id: 7,
        title: "Eco-Friendly Residential Complex",
        description: "A sustainable residential complex with solar panels, green roofs, and energy-efficient design.",
        category: "residential",
        image:
          "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
        location: "Portland, OR",
        year: "2023",
        client: "Green Living Developers",
      },
      {
        id: 8,
        title: "Historic Building Restoration",
        description: "Careful restoration of a historic building, preserving its architectural heritage.",
        category: "renovation",
        image:
          "https://images.unsplash.com/photo-1577495508326-19a1b3cf65b9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
        location: "Boston, MA",
        year: "2021",
        client: "Heritage Preservation Society",
      },
      {
        id: 9,
        title: "Modern Healthcare Facility",
        description: "A state-of-the-art healthcare facility designed for patient comfort and operational efficiency.",
        category: "commercial",
        image:
          "https://images.unsplash.com/photo-1629131726692-1accd0c53ce0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
        location: "Denver, CO",
        year: "2022",
        client: "Healthcare Partners Group",
      },
      {
        id: 10,
        title: "Luxury Condominium Tower",
        description: "A high-rise luxury condominium with panoramic views and premium amenities.",
        category: "residential",
        image:
          "https://images.unsplash.com/photo-1574362848149-11496d93a7c7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
        location: "San Francisco, CA",
        year: "2023",
        client: "Bay Area Developments",
      },
      {
        id: 11,
        title: "Food Processing Plant",
        description: "A modern food processing facility with advanced equipment and strict hygiene standards.",
        category: "industrial",
        image:
          "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
        location: "Austin, TX",
        year: "2022",
        client: "Fresh Foods Inc.",
      },
      {
        id: 12,
        title: "Boutique Hotel Conversion",
        description: "Conversion of a historic building into a luxury boutique hotel with unique character.",
        category: "renovation",
        image:
          "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
        location: "New Orleans, LA",
        year: "2023",
        client: "Heritage Hospitality Group",
      },
    // Add more projects as needed
  ]

  return projects.find((project) => project.id === id)
}

export async function generateMetadata({ params }: { params: { id: string } }) {
const resolvedParams = await params
  const id = Number.parseInt(resolvedParams.id)
  const project = getProjectData(id)

  if (!project) {
    return {
      title: "Project Not Found - Horizon Fix",
      description: "The requested project could not be found.",
    }
  }

  return {
    title: `${project.title} - Horizon Fix Projects`,
    description: project.description,
  }
}

export default async function ProjectPage({ params }: { params: { id: string } }) {
    const resolvedParams = await params
  const id = Number.parseInt(resolvedParams.id)
  const project = getProjectData(id)

  if (!project) {
    notFound()
  }

  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="relative py-20 md:py-28 bg-gray-900 text-white">
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `url('${project.image}')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></div>
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <Link
            href="/projects"
            className="inline-flex items-center text-white bg-primary/80 hover:bg-primary px-4 py-2 rounded-md mb-8 transition-colors"
          >
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Projects
          </Link>
          <div className="max-w-4xl">
            <span className="inline-block px-3 py-1 bg-primary text-white text-sm rounded-full capitalize mb-4">
              {project.category}
            </span>
            <h1 className="text-3xl md:text-5xl font-bold mb-6">{project.title}</h1>
            <p className="text-lg md:text-xl text-gray-300 mb-8">{project.description}</p>
            <div className="flex flex-wrap gap-6">
              {project.location && (
                <div className="flex items-center">
                  <MapPin className="h-5 w-5 text-primary mr-2" />
                  <span>{project.location}</span>
                </div>
              )}
              {project.year && (
                <div className="flex items-center">
                  <Calendar className="h-5 w-5 text-primary mr-2" />
                  <span>{project.year}</span>
                </div>
              )}
              {project.client && (
                <div className="flex items-center">
                  <Building className="h-5 w-5 text-primary mr-2" />
                  <span>{project.client}</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Project Gallery */}
      {project.gallery && (
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl font-bold mb-10 text-center">Project Gallery</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
              {project.gallery.map((image, index) => (
                <div
                  key={index}
                  className="relative h-80 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow"
                >
                  <Image
                    src={image || "/placeholder.svg"}
                    alt={`${project.title} - Image ${index + 1}`}
                    fill
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Project Details */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Project Overview</h2>
            <p className="text-lg text-gray-700 mb-8">{project.fullDescription}</p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              {project.challenges && (
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold mb-4 text-primary">Challenges</h3>
                  <ul className="space-y-3">
                    {project.challenges.map((challenge, index) => (
                      <li key={index} className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-primary mr-2 mt-1 flex-shrink-0" />
                        <span>{challenge}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {project.solutions && (
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold mb-4 text-primary">Solutions</h3>
                  <ul className="space-y-3">
                    {project.solutions.map((solution, index) => (
                      <li key={index} className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-primary mr-2 mt-1 flex-shrink-0" />
                        <span>{solution}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {project.results && (
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold mb-4 text-primary">Results</h3>
                  <ul className="space-y-3">
                    {project.results.map((result, index) => (
                      <li key={index} className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-primary mr-2 mt-1 flex-shrink-0" />
                        <span>{result}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Related Projects */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl font-bold mb-10 text-center">Related Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* This would typically be dynamically generated based on category or other criteria */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <div className="relative h-64 overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
                  alt="Luxury Villa Renovation"
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Luxury Villa Renovation</h3>
                <p className="text-gray-600 mb-4">
                  Complete renovation of a historic villa, preserving its character while adding modern comforts.
                </p>
                <Link href="/projects/4" className="text-primary font-medium hover:underline inline-flex items-center">
                  View Project <ArrowLeft className="ml-1 h-4 w-4 rotate-180" />
                </Link>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <div className="relative h-64 overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1580587771525-78b9dba3b914?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
                  alt="Eco-Friendly Residential Complex"
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Eco-Friendly Residential Complex</h3>
                <p className="text-gray-600 mb-4">
                  A sustainable residential complex with solar panels, green roofs, and energy-efficient design.
                </p>
                <Link href="/projects/7" className="text-primary font-medium hover:underline inline-flex items-center">
                  View Project <ArrowLeft className="ml-1 h-4 w-4 rotate-180" />
                </Link>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <div className="relative h-64 overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1574362848149-11496d93a7c7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
                  alt="Luxury Condominium Tower"
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Luxury Condominium Tower</h3>
                <p className="text-gray-600 mb-4">
                  A high-rise luxury condominium with panoramic views and premium amenities.
                </p>
                <Link href="/projects/10" className="text-primary font-medium hover:underline inline-flex items-center">
                  View Project <ArrowLeft className="ml-1 h-4 w-4 rotate-180" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Start Your Project?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Contact us today to discuss how we can bring your vision to life with the same quality and expertise
            showcased in our portfolio.
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
  )
}

