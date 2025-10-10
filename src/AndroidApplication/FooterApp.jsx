import React from 'react';
import { motion } from 'framer-motion';

const FooterApp = () => {
  return (
    // Footer
    <motion.footer
      className="bg-zinc-950 text-white py-12"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="mb-8">
          <h3 className="text-2xl font-bold mb-4">Food Fusion</h3>
          <p className="text-gray-400 max-w-md mx-auto">
            Making food delivery simple, fast, and delicious for everyone.
          </p>
        </div>
        <div className="border-t border-gray-800 pt-8">
          <p className="text-gray-400 text-sm">Version 1.0.0 (Frontend) • © 2025 Food Fusion. All rights reserved.</p>
        </div>
      </div>
    </motion.footer>
  );
};

export default FooterApp;
