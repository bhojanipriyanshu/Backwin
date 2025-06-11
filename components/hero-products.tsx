"use client"

import { useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"

export default function HeroProducts() {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div className="w-full h-full flex items-center justify-center">
      <div className="relative">
        <motion.div
          className="relative z-10"
          animate={{ y: [0, -10, 0] }}
          transition={{
            y: {
              duration: 4,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
              ease: "easeInOut",
            },
          }}
          onHoverStart={() => setIsHovered(true)}
          onHoverEnd={() => setIsHovered(false)}
        >
          <Image
            src="/images/family.png"
            alt="BackWin Product Family"
            width={900}
            height={600}
            className={`object-contain scale-125 transition-all duration-300 ${
              isHovered ? "drop-shadow-[0_0_25px_rgba(255,51,102,0.6)]" : "drop-shadow-[0_0_15px_rgba(255,51,102,0.4)]"
            }`}
            priority
          />
        </motion.div>

        {/* Enhanced soft glow effect under the products */}
        <div
          className={`absolute -bottom-10 left-1/2 transform -translate-x-1/2 w-[120%] h-32 bg-gradient-to-t from-neon-red/30 to-transparent rounded-full filter blur-2xl transition-opacity duration-300 ${
            isHovered ? "opacity-100" : "opacity-70"
          }`}
        ></div>
      </div>
    </div>
  )
}
