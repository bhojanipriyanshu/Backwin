"use client"

import { useRef, useState, useEffect } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { Play, Pause, Volume2, VolumeX } from "lucide-react"

declare global {
  interface Window {
    YT: any;
    onYouTubeIframeAPIReady: () => void;
  }
}

export default function DiscoverVideo() {
  const sectionRef = useRef<HTMLElement | null>(null)
  const playerRef = useRef<any>(null)
  const [isPlaying, setIsPlaying] = useState(true)
  const [isMuted, setIsMuted] = useState(true)
  const [isHovered, setIsHovered] = useState(false)
  const [isLoaded, setIsLoaded] = useState(false)
  const [videoError, setVideoError] = useState(false)

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  })

  const opacity = useTransform(scrollYProgress, [0, 0.2], [0, 1])
  const scale = useTransform(scrollYProgress, [0, 0.2], [0.9, 1])

  useEffect(() => {
    // Load YouTube IFrame API
    const tag = document.createElement('script')
    tag.src = "https://www.youtube.com/iframe_api"
    const firstScriptTag = document.getElementsByTagName('script')[0]
    firstScriptTag.parentNode?.insertBefore(tag, firstScriptTag)

    window.onYouTubeIframeAPIReady = () => {
      playerRef.current = new window.YT.Player('youtube-player', {
        videoId: '23qg6-UPS4U',
        playerVars: {
          autoplay: 1,
          mute: 1,
          loop: 1,
          playlist: '23qg6-UPS4U',
          controls: 0,
          modestbranding: 1,
          rel: 0
        },
        events: {
          onReady: () => setIsLoaded(true),
          onError: () => setVideoError(true)
        }
      })
    }

    return () => {
      if (playerRef.current) {
        playerRef.current.destroy()
      }
    }
  }, [])

  // Auto-play video when in view
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting && playerRef.current) {
            if (isPlaying) {
              playerRef.current.playVideo()
            }
          } else if (playerRef.current) {
            playerRef.current.pauseVideo()
          }
        })
      },
      { threshold: 0.4 }
    )
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [isPlaying])

  const togglePlay = () => {
    if (playerRef.current) {
      if (isPlaying) {
        playerRef.current.pauseVideo()
      } else {
        playerRef.current.playVideo()
      }
      setIsPlaying(!isPlaying)
    }
  }

  const toggleMute = () => {
    if (playerRef.current) {
      if (isMuted) {
        playerRef.current.unMute()
      } else {
        playerRef.current.mute()
      }
      setIsMuted(!isMuted)
    }
  }

  return (
    <section
      id="discover"
      ref={sectionRef}
      className="py-24 bg-gradient-to-b from-black to-charcoal relative overflow-hidden"
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-neon-red/10 rounded-full filter blur-[120px] animate-glow-pulse"></div>
        <div className="absolute bottom-1/3 right-1/4 w-[500px] h-[500px] bg-neon-red/10 rounded-full filter blur-[150px] animate-glow-pulse"></div>
      </div>

      <div className="container mx-auto px-4">
        <motion.div className="text-center mb-16" style={{ opacity, scale }}>
          <h2 className="text-4xl md:text-6xl font-bold mb-6 relative inline-block">
            <span className="bg-gradient-to-r from-white via-neon-red to-white bg-clip-text text-transparent">
              Discover BackWin in Action
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
            See our premium beverages in action and experience the BackWin difference.
          </p>
        </motion.div>

        <motion.div
          className="max-w-5xl mx-auto rounded-2xl overflow-hidden shadow-[0_0_30px_rgba(255,51,102,0.3)] border border-neon-red/30"
          style={{ opacity, scale }}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div className="relative w-full max-w-md mx-auto overflow-hidden" style={{ maxHeight: "90vh" }}>
            <div className="relative w-full h-0 pb-[177.78%]">
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10"></div>

              {videoError ? (
                <div className="absolute inset-0 flex items-center justify-center bg-black">
                  <p className="text-white text-lg">Video could not be loaded</p>
                </div>
              ) : (
                <div id="youtube-player" className="absolute inset-0 w-full h-full" />
              )}

              {!videoError && (
                <motion.div
                  className="absolute bottom-4 right-4 z-30 flex space-x-2"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: isHovered ? 1 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.button
                    onClick={toggleMute}
                    className="bg-black/50 hover:bg-neon-red/80 text-white p-3 rounded-full transition-colors duration-300 border border-neon-red/50"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    aria-label={isMuted ? "Unmute video" : "Mute video"}
                  >
                    {isMuted ? <VolumeX className="h-5 w-5" /> : <Volume2 className="h-5 w-5" />}
                  </motion.button>
                </motion.div>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}