'use client'
import { motion, useScroll, useTransform } from "framer-motion";
import { Mina, Oswald,Bebas_Neue, Syne } from "next/font/google";
import { useEffect, useRef, useState } from "react";
import { useInView } from "react-intersection-observer";

// Fonts
const herofont = Syne({ weight: "400", subsets: ['latin'] });
const button = Bebas_Neue({ weight: "400", subsets: ['latin'] });

// CounterItem Component
const CounterItem = ({ value, suffix = "", title, duration = 2 }) => {
  const [count, setCount] = useState(0);
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });

  useEffect(() => {
    if (inView) {
      if (typeof value === "number") {
        const increment = value / (duration * 60);
        let current = 0;
        const timer = setInterval(() => {
          current += increment;
          if (current >= value) {
            clearInterval(timer);
            setCount(value);
          } else {
            setCount(current);
          }
        }, 1000 / 60);
        return () => clearInterval(timer);
      } else {
        setCount(value);
      }
    }
  }, [inView, value, duration]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: "easeOut" },
      }}
      viewport={{ once: true }}
      className="text-center p-6 rounded-xl backdrop-blur-sm"
    >
      <div className={`text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-purple-100 ${button.className}`}>
        {typeof value === "number" ? Math.floor(count) : count}
        {suffix}
      </div>
      <div className={`mt-4 text-md text-purple-200 font-medium ${herofont.className} leading-tight`}>
        {title.split('\n').map((line, i) => (
          <p key={i} className="m-0 p-0">
            {line}
          </p>
        ))}
      </div>
    </motion.div>
  );
};

// CounterSection Component
const CounterSection = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const y = useTransform(scrollYProgress, [0, 1], [50, -50]);

  return (
    <motion.section
      ref={sectionRef}
      style={{ opacity }}
      className="py-20 relative overflow-hidden"
    >
      <motion.div className="absolute inset-0 opacity-10" style={{ y }}>
        <div className="absolute top-0 left-0 w-full h-full bg-[url('/grid-pattern.svg')]"></div>
      </motion.div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: { duration: 0.8 },
          }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          {/* Optional Heading Here */}
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <CounterItem
            value={400}
            suffix="+"
            title={"Successfully completed\n150+ logo projects worldwide"}
          />
          <CounterItem
            value={100}
            suffix="%"
            title={"Crafted by\nProfessional Designers"}
          />
          <CounterItem
            value={24}
            suffix="H"
            title={"Delivery starting\nonce your brief submitted"}
          />
        </div>
      </div>
    </motion.section>
  );
};

export default CounterSection;