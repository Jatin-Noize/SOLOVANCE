'use client'
import Link from 'next/link';
import { ArrowRight, ArrowUp, User, Weight } from 'lucide-react';
import Logo from "../public/SOLVANCE-04.png";
import Image from "next/image";
import {Michroma,Oswald} from "next/font/google"
import { useState } from "react";
   const navfont = Michroma({
      weight:"400",
      subsets:['latin']
    }); 
    const button = Oswald({
      weight:"400",
      subsets:['latin']
    }); 
  
export default function Navbar() {
    const [isHovered, setIsHovered] = useState(false);
 
    
    return (
        <div className="w-full flex justify-center">
            <header className="w-full max-w-7xl  rounded-full m-4 bg-[#45434500]  px-6 md:px-8 lg:px-12 flex items-center justify-between shadow-xl border-b border-purple-900/30">
                {/* Logo */}
                <div className="flex  items-center">
                    <Link href="/" className="flex items-center">
                        <Image
                            src={Logo}
                            alt="Solvance Logo"
                            width={180}
                            height={60}
                            className="object-contain mix-multiply shadow hover:opacity-90 transition-opacity"
                            priority
                        />
                    </Link>
                </div>

                {/* Navigation Links */}
                <nav className={`hidden md:flex font-serif items-center gap-8 text-sm font-medium ${navfont.className}`}>
                    <Link 
                        href="#" 
                        className="text-gray-300 hover:text-white transition-colors duration-200 hover:underline underline-offset-4 decoration-purple-400"
                    >
                        How it works
                    </Link>
                    <Link 
                        href="#" 
                        className="text-purple-400 hover:text-white transition-colors duration-200 font-semibold hover:underline underline-offset-4 decoration-purple-400"
                    >
                        Portfolio
                    </Link>
                    <Link 
                        href="#" 
                        className="text-gray-300 hover:text-white transition-colors duration-200 hover:underline underline-offset-4 decoration-purple-400"
                    >
                        Pricing
                    </Link>
                    <Link 
                        href="#" 
                        className="text-gray-300 hover:text-white transition-colors duration-200 hover:underline underline-offset-4 decoration-purple-400"
                    >
                        FAQ
                    </Link>
                </nav>

                {/* Profile & CTA */}
                <div className="flex items-center gap-4">
                    <button className="p-2 rounded-full hover:bg-purple-900/30 transition-colors duration-200">
                        <User className="text-white w-5 h-5 hover:text-purple-300" />
                    </button>
                    <Link
                        href="#"
                        className={`relative w-28  bg-purple-600 hover:bg-purple-700 transition-colors duration-200 text-white px-5 py-2.5 rounded-full text-sm font-semibold flex items-center justify-center gap-2 shadow-lg hover:shadow-purple-500/20 whitespace-nowrap overflow-hidden ${button.className} `}
                        onMouseEnter={() => setIsHovered(true)}
                        onMouseLeave={() => setIsHovered(false)}
                    >
                        {/* Default state */}
                        <span className={`flex items-center  gap-2 transition-all duration-200 ${
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
                </div>
            </header>
        </div>
    );
}