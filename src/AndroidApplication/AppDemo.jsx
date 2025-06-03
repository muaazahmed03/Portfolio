"use client"

import { useState } from "react"
import { Play, User, Lock, Mail, Shield, CheckCircle, ArrowRight } from "lucide-react"

const AppDemo = () => {
  const [isPlaying, setIsPlaying] = useState(false)

  const features = [
    {
      icon: User,
      title: "Multiple Restaurants in Frontend",
      description: "Browse and explore various restaurants with detailed menus and offerings",
    },
    {
      icon: Lock,
      title: "Backend - Coming Soon",
      description: "Advanced backend features and API integration currently in development",
    },
    {
      icon: Mail,
      title: "User Authentication",
      description: "Secure login and signup system for personalized experience",
    },
    {
      icon: Shield,
      title: "Responsive Design",
      description: "Optimized interface that works seamlessly across all devices",
    },
  ]

  return (
    <section className="min-h-screen bg-gradient-to-br from-zinc-900 via-zinc-700 to-gray-900 text-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 bg-gradient-to-r from-lime-400 via-green-500 to-emerald-400 bg-clip-text text-transparent">
            App Demo
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-lime-500 to-green-500 mx-auto mb-6 rounded-full" />
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Experience the smooth login and signup flow of our mobile application
          </p>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Side - Mobile Mockup */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              {/* Mobile Frame */}
              <div className="relative w-80 h-[640px] bg-gray-900 rounded-[3rem] p-2 shadow-2xl border-4 border-gray-700">
                {/* Screen */}
                <div className="w-full h-full bg-black rounded-[2.5rem] overflow-hidden relative">
                  {/* Video Container - Fixed positioning */}
                  <div className="absolute inset-2 rounded-[2.5rem] overflow-hidden">
                    {/* Notch */}
                    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-6 bg-gray-900 rounded-b-2xl z-20"></div>

                    {/* Video that fills the entire screen */}
                    <video
                      className="w-full h-full object-cover"
                      controls
                      poster="/placeholder.svg?height=640&width=320"
                      onPlay={() => setIsPlaying(true)}
                      onPause={() => setIsPlaying(false)}
                      style={{ marginTop: "24px", height: "calc(100% - 24px)" }}
                    >
                      <source src="/full-demo.mp4" type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  </div>
                </div>

                {/* Home Indicator */}
                <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gray-600 rounded-full"></div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-lime-400 rounded-full animate-pulse opacity-60"></div>
              <div className="absolute -bottom-6 -left-6 w-6 h-6 bg-green-400 rounded-full animate-bounce opacity-50"></div>
            </div>
          </div>

          {/* Right Side - Content */}
          <div className="space-y-8">
            <div>
              <h3 className="text-3xl sm:text-4xl font-bold text-white mb-6">Seamless Authentication Experience</h3>
              <p className="text-lg text-gray-300 leading-relaxed mb-8">
                Our mobile application features a comprehensive authentication system that ensures both security and
                user-friendliness. Watch the demo to see how users can easily create accounts and log in to access all
                features.
              </p>
            </div>

            {/* Features List */}
            <div className="space-y-6">
              <h4 className="text-2xl font-semibold text-lime-300 mb-4">Key Features:</h4>
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-start space-x-4 p-4 bg-gradient-to-r from-gray-800/50 to-gray-700/30 rounded-xl border border-gray-700/50 hover:border-lime-500/30 transition-all duration-300"
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-lime-500 to-green-500 rounded-lg flex items-center justify-center">
                    <feature.icon size={20} className="text-white" />
                  </div>
                  <div>
                    <h5 className="text-lg font-semibold text-white mb-1">{feature.title}</h5>
                    <p className="text-gray-400 text-sm">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Demo Steps */}
            <div className="bg-gradient-to-br from-gray-800/50 to-gray-700/30 rounded-xl p-6 border border-gray-700/50">
              <h4 className="text-xl font-semibold text-lime-300 mb-4 flex items-center">
                <CheckCircle size={20} className="mr-2" />
                What You'll See in the Demo:
              </h4>
              <div className="space-y-3">
                <div className="flex items-center text-gray-300">
                  <ArrowRight size={16} className="text-lime-400 mr-3 flex-shrink-0" />
                  <span>User registration with form validation</span>
                </div>
                <div className="flex items-center text-gray-300">
                  <ArrowRight size={16} className="text-lime-400 mr-3 flex-shrink-0" />
                  <span>Email verification process</span>
                </div>
                <div className="flex items-center text-gray-300">
                  <ArrowRight size={16} className="text-lime-400 mr-3 flex-shrink-0" />
                  <span>Secure login functionality</span>
                </div>
                <div className="flex items-center text-gray-300">
                  <ArrowRight size={16} className="text-lime-400 mr-3 flex-shrink-0" />
                  <span>Dashboard access after authentication</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}

export default AppDemo
