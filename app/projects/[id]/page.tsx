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
        title: "Basement Flood Emergency Repair",
        description: "Emergency response to a burst supply line with immediate shutoff and same-day pipe replacement.",
        category: "emergency",
        image:
          "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
        location: "Quincy, MA",
        year: "2025",
        client: "Single-Family Home",
        featured: true,
        fullDescription:
          "A homeowner called after discovering several inches of water in their finished basement from a burst copper supply line. Our team guided them through the emergency shutoff over the phone, arrived within the hour, and replaced the failed pipe section the same day. We also inspected the remaining supply lines and added insulation to prevent future freeze damage.",
      },
      {
        id: 2,
        title: "Whole-Home Drain Cleaning",
        description: "Hydro-jetting and camera inspection to remove recurring clogs in a multi-bathroom property.",
        category: "drain",
        image:
          "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
        location: "Weymouth, MA",
        year: "2025",
        client: "Townhome Owner",
        featured: true,
        fullDescription:
          "This townhome suffered from recurring slow drains across multiple bathrooms despite repeated snaking by other companies. We ran a camera inspection to locate heavy buildup in the branch lines, hydro-jetted the entire drain system, and verified clear flow on camera. The owner now has a yearly maintenance plan to keep the lines clean.",
      },
      {
        id: 3,
        title: "Tankless Water Heater Upgrade",
        description: "Replaced an aging tank system with a high-efficiency tankless unit and recirculation setup.",
        category: "water-heater",
        image:
          "https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
        location: "Hingham, MA",
        year: "2024",
        client: "Family Residence",
        fullDescription:
          "A growing family was constantly running out of hot water with their aging 40-gallon tank. We installed a high-efficiency tankless water heater with a recirculation loop for instant hot water at distant fixtures, upgraded the gas line to support the new unit, and walked the owners through annual descaling maintenance.",
      },
      {
        id: 4,
        title: "Emergency Sewer Backup Cleanup",
        description: "Rapid sewer line clearing and backflow prevention recommendations after a weekend backup.",
        category: "emergency",
        image:
          "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
        location: "Scituate, MA",
        year: "2025",
        client: "Condo Association",
        featured: true,
        fullDescription:
          "A condo association faced a weekend sewer backup affecting several ground-floor units. We dispatched an emergency crew, cleared the main line obstruction, and camera-inspected the full run to document the condition of the shared sewer. We then provided the association with backflow prevention recommendations to protect the building going forward.",
      },
      {
        id: 5,
        title: "Bathroom Fixture Refresh",
        description: "Installed new toilet, vanity faucet, and shower valve for a full bathroom refresh.",
        category: "fixtures",
        image:
          "https://images.unsplash.com/photo-1581578731548-c6a0c3f2f2c0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
        location: "Plymouth, MA",
        year: "2024",
        client: "Homeowner",
        fullDescription:
          "As part of a bathroom refresh, we replaced an inefficient toilet with a modern dual-flush model, installed a new vanity faucet with updated shutoff valves, and swapped a failing shower valve for a pressure-balanced unit. Every connection was leak-tested before we left, and the old fixtures were hauled away.",
      },
      {
        id: 6,
        title: "Main Line Root Removal",
        description: "Cleared invasive roots from main sewer line and restored proper drainage flow.",
        category: "drain",
        image:
          "https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
        location: "Kingston, MA",
        year: "2024",
        client: "Two-Family Property",
        fullDescription:
          "Tree roots had invaded the clay sewer line of this two-family property, causing repeated backups. We mechanically cut the roots out of the line, flushed the debris, and confirmed full flow with a camera inspection. The owner received a video of the line's condition along with options for a long-term liner repair.",
      },
      {
        id: 7,
        title: "Commercial Restroom Repipe",
        description: "Replaced aging supply lines and shutoff valves for a busy retail location.",
        category: "fixtures",
        image:
          "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
        location: "Braintree, MA",
        year: "2024",
        client: "Retail Business",
        fullDescription:
          "Corroded supply lines were causing low pressure and intermittent leaks in this retail store's customer restrooms. Working overnight to avoid business disruption, we repiped the restroom supply lines, installed new quarter-turn shutoff valves at every fixture, and pressure-tested the entire system before opening time.",
      },
      {
        id: 8,
        title: "Leaking Water Heater Replacement",
        description: "Emergency replacement of a failed gas water heater with upgraded safety controls.",
        category: "water-heater",
        image:
          "https://images.unsplash.com/photo-1581578731548-c6a0c3f2f2c0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
        location: "Cohasset, MA",
        year: "2025",
        client: "Homeowner",
        fullDescription:
          "A failed gas water heater was actively leaking onto the utility room floor when the homeowner called. We removed the old unit the same day, installed a new high-efficiency gas water heater with an expansion tank and drain pan, and brought the venting and gas connections up to current code.",
      },
      {
        id: 9,
        title: "Storm Drainage Failure Response",
        description: "Diagnosed and repaired exterior drainage tie-in causing repeated basement seepage.",
        category: "emergency",
        image:
          "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
        location: "Duxbury, MA",
        year: "2025",
        client: "Coastal Homeowner",
        fullDescription:
          "After every major storm, this coastal home's basement took on water. We traced the problem to a collapsed exterior drainage tie-in, excavated and repaired the damaged section, and confirmed proper flow away from the foundation. The basement has stayed dry through subsequent nor'easters.",
      },
      {
        id: 10,
        title: "Kitchen Sink and Disposal Upgrade",
        description: "Installed new sink, disposal, trap, and shutoff valves during a kitchen refresh.",
        category: "fixtures",
        image:
          "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
        location: "Marshfield, MA",
        year: "2024",
        client: "Single-Family Home",
        fullDescription:
          "During a kitchen refresh, we installed a new undermount sink, a quiet half-horsepower garbage disposal, a properly sloped trap assembly, and new quarter-turn shutoff valves. We also corrected an improperly vented drain that had been causing gurgling and slow drainage for years.",
      },
      {
        id: 11,
        title: "Boiler-fed Hot Water Repair",
        description: "Restored domestic hot water by replacing failed mixing valve and circulation pump.",
        category: "water-heater",
        image:
          "https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
        location: "Norwell, MA",
        year: "2024",
        client: "Townhouse Owner",
        fullDescription:
          "This townhouse's boiler-fed indirect water heater was delivering lukewarm water at best. We diagnosed a failed thermostatic mixing valve and a seized circulation pump, replaced both components, and rebalanced the system. Hot water delivery was fully restored with safe, consistent temperatures at every tap.",
      },
      {
        id: 12,
        title: "Laundry Standpipe and Vent Repair",
        description: "Corrected improper venting and overflowing standpipe causing repeated laundry backups.",
        category: "drain",
        image:
          "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
        location: "Hanover, MA",
        year: "2025",
        client: "Homeowner",
        fullDescription:
          "Every laundry cycle ended with water overflowing from the standpipe. We found an undersized, improperly vented drain configuration left over from a previous DIY install. We rebuilt the standpipe to code with correct sizing and venting, and the washer now drains at full speed without backups.",
      },
    // Add more projects as needed
  ]

  return projects.find((project) => project.id === id)
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }) {
const resolvedParams = await params
  const id = Number.parseInt(resolvedParams.id)
  const project = getProjectData(id)

  if (!project) {
    return {
      title: "Project Not Found - Horizon Fix Plumbing",
      description: "The requested project could not be found.",
    }
  }

  return {
    title: `${project.title} - Horizon Fix Plumbing Projects`,
    description: project.description,
  }
}

export default async function ProjectPage({ params }: { params: Promise<{ id: string }>}) {
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
                  src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
                  alt="Emergency Sewer Backup Cleanup"
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Emergency Sewer Backup Cleanup</h3>
                <p className="text-gray-600 mb-4">
                  Rapid sewer line clearing and backflow prevention recommendations after a weekend backup.
                </p>
                <Link href="/projects/4" className="text-primary font-medium hover:underline inline-flex items-center">
                  View Project <ArrowLeft className="ml-1 h-4 w-4 rotate-180" />
                </Link>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <div className="relative h-64 overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
                  alt="Commercial Restroom Repipe"
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Commercial Restroom Repipe</h3>
                <p className="text-gray-600 mb-4">
                  Replaced aging supply lines and shutoff valves for a busy retail location.
                </p>
                <Link href="/projects/7" className="text-primary font-medium hover:underline inline-flex items-center">
                  View Project <ArrowLeft className="ml-1 h-4 w-4 rotate-180" />
                </Link>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <div className="relative h-64 overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
                  alt="Kitchen Sink and Disposal Upgrade"
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Kitchen Sink and Disposal Upgrade</h3>
                <p className="text-gray-600 mb-4">
                  Installed new sink, disposal, trap, and shutoff valves during a kitchen refresh.
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

