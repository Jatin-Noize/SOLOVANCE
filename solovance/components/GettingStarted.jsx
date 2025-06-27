'use client';
import { motion, useScroll, useTransform } from 'framer-motion';
import { FaPenNib, FaWandMagicSparkles, FaHandHolding } from "react-icons/fa6";
import { useRef } from 'react';
import { Exo, Antonio } from 'next/font/google';

const font1 = Exo({
  weight: "400",
  subsets: ['latin']
});

const font2 = Antonio({
  weight: "400",
  subsets: ['latin']
});

const GettingStarted = ({ id }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  // Scroll-based animation values
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const y = useTransform(scrollYProgress, [0, 1], [50, -50]);
  const scale = useTransform(scrollYProgress, [0, 1], [0.95, 1.05]);

  const steps = [
    {
      title: "Choose & Order",
      description: "Choose a plan, order your logo, and submit your brief using our form of checkout.",
      icon: <FaPenNib />
    },
    {
      title: "Designer Assigned",
      description: "A dedicated designer is assigned to start working on your logo immediately.",
      icon: <FaWandMagicSparkles />
    },
    {
      title: "Receive Concepts",
      description: "You will receive three logo concepts in your sign-logo panel for review and approval within 48 hours.",
      icon: <FaHandHolding />
    }
  ];

  return (
    <section id={id} className="relative">
      <motion.section
        ref={ref}
        style={{ opacity, y, scale }}
        className="py-20 rounded-2xl shadow-lg shadow-purple-400 bg-purple-900/20 backdrop-blur-sm relative overflow-hidden"
      >
        {/* Background animation circle */}
        <motion.div
          className="absolute inset-0 pointer-events-none"
          style={{
            y,
            scale,
            backgroundImage: "radial-gradient(circle at 50% 50%, rgba(168, 85, 247, 0.1) 0%, transparent 70%)"
          }}
        />

        <div className="container mx-auto px-4 relative z-10">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0, transition: { duration: 0.6 } }}
            viewport={{ once: true }}
            className={`text-4xl md:text-5xl font-bold text-center mb-16 text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-white ${font1.className}`}
          >
            GETTING STARTED IS <br /> <span className='text-purple-400'>SUPER EASY!</span>
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0, transition: { duration: 0.6, delay: index * 0.15 } }}
                viewport={{ once: true, amount: 0.3 }}
                whileHover={{ y: -10, transition: { duration: 0.3 } }}
                className="flex flex-col items-center text-center p-6"
              >
                <motion.div
                  className="flex items-center justify-center w-20 h-20 rounded-full bg-purple-900/30 text-purple-400 mb-6 text-4xl"
                  whileHover={{ rotate: 10, scale: 1.1 }}
                >
                  {step.icon}
                </motion.div>
                <h3 className={`text-xl font-semibold text-white mb-3 ${font1.className}`}>
                  {step.title}
                </h3>
                <p className={`text-purple-200 text-lg ${font2.className}`}>
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>
    </section>
  );
};

export default GettingStarted;