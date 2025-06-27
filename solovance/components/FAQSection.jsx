import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Syne, Bebas_Neue, Unbounded } from "next/font/google";

const font = Syne({
  weight: "400",
  subsets: ["latin"]
});

const getfont = Bebas_Neue({
  weight: "400",
  subsets: ["latin"]
});

const fontans = Syne({
  weight: "400",
  subsets: ['latin']
});

const FAQSection = ({ id }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "Are the logos made with AI?",
      answer: "Yes, our logos are created using advanced AI technology combined with human design expertise to ensure high-quality, unique results."
    },
    {
      question: "Is there a money-back guarantee if I'm not satisfied with the logo?",
      answer: "Absolutely! We offer a 30-day money-back guarantee if you're not completely satisfied with your logo design."
    },
    {
      question: "What's the turnaround time for initial design concepts?",
      answer: "We typically deliver initial concepts within 3-5 business days after gathering all necessary information about your brand."
    },
    {
      question: "Can I request revisions to the logo design?",
      answer: "Yes, we include up to 3 rounds of revisions for all our logo designs to ensure you get exactly what you want."
    },
    {
      question: "How many design concepts will I receive for my logo?",
      answer: "You'll receive 3 unique design concepts to choose from in the initial presentation."
    },
    {
      question: "What file formats will I receive my logo in?",
      answer: "We deliver your logo in multiple formats including PNG, JPG, SVG, and PDF, with both color and black/white versions."
    },
    {
      question: "How do I provide ideas for my logo design?",
      answer: "You can share your ideas through our design brief form, or schedule a consultation call with our designers to discuss your vision."
    }
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id={id} className="px-4 sm:px-6 lg:px-8 py-12 md:py-24 mx-auto md:w-4xl max-w-screen">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-center mb-8 md:mb-12"
        >
          <h1 className={`text-6xl md:text-6xl tracking-tight font-bold text-white mb-3 md:mb-4 ${getfont.className}`}>
            FAQ
          </h1>
          <p className={` md:text-md text-purple-200 ${font.className}`}>
            Get your agency in sync with Sync Logo at the best price.
          </p>
        </motion.div>

        <motion.div 
          className="space-y-3 md:space-y-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.01 }}
              className="border border-purple-700 m-4 rounded-lg overflow-hidden bg-purple-900/30 backdrop-blur-sm"
            >
              <button
                className="w-full px-4 py-3 md:px-6 md:py-4 text-left flex justify-between items-center hover:bg-purple-800/30 transition-all"
                onClick={() => toggleFAQ(index)}
                aria-expanded={activeIndex === index}
                aria-controls={`faq-content-${index}`}
              >
                <span className={`text-base md:text-lg font-medium text-white ${font.className}`}>
                  {faq.question}
                </span>
                <motion.span
                  animate={{ rotate: activeIndex === index ? 45 : 0 }}
                  className="text-xl md:text-2xl text-purple-300"
                >
                  +
                </motion.span>
              </button>

              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    id={`faq-content-${index}`}
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                    className="px-4 md:px-6 overflow-hidden"
                  >
                    <div className={`pb-3 md:pb-4 text-sm md:text-base text-purple-100 ${fontans.className}`}>
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default FAQSection;