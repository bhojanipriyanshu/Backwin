"use client"

import { useRef, useEffect, useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { useMobile } from "@/hooks/use-mobile"
import gsap from "gsap"

export default function HeroBottle() {
  const containerRef = useRef(null)
  const isMobile = useMobile()
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)

    if (containerRef.current) {
      gsap.from(containerRef.current, {
        opacity: 0,
        scale: 0.8,
        duration: 1,
        ease: "power3.out",
        delay: 0.5,
      })
    }
  }, [])

  return (
    <motion.div
      ref={containerRef}
      className="w-full h-full flex items-center justify-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: isLoaded ? 1 : 0 }}
      transition={{ duration: 1 }}
    >
      <div className="relative">
        <motion.div
          animate={{
            y: [0, -10, 0],
          }}
          transition={{
            duration: 4,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
            ease: "easeInOut",
          }}
          className="relative z-10"
        >
          <Image
            src="/images/kingweiser-beer.jpeg"
            alt="BackWin Kingweiser Non-Alcoholic Beer"
            width={300}
            height={600}
            className="object-contain"
          />
        </motion.div>

        {/* Glowing effect under the bottle */}
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-40 h-10 bg-neon-red/30 rounded-full filter blur-xl"></div>
      </div>
    </motion.div>
  )
}
