"use client"

import { useRef } from "react"
import Navbar from "@/components/navbar"
import { motion } from "framer-motion"
import { ChevronRight } from "lucide-react"
import HeroProducts from "@/components/hero-products"

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null)

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section
      id="home"
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-black via-charcoal to-black"
    >
      <Navbar />

      {/* Enhanced background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-neon-red/10 rounded-full filter blur-[120px] animate-glow-pulse"></div>
        <div className="absolute bottom-1/3 right-1/4 w-[500px] h-[500px] bg-neon-red/10 rounded-full filter blur-[150px] animate-glow-pulse"></div>
        <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-electric-accent/5 rounded-full filter blur-[100px] animate-glow-pulse"></div>
      </div>

      <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center pt-20 relative z-10">
        <div className="z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="text-neon-red font-bold text-xl md:text-2xl inline-block mb-4 glow-text-red">
              ENERGY REIMAGINED
            </span>

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold mb-8 tracking-tight heading-highlight">
              <span className="block text-white glow-text-white">FUEL YOUR</span>
              <span className="block text-neon-red glow-text-red">COMEBACK</span>
            </h1>

            <p className="text-gray-300 text-lg md:text-xl max-w-md mb-10 leading-relaxed">
              Premium non-alcoholic beer, energy drinks, and goli soda crafted for the{" "}
              <span className="text-neon-red font-semibold glow-text-red">modern consumer</span> who demands more.
            </p>

            <motion.button
              className="bg-neon-red hover:bg-neon-red/80 text-white px-8 py-4 text-lg rounded-md group relative overflow-hidden focus:outline-none btn-highlight"
              onClick={() => scrollToSection("products")}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Discover our products"
            >
              <span className="relative flex items-center">
                Discover Now
                <ChevronRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </motion.button>
          </motion.div>
        </div>

        <motion.div
          className="relative h-[400px] md:h-[600px] flex items-center justify-center"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <HeroProducts />
        </motion.div>
      </div>
    </section>
  )
}
