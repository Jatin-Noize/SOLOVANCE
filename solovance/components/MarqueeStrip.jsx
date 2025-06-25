'use client'
import { motion } from 'framer-motion'
import { FaHeart, FaCoffee, FaRegSmileWink } from 'react-icons/fa'
import { Mina, Michroma } from "next/font/google"

const herofont = Mina({
  weight: "400",
  subsets: ['latin']
});

const footer = Michroma({
  weight: "400",
  subsets: ['latin']
}); 

const MarqueeStrip = () => {
  const messages = [
    {
      text: "Not happy? Get a 100% refund",
      icon: <FaRegSmileWink className="text-purple-300" />
    },
    {
      text: "100% handcrafted by coffee fueled designers",
      icon: <FaCoffee className="text-purple-300" />
    },
    {
      text: "Less than 1% of applicants join our team",
      icon: <FaHeart className="text-purple-300" />
    }
  ]

  return (
    <div className="relative bg-[#10002b] border-t border-b border-purple-900/30 py-4 overflow-hidden">
      <motion.div 
        className={`flex ${footer.className}`}
        animate={{
          x: ['0%', '-50%'], 
        }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: 'loop',
            duration: 20,
            ease: 'linear',
          },
        }}
      >
        {[...messages, ...messages].map((message, i) => (
          <div 
            key={i} 
            className="flex items-center shrink-0 px-8"
          >
            <span className="mr-3 text-2xl">{message.icon}</span>
            <span className="text-2xl text-purple-100 font-medium tracking-tight">
              {message.text}
            </span>
            <span className="mx-8 text-purple-900/50 text-2xl">•</span>
          </div>
        ))}
      </motion.div>
      
      {/* Invisible duplicate for seamless looping */}
      <div className={`absolute top-0 left-full  ${footer.className}`}>
        {messages.map((message, i) => (
          <div 
            key={`duplicate-${i}`} 
            className="flex items-center shrink-0 px-8 opacity-0"
          >
            <span className="mr-3 text-2xl">{message.icon}</span>
            <span className="text-2xl text-purple-100 font-medium tracking-tight">
              {message.text}
            </span>
            <span className="mx-8 text-purple-900/50 text-2xl">•</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default MarqueeStrip