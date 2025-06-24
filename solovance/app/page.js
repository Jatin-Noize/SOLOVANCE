'use client'

import Footer from '@/components/Footer';
import HeroSection from '@/components/Hero';
import Navbar from '@/components/Navbar';
import React, { useEffect } from 'react';
import LogoMarquee from '@/components/LogoMarquee';

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
      
      {/* Centered content container */}
      <div className="flex flex-col items-center w-full">
        <div className="w-full fixed max-w-7xl px-4 sm:px-6 lg:px-8">
          <Navbar />
        </div>
        <HeroSection />
         <LogoMarquee />
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
          background-color: #d8b4fe; /* purple-300 */
        }
        .star:nth-child(5n) {
          background-color: #c084fc; /* purple-400 */
        }
      `}</style>
    </div>
  );
};

export default Page;