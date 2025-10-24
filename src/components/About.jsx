"use client"

import { useRef, useState, Suspense } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { Box, Sphere, MeshDistortMaterial } from "@react-three/drei"
import { Code, Database, Smartphone, Globe, Award, Calendar, MapPin, Mail, Phone, User } from "lucide-react"

function FloatingCard({ position }) {
  const meshRef = useRef()

  useFrame((state) => {
    const time = state.clock.getElapsedTime()
    meshRef.current.position.y = position[1] + Math.sin(time + position[0]) * 0.3
    meshRef.current.rotation.x = time * 0.2
    meshRef.current.rotation.y = time * 0.3
  })

  return (
    <Box ref={meshRef} position={position} args={[0.5, 0.5, 0.5]}>
      <meshStandardMaterial color="#30b7ec" wireframe />
    </Box>
  )
}

function FloatingSphere({ position }) {
  const meshRef = useRef()

  useFrame((state) => {
    const time = state.clock.getElapsedTime()
    meshRef.current.position.y = position[1] + Math.cos(time + position[0]) * 0.2
    meshRef.current.rotation.x = time * 0.15
    meshRef.current.rotation.z = time * 0.15
  })

  return (
    <Sphere ref={meshRef} position={position} args={[0.3, 32, 32]}>
      <MeshDistortMaterial color="#0ea5e9" distort={0.3} speed={2} roughness={0.4} />
    </Sphere>
  )
}

function Scene() {
  return (
    <>
      <ambientLight intensity={0.3} />
      <pointLight position={[10, 10, 10]} intensity={0.5} color="#30b7ec" />
      <pointLight position={[-10, -10, -10]} intensity={0.3} color="#0ea5e9" />

      <FloatingCard position={[-3, 0, -2]} />
      <FloatingCard position={[3, 1, -3]} />
      <FloatingCard position={[-2, -1, -1]} />
      <FloatingSphere position={[2, -1, -2]} />
      <FloatingSphere position={[-3, 1, -3]} />
      <FloatingSphere position={[3, 0, -1]} />
    </>
  )
}

export default function About() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })
  const sectionRef = useRef(null)

  const handleMouseMove = (e) => {
    if (sectionRef.current) {
      const rect = sectionRef.current.getBoundingClientRect()
      setMousePos({
        x: ((e.clientX - rect.left) / rect.width) * 100,
        y: ((e.clientY - rect.top) / rect.height) * 100,
      })
    }
  }

  const skills = [
    {
      name: "Frontend",
      icon: Globe,
      techs: ["React.js", "Next.js", "Tailwind CSS"],
      color: "from-blue-500 to-cyan-500",
    },
    {
      name: "Backend",
      icon: Database,
      techs: ["Node.js", "Express.js", "MongoDB"],
      color: "from-green-500 to-emerald-500",
    },
    {
      name: "Mobile Applications",
      icon: Smartphone,
      techs: ["React Native", "CLI", "Expo"],
      color: "from-purple-500 to-pink-500",
    },
    {
      name: "Other Languages",
      icon: Code,
      techs: ["TypeScript", "C++", "C#", "SQL"],
      color: "from-orange-500 to-red-500",
    },
  ]

  const personalInfo = [
    { icon: User, label: "Degree", value: "Bachelors in Computer Science" },
    { icon: MapPin, label: "Location", value: "Karachi, Pakistan" },
    { icon: Phone, label: "Phone", value: "+92-3132332015" },
    { icon: Calendar, label: "Date Of Birth", value: "03-May-2002" },
    { icon: Mail, label: "Email", value: "muaaz.webdev@gmail.com" },
    { icon: Award, label: "Experience", value: "2 Years" },
  ]

  return (
    <section
      ref={sectionRef}
      id="about"
      className="min-h-screen py-16 sm:py-20 px-4 sm:px-6 lg:px-16 overflow-x-hidden relative"
      onMouseMove={handleMouseMove}
    >
      {/* 3D Background */}
      <div className="absolute inset-0 z-0">
        <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
          <Suspense fallback={null}>
            <Scene />
          </Suspense>
        </Canvas>
      </div>

      {/* Gradient Overlay */}
      <div
        className="absolute inset-0 z-10 opacity-20"
        style={{
          background: `radial-gradient(circle at ${mousePos.x}% ${mousePos.y}%, rgba(48, 183, 236, 0.3) 0%, transparent 50%)`,
          transition: "background 0.3s ease",
        }}
      />

      <div className="relative z-20 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 bg-gradient-to-r from-teal-300 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-teal-500 to-cyan-500 mx-auto mb-6 rounded-full" />
          <p className="text-zinc-400 text-lg sm:text-xl max-w-2xl mx-auto">
            Passionate developer crafting digital experiences
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 mb-16">
          <div className="space-y-6">
            <div
              className="bg-gradient-to-br from-zinc-900/80 to-zinc-800/60 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-zinc-700/50 hover:border-teal-500/30 transition-all duration-500 transform hover:scale-105 hover:rotate-1 hover:shadow-2xl hover:shadow-teal-500/20"
              style={{ transformStyle: "preserve-3d" }}
            >
              <h3 className="text-2xl sm:text-3xl font-bold mb-6 text-teal-300">My Journey</h3>
              <div className="space-y-4 text-zinc-300 leading-relaxed">
                <p className="text-base sm:text-lg">
                  Greetings! I am <span className="text-teal-300 font-semibold">Muaaz Ahmed Baig</span>, a passionate
                  <span className="text-teal-300 font-semibold"> Full Stack Web & App Developer</span> based in Karachi, Pakistan.
                </p>
                <p className="text-base sm:text-lg">
                  I specialize in building modern web and mobile applications using
                  <span className="text-teal-300 font-semibold"> React.js, Node.js, Express.js, and MongoDB</span>. My
                  journey also includes exploring C++, C#, SQL, and Unity during my academic career.
                </p>
                <p className="text-base sm:text-lg">
                  With a strong foundation in full-stack JavaScript, I develop dynamic, scalable, and responsive
                  applications. My skills extend to cross-platform mobile app development using
                  <span className="text-teal-300 font-semibold"> React Native</span>, helping me deliver seamless user
                  experiences.
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-2xl sm:text-3xl font-bold mb-6 text-teal-300">Personal Details</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {personalInfo.map((info, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-zinc-900/80 to-zinc-800/60 backdrop-blur-sm rounded-xl p-4 border border-zinc-700/50 hover:border-teal-500/30 transition-all duration-500 group cursor-pointer"
                  style={{
                    transformStyle: "preserve-3d",
                    transform: "perspective(1000px)",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "perspective(1000px) rotateX(5deg) rotateY(5deg) translateZ(20px)"
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "perspective(1000px) rotateX(0deg) rotateY(0deg) translateZ(0px)"
                  }}
                >
                  <div className="flex items-center space-x-3">
                    <div className="p-2 bg-gradient-to-br from-teal-500 to-cyan-500 rounded-lg group-hover:scale-110 transition-transform duration-300 shadow-lg group-hover:shadow-teal-500/50">
                      <info.icon size={16} className="text-white" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="text-teal-300 font-semibold text-sm">{info.label}</p>
                      <p className="text-zinc-300 text-sm truncate">{info.value}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mb-16">
          <h3 className="text-2xl sm:text-3xl font-bold text-center mb-8 text-teal-300">Technical Expertise</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-zinc-900/80 to-zinc-800/60 backdrop-blur-sm rounded-2xl p-6 border border-zinc-700/50 hover:border-teal-500/30 transition-all duration-500 group cursor-pointer"
                style={{
                  transformStyle: "preserve-3d",
                  transform: "perspective(1000px)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "perspective(1000px) rotateY(10deg) translateZ(30px)"
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "perspective(1000px) rotateY(0deg) translateZ(0px)"
                }}
              >
                <div
                  className={`w-12 h-12 bg-gradient-to-br ${skill.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300 shadow-lg`}
                >
                  <skill.icon size={24} className="text-white" />
                </div>
                <h4 className="text-xl font-bold text-white mb-3">{skill.name}</h4>
                <div className="space-y-2">
                  {skill.techs.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="inline-block bg-zinc-800/50 text-zinc-300 px-3 py-1 rounded-full text-sm mr-2 mb-2 hover:bg-teal-600/20 hover:text-teal-300 transition-all duration-300 hover:scale-110"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center">
          <div
            className="bg-gradient-to-br from-zinc-900/80 to-zinc-800/60 backdrop-blur-sm rounded-2xl p-8 border border-zinc-700/50 hover:border-teal-500/30 transition-all duration-500 max-w-2xl mx-auto transform hover:scale-105 hover:shadow-2xl hover:shadow-teal-500/20"
            style={{
              transformStyle: "preserve-3d",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "perspective(1000px) translateZ(20px) scale(1.05)"
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "perspective(1000px) translateZ(0px) scale(1)"
            }}
          >
            <h3 className="text-2xl font-bold text-teal-300 mb-4">Let's Build Something Amazing</h3>
            <p className="text-zinc-300 mb-6 leading-relaxed">
              I'm constantly evolving with new technologies, aiming to create impactful and innovative solutions. Ready
              to turn your ideas into reality!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#projects"
                className="bg-gradient-to-r from-teal-600 to-teal-800 hover:from-teal-500 hover:to-teal-600 text-white px-6 py-3 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-teal-500/50 font-semibold"
              >
                View My Work
              </a>
              <a
                href="#footer"
                className="border border-zinc-50 text-zinc-50 hover:bg-zinc-50 hover:text-zinc-950 px-6 py-3 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-zinc-500/50 font-semibold"
              >
                Get In Touch
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
