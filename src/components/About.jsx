"use client"

import { useEffect, useRef, useState } from "react"
import AOS from "aos"
import "aos/dist/aos.css"
import { Code, Database, Smartphone, Globe, Award, Calendar, MapPin, Mail, Phone, User } from "lucide-react"

const About = () => {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef(null)
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })

  useEffect(() => {
    AOS.init({
      duration: 1200,
      once: false,
      offset: 100,
      easing: "ease-in-out",
    })

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting)
      },
      { threshold: 0.3 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

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
    { name: "Mobile Applications", icon: Smartphone, techs: ["React Native", "CLI"], color: "from-purple-500 to-pink-500" },
    { name: "Other Languages", icon: Code, techs: ["JavaScript", "C++", "C#", "SQL"], color: "from-orange-500 to-red-500" },
  ]

  const personalInfo = [
    { icon: User, label: "Degree", value: "Bachelors in Computer Science", delay: "100" },
    { icon: MapPin, label: "Location", value: "Karachi, Pakistan", delay: "100" },
    { icon: Phone, label: "Phone", value: "+92 313 233 2015", delay: "100" },
    { icon: Calendar, label: "Date Of Birth", value: "03-May-2002", delay: "100" },
    { icon: Mail, label: "Email", value: "muaazahmed0111@gmail.com", delay: "100" },
    { icon: Award, label: "Experience", value: "6+ Months", delay: "100" },
  ]

  return (
    <section
      ref={sectionRef}
      id="about"
      className="min-h-screen py-16 sm:py-20 px-4 sm:px-6 lg:px-16 overflow-x-hidden relative"
      style={{
        background: "linear-gradient(135deg, #04030c 0%, #0a0a0f 50%, #04030c 100%)",
        color: "white",
      }}
      onMouseMove={handleMouseMove}
    >
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            background: `radial-gradient(circle at ${mousePos.x}% ${mousePos.y}%, rgba(48, 183, 236, 0.3) 0%, transparent 50%)`,
            transition: "background 0.3s ease",
          }}
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(48,183,236,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(14,165,233,0.1),transparent_50%)]" />

        {/* Floating Particles */}
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className={`absolute w-1 h-1 bg-teal-400 rounded-full animate-pulse opacity-60`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: `${2 + Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16" data-aos="fade-down">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 bg-gradient-to-r from-teal-300 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-teal-500 to-cyan-500 mx-auto mb-6 rounded-full" />
          <p className="text-zinc-400 text-lg sm:text-xl max-w-2xl mx-auto">
            Passionate developer crafting digital experiences
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 mb-16">
          {/* Story Section */}
          <div className="space-y-6" data-aos="fade-right" data-aos-delay="100">
            <div className="bg-gradient-to-br from-zinc-900/50 to-zinc-800/30 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-zinc-700/50 hover:border-teal-500/30 transition-all duration-500">
              <h3 className="text-2xl sm:text-3xl font-bold mb-6 text-teal-300">My Journey</h3>
              <div className="space-y-4 text-zinc-300 leading-relaxed">
                <p className="text-base sm:text-lg">
                  Greetings! I am <span className="text-teal-300 font-semibold">Muaaz Ahmed Baig</span>, a passionate
                  <span className="text-teal-300 font-semibold"> MERN Stack Developer</span> based in Karachi, Pakistan.
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

          {/* Personal Info Section */}
          <div className="space-y-4" data-aos="fade-left" data-aos-delay="100">
            <h3 className="text-2xl sm:text-3xl font-bold mb-6 text-teal-300">Personal Details</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {personalInfo.map((info, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-zinc-900/50 to-zinc-800/30 backdrop-blur-sm rounded-xl p-4 border border-zinc-700/50 hover:border-teal-500/30 transition-all duration-500 hover:scale-105 group"
                  data-aos="zoom-in"
                  data-aos-delay={info.delay}
                >
                  <div className="flex items-center space-x-3">
                    <div className="p-2 bg-gradient-to-br from-teal-500 to-cyan-500 rounded-lg group-hover:scale-110 transition-transform duration-300">
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

        {/* Skills Section */}
        <div className="mb-16" data-aos="fade-up" data-aos-delay="100">
          <h3 className="text-2xl sm:text-3xl font-bold text-center mb-8 text-teal-300">Technical Expertise</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-zinc-900/50 to-zinc-800/30 backdrop-blur-sm rounded-2xl p-6 border border-zinc-700/50 hover:border-teal-500/30 transition-all duration-500 hover:scale-105 group"
                data-aos="flip-left"
                data-aos-delay={`${700 + index * 100}`}
              >
                <div
                  className={`w-12 h-12 bg-gradient-to-br ${skill.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                >
                  <skill.icon size={24} className="text-white" />
                </div>
                <h4 className="text-xl font-bold text-white mb-3">{skill.name}</h4>
                <div className="space-y-2">
                  {skill.techs.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="inline-block bg-zinc-800/50 text-zinc-300 px-3 py-1 rounded-full text-sm mr-2 mb-2 hover:bg-teal-600/20 hover:text-teal-300 transition-colors duration-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center" data-aos="zoom-in" data-aos-delay="100">
          <div className="bg-gradient-to-br from-zinc-900/50 to-zinc-800/30 backdrop-blur-sm rounded-2xl p-8 border border-zinc-700/50 hover:border-teal-500/30 transition-all duration-500 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-teal-300 mb-4">Let's Build Something Amazing</h3>
            <p className="text-zinc-300 mb-6 leading-relaxed">
              I'm constantly evolving with new technologies, aiming to create impactful and innovative solutions. Ready
              to turn your ideas into reality!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#projects"
                className="bg-gradient-to-r from-teal-600 to-cyan-600 hover:from-teal-500 hover:to-cyan-500 text-white px-6 py-3 rounded-lg transition-all duration-300 transform hover:scale-105 font-semibold"
              >
                View My Work
              </a>
              <a
                href="#footer"
                className="border border-teal-500 text-teal-300 hover:bg-teal-500 hover:text-white px-6 py-3 rounded-lg transition-all duration-300 transform hover:scale-105 font-semibold"
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

export default About
