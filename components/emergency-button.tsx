"use client"

import { useEffect, useRef } from "react"
import Link from "next/link"
import { gsap } from "gsap"
import { Phone } from "lucide-react"

export function EmergencyButton() {
  const buttonRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const button = buttonRef.current
    if (!button) return

    // Create pulsing animation
    const timeline = gsap.timeline({ repeat: -1 })

    timeline
      .to(button, {
        scale: 1.1,
        boxShadow: "0 0 20px rgba(220, 38, 38, 0.8)",
        duration: 0.5,
        ease: "power1.inOut",
      })
      .to(button, {
        scale: 1,
        boxShadow: "0 0 10px rgba(220, 38, 38, 0.5)",
        duration: 0.5,
        ease: "power1.inOut",
      })

    // Create hover effect
    button.addEventListener("mouseenter", () => {
      gsap.to(button, {
        scale: 1.15,
        backgroundColor: "#b91c1c",
        duration: 0.3,
      })
      timeline.pause()
    })

    button.addEventListener("mouseleave", () => {
      gsap.to(button, {
        scale: 1,
        backgroundColor: "#dc2626",
        duration: 0.3,
        onComplete: () => { timeline.play(); },
      })
    })

    return () => {
      timeline.kill()
    }
  }, [])

  return (
    <div ref={buttonRef} className="fixed bottom-8 right-8 z-50 bg-red-600 text-white rounded-full shadow-lg">
      <Link href="/emergency" className="flex items-center gap-2 px-6 py-3 font-bold">
        <Phone className="h-5 w-5 animate-pulse" />
        <span>24/7 Emergency Service</span>
      </Link>
    </div>
  )
}

