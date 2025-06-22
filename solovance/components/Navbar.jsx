import Link from 'next/link';
import { ArrowRight, User } from 'lucide-react';
import Logo from "../public/SOLVANCE-04.png";
import Image from "next/image";

export default function Navbar() {
  return (
    <header className="w-full bg-[#14001d] py-4 px-6 md:px-8 lg:px-12 flex items-center justify-between shadow-sm border-b border-purple-900/30">
      {/* Logo */}
      <div className="flex items-center">
        <Link href="/" className="flex items-center">
          <Image
            src={Logo}
            alt="Solvance Logo"
            width={180}  // Adjusted for better proportions
            height={60}  // Adjusted for better proportions
            className="object-contain hover:opacity-90 transition-opacity"
            priority  // Important for above-the-fold images
          />
        </Link>
      </div>

      {/* Navigation Links */}
      <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
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
          className="bg-purple-600 hover:bg-purple-700 transition-colors duration-200 text-white px-5 py-2.5 rounded-full text-sm font-semibold flex items-center gap-2 shadow-lg hover:shadow-purple-500/20 whitespace-nowrap"
        >
          See plans <ArrowRight size={16} className="stroke-[2.5]" />
        </Link>
      </div>
    </header>
  );
}