import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {Truculenta,Michroma,Unbounded} from "next/font/google"

const font = Truculenta({
  weight: "400",
  subsets: ["latin"]


})
const getfont = Unbounded({
  weight:"400",
  subsets:["latin"]
})
const fontans = Michroma({
  weight: "400",
  subsets: ['latin']
})
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
    <section className='m-24' id={id}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className=""
      >
        <div className="min-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-center mb-12"
          >
            <h1 className={`text-4xl font-bold text-white mb-4 ${getfont.className}`}>FAQ</h1>
            <p className={`text-xl text-purple-200 ${getfont.className}`}>
              Get your agency in sync with Sync Logo at the best price.
            </p>
          </motion.div>

          <motion.div 
            className="space-y-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.02 }}
                className="border max-w-4xl border-purple-700 rounded-lg overflow-hidden bg-purple-900/30 backdrop-blur-sm"
              >
                <button
                  className="w-full px-6 py-5 text-left flex justify-between items-center hover:bg-purple-800/30 transition-all"
                  onClick={() => toggleFAQ(index)}
                  aria-expanded={activeIndex === index}
                  aria-controls={`faq-content-${index}`}
                >
                  <span className={`text-lg font-medium text-white  ${font.className}  `}>
                    {faq.question}
                  </span>
                  <motion.span
                    animate={{ rotate: activeIndex === index ? 45 : 0 }}
                    className="text-2xl text-purple-300"
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
                      className="px-6 min-w-4xl overflow-hidden"
                    >
                      <div className={`pb-5 max-w-4xl text-purple-100 ${fontans.className}`}>{faq.answer}</div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default FAQSection;