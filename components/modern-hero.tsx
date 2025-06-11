"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { ChevronRight } from "lucide-react"

const productCategories = [
  { id: "beer", name: "Non-Alcoholic Beer" },
  { id: "soda", name: "Goli Soda" },
  { id: "energy", name: "Energy Drinks" },
]

export default function ModernHero() {
  const [activeCategory, setActiveCategory] = useState("beer")
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-black via-charcoal to-[#121212]">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-neon-red/10 rounded-full filter blur-[150px] animate-glow-pulse"></div>
        <div className="absolute bottom-1/3 right-1/4 w-[600px] h-[600px] bg-neon-red/5 rounded-full filter blur-[180px] animate-glow-pulse"></div>
        <div className="absolute top-1/2 right-1/3 w-[400px] h-[400px] bg-electric-accent/5 rounded-full filter blur-[120px] animate-glow-pulse"></div>
      </div>

      {/* Product category tabs */}
      <div className="absolute top-0 left-0 right-0 z-20 pt-24 pb-4 px-4 md:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-center">
            <div className="inline-flex p-1.5 bg-black/30 backdrop-blur-md rounded-full border border-white/10">
              {productCategories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`relative px-4 py-2 md:px-6 md:py-2.5 text-sm md:text-base font-medium rounded-full transition-all duration-300 ${
                    activeCategory === category.id ? "text-white" : "text-white/70 hover:text-white hover:bg-white/5"
                  }`}
                >
                  {activeCategory === category.id && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute inset-0 bg-gradient-to-r from-neon-red/80 to-rose-500/80 rounded-full"
                      initial={false}
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{category.name}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Main hero content */}
      <div className="container mx-auto px-4 h-screen flex flex-col justify-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center pt-20">
          {/* Left side - Text content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 30 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="z-10"
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold mb-6 tracking-tight leading-tight">
              <span className="block text-white glow-text-white">Refresh Your Mind –</span>
              <span className="block bg-gradient-to-r from-neon-red to-rose-500 bg-clip-text text-transparent">
                Zero Alcohol. 100% Flavor.
              </span>
            </h1>

            <p className="text-gray-300 text-lg md:text-xl max-w-lg mb-10 leading-relaxed opacity-90">
              Crafted for the experience, <span className="text-neon-red font-medium">without the buzz</span>. Premium
              beverages designed for those who demand more from every sip.
            </p>

            <div className="flex flex-wrap gap-4">
              <motion.button
                className="relative overflow-hidden bg-gradient-to-r from-neon-red to-rose-500 text-white px-8 py-4 text-lg rounded-full group focus:outline-none"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection("products")}
              >
                <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-white/0 via-white/20 to-white/0 transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></span>
                <span className="relative flex items-center">
                  Explore Products
                  <ChevronRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </motion.button>

              <motion.button
                className="bg-transparent border border-white/20 hover:border-white/40 text-white px-8 py-4 text-lg rounded-full transition-colors duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection("about")}
              >
                Our Story
              </motion.button>
            </div>
          </motion.div>

          {/* Right side - Product image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: isLoaded ? 1 : 0, scale: isLoaded ? 1 : 0.9 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative flex justify-center lg:justify-end"
          >
            <div className="relative">
              {/* Glassmorphic platform/base */}
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-[280px] h-[80px] bg-white/5 backdrop-blur-md rounded-full border border-white/10 shadow-lg"></div>

              {/* Ambient glow effect */}
              <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 w-[200px] h-[100px] bg-neon-red/30 rounded-full filter blur-[50px] animate-glow-pulse"></div>

              {/* Product image */}
              <motion.div
                animate={{
                  y: [0, -15, 0],
                }}
                transition={{
                  duration: 6,
                  repeat: Number.POSITIVE_INFINITY,
                  repeatType: "reverse",
                  ease: "easeInOut",
                }}
                className="relative z-10"
              >
                <Image
                  src="/images/kingwiser-beer.png"
                  alt="BackWin Kingweiser Non-Alcoholic Beer"
                  width={400}
                  height={700}
                  className="h-[600px] w-auto object-contain drop-shadow-[0_0_25px_rgba(255,51,102,0.4)]"
                  priority
                />
              </motion.div>

              {/* Product highlight */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 0.8 }}
                className="absolute bottom-32 -right-4 md:right-0 bg-black/40 backdrop-blur-md p-4 rounded-2xl border border-white/10 max-w-[200px] transform rotate-6 shadow-xl"
              >
                <div className="text-neon-red font-bold text-lg">Premium</div>
                <div className="text-white text-sm">Zero alcohol, full flavor experience</div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom wave decoration */}
      <div className="absolute bottom-0 left-0 right-0 h-24 overflow-hidden">
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="absolute bottom-0 left-0 w-full h-full transform rotate-180"
          fill="rgba(255, 51, 102, 0.05)"
        >
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"></path>
        </svg>
      </div>
    </section>
  )
}
