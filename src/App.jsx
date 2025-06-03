import { Routes, Route, useLocation } from "react-router-dom"
import { useEffect } from "react"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import About from "./components/About"
import Skills from "./components/Skills"
import Projects from "./components/Projects"
import FastFood from "./components/FastFood"
import Footer from "./components/Footer"

function App() {
  const location = useLocation()

  // Scroll to top when route changes
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location.pathname])

  return (
    <div className="relative w-full overflow-x-hidden">
      <Routes>
        <Route
          path="/"
          element={
            <div className="w-full overflow-x-hidden">
              <Navbar />
              <div id="hero">
                <Hero />
              </div>
              <div id="about">
                <About />
              </div>
              <div id="skills">
                <Skills />
              </div>
              <div id="projects">
                <Projects />
              </div>
              <div id="footer">
              <Footer />
              </div>
            </div>
          }
        />
        <Route path="/fastfood" element={<FastFood />} />
      </Routes>
    </div>
  )
}

export default App
