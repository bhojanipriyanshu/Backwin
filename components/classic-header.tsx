"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import Link from "next/link"

export default function ClassicHeader() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      const offsetTop = element.getBoundingClientRect().top + window.pageYOffset
      window.scrollTo({
        top: offsetTop - 80,
        behavior: "smooth",
      })
    }
  }

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-black/90 backdrop-blur-sm py-3 border-b border-neon-red/20" : "bg-black py-4"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center">
          <button onClick={() => scrollToSection("home")} className="flex items-center">
            <Image
              src="/images/backwin-lightning.png"
              alt="BackWin Logo"
              width={40}
              height={40}
              className="h-10 w-auto mr-3"
            />
            <span className="text-neon-red text-2xl font-bold">BackWin</span>
          </button>
        </div>

        <nav className="hidden md:flex items-center space-x-8">
          <button
            onClick={() => scrollToSection("home")}
            className="text-white hover:text-neon-red transition-colors duration-300"
          >
            Home
          </button>
          <button
            onClick={() => scrollToSection("products")}
            className="text-white hover:text-neon-red transition-colors duration-300"
          >
            Products
          </button>
          <button
            onClick={() => scrollToSection("about")}
            className="text-white hover:text-neon-red transition-colors duration-300"
          >
            About
          </button>
          <button
            onClick={() => scrollToSection("stores")}
            className="text-white hover:text-neon-red transition-colors duration-300"
          >
            Find Us
          </button>
          <button
            onClick={() => scrollToSection("shop")}
            className="text-white hover:text-neon-red transition-colors duration-300"
          >
            Shop
          </button>
          <Link
            href="https://dl.flipkart.com/s/FXvojVuuuN"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-neon-red hover:bg-neon-red/80 text-white px-6 py-2 rounded-md transition-colors duration-300"
          >
            Shop Online
          </Link>
        </nav>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-white p-2"
          onClick={() => document.getElementById("mobile-menu")?.classList.toggle("hidden")}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      <div id="mobile-menu" className="md:hidden hidden bg-black/95 py-4 border-t border-gray-800">
        <div className="container mx-auto px-4 flex flex-col space-y-3">
          <button
            onClick={() => {
              scrollToSection("home")
              document.getElementById("mobile-menu")?.classList.add("hidden")
            }}
            className="text-white hover:text-neon-red transition-colors duration-300 py-2"
          >
            Home
          </button>
          <button
            onClick={() => {
              scrollToSection("products")
              document.getElementById("mobile-menu")?.classList.add("hidden")
            }}
            className="text-white hover:text-neon-red transition-colors duration-300 py-2"
          >
            Products
          </button>
          <button
            onClick={() => {
              scrollToSection("about")
              document.getElementById("mobile-menu")?.classList.add("hidden")
            }}
            className="text-white hover:text-neon-red transition-colors duration-300 py-2"
          >
            About
          </button>
          <button
            onClick={() => {
              scrollToSection("stores")
              document.getElementById("mobile-menu")?.classList.add("hidden")
            }}
            className="text-white hover:text-neon-red transition-colors duration-300 py-2"
          >
            Find Us
          </button>
          <button
            onClick={() => {
              scrollToSection("shop")
              document.getElementById("mobile-menu")?.classList.add("hidden")
            }}
            className="text-white hover:text-neon-red transition-colors duration-300 py-2"
          >
            Shop
          </button>
          <Link
            href="https://dl.flipkart.com/s/FXvojVuuuN"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-neon-red hover:bg-neon-red/80 text-white px-6 py-2 rounded-md transition-colors duration-300 text-center"
          >
            Shop Online
          </Link>
        </div>
      </div>
    </motion.header>
  )
}
