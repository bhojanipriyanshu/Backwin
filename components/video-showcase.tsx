"use client"

import { useRef, useEffect, useState } from "react"
import { motion } from "framer-motion"
import { Play, Volume2, VolumeX } from "lucide-react"

export default function VideoShowcase() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [isLoaded, setIsLoaded] = useState(false)
  const [isPlaying, setIsPlaying] = useState(true)
  const [isMuted, setIsMuted] = useState(true)
  const [isHovered, setIsHovered] = useState(false)

  useEffect(() => {
    const video = videoRef.current
    if (video) {
      video.addEventListener("loadeddata", () => setIsLoaded(true))
      return () => video.removeEventListener("loadeddata", () => setIsLoaded(true))
    }
  }, [])

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause()
      } else {
        videoRef.current.play()
      }
      setIsPlaying(!isPlaying)
    }
  }

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted
      setIsMuted(!isMuted)
    }
  }

  return (
    <section className="py-24 bg-gradient-to-b from-black to-charcoal relative overflow-hidden bg-glow-red">
      {/* Enhanced background effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-neon-red/10 rounded-full filter blur-[120px] animate-glow-pulse"></div>
        <div className="absolute bottom-1/3 right-0 w-80 h-80 bg-neon-red/10 rounded-full filter blur-[100px] animate-glow-pulse"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 heading-highlight">
            Experience <span className="text-neon-red glow-text-red">BackWin</span>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Premium beverages crafted for those who demand more from every sip.
          </p>
        </div>

        <motion.div
          className="max-w-5xl mx-auto rounded-xl overflow-hidden shadow-[0_0_30px_rgba(255,51,102,0.3)] border border-neon-red/30 gradient-border"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 20 }}
          transition={{ duration: 0.5 }}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div className="relative w-full overflow-hidden" style={{ maxHeight: "80vh" }}>
            <div className="relative w-full h-0 pb-[56.25%]">
              {/* Video overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10"></div>

              {/* Optimized video with preload="metadata" to improve initial load time */}
              <video
                ref={videoRef}
                autoPlay
                muted={isMuted}
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
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-3 heading-highlight">
                    Fuel Your <span className="text-neon-red glow-text-red">Comeback</span>
                  </h3>
                  <p className="text-gray-200 max-w-lg mx-auto mb-6">
                    Every bottle is crafted with precision to deliver exceptional taste and quality.
                  </p>
                  <motion.button
                    className="bg-neon-red hover:bg-neon-red/80 text-white px-6 py-3 rounded-full inline-flex items-center space-x-2 transition-all duration-300 btn-highlight"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span>Discover Our Products</span>
                    <Play className="h-4 w-4 ml-2" />
                  </motion.button>
                </motion.div>
              </div>

              {/* Video controls that appear on hover */}
              <motion.div
                className="absolute bottom-4 right-4 z-30 flex space-x-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: isHovered ? 1 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <button
                  onClick={togglePlay}
                  className="bg-black/50 hover:bg-neon-red/80 text-white p-2 rounded-full transition-colors duration-300 border border-neon-red/50"
                  aria-label={isPlaying ? "Pause video" : "Play video"}
                >
                  {isPlaying ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <rect x="6" y="4" width="4" height="16"></rect>
                      <rect x="14" y="4" width="4" height="16"></rect>
                    </svg>
                  ) : (
                    <Play className="h-5 w-5" />
                  )}
                </button>
                <button
                  onClick={toggleMute}
                  className="bg-black/50 hover:bg-neon-red/80 text-white p-2 rounded-full transition-colors duration-300 border border-neon-red/50"
                  aria-label={isMuted ? "Unmute video" : "Mute video"}
                >
                  {isMuted ? <VolumeX className="h-5 w-5" /> : <Volume2 className="h-5 w-5" />}
                </button>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
