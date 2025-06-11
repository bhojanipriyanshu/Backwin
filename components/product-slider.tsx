"use client"

import { useRef, useEffect } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { ChevronLeft, ChevronRight, ShoppingCart } from "lucide-react"
import { register } from "swiper/element/bundle"
import { cn } from "@/lib/utils"

// Register Swiper custom elements
register()

const products = [
  {
    id: 1,
    name: "Kingweiser Non-Alcoholic Beer",
    description: "Premium non-alcoholic beer with authentic taste",
    price: "₹80",
    image: "/images/kingwiser-beer.png",
    gradient: "from-rose-500/20 to-amber-500/20",
    borderGradient: "from-rose-500 to-amber-500",
  },
  {
    id: 2,
    name: "5000 Non-Alcoholic Beer",
    description: "Refreshing non-alcoholic beer with full flavor",
    price: "₹80",
    image: "/images/5000-beer.png",
    gradient: "from-amber-500/20 to-orange-500/20",
    borderGradient: "from-amber-500 to-orange-500",
  },
  {
    id: 3,
    name: "BackWin Energy Drink",
    description: "High-performance energy drink with natural ingredients",
    price: "₹60",
    image: "/images/energy-drink.png",
    gradient: "from-neon-red/20 to-rose-500/20",
    borderGradient: "from-neon-red to-rose-500",
  },
  {
    id: 4,
    name: "Limbu Goli Soda",
    description: "Refreshing lime-flavored traditional goli soda",
    price: "₹20",
    image: "/images/limbu-soda.png",
    gradient: "from-green-500/20 to-emerald-500/20",
    borderGradient: "from-green-500 to-emerald-500",
  },
  {
    id: 5,
    name: "Blue Berry Goli Soda",
    description: "Sweet and tangy blueberry-flavored goli soda",
    price: "₹20",
    image: "/images/blue-berry-soda.png",
    gradient: "from-blue-500/20 to-indigo-500/20",
    borderGradient: "from-blue-500 to-indigo-500",
  },
  {
    id: 6,
    name: "Mojito Goli Soda",
    description: "Mint and lime mojito-flavored goli soda",
    price: "₹20",
    image: "/images/mojito-soda.png",
    gradient: "from-teal-500/20 to-green-500/20",
    borderGradient: "from-teal-500 to-green-500",
  },
]

export default function ProductSlider() {
  const swiperRef = useRef(null)
  const prevRef = useRef(null)
  const nextRef = useRef(null)

  useEffect(() => {
    // Configure Swiper
    const swiperContainer = swiperRef.current

    const params = {
      slidesPerView: 1.2,
      spaceBetween: 20,
      loop: true,
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },
      navigation: {
        prevEl: prevRef.current,
        nextEl: nextRef.current,
      },
      breakpoints: {
        640: {
          slidesPerView: 2.2,
        },
        768: {
          slidesPerView: 3.2,
        },
        1024: {
          slidesPerView: 4.2,
        },
      },
      injectStyles: [
        `
          .swiper-pagination-bullet {
            background-color: rgba(255, 255, 255, 0.5);
          }
          .swiper-pagination-bullet-active {
            background-color: hsl(var(--neon-red));
          }
        `,
      ],
    }

    // Assign Swiper parameters
    Object.assign(swiperContainer, params)

    // Initialize Swiper
    swiperContainer.initialize()

    // Add event listeners for navigation
    if (prevRef.current && nextRef.current) {
      prevRef.current.addEventListener("click", () => {
        swiperContainer.swiper.slidePrev()
      })

      nextRef.current.addEventListener("click", () => {
        swiperContainer.swiper.slideNext()
      })
    }
  }, [])

  const openWhatsApp = (productName) => {
    const message = `Hi BackWin, I'm interested in purchasing ${productName}. Please provide more information.`
    const whatsappUrl = `https://wa.me/918160607668?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, "_blank")
  }

  return (
    <section id="shop" className="py-16 bg-gradient-to-b from-charcoal to-black relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Featured <span className="text-neon-red">Products</span>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Discover our premium selection of beverages crafted for exceptional taste and quality.
          </p>
        </div>

        <div className="relative">
          {/* Navigation Buttons */}
          <div className="absolute top-1/2 left-0 transform -translate-y-1/2 z-10 -ml-4 md:-ml-6">
            <button
              ref={prevRef}
              className="bg-black/50 backdrop-blur-sm border border-gray-800 hover:border-neon-red p-2 md:p-3 rounded-full text-white hover:text-neon-red transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-neon-red"
              aria-label="Previous product"
            >
              <ChevronLeft className="h-5 w-5 md:h-6 md:w-6" />
            </button>
          </div>

          <div className="absolute top-1/2 right-0 transform -translate-y-1/2 z-10 -mr-4 md:-mr-6">
            <button
              ref={nextRef}
              className="bg-black/50 backdrop-blur-sm border border-gray-800 hover:border-neon-red p-2 md:p-3 rounded-full text-white hover:text-neon-red transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-neon-red"
              aria-label="Next product"
            >
              <ChevronRight className="h-5 w-5 md:h-6 md:w-6" />
            </button>
          </div>

          {/* Swiper Slider */}
          <swiper-container ref={swiperRef} init="false" class="w-full overflow-visible py-8">
            {products.map((product) => (
              <swiper-slide key={product.id} class="h-auto">
                <ProductCard product={product} onBuy={openWhatsApp} />
              </swiper-slide>
            ))}
          </swiper-container>
        </div>
      </div>

      {/* Background Elements */}
      <div className="absolute top-1/3 left-0 w-64 h-64 bg-neon-red/10 rounded-full filter blur-[80px]"></div>
      <div className="absolute bottom-1/4 right-0 w-80 h-80 bg-neon-red/10 rounded-full filter blur-[100px]"></div>
    </section>
  )
}

function ProductCard({ product, onBuy }) {
  return (
    <motion.div
      className={cn(
        "bg-gradient-to-br from-black/80 to-charcoal-light rounded-2xl overflow-hidden h-full",
        "border border-transparent hover:border-opacity-100 transition-all duration-300 group",
        "shadow-lg hover:shadow-xl",
      )}
      style={{
        backgroundImage: `linear-gradient(to bottom right, rgba(0,0,0,0.9), rgba(30,30,30,0.9))`,
        borderImage: `linear-gradient(to bottom right, ${product.borderGradient.replace("from-", "").replace("to-", "")}) 1`,
      }}
      whileHover={{ y: -8, transition: { duration: 0.3 } }}
    >
      <div className={`p-1 h-full`}>
        <div className={`bg-gradient-to-br ${product.gradient} rounded-xl p-6 h-full flex flex-col`}>
          {/* Product Image */}
          <div className="relative h-48 mb-4 flex items-center justify-center">
            <motion.div
              className="relative z-10"
              whileHover={{ scale: 1.05, rotate: [-1, 1, -1, 1, 0], transition: { duration: 0.5 } }}
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
            <h3 className="font-bold text-lg mb-1 text-white group-hover:text-neon-red transition-colors duration-300">
              {product.name}
            </h3>
            <p className="text-gray-400 text-sm mb-3 line-clamp-2">{product.description}</p>
            <div className="text-neon-red font-bold text-xl mb-4">{product.price}</div>
          </div>

          {/* Buy Button */}
          <motion.button
            className="w-full bg-black/30 hover:bg-neon-red/90 text-white py-2 rounded-lg flex items-center justify-center transition-colors duration-300"
            onClick={() => onBuy(product.name)}
            whileTap={{ scale: 0.95 }}
          >
            <ShoppingCart className="mr-2 h-4 w-4" /> Add to Cart
          </motion.button>
        </div>
      </div>
    </motion.div>
  )
}
