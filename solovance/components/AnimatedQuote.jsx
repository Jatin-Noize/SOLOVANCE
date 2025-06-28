'use client'
import { motion, useScroll, useTransform, useMotionValueEvent } from 'framer-motion'
import { useRef, useState } from 'react'
import { Syne } from 'next/font/google'

const herofont = Syne({
  weight: '400',
  subsets: ['latin'],
})

const AnimatedQuote = () => {
  const ref = useRef(null)
  const [scrollDirection, setScrollDirection] = useState('down')
  const [lastScrollY, setLastScrollY] = useState(0)
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })

  // Track scroll direction
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (latest > lastScrollY) {
      setScrollDirection('down')
    } else {
      setScrollDirection('up')
    }
    setLastScrollY(latest)
  })

  // Animation based on scroll
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.9, 1, 1, 0.9])

  const text = "In today's competitive market, having a professional and memorable brand is more important than ever. At Solvance, our experienced designers with over 5 years in the industry create unique, modern logos that balance creativity with professionalism. We guarantee fast delivery within 24 hours, with packages starting at $225."

  return (
    <div ref={ref} className="w-full py-12 px-4 flex justify-center">
      <motion.div
        className={`max-w-3xl border border-purple-300/30 rounded-2xl p-6 md:p-8 text-center backdrop-blur-sm bg-purple-900/20 shadow-lg shadow-purple-900/20 ${herofont.className}`}
        style={{ opacity, scale }}
      >
        <motion.div className="text-xl md:text-2xl font-medium leading-snug md:leading-normal text-white flex flex-wrap justify-center gap-x-1 gap-y-0">
          {text.split(' ').map((word, index) => (
            <motion.span
              key={`word-${index}`}
              className="inline-block"
              initial={{ 
                opacity: 0, 
                y: scrollDirection === 'down' ? 20 : -20 
              }}
              whileInView={{
                opacity: 1,
                y: 0,
                transition: { 
                  delay: index * 0.02, 
                  duration: 0.3,
                  ease: "easeOut"
                },
              }}
              exit={{
                opacity: 0,
                y: scrollDirection === 'down' ? -20 : 20,
                transition: {
                  duration: 0.2
                }
              }}
              viewport={{ once: false, margin: "0px 0px -50px 0px" }}
              whileHover={{
                scale: 1.05,
                color: '#fff',
                textShadow: '0 0 6px rgba(192, 132, 252, 0.8)',
                transition: { duration: 0.15 },
              }}
            >
              {word + '\u00A0'}
            </motion.span>
          ))}
        </motion.div>
      </motion.div>
    </div>
  )
}

export default AnimatedQuote