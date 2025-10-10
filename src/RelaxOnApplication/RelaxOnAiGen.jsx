"use client"

import { useEffect, useRef } from "react"
import AiGenImage from "../assets/relax-on-ai-gen.png"

const RelaxOnAiGen = () => {
  const imageRef = useRef(null)
  const containerRef = useRef(null)

  useEffect(() => {
    const handleScroll = () => {
      if (imageRef.current && containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect()
        const scrollProgress = Math.max(
          0,
          Math.min(1, (window.innerHeight - rect.top) / (window.innerHeight + rect.height)),
        )

        // Zoom in when scrolling up (scale starts from 1 and goes to 1.3)
        // Zoom out when scrolling down (scale goes from 1.3 to 1)
        const scale = 1 + scrollProgress * 0.3

        imageRef.current.style.transform = `scale(${scale})`
      }
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll() // Initial call

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <section className="w-full bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-white overflow-hidden">
      {/* Zoom Scroll Image Container */}
      <div ref={containerRef} className="w-full h-[60vh] sm:h-[70vh] lg:h-[80vh] overflow-hidden relative">
        <div className="absolute inset-0 bg-black/20 z-10" />
        <img
          ref={imageRef}
          src={AiGenImage || "/placeholder.svg"}
          alt="Fast Food Banner"
          className="w-full h-full object-cover transition-transform duration-300 ease-out"
          style={{ transformOrigin: "center center" }}
        />
      </div>
    </section>
  )
}

export default RelaxOnAiGen
