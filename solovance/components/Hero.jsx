'use client'
import { motion } from 'framer-motion';
import Link from 'next/link';
import {Mina,Oswald} from "next/font/google"
  const button = Oswald({
      weight:"400",
      subsets:['latin']
    }); 
import { useState } from "react";
import { ArrowUp, ArrowRight, CalendarCheck } from 'lucide-react';
   const herofont = Mina({
      weight:"400",
      subsets:['latin']
    }); 

export default function HeroSection() {
  const [isHovered, setIsHovered] = useState(false);
 const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };
  return (
    <main className="min-h-screen text-white flex items-center justify-center px-4">
      <div className="max-w-3xl sm:text-left text-center">
        
        {/* Tagline */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }} // <-- Exit animation
          transition={{ duration: 0.6 }}
          className={`inline-block   font-semibold bg-white/10 text-sm px-4 py-2 rounded-full mb-6 ${herofont.className} `}
        >
          Three concepts in two days
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }} // <-- Exit animation
          transition={{ duration: 0.8 }}
          className={` ${herofont.className}  text-3xl sm:text-left sm:text-5xl font-extrabold leading-tight mb-6`}
        >
          The First Choice in <span className={`text-purple-500 sm:text-left ${herofont.className}`}>WHITE LABEL</span> Logo Design for Agencies
          <br className="hidden sm:block" />
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }} // <-- Exit animation
          transition={{ delay: 0.6, duration: 0.8 }}
          className={` ${herofont.className
          } text-gray-300 mb-8 sm:text-left`}
        >
          We deliver professionally hand-designed white label logos within 1 day all at a fixed price
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 10 }} // <-- Exit animation
          transition={{ delay: 0.8, duration: 0.6 }}
          className="flex justify-center gap-4"
        >
          <div
            href="/pricing"
            className={`relative w-28  bg-purple-600 hover:bg-purple-700 transition-colors duration-200 text-white px-5 py-2.5 rounded-full text-sm font-semibold flex items-center justify-center gap-2 shadow-lg hover:shadow-purple-500/20 whitespace-nowrap overflow-hidden ${button.className} `}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <button
                        onClick={() => scrollToSection('pricing')}
              className={`flex items-center gap-2 transition-all duration-200 ${
                isHovered ? "opacity-0 translate-x-[-20px]" : "opacity-100"
              }`}
            >
              See plans
              <ArrowRight size={16} className="stroke-[2.5]" />
            </button>

            <ArrowUp
              size={24}
              className={`absolute transition-all duration-200 stroke-[2.5] ${
                isHovered
                  ? "opacity-100 translate-y-0 rotate-45"
                  : "opacity-0 translate-y-2"
              }`}
            />
          </div>

          <button className="bg-white/10 hover:bg-white/20 transition px-6 py-3 rounded-full text-white font-medium flex items-center gap-2">
            <CalendarCheck size={18} />
          </button>
        </motion.div>
      </div>
    </main>
  );
}
