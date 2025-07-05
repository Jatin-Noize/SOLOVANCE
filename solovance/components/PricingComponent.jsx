'use client';

import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect,useState } from 'react';
import ContactUsForm from "./ContactUsForm";
import { RxCrossCircled } from "react-icons/rx";
import { RiShoppingBag3Line } from "react-icons/ri";
import { FaMoneyBillTransfer } from "react-icons/fa6";
import { GiTireIronCross } from "react-icons/gi";
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
    const [isContactFormOpen, setIsContactFormOpen] = useState(false);

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
            className={`text-6xl font-bold tracking-tight text-white mb ${font1.className} `}
          >
            SIMPLE<span className='text-purple-400'> PRICING</span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className={`text-lg text-purple-300 mb-3 ${font2.className} `}
          >
           Get your agency's logo designed <br/>by Solvance at the best price
          </motion.p>

          <motion.div className='' variants={itemVariants}>
            <button 
              onClick={() => setIsContactFormOpen(true)} className={`bg-purple-600 hover:bg-purple-700 text-white font-medium py-3 px-6 rounded-lg transition duration-300 mb-12 shadow-md ${font2.className} `}>
              Book a call 
              
            </button>
               <ContactUsForm
        isOpen={isContactFormOpen}
        onClose={() => setIsContactFormOpen(false)}
      />
          </motion.div>

          <div className="flex flex-col md:flex-row gap-8 justify-center">
          <motion.div
  variants={itemVariants}
  className={`flex-1 border  border-purple-500/30 rounded-2xl p-8 bg-white backdrop-blur-sm shadow-lg shadow-purple-900/30 hover:shadow-purple-900/50 transition-all duration-300 ${font1.className}`}
>
  <div className="flex flex-col h-full">
    <div className="mb-6 border-b-2 pb-6 border-purple-400">
      <h2 className="text-4xl md:w-xs font-semibold text-left uppercase flex justify-between text-black mb-1">Logo & Brand Style Guide <span className='text-purple-400 mr-4'>$385</span></h2>
     
      <p className={`text-zinc-400 mt-6 text-left  text-sm ${font2.className}`}>
        3 concepts, market research, digital and print files, and an 18-page style guide.
      </p>
    </div>

    <ul className={`space-y-3  mb-6 flex-grow ${font2.className} `}>
      <li className="flex items-center text-black">
        <CheckIcon className="" />
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
      <div className='h-6 w-6 rounded-full p-1 mr-2 text-white text-center flex justify-center items-center bg-purple-500'><FaMoneyBillTransfer className='w-full h-full' /></div>
        100% Money-Back Guarantee
      </li>
    </ul>

<div className={`relative ${font2.className} `}>
  <button className="group w-full bg-gradient-to-r from-zinc-800 to-zinc-900 text-white font-medium py-3 px-6 rounded-lg transition-all duration-300 shadow-md shadow-purple-900/50 hover:from-purple-700 hover:to-purple-900 flex items-center justify-center">
    <span className="group-hover:opacity-0 group-hover:scale-90 flex gap-4 items-center transition-all duration-300">Order now <RiShoppingBag3Line className='text-2xl'/></span>
    <RiShoppingBag3Line className="absolute text-4xl opacity-0 scale-50 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300" />
  </button>
</div>
  </div>
</motion.div>

          <motion.div
  variants={itemVariants}
  className={`flex-1 rounded-2xl  p-8 bg-white backdrop-blur-sm shadow-lg shadow-purple-900/30 hover:shadow-purple-900/50 transition-all duration-300 ${font1.className}`}
>
  <div className="flex flex-col h-full">
    <div className="mb-6 border-b-2 pb-6 border-purple-400">
      <h2 className="text-4xl  text-left flex md:w-xs justify-between font-semibold text-black mb-1">3 LOGO CONCEPTS <br /> <br /> <span className='text-purple-400 mr-4'>$225</span></h2>
      
    
      <p className={`text-zinc-400 mt-6 text-left  text-sm ${font2.className}`}>
        3 concepts, market research, and digital and print files.
      </p>
    </div>

    <ul className={`space-y-3     mb-6 flex-grow ${font2.className} `}>
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
     <div className='h-6 w-6 flex justify-center items-center bg-zinc-400 text-zinc-700 rounded-full mr-2 font-extrabold p-1'><GiTireIronCross /></div>
        3D mockups
      </li>
      <li className="flex items-center text-black">
    <div className='h-6 w-6 flex justify-center items-center bg-zinc-400 text-zinc-700 rounded-full mr-2 font-extrabold p-1'><GiTireIronCross /></div>
        18-page style guide
      </li>
           <li className="flex items-center text-black">
      <div className='h-6 w-6 rounded-full p-1 mr-2 text-white text-center flex justify-center items-center bg-purple-500'><FaMoneyBillTransfer className='w-full h-full' /></div>
        100% Money-Back Guarantee
      </li>
    </ul>

<div className={`relative ${font2.className} `}>
  <button className="group w-full bg-gradient-to-r from-zinc-800 to-zinc-900 text-white font-medium py-3 px-6 rounded-lg transition-all duration-300 shadow-md shadow-purple-900/50 hover:from-purple-700 hover:to-purple-900 flex items-center justify-center">
  <span className="group-hover:opacity-0 group-hover:scale-90 flex gap-4 items-center transition-all duration-300">Order now <RiShoppingBag3Line className='text-2xl'/></span>
    <RiShoppingBag3Line className="absolute text-4xl opacity-0 scale-50 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300" />
  </button>
</div>
  </div>
</motion.div>
<motion.div
  variants={itemVariants}
  className={`flex-1 rounded-2xl p-8    bg-white backdrop-blur-sm shadow-lg shadow-purple-900/30 hover:shadow-purple-900/50 transition-all duration-300 ${font1.className}`}
>
  <div className="flex flex-col h-full">
    <div className="mb-6 border-b-2 pb-6 border-purple-400">
      <h2 className="text-4xl  text-left flex justify-between md:w-xs font-semibold text-black mb-1">2 LOGO CONCEPTS <br /><br /> <span className='text-purple-400 mr-4'>$159</span></h2>
      
    
      <p className={`text-zinc-400 mt-6 text-left  text-sm ${font2.className}`}>
        2 concepts, market research, and digital and print files.
      </p>
    </div>

    <ul className={`space-y-3  bo-  mb-6 flex-grow ${font2.className} `}>
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
        2 concepts included
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
    <div className='h-6 w-6 flex justify-center items-center bg-zinc-400 text-zinc-700 rounded-full mr-2 font-extrabold p-1'><GiTireIronCross /></div>
        3D mockups
      </li>
      <li className="flex items-center text-black">
     <div className='h-6 w-6 flex justify-center items-center bg-zinc-400 text-zinc-700 rounded-full mr-2 font-extrabold p-1'><GiTireIronCross /></div>
        18-page style guide
      </li>
           <li className="flex items-center text-black">
      <div className='h-6 w-6 rounded-full p-1 mr-2 text-white text-center flex justify-center items-center bg-purple-500'><FaMoneyBillTransfer className='w-full h-full' /></div>
        100% Money-Back Guarantee
      </li>
    </ul>
<div className={`relative ${font2.className} `}>
  <button className="group w-full bg-gradient-to-r from-zinc-800 to-zinc-900 text-white font-medium py-3 px-6 rounded-lg transition-all duration-300 shadow-md shadow-purple-900/50 hover:from-purple-700 hover:to-purple-900 flex items-center justify-center">
  <span className="group-hover:opacity-0 group-hover:scale-90 flex gap-4 items-center transition-all duration-300">Order now <RiShoppingBag3Line className='text-2xl'/></span>
    <RiShoppingBag3Line className="absolute text-4xl opacity-0 scale-50 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300" />
  </button>
</div>
  </div>
</motion.div>
          </div>
        </motion.div>
        
      </div>
    <p className={`text-center tracking-normal opacity-85 text-white ${font2.className} `}>
  Note :- "50% payment required upfront, remaining 50% upon completion"
</p>
    </section>
  );
};

// Reusable check icon
const CheckIcon = () => (
  <svg
    className="h-6 w-6 mr-2 p-1  bg-black rounded-full text-zinc-100 "
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
  </svg>
);

export default PricingComponent;
