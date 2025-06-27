'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import logo1 from "../public/LOGO-01.png";
import logo2 from "../public/LOGO-02.png";
import logo3 from "../public/LOGO-03.png";
import logo4 from "../public/LOGO-04.png";
import logo5 from "../public/LOGO-05.png";
import logo6 from "../public/LOGO-06.png";
import logo7 from "../public/LOGO-07.png";
import logo8 from "../public/LOGO-08.png";
import logo9 from "../public/LOGO-09.png";
import logo10 from "../public/LOGO-10.png";
import logo11 from "../public/LOGO-11.png";
import logo12 from "../public/LOGO-12.png";

const logosRow1 = [
  logo1,
  logo2,
  logo3,
  logo4,
  logo5,
  logo6,
];

const logosRow2 = [
  logo7,
  logo8,
  logo9,
  logo10,
  logo11,
  logo12,
];

const scrollX = {
  left: {
    x: ['0%', '-50%'],
    transition: {
      x: {
        repeat: Infinity,
        repeatType: 'loop',
        duration: 40,
        ease: 'linear',
      },
    },
  },
  right: {
    x: ['-50%', '0%'],
    transition: {
      x: {
        repeat: Infinity,
        repeatType: 'loop',
        duration: 40,
        ease: 'linear',
      },
    },
  },
};

export default function LogoMarquee({ id }) {
  return (
    <section id={id} className="relative">
  {/* Vignette overlay */}
  <div className="absolute inset-0 pointer-events-none bg-radial-gradient(ellipse_at_center, rgba(0,0,0,0) 0%, rgba(16,0,43,0.5) 70%, rgba(16,0,43,0.8) 100%) z-10" />
  
  <div className="bg-[#10002b44] py-4 overflow-hidden space-y-12 relative">
    {/* Row 1 */}
    <div className="relative w-full overflow-hidden">
      <motion.div
        className="flex w-max gap-8"
        variants={scrollX}
        animate="left"
      >
        {[...logosRow1, ...logosRow1].map((logo, i) => (
          <motion.div
            key={i}
            className="relative w-64 h-44" // Increased size on desktop
            whileHover={{
              scale: 1.1,
              transition: { duration: 0.3 }
            }}
          >
            <div className="relative w-full h-full">
              <Image
                src={logo}
                alt={`logo-${i}`}
                fill
                className="object-contain w-52 h-48 border rounded-2xl bg-gradient-to-br from-purple-900 via-zinc-200 to-purple-900 border-purple-500/30 shadow-lg shadow-purple-900/50"
                sizes="(max-width: 1000px) 320px, 512px"
              />
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>

    {/* Row 2 - Opposite Direction */}
    <div className="relative w-full overflow-hidden">
      <motion.div
        className="flex w-max gap-8"
        variants={scrollX}
        animate="right"
      >
        {[...logosRow2, ...logosRow2].map((logo, i) => (
          <motion.div
            key={i}
            className="relative w-64 h-44" // Increased size on desktop
            whileHover={{
              scale: 1.1,
              transition: { duration: 0.3 }
            }}
          >
            <div className="relative w-full h-full ">
              <Image
                src={logo}
                alt={`logo-${i}`}
                fill
                className="object-contain border w-52 h-36 bg-gradient-to-br from-purple-900 via-zinc-200 to-purple-900 border-purple-500/30 rounded-2xl shadow-lg shadow-purple-900/50"
                sizes="(max-width: 1000px) 320px, 512px"
              />
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  </div>
</section>
  );
}