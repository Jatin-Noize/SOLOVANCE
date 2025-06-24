'use client'
import { motion, useScroll, useTransform } from "framer-motion";
import { Mina, Oswald } from "next/font/google";
import { useEffect, useRef, useState } from "react";
import { useInView } from "react-intersection-observer";

// Fonts
const herofont = Mina({ weight: "400", subsets: ['latin'] });
const button = Oswald({ weight: "400", subsets: ['latin'] });

// CounterItem Component
const CounterItem = ({ value, suffix = "", title, duration = 2 }) => {
  const [count, setCount] = useState(0);
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });

  useEffect(() => {
    if (inView) {
      if (typeof value === "number") {
        const increment = value / (duration * 60); // 60 FPS
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
      className="text-center p-6 rounded-xl bg-gradient-to-b from-purple-900/30 to-purple-800/20 backdrop-blur-sm border border-purple-700/30"
    >
      <div className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-purple-100">
        {typeof value === "number" ? Math.floor(count) : count}
        {suffix}
      </div>
      <div className="mt-4 text-lg text-purple-200 font-medium">{title}</div>
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
      className="py-20 relative overflow-hidden "
    >
      {/* Background pattern */}
      <motion.div className="absolute inset-0 opacity-10" style={{ y }}>
        <div className="absolute top-0 left-0 w-full h-full bg-[url('/grid-pattern.svg')]"></div>
      </motion.div>

      {/* Content */}
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

        <div
          className={`grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto ${herofont.className}`}
        >
          <CounterItem
            value={400}
            suffix="+"
            title="Logo projects completed in 12+ countries"
          />
          <CounterItem
            value={100}
            suffix="%"
            title="Designed by coffee fueled designers"
          />
          <CounterItem
            value={48}
            suffix="H"
            title="Delivery from the moment you submit your brief"
          />
        </div>
      </div>
    </motion.section>
  );
};

export default CounterSection;
