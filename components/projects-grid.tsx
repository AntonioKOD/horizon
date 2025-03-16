"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { ArrowRight } from "lucide-react"

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
}

export function ProjectsGrid() {
  const sectionRef = useRef<HTMLElement>(null)
  const [activeCategory, setActiveCategory] = useState("all")
  const [projects, setProjects] = useState<Project[]>([])
  const [isLoading, setIsLoading] = useState(true)

  // Categories for filtering
  const categories = [
    { id: "all", label: "All Projects" },
    { id: "residential", label: "Residential" },
    { id: "commercial", label: "Commercial" },
    { id: "industrial", label: "Industrial" },
    { id: "renovation", label: "Renovation" },
  ]

  useEffect(() => {
    // In a real application, this would be fetched from an API
    const projectsData: Project[] = [
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
    ]

    setProjects(projectsData)
    setIsLoading(false)

    gsap.registerPlugin(ScrollTrigger)

    const section = sectionRef.current
    if (!section) return

    // Animate category filters
    gsap.fromTo(
      ".category-button",
      { y: 30, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.6,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".categories-container",
          start: "top 80%",
        },
      },
    )

    // Initial animation for project cards
    animateProjectCards()

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill())
    }
  }, [])

  useEffect(() => {
    // Animate project cards when category changes
    animateProjectCards()
  }, [activeCategory])

  const animateProjectCards = () => {
    gsap.fromTo(
      ".project-card",
      { scale: 0.8, opacity: 0 },
      {
        scale: 1,
        opacity: 1,
        duration: 0.6,
        stagger: 0.1,
        ease: "power3.out",
      },
    )
  }

  const filteredProjects =
    activeCategory === "all" ? projects : projects.filter((project) => project.category === activeCategory)

  return (
    <section id="projects" ref={sectionRef} className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="categories-container flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              className={`category-button px-6 py-2 rounded-full transition-colors ${
                activeCategory === category.id ? "bg-primary text-white" : "bg-white text-gray-700 hover:bg-gray-100"
              }`}
              onClick={() => setActiveCategory(category.id)}
            >
              {category.label}
            </button>
          ))}
        </div>

        {isLoading ? (
          <div className="flex justify-center items-center py-20">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
          </div>
        ) : (
          <>
            {filteredProjects.length === 0 ? (
              <div className="text-center py-20">
                <h3 className="text-xl font-semibold text-gray-600">No projects found in this category.</h3>
                <p className="mt-2 text-gray-500">Please try another category or check back later.</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredProjects.map((project) => (
                  <div key={project.id} className="project-card group">
                    <Link href={`/projects/${project.id}`}>
                      <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                        <div className="relative h-64 overflow-hidden">
                          <Image
                            src={project.image || "/placeholder.svg"}
                            alt={project.title}
                            fill
                            className="object-cover transition-transform duration-500 group-hover:scale-110"
                          />
                          <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                            <div className="text-center p-4">
                              <span className="inline-flex items-center px-3 py-1 bg-primary text-white text-sm rounded-full capitalize mb-2">
                                {project.category}
                              </span>
                              <h3 className="text-xl font-semibold text-white">{project.title}</h3>
                            </div>
                          </div>
                          {project.featured && (
                            <div className="absolute top-4 left-4 bg-primary text-white text-xs px-2 py-1 rounded-md">
                              Featured
                            </div>
                          )}
                        </div>
                        <div className="p-6">
                          <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                          <p className="text-gray-600 mb-4 line-clamp-2">{project.description}</p>
                          <div className="flex flex-wrap gap-2 mb-4">
                            {project.location && (
                              <span className="text-sm text-gray-500">
                                <strong>Location:</strong> {project.location}
                              </span>
                            )}
                            {project.year && (
                              <span className="text-sm text-gray-500 ml-auto">
                                <strong>Year:</strong> {project.year}
                              </span>
                            )}
                          </div>
                          <div className="flex justify-between items-center">
                            <span className="inline-block px-3 py-1 bg-gray-100 text-gray-800 text-sm rounded-full capitalize">
                              {project.category}
                            </span>
                            <span className="inline-flex items-center text-primary font-medium hover:underline">
                              View Details <ArrowRight className="ml-1 h-4 w-4" />
                            </span>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </div>
                ))}
              </div>
            )}
          </>
        )}
      </div>
    </section>
  )
}

