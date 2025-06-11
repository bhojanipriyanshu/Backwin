"use client"

import { useRef, useState, useEffect } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronRight, ChevronLeft } from "lucide-react"

const beerProducts = [
  {
    id: "kingweiser",
    name: "Kingweiser",
    description: "Premium non-alcoholic beer with authentic taste and zero alcohol content.",
    image: "/images/kingwiser-beer.png",
  },
  {
    id: "5000",
    name: "5000 Beer",
    description: "A refreshing non-alcoholic beer that delivers full flavor without the alcohol.",
    image: "/images/5000-beer.png",
  },
]

const sodaProducts = [
  {
    id: "limbu",
    name: "Limbu",
    description: "Refreshing lime-flavored traditional goli soda with a zesty kick.",
    image: "/images/limbu-soda.png",
  },
  {
    id: "blueberry",
    name: "Blue Berry",
    description: "Sweet and tangy blueberry-flavored goli soda for a fruity refreshment.",
    image: "/images/blue-berry-soda.png",
  },
  {
    id: "mojito",
    name: "Mojito",
    description: "Mint and lime mojito-flavored goli soda for a refreshing twist.",
    image: "/images/mojito-soda.png",
  },
]

const products = [
  {
    id: "beer",
    name: "Non-Alcoholic Beer",
    tagline: "Full Flavor. Zero Alcohol.",
    description:
      "All the taste, none of the alcohol. Our non-alcoholic beers are brewed with premium ingredients for authentic flavor without the buzz.",
    flavors: ["Kingweiser", "5000 Beer"],
    color: "neon-red",
    variants: beerProducts,
  },
  {
    id: "soda",
    name: "Goli Soda",
    tagline: "Traditional Fizz. Modern Twist.",
    description:
      "Our take on the classic goli soda, reimagined with premium ingredients and exciting flavor combinations that pack a refreshing punch.",
    flavors: ["Limbu", "Blue Berry", "Mojito"],
    color: "neon-red",
    variants: sodaProducts,
  },
  {
    id: "energy",
    name: "Energy Drinks",
    tagline: "Sustained Power. Zero Crash.",
    description:
      "Our energy drinks deliver clean, sustained energy without the jitters or crash. Made with natural caffeine, B vitamins, and adaptogens.",
    flavors: ["Classic", "Berry Blast", "Citrus Surge"],
    color: "neon-red",
    image: "/images/energy-drink.png",
  },
]

export default function ProductShowcase() {
  const sectionRef = useRef(null)
  const tabsListRef = useRef(null)
  const [selectedBeer, setSelectedBeer] = useState("kingweiser")
  const [selectedSoda, setSelectedSoda] = useState("limbu")
  const [activeTab, setActiveTab] = useState("beer")
  const [showScrollButtons, setShowScrollButtons] = useState(false)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(false)

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      const offsetTop = element.getBoundingClientRect().top + window.pageYOffset
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      })
    }
  }

  const handleTabChange = (value) => {
    setActiveTab(value)
  }

  // Listen for custom event from footer to set active tab
  useEffect(() => {
    const handleSetActiveTab = (event) => {
      if (event.detail && products.some((p) => p.id === event.detail)) {
        setActiveTab(event.detail)
      }
    }

    document.addEventListener("setActiveTab", handleSetActiveTab)
    return () => {
      document.removeEventListener("setActiveTab", handleSetActiveTab)
    }
  }, [])

  // Check if we need scroll buttons for the tabs
  useEffect(() => {
    const checkScroll = () => {
      if (!tabsListRef.current) return

      const { scrollWidth, clientWidth, scrollLeft } = tabsListRef.current

      // Show scroll buttons if content is wider than container
      setShowScrollButtons(scrollWidth > clientWidth)

      // Check if we can scroll left or right
      setCanScrollLeft(scrollLeft > 0)
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth)
    }

    // Initial check
    checkScroll()

    // Add event listeners
    window.addEventListener("resize", checkScroll)
    if (tabsListRef.current) {
      tabsListRef.current.addEventListener("scroll", checkScroll)
    }

    // Cleanup
    return () => {
      window.removeEventListener("resize", checkScroll)
      if (tabsListRef.current) {
        tabsListRef.current.removeEventListener("scroll", checkScroll)
      }
    }
  }, [tabsListRef.current])

  // Scroll the tabs left or right
  const scrollTabs = (direction) => {
    if (!tabsListRef.current) return

    const scrollAmount = 200 // Adjust as needed
    const currentScroll = tabsListRef.current.scrollLeft

    tabsListRef.current.scrollTo({
      left: direction === "left" ? currentScroll - scrollAmount : currentScroll + scrollAmount,
      behavior: "smooth",
    })
  }

  // Original product variants
  const productVariants = {
    hover: {
      scale: 1.05,
      filter: "drop-shadow(0 0 15px rgba(255, 51, 102, 0.3))",
      transition: {
        duration: 0.3,
      },
    },
  }

  const flavorButtonVariants = {
    inactive: {
      scale: 1,
      background: "linear-gradient(to right, rgba(255, 51, 102, 0.1), rgba(255, 51, 102, 0.2))",
    },
    active: {
      scale: 1.05,
      background: "linear-gradient(to right, rgba(255, 51, 102, 0.8), rgba(255, 51, 102, 1))",
      boxShadow: "0 0 15px rgba(255, 51, 102, 0.5)",
      transition: { duration: 0.3 },
    },
    hover: {
      scale: 1.05,
      transition: { duration: 0.2 },
    },
  }

  return (
    <section
      id="products"
      ref={sectionRef}
      className="py-24 bg-gradient-to-b from-black to-charcoal relative overflow-hidden"
    >
      {/* Enhanced background effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/3 right-0 w-96 h-96 bg-neon-red/10 rounded-full filter blur-[120px] animate-glow-pulse"></div>
        <div className="absolute bottom-1/4 left-10 w-[500px] h-[500px] bg-neon-red/10 rounded-full filter blur-[150px] animate-glow-pulse"></div>
      </div>

      <div className="container mx-auto px-4">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-bold mb-4 relative z-10 tracking-tight heading-highlight">
            Our <span className="text-neon-red glow-text-red">Premium</span> Products
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto text-lg">
            Crafted with precision and passion, our beverages deliver exceptional taste and quality in every sip.
          </p>
        </div>

        {/* Responsive tab navigation with scroll buttons */}
        <div className="relative mb-16">
          {/* Left scroll button */}
          {showScrollButtons && (
            <button
              onClick={() => scrollTabs("left")}
              className={`absolute left-0 top-1/2 transform -translate-y-1/2 z-10 p-2 rounded-full bg-black/70 border border-gray-800 text-white transition-opacity duration-300 hover:border-neon-red hover:text-neon-red ${
                canScrollLeft ? "opacity-100" : "opacity-0 pointer-events-none"
              }`}
              aria-label="Scroll tabs left"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
          )}

          {/* Scrollable tabs container */}
          <div
            className="flex justify-center overflow-x-auto scrollbar-hide"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            <div
              ref={tabsListRef}
              className="flex h-14 p-1 bg-charcoal-light/50 rounded-xl border border-gray-800 overflow-hidden min-w-0 scrollbar-hide gradient-border"
              style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
            >
              {products.map((product) => (
                <button
                  key={product.id}
                  onClick={() => handleTabChange(product.id)}
                  className={`
                    relative h-full min-w-[120px] sm:min-w-[160px] px-4 sm:px-6 py-0 text-base sm:text-lg font-medium transition-all duration-300
                    ${activeTab === product.id ? "text-neon-red bg-black/40 glow-text-red" : "text-white hover:text-neon-red"}
                    flex items-center justify-center whitespace-nowrap
                  `}
                >
                  {product.name}
                  {/* Smooth, centered red glow/border for active tab */}
                  <span
                    className={`
                      absolute bottom-0 left-1/2 transform -translate-x-1/2 h-0.5 bg-neon-red
                      transition-all duration-300 rounded-full
                      ${activeTab === product.id ? "w-2/3 opacity-100 shadow-[0_0_8px_rgba(255,51,102,0.8)]" : "w-0 opacity-0"}
                    `}
                  ></span>
                </button>
              ))}
            </div>
          </div>

          {/* Right scroll button */}
          {showScrollButtons && (
            <button
              onClick={() => scrollTabs("right")}
              className={`absolute right-0 top-1/2 transform -translate-y-1/2 z-10 p-2 rounded-full bg-black/70 border border-gray-800 text-white transition-opacity duration-300 hover:border-neon-red hover:text-neon-red ${
                canScrollRight ? "opacity-100" : "opacity-0 pointer-events-none"
              }`}
              aria-label="Scroll tabs right"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          )}
        </div>

        {/* Product Content */}
        <AnimatePresence mode="wait">
          {products.map(
            (product) =>
              activeTab === product.id && (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                  className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
                >
                  <div className="order-2 lg:order-1">
                    <span className="text-neon-red text-xl font-bold mb-2 inline-block glow-text-red">
                      {product.name}
                    </span>
                    <h3 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight heading-highlight">
                      {product.tagline}
                    </h3>
                    <p className="text-gray-300 mb-8 text-lg leading-relaxed">{product.description}</p>

                    {product.id !== "energy" && (
                      <div className="mb-10">
                        <h5 className="text-white font-semibold mb-4 text-lg">Available Flavors:</h5>
                        <div className="flex flex-wrap gap-3">
                          {product.flavors.map((flavor, index) => (
                            <motion.button
                              key={index}
                              className={`
                                px-6 py-3 rounded-full text-base font-medium transition-all duration-300
                                ${
                                  (product.id === "beer" && selectedBeer === product.variants[index].id) ||
                                  (product.id === "soda" && selectedSoda === product.variants[index].id)
                                    ? "text-white shadow-lg"
                                    : "text-white/90"
                                }
                              `}
                              onClick={() => {
                                if (product.id === "beer") {
                                  setSelectedBeer(product.variants[index].id)
                                } else if (product.id === "soda") {
                                  setSelectedSoda(product.variants[index].id)
                                }
                              }}
                              variants={flavorButtonVariants}
                              animate={
                                (product.id === "beer" && selectedBeer === product.variants[index].id) ||
                                (product.id === "soda" && selectedSoda === product.variants[index].id)
                                  ? "active"
                                  : "inactive"
                              }
                              whileHover="hover"
                              whileTap={{ scale: 0.95 }}
                            >
                              {flavor}
                            </motion.button>
                          ))}
                        </div>
                      </div>
                    )}

                    <motion.button
                      className="bg-neon-red hover:bg-neon-red/80 text-white px-8 py-4 text-lg rounded-full group relative overflow-hidden focus:outline-none btn-highlight"
                      onClick={() => scrollToSection("shop")}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></span>
                      <span className="relative flex items-center">
                        Shop {product.name}
                        <ChevronRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                      </span>
                    </motion.button>
                  </div>

                  <div className="order-1 lg:order-2 flex justify-center">
                    {product.id === "beer" && (
                      <div className="relative w-64 h-[500px] flex items-center justify-center">
                        <div className="absolute bottom-0 w-40 h-20 bg-neon-red/30 rounded-full filter blur-xl animate-glow-pulse"></div>
                        <AnimatePresence mode="wait">
                          {beerProducts.map(
                            (beer) =>
                              selectedBeer === beer.id && (
                                <motion.div
                                  key={beer.id}
                                  initial={{ opacity: 0 }}
                                  animate={{ opacity: 1 }}
                                  exit={{ opacity: 0 }}
                                  whileHover="hover"
                                  variants={productVariants}
                                  className="absolute"
                                >
                                  <Image
                                    src={beer.image || "/placeholder.svg"}
                                    alt={beer.name}
                                    width={300}
                                    height={600}
                                    className="h-full object-contain z-10 drop-shadow-[0_0_15px_rgba(255,51,102,0.4)]"
                                    priority
                                  />
                                </motion.div>
                              ),
                          )}
                        </AnimatePresence>
                      </div>
                    )}

                    {product.id === "soda" && (
                      <div className="relative w-full h-[550px] flex items-center justify-center">
                        <div className="absolute bottom-0 w-60 h-32 bg-neon-red/30 rounded-full filter blur-xl animate-glow-pulse"></div>
                        <AnimatePresence mode="wait">
                          {sodaProducts.map(
                            (soda) =>
                              selectedSoda === soda.id && (
                                <motion.div
                                  key={soda.id}
                                  initial={{ opacity: 0 }}
                                  animate={{ opacity: 1 }}
                                  exit={{ opacity: 0 }}
                                  whileHover="hover"
                                  variants={productVariants}
                                  className="absolute"
                                >
                                  <Image
                                    src={soda.image || "/placeholder.svg"}
                                    alt={soda.name}
                                    width={350}
                                    height={700}
                                    className="h-full object-contain z-10 max-h-[550px] scale-125 drop-shadow-[0_0_20px_rgba(255,51,102,0.5)]"
                                    priority
                                  />
                                </motion.div>
                              ),
                          )}
                        </AnimatePresence>
                      </div>
                    )}

                    {product.id === "energy" && (
                      <div className="relative w-64 h-[500px] flex items-center justify-center">
                        <div className="absolute bottom-0 w-40 h-20 bg-neon-red/30 rounded-full filter blur-xl animate-glow-pulse"></div>
                        <motion.div whileHover="hover" variants={productVariants}>
                          <Image
                            src={product.image || "/placeholder.svg"}
                            alt="BackWin Energy Drink"
                            width={300}
                            height={600}
                            className="h-full object-contain z-10 drop-shadow-[0_0_15px_rgba(255,51,102,0.4)]"
                            priority
                          />
                        </motion.div>
                      </div>
                    )}
                  </div>
                </motion.div>
              ),
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}
