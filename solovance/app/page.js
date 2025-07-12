'use client'

import Head from 'next/head';
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
    triggerOnce: false,
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
    <>
      <Head>
          
        <title>Solvance | Powerful Solution for logo design</title>
         
        <meta name="description" content="Discover our innovative solutions that help businesses grow faster. Explore our services, pricing, and portfolio. Get started today with our easy-to-use platform." />
        <meta name="keywords" content="your, keywords, here, business, solution" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="Logo Design Platform Website" />
        <meta property="og:url" content="https://www.facebook.com/share/1ZAeAiroNY/?mibextid=wwXIfr" />
        <meta property="og:title" content="Solvance | Powerful Solution for Your Needs" />
        <meta property="og:description" content="Discover our innovative solutions that help businesses grow faster. Explore our services, pricing, and portfolio." />
        <meta property="og:image" content="https://yourwebsite.com/images/og-image.jpg" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://yourwebsite.com/" />
        <meta property="twitter:title" content="Your Brand Name | Powerful Solution for Your Needs" />
        <meta property="twitter:description" content="Discover our innovative solutions that help businesses grow faster. Explore our services, pricing, and portfolio." />
        <meta property="twitter:image" content="https://yourwebsite.com/images/twitter-image.jpg" />

        {/* Canonical URL */}
        <link rel="canonical" href="https://yourwebsite.com/" />
      </Head>

      <div className='min-h-screen bg-gradient-to-br from-purple-900 via-black to-purple-900 relative overflow-hidden'>
        {/* Star container */}
        <div className="star-container absolute inset-0 overflow-hidden pointer-events-none"></div>
        
        {/* Main content container */}
        <div className="flex flex-col jus items-center w-full scroll-smooth">
          <div className="w-full z-50 fixed max-w-7xl px-4 sm:px-6 lg:px-8">
            <Navbar />
          </div>
          
          {/* Hero Section */}
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
    </>
  );
};

export default Page;