'use client';

import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';
import { RiShoppingBag3Line } from "react-icons/ri";
import { Bebas_Neue, Syne } from 'next/font/google';
const font1 = Bebas_Neue({
  weight: "400",
  subsets:['latin']
})
const font2 = Syne({
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
            className={`text-6xl font-bold tracking-tight text-white mb-2 ${font1.className} `}
          >
            SIMPLE<span className='text-purple-400'> PRICING</span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className={`text-lg text-purple-300 mb-8 ${font2.className} `}
          >
            Get your agency in sync with Sync Logo at the best price.
          </motion.p>

          <motion.div className='' variants={itemVariants}>
            <button className="bg-purple-600 hover:bg-purple-700 text-white font-medium py-3 px-6 rounded-lg transition duration-300 mb-12 shadow-md">
              Book a call 
            </button>
          </motion.div>

          <div className="flex flex-col md:flex-row gap-8 justify-center">
          <motion.div
  variants={itemVariants}
  className={`flex-1 border  border-purple-500/30 rounded-2xl p-8 bg-white backdrop-blur-sm shadow-lg shadow-purple-900/30 hover:shadow-purple-900/50 transition-all duration-300 ${font1.className}`}
>
  <div className="flex flex-col h-full">
    <div className="mb-6">
      <h2 className="text-4xl w-xs font-semibold text-left uppercase flex justify-between text-black mb-1">Logo & Brand Style Guide <span className='text-purple-400'>$385</span></h2>
     
      <p className="text-zinc-400 mt-6 text-left  text-sm">
        3 concepts, market research, digital and print files, and an 18-page style guide.
      </p>
    </div>

    <ul className={`space-y-3 border-t mb-6 flex-grow ${font2.className} `}>
      <li className="flex items-center text-black">
        <CheckIcon />
        Digital Files
      </li>
      <li className="flex items-center text-black">
        <CheckIcon />
        Vector file
      </li>
      <li className="flex items-center text-black">
        <CheckIcon />
        Source file
      </li>
      <li className="flex items-center text-black">
        <CheckIcon />
        3 concepts included
      </li>
      <li className="flex items-center text-black">
        <CheckIcon />
        Unlimited Revisions Included
      </li>
      <li className="flex items-center text-black">
        <CheckIcon />
        2 days delivery
      </li>
      <li className="flex items-center text-black">
        <CheckIcon />
        3D mockups
      </li>
      <li className="flex items-center text-black">
        <CheckIcon />
        18-page style guide
      </li>
      <li className="flex items-center text-black">
        <CheckIcon />
        100% Money-Back Guarantee
      </li>
    </ul>

    <div className="mt-auto">
  <button className="group w-full bg-gradient-to-r from-zinc-800 to-zinc-900 text-white font-medium py-3 px-6 rounded-lg transition-all duration-300 shadow-md shadow-purple-900/50 hover:from-purple-700 hover:to-purple-900 flex items-center justify-center gap-2">
    <span>Order now</span>
    <RiShoppingBag3Line className="opacity-0 text-4xl translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300" />
  </button>
</div>
  </div>
</motion.div>

          <motion.div
  variants={itemVariants}
  className={`flex-1 rounded-2xl p-8 bg-white backdrop-blur-sm shadow-lg shadow-purple-900/30 hover:shadow-purple-900/50 transition-all duration-300 ${font1.className}`}
>
  <div className="flex flex-col h-full">
    <div className="mb-6">
      <h2 className="text-4xl w-xs text-left flex justify-between font-semibold text-black mb-1">3 LOGO CONCEPTS <span className='text-purple-400'>$225</span></h2>
      
    
      <p className="text-zinc-400 mt-6 text-left  text-md">
        3 concepts, market research, and digital and print files.
      </p>
    </div>

    <ul className={`space-y-3  border-t  mb-6 flex-grow ${font2.className} `}>
      <li className="flex items-center text-black">
        <CheckIcon />
        Digital Files
      </li>
      <li className="flex items-center text-black">
        <CheckIcon />
        Vector file
      </li>
      <li className="flex items-center text-black">
        <CheckIcon />
        Source file
      </li>
      <li className="flex items-center text-black">
        <CheckIcon />
        3 concepts included
      </li>
      <li className="flex items-center text-black">
        <CheckIcon />
        Unlimited Revisions Included
      </li>
      <li className="flex items-center text-black">
        <CheckIcon />
        1 day delivery
      </li>
      <li className="flex items-center text-black">
        <CheckIcon />
        3D mockups
      </li>
      <li className="flex items-center text-black">
        <CheckIcon />
        18-page style guide
      </li>
      <li className="flex items-center text-black">
        <CheckIcon />
        100% Money-Back Guarantee
      </li>
    </ul>

 <div className="mt-auto">
  <button className="group w-full bg-gradient-to-r from-zinc-800 to-zinc-900 text-white font-medium py-3 px-6 rounded-lg transition-all duration-300 shadow-md shadow-purple-900/50 hover:from-purple-700 hover:to-purple-900 flex items-center justify-center gap-2">
    <span>Order now</span>
    <RiShoppingBag3Line className="opacity-0 text-4xl translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300" />
  </button>
</div>
  </div>
</motion.div>
<motion.div
  variants={itemVariants}
  className={`flex-1 rounded-2xl p-8   bg-white backdrop-blur-sm shadow-lg shadow-purple-900/30 hover:shadow-purple-900/50 transition-all duration-300 ${font1.className}`}
>
  <div className="flex flex-col h-full">
    <div className="mb-6">
      <h2 className="text-4xl w-xs text-left flex justify-between font-semibold text-black mb-1">2 LOGO CONCEPTS <span className='text-purple-400'>$159</span></h2>
      
    
      <p className="text-zinc-400 mt-6 text-left text-md">
        2 concepts, market research, and digital and print files.
      </p>
    </div>

    <ul className={`space-y-3  border-t  mb-6 flex-grow ${font2.className} `}>
      <li className="flex items-center text-black">
        <CheckIcon />
        Digital Files
      </li>
      <li className="flex items-center text-black">
        <CheckIcon />
        Vector file
      </li>
      <li className="flex items-center text-black">
        <CheckIcon />
        Source file
      </li>
      <li className="flex items-center text-black">
        <CheckIcon />
        3 concepts included
      </li>
      <li className="flex items-center text-black">
        <CheckIcon />
        Unlimited Revisions Included
      </li>
      <li className="flex items-center text-black">
        <CheckIcon />
        1 day delivery
      </li>
      <li className="flex items-center text-black">
        <CheckIcon />
        3D mockups
      </li>
      <li className="flex items-center text-black">
        <CheckIcon />
        18-page style guide
      </li>
      <li className="flex items-center text-black">
        <CheckIcon />
        100% Money-Back Guarantee
      </li>
    </ul>

 <div className="mt-auto">
  <button className="group w-full bg-gradient-to-r from-zinc-800 to-zinc-900 text-white font-medium py-3 px-6 rounded-lg transition-all duration-300 shadow-md shadow-purple-900/50 hover:from-purple-700 hover:to-purple-900 flex items-center justify-center gap-2">
    <span>Order now</span>
    <RiShoppingBag3Line className="opacity-0 text-4xl translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300" />
  </button>
</div>
  </div>
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
