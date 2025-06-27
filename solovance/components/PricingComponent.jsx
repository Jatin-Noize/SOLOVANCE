'use client';

import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';
import { Exo, Antonio } from 'next/font/google';
const font1 = Exo({
  weight: "400",
  subsets:['latin']
})
const font2 = Antonio({
  weight: "400",
  subsets:['latin']
})

const PricingComponent = ({ id }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.2,
  });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    } else {
      controls.start('hidden');
    }
  }, [inView, controls]);

  const containerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        when: 'beforeChildren',
        staggerChildren: 0.2,
        duration: 0.4,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4 },
    },
  };

  return (
    <section id={id}>
      <div className=" py-16 px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={containerVariants}
          className={`max-w-4xl mx-auto text-center `}
        >
          <motion.h1
            variants={itemVariants}
            className={`text-4xl font-bold text-white mb-2 ${font1.className} `}
          >
            SIMPLE PRICING
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className={`text-lg text-purple-200 mb-8 ${font1.className} `}
          >
            Get your agency in sync with Sync Logo at the best price.
          </motion.p>

          <motion.div variants={itemVariants}>
            <button className="bg-purple-600 hover:bg-purple-700 text-white font-medium py-3 px-6 rounded-lg transition duration-300 mb-12 shadow-md">
              Book a call 
            </button>
          </motion.div>

          <div className="flex flex-col md:flex-row gap-8 justify-center">
            {/* First Card */}
            <motion.div
              variants={itemVariants}
              className={`flex-1 border border-purple-700 rounded-xl p-6 hover:shadow-xl transition-shadow duration-300 bg-purple-950 hover:border-purple-500  ${font2.className} `}
            >
              <h2 className="text-2xl font-semibold text-white mb-4">LOGO + STYLE GUIDE</h2>
              <p className="text-purple-300 mb-6">
                3 concepts, market research, digital and print files, and an 18-page style guide.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center text-purple-200">
                  <CheckIcon />
                  Digital files
                </li>
                <li className="flex items-center text-purple-200">
                  <CheckIcon />
                  Vector file
                </li>
              </ul>
              <div className="text-3xl font-bold text-white mt-4">$ 387</div>
            </motion.div>

            {/* Second Card */}
            <motion.div
              variants={itemVariants}
              className={`flex-1 border border-purple-700 rounded-xl p-6 hover:shadow-xl transition-shadow duration-300 bg-purple-950 hover:border-purple-500 ${font2.className} `}
            >
              <h2 className="text-2xl font-semibold text-white mb-4">JUST A LOGO</h2>
              <p className="text-purple-300 mb-6">
                3 concepts, market research, and digital and print files.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center text-purple-200">
                  <CheckIcon />
                  Digital files
                </li>
                <li className="flex items-center text-purple-200">
                  <CheckIcon />
                  Vector file
                </li>
              </ul>
              <div className="text-3xl font-bold text-white mt-4">$ 219</div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

// Reusable check icon
const CheckIcon = () => (
  <svg
    className="h-5 w-5 text-purple-500 mr-2"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
  </svg>
);

export default PricingComponent;
