"use client"

import { useEffect, useRef, useState, Suspense } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { OrbitControls, Sphere, MeshDistortMaterial, Stars } from "@react-three/drei"

function AnimatedSphere() {
  const meshRef = useRef()

  useFrame((state) => {
    const time = state.clock.getElapsedTime()
    meshRef.current.rotation.x = time * 0.2
    meshRef.current.rotation.y = time * 0.3
  })

  return (
    <Sphere ref={meshRef} args={[1, 100, 200]} scale={2.5}>
      <MeshDistortMaterial color="#30b7ec" attach="material" distort={0.5} speed={2} roughness={0.2} metalness={0.8} />
    </Sphere>
  )
}

function Scene() {
  return (
    <>
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1} />
      <pointLight position={[-10, -10, -10]} intensity={0.5} color="#30b7ec" />
      <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
      <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.5} />
    </>
  )
}

export default function Hero() {
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

  useEffect(() => {
    const initialX = window.innerWidth * 0.8
    const initialY = window.innerHeight * 0.3
    setMousePos({ x: initialX, y: initialY })
    setCurrentPos({ x: initialX, y: initialY })
  }, [])

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

  useEffect(() => {
    const spotlight = spotlightRef.current
    if (spotlight) {
      spotlight.style.background = `radial-gradient(circle at ${currentPos.x}px ${currentPos.y}px, rgba(36, 81, 76, 1), transparent 40%)`
    }
  }, [currentPos])

  const handleMouseMove = (e) => {
    const x = e.clientX
    const y = e.clientY
    setMousePos({ x, y })
  }

  return (
    <section className="h-screen w-full relative overflow-hidden text-zinc-200 font-sans" onMouseMove={handleMouseMove}>
      {/* 3D Background */}
      <div className="absolute inset-0 z-0">
        <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
          <Suspense fallback={null}>
            <Scene />
          </Suspense>
        </Canvas>
      </div>

      {/* Spotlight Effect */}
      <div
        ref={spotlightRef}
        className="absolute inset-0 z-10 transition-all duration-500 ease-out pointer-events-none"
        style={{
          background: `radial-gradient(circle at ${currentPos.x}px ${currentPos.y}px, rgba(36, 81, 76, 1), transparent 40%)`,
        }}
      ></div>

      {/* Content */}
      <div className="relative z-20 flex flex-col items-start justify-center h-full px-4 sm:px-6 md:px-16 space-y-4 sm:space-y-6 w-full max-w-full overflow-x-hidden">
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
            Currently → <strong>Full Stack Web & App Developer</strong>
          </p>
          <p className="break-words">Familiar with → C++, C#, SQL Database, and Unity</p>
          <p className="break-words">Delivering → Full Stack Web & App Solutions</p>
        </div>
      </div>

      <div className="absolute bottom-8 right-8 text-zinc-300 text-xs hidden sm:block">
        Move cursor for spotlight effect
      </div>
    </section>
  )
}
