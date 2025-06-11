"use client"

import { useRef, useEffect } from "react"
import Image from "next/image"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { ShoppingCart } from "lucide-react"
import { motion } from "framer-motion"

gsap.registerPlugin(ScrollTrigger)

const products = [
  {
    id: 1,
    name: "Kingweiser Non-Alcoholic Beer",
    description: "Premium non-alcoholic beer with authentic taste",
    price: "₹80",
    image: "/images/kingwiser-beer.png",
    category: "beer",
  },
  {
    id: 2,
    name: "5000 Non-Alcoholic Beer",
    description: "Refreshing non-alcoholic beer with full flavor",
    price: "₹80",
    image: "/images/5000-beer.png",
    category: "beer",
  },
  {
    id: 3,
    name: "BackWin Energy Drink",
    description: "High-performance energy drink with natural ingredients",
    price: "₹60",
    image: "/images/energy-drink.png",
    category: "energy",
  },
  {
    id: 4,
    name: "Limbu Goli Soda",
    description: "Refreshing lime-flavored traditional goli soda",
    price: "₹20",
    image: "/images/limbu-soda.png",
    category: "soda",
  },
  {
    id: 5,
    name: "Blue Berry Goli Soda",
    description: "Sweet and tangy blueberry-flavored goli soda",
    price: "₹20",
    image: "/images/blue-berry-soda.png",
    category: "soda",
  },
  {
    id: 6,
    name: "Mojito Goli Soda",
    description: "Mint and lime mojito-flavored goli soda",
    price: "₹20",
    image: "/images/mojito-soda.png",
    category: "soda",
  },
]

export default function ShopSection() {
  const sectionRef = useRef(null)

  useEffect(() => {
    if (!sectionRef.current) return

    const elements = sectionRef.current.querySelectorAll(".gsap-reveal")

    gsap.fromTo(
      elements,
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        stagger: 0.1,
        duration: 0.6,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
        },
      },
    )

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill())
    }
  }, [])

  const openWhatsApp = (productName) => {
    const message = `Hi BackWin, I'm interested in purchasing ${productName}. Please provide more information.`
    const whatsappUrl = `https://wa.me/918160607668?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, "_blank")
  }

  const productVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        ease: "easeOut",
      },
    }),
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
  }

  return (
    <section id="shop" ref={sectionRef} className="py-20 bg-charcoal relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 gsap-reveal">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Shop <span className="text-neon-red">BackWin</span> Products
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Browse our selection of premium beverages and find your perfect refreshment.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product, i) => (
            <motion.div
              key={product.id}
              custom={i}
              variants={productVariants}
              initial="hidden"
              whileInView="visible"
              whileHover="hover"
              viewport={{ once: true, amount: 0.1 }}
            >
              <Card className="bg-charcoal-light border-gray-800 overflow-hidden gsap-reveal h-full flex flex-col">
                <div className="h-64 relative bg-gradient-to-b from-black/20 to-black/60 flex items-center justify-center p-6">
                  <motion.div
                    whileHover={{
                      scale: 1.1,
                      rotate: [0, -3, 3, 0],
                    }}
                    transition={{
                      rotate: {
                        duration: 1.5,
                        ease: "easeInOut",
                        times: [0, 0.25, 0.75, 1],
                        repeat: Number.POSITIVE_INFINITY,
                        repeatDelay: 0.5,
                      },
                    }}
                  >
                    <Image
                      src={product.image || "/placeholder.svg"}
                      alt={product.name}
                      width={200}
                      height={400}
                      className="h-full w-auto object-contain max-h-56"
                      priority
                    />
                  </motion.div>
                </div>
                <CardContent className="p-6 flex-grow">
                  <h3 className="text-xl font-bold mb-2">{product.name}</h3>
                  <p className="text-gray-400 mb-4">{product.description}</p>
                  <div className="text-neon-red font-bold text-xl">{product.price}</div>
                </CardContent>
                <CardFooter className="border-t border-gray-800 p-4">
                  <Button
                    className="w-full bg-neon-red hover:bg-neon-red/80 text-white"
                    onClick={() => openWhatsApp(product.name)}
                  >
                    <ShoppingCart className="mr-2 h-4 w-4" /> Add to Cart
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 text-center gsap-reveal">
          <p className="text-gray-400 mb-6">
            Can't find what you're looking for? Check out our full collection on Flipkart.
          </p>
          <Button size="lg" className="bg-neon-red hover:bg-neon-red/80 text-white px-8 py-3 text-lg">
            <a href="https://dl.flipkart.com/s/FXvojVuuuN" target="_blank" rel="noopener noreferrer">
              Shop on Flipkart
            </a>
          </Button>
        </div>
      </div>

      {/* Background Elements */}
      <div className="absolute top-1/3 left-0 w-64 h-64 bg-neon-red/10 rounded-full filter blur-[80px]"></div>
      <div className="absolute bottom-1/4 right-0 w-80 h-80 bg-neon-red/10 rounded-full filter blur-[100px]"></div>
    </section>
  )
}
