'use client'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { Syne, Mina } from 'next/font/google'

const herofont = Syne({
  weight: '400',
  subsets: ['latin'],
})

const AnimatedQuote = () => {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })

  // Animation based on scroll
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.9, 1, 1, 0.9])

  const text ="In today’s competitive market, having a professional and memorable brand is more important than ever. At Solvance, our experienced designers with over 5 yearsin the industry create unique, modern logos that balance creativity with professionalism.We guarantee fast delivery within 24 hours, with packages starting at $225."

  return (
    <div ref={ref} className="w-full py-20 px-6 flex justify-center">
      <motion.div
        className={`max-w-4xl border border-purple-300/30 rounded-3xl p-10 text-center backdrop-blur-sm bg-purple-900/20 shadow-xl shadow-purple-900/20 ${herofont.className}`}
        style={{ opacity, scale }}
      >
        <motion.div className="text-2xl md:text-3xl font-medium leading-relaxed text-white flex flex-wrap justify-center gap-1">
          {text.split(' ').map((word, index) => (
            <motion.span
              key={`word-${index}`}
              className="inline-block whitespace-nowrap"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{
                opacity: 1,
                y: 0,
                transition: { delay: index * 0.03, duration: 0.3 },
              }}
              viewport={{ once: true }}
              whileHover={{
                scale: 1.1,
                color: '#fff',
                textShadow: '0 0 8px rgba(192, 132, 252, 0.8)',
                transition: { duration: 0.2 },
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
