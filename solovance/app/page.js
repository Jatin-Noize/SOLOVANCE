'use client'

import Head from 'next/head';
import dynamic from 'next/dynamic';
import React, { useEffect, useMemo } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

// Dynamically imported components with loading states
const Navbar = dynamic(() => import('@/components/Navbar'), {
  loading: () => <div className="w-full h-16 bg-transparent" />,
  ssr: false
});

const HeroSection = dynamic(() => import('@/components/Hero'), {
  loading: () => <div className="w-full h-screen bg-transparent" />
});

const LogoMarquee = dynamic(() => import('@/components/LogoMarquee'), {
  loading: () => <div className="w-full h-32 bg-transparent" />
});

const CounterSection = dynamic(() => import('@/components/CounrterSection'), {
  loading: () => <div className="w-full h-64 bg-transparent" />
});

const AnimatedQuote = dynamic(() => import('@/components/AnimatedQuote'), {
  loading: () => <div className="w-full h-48 bg-transparent" />
});

const GettingStarted = dynamic(() => import('@/components/GettingStarted'), {
  loading: () => <div className="w-full h-96 bg-transparent" />
});

const Quote = dynamic(() => import('@/components/Quote'), {
  loading: () => <div className="w-full h-64 bg-transparent" />
});

const PricingComponent = dynamic(() => import('@/components/PricingComponent'), {
  loading: () => <div className="w-full h-[800px] bg-transparent" />
});

const MarqueeStrip = dynamic(() => import('@/components/MarqueeStrip'), {
  loading: () => <div className="w-full h-36 bg-transparent" />
});

const FAQSection = dynamic(() => import('@/components/FAQSection'), {
  loading: () => <div className="w-full h-[600px] bg-transparent" />
});

const Footer = dynamic(() => import('@/components/Footer'), {
  loading: () => <div className="w-full h-64 bg-transparent" />
});

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
  }
};

// Optimized Animated Section Wrapper
const AnimatedSection = ({ children, id }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  useEffect(() => {
    if (inView) controls.start("visible");
  }, [controls, inView]);

  return (
    <motion.section
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={sectionVariants}
      id={id}
      className="w-full"
    >
      {children}
    </motion.section>
  );
};

const Page = () => {
  const stars = useMemo(() => (
    Array.from({ length: 50 }, (_, i) => (
      <div 
        key={i}
        className="absolute rounded-full animate-twinkle"
        style={{
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
          width: `${Math.random() * 2 + 1}px`,
          height: `${Math.random() * 2 + 1}px`,
          animationDuration: `${Math.random() * 10 + 5}s`,
          animationDelay: `${Math.random() * 5}s`,
          backgroundColor: i % 5 === 0 ? '#c084fc' : i % 3 === 0 ? '#d8b4fe' : 'white',
        }}
      />
    ))
  ), []);

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
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {stars}
        </div>
        
        {/* Main content container */}
        <main className="flex flex-col items-center w-full scroll-smooth">
          <div className="w-full z-50 fixed max-w-7xl px-4 sm:px-6 lg:px-8">
            <Navbar />
          </div>
          
          <HeroSection />
          
          <AnimatedSection>
            <LogoMarquee id="portfolio" />
          </AnimatedSection>
          
          <AnimatedSection>
            <CounterSection />
          </AnimatedSection>
          
          <AnimatedSection>
            <AnimatedQuote />
          </AnimatedSection>
          
          <AnimatedSection>
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
        </main>

        <style jsx global>{`
          @keyframes twinkle {
            0% { transform: scale(1); opacity: 0.2; }
            50% { transform: scale(1.5); opacity: 1; }
            100% { transform: scale(1); opacity: 0.2; }
          }
          .animate-twinkle {
            animation: twinkle infinite ease-in-out;
            filter: drop-shadow(0 0 5px rgba(255, 255, 255, 0.8));
          }
        `}</style>
      </div>
    </>
  );
};

export default Page;