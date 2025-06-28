'use client';
import { motion, useInView } from 'framer-motion';
import Image from 'next/image';
import { useRef } from 'react';

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

const logosRow1 = [logo1, logo2, logo3, logo4, logo5, logo6, logo12, logo11, logo10, logo9, logo8, logo7];
const logosRow2 = [logo7, logo8, logo9, logo10, logo11, logo12, logo6, logo5, logo4, logo3, logo2, logo1];

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
  const isInView1 = useInView(ref1, { once: false, margin: "-100px" });
  const isInView2 = useInView(ref2, { once: false, margin: "-100px" });

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
            <motion.div
              key={`row1-${i}`}
              className="relative w-96 h-52"
              whileHover={{ scale: 1.1, transition: { duration: 0.3 } }}
            >
              <div className="relative w-full h-full">
                <Image
                  src={logo}
                  alt={`logo-${i}`}
                  fill
                  className="object-scale-down border bg-gradient-to-b from-[#1a0033] to-[#2a004d] rounded-3xl border-purple-900/30 shadow-lg shadow-purple-900/50"
                  sizes="(max-width: 1000px) 420px, 612px"
                />
              </div>
            </motion.div>
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
            <motion.div
              key={`row2-${i}`}
              className="relative w-96 h-52"
              whileHover={{ scale: 1.1, transition: { duration: 0.3 } }}
            >
              <div className="relative w-full h-full">
                <Image
                  src={logo}
                  alt={`logo-${i}`}
                  fill
                  className="object-scale-down border bg-gradient-to-b from-[#1a0033] to-[#2a004d] rounded-3xl border-purple-500/30 shadow-lg shadow-purple-900/50"
                  sizes="(max-width: 1000px) 420px, 612px"
                />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}