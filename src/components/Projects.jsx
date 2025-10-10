/* eslint-disable react/no-unknown-property */
"use client"

import { Suspense, useRef } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { Box, Sphere, MeshDistortMaterial } from "@react-three/drei"
import fastFoodVid from "../assets/food-app-demo.mp4"
import relaxonvid from "../assets/relax-on-demo.mp4"
import relaxLogo from "../assets/relax-on-logo.png";

function FloatingProject({ position, rotation }) {
  const meshRef = useRef()

  useFrame((state) => {
    const time = state.clock.getElapsedTime()
    if (!meshRef.current) return
    meshRef.current.position.y = position[1] + Math.sin(time + position[0]) * 0.2
    meshRef.current.rotation.x += 0.01
    meshRef.current.rotation.y += 0.01
  })

  return (
    <Box ref={meshRef} position={position} rotation={rotation} args={[0.8, 0.5, 0.1]}>
      <meshStandardMaterial color="#30b7ec" wireframe />
    </Box>
  )
}

function FloatingSphere({ position, color }) {
  const meshRef = useRef()

  useFrame((state) => {
    const time = state.clock.getElapsedTime()
    if (!meshRef.current) return
    meshRef.current.position.y = position[1] + Math.cos(time + position[0]) * 0.3
    meshRef.current.rotation.x = time * 0.15
    meshRef.current.rotation.z = time * 0.15
  })

  return (
    <Sphere ref={meshRef} position={position} args={[0.3, 32, 32]}>
      <MeshDistortMaterial color={color} distort={0.4} speed={2} roughness={0.3} />
    </Sphere>
  )
}

function Scene() {
  return (
    <>
      <ambientLight intensity={0.3} />
      <pointLight position={[10, 10, 10]} intensity={0.5} color="#30b7ec" />
      <pointLight position={[-10, -10, -10]} intensity={0.3} color="#0ea5e9" />
      <pointLight position={[0, 5, 5]} intensity={0.4} color="#14b8a6" />

      <FloatingProject position={[-2, 0, -2]} rotation={[0, 0.5, 0]} />
      <FloatingProject position={[2, 1, -3]} rotation={[0, -0.5, 0]} />
      <FloatingProject position={[0, -1, -2]} rotation={[0, 0, 0]} />

      <FloatingSphere position={[-3, 1, -3]} color="#14b8a6" />
      <FloatingSphere position={[3, -1, -2]} color="#06b6d4" />
      <FloatingSphere position={[1, 2, -4]} color="#0ea5e9" />
    </>
  )
}

export default function Projects() {
  const openInNewTab = (url) => window.open(url, "_blank", "noopener,noreferrer")

  return (
    <div className="min-h-screen px-3 sm:px-6 lg:px-8 py-12 sm:py-16 relative overflow-hidden">
      {/* 3D Background */}
      <div className="absolute inset-0 z-0">
        <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
          <Suspense fallback={null}>
            <Scene />
          </Suspense>
        </Canvas>
      </div>

      {/* Theme overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900/85 via-gray-800/90 to-gray-900/85 z-10" />

      {/* Content */}
      <div className="relative z-20 max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-8 sm:mb-12 break-words text-center bg-gradient-to-r from-teal-300 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
          Projects
        </h2>

        {/* 1) Crispy Bites */}
        <div
          className="flex flex-col sm:flex-row sm:items-center justify-between border border-teal-500/30 py-6 sm:py-8 w-full gap-4 sm:gap-0 bg-gradient-to-br from-gray-800/70 to-gray-900/70 backdrop-blur-md rounded-2xl px-6 mb-8 transition-all duration-500 hover:border-teal-500/60 hover:shadow-2xl hover:shadow-teal-500/20 group cursor-pointer"
          style={{ transformStyle: "preserve-3d", transform: "perspective(1000px)" }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform =
              "perspective(1000px) rotateX(2deg) rotateY(-3deg) translateZ(15px) scale(1.02)"
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "perspective(1000px) rotateX(0deg) rotateY(0deg) translateZ(0px) scale(1)"
          }}
        >
          <div
            className="flex items-center space-x-4 sm:space-x-6 flex-1 min-w-0"
            onClick={() => openInNewTab("https://muaazahmed03.github.io/Crispy-Bites/#")}
          >
            <div className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 rounded-full bg-white border-2 border-teal-500/50 overflow-hidden flex-shrink-0 shadow-lg group-hover:shadow-teal-500/50 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFwKVd1uz_lEsR0hma_FRCcRubRQGXVXuTlMHK0PIhnLptKGSTFW8PfP_8AOrP7Ro43PQ&usqp=CAU"
                alt="Crispy Bites"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="min-w-0 flex-1">
              <h3 className="text-xl sm:text-2xl lg:text-3xl text-white font-bold break-words leading-tight group-hover:text-teal-300 transition-colors duration-300">
                Crispy Bites
              </h3>
              <p className="text-sm sm:text-base lg:text-lg text-gray-300 break-words mt-2">
                Fast Food Website using HTML, CSS, JS
              </p>
              <div className="flex gap-2 mt-3 flex-wrap">
                <span className="px-3 py-1 bg-teal-600/30 text-teal-300 rounded-full text-xs font-medium">HTML</span>
                <span className="px-3 py-1 bg-cyan-600/30 text-cyan-300 rounded-full text-xs font-medium">CSS</span>
                <span className="px-3 py-1 bg-blue-600/30 text-blue-300 rounded-full text-xs font-medium">
                  JavaScript
                </span>
              </div>
            </div>
          </div>
          <a
            href="https://muaazahmed03.github.io/Crispy-Bites/#"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-full border-2 border-teal-500 bg-teal-600/20 flex items-center justify-center hover:bg-teal-500 hover:scale-110 hover:rotate-12 transition-all duration-300 flex-shrink-0 self-center sm:ml-4 text-xl sm:text-2xl font-bold shadow-lg hover:shadow-teal-500/50"
            aria-label="View Crispy Bites project"
          >
            →
          </a>
        </div>

        {/* 2) Relax On Website */}
        <div
          className="flex flex-col sm:flex-row sm:items-center justify-between border border-cyan-500/30 py-6 sm:py-8 w-full gap-4 sm:gap-0 bg-gradient-to-br from-gray-800/70 to-gray-900/70 backdrop-blur-md rounded-2xl px-6 mb-8 transition-all duration-500 hover:border-cyan-500/60 hover:shadow-2xl hover:shadow-cyan-500/20 group cursor-pointer"
          style={{ transformStyle: "preserve-3d", transform: "perspective(1000px)" }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform =
              "perspective(1000px) rotateX(2deg) rotateY(3deg) translateZ(15px) scale(1.02)"
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "perspective(1000px) rotateX(0deg) rotateY(0deg) translateZ(0px) scale(1)"
          }}
        >
          <div
            className="flex items-center space-x-4 sm:space-x-6 flex-1 min-w-0"
            onClick={() => openInNewTab("https://relax-on.vercel.app/")}
          >
            <div className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 rounded-full bg-white border-2 border-cyan-500/50 overflow-hidden flex-shrink-0 shadow-lg group-hover:shadow-cyan-500/50 group-hover:scale-110 group-hover:-rotate-6 transition-all duration-500">
              <img
                src={relaxLogo}
                alt="Relax On Website"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="min-w-0 flex-1">
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white break-words leading-tight group-hover:text-cyan-300 transition-colors duration-300">
                Relax On – Website
              </h3>
              <p className="text-sm text-gray-400 mb-1">Massage Service – London</p>
              <p className="text-sm sm:text-base lg:text-lg text-gray-300 break-words mt-2">
                A modern marketing site for a London-based massage service with booking and service pages.
              </p>
              <div className="flex gap-2 mt-3 flex-wrap">
                <span className="px-3 py-1 bg-teal-600/30 text-teal-300 rounded-full text-xs font-medium">React</span>
                <span className="px-3 py-1 bg-cyan-600/30 text-cyan-300 rounded-full text-xs font-medium">
                  Tailwind CSS
                </span>
                <span className="px-3 py-1 bg-sky-600/30 text-sky-300 rounded-full text-xs font-medium">
                  Real Time Backend
                </span>
                <span className="px-3 py-1 bg-blue-600/30 text-blue-300 rounded-full text-xs font-medium">Stripe</span>
              </div>
            </div>
          </div>
          <a
            href="https://relax-on.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-full border-2 border-cyan-500 bg-cyan-600/20 flex items-center justify-center hover:bg-cyan-500 hover:scale-110 hover:rotate-12 transition-all duration-300 flex-shrink-0 self-center sm:ml-4 text-xl sm:text-2xl font-bold shadow-lg hover:shadow-cyan-500/50"
            aria-label="Open Relax On website"
          >
            →
          </a>
        </div>

        {/* 3) Relax On – Mobile App (video like Food Fusion) */}
        <div
          className="flex flex-col sm:flex-row sm:items-center justify-between border border-teal-500/30 py-6 sm:py-8 w-full gap-4 sm:gap-0 bg-gradient-to-br from-gray-800/70 to-gray-900/70 backdrop-blur-md rounded-2xl px-6 mb-8 transition-all duration-500 hover:border-teal-500/60 hover:shadow-2xl hover:shadow-teal-500/20 group cursor-pointer"
          style={{ transformStyle: "preserve-3d", transform: "perspective(1000px)" }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform =
              "perspective(1000px) rotateX(1.5deg) rotateY(-2.5deg) translateZ(12px) scale(1.02)"
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "perspective(1000px) rotateX(0deg) rotateY(0deg) translateZ(0px) scale(1)"
          }}
        >
          <div
            className="flex items-center space-x-4 sm:space-x-6 flex-1 min-w-0"
            onClick={() => window.open("/relaxon", "_blank")}
          >
            {/* Phone-like video preview */}
            <div className="w-16 h-28 sm:w-18 sm:h-32 lg:w-20 lg:h-36 bg-white border-2 rounded-2xl overflow-hidden flex items-center justify-center flex-shrink-0 shadow-lg">
              <video
                autoPlay
                loop
                muted
                playsInline
                className="h-full w-full object-cover rounded-xl"
                onError={(e) => console.log("Video load error:", e)}
              >
                <source src={relaxonvid} type="video/mp4" />
                <div className="flex items-center justify-center h-full w-full bg-gray-200 text-gray-500 text-xs text-center p-2">
                  Video not supported
                </div>
              </video>
            </div>
            <div className="min-w-0 flex-1">
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white break-words leading-tight group-hover:text-teal-300 transition-colors duration-300">
                Relax On – Mobile Application
              </h3>
              <p className="text-sm text-gray-400 mb-1">React Native – iOS & Android</p>
              <p className="text-sm sm:text-base lg:text-lg text-gray-300 break-words mt-2">
                A mobile app for booking massage services on the go, built with React Native and polished UI components.
              </p>
              <div className="flex gap-2 mt-3 flex-wrap">
                <span className="px-3 py-1 bg-teal-600/30 text-teal-300 rounded-full text-xs font-medium">
                  React Native
                </span>
                <span className="px-3 py-1 bg-cyan-600/30 text-cyan-300 rounded-full text-xs font-medium">
                  Android / iOS
                </span>
                <span className="px-3 py-1 bg-sky-600/30 text-sky-300 rounded-full text-xs font-medium">
                  Real Time Backend
                </span>
                <span className="px-3 py-1 bg-blue-600/30 text-blue-300 rounded-full text-xs font-medium">
                  Stripe
                </span>
              </div>
            </div>
          </div>
          <a
            href="/relaxon"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-full border-2 border-teal-500 bg-teal-600/20 flex items-center justify-center hover:bg-teal-500 hover:scale-110 hover:rotate-12 transition-all duration-300 flex-shrink-0 self-center sm:ml-4 text-xl sm:text-2xl font-bold shadow-lg hover:shadow-teal-500/50"
            aria-label="Open Relax On app"
          >
            →
          </a>
        </div>

        {/* 4) Food Fusion */}
        <div
          className="flex flex-col sm:flex-row sm:items-center justify-between border border-cyan-500/30 py-6 sm:py-8 w-full gap-4 sm:gap-0 bg-gradient-to-br from-gray-800/70 to-gray-900/70 backdrop-blur-md rounded-2xl px-6 transition-all duration-500 hover:border-cyan-500/60 hover:shadow-2xl hover:shadow-cyan-500/20 group cursor-pointer"
          style={{ transformStyle: "preserve-3d", transform: "perspective(1000px)" }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform =
              "perspective(1000px) rotateX(2deg) rotateY(3deg) translateZ(15px) scale(1.02)"
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "perspective(1000px) rotateX(0deg) rotateY(0deg) translateZ(0px) scale(1)"
          }}
        >
          <div
            className="flex items-center space-x-4 sm:space-x-6 flex-1 min-w-0"
            onClick={() => window.open("/fastfood", "_blank")}
          >
            <div className="w-16 h-28 sm:w-18 sm:h-32 lg:w-20 lg:h-36 bg-white border-2 rounded-2xl overflow-hidden flex items-center justify-center flex-shrink-0 shadow-lg">
              <video
                autoPlay
                loop
                muted
                playsInline
                className="h-full w-full object-cover rounded-xl"
                onError={(e) => console.log("Video load error:", e)}
              >
                <source src={fastFoodVid} type="video/mp4" />
                <div className="flex items-center justify-center h-full w-full bg-gray-200 text-gray-500 text-xs text-center p-2">
                  Video not supported
                </div>
              </video>
            </div>
            <div className="min-w-0 flex-1">
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white break-words leading-tight group-hover:text-cyan-300 transition-colors duration-300">
                Food Fusion
              </h3>
              <p className="text-sm text-gray-400 mb-1">Multiple Foods Restaurants</p>
              <p className="text-sm sm:text-base lg:text-lg text-gray-300 break-words mt-2">
                Mobile App for food delivery using React Native with React Native Paper
              </p>
              <div className="flex gap-2 mt-3 flex-wrap">
                <span className="px-3 py-1 bg-teal-600/30 text-teal-300 rounded-full text-xs font-medium">
                  React Native
                </span>
                <span className="px-3 py-1 bg-cyan-600/30 text-cyan-300 rounded-full text-xs font-medium">
                  RN Paper
                </span>
                <span className="px-3 py-1 bg-blue-600/30 text-blue-300 rounded-full text-xs font-medium">
                  Android App
                </span>
              </div>
            </div>
          </div>

          <a
            href="/fastfood"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-full border-2 border-cyan-500 bg-cyan-600/20 flex items-center justify-center hover:bg-cyan-500 hover:scale-110 hover:rotate-12 transition-all duration-300 flex-shrink-0 self-center sm:ml-4 text-xl sm:text-2xl font-bold shadow-lg hover:shadow-cyan-500/50"
            aria-label="View Food App details"
          >
            →
          </a>
        </div>

        <div className="mt-12 sm:hidden text-center">
          <p className="text-gray-400 text-sm animate-pulse">Tap the arrows to view projects</p>
        </div>

        {/* soft theme glow */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
      </div>
    </div>
  )
}
