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
    { id: "handyman", label: "Handyman" },
    { id: "automation", label: "Home Automation" },
    { id: "repair", label: "Appliance Repair" },
    { id: "improvement", label: "Home Improvement" },
  ]

  useEffect(() => {
    // In a real application, this would be fetched from an API
    const projectsData: Project[] = [
      {
        id: 1,
        title: "Smart Home Automation Setup",
        description: "Complete smart home transformation with voice control, automated lighting, and security integration.",
        category: "automation",
        image:
          "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
        location: "Austin, TX",
        year: "2023",
        client: "Smith Family",
        featured: true,
      },
      {
        id: 2,
        title: "Kitchen Cabinet Installation",
        description: "Custom kitchen cabinet installation with soft-close hinges and modern hardware upgrades.",
        category: "handyman",
        image:
          "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
        location: "Dallas, TX",
        year: "2023",
        client: "Johnson Residence",
        featured: true,
      },
      {
        id: 3,
        title: "Refrigerator Repair & Maintenance",
        description: "Complete refrigerator repair including compressor replacement and door seal installation.",
        category: "repair",
        image:
          "https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
        location: "Houston, TX",
        year: "2023",
        client: "Martinez Family",
      },
      {
        id: 4,
        title: "Smart Thermostat Installation",
        description: "WiFi-enabled smart thermostat installation with mobile app control and energy monitoring.",
        category: "automation",
        image:
          "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
        location: "San Antonio, TX",
        year: "2023",
        client: "Brown Residence",
        featured: true,
      },
      {
        id: 5,
        title: "Bathroom Renovation",
        description: "Complete bathroom makeover with new fixtures, tiling, and smart mirror installation.",
        category: "improvement",
        image:
          "https://images.unsplash.com/photo-1581578731548-c6a0c3f2f2c0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
        location: "Fort Worth, TX",
        year: "2023",
        client: "Wilson Family",
      },
      {
        id: 6,
        title: "Washer & Dryer Repair",
        description: "Complete washer and dryer service including belt replacement and electrical diagnostics.",
        category: "repair",
        image:
          "https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
        location: "Plano, TX",
        year: "2023",
        client: "Davis Residence",
      },
      {
        id: 7,
        title: "Smart Security System",
        description: "Complete home security system with cameras, door sensors, and mobile monitoring.",
        category: "automation",
        image:
          "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
        location: "Arlington, TX",
        year: "2023",
        client: "Taylor Family",
      },
      {
        id: 8,
        title: "Door & Window Repairs",
        description: "Comprehensive door and window repair including weatherstripping and hardware replacement.",
        category: "handyman",
        image:
          "https://images.unsplash.com/photo-1581578731548-c6a0c3f2f2c0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
        location: "Irving, TX",
        year: "2023",
        client: "Anderson Residence",
      },
      {
        id: 9,
        title: "Smart Lighting Installation",
        description: "Whole-home smart lighting system with dimmers, color control, and voice activation.",
        category: "automation",
        image:
          "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
        location: "Garland, TX",
        year: "2023",
        client: "Miller Family",
      },
      {
        id: 10,
        title: "Flooring Installation",
        description: "Luxury vinyl plank flooring installation throughout the main living areas.",
        category: "improvement",
        image:
          "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
        location: "McKinney, TX",
        year: "2023",
        client: "Garcia Residence",
      },
      {
        id: 11,
        title: "Dishwasher Repair",
        description: "Dishwasher repair including pump replacement and water line installation.",
        category: "repair",
        image:
          "https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
        location: "Frisco, TX",
        year: "2023",
        client: "Lee Family",
      },
      {
        id: 12,
        title: "Smart Door Lock Installation",
        description: "Smart door lock installation with keyless entry and mobile app control.",
        category: "automation",
        image:
          "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
        location: "Mesquite, TX",
        year: "2023",
        client: "White Residence",
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

