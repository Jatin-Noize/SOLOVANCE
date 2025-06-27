'use client'
import Link from 'next/link';
import { ArrowRight, ArrowUp, User, Menu, X } from 'lucide-react';
import LoginModal from './LoginModal'; 
import Logo from "../public/SOLVANCE-04.png";
import Image from "next/image";
import { Michroma, Oswald } from "next/font/google"
import { useState } from "react";

const navfont = Michroma({
  weight: "400",
  subsets: ['latin']
});

const button = Oswald({
  weight: "400",
  subsets: ['latin']
});

export default function Navbar() {
  const [isHovered, setIsHovered] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Smooth scroll function
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
    setIsMobileMenuOpen(false); // Close mobile menu after clicking a link
  };

  return (
    <div className="w-full flex justify-center">
      <header className="w-full max-w-7xl backdrop-blur-md rounded-full m-4 bg-[#45434500] px-4 sm:px-6 md:px-8 lg:px-12 flex items-center justify-between shadow-xl border-b border-purple-900/30">
        {/* Logo */}
        <div className="flex items-center">
          <Link href="/" className="flex items-center">
            <Image
              src={Logo}
              alt="Solvance Logo"
              width={200}
              height={70}
              className="object-contain mix-multiply hover:opacity-90 transition-opacity w-40 md:w-48"
              priority
            />
          </Link>
        </div>

        {/* Desktop Navigation Links */}
        <nav className={`hidden md:flex font-serif items-center gap-8 text-sm font-medium ${navfont.className}`}>
          <button 
            onClick={() => scrollToSection('how-it-works')}
            className="text-gray-300 hover:text-white transition-colors duration-200 hover:underline underline-offset-4 decoration-purple-400"
          >
            How it works
          </button>
          <button
            onClick={() => scrollToSection('portfolio')}
            className="text-purple-400 hover:text-white transition-colors duration-200 font-semibold hover:underline underline-offset-4 decoration-purple-400"
          >
            Portfolio
          </button>
          <button
            onClick={() => scrollToSection('pricing')}
            className="text-gray-300 hover:text-white transition-colors duration-200 hover:underline underline-offset-4 decoration-purple-400"
          >
            Pricing
          </button>
          <button
            onClick={() => scrollToSection('faq')}
            className="text-gray-300 hover:text-white transition-colors duration-200 hover:underline underline-offset-4 decoration-purple-400"
          >
            FAQ
          </button>
        </nav>

        {/* Desktop Action Buttons - Always visible on desktop */}
        <div className="hidden md:flex items-center gap-2 sm:gap-4">
          <button
            onClick={() => setIsLoginOpen(true)}
            className="p-2 rounded-full hover:bg-purple-900/30 transition-colors duration-200"
            aria-label="User login"
          >
            <User className="text-white w-5 h-5 hover:text-purple-300" />
          </button>
          
          <button
            onClick={() => scrollToSection('pricing')}
            className={`relative w-24 sm:w-28 bg-purple-600 hover:bg-purple-700 transition-colors duration-200 text-white px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-sm font-semibold flex items-center justify-center gap-2 shadow-lg hover:shadow-purple-500/20 whitespace-nowrap overflow-hidden ${button.className}`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            aria-label="View pricing plans"
          >
            <span 
              className={`flex items-center gap-2 transition-all duration-200 ${
                isHovered ? "opacity-0 translate-x-[-20px]" : "opacity-100"
              }`}
            >
              See plans
              <ArrowRight size={16} className="stroke-[2.5] hidden sm:block" />
            </span>
            <ArrowUp
              size={20}
              className={`absolute transition-all duration-200 stroke-[2.5] ${
                isHovered
                  ? "opacity-100 translate-y-0 rotate-45"
                  : "opacity-0 translate-y-2"
              }`}
            />
          </button>
        </div>

        {/* Mobile Menu Button - Only visible on mobile */}
        <div className="md:hidden flex items-center gap-2">
          <button
            onClick={() => setIsLoginOpen(true)}
            className="p-2 rounded-full hover:bg-purple-900/30 transition-colors duration-200"
            aria-label="User login"
          >
            <User className="text-white w-5 h-5 hover:text-purple-300" />
          </button>
          
          <button 
            className="p-2 rounded-full hover:bg-purple-900/30 transition-colors duration-200"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <Menu className="text-white w-5 h-5" />
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="md:hidden fixed inset-0 bg-black/90 backdrop-blur-sm z-50">
          {/* Close Button */}
          <button 
            className="absolute top-6 right-6 p-2 rounded-full hover:bg-purple-900/30 transition-colors duration-200"
            onClick={() => setIsMobileMenuOpen(false)}
            aria-label="Close menu"
          >
            <X className="text-white w-6 h-6" />
          </button>
          
          {/* Menu Content */}
          <div className="h-full flex flex-col items-center justify-center gap-8 text-lg font-medium">
            <button 
              onClick={() => scrollToSection('how-it-works')}
              className="text-gray-300 hover:text-white transition-colors duration-200 py-3 w-full text-center border-b border-purple-900/30"
            >
              How it works
            </button>
            <button
              onClick={() => scrollToSection('portfolio')}
              className="text-purple-400 hover:text-white transition-colors duration-200 font-semibold py-3 w-full text-center border-b border-purple-900/30"
            >
              Portfolio
            </button>
            <button
              onClick={() => scrollToSection('pricing')}
              className="text-gray-300 hover:text-white transition-colors duration-200 py-3 w-full text-center border-b border-purple-900/30"
            >
              Pricing
            </button>
            <button
              onClick={() => scrollToSection('faq')}
              className="text-gray-300 hover:text-white transition-colors duration-200 py-3 w-full text-center border-b border-purple-900/30"
            >
              FAQ
            </button>

            {/* Mobile Action Button */}
            <button
              onClick={() => scrollToSection('pricing')}
              className="mt-8 bg-purple-600 hover:bg-purple-700 transition-colors duration-200 text-white px-8 py-3 rounded-full text-base font-semibold flex items-center justify-center gap-2 shadow-lg hover:shadow-purple-500/20"
            >
              See plans
              <ArrowRight size={18} className="stroke-[2.5]" />
            </button>
          </div>
        </div>
      )}

      <LoginModal isOpen={isLoginOpen} onClose={() => setIsLoginOpen(false)} />
    </div>
  );
}