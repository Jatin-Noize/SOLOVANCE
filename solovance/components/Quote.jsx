import { motion } from 'framer-motion';
import { Bebas_Neue, Inter } from "next/font/google";
import Image from 'next/image';
import qoute from "../public/qoute.avif";
import radiant from "../public/radiant.avif"
import qoute2 from "../public/qoute2.jpeg";
import abuntu from "../public/abuntu.avif"
import { FaRegCircleUser } from "react-icons/fa6";

const bebas = Inter({
  weight: "400",
  subsets: ['latin']
});
const bebas2 = Bebas_Neue({
  weight: "400",
  subsets: ['latin']
});

const Quote = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.1,
        duration: 0.6
      }
    },
    exit: { opacity: 0, y: -20 }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -10 }
  };

  return (
    <motion.div 
      className="max-w-6xl space-y-12 mt-12 mb-12 mx-auto px-6 py-12" // Increased max-width to 6xl
      initial="hidden"
      whileInView="visible"
      exit="exit"
      viewport={{ once: false, margin: "-100px" }}
      variants={containerVariants}
    >
      <h1 className={`uppercase text-6xl text-purple-400 text-center md:text-6xl ${bebas2.className}`}>Testimonials</h1>
      <div className="bg-[#10002b44] backdrop-blur-sm border border-purple-500/30 rounded-2xl p-8 shadow-lg shadow-purple-900/20">
        {/* Flex container for side-by-side layout */}
        <motion.div 
          className="flex flex-col md:flex-row gap-8 items-center"
          variants={itemVariants}
        >
          {/* Image container - takes half width on desktop */}
          <div className="w-full md:w-1/2">
            <Image 
              alt="Quote illustration" 
              src={qoute} 
              className="w-full rounded-xl h-auto object-contain"
              priority
            />
          </div>

          {/* Text content container - takes half width on desktop */}
          <div className="w-full md:w-1/2">
            <div className="flex items-start gap-2 mb-4">
              <div className="h-0.5 w-8 bg-purple-400 mt-3"></div>
            
            </div>
            
            <motion.blockquote 
              className={`text-lg md:text-xl  leading-7 text-white mb-6  ${bebas.className}`}
              variants={itemVariants}
            >
              "Working with the team was a fantastic experience! They communicated
quickly, brought real design expertise, and made the entire process
seamless. The final logo is clean, professional, and perfectly reflects
our brand's identity. We're extremely satisfied!"
            </motion.blockquote>
            
            <motion.div 
              className="flex items-center gap-4"
              variants={itemVariants}
            >
              <div className="relative text-white flex text-center justify-center items-center w-12 h-12 rounded-full overflow-hidden border border-purple-500/30">
               
               <Image src={radiant} alt='pfp' className='h-full w-full rounded-full ' /></div>
              
              <div>
                <motion.p 
                  className="font-medium text-white"
                  variants={itemVariants}
                >
                 Eneida Dimo
                </motion.p>
                <motion.p 
                  className="text-sm text-purple-300"
                  variants={itemVariants}
                >
                  Founder - Radiant
                </motion.p>
              </div>
            </motion.div>
          </div>
        </motion.div>
        
        {/* Decorative elements */}
        <motion.div 
          className="absolute top-0 left-0 w-full h-full -z-10 overflow-hidden"
          variants={itemVariants}
        >
          <div className="absolute top-1/4 -left-20 w-64 h-64 rounded-full bg-purple-900/30 blur-3xl"></div>
          <div className="absolute bottom-1/4 -right-20 w-64 h-64 rounded-full bg-purple-900/30 blur-3xl"></div>
        </motion.div>
      </div>
        <div className="bg-[#10002b44] backdrop-blur-sm border border-purple-500/30 rounded-2xl p-8 shadow-lg shadow-purple-900/20">
        {/* Flex container for side-by-side layout */}
        <motion.div 
          className="flex flex-col md:flex-row gap-8 items-center"
          variants={itemVariants}
        >
          {/* Image container - takes half width on desktop */}
          <div className="w-full md:w-1/2">
            <Image 
              alt="Quote illustration" 
           src={qoute2}
              className="w-full rounded-xl h-auto object-contain"
              priority
            />
          </div>

          {/* Text content container - takes half width on desktop */}
          <div className="w-full md:w-1/2">
            <div className="flex items-start gap-2 mb-4">
              <div className="h-0.5 w-8 bg-purple-400 mt-3"></div>
            
            </div>
            
            <motion.blockquote 
              className={`text-lg md:text-xl  leading-7 text-white mb-6  ${bebas.className}`}
              variants={itemVariants}
            >
              "I'm truly impressed with the outstanding branding and logo work delivered by our team. The designs perfectly reflect the vision and values of our brand. Your creativity, attention to detail and timely communication made the entire process smooth and enjoyable. Thank you for your dedication and excellent service looking forward to working with you again on future projects!"
            </motion.blockquote>
            
            <motion.div 
              className="flex items-center gap-4"
              variants={itemVariants}
            >
              <div className="relative flex text-center justify-center items-center w-12 h-12 rounded-full overflow-hidden border border-purple-500/30">
               
          <Image src={abuntu} alt='pfp' className='h-full w-full rounded-full ' /></div>
              
              <div>
                <motion.p 
                  className="font-medium text-white"
                  variants={itemVariants}
                >
                 David Bauman
                </motion.p>
                <motion.p 
                  className="text-sm text-purple-300"
                  variants={itemVariants}
                >
                  Founder - Abantu
                </motion.p>
              </div>
            </motion.div>
          </div>
        </motion.div>
        
        {/* Decorative elements */}
        <motion.div 
          className="absolute top-0 left-0 w-full h-full -z-10 overflow-hidden"
          variants={itemVariants}
        >
          <div className="absolute top-1/4 -left-20 w-64 h-64 rounded-full bg-purple-900/30 blur-3xl"></div>
          <div className="absolute bottom-1/4 -right-20 w-64 h-64 rounded-full bg-purple-900/30 blur-3xl"></div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Quote;