
"use client"
import Link from 'next/link';
import Image from 'next/image';
import { Mina, Syne } from "next/font/google";
import Logo from "../public/SOLVANCE-04.png";
import { ArrowUp, ArrowRight, CalendarCheck } from 'lucide-react';
import ContactUsForm from './ContactUsForm';

import { FaWhatsapp } from 'react-icons/fa';

import { useState } from 'react';
import { motion } from 'framer-motion';

const herofont = Syne({
  weight: "400",
  subsets: ['latin']
});

const footer = Syne({
  weight: "400",
  subsets: ['latin']
}); 

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};


const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  }
};


export default function Footer() {
    const [isContactFormOpen, setIsContactFormOpen] = useState(false);
    const [isHovered, setIsHovered] = useState(false);
  // Smooth scroll function
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
      
      // Update URL without page reload
      if (window.history.pushState) {
        window.history.pushState(null, null, `#${id}`);
      } else {
        window.location.hash = `#${id}`;
      }
    }
  };

  return (
    <motion.footer 
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={containerVariants}
      className="bg-[#14001d] w-full px-4 sm:px-6 lg:px-8 py-12 md:py-16 lg:py-20 text-gray-300"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
        {/* Left section: logo and CTA */}
        <motion.div variants={itemVariants} className="md:col-span-2">
          <div className="flex items-center gap-2 mb-4">
            <Link href="/" className="flex items-center">
              <Image
                src={Logo}
                alt="Solvance Logo"
                width={150}
                height={50}
                className="object-contain hover:opacity-90 transition-opacity w-40 md:w-44"
                priority
              />
            </Link>
          </div>
          <motion.p variants={itemVariants} className={`text-sm text-gray-400 mb-6 ${footer.className}`}>
          Get your agency aligned with Solvance
 quality service at the best price
          </motion.p>
      <motion.button
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
  variants={itemVariants}
  onClick={() => setIsContactFormOpen(true)}
  className={`relative w-44 h-12 bg-white/10 hover:bg-gradient-to-b from-zinc-700 to-purple-400 mt-6 transition-colors duration-200 text-white rounded-2xl text-sm font-medium flex items-center justify-center overflow-hidden ${footer.className}`}
  onMouseEnter={() => setIsHovered(true)}
  onMouseLeave={() => setIsHovered(false)}
>
  {/* Default state - text with small icon */}
  <motion.span
    className={`flex items-center gap-2 transition-all duration-200 absolute ${
      isHovered ? 'opacity-0 -translate-x-5' : 'opacity-100 translate-x-0'
    }`}
  >
    Book a call
    <CalendarCheck size={20} />
  </motion.span>

  
  <motion.span
    className="absolute flex items-center justify-center"
    initial={{ opacity: 0, y: 10 }}
    animate={{
      opacity: isHovered ? 1 : 0,
      y: isHovered ? 0 : 10,
      rotate: isHovered ? 45 : 0
    }}
    transition={{ duration: 0.2 }}
  >
    <CalendarCheck size={28} className="stroke-[2.5]" />
  </motion.span>
</motion.button>
            <ContactUsForm
        isOpen={isContactFormOpen}
        onClose={() => setIsContactFormOpen(false)}
      />
        </motion.div>

        {/* Quick links section */}
        <motion.div className={`${herofont.className} mt-12`} variants={itemVariants}>
          <motion.h3 variants={itemVariants} className="text-white font-semibold mb-4 text-sm md:text-base">Quick links</motion.h3>
          <motion.ul variants={containerVariants} className="space-y-2 text-sm">
            <motion.li variants={itemVariants}>
              <button 
                onClick={() => scrollToSection('how-it-works')}
                className="text-gray-300 hover:text-white transition-colors duration-200 hover:underline underline-offset-4 decoration-purple-400 text-left w-full py-1"
              >
                About Us
              </button>
            </motion.li>
            <motion.li variants={itemVariants}>
              <button
                onClick={() => scrollToSection('portfolio')}
                className="text-purple-400 hover:text-white transition-colors duration-200 font-semibold hover:underline underline-offset-4 decoration-purple-400 text-left w-full py-1"
              >
                Portfolio
              </button>
            </motion.li>
            <motion.li variants={itemVariants}>
              <button
                onClick={() => scrollToSection('pricing')}
                className="text-gray-300 hover:text-white transition-colors duration-200 hover:underline underline-offset-4 decoration-purple-400 text-left w-full py-1"
              >
                Pricing
              </button>
            </motion.li>
            <motion.li variants={itemVariants}>
              <button
                onClick={() => scrollToSection('faq')}
                className="text-gray-300 hover:text-white transition-colors duration-200 hover:underline underline-offset-4 decoration-purple-400 text-left w-full py-1"
              >
                FAQ
              </button>
            </motion.li>
          </motion.ul>
        </motion.div>
      </div>

      {/* Bottom bar */}
    {/* Bottom bar */}
<motion.div 
  variants={containerVariants}
  className={`max-w-7xl mx-auto border-t border-gray-700 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500 ${footer.className}`}
>
  <motion.p variants={itemVariants} className="mb-4 md:mb-0">&copy; 2025 Solvance. All rights reserved.</motion.p>
  
  <motion.div variants={containerVariants} className="flex flex-col md:flex-row items-center gap-6">
    {/* Social Media Links */}
    <motion.div variants={itemVariants} className="flex mx-10  gap-4">
 <Link 
  href="https://www.facebook.com/share/1ZAeAiroNY/?mibextid=wwXIfr" 
  target="_blank" 
  rel="noopener noreferrer"
  className="text-gray-400 hover:text-purple-400 transition-colors"
  aria-label="Facebook"
>
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width="20" 
    height="20" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round"
  >
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
  </svg>
</Link>

      <Link 
        href="https://www.instagram.com/solvance_agency/profilecard/?igsh=MWs2cDBnamdteWM4Mg==" 
        target="_blank" 
        rel="noopener noreferrer"
        className="text-gray-400 hover:text-purple-400 transition-colors"
        aria-label="Instagram"
      >
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          width="20" 
          height="20" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="2" 
          strokeLinecap="round" 
          strokeLinejoin="round"
        >
          <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
          <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
        </svg>
      </Link>
      <Link 
        href="https://www.linkedin.com/in/solvance-68a712373/" 
        target="_blank" 
        rel="noopener noreferrer"
        className="text-gray-400 hover:text-purple-400 transition-colors"
        aria-label="LinkedIn"
      >
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          width="20" 
          height="20" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="2" 
          strokeLinecap="round" 
          strokeLinejoin="round"
        >
          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
          <rect width="4" height="12" x="2" y="9"/>
          <circle cx="4" cy="4" r="2"/>
        </svg>
      </Link>
    </motion.div>

    {/* Legal Links */}
    <motion.div variants={containerVariants} className="flex flex-wrap gap-4 justify-center md:justify-end">
      <motion.span variants={itemVariants}>
        <Link href="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
      </motion.span>
      <motion.span variants={itemVariants}>
        <Link href="/terms-of-service" className="hover:text-white transition-colors">Terms of Service</Link>
      </motion.span>
      <motion.span variants={itemVariants}>
        <Link href="/disclaimer" className="hover:text-white transition-colors">Disclaimer</Link>
      </motion.span>
      <motion.span variants={itemVariants}>
        <Link href="/cookie-policy" className="hover:text-white transition-colors">Cookie Policy</Link>
      </motion.span>
    </motion.div>
  </motion.div>
</motion.div>
<button onClick={()=>{alert("j-noize")}} className='text-white h-2 w-2'>.</button>
    </motion.footer>
  );
}