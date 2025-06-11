"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { Instagram, Twitter, Facebook, Mail, Phone, ArrowRight } from "lucide-react"

export default function Footer() {
  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    if (element) {
      const offsetTop = element.getBoundingClientRect().top + window.pageYOffset
      window.scrollTo({
        top: offsetTop - 80,
        behavior: "smooth",
      })
    }
  }

  const navLinks = [
    { name: "Home", id: "home" },
    { name: "Products", id: "products" },
    { name: "About", id: "about" },
    { name: "Find Us", id: "stores" },
  ]

  // Enhanced product links with specific section targeting
  const productLinks = [
    { name: "Non-Alcoholic Beer", id: "products", param: "beer" },
    { name: "Goli Soda", id: "products", param: "soda" },
    { name: "Energy Drinks", id: "products", param: "energy" },
    { name: "Online Store", external: "https://dl.flipkart.com/s/FXvojVuuuN" },
  ]

  // Function to handle product navigation with specific tab selection
  const navigateToProduct = (id, param) => {
    // First scroll to the products section
    scrollToSection(id)

    // Then set the active tab via a custom event
    setTimeout(() => {
      const event = new CustomEvent("setActiveTab", { detail: param })
      document.dispatchEvent(event)
    }, 800) // Delay to ensure scroll completes first
  }

  return (
    <footer className="bg-gradient-to-b from-charcoal to-black pt-16 pb-8 relative overflow-hidden">
      {/* Enhanced background effects */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-neon-red/10 rounded-full filter blur-[120px] animate-glow-pulse"></div>
        <div className="absolute bottom-1/3 right-1/4 w-[500px] h-[500px] bg-neon-red/10 rounded-full filter blur-[150px] animate-glow-pulse"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          <div>
            <button onClick={() => scrollToSection("home")} className="inline-block mb-6">
              <div className="flex items-center">
                <Image
                  src="/images/backwin-lightning.png"
                  alt="BackWin Logo"
                  width={80}
                  height={40}
                  className="h-16 w-auto mr-3"
                />
                <span className="text-3xl font-bold text-neon-red glow-text-red">BackWin</span>
              </div>
            </button>
            <p className="text-gray-300 mb-6">
              Premium beverages crafted to fuel your comeback and elevate every moment.
            </p>
            <div className="flex space-x-4">
              <motion.a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-charcoal-light p-2 rounded-full text-gray-300 hover:text-neon-red transition-colors duration-300 border border-transparent hover:border-neon-red/50"
                whileHover={{ scale: 1.2, boxShadow: "0 0 15px rgba(255, 51, 102, 0.5)" }}
              >
                <Instagram className="h-5 w-5" />
              </motion.a>
              <motion.a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-charcoal-light p-2 rounded-full text-gray-300 hover:text-neon-red transition-colors duration-300 border border-transparent hover:border-neon-red/50"
                whileHover={{ scale: 1.2, boxShadow: "0 0 15px rgba(255, 51, 102, 0.5)" }}
              >
                <Twitter className="h-5 w-5" />
              </motion.a>
              <motion.a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-charcoal-light p-2 rounded-full text-gray-300 hover:text-neon-red transition-colors duration-300 border border-transparent hover:border-neon-red/50"
                whileHover={{ scale: 1.2, boxShadow: "0 0 15px rgba(255, 51, 102, 0.5)" }}
              >
                <Facebook className="h-5 w-5" />
              </motion.a>
            </div>
          </div>

          <div>
            <h3 className="text-white font-bold text-xl mb-6 heading-highlight">Quick Links</h3>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <motion.button
                    onClick={() => scrollToSection(link.id)}
                    className="text-gray-300 hover:text-neon-red transition-colors duration-300 flex items-center group"
                    whileHover={{ x: 5 }}
                  >
                    <ArrowRight className="h-4 w-4 mr-2 text-neon-red group-hover:scale-125 transition-transform" />
                    {link.name}
                  </motion.button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold text-xl mb-6 heading-highlight">Products</h3>
            <ul className="space-y-3">
              {productLinks.map((link) => (
                <li key={link.name}>
                  {link.external ? (
                    <motion.a
                      href={link.external}
                      className="text-gray-300 hover:text-neon-red transition-colors duration-300 flex items-center group"
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ x: 5 }}
                    >
                      <ArrowRight className="h-4 w-4 mr-2 text-neon-red group-hover:scale-125 transition-transform" />
                      {link.name}
                    </motion.a>
                  ) : (
                    <motion.button
                      onClick={() => navigateToProduct(link.id, link.param)}
                      className="text-gray-300 hover:text-neon-red transition-colors duration-300 flex items-center group"
                      whileHover={{ x: 5 }}
                    >
                      <ArrowRight className="h-4 w-4 mr-2 text-neon-red group-hover:scale-125 transition-transform" />
                      {link.name}
                    </motion.button>
                  )}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold text-xl mb-6 heading-highlight">Contact Us</h3>
            <ul className="space-y-4">
              <li>
                <motion.a
                  href="mailto:backwinindia@gmail.com"
                  className="flex items-center text-gray-300 hover:text-neon-red transition-colors duration-300 group"
                  whileHover={{ x: 5 }}
                >
                  <Mail className="h-5 w-5 mr-3 text-neon-red group-hover:scale-110 transition-transform" />
                  backwinindia@gmail.com
                </motion.a>
              </li>
              <li>
                <motion.a
                  href="https://wa.me/918160607668"
                  className="flex items-center text-gray-300 hover:text-neon-red transition-colors duration-300 group"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ x: 5 }}
                >
                  <Phone className="h-5 w-5 mr-3 text-neon-red group-hover:scale-110 transition-transform" />
                  +91 8160607668
                </motion.a>
              </li>
            </ul>
            <div className="mt-6">
              <h4 className="text-white mb-3 font-medium">Subscribe to our newsletter</h4>
              <div className="flex gradient-border">
                <input
                  type="email"
                  placeholder="Your email"
                  className="bg-black/50 rounded-l-md px-4 py-2 text-white w-full focus:outline-none"
                />
                <button className="bg-neon-red hover:bg-neon-red/80 text-white px-4 py-2 rounded-r-md">
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-center md:text-left mb-4 md:mb-0">
              © {new Date().getFullYear()} BackWin Beverages. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <Link href="/privacy-policy" className="text-gray-400 hover:text-neon-red transition-colors duration-300">
                Privacy Policy
              </Link>
              <Link href="/privacy-policy" className="text-gray-400 hover:text-neon-red transition-colors duration-300">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
