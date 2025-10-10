"use client"

import { useState } from "react"
import { User, Lock, Mail, Shield, CheckCircle, ArrowRight, CreditCard, MapPin, LayoutDashboard } from "lucide-react"

const RelaxOnDemo = () => {
    const [isPlaying, setIsPlaying] = useState(false)

    const features = [
        {
            icon: User,
            title: "Book Massage at Home",
            description: "London residents can instantly book professional massage sessions at their home through the app. Only users within 10 miles of EC1Y 1AA can proceed (postcode-based locality validation).",
        },
        {
            icon: CreditCard,
            title: "Stripe Secure Payments",
            description: "All transactions are safely handled via Stripe, ensuring both reliability and compliance for customer payments.",
        },
        {
            icon: MapPin,
            title: "Service Area Validation",
            description: "As per company policy, bookings are only allowed for users with London postcodes located within 10 miles of the company HQ (EC1Y 1AA).",
        },
        {
            icon: LayoutDashboard,
            title: "Comprehensive Admin Panel",
            description: "Managers have exclusive access to the admin dashboard for secure bookings, payments, and record management.",
        },
        {
            icon: Shield,
            title: "Personal User Dashboard",
            description: "Every user gets a dedicated dashboard: check bookings, manage your profile, and track payment history.",
        }
    ]

    return (
        <section className="min-h-screen bg-gradient-to-br from-gray-900 via-zinc-700 to-gray-900 text-white py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 bg-gradient-to-r from-cyan-700 via-cyan-400 to-cyan-700 bg-clip-text text-transparent">
                        Relax On
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-cyan-500 mx-auto mb-6 rounded-full" />
                    <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                        Mobile Massage Booking Experience for London<br />
                        Book top therapists at home, with secure payment and seamless management
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
                                            <source src="/relax-on-demo.mp4" type="video/mp4" />
                                            Your browser does not support the video tag.
                                        </video>
                                    </div>
                                </div>
                                {/* Home Indicator */}
                                <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gray-600 rounded-full"></div>
                            </div>
                            {/* Floating Elements */}
                            <div className="absolute -top-4 -right-4 w-8 h-8 bg-cyan-500 rounded-full animate-pulse opacity-60"></div>
                            <div className="absolute -bottom-6 -left-6 w-6 h-6 bg-cyan-400 rounded-full animate-bounce opacity-50"></div>
                        </div>
                    </div>

                    {/* Right Side - Content */}
                    <div className="space-y-8">
                        <div>
                            <h3 className="text-3xl sm:text-4xl font-bold text-white mb-6">Mobile Massage Booking — Just for London</h3>
                            <p className="text-lg text-gray-300 leading-relaxed mb-8">
                                Relax On is a dedicated mobile application, built to let people across London book relaxing at home massage sessions quickly and securely. With robust real time booking, strict locality validation, and easy to manage dashboards, this app delivers professional service for both customers and the management team.
                            </p>
                        </div>

                        {/* Features List */}
                        <div className="space-y-6">
                            <h4 className="text-2xl font-semibold text-cyan-300 mb-4">Key Features:</h4>
                            {features.map((feature, index) => (
                                <div
                                    key={index}
                                    className="flex items-start space-x-4 p-4 bg-gradient-to-r from-gray-800/50 to-gray-700/30 rounded-xl border border-gray-700/50 hover:border-lime-500/30 transition-all duration-300"
                                >
                                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-cyan-500 to-cyan-500 rounded-lg flex items-center justify-center">
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
                            <h4 className="text-xl font-semibold text-cyan-300 mb-4 flex items-center">
                                <CheckCircle size={20} className="mr-2" />
                                What You'll See in the Demo:
                            </h4>
                            <div className="space-y-3">
                                <div className="flex items-center text-gray-300">
                                    <ArrowRight size={16} className="text-cyan-400 mr-3 flex-shrink-0" />
                                    <span>Booking validation for London and 10-mile postcode radius</span>
                                </div>
                                <div className="flex items-center text-gray-300">
                                    <ArrowRight size={16} className="text-cyan-400 mr-3 flex-shrink-0" />
                                    <span>Profile and dashboard creation for every user</span>
                                </div>
                                <div className="flex items-center text-gray-300">
                                    <ArrowRight size={16} className="text-cyan-400 mr-3 flex-shrink-0" />
                                    <span>Stripe-powered seamless payments</span>
                                </div>
                                <div className="flex items-center text-gray-300">
                                    <ArrowRight size={16} className="text-cyan-400 mr-3 flex-shrink-0" />
                                    <span>Admin (manager) dashboard for booking and payment management</span>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    )
}

export default RelaxOnDemo
