'use client';

import { AnimatePresence, motion } from 'framer-motion';

export default function AnimatedModal({
  children,
  isOpen,
  onClose,
}) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          exit={{
            opacity: 0,
          }}
          transition={{
            duration: 0.4,
            ease: 'easeInOut',
          }}
          onClick={onClose}
        >
          <motion.div
            className="max-w-5xl w-full  max-h-[90vh] overflow-y-auto"
            initial={{
              opacity: 0,
              y: 40,
              scale: 0.96,
              filter: 'blur(10px)',
            }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
              filter: 'blur(0px)',
            }}
            exit={{
              opacity: 0,
              y: 30,
              scale: 0.96,
              filter: 'blur(10px)',
            }}
            transition={{
              duration: 0.5,
              ease: 'easeOut',
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {children}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}