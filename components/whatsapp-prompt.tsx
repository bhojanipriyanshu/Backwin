"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Heart, MessageCircle } from "lucide-react"

export default function WhatsappPrompt() {
  const [isAnimating, setIsAnimating] = useState(false)

  const redirectToWhatsApp = () => {
    setIsAnimating(true)

    setTimeout(() => {
      const message = "Hi BackWin, I'm interested in your products and need more information."
      const whatsappUrl = `https://wa.me/918160607668?text=${encodeURIComponent(message)}`
      window.open(whatsappUrl, "_blank")
      setIsAnimating(false)
    }, 800)
  }

  const redirectToShop = () => {
    setIsAnimating(true)

    setTimeout(() => {
      window.open("https://dl.flipkart.com/s/FXvojVuuuN", "_blank")
      setIsAnimating(false)
    }, 800)
  }

  return (
    <section className="py-24 bg-gradient-to-b from-charcoal to-black relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-neon-red/10 rounded-full filter blur-[120px] animate-glow-pulse"></div>
        <div className="absolute bottom-1/3 right-1/4 w-[500px] h-[500px] bg-neon-red/10 rounded-full filter blur-[150px] animate-glow-pulse"></div>
      </div>

      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            className="bg-gradient-to-br from-black/80 to-charcoal-light rounded-2xl overflow-hidden border border-gray-800 shadow-2xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <div className="p-8 md:p-12">
              <motion.div
                className="text-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.4 }}
              >
                <h2 className="text-3xl md:text-5xl font-bold mb-8 text-white">
                  Do You <span className="text-neon-red">Like</span> What You See?
                </h2>

                <p className="text-gray-300 text-lg mb-10 max-w-2xl mx-auto">
                  We've crafted our premium beverages with passion and precision. Are you ready to experience the
                  BackWin difference?
                </p>

                <div className="flex flex-col sm:flex-row justify-center gap-4">
                  <motion.button
                    className="bg-gradient-to-r from-neon-red to-rose-500 hover:from-rose-500 hover:to-neon-red text-white px-8 py-4 rounded-full flex items-center justify-center text-lg font-medium shadow-lg shadow-neon-red/20 hover:shadow-neon-red/40"
                    onClick={redirectToShop}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    disabled={isAnimating}
                  >
                    <Heart className="mr-2 h-5 w-5" /> Yes, I Love It!
                  </motion.button>

                  <motion.button
                    className="bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white px-8 py-4 rounded-full flex items-center justify-center text-lg font-medium border border-white/20 hover:border-white/40"
                    onClick={redirectToWhatsApp}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    disabled={isAnimating}
                  >
                    <MessageCircle className="mr-2 h-5 w-5" /> I Need More Info
                  </motion.button>
                </div>

                {isAnimating && (
                  <div className="mt-8">
                    <div className="flex justify-center">
                      <motion.div
                        className="h-2 w-64 bg-gray-700 rounded-full overflow-hidden"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.3 }}
                      >
                        <motion.div
                          className="h-full bg-gradient-to-r from-neon-red to-rose-500"
                          initial={{ width: 0 }}
                          animate={{ width: "100%" }}
                          transition={{ duration: 0.8 }}
                        />
                      </motion.div>
                    </div>
                    <p className="text-gray-400 mt-2">Redirecting you now...</p>
                  </div>
                )}
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
