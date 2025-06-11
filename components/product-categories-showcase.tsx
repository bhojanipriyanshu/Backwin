"use client"

import { useState } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronRight } from "lucide-react"

const categories = [
  {
    id: "beer",
    name: "Non-Alcoholic Beer",
    description:
      "All the taste, none of the alcohol. Our non-alcoholic beers are brewed with premium ingredients for authentic flavor without the buzz.",
    products: [
      {
        id: "kingweiser",
        name: "Kingweiser",
        image: "/images/kingwiser-beer.png",
      },
      {
        id: "5000",
        name: "5000 Beer",
        image: "/images/5000-beer.png",
      },
    ],
  },
  {
    id: "soda",
    name: "Goli Soda",
    description:
      "Our take on the classic goli soda, reimagined with premium ingredients and exciting flavor combinations that pack a refreshing punch.",
    products: [
      {
        id: "limbu",
        name: "Limbu",
        image: "/images/limbu-soda.png",
      },
      {
        id: "blueberry",
        name: "Blue Berry",
        image: "/images/blue-berry-soda.png",
      },
      {
        id: "mojito",
        name: "Mojito",
        image: "/images/mojito-soda.png",
      },
    ],
  },
  {
    id: "energy",
    name: "Energy Drinks",
    description:
      "Our energy drinks deliver clean, sustained energy without the jitters or crash. Made with natural caffeine, B vitamins, and adaptogens.",
    products: [
      {
        id: "energy",
        name: "BackWin Energy",
        image: "/images/energy-drink.png",
      },
    ],
  },
]

export default function ProductCategoriesShowcase() {
  const [activeCategory, setActiveCategory] = useState("beer")

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="products" className="py-24 bg-gradient-to-b from-black to-charcoal relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/3 right-0 w-96 h-96 bg-neon-red/10 rounded-full filter blur-[120px] animate-glow-pulse"></div>
        <div className="absolute bottom-1/4 left-10 w-[500px] h-[500px] bg-neon-red/10 rounded-full filter blur-[150px] animate-glow-pulse"></div>
      </div>

      <div className="container mx-auto px-4">
        {/* Section heading with enhanced styling */}
        <div className="text-center mb-16">
          <h2 className="relative inline-block text-4xl md:text-6xl font-bold mb-6">
            <span className="text-white">Our </span>
            <span className="text-neon-red relative">
              Premium
              <span className="absolute -bottom-2 left-0 w-full h-1 bg-neon-red"></span>
            </span>
            <span className="text-white"> Products</span>
            <div className="absolute -z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[120%] h-[130%] bg-neon-red/5 rounded-full filter blur-[30px]"></div>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto text-lg">
            Crafted with precision and passion, our beverages deliver exceptional taste and quality in every sip.
          </p>
        </div>

        {/* Category tabs */}
        <div className="flex justify-center mb-16">
          <div className="inline-flex p-1 bg-black/30 backdrop-blur-sm rounded-full border border-gray-800">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`relative px-6 py-3 rounded-full text-base font-medium transition-all duration-300 ${
                  activeCategory === category.id ? "text-white" : "text-white/70 hover:text-white"
                }`}
              >
                {activeCategory === category.id && (
                  <motion.div
                    layoutId="activeCategoryTab"
                    className="absolute inset-0 bg-neon-red rounded-full"
                    initial={false}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{category.name}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Category content */}
        <AnimatePresence mode="wait">
          {categories.map(
            (category) =>
              activeCategory === category.id && (
                <motion.div
                  key={category.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="mb-12">
                    <h3 className="text-neon-red text-2xl font-bold mb-4">{category.name}</h3>
                    <p className="text-gray-300 max-w-3xl mb-8">{category.description}</p>
                    <motion.button
                      className="bg-neon-red hover:bg-neon-red/80 text-white px-6 py-3 rounded-full inline-flex items-center"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => scrollToSection("shop")}
                    >
                      Explore {category.name}
                      <ChevronRight className="ml-2 h-5 w-5" />
                    </motion.button>
                  </div>

                  {/* Product grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {category.products.map((product) => (
                      <motion.div
                        key={product.id}
                        className="bg-black/40 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-800 hover:border-neon-red transition-colors duration-300"
                        whileHover={{ y: -10, transition: { duration: 0.3 } }}
                      >
                        <div className="p-6 flex flex-col items-center">
                          <div className="relative h-64 w-full flex items-center justify-center mb-6">
                            <div className="absolute bottom-0 w-32 h-16 bg-neon-red/20 rounded-full filter blur-xl"></div>
                            <motion.div
                              whileHover={{ scale: 1.05, rotate: [-1, 1, -1, 1, 0], transition: { duration: 0.5 } }}
                            >
                              <Image
                                src={product.image || "/placeholder.svg"}
                                alt={product.name}
                                width={150}
                                height={300}
                                className="h-full w-auto object-contain max-h-60 drop-shadow-[0_5px_15px_rgba(255,51,102,0.3)]"
                              />
                            </motion.div>
                          </div>
                          <h4 className="text-xl font-bold text-white mb-2">{product.name}</h4>
                          <motion.button
                            className="mt-4 bg-transparent border border-neon-red text-neon-red hover:bg-neon-red/10 px-4 py-2 rounded-full text-sm"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => scrollToSection("shop")}
                          >
                            View Details
                          </motion.button>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              ),
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}
