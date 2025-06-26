'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';

const logosRow1 = [
  '/logos/logo1.png',
  '/logos/logo2.png',
  '/logos/logo3.png',
  '/logos/logo4.png',
  '/logos/logo5.png',
  '/logos/logo6.png',
];

const logosRow2 = [
  '/logos/logo7.png',
  '/logos/logo8.png',
  '/logos/logo9.png',
  '/logos/logo10.png',
  '/logos/logo11.png',
  '/logos/logo12.png',
];

const scrollX = {
  left: {
    x: ['0%', '-50%'],
    transition: {
      x: {
        repeat: Infinity,
        repeatType: 'loop',
        duration: 20,
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
        duration: 20,
        ease: 'linear',
      },
    },
  },
};

export default function LogoMarquee({id}) {
  return (
   <section id={id}>
     <div id="porfolio" className="bg-[#10002b] py-10 overflow-hidden space-y-6">
      {/* Row 1 */}
      <div className="relative w-full overflow-hidden">
        <motion.div
          className="flex w-max gap-10"
          variants={scrollX}
          animate="left"
        >
          {[...logosRow1, ...logosRow1].map((src, i) => (
            <Image
              key={i}
              src={src}
              alt={`logo-${i}`}
              width={160}
              height={80}
              className="object-contain"
            />
          ))}
        </motion.div>
      </div>

      {/* Row 2 - Opposite Direction */}
      <div className="relative w-full overflow-hidden">
        <motion.div
          className="flex w-max gap-10"
          variants={scrollX}
          animate="right"
        >
          {[...logosRow2, ...logosRow2].map((src, i) => (
            <Image
              key={i}
              src={src}
              alt={`logo-${i}`}
              width={160}
              height={80}
              className="object-contain"
            />
          ))}
        </motion.div>
      </div>
    </div>
   </section>
  );
}
