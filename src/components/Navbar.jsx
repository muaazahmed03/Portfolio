"use client"

import "../index.css"
import { useState } from "react"
import { FileText, Github, Instagram, Menu, X } from "lucide-react"

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div className="w-full overflow-x-hidden">
      <nav className="fixed w-full z-50 bg-transparent backdrop-blur-md px-4 sm:px-6 py-4 flex justify-between items-center border-b border-zinc-400">
        {/* Left: Logo + Links */}
        <div className="flex items-center space-x-4 sm:space-x-8 flex-shrink-0">
          <a
            href="/"
            onClick={() => window.location.reload()}
            className="text-lg sm:text-xl font-bold text-white hover:text-teal-200 truncate"
          >
            Muaaz Ahmed
          </a>
          <div className="hidden md:flex space-x-6 text-white">
            <a href="#skills" className="hover:text-teal-200 whitespace-nowrap">
              Skills 
            </a>
            <a href="#about" className="hover:text-teal-200 whitespace-nowrap">
              About
            </a>
            <a href="#projects" className="hover:text-teal-200 whitespace-nowrap">
              Projects
            </a>
          </div>
        </div>

        {/* Right: Icons */}
        <div className="hidden md:flex items-center space-x-4 text-white flex-shrink-0">
          <a
            href="/muaaz-ahmed-baig-cv.pdf"
            target="_blank"
            className="hover:text-teal-200"
            title="Resume"
            rel="noreferrer"
          >
            <FileText size={20} />
          </a>
          <a
            href="https://github.com/muaazahmed03"
            target="_blank"
            className="hover:text-teal-200"
            title="GitHub"
            rel="noreferrer"
          >
            <Github size={20} />
          </a>
          <a
            href="https://www.instagram.com/muaaz_ahmed_03/"
            target="_blank"
            className="hover:text-teal-200"
            title="Instagram"
            rel="noreferrer"
          >
            <Instagram size={20} />
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden text-white flex-shrink-0">
          {menuOpen ? (
            <X onClick={() => setMenuOpen(false)} className="cursor-pointer text-white hover:text-teal-200" size={24} />
          ) : (
            <Menu onClick={() => setMenuOpen(true)} className="cursor-pointer" size={24} />
          )}
        </div>
      </nav>

      {/* Mobile Dropdown Menu with Animation */}
      <div
        className={`fixed top-0 left-0 w-full max-w-full bg-black bg-opacity-90 backdrop-blur-lg text-white transform transition-all duration-600 ease-in-out origin-top ${
          menuOpen ? "scale-y-100 h-screen" : "scale-y-0 h-0"
        } overflow-hidden z-40`}
        style={{ transformOrigin: "top" }}
      >
        <div className="flex flex-col items-start justify-start h-full space-y-6 text-lg px-4 sm:px-6 pt-4 w-full max-w-full overflow-x-hidden">
          <span className="text-xl font-bold text-white hover:text-teal-200 truncate">Muaaz Ahmed</span>
          <br />
          <a href="#skills" className="hover:text-teal-200 w-full" onClick={() => setMenuOpen(false)}>
            Skills
          </a>
          <a href="#about" className="hover:text-teal-200 w-full" onClick={() => setMenuOpen(false)}>
            About
          </a>
          <a href="#projects" className="hover:text-teal-200 w-full" onClick={() => setMenuOpen(false)}>
            Projects
          </a>
          <hr className="w-full border-gray-500" />
          <a href="/muaaz-ahmed-baig-cv.pdf" target="_blank" className="hover:text-teal-200 w-full" rel="noreferrer">
            Resume
          </a>
          <a
            href="https://github.com/muaazahmed03"
            target="_blank"
            className="hover:text-teal-200 w-full"
            rel="noreferrer"
          >
            GitHub
          </a>
          <a
            href="https://www.instagram.com/muaaz_ahmed_03/"
            target="_blank"
            className="hover:text-teal-200 w-full"
            rel="noreferrer"
          >
            Instagram
          </a>
        </div>
      </div>
    </div>
  )
}

export default Navbar
