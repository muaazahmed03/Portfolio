"use client"

import { useEffect, useRef, useState, Suspense } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { Stars } from "@react-three/drei"

function AnimatedStars() {
  const starsRef = useRef()

  useFrame((state) => {
    if (starsRef.current) {
      starsRef.current.rotation.x = state.clock.getElapsedTime() * 0.05
      starsRef.current.rotation.y = state.clock.getElapsedTime() * 0.03
    }
  })

  return <Stars ref={starsRef} radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
}

const MobileHero = () => {
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
        x: prev.x + (mousePos.x - prev.x) * 0.08,
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
      spotlight.style.background = `radial-gradient(circle at ${currentPos.x}px ${currentPos.y}px, rgba(29, 179, 41, 0.63), transparent 40%)`
    }
  }, [currentPos])

  const handleMouseMove = (e) => {
    const x = e.clientX
    const y = e.clientY
    setMousePos({ x, y })
  }

  return (
    <section className="h-screen w-full relative overflow-hidden text-zinc-200 font-sans" onMouseMove={handleMouseMove}>
      {/* 3D Stars Background */}
      <div className="absolute inset-0 z-0">
        <Canvas camera={{ position: [0, 0, 1] }}>
          <Suspense fallback={null}>
            <AnimatedStars />
          </Suspense>
        </Canvas>
      </div>

      {/* Spotlight Effect */}
      <div
        ref={spotlightRef}
        className="absolute inset-0 z-10 transition-all duration-500 ease-out pointer-events-none"
        style={{
          background: `radial-gradient(circle at ${currentPos.x}px ${currentPos.y}px, rgba(29, 179, 41, 0.63), transparent 40%)`,
        }}
      />

      {/* Content */}
      <div className="relative z-20 flex flex-col items-start justify-center h-full px-4 sm:px-6 md:px-16 space-y-4 sm:space-y-6 w-full max-w-full overflow-x-hidden">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold break-words leading-tight">
          Food Fusion - Android Application
        </h1>
        <br />
        <div className="space-y-2 sm:space-y-3 text-sm sm:text-base md:text-lg lg:text-xl mt-2 sm:mt-4 w-full max-w-full">
          <p className="break-words">
            Role → <strong>Order Foods With Multiple Restuarants</strong>
          </p>
          <p className="break-words">Developing Tool → React Native with React Native Paper</p>
        </div>
      </div>

      {/* Mobile ke liye subtle hint */}
      <div className="absolute bottom-8 right-8 text-zinc-300 text-xs hidden sm:block">
        Move cursor for spotlight effect
      </div>
    </section>
  )
}

export default MobileHero
