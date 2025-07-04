import Link from 'next/link';
import Image from 'next/image';
import { Mina, Syne } from "next/font/google";
import Logo from "../public/SOLVANCE-04.png";
import ContactUsForm from './ContactUsForm';
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
            className={`bg-purple-500 mt-6 hover:bg-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center gap-2 transition-colors ${footer.className} `}
          >
            Book a call
            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
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
      <motion.div 
        variants={containerVariants}
        className={`max-w-7xl mx-auto border-t border-gray-700 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500 ${footer.className} `}
      >
        <motion.p variants={itemVariants} className="mb-4 md:mb-0">&copy; 2025 Solvance. All rights reserved.</motion.p>
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
    </motion.footer>
  );
}