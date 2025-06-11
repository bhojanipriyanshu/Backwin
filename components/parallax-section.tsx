"use client"

import { useRef } from "react"
import { motion } from "framer-motion"
import { Sparkles, FlaskRoundIcon as Flask, Leaf } from "lucide-react"

export default function ParallaxSection() {
  const sectionRef = useRef(null)

  const cardVariants = {
    hover: {
      y: -10,
      boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.3)",
      borderColor: "hsl(var(--neon-red))",
      transition: {
        duration: 0.3,
      },
    },
  }

  const iconVariants = {
    hover: {
      scale: 1.1,
      transition: {
        duration: 0.2,
        ease: "easeOut",
      },
    },
  }

  return (
    <section
      ref={sectionRef}
      className="py-32 bg-gradient-to-b from-charcoal to-black relative overflow-hidden flex items-center"
    >
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-20">
          {/* Removed decorative red borders around the heading */}
          <h2 className="text-4xl md:text-6xl font-bold mb-6 relative z-10 tracking-tight">
            <span className="text-neon-red">Crafted for Excellence</span>
          </h2>

          <p className="text-gray-300 text-lg leading-relaxed">
            Our beverages are meticulously crafted with premium ingredients to deliver exceptional taste and quality in
            every sip.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {[
            {
              title: "Premium Ingredients",
              description: "Sourced from the finest suppliers around the world for uncompromising quality and taste.",
              icon: <Sparkles className="h-10 w-10" />,
              color: "from-neon-red/20 to-transparent",
              gradient: "bg-gradient-to-r from-neon-red to-rose-500",
            },
            {
              title: "Innovative Formulas",
              description: "Crafted by expert brewers and nutritionists to deliver optimal taste and performance.",
              icon: <Flask className="h-10 w-10" />,
              color: "from-electric-accent/20 to-transparent",
              gradient: "bg-gradient-to-r from-rose-500 to-neon-red",
            },
            {
              title: "Sustainable Packaging",
              description: "Eco-friendly materials that minimize environmental impact without sacrificing quality.",
              icon: <Leaf className="h-10 w-10" />,
              color: "from-neon-red/20 to-transparent",
              gradient: "bg-gradient-to-r from-neon-red to-rose-400",
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              className="bg-gradient-to-br from-charcoal-light to-black p-10 rounded-2xl border border-gray-800 hover:border-neon-red transition-colors duration-300 relative overflow-hidden h-full flex flex-col shadow-lg"
              whileHover="hover"
              variants={cardVariants}
            >
              <div
                className={`absolute top-0 left-0 w-full h-full bg-gradient-to-br ${item.color} opacity-20 rounded-lg`}
              ></div>

              <motion.div
                className="text-neon-red mb-6 bg-black/30 p-4 rounded-full w-fit"
                variants={iconVariants}
                whileHover="hover"
              >
                {item.icon}
              </motion.div>

              {/* Replaced heavy underlines with gradient text */}
              <h3
                className={`text-2xl font-bold mb-4 ${item.gradient} bg-clip-text text-transparent drop-shadow-[0_0_2px_rgba(255,51,102,0.5)]`}
              >
                {item.title}
              </h3>

              <p className="text-gray-300 mt-2 text-lg leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Static background elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-20">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-neon-red rounded-full filter blur-[150px]"></div>
        <div className="absolute bottom-1/3 right-1/4 w-[500px] h-[500px] bg-neon-red rounded-full filter blur-[180px]"></div>
        <div className="absolute top-2/3 left-2/3 w-64 h-64 bg-electric-accent rounded-full filter blur-[100px]"></div>
      </div>
    </section>
  )
}
