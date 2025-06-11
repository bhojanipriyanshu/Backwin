"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X } from "lucide-react"

export default function ModernHeader() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("home")

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)

      // Determine active section based on scroll position
      const sections = ["home", "products", "discover", "about", "stores", "shop"]
      for (const section of sections.reverse()) {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          if (rect.top <= 100) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (id: string) => {
    setIsMenuOpen(false)

    setTimeout(() => {
      const element = document.getElementById(id)
      if (element) {
        const offsetTop = element.getBoundingClientRect().top + window.pageYOffset
        window.scrollTo({
          top: offsetTop - 80,
          behavior: "smooth",
        })
      }
    }, 100)
  }

  const navLinks = [
    { name: "Home", id: "home" },
    { name: "Products", id: "products" },
    { name: "Discover", id: "discover" },
    { name: "About", id: "about" },
    { name: "Shop", id: "shop" },
  ]

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-black/90 backdrop-blur-md py-2 shadow-lg shadow-neon-red/10"
          : "bg-gradient-to-b from-black/80 to-transparent py-4"
      }`}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <motion.button
            onClick={() => scrollToSection("home")}
            className="flex items-center group"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <Image
              src="/images/backwin-lightning.png"
              alt="BackWin Logo"
              width={60}
              height={60}
              className="h-16 w-auto mr-3"
            />
            <div className="flex flex-col">
              <span className="text-neon-red text-3xl font-bold tracking-wider">BackWin</span>
              <span className="text-gray-400 text-xs tracking-widest">ENERGY REIMAGINED</span>
            </div>
          </motion.button>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link) => (
              <motion.button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className={`relative px-4 py-2 text-base font-medium transition-colors duration-300 rounded-md ${
                  activeSection === link.id ? "text-neon-red" : "text-white hover:text-neon-red hover:bg-white/5"
                }`}
                whileHover={{ y: -2 }}
                whileTap={{ y: 0 }}
              >
                {link.name}
                {activeSection === link.id && (
                  <motion.span
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-neon-red"
                    layoutId="navIndicator"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </motion.button>
            ))}
            <motion.a
              href="https://dl.flipkart.com/s/FXvojVuuuN"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-4 bg-gradient-to-r from-neon-red to-rose-500 hover:from-rose-500 hover:to-neon-red text-white px-6 py-2 rounded-full transition-all duration-300 shadow-lg shadow-neon-red/20 hover:shadow-neon-red/40"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Shop Online
            </motion.a>
          </nav>

          {/* Mobile Menu Button */}
          <motion.button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 text-white rounded-md hover:bg-white/10 transition-colors"
            whileTap={{ scale: 0.9 }}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="lg:hidden absolute top-full left-0 right-0 bg-black/95 backdrop-blur-lg border-t border-gray-800"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="container mx-auto px-4 py-4">
              <div className="flex flex-col space-y-1">
                {navLinks.map((link, index) => (
                  <motion.button
                    key={link.id}
                    onClick={() => scrollToSection(link.id)}
                    className={`py-3 px-4 text-left rounded-md ${
                      activeSection === link.id ? "bg-neon-red/10 text-neon-red" : "text-white hover:bg-white/5"
                    }`}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {link.name}
                  </motion.button>
                ))}
                <motion.a
                  href="https://dl.flipkart.com/s/FXvojVuuuN"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 bg-gradient-to-r from-neon-red to-rose-500 text-white py-3 px-4 rounded-md text-center font-medium"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: navLinks.length * 0.05 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Shop Online
                </motion.a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
