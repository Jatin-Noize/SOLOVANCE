import Link from 'next/link';
import Image from 'next/image';
import Logo from "../public/SOLVANCE-04.png";


export default function Footer() {
  return (
    <footer className="bg-[#14001d] text-gray-300 px-6 py-10 mt-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Left section: logo and CTA */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <div />
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
          <p className="text-sm text-gray-400 mb-4">
            Get your agency in sync with Sync Logo at the best price.
          </p>
          <button className="bg-purple-500 hover:bg-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center gap-2">
            Book a call
            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          </button>
        </div>

        {/* Right section: quick links */}
        <div className="md:col-span-1 md:col-start-3">
          <h3 className="text-white font-semibold mb-4">Quick links</h3>
          <ul className="space-y-2 text-sm">
            <li><Link href="#" className="hover:text-white transition">How it works</Link></li>
            <li><Link href="#" className="hover:text-white transition">Portfolio</Link></li>
            <li><Link href="#" className="hover:text-white transition">Pricing</Link></li>
            <li><Link href="#" className="hover:text-white transition">FAQ</Link></li>
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-700 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
        <p>&copy; 2024 Sync Logo</p>
        <div className="flex gap-4 mt-4 md:mt-0">
          <Link href="#" className="hover:text-white">Privacy Policy</Link>
          <Link href="#" className="hover:text-white">Disclaimer</Link>
        </div>
      </div>
    </footer>
  );
}
