'use client';
import { motion, useInView } from 'framer-motion';
import Image from 'next/image';
import { useRef, useMemo } from 'react';

// Static imports with TypeScript typing for blurDataURL
import logo1 from "../public/images/LOGO-01.png";
import logo2 from "../public/images/LOGO-02.png";
import logo3 from "../public/images/LOGO-03.png";
import logo4 from "../public/images/LOGO-04.png";
import logo5 from "../public/images/LOGO-05.png";
import logo6 from "../public/images/LOGO-06.png";
import logo7 from "../public/images/LOGO-07.png";
import logo8 from "../public/images/LOGO-08.png";
import logo9 from "../public/images/LOGO-09.png";
import logo10 from "../public/images/LOGO-10.png";
import logo11 from "../public/images/LOGO-11.png";
import logo12 from "../public/images/LOGO-12.png";

// Simple blur placeholder (base64 encoded SVG)
const blurDataUrl = `data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA4IDUiPjxyZWN0IHdpZHRoPSI4IiBoZWlnaHQ9IjUiIGZpbGw9IiMxYTAwMzMiLz48L3N2Zz4=`;

const scrollX = {
  left: {
    x: ['0%', '-50%'],
    transition: {
      x: { repeat: Infinity, repeatType: 'loop', duration: 80, ease: 'linear' },
    },
  },
  right: {
    x: ['-50%', '0%'],
    transition: {
      x: { repeat: Infinity, repeatType: 'loop', duration: 80, ease: 'linear' },
    },
  },
};

const fadeInUpWithBlur = {
  hidden: { 
    opacity: 0, 
    y: 50,
    filter: 'blur(10px)'
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { 
      duration: 0.8, 
      ease: 'easeOut',
      filter: { duration: 1, ease: 'easeOut' }
    },
  },
  exit: {
    opacity: 0,
    y: -50,
    filter: 'blur(10px)',
    transition: { 
      duration: 0.6,
      ease: 'easeIn',
      filter: { duration: 0.5, ease: 'easeIn' }
    }
  }
};

export default function LogoMarquee({ id }) {
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const isInView1 = useInView(ref1, { once: true, margin: "0px" });
  const isInView2 = useInView(ref2, { once: true, margin: "0px" });

  // Memoize logo arrays to prevent recreation on every render
  const logosRow1 = useMemo(() => [logo1, logo2, logo3, logo4, logo5, logo6, logo12, logo11, logo10, logo9, logo8, logo7], []);
  const logosRow2 = useMemo(() => [logo7, logo8, logo9, logo10, logo11, logo12, logo6, logo5, logo4, logo3, logo2, logo1], []);

  // Optimized Logo Component
  const LogoItem = ({ logo, index, row }) => (
    <motion.div
      key={`${row}-${index}`}
      className="relative w-96 h-52"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3, delay: index * 0.05 }}
    >
      <div className="relative w-full h-full">
        <Image
          src={logo}
          alt={`logo-${index}`}
          fill
          className="object-scale-down border bg-gradient-to-b from-[#1a0033] to-[#2a004d] rounded-3xl border-purple-900/30 shadow-lg shadow-purple-900/50"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          loading="lazy"
          placeholder="blur"
          blurDataURL={logo.blurDataURL || blurDataUrl}
          unoptimized={process.env.TURBOPACK ? true : false}
        />
      </div>
    </motion.div>
  );

  return (
    <section id={id} className="relative overflow-hidden py-16">
      {/* Row 1 */}
      <motion.div
        ref={ref1}
        variants={fadeInUpWithBlur}
        initial="hidden"
        animate={isInView1 ? "visible" : "exit"}
        className="relative w-full overflow-hidden mb-6"
      >
        <motion.div className="flex w-max gap-6" variants={scrollX} animate="left">
          {[...logosRow1, ...logosRow1].map((logo, i) => (
            <LogoItem key={`row1-${i}`} logo={logo} index={i} row="row1" />
          ))}
        </motion.div>
      </motion.div>

      {/* Row 2 */}
      <motion.div
        ref={ref2}
        variants={fadeInUpWithBlur}
        initial="hidden"
        animate={isInView2 ? "visible" : "exit"}
        className="relative w-full overflow-hidden"
      >
        <motion.div className="flex w-max gap-6" variants={scrollX} animate="right">
          {[...logosRow2, ...logosRow2].map((logo, i) => (
            <LogoItem key={`row2-${i}`} logo={logo} index={i} row="row2" />
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}