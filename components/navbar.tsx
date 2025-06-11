"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X } from "lucide-react"

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (id: string) => {
    // Close the mobile menu first
    setIsMenuOpen(false)

    // Small delay to allow menu closing animation to complete
    setTimeout(() => {
      const element = document.getElementById(id)
      if (element) {
        // Get the element's position relative to the viewport
        const rect = element.getBoundingClientRect()

        // Calculate the absolute position by adding the scroll position
        const absoluteTop = rect.top + window.pageYOffset

        // Scroll with offset for the fixed header
        window.scrollTo({
          top: absoluteTop - 100, // Adjust offset as needed
          behavior: "smooth",
        })
      }
    }, 10)
  }

  const navLinks = [
    { name: "Home", id: "home" },
    { name: "Products", id: "products" },
    { name: "About", id: "about" },
    { name: "Find Us", id: "stores" },
    { name: "Shop", id: "shop" },
  ]

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-black/80 backdrop-blur-md py-3 border-b border-neon-red/20" : "bg-transparent py-5"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <button
          onClick={() => scrollToSection("home")}
          className="flex items-center z-20"
          aria-label="Go to home section"
        >
          <div className="flex items-center">
            <Image
              src="/images/backwin-lightning.png"
              alt="BackWin Logo"
              width={80}
              height={40}
              className="h-16 w-auto mr-2"
              priority
            />
            <span className="text-3xl font-bold text-neon-red glow-text-red">BackWin</span>
          </div>
        </button>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => scrollToSection(link.id)}
              className="text-white hover:text-neon-red transition-colors duration-300 text-lg relative group"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-neon-red transition-all duration-300 group-hover:w-full"></span>
            </button>
          ))}
          <a
            href="https://dl.flipkart.com/s/FXvojVuuuN"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-neon-red hover:bg-neon-red/80 text-white px-6 py-2 rounded-md transition-colors duration-300 btn-highlight"
          >
            Shop Online
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
          className="md:hidden z-20 p-2 text-white hover:text-neon-red transition-colors"
        >
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="md:hidden fixed inset-0 bg-black/95 backdrop-blur-md pt-20 z-10"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "100vh" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="container mx-auto px-4 py-5 flex flex-col space-y-6">
              {navLinks.map((link, index) => (
                <motion.button
                  key={link.name}
                  onClick={() => scrollToSection(link.id)}
                  className="text-white hover:text-neon-red py-4 transition-colors duration-300 text-left text-2xl font-medium border-b border-gray-800 hover:border-neon-red/50"
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.3, delay: 0.1 * index }}
                  whileTap={{ scale: 0.95 }}
                >
                  {link.name}
                </motion.button>
              ))}
              <motion.div
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.3, delay: 0.5 }}
              >
                <a
                  href="https://dl.flipkart.com/s/FXvojVuuuN"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block bg-neon-red hover:bg-neon-red/80 text-white w-full py-4 text-xl text-center rounded-md transition-colors duration-300 btn-highlight"
                >
                  Shop Online
                </a>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
