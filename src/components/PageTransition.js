
import React from 'react';
import { motion } from 'framer-motion';

const PageTransition = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* 页面内容 */}
      <h1>Welcome to GoForge</h1>
      <p>This is a demo page with Framer Motion animation.</p>
    </motion.div>
  );
};

export default PageTransition;
