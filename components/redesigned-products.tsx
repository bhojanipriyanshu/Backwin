"use client"

import { useState, useRef, useEffect } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronRight, ChevronLeft, ShoppingCart } from "lucide-react"

const categories = [
  {
    id: "beer",
    name: "Non-Alcoholic Beer",
    description:
      "All the taste, none of the alcohol. Our premium non-alcoholic beers deliver authentic flavor without the buzz.",
    products: [
      {
        id: "kingweiser",
        name: "Kingweiser",
        tagline: "Premium Non-Alcoholic",
        price: "₹80",
        image: "/images/kingwiser-beer.png",
        color: "from-rose-500/20 to-amber-500/20",
        borderGradient: "from-rose-500 to-amber-500",
      },
      {
        id: "5000",
        name: "5000 Beer",
        tagline: "Refreshing Zero Alcohol",
        price: "₹80",
        image: "/images/5000-beer.png",
        color: "from-amber-500/20 to-orange-500/20",
        borderGradient: "from-amber-500 to-orange-500",
      },
    ],
  },
  {
    id: "soda",
    name: "Goli Soda",
    description:
      "Our take on the classic goli soda, reimagined with premium ingredients and exciting flavor combinations.",
    products: [
      {
        id: "limbu",
        name: "Limbu",
        tagline: "Zesty Lime Flavor",
        price: "₹20",
        image: "/images/limbu-soda.png",
        color: "from-green-500/20 to-emerald-500/20",
        borderGradient: "from-green-500 to-emerald-500",
      },
      {
        id: "blueberry",
        name: "Blue Berry",
        tagline: "Sweet & Tangy",
        price: "₹20",
        image: "/images/blue-berry-soda.png",
        color: "from-blue-500/20 to-indigo-500/20",
        borderGradient: "from-blue-500 to-indigo-500",
      },
      {
        id: "mojito",
        name: "Mojito",
        tagline: "Mint & Lime Fusion",
        price: "₹20",
        image: "/images/mojito-soda.png",
        color: "from-teal-500/20 to-green-500/20",
        borderGradient: "from-teal-500 to-green-500",
      },
    ],
  },
  {
    id: "energy",
    name: "Energy Drinks",
    description: "Clean, sustained energy without the jitters or crash. Made with natural caffeine and B vitamins.",
    products: [
      {
        id: "energy",
        name: "BackWin Energy",
        tagline: "Sustained Power Boost",
        price: "₹60",
        image: "/images/energy-drink.png",
        color: "from-neon-red/20 to-rose-500/20",
        borderGradient: "from-neon-red to-rose-500",
      },
    ],
  },
]

export default function RedesignedProducts() {
  const [activeCategory, setActiveCategory] = useState("beer")
  const [isHovering, setIsHovering] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(true)

  const checkScrollButtons = () => {
    if (containerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = containerRef.current
      setCanScrollLeft(scrollLeft > 0)
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10)
    }
  }

  useEffect(() => {
    checkScrollButtons()
    window.addEventListener("resize", checkScrollButtons)
    return () => window.removeEventListener("resize", checkScrollButtons)
  }, [activeCategory])

  const scroll = (direction: "left" | "right") => {
    if (containerRef.current) {
      const scrollAmount = 300
      const newScrollLeft =
        direction === "left"
          ? containerRef.current.scrollLeft - scrollAmount
          : containerRef.current.scrollLeft + scrollAmount

      containerRef.current.scrollTo({
        left: newScrollLeft,
        behavior: "smooth",
      })

      setTimeout(checkScrollButtons, 500)
    }
  }

  const openWhatsApp = (productName: string) => {
    const message = `Hi BackWin, I'm interested in purchasing ${productName}. Please provide more information.`
    const whatsappUrl = `https://wa.me/918160607668?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, "_blank")
  }

  const activeProducts = categories.find((c) => c.id === activeCategory)?.products || []

  return (
    <section id="products" className="py-24 bg-gradient-to-b from-black to-charcoal relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/3 right-0 w-96 h-96 bg-neon-red/10 rounded-full filter blur-[120px] animate-glow-pulse"></div>
        <div className="absolute bottom-1/4 left-10 w-[500px] h-[500px] bg-neon-red/10 rounded-full filter blur-[150px] animate-glow-pulse"></div>
      </div>

      <div className="container mx-auto px-4">
        {/* Section heading */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6 relative inline-block">
            <span className="bg-gradient-to-r from-white via-neon-red to-white bg-clip-text text-transparent">
              Discover Our Products
            </span>
            <motion.div
              className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-neon-red to-transparent"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.6 }}
            />
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto text-lg">
            Premium beverages crafted with precision and passion for exceptional taste and quality.
          </p>
        </motion.div>

        {/* Category tabs */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex p-1 bg-black/30 backdrop-blur-sm rounded-full border border-gray-800 shadow-lg">
            {categories.map((category) => (
              <motion.button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`relative px-6 py-3 rounded-full text-base font-medium transition-all duration-300 ${
                  activeCategory === category.id ? "text-white" : "text-white/70 hover:text-white"
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {activeCategory === category.id && (
                  <motion.div
                    layoutId="activeCategoryTab"
                    className="absolute inset-0 bg-gradient-to-r from-neon-red to-rose-500 rounded-full"
                    initial={false}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{category.name}</span>
              </motion.button>
            ))}
          </div>
        </div>

        {/* Category description */}
        <AnimatePresence mode="wait">
          {categories.map(
            (category) =>
              activeCategory === category.id && (
                <motion.div
                  key={`desc-${category.id}`}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="text-center mb-10 max-w-2xl mx-auto"
                >
                  <p className="text-gray-300 text-lg">{category.description}</p>
                </motion.div>
              ),
          )}
        </AnimatePresence>

        {/* Products showcase with horizontal scroll */}
        <div
          className="relative mt-8"
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
        >
          {/* Scroll buttons */}
          <AnimatePresence>
            {canScrollLeft && isHovering && (
              <motion.button
                onClick={() => scroll("left")}
                className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-black/70 hover:bg-neon-red/80 text-white p-3 rounded-full shadow-lg"
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 10 }}
                transition={{ duration: 0.2 }}
                aria-label="Scroll left"
              >
                <ChevronLeft size={24} />
              </motion.button>
            )}
          </AnimatePresence>

          <AnimatePresence>
            {canScrollRight && isHovering && (
              <motion.button
                onClick={() => scroll("right")}
                className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-black/70 hover:bg-neon-red/80 text-white p-3 rounded-full shadow-lg"
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -10 }}
                transition={{ duration: 0.2 }}
                aria-label="Scroll right"
              >
                <ChevronRight size={24} />
              </motion.button>
            )}
          </AnimatePresence>

          {/* Products container */}
          <div
            ref={containerRef}
            className="flex overflow-x-auto pb-8 pt-4 px-4 -mx-4 scrollbar-hide snap-x snap-mandatory"
            onScroll={checkScrollButtons}
          >
            <AnimatePresence mode="wait">
              {activeProducts.map((product, index) => (
                <motion.div
                  key={`${activeCategory}-${product.id}`}
                  className="min-w-[280px] sm:min-w-[320px] md:min-w-[350px] snap-center mx-4 first:ml-auto last:mr-auto"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <div className="bg-gradient-to-br from-black/80 to-charcoal-light rounded-2xl overflow-hidden h-full border border-transparent hover:border-opacity-100 transition-all duration-300 group shadow-lg hover:shadow-xl">
                    <div className={`p-1 h-full`}>
                      <div className={`bg-gradient-to-br ${product.color} rounded-xl p-6 h-full flex flex-col`}>
                        {/* Product Image */}
                        <div className="relative h-48 mb-6 flex items-center justify-center">
                          <motion.div
                            className="relative z-10"
                            whileHover={{
                              scale: 1.05,
                              rotate: [-1, 1, -1, 1, 0],
                              transition: { duration: 0.5 },
                            }}
                          >
                            <Image
                              src={product.image || "/placeholder.svg"}
                              alt={product.name}
                              width={150}
                              height={300}
                              className="h-full w-auto object-contain max-h-48 drop-shadow-[0_5px_15px_rgba(255,51,102,0.3)] group-hover:drop-shadow-[0_10px_25px_rgba(255,51,102,0.5)] transition-all duration-300"
                            />
                          </motion.div>

                          {/* Glow effect */}
                          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-24 h-6 bg-neon-red/20 rounded-full filter blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        </div>

                        {/* Product Info */}
                        <div className="flex-grow">
                          <h3 className="font-bold text-xl mb-1 text-white group-hover:text-neon-red transition-colors duration-300">
                            {product.name}
                          </h3>
                          <p className="text-gray-400 text-sm mb-2">{product.tagline}</p>
                          <div className="text-neon-red font-bold text-xl mb-4">{product.price}</div>
                        </div>

                        {/* Buy Button */}
                        <motion.button
                          className="w-full bg-gradient-to-r from-neon-red to-rose-500 hover:from-rose-500 hover:to-neon-red text-white py-3 rounded-lg flex items-center justify-center transition-colors duration-300 shadow-lg shadow-neon-red/20 hover:shadow-neon-red/40"
                          onClick={() => openWhatsApp(product.name)}
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          <ShoppingCart className="mr-2 h-4 w-4" /> Add to Cart
                        </motion.button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {/* Scroll indicators */}
          <div className="flex justify-center mt-4 space-x-2">
            {Array.from({ length: Math.ceil(activeProducts.length / 3) }).map((_, i) => (
              <div
                key={i}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  i === 0 ? "w-8 bg-neon-red" : "w-2 bg-gray-600"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
