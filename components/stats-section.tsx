"use client"

import { useEffect, useMemo, useRef, useState } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

export function StatsSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const [counted, setCounted] = useState(false)

  const stats = useMemo(() => [
    { value: 500, label: "Projects Completed", suffix: "+" },
    { value: 25, label: "Years of Experience", suffix: "+" },
    { value: 100, label: "Professional Team Members", suffix: "+" },
    { value: 98, label: "Client Satisfaction", suffix: "%" },
  ], [])

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    const section = sectionRef.current
    if (!section) return

    // Animate the section background
    gsap.fromTo(
      ".stats-section",
      { backgroundPosition: "0% 50%" },
      {
        backgroundPosition: "100% 50%",
        ease: "none",
        scrollTrigger: {
          trigger: ".stats-section",
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      },
    )

    // Animate the stats counters
    const counterTrigger = ScrollTrigger.create({
      trigger: ".stats-section",
      start: "top 70%",
      onEnter: () => {
        if (!counted) {
          setCounted(true)

          stats.forEach((stat, index) => {
            const counterElement = document.querySelector(`.counter-${index}`)
            if (!counterElement) return

            const endValue = stat.value
            const duration = 2

            gsap.to(counterElement, {
              innerHTML: endValue.toString(),
              duration: duration,
              ease: "power2.out",
              onUpdate: function () {
                const currentValue = Math.round(gsap.getProperty(this.targets()[0], "innerHTML") as number)
                counterElement.textContent = currentValue.toString() + stat.suffix
              },
            })
          })
        }
      },
    })

    return () => {
      counterTrigger.kill()
      ScrollTrigger.getAll().forEach((t) => t.kill())
    }
  }, [counted, stats])

  return (
    <section
      ref={sectionRef}
      className="stats-section py-10 bg-primary text-white bg-[url('https://files.manuscdn.com/user_upload_by_module/session_file/110397790/ifOogEuKaTcmifDI.webp')] bg-cover bg-fixed relative"
    >
      <div className="absolute inset-0 bg-primary/80"></div>
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className={`counter-${index} text-4xl md:text-5xl font-bold mb-1`}>0{stat.suffix}</div>
              <p className="text-lg">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

