import React from 'react';
import { motion } from 'framer-motion';

const AnimatedButton = () => {
  return (
    <motion.button
      while-hover={{ scale: 1.1}}
      while-tap={{ scale: 0.9 }}
      transition={{ duration: 0.2, type: "spring", stiffness: 300 }}
     >
      Click Me!
    </motion.button>
  );
};

export default AnimatedButton;
