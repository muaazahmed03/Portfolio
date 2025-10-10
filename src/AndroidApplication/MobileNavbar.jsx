"use client"

import "../index.css"
import { useState } from "react"
import { FileText, Github, Instagram, Linkedin, Menu, X } from "lucide-react"

const MobNavbar = ({ scrollToAbout, scrollToDemo }) => {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div className="w-full overflow-x-hidden">
      <nav className="fixed w-full z-50 bg-transparent backdrop-blur-md px-4 sm:px-6 py-4 flex justify-between items-center border-b border-zinc-400">
        {/* Logo and Desktop Links */}
        <div className="flex items-center space-x-4 sm:space-x-8 flex-shrink-0">
          <a
            href="/"
            onClick={() => window.location.reload()}
            className="text-lg sm:text-xl font-bold text-white hover:text-lime-300 truncate"
          >
            Muaaz Ahmed
          </a>
          <div className="hidden md:flex space-x-6 text-white">
            <a
              className="hover:text-lime-300 w-full cursor-pointer"
              onClick={scrollToAbout}
            >
              About Application
            </a>
            <a
              className="hover:text-lime-300 cursor-pointer"
              onClick={scrollToDemo}
            >
              Demo
            </a>
          </div>
        </div>

        {/* Desktop Icons */}
        <div className="hidden md:flex items-center space-x-4 text-white flex-shrink-0">
          <a
            href="/muaaz-ahmed-baig-cv.pdf"
            target="_blank"
            className="hover:text-lime-300"
            rel="noreferrer"
          >
            <FileText size={20} />
          </a>
          <a
            href="https://www.linkedin.com/in/muaaz-ahmed-301941379/"
            target="_blank"
            className="hover:text-lime-300"
            title="Linkedin"
            rel="noreferrer"
          >
            <Linkedin size={20} />
          </a>
          <a
            href="https://github.com/muaazahmed03"
            target="_blank"
            className="hover:text-lime-300"
            rel="noreferrer"
          >
            <Github size={20} />
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden text-white flex-shrink-0">
          {menuOpen ? (
            <X
              onClick={() => setMenuOpen(false)}
              className="cursor-pointer hover:text-lime-300"
              size={24}
            />
          ) : (
            <Menu
              onClick={() => setMenuOpen(true)}
              className="cursor-pointer"
              size={24}
            />
          )}
        </div>
      </nav>

      {/* Mobile Menu Dropdown */}
      <div
        className={`fixed top-0 left-0 w-full bg-black bg-opacity-90 backdrop-blur-lg text-white transition-all duration-600 ease-in-out ${
          menuOpen ? "scale-y-100 h-screen" : "scale-y-0 h-0"
        } overflow-hidden z-40`}
        style={{ transformOrigin: "top" }}
      >
        <div className="flex flex-col items-start justify-start h-full space-y-6 text-lg px-4 sm:px-6 pt-4">
          <span className="text-xl font-bold text-white hover:text-lime-300 truncate">
            Muaaz Ahmed
          </span>
          <br />
          {/* ✅ Mobile Link that uses scrollToAbout */}
          <a
            className="hover:text-lime-300 w-full cursor-pointer"
            onClick={() => {
              scrollToAbout()
              setMenuOpen(false)
            }}
          >
            About Application
          </a>
          <a
            onClick={() => {
              scrollToDemo();
              setMenuOpen(false);
            }}
            className="hover:text-lime-300 w-full cursor-pointer"
          >
            Demo
          </a>
          <hr className="w-full border-gray-500" />
          <a
            href="/muaaz-ahmed-baig-cv.pdf"
            target="_blank"
            className="hover:text-lime-300 w-full"
            rel="noreferrer"
          >
            Resume
          </a>
          <a
            href="https://www.linkedin.com/in/muaaz-ahmed-301941379/"
            target="_blank"
            className="hover:text-lime-300 w-full"
            rel="noreferrer"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/muaazahmed03"
            target="_blank"
            className="hover:text-lime-300 w-full"
            rel="noreferrer"
          >
            GitHub
          </a>
        </div>
      </div>
    </div>
  )
}

export default MobNavbar
