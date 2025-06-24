
'use client'
import { motion } from 'framer-motion';

import Link from 'next/link';
import { useState } from "react";
import {  ArrowUp, User } from 'lucide-react';
import { ArrowRight, CalendarCheck } from 'lucide-react';

export default function HeroSection() {
     const [isHovered, setIsHovered] = useState(false);
  return (
    <main className="min-h-screen text-white flex items-center justify-center px-4">
      <div className="max-w-3xl text-center">
        {/* Tagline */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-block font-semibold bg-white/10 text-sm px-4 py-2 rounded-full mb-6"
        >
         Three concepts in two days
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl sm:text-5xl font-extrabold leading-tight mb-6"
        >
           The First Choice in <span className="text-purple-500"> WHITE LABEL</span>  Logo Design for Agencies <br className="hidden sm:block" />
       
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="text-gray-300 mb-8"
        >
         We deliver professionally hand-designed
white label logos within 1 day all at a fixed price
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="flex justify-center gap-4"
        >
         <Link
                        href="#"
                        className="relative w-36 bg-purple-600 hover:bg-purple-700 transition-colors duration-200 text-white px-5 py-2.5 rounded-full text-sm font-semibold flex items-center justify-center gap-2 shadow-lg hover:shadow-purple-500/20 whitespace-nowrap overflow-hidden"
                        onMouseEnter={() => setIsHovered(true)}
                        onMouseLeave={() => setIsHovered(false)}
                    >
                        {/* Default state */}
                        <span className={`flex items-center gap-2 transition-all duration-200 ${
                            isHovered ? "opacity-0 translate-x-[-20px]" : "opacity-100"
                        }`}>
                            See plans
                            <ArrowRight size={16} className="stroke-[2.5]" />
                        </span>
                        
                        {/* Hover state - centered arrow */}
                        <ArrowUp
                            size={24}
                            className={`absolute transition-all duration-200 stroke-[2.5] ${
                                isHovered
                                    ? "opacity-100 translate-y-0 rotate-45"
                                    : "opacity-0 translate-y-2"
                            }`}
                        />
                    </Link>
          <button className="bg-white/10 hover:bg-white/20 transition px-6 py-3 rounded-full text-white font-medium flex items-center gap-2">
            <CalendarCheck size={18} />
          </button>
        </motion.div>
      </div>
    </main>
  );
}
