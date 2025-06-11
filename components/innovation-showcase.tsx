"use client"

import { useRef } from "react"
import Image from "next/image"
import { motion, useScroll, useTransform } from "framer-motion"
import { Sparkles, Leaf, Droplet, Zap } from "lucide-react"

export default function InnovationShowcase() {
  const sectionRef = useRef<HTMLElement>(null)

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  })

  const opacity = useTransform(scrollYProgress, [0, 0.2], [0, 1])
  const scale = useTransform(scrollYProgress, [0, 0.2], [0.9, 1])

  const features = [
    {
      icon: <Sparkles className="h-8 w-8" />,
      title: "Premium Ingredients",
      description: "We source only the finest ingredients to ensure exceptional taste and quality in every sip.",
      color: "from-rose-500 to-neon-red",
    },
    {
      icon: <Leaf className="h-8 w-8" />,
      title: "Sustainable Practices",
      description:
        "Our commitment to sustainability extends from sourcing to packaging, minimizing our environmental impact.",
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: <Droplet className="h-8 w-8" />,
      title: "Zero Alcohol",
      description: "All the flavor and experience without the alcohol, perfect for any occasion.",
      color: "from-blue-500 to-indigo-500",
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: "Energy Boost",
      description: "Clean, sustained energy without the jitters or crash, powered by natural ingredients.",
      color: "from-amber-500 to-orange-500",
    },
  ]

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-24 bg-gradient-to-b from-charcoal to-black relative overflow-hidden"
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-neon-red/10 rounded-full filter blur-[120px] animate-glow-pulse"></div>
        <div className="absolute bottom-1/3 left-1/4 w-[500px] h-[500px] bg-neon-red/10 rounded-full filter blur-[150px] animate-glow-pulse"></div>
      </div>

      <div className="container mx-auto px-4">
        <motion.div className="text-center mb-16" style={{ opacity, scale }}>
          <h2 className="text-4xl md:text-6xl font-bold mb-6 relative inline-block">
            <span className="bg-gradient-to-r from-white via-neon-red to-white bg-clip-text text-transparent">
              Innovation & Excellence
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
            Discover what makes BackWin beverages stand out from the competition.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-black/30 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-800 hover:border-neon-red/50 transition-colors duration-300 shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5, transition: { duration: 0.3 } }}
            >
              <div className="p-8">
                <div
                  className={`inline-flex items-center justify-center p-4 rounded-full bg-gradient-to-r ${feature.color} mb-6`}
                >
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4 text-white">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-16 bg-gradient-to-br from-black/80 to-charcoal-light rounded-2xl overflow-hidden border border-gray-800 shadow-xl max-w-6xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="p-8 lg:p-12 flex flex-col justify-center">
              <h3 className="text-3xl font-bold mb-6 text-white">
                Our <span className="text-neon-red">Global</span> Reach
              </h3>
              <p className="text-gray-300 mb-6 text-lg">
                From humble beginnings to international recognition, BackWin beverages are now enjoyed by customers
                across the globe.
              </p>
              <ul className="space-y-4">
                <li className="flex items-center text-gray-300">
                  <div className="h-2 w-2 rounded-full bg-neon-red mr-3"></div>
                  Available in 5+ countries worldwide
                </li>
                <li className="flex items-center text-gray-300">
                  <div className="h-2 w-2 rounded-full bg-neon-red mr-3"></div>
                  Partnerships with premium super stocklist
                </li>
                <li className="flex items-center text-gray-300">
                  <div className="h-2 w-2 rounded-full bg-neon-red mr-3"></div>
                  Award-winning beverage formulations
                </li>
                <li className="flex items-center text-gray-300">
                  <div className="h-2 w-2 rounded-full bg-neon-red mr-3"></div>
                  Continuous innovation and product development
                </li>
              </ul>
            </div>
            <div className="flex items-center justify-center lg:justify-end p-4 lg:p-8">
              <div className="relative w-full max-w-md h-[300px] md:h-[400px] lg:h-full">
                <Image
                  src="/images/family.png"
                  alt="BackWin Product Family"
                  className="object-contain"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  priority
                />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
