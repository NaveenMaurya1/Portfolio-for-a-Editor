"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

const AnimatedTextWord = ({
  words,
  className = "",
  interval = 2000,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % words.length);
    }, interval);

    return () => clearInterval(timer);
  }, [words.length, interval]);

  return (
    <div className={`relative inline-block overflow-hidden ${className}`}>
      <AnimatePresence mode="wait">
        <motion.span
          key={words[currentIndex]}
          initial={{
            y: 40,
            opacity: 0,
            rotateX: -90,
          }}
          animate={{
            y: 0,
            opacity: 1,
            rotateX: 0,
          }}
          exit={{
            y: -40,
            opacity: 0,
            rotateX: 90,
          }}
          transition={{
            duration: 0.5,
            ease: "easeInOut",
          }}
          className="inline-block"
          style={{
            transformOrigin: "center bottom",
          }}
        >
          {words[currentIndex]}
        </motion.span>
      </AnimatePresence>
    </div>
  );
};

export default AnimatedTextWord;