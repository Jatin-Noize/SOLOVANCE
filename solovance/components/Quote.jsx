import { motion } from 'framer-motion';
import {Bebas_Neue} from "next/font/google"
import Image from 'next/image';

const bebas = Bebas_Neue({
  weight: "400",
  subsets: ['latin']
})

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
      className="max-w-4xl mx-auto px-6 py-12"
      initial="hidden"
      whileInView="visible"
      exit="exit"
      viewport={{ once: false, margin: "-100px" }}
      variants={containerVariants}
    >
      <div className="bg-[#10002b44] backdrop-blur-sm border border-purple-500/30 rounded-2xl p-8 shadow-lg shadow-purple-900/20">
        {/* Quote content */}
        <motion.div variants={itemVariants}>
          <div className="flex items-start gap-2 mb-2">
            <div className="h-0.5 w-8 bg-purple-400 mt-3"></div>
            <p className="text-xs uppercase tracking-widest text-purple-300">Testimonial</p>
          </div>
          
          <motion.blockquote 
            className={`text-2xl md:text-3xl font-light text-white mb-6 leading-snug  ${bebas.className}`}
            variants={itemVariants}
          >
            "The team was incredible to work with! Swift communication, expert designers, and a smooth process from start to finish. They captured our vision perfectly with a sleek, professional logo that truly represents our brand. Highly recommend!"
          </motion.blockquote>
          
          <motion.div 
            className="flex items-center gap-4"
            variants={itemVariants}
          >
            <div className="relative w-12 h-12 rounded-full overflow-hidden border border-purple-500/30">
              <Image
                src="/founder.png" // Replace with your actual image path
                alt="Patrick van Putten"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <motion.p 
                className="font-medium text-white"
                variants={itemVariants}
              >
                Patrick van Putten
              </motion.p>
              <motion.p 
                className="text-sm text-purple-300"
                variants={itemVariants}
              >
                Founder - NL
              </motion.p>
            </div>
          </motion.div>
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