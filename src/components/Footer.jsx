"use client"

import { useRef, useEffect, useState } from "react"
import { Github, Instagram, Facebook, Linkedin, FileText, Mail, MapPin, Phone } from "lucide-react"

const Footer = () => {
  const footerRef = useRef(null)
  const spotlightRef = useRef(null)
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })
  const [currentPos, setCurrentPos] = useState({ x: 0, y: 0 })
  const [isHovered, setIsHovered] = useState(false)

  // Smooth spotlight animation
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
      spotlight.style.left = `${currentPos.x}px`
      spotlight.style.top = `${currentPos.y}px`
      spotlight.style.opacity = isHovered ? "0.25" : "0.15"
    }
  }, [currentPos, isHovered])

  const handleMouseMove = (e) => {
    if (footerRef.current) {
      const rect = footerRef.current.getBoundingClientRect()
      setMousePos({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      })
    }
  }

  const socialLinks = [
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/muaaz-ahmed-301941379/",
      icon: Linkedin,
      color: "hover:text-blue-700",
    },
    {
      name: "GitHub",
      url: "https://github.com/muaazahmed03",
      icon: Github,
      color: "hover:text-teal-200",
    },
    {
      name: "Instagram",
      url: "https://www.instagram.com/cali_maaz/",
      icon: Instagram,
      color: "hover:text-pink-400",
    },
    {
      name: "Facebook",
      url: "https://www.facebook.com/muaaz.ahmed.5245",
      icon: Facebook,
      color: "hover:text-blue-400",
    },
  ]

  const contactInfo = [
    {
      icon: Mail,
      text: "muaaz.webdev@gmail.com",
      href: "mailto:muaazahmed0111@gmail.com",
    },
    {
      icon: Phone,
      text: "+92 313 233 2015",
      href: "#",
    },
    {
      icon: MapPin,
      text: "Karachi, Pakistan",
      href: "#",
    },
  ]

  return (
    <footer
      ref={footerRef}
      className="relative bg-gradient-to-br from-zinc-950 via-zinc-900 to-black text-zinc-100 overflow-hidden border-t border-zinc-800"
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(48,183,236,0.1),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(48,183,236,0.05)_50%,transparent_75%)] bg-[length:20px_20px]"></div>
      </div>

      {/* Enhanced Spotlight */}
      <div
        ref={spotlightRef}
        className="pointer-events-none absolute z-0 h-40 w-40 sm:h-60 sm:w-60 rounded-full bg-gradient-radial from-teal-300 via-cyan-400 to-transparent opacity-15 blur-2xl transition-all duration-500 ease-out"
        style={{ transform: "translate(-50%, -50%)" }}
      />

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 mb-8">
          {/* Brand Section */}
          <div className="text-center md:text-left space-y-4">
            <h3 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-teal-300 to-cyan-400 bg-clip-text text-transparent">
              Muaaz Ahmed 
            </h3>
            <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
              Full Stack Developer crafting modern web & mobile solutions with passion and precision.
            </p>
            <a
              href="/muaaz-ahmed-resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-teal-600 to-cyan-600 hover:from-teal-500 hover:to-cyan-500 text-white px-4 py-2 rounded-lg transition-all duration-300 transform hover:scale-105 text-sm sm:text-base"
            >
              <FileText size={16} />
              <span>Download Resume</span>
            </a>
          </div>

          {/* Contact Info */}
          <div className="text-center md:text-left space-y-4">
            <h4 className="text-lg sm:text-xl font-semibold text-zinc-200 mb-4">Get In Touch</h4>
            <div className="space-y-3">
              {contactInfo.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  className="flex items-center justify-center md:justify-start space-x-3 text-zinc-400 hover:text-teal-300 transition-colors duration-300 text-sm sm:text-base group"
                >
                  <item.icon size={16} className="group-hover:scale-110 transition-transform duration-300" />
                  <span>{item.text}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Social Links */}
          <div className="text-center md:text-left space-y-4">
            <h4 className="text-lg sm:text-xl font-semibold text-zinc-200 mb-4">Follow Me</h4>
            <div className="flex justify-center md:justify-start space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-3 rounded-full bg-zinc-800 hover:bg-zinc-700 ${social.color} transition-all duration-300 transform hover:scale-110 hover:rotate-6 group`}
                  title={social.name}
                >
                  <social.icon size={20} className="group-hover:scale-110 transition-transform duration-300" />
                </a>
              ))}
            </div>
            <p className="text-zinc-500 text-xs sm:text-sm mt-4">Let's connect and build something amazing together!</p>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-zinc-800 my-8"></div>

        {/* Bottom Section */}
        <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
          <div className="text-center sm:text-left">
            <p className="text-zinc-400 text-xs sm:text-sm">© 2025 Muaaz Ahmed. All rights reserved.</p>
            <p className="text-zinc-500 text-xs mt-1">Built with ❤️ using React & Tailwind CSS</p>
          </div>

          <div className="flex items-center space-x-4 text-xs sm:text-sm text-zinc-500">
            <a href="#" className="hover:text-teal-300 transition-colors duration-300">
              Privacy Policy
            </a>
            <span>•</span>
            <a href="#" className="hover:text-teal-300 transition-colors duration-300">
              Terms of Service
            </a>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-10 right-10 w-2 h-2 bg-teal-400 rounded-full animate-pulse opacity-60"></div>
      <div className="absolute bottom-20 left-10 w-1 h-1 bg-cyan-400 rounded-full animate-ping opacity-40"></div>
      <div className="absolute top-1/2 right-20 w-1.5 h-1.5 bg-teal-300 rounded-full animate-bounce opacity-50"></div>
    </footer>
  )
}

export default Footer