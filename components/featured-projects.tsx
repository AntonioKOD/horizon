"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { ArrowRight } from "lucide-react"

export function FeaturedProjects() {
  const sectionRef = useRef<HTMLElement>(null)

  const projects = [
    {
      id: 1,
      title: "Modern Apartment Complex",
      category: "residential",
      description: "A luxury apartment complex featuring modern amenities and sustainable design elements.",
      image:
        "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 2,
      title: "Corporate Office Tower",
      category: "commercial",
      description: "A state-of-the-art office building designed for productivity and employee well-being.",
      image:
        "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 3,
      title: "Luxury Villa Renovation",
      category: "residential",
      description: "Complete renovation of a historic villa, preserving its character while adding modern comforts.",
      image:
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    },
  ]

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    const section = sectionRef.current
    if (!section) return

    // Animate section title
    gsap.fromTo(
      ".featured-title",
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        scrollTrigger: {
          trigger: ".featured-title",
          start: "top 80%",
        },
      },
    )

    // Animate project cards
    gsap.fromTo(
      ".featured-project",
      { y: 100, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".featured-projects-grid",
          start: "top 75%",
        },
      },
    )

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill())
    }
  }, [])

  return (
    <section id="projects" ref={sectionRef} className="py-12 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-10">
          <h2 className="featured-title text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Explore some of our recent work showcasing our expertise and quality craftsmanship.
          </p>
        </div>

        <div className="featured-projects-grid grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div
              key={project.id}
              className="featured-project group bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all"
            >
              <div className="relative h-64">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute top-4 right-4 bg-primary text-white text-sm px-3 py-1 rounded-full capitalize">
                  {project.category}
                </div>
              </div>
              <div className="p-5">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <Link
                  href={`/projects/${project.id}`}
                  className="inline-flex items-center text-primary font-medium hover:underline"
                >
                  View Project <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
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

