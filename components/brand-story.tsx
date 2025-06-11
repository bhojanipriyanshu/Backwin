"use client"

import { useRef, useEffect, useState } from "react"
import Image from "next/image"
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Rocket, Award, Globe, Lightbulb, Droplet, ChevronRight, ChevronLeft, Play } from "lucide-react"

gsap.registerPlugin(ScrollTrigger)

const milestones = [
  {
    year: "2015",
    title: "The Beginning",
    description: "BackWin was founded with a mission to create beverages that fuel comebacks and celebrate resilience.",
    icon: <Lightbulb className="h-6 w-6" />,
    image: "/images/kingwiser-beer.png",
    achievement: "First concept developed",
    color: "from-neon-red to-rose-500",
  },
  {
    year: "2017",
    title: "First Product Launch",
    description:
      "Our flagship non-alcoholic beer hit the market, quickly gaining popularity for its authentic taste without the alcohol.",
    icon: <Rocket className="h-6 w-6" />,
    image: "/images/kingwiser-beer.png",
    achievement: "5,000 bottles sold in first month",
    color: "from-rose-500 to-amber-500",
  },
  {
    year: "2019",
    title: "Expanding the Line",
    description:
      "We introduced our goli soda range, offering traditional flavors with a modern twist for today's consumers.",
    icon: <Droplet className="h-6 w-6" />,
    image: "/images/limbu-soda.png",
    achievement: "3 new flavors introduced",
    color: "from-amber-500 to-electric-accent",
  },
  {
    year: "2021",
    title: "Global Expansion",
    description: "BackWin expanded to international markets, bringing our innovative beverages to consumers worldwide.",
    icon: <Globe className="h-6 w-6" />,
    image: "/images/5000-beer.png",
    achievement: "Available in 5 countries",
    color: "from-electric-accent to-blue-500",
  },
  {
    year: "2023",
    title: "Innovation Award",
    description: "Recognized for our commitment to quality and innovation in the beverage industry.",
    icon: <Award className="h-6 w-6" />,
    image: "/images/energy-drink.png",
    achievement: "Best Non-Alcoholic Beverage Award",
    color: "from-blue-500 to-neon-red",
  },
]

export default function BrandStory() {
  const sectionRef = useRef(null)
  const [activeIndex, setActiveIndex] = useState(0)
  const [isPlaying, setIsPlaying] = useState(true)
  const timelineRef = useRef(null)
  const videoRef = useRef(null)
  const [showVideoControls, setShowVideoControls] = useState(false)
  const [isVideoPlaying, setIsVideoPlaying] = useState(true)

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  })

  const opacity = useTransform(scrollYProgress, [0, 0.2], [0, 1])
  const scale = useTransform(scrollYProgress, [0, 0.2], [0.9, 1])

  useEffect(() => {
    if (!timelineRef.current) return

    const timelineItems = timelineRef.current.querySelectorAll(".timeline-item")

    gsap.fromTo(
      timelineItems,
      { x: -50, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        stagger: 0.3,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: timelineRef.current,
          start: "top 80%",
        },
      },
    )

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill())
    }
  }, [])

  // Auto-advance the timeline
  useEffect(() => {
    if (!isPlaying) return

    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % milestones.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [isPlaying])

  const handlePrev = () => {
    setIsPlaying(false)
    setActiveIndex((prev) => (prev - 1 + milestones.length) % milestones.length)
  }

  const handleNext = () => {
    setIsPlaying(false)
    setActiveIndex((prev) => (prev + 1) % milestones.length)
  }

  const handleDotClick = (index) => {
    setIsPlaying(false)
    setActiveIndex(index)
  }

  const toggleVideoPlay = () => {
    if (videoRef.current) {
      if (isVideoPlaying) {
        videoRef.current.pause()
      } else {
        videoRef.current.play()
      }
      setIsVideoPlaying(!isVideoPlaying)
    }
  }

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-24 bg-gradient-to-b from-black to-charcoal relative overflow-hidden"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2 className="text-4xl md:text-5xl font-bold mb-4 inline-block" style={{ opacity, scale }}>
            The{" "}
            <span className="bg-gradient-to-r from-neon-red to-rose-500 bg-clip-text text-transparent">BackWin</span>{" "}
            Story
          </motion.h2>
          <motion.p className="text-gray-300 max-w-2xl mx-auto text-lg" style={{ opacity }}>
            From humble beginnings to becoming a leading beverage innovator, our journey is fueled by passion and a
            commitment to excellence.
          </motion.p>
        </div>

        {/* New Video Background Section */}
        <motion.div
          className="relative rounded-xl overflow-hidden mb-20 aspect-video max-w-4xl mx-auto"
          style={{ opacity, scale }}
          onMouseEnter={() => setShowVideoControls(true)}
          onMouseLeave={() => setShowVideoControls(false)}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/60 z-20"></div>

          {/* Background video with autoplay */}
          <video ref={videoRef} autoPlay muted loop playsInline className="w-full h-full object-cover">
            <source
              src="https://assets.mixkit.co/videos/preview/mixkit-pouring-a-carbonated-drink-in-a-glass-with-ice-39882-large.mp4"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>

          {/* Play button overlay */}
          <div className="absolute inset-0 flex flex-col items-center justify-center z-30">
            <motion.div initial={{ opacity: 0.8 }} whileHover={{ opacity: 1, scale: 1.05 }} className="text-center">
              <motion.button
                onClick={toggleVideoPlay}
                className="bg-neon-red/80 hover:bg-neon-red text-white rounded-full p-4 mb-4 flex items-center justify-center"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                {isVideoPlaying ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
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
                  <Play className="h-6 w-6" />
                )}
              </motion.button>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
                Watch Our <span className="text-neon-red">Story</span>
              </h3>
            </motion.div>
          </div>

          {/* Semi-transparent maroon overlay */}
          <div className="absolute inset-0 bg-neon-red/10 mix-blend-overlay z-10"></div>
        </motion.div>

        {/* Interactive Timeline */}
        <div className="max-w-5xl mx-auto">
          {/* Current milestone showcase */}
          <div className="mb-16">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center"
              >
                <div className="order-2 md:order-1">
                  <div
                    className={`inline-flex items-center px-3 py-1 rounded-full bg-gradient-to-r ${milestones[activeIndex].color} text-white text-sm font-medium mb-4`}
                  >
                    {milestones[activeIndex].icon}
                    <span className="ml-2">{milestones[activeIndex].year}</span>
                  </div>

                  <h3 className="text-3xl font-bold mb-4">{milestones[activeIndex].title}</h3>
                  <p className="text-gray-300 mb-6 text-lg">{milestones[activeIndex].description}</p>

                  <div className="bg-black/30 backdrop-blur-sm border border-gray-800 rounded-lg p-4 inline-block">
                    <p className="text-neon-red font-medium">Achievement:</p>
                    <p className="text-white text-lg">{milestones[activeIndex].achievement}</p>
                  </div>
                </div>

                <div className="order-1 md:order-2 flex justify-center">
                  <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    className="relative"
                  >
                    <div className="relative">
                      <Image
                        src={milestones[activeIndex].image || "/placeholder.svg"}
                        alt={milestones[activeIndex].title}
                        width={300}
                        height={500}
                        className="object-contain max-h-[400px] drop-shadow-[0_0_20px_rgba(255,51,102,0.4)]"
                      />
                      <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-3/4 h-8 bg-neon-red/30 rounded-full filter blur-xl"></div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Timeline navigation controls */}
            <div className="flex justify-between items-center mt-10">
              <button
                onClick={handlePrev}
                className="p-3 rounded-full bg-black/50 border border-gray-800 text-white hover:bg-neon-red/20 hover:border-neon-red transition-colors"
                aria-label="Previous milestone"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>

              <div className="flex space-x-2">
                {milestones.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => handleDotClick(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === activeIndex ? "bg-neon-red w-6" : "bg-gray-600 hover:bg-gray-400"
                    }`}
                    aria-label={`Go to milestone ${index + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={handleNext}
                className="p-3 rounded-full bg-black/50 border border-gray-800 text-white hover:bg-neon-red/20 hover:border-neon-red transition-colors"
                aria-label="Next milestone"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          </div>

          {/* Visual timeline */}
          <div ref={timelineRef} className="relative mt-20">
            {/* Timeline Line */}
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-neon-red via-rose-500 to-electric-accent"></div>

            {/* Timeline Items */}
            {milestones.map((item, index) => (
              <div
                key={index}
                className={`timeline-item relative flex items-start mb-16 ${
                  index % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                <div className="hidden md:block w-1/2"></div>

                <motion.div
                  className={`absolute left-0 md:left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full border-2 z-10 cursor-pointer
                    ${index === activeIndex ? "bg-neon-red border-white" : "bg-black border-neon-red"}`}
                  whileHover={{ scale: 1.2 }}
                  onClick={() => handleDotClick(index)}
                />

                <div className={`pl-8 md:pl-0 ${index % 2 === 0 ? "md:pr-8" : "md:pl-8"} w-full md:w-1/2`}>
                  <motion.div
                    className="bg-black/40 backdrop-blur-sm p-6 rounded-lg border border-gray-800 hover:border-neon-red transition-colors duration-300"
                    whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.3)" }}
                  >
                    <div
                      className={`inline-flex items-center px-3 py-1 rounded-full bg-gradient-to-r ${item.color} text-white text-sm font-medium mb-2`}
                    >
                      {item.icon}
                      <span className="ml-2">{item.year}</span>
                    </div>
                    <h3 className="text-white text-xl font-semibold mb-2">{item.title}</h3>
                    <p className="text-gray-400">{item.description}</p>
                  </motion.div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Background Elements */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-neon-red/10 rounded-full filter blur-[120px]"></div>
      <div className="absolute bottom-1/3 right-0 w-80 h-80 bg-neon-red/10 rounded-full filter blur-[100px]"></div>
    </section>
  )
}
