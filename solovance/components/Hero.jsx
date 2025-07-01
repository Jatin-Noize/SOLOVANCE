'use client'
import { motion } from 'framer-motion';
import Link from 'next/link';
import ContactUsForm from "./ContactUsForm";

import {Mina,Oswald, Bebas_Neue,Syne} from "next/font/google"
const button = Syne({
  weight:"400",
  subsets:['latin']
}); 

const hero = Syne({
  weight:"500",
  subsets:['latin']
})

import { useState } from "react";
import { ArrowUp, ArrowRight, CalendarCheck } from 'lucide-react';
const herofont = Bebas_Neue({
  weight:"400",
  subsets:['latin']
}); 

export default function HeroSection() {
  const [isContactFormOpen, setIsContactFormOpen] = useState(false);
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
<main className="min-h-screen text-white flex items-center justify-center px-4 sm:px-6">
  <div className="max-w-3xl mt-24 sm:mt-36 text-center sm:text-left space-y-8">
    {/* Tagline */}
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.6 }}
      className={`mx-auto max-w-fit text-md font-semibold bg-white/10 px-4 py-2 rounded-full ${button.className}`}
    >
      Three concepts in one day
    </motion.div>

    <motion.h1
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.8 }}
      className={`${herofont.className} text-5xl sm:text-5xl md:text-6xl lg:text-7xl tracking-tight font-extrabold sm:leading-[0.95] text-left sm:text-center`}
    >
      The First Choice in{' '}
      <span className={`text-purple-500 ${herofont.className}`}>WHITE LABEL</span>{' '}
      <span className="block sm:inline mt-[-0.2em] sm:mt-0">Logo Design for Agencies</span>
    </motion.h1>

    {/* Description */}
    <motion.p
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ delay: 0.6, duration: 0.8 }}
      className={`${hero.className} mb-12 text-zinc-400 text-lg sm:text-xl  text-left sm:text-center`}
    >
      We deliver professionally hand-designed white label logos within 1 day all at a fixed price
    </motion.p>

    {/* CTA Buttons - Changed to justify-start on mobile */}
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 10 }}
      transition={{ delay: 0.8, duration: 0.6 }}
      className="flex justify-start sm:justify-center gap-4"
    >
      <div
        href="/pricing"
        className={`relative w-42 h-12 bg-purple-600 hover:bg-purple-700 transition-colors duration-200 text-white rounded-2xl text-sm font-semibold flex items-center justify-center gap-2 shadow-lg hover:shadow-purple-500/20 whitespace-nowrap overflow-hidden ${button.className}`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <button
          onClick={() => scrollToSection('pricing')}
          className={`flex items-center text-lg gap-2 transition-all duration-200 ${
            isHovered ? "opacity-0 translate-x-[-20px]" : " opacity-100"
          }`}
        >
          Check Plans
          <ArrowRight size={24} className="stroke-[2.5]" />
        </button>

        <ArrowUp
          size={36}
          className={`absolute transition-all duration-200 stroke-[2.5] ${
            isHovered
              ? "opacity-100 translate-y-0 rotate-45"
              : "opacity-0 translate-y-2"
          }`}
        />
      </div>

      <div>
        <button 
          onClick={() => {setIsContactFormOpen(true)}} 
          className="bg-white/10 hover:bg-white/20 transition px-6 py-3 rounded-full text-white font-medium flex items-center gap-2"
        >
          <CalendarCheck size={24} />
        </button>
        <ContactUsForm
          isOpen={isContactFormOpen}
          onClose={() => setIsContactFormOpen(false)}
        />
      </div>
    </motion.div>
  </div>
</main>
  );
}