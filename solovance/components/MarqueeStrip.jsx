'use client'
import { motion } from 'framer-motion'
import { FaHeart, FaCoffee, FaRegSmileWink } from 'react-icons/fa'
import { Bebas_Neue, Michroma,Oswald} from "next/font/google"

const herofont = Bebas_Neue({
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
      text: "100% Custom-Crafted by Creative Designers",
      icon: <FaRegSmileWink className="text-purple-300" />
    },
    {
      text: "Less than 1% of applicants qualify to join our team.",
      icon: <FaCoffee className="text-purple-300" />
    },
    {
      text: "100% Custom-Crafted by Creative Designers",
      icon: <FaHeart className="text-purple-300" />
    }
  ]

  return (
    <div className="relative bg-[#d038ffd9] mt-36 border-t border-b border-purple-900/30 py-4 overflow-hidden">
      <motion.div 
        className={`flex ${herofont.className}`}
        animate={{
          x: ['0%', '-50%'], 
        }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: 'loop',
            duration: 10,
            ease: 'linear',
          },
        }}
      >
        {[...messages, ...messages].map((message, i) => (
          <div 
            key={i} 
            className="flex items-center shrink-0 px-8"
          >
            <span className="mr-3 text-5xl">{message.icon}</span>
            <span className="text-5xl text-purple-100 font-medium tracking-tight">
              {message.text}
            </span>
          
          </div>
        ))}
      </motion.div>
      
      {/* Invisible duplicate for seamless looping */}
      <div className={`absolute top-0 left-full  ${herofont.className}`}>
        {messages.map((message, i) => (
          <div 
            key={`duplicate-${i}`} 
            className="flex items-center shrink-0 px-8 opacity-0"
          >
            <span className="mr-3 text-5xl">{message.icon}</span>
            <span className="text-5xl uppercase text-purple-100 font-medium tracking-tight">
              {message.text}
            </span>
        
          </div>
        ))}
      </div>
    </div>
  )
}

export default MarqueeStrip