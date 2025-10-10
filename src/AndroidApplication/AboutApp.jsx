"use client"

import { useState, useEffect, useRef } from "react"
import { motion, useInView, useAnimation } from "framer-motion"
import DownloadConfirmModal from "./DownloadConfirmModal"
import {
  ShoppingBag,
  Utensils,
  Clock,
  MapPin,
  CreditCard,
  Star,
  ChevronRight,
  Heart,
  Smartphone,
  Users,
  Award,
} from "lucide-react"

const AboutApp = () => {
  const controls = useAnimation()
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const [showDownloadModal, setShowDownloadModal] = useState(false)

  useEffect(() => {
    if (isInView) {
      controls.start("visible")
    }
  }, [controls, isInView])


  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  }

  const handleDownloadClick = () => {
    setShowDownloadModal(true)
  }

  const handleDownloadConfirm = () => {
    // APK file ka direct link
    const apkUrl = "/app-release.apk" // Public folder mein APK file rakhein

    // Create download link
    const link = document.createElement("a")
    link.href = apkUrl
    link.download = "Food-Fusion.apk"
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)

    // Close modal
    setShowDownloadModal(false)

    // Optional: Show success message
    setTimeout(() => {
      alert("Download started! Check your downloads folder.")
    }, 500)
  }

  const handleDownloadCancel = () => {
    setShowDownloadModal(false)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      {/* Hero Section */}
      <motion.section
        className="relative bg-gradient-to-br from-lime-600 via-lime-700 to-green-600 text-white overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-black/10">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fillRule=%22evenodd%22%3E%3Cg fill=%22%23ffffff%22 fillOpacity=%220.1%22%3E%3Ccircle cx=%2230%22 cy=%2230%22 r=%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <div className="text-center">
            {/* Logo Animation */}
            <motion.div
              className="flex justify-center mb-8"
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
            >
              <div className="w-32 h-32 sm:w-40 sm:h-40 bg-white rounded-full flex items-center justify-center shadow-2xl">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSljZRPp8JZ2n6PWvAwR2e3GLHDCGLApgng5g&s"
                  alt="FoodFusion Logo"
                  className="w-20 h-20 sm:w-24 sm:h-24 object-contain"
                />
              </div>
            </motion.div>

            {/* App Name */}
            <motion.h1
              className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4"
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              Food Fusion
            </motion.h1>

            {/* Tagline */}
            <motion.p
              className="text-xl sm:text-2xl text-lime-100 mb-8 max-w-2xl mx-auto"
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              Delicious food at your fingertips
            </motion.p>

            {/* CTA Button */}
            <motion.button
              className="bg-white text-lime-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.8 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleDownloadClick}
            >
              Download App
            </motion.button>
          </div>
        </div>
      </motion.section>

      {/* About Section */}
      <motion.section
        ref={ref}
        className="py-16 bg-gray-900"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div className="text-center mb-16" variants={itemVariants}>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">About Food Fusion</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-lime-500 to-green-500 mx-auto mb-8"></div>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div variants={itemVariants}>
              <h3 className="text-2xl font-bold text-white mb-6">Your Ultimate Food Delivery Experience</h3>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                Food Fusion is your one-stop solution for ordering delicious food from multiple restaurants. Whether
                you're craving burgers, pizza, or any other cuisine, our app makes it easy to browse menus, customize
                your order, and get food delivered right to your doorstep.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed mb-8">
                Currently, we're focused on providing an amazing user experience with our intuitive frontend interface.
                Soon, we'll be integrating a robust backend system to enhance functionality and provide even more
                features!
              </p>
              <div className="flex flex-wrap gap-4">
                <span className="px-4 py-2 bg-lime-600/20 text-lime-300 rounded-full text-sm font-medium border border-lime-500/30">
                  React Native
                </span>
                <span className="px-4 py-2 bg-green-600/20 text-green-300 rounded-full text-sm font-medium border border-green-500/30">
                  Modern UI
                </span>
                <span className="px-4 py-2 bg-lime-600/20 text-lime-300 rounded-full text-sm font-medium border border-lime-500/30">
                  Fast & Reliable
                </span>
              </div>
            </motion.div>

            <motion.div className="relative" variants={itemVariants} whileHover={{ scale: 1.02 }}>
              <div className="bg-gradient-to-br from-lime-500 to-green-600 rounded-2xl p-8 text-white">
                <Smartphone className="w-16 h-16 mb-6" />
                <h4 className="text-2xl font-bold mb-4">Mobile First Design</h4>
                <p className="text-lime-100 leading-relaxed">
                  Built with mobile users in mind, our app provides a seamless experience across all devices with
                  intuitive navigation and lightning-fast performance.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>
     
      {/* Download Confirmation Modal */}
      <DownloadConfirmModal
        isOpen={showDownloadModal}
        onClose={handleDownloadCancel}
        onConfirm={handleDownloadConfirm}
      />
    </div>
  )
}

export default AboutApp
