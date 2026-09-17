"use client";

import { motion } from "framer-motion";

const BlurFade = ({
  children,
  className = "",
  delay = 0,
  duration = 0.7,
  y = 30,
}) => {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: y,
        filter: "blur(10px)",
      }}
      whileInView={{
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
      }}
      viewport={{
        once: true,
        amount: 0.2,
      }}
      transition={{
        duration,
        delay,
        ease: "easeOut",
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default BlurFade;
