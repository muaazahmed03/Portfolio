"use client"

import { useEffect, useRef, useState } from "react"
import "../index.css"

const Hero = () => {
  const [time, setTime] = useState(new Date().toLocaleTimeString())
  const spotlightRef = useRef(null)
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })
  const [currentPos, setCurrentPos] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date().toLocaleTimeString())
    }, 1000)
    return () => clearInterval(interval)
  }, [])

  // Initial spotlight position (side mein show karne ke liye)
  useEffect(() => {
    const initialX = window.innerWidth * 0.8 // Right side mein
    const initialY = window.innerHeight * 0.3 // Top se thoda neeche
    setMousePos({ x: initialX, y: initialY })
    setCurrentPos({ x: initialX, y: initialY })
  }, [])

  // Smooth animation with delay
  useEffect(() => {
    let animationFrameId

    const animate = () => {
      setCurrentPos((prev) => ({
        x: prev.x + (mousePos.x - prev.x) * 0.08, // Slow smooth movement
        y: prev.y + (mousePos.y - prev.y) * 0.08,
      }))
      animationFrameId = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId)
      }
    }
  }, [mousePos])

  // Update spotlight position
  useEffect(() => {
    const spotlight = spotlightRef.current
    if (spotlight) {
      spotlight.style.background = `radial-gradient(circle at ${currentPos.x}px ${currentPos.y}px, rgba(48, 183, 236, 0.3), transparent 40%)`
    }
  }, [currentPos])

  const handleMouseMove = (e) => {
    const x = e.clientX
    const y = e.clientY
    setMousePos({ x, y })
  }

  return (
    <section className="h-screen w-full relative overflow-hidden text-zinc-200 font-sans" onMouseMove={handleMouseMove}>
      <div
        ref={spotlightRef}
        className="absolute inset-0 z-0 transition-all duration-500 ease-out pointer-events-none"
        style={{
          background: `radial-gradient(circle at ${currentPos.x}px ${currentPos.y}px, rgba(48, 183, 236, 0.3), transparent 40%)`,
        }}
      ></div>

      <div className="relative z-10 flex flex-col items-start justify-center h-full px-4 sm:px-6 md:px-16 space-y-4 sm:space-y-6 w-full max-w-full overflow-x-hidden">
        <p className="text-sm sm:text-base md:text-lg text-zinc-200 break-words">
          Based in Karachi → <span className="font-bold">{time}</span>
        </p>
        <hr className="w-3/4 sm:w-4/5 border-zinc-400 max-w-full" />
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold break-words leading-tight">
          Hi, this is Muaaz.
        </h1>
        <br />
        <div className="space-y-2 sm:space-y-3 text-sm sm:text-base md:text-lg lg:text-xl mt-2 sm:mt-4 w-full max-w-full">
          <p className="break-words">
            Currently → <strong>MERN Stack Web & App Developer</strong>
          </p>
          <p className="break-words">Familiar with → C++, C#, SQL Database, and Unity</p>
          <p className="break-words">Delivering → MERN Stack Web & App Solutions</p>
        </div>
      </div>

      {/* Mobile ke liye subtle hint */}
      <div className="absolute bottom-8 right-8 text-zinc-500 text-xs hidden sm:block">
        Move cursor for spotlight effect
      </div>
    </section>
  )
}

export default Hero
