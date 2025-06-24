'use client'
import { motion, useScroll, useTransform } from 'framer-motion'
import { FaPenNib, FaWandMagicSparkles, FaHandHolding } from "react-icons/fa6";
import { useRef } from 'react'

const GettingStarted = () => {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  })

  // Animation values
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])
  const y = useTransform(scrollYProgress, [0, 1], [50, -50])
  const scale = useTransform(scrollYProgress, [0, 1], [0.95, 1.05])

  const steps = [
    {
      title: "Choose & Order",
      description: "Choose a plan, order your logo, and submit your brief using our form of checkout.",
      icon: <FaPenNib className="text-xl" />
    },
    {
      title: "Designer Assigned",
      description: "A dedicated designer is assigned to start working on your logo immediately.",
      icon: <FaWandMagicSparkles className="text-xl" />
    },
    {
      title: "Receive Concepts",
      description: "You will receive three logo concepts in your sign-logo panel for review and approval within 48 hours.",
      icon: <FaHandHolding className="text-xl" />
    }
  ]

  return (
    <motion.section 
      ref={ref}
      style={{ opacity }}
      className="py-20  relative overflow-hidden"
    >
      {/* Background elements */}
      <motion.div 
        className="absolute inset-0"
        style={{ 
          y,
          scale,
          backgroundImage: "radial-gradient(circle at 50% 50%, rgba(168, 85, 247, 0.1) 0%, transparent 70%)"
        }}
      />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ 
            opacity: 1, 
            y: 0,
            transition: { duration: 0.6 }
          }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-center mb-16 text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-white"
        >
          GETTING STARTED IS SUPER EASY!
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ 
                opacity: 1, 
                y: 0,
                transition: { 
                  duration: 0.6,
                  delay: index * 0.15 
                }
              }}
              viewport={{ once: true, margin: "-50px" }}
              whileHover={{ 
                y: -10,
                transition: { duration: 0.3 }
              }}
              className="bg-purple-900/20 backdrop-blur-sm p-8 rounded-2xl border border-purple-700/30 shadow-lg"
            >
              <div className="flex items-center mb-4">
                <motion.div 
                  className="flex items-center justify-center w-12 h-12 rounded-full bg-purple-600 text-white font-bold text-xl mr-4"
                  whileHover={{ rotate: 10, scale: 1.1 }}
                >
                  {step.icon}
                </motion.div>
                <h3 className="text-2xl font-bold text-white">{step.title}</h3>
              </div>
              <p className="text-purple-200 text-lg">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  )
}

export default GettingStarted