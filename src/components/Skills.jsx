"use client"

import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Search, ChevronDown, Star, Code, Database, Layout, Smartphone } from "lucide-react"

const skillsData = [
  {
    name: "HTML",
    desc: "Structure for web content",
    img: "https://img.icons8.com/color/96/html-5.png",
    category: "frontend",
    proficiency: 95,
    featured: true,
  },
  {
    name: "CSS",
    desc: "Styling the web visually",
    img: "https://img.icons8.com/color/96/css3.png",
    category: "frontend",
    proficiency: 90,
    featured: true,
  },
  {
    name: "JavaScript",
    desc: "Dynamic interactivity on websites",
    img: "https://img.icons8.com/color/96/javascript.png",
    category: "frontend",
    proficiency: 88,
    featured: true,
  },
  {
    name: "TypeScript",
    desc: "JavaScript with type safety",
    img: "https://img.icons8.com/color/96/typescript.png",
    category: "frontend",
    proficiency: 85,
  },
  {
    name: "React JS",
    desc: "Building user interfaces",
    img: "https://img.icons8.com/officel/96/react.png",
    category: "frontend",
    proficiency: 94,
    featured: true,
  },
  {
    name: "Redux",
    desc: "State management for React",
    img: "https://img.icons8.com/color/96/redux.png",
    category: "frontend",
    proficiency: 78,
  },
  {
    name: "Node JS",
    desc: "Server-side JavaScript runtime",
    img: "https://i.pinimg.com/736x/4d/fc/38/4dfc38802784bcf687f616e7e5a4370c.jpg",
    category: "backend",
    proficiency: 85,
    featured: true,
  },
  {
    name: "Express JS",
    desc: "Fast backend framework for Node",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7S33Oq2FeRbyBBA6l1q8PwLVa3SzaONO-9Q&s",
    category: "backend",
    proficiency: 82,
    featured: true,
  },
  {
    name: "MongoDB",
    desc: "NoSQL database solution",
    img: "https://img.icons8.com/color/96/mongodb.png",
    category: "backend",
    proficiency: 88,
    featured: true,
  },
  {
    name: "React Native",
    desc: "Mobile apps using React",
    img: "https://img.icons8.com/color/96/react-native.png",
    category: "mobile",
    proficiency: 86,
    featured: true,
  },
  {
    name: "Firebase",
    desc: "Backend services and auth",
    img: "https://img.icons8.com/color/96/firebase.png",
    category: "backend",
    proficiency: 90,
  },
  {
    name: "BootStrap",
    desc: "CSS framework for layout",
    img: "https://img.icons8.com/color/96/bootstrap.png",
    category: "frontend",
    proficiency: 92,
  },
  {
    name: "Material UI",
    desc: "React UI components",
    img: "https://img.icons8.com/?size=512&id=gFw7X5Tbl3ss&format=png",
    category: "frontend",
    proficiency: 87,
  },
  {
    name: "Tailwind CSS",
    desc: "Utility-first CSS framework",
    img: "https://img.icons8.com/color/96/tailwind_css.png",
    category: "frontend",
    proficiency: 88,
    featured: true,
  },
  {
    name: "React Native Paper",
    desc: "UI library for RN apps",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjFNml5PoLN3JVTKF0rfMyeHXzuj0R0aMPfg&s",
    category: "mobile",
    proficiency: 84,
  },
  {
    name: "Next JS",
    desc: "Building user interfaces with advanced feature",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSV9uzErWz9EXqZDxZ5lP9aYpMz8eK6rr5X3w&s",
    category: "frontend",
    proficiency: 85,
    featured: true,
  },
  {
    name: "Stripe",
    desc: "For use different payment methods",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQGluJhW7I1NYU7jF77E-9K9I46_ib_DUNHw&s",
    category: "backend",
    proficiency: 95,
    featured: true,
  },
]

const categories = [
  { id: "all", name: "All Skills", icon: Code },
  { id: "frontend", name: "Frontend", icon: Layout },
  { id: "backend", name: "Backend", icon: Database },
  { id: "mobile", name: "Mobile", icon: Smartphone },
]

const Skills = () => {
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [searchQuery, setSearchQuery] = useState("")
  const [filteredSkills, setFilteredSkills] = useState(skillsData)
  const [viewMode, setViewMode] = useState("grid") // grid or list
  const [isInView, setIsInView] = useState(false)
  const sectionRef = useRef(null)

  // Filter skills based on category and search query
  useEffect(() => {
    let filtered = skillsData

    if (selectedCategory !== "all") {
      filtered = filtered.filter((skill) => skill.category === selectedCategory)
    }

    if (searchQuery) {
      const query = searchQuery.toLowerCase()
      filtered = filtered.filter(
        (skill) => skill.name.toLowerCase().includes(query) || skill.desc.toLowerCase().includes(query),
      )
    }

    setFilteredSkills(filtered)
  }, [selectedCategory, searchQuery])

  // Check if section is in view for animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting)
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [])

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const cardVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
      },
    },
    hover: {
      y: -10,
      boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.2), 0 10px 10px -5px rgba(0, 0, 0, 0.1)",
      transition: { type: "spring", stiffness: 400, damping: 10 },
    },
    tap: { scale: 0.98 },
  }

  const listItemVariants = {
    hidden: { x: -50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100, damping: 10 },
    },
    hover: {
      backgroundColor: "rgba(20, 184, 166, 0.1)",
      transition: { duration: 0.2 },
    },
  }

  const progressVariants = {
    hidden: { width: 0 },
    visible: (proficiency) => ({
      width: `${proficiency}%`,
      transition: { duration: 1.5, ease: "easeOut", delay: 0.3 },
    }),
  }

  const fadeInUp = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  }

  return (
    <section
      ref={sectionRef}
      id="skills"
      className="min-h-screen py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-12"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={fadeInUp}
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-teal-300 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
            Technical Skills
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-teal-500 to-cyan-500 mx-auto mb-6 rounded-full" />
          <p className="text-zinc-400 text-lg max-w-2xl mx-auto">My toolkit for creating amazing digital experiences</p>
        </motion.div>

        {/* Search and Filter Controls */}
        <motion.div
          className="mb-8 flex flex-col sm:flex-row gap-4 items-center justify-between"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={fadeInUp}
        >
          {/* Search */}
          <div className="relative w-full sm:w-64 md:w-80">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search size={18} className="text-gray-400" />
            </div>
            <input
              type="text"
              placeholder="Search skills..."
              className="w-full pl-10 pr-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 text-gray-200"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          <div className="flex items-center gap-4 w-full sm:w-auto">
            {/* Category Filter */}
            <div className="relative w-full sm:w-auto">
              <select
                className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 text-gray-200 appearance-none cursor-pointer"
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
              >
                {categories.map((category) => (
                  <option key={category.id} value={category.id} className="bg-gray-800">
                    {category.name}
                  </option>
                ))}
              </select>
              <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                <ChevronDown size={16} className="text-gray-400" />
              </div>
            </div>

            {/* View Mode Toggle */}
            <div className="flex rounded-lg overflow-hidden border border-gray-700">
              <button
                className={`px-3 py-2 ${viewMode === "grid" ? "bg-teal-600 text-white" : "bg-gray-800 text-gray-400"}`}
                onClick={() => setViewMode("grid")}
                aria-label="Grid view"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="3" y="3" width="7" height="7"></rect>
                  <rect x="14" y="3" width="7" height="7"></rect>
                  <rect x="3" y="14" width="7" height="7"></rect>
                  <rect x="14" y="14" width="7" height="7"></rect>
                </svg>
              </button>
              <button
                className={`px-3 py-2 ${viewMode === "list" ? "bg-teal-600 text-white" : "bg-gray-800 text-gray-400"}`}
                onClick={() => setViewMode("list")}
                aria-label="List view"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="8" y1="6" x2="21" y2="6"></line>
                  <line x1="8" y1="12" x2="21" y2="12"></line>
                  <line x1="8" y1="18" x2="21" y2="18"></line>
                  <line x1="3" y1="6" x2="3.01" y2="6"></line>
                  <line x1="3" y1="12" x2="3.01" y2="12"></line>
                  <line x1="3" y1="18" x2="3.01" y2="18"></line>
                </svg>
              </button>
            </div>
          </div>
        </motion.div>

        {/* No Results Message */}
        {filteredSkills.length === 0 && (
          <motion.div
            className="text-center py-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-gray-400 text-lg">No skills found matching your criteria.</p>
            <button
              className="mt-4 px-4 py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-500 transition-colors"
              onClick={() => {
                setSelectedCategory("all")
                setSearchQuery("")
              }}
            >
              Reset Filters
            </button>
          </motion.div>
        )}

        {/* Grid View */}
        {viewMode === "grid" && filteredSkills.length > 0 && (
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <AnimatePresence>
              {filteredSkills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl overflow-hidden border border-gray-700 hover:border-teal-500/50 transition-all duration-300"
                  variants={cardVariants}
                  whileHover="hover"
                  whileTap="tap"
                  layout
                  initial="hidden"
                  animate="visible"
                  exit={{ opacity: 0, scale: 0.8, transition: { duration: 0.2 } }}
                >
                  {/* Featured Badge */}
                  {skill.featured && (
                    <div className="absolute top-3 right-3">
                      <div className="flex items-center gap-1 bg-teal-900/70 backdrop-blur-sm px-2 py-1 rounded-full">
                        <Star size={12} className="text-yellow-400 fill-yellow-400" />
                        <span className="text-xs font-medium text-yellow-100">Featured</span>
                      </div>
                    </div>
                  )}

                  <div className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-16 h-16 bg-gray-700/50 rounded-lg p-2 flex items-center justify-center">
                        <img
                          src={skill.img || "/placeholder.svg"}
                          alt={skill.name}
                          className="w-12 h-12 object-contain"
                          onError={(e) => {
                            e.target.onerror = null
                            e.target.src = "https://via.placeholder.com/96?text=" + skill.name
                          }}
                        />
                      </div>
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            size={14}
                            className={`${
                              i < Math.round(skill.proficiency / 20)
                                ? "text-yellow-400 fill-yellow-400"
                                : "text-gray-600"
                            }`}
                          />
                        ))}
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-1">{skill.name}</h3>
                    <p className="text-gray-400 text-sm mb-4">{skill.desc}</p>

                    {/* Proficiency Bar */}
                    <div className="mt-4">
                      <div className="flex justify-between text-xs mb-1">
                        <span className="text-gray-400">Proficiency</span>
                        <span className="text-teal-400 font-medium">{skill.proficiency}%</span>
                      </div>
                      <div className="w-full bg-gray-700 rounded-full h-2 overflow-hidden">
                        <motion.div
                          className="h-full bg-gradient-to-r from-teal-500 to-cyan-400 rounded-full"
                          custom={skill.proficiency}
                          variants={progressVariants}
                          initial="hidden"
                          animate={isInView ? "visible" : "hidden"}
                        />
                      </div>
                    </div>

                    {/* Category Badge */}
                    <div className="mt-4">
                      <span className="inline-block px-3 py-1 bg-gray-700/50 rounded-full text-xs font-medium text-gray-300 capitalize">
                        {skill.category}
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        )}

        {/* List View */}
        {viewMode === "list" && filteredSkills.length > 0 && (
          <motion.div
            className="bg-gray-800/50 rounded-xl border border-gray-700 overflow-hidden"
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <div className="grid grid-cols-12 gap-4 px-6 py-4 bg-gray-700/30 text-gray-300 font-medium text-sm">
              <div className="col-span-5 sm:col-span-4">Skill</div>
              <div className="hidden sm:block sm:col-span-4">Description</div>
              <div className="col-span-4 sm:col-span-2">Category</div>
              <div className="col-span-3 sm:col-span-2">Proficiency</div>
            </div>

            <AnimatePresence>
              {filteredSkills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  className="grid grid-cols-12 gap-4 px-6 py-4 border-t border-gray-700 hover:bg-gray-700/20 transition-colors duration-200"
                  variants={listItemVariants}
                  whileHover="hover"
                  layout
                  initial="hidden"
                  animate="visible"
                  exit={{ opacity: 0, x: -50, transition: { duration: 0.2 } }}
                >
                  <div className="col-span-5 sm:col-span-4 flex items-center gap-3">
                    <div className="w-10 h-10 bg-gray-700/50 rounded-lg p-1 flex items-center justify-center flex-shrink-0">
                      <img
                        src={skill.img || "/placeholder.svg"}
                        alt={skill.name}
                        className="w-8 h-8 object-contain"
                        onError={(e) => {
                          e.target.onerror = null;
                          e.target.src =
                            "https://via.placeholder.com/96?text=" + skill.name;
                        }}
                      />
                    </div>
                    <div>
                      <h3 className="font-semibold text-white flex items-center gap-1">
                        {skill.name}
                        {skill.featured && (
                          <Star
                            size={12}
                            className="text-yellow-400 fill-yellow-400 ml-1"
                          />
                        )}
                      </h3>
                    </div>
                  </div>

                  <div className="hidden sm:block sm:col-span-4 text-gray-400 text-sm self-center">
                    {skill.desc}
                  </div>

                  <div className="col-span-4 sm:col-span-2 self-center">
                    <span className="inline-block px-2 py-1 bg-gray-700/50 rounded-full text-xs font-medium text-gray-300 capitalize">
                      {skill.category}
                    </span>
                  </div>

                  <div className="col-span-3 sm:col-span-2 self-center">
                    <div className="w-full bg-gray-700 rounded-full h-2 overflow-hidden">
                      <motion.div
                        className="h-full bg-gradient-to-r from-teal-500 to-cyan-400 rounded-full"
                        custom={skill.proficiency}
                        variants={progressVariants}
                        initial="hidden"
                        animate={isInView ? "visible" : "hidden"}
                      />
                    </div>
                    <div className="text-xs text-right mt-1 text-teal-400">
                      {skill.proficiency}%
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        )}

        {/* Stats Summary */}
        <motion.div
          className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-4"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          {categories.map((category, index) => (
            <motion.div
              key={category.id}
              className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-6 border border-gray-700"
              variants={cardVariants}
              custom={index}
            >
              <div className="flex items-center justify-between mb-2">
                <category.icon size={24} className="text-teal-400" />
                <span className="text-2xl font-bold text-white">
                  {category.id === "all"
                    ? skillsData.length
                    : skillsData.filter((s) => s.category === category.id)
                        .length}
                </span>
              </div>
              <h4 className="text-gray-400 text-sm">{category.name}</h4>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
