"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Heart, ThumbsUp } from "lucide-react"

export default function InteractivePrompt() {
  const [response, setResponse] = useState<string | null>(null)
  const [showFeedback, setShowFeedback] = useState(false)
  const [feedbackText, setFeedbackText] = useState("")

  const handleResponse = (type: string) => {
    setResponse(type)

    if (type === "yes") {
      setTimeout(() => {
        window.open("https://dl.flipkart.com/s/FXvojVuuuN", "_blank")
      }, 1000)
    } else if (type === "maybe") {
      // Redirect to WhatsApp with pre-filled message
      const message = "Hi BackWin, I'm interested in your products and need more information."
      const whatsappUrl = `https://wa.me/918160607668?text=${encodeURIComponent(message)}`
      window.open(whatsappUrl, "_blank")
    }
  }

  const submitFeedback = () => {
    if (feedbackText.trim()) {
      // In a real app, you would send this feedback to your server
      console.log("Feedback submitted:", feedbackText)
      setShowFeedback(false)
      setResponse("thanks")
    }
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
              <AnimatePresence mode="wait">
                {!response && (
                  <motion.div
                    className="text-center"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
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
                        onClick={() => handleResponse("yes")}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Heart className="mr-2 h-5 w-5" /> Yes, I Love It!
                      </motion.button>

                      <motion.button
                        className="bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white px-8 py-4 rounded-full flex items-center justify-center text-lg font-medium border border-white/20 hover:border-white/40"
                        onClick={() => handleResponse("maybe")}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <ThumbsUp className="mr-2 h-5 w-5" /> I Need More Info
                      </motion.button>
                    </div>
                  </motion.div>
                )}

                {response === "yes" && (
                  <motion.div
                    className="text-center"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.4 }}
                  >
                    <div className="flex justify-center mb-6">
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: [0, 1.2, 1] }}
                        transition={{ duration: 0.6 }}
                        className="bg-green-500 text-white p-6 rounded-full"
                      >
                        <Heart size={48} />
                      </motion.div>
                    </div>

                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
                      Awesome! We're <span className="text-green-500">Redirecting</span> You Now
                    </h2>

                    <p className="text-gray-300 text-lg mb-6">
                      Taking you to our online store where you can purchase our premium beverages.
                    </p>

                    <div className="flex justify-center">
                      <motion.div className="h-2 w-64 bg-gray-700 rounded-full overflow-hidden">
                        <motion.div
                          className="h-full bg-gradient-to-r from-neon-red to-rose-500"
                          initial={{ width: 0 }}
                          animate={{ width: "100%" }}
                          transition={{ duration: 1 }}
                        />
                      </motion.div>
                    </div>
                  </motion.div>
                )}

                {response === "thanks" && (
                  <motion.div
                    className="text-center"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.4 }}
                  >
                    <div className="flex justify-center mb-6">
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: [0, 1.2, 1] }}
                        transition={{ duration: 0.6 }}
                        className="bg-neon-red text-white p-6 rounded-full"
                      >
                        <ThumbsUp size={48} />
                      </motion.div>
                    </div>

                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
                      Thank You For Your <span className="text-neon-red">Feedback</span>!
                    </h2>

                    <p className="text-gray-300 text-lg mb-8">
                      We appreciate your input and will use it to improve our products and services.
                    </p>

                    <motion.button
                      className="bg-gradient-to-r from-neon-red to-rose-500 hover:from-rose-500 hover:to-neon-red text-white px-8 py-4 rounded-full flex items-center justify-center text-lg font-medium mx-auto"
                      onClick={() => setResponse(null)}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Back to Options
                    </motion.button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
