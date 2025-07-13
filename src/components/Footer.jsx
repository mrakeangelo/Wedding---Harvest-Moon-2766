import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.5, duration: 0.8 }}
      className="bg-harvest-brown dark:bg-harvest-darkBrown text-harvest-cream py-8 mt-16"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="mb-4">
            <h3 className="text-2xl font-script text-harvest-mustard mb-2">
              Harvest Moon
            </h3>
            <p className="text-harvest-cream/80">
              An Autumn Wedding Template
            </p>
          </div>
          
          <div className="border-t border-harvest-cream/20 pt-4">
            <p className="text-sm text-harvest-cream/60">
              © 2024 Harvest Moon – An Autumn Wedding Template by{' '}
              <span className="text-harvest-mustard font-medium">Mrake Agency</span>
            </p>
          </div>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;