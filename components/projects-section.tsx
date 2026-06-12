"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export function ProjectsSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const [activeCategory, setActiveCategory] = useState("all")

  const categories = [
    { id: "all", label: "All Projects" },
    { id: "emergency", label: "Emergency" },
    { id: "drain", label: "Drain and Sewer" },
    { id: "water-heater", label: "Water Heaters" },
    { id: "fixtures", label: "Fixtures" },
  ]

  const projects = [
    {
      id: 1,
      title: "Basement Flood Emergency Repair",
      category: "emergency",
      image:
        "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 2,
      title: "Whole-Home Drain Cleaning",
      category: "drain",
      image:
        "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 3,
      title: "Tankless Water Heater Upgrade",
      category: "water-heater",
      image:
        "https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 4,
      title: "Emergency Sewer Backup Cleanup",
      category: "emergency",
      image:
        "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 5,
      title: "Bathroom Fixture Refresh",
      category: "fixtures",
      image:
        "https://images.unsplash.com/photo-1581578731548-c6a0c3f2f2c0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 6,
      title: "Main Line Root Removal",
      category: "drain",
      image:
        "https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    },
  ]

  const filteredProjects =
    activeCategory === "all" ? projects : projects.filter((project) => project.category === activeCategory)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    const section = sectionRef.current
    if (!section) return

    // Animate section title
    gsap.fromTo(
      ".projects-title",
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        scrollTrigger: {
          trigger: ".projects-title",
          start: "top 80%",
        },
      },
    )

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

  return (
    <section id="projects" ref={sectionRef} className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="projects-title text-3xl md:text-4xl font-bold mb-4">Our Projects</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Explore our portfolio of completed plumbing projects showcasing our expertise and quality workmanship.
          </p>
        </div>

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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div key={project.id} className="project-card group">
              <Link href={`/projects/${project.id}`}>
                <div className="relative h-64 overflow-hidden rounded-lg">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="text-center p-4">
                      <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>
                      <span className="inline-block px-3 py-1 bg-primary text-white text-sm rounded-full capitalize">
                        {project.category}
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center">
          <Link
            href="/projects"
            className="inline-flex items-center bg-primary hover:bg-primary/90 text-white px-5 py-2 rounded-md transition-colors"
          >
            View All Projects <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}

