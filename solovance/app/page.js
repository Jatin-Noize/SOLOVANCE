'use client'

import Footer from '@/components/Footer';
import HeroSection from '@/components/Hero';
import Navbar from '@/components/Navbar';
import React, { useEffect } from 'react';
import LogoMarquee from '@/components/LogoMarquee';
import CounterSection from '@/components/CounrterSection';
import AnimatedQuote from '@/components/AnimatedQuote';
import GettingStarted from '@/components/GettingStarted';
import MarqueeStrip from '@/components/MarqueeStrip';
import PricingComponent from '@/components/PricingComponent';
import FAQSection from '@/components/FAQSection';
import Quote from '@/components/Quote';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import ContactUsForm from '@/components/ContactUsForm';

// Animation variants
const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  },
  exit: {
    opacity: 0,
    y: -50,
    transition: {
      duration: 0.4,
      ease: "easeIn"
    }
  }
};

// Animated Section Wrapper Component
const AnimatedSection = ({ children, id }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: false, // Change to true if you only want animation once
    threshold: 0.1
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("exit");
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={sectionVariants}
      id={id}
      className="w-full"
    >
      {children}
    </motion.div>
  );
};

const Page = () => {
  useEffect(() => {
    // Create stars
    const stars = () => {
      const count = 200;
      const container = document.querySelector('.star-container');
      
      for (let i = 0; i < count; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        
        const x = Math.floor(Math.random() * 100);
        const y = Math.floor(Math.random() * 100);
        const duration = Math.random() * 10;
        const size = Math.random() * 2;
        
        star.style.left = `${x}%`;
        star.style.top = `${y}%`;
        star.style.width = `${size}px`;
        star.style.height = `${size}px`;
        star.style.animationDuration = `${5 + duration}s`;
        star.style.animationDelay = `${duration}s`;
        
        container?.appendChild(star);
      }
    };
    
    stars();
  }, []);

  return (
    <div className='min-h-screen bg-gradient-to-br from-purple-900 via-black to-purple-900 relative overflow-hidden'>
      {/* Star container */}
      <div className="star-container absolute inset-0 overflow-hidden pointer-events-none"></div>
      
      {/* Main content container */}
      <div className="flex flex-col jus items-center w-full scroll-smooth">
        <div className="w-full z-50 fixed max-w-7xl px-4 sm:px-6 lg:px-8">
          <Navbar />
        </div>
        
        {/* Hero Section - No animation as it's the first thing users see */}
        <div className="w-full">
          <HeroSection />
        </div>

        {/* Animated Sections */}
        <AnimatedSection>
          <LogoMarquee id="portfolio" />
        </AnimatedSection>
        
        <AnimatedSection>
          <CounterSection />
        </AnimatedSection>
        
        <AnimatedSection>
          <AnimatedQuote />
        </AnimatedSection>
        
        <AnimatedSection className="flex justify-center">
          <GettingStarted id="how-it-works" />
        </AnimatedSection>
        
        <AnimatedSection>
          <Quote />
        </AnimatedSection>
        
        <AnimatedSection>
          <PricingComponent id="pricing" />
        </AnimatedSection>
        
        <AnimatedSection>
          <div className='rotate-3 h-36'>
            <MarqueeStrip />
          </div>
        </AnimatedSection>
        
        <AnimatedSection>
          <FAQSection id="faq" />
         
        </AnimatedSection>
        
        <Footer />
      </div>

      <style jsx global>{`
        @keyframes twinkle {
          0% { transform: scale(1); opacity: 0.2; }
          50% { transform: scale(1.5); opacity: 1; }
          100% { transform: scale(1); opacity: 0.2; }
        }
        .star {
          position: absolute;
          background-color: white;
          border-radius: 50%;
          animation: twinkle infinite ease-in-out;
          filter: drop-shadow(0 0 5px rgba(255, 255, 255, 0.8));
        }
        .star:nth-child(3n) {
          background-color: #d8b4fe;
        }
        .star:nth-child(5n) {
          background-color: #c084fc;
        }
      `}</style>
    </div>
  );
};

export default Page;