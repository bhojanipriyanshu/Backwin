"use client"

import { useRef, useEffect, useState } from "react"
import { motion } from "framer-motion"

export default function VideoSection() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    const video = videoRef.current
    if (video) {
      video.addEventListener("loadeddata", () => setIsLoaded(true))
      return () => video.removeEventListener("loadeddata", () => setIsLoaded(true))
    }
  }, [])

  return (
    <section className="py-24 bg-gradient-to-b from-black to-charcoal">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Experience <span className="text-neon-red">BackWin</span>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Premium beverages crafted for those who demand more from every sip.
          </p>
        </div>

        <motion.div
          className="max-w-4xl mx-auto rounded-xl overflow-hidden shadow-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 20 }}
          transition={{ duration: 0.5 }}
        >
          <div className="relative w-full overflow-hidden" style={{ maxHeight: "80vh" }}>
            <div className="relative w-full h-0 pb-[56.25%]">
              {/* Video overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10"></div>

              {/* Optimized video with preload="metadata" to improve initial load time */}
              <video
                ref={videoRef}
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
                className="absolute inset-0 w-full h-full object-contain bg-black"
                poster="/placeholder.svg?height=720&width=1280"
              >
                <source
                  src="https://assets.mixkit.co/videos/preview/mixkit-pouring-a-carbonated-drink-in-a-glass-with-ice-39882-large.mp4"
                  type="video/mp4"
                />
                Your browser does not support the video tag.
              </video>

              {/* Content overlay */}
              <div className="absolute inset-0 flex flex-col items-center justify-center z-20 p-6">
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                  className="text-center"
                >
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
                    Fuel Your <span className="text-neon-red">Comeback</span>
                  </h3>
                  <p className="text-gray-200 max-w-lg mx-auto">
                    Every bottle is crafted with precision to deliver exceptional taste and quality.
                  </p>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
