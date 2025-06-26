import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  const linkVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.3
      }
    }
  };

  return (
    <motion.footer 
      className="bg-gradient-to-r from-orange-500 to-yellow-500 py-12 relative overflow-hidden"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      {/* Background decorative elements */}
      <motion.div
        className="absolute top-0 left-0 w-40 h-40 bg-orange-300 rounded-full opacity-20"
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 180, 360]
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "linear"
        }}
      />
      <motion.div
        className="absolute bottom-0 right-0 w-32 h-32 bg-yellow-300 rounded-full opacity-15"
        animate={{
          scale: [1.1, 0.9, 1.1],
          rotate: [360, 180, 0]
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "linear"
        }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 text-white"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Support Section */}
          <motion.div variants={itemVariants}>
            <motion.h3 
              className="text-lg font-bold mb-4"
              whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
            >
              Support
            </motion.h3>
            <motion.div 
              className="space-y-2 text-sm"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {['Contact Us', 'About Us', 'Size Guide', 'Shopping & Returns', 'Privacy'].map((item, index) => (
                <motion.p 
                  key={index}
                  variants={linkVariants}
                  whileHover={{ 
                    x: 5, 
                    color: "#FEF3C7",
                    transition: { duration: 0.2 } 
                  }}
                  className="cursor-pointer"
                >
                  {item}
                </motion.p>
              ))}
            </motion.div>
          </motion.div>

          {/* Shop Section */}
          <motion.div variants={itemVariants}>
            <motion.h3 
              className="text-lg font-bold mb-4"
              whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
            >
              Shop
            </motion.h3>
            <motion.div 
              className="space-y-2 text-sm"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {['Men\'s Shopping', 'Women\'s Shopping', 'Kids\' Shopping', 'Furniture', 'Discount'].map((item, index) => (
                <motion.p 
                  key={index}
                  variants={linkVariants}
                  whileHover={{ 
                    x: 5, 
                    color: "#FEF3C7",
                    transition: { duration: 0.2 } 
                  }}
                  className="cursor-pointer"
                >
                  {item}
                </motion.p>
              ))}
            </motion.div>
          </motion.div>

          {/* Company Section */}
          <motion.div variants={itemVariants}>
            <motion.h3 
              className="text-lg font-bold mb-4"
              whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
            >
              Company
            </motion.h3>
            <motion.div 
              className="space-y-2 text-sm"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {['Our Story', 'Careers', 'Terms & Conditions', 'Privacy & Cookie policy', 'Company information'].map((item, index) => (
                <motion.p 
                  key={index}
                  variants={linkVariants}
                  whileHover={{ 
                    x: 5, 
                    color: "#FEF3C7",
                    transition: { duration: 0.2 } 
                  }}
                  className="cursor-pointer"
                >
                  {item}
                </motion.p>
              ))}
            </motion.div>
          </motion.div>

          {/* Contact Section */}
          <motion.div variants={itemVariants}>
            <motion.h3 
              className="text-lg font-bold mb-4"
              whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
            >
              Contact
            </motion.h3>
            <motion.div 
              className="space-y-2 text-sm"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {[
                '📧 info@stemrobo.com',
                '📞 +91-XXX-XXX-XXXX',
                '📍 Address Line 1,',
                'City, State - PIN'
              ].map((item, index) => (
                <motion.p 
                  key={index}
                  variants={linkVariants}
                  whileHover={{ 
                    x: 5, 
                    scale: 1.02,
                    transition: { duration: 0.2 } 
                  }}
                  className="cursor-pointer"
                >
                  {item}
                </motion.p>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>

        {/* App Section */}
        <motion.div 
          className="mt-12 pt-8 border-t border-white/20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-col lg:flex-row items-center justify-between">
            <motion.div 
              className="mb-6 lg:mb-0"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <h3 className="text-lg font-bold text-white mb-4">Our Apps</h3>
              <div className="flex space-x-4">
                <motion.div 
                  className="bg-white rounded-lg p-3 flex items-center space-x-2 cursor-pointer"
                  whileHover={{ 
                    scale: 1.05,
                    boxShadow: "0 10px 25px rgba(0,0,0,0.2)",
                    transition: { duration: 0.3 }
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  <motion.div 
                    className="w-8 h-8 bg-gray-800 rounded flex items-center justify-center"
                    whileHover={{ rotate: 10 }}
                  >
                    <span className="text-white text-xs">📱</span>
                  </motion.div>
                  <div className="text-gray-800 text-sm">
                    <div className="font-medium">Download on the</div>
                    <div className="font-bold">App Store</div>
                  </div>
                </motion.div>
                
                <motion.div 
                  className="bg-white rounded-lg p-3 flex items-center space-x-2 cursor-pointer"
                  whileHover={{ 
                    scale: 1.05,
                    boxShadow: "0 10px 25px rgba(0,0,0,0.2)",
                    transition: { duration: 0.3 }
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  <motion.div 
                    className="w-8 h-8 bg-green-600 rounded flex items-center justify-center"
                    whileHover={{ rotate: -10 }}
                  >
                    <span className="text-white text-xs">▶</span>
                  </motion.div>
                  <div className="text-gray-800 text-sm">
                    <div className="font-medium">Get it on</div>
                    <div className="font-bold">Google Play</div>
                  </div>
                </motion.div>
              </div>
            </motion.div>

            {/* Logo */}
            <motion.div 
              className="text-center"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <motion.div 
                className="bg-white rounded-full w-16 h-16 flex items-center justify-center mb-4 mx-auto cursor-pointer"
                whileHover={{ 
                  scale: 1.1,
                  rotate: 360,
                  boxShadow: "0 10px 30px rgba(0,0,0,0.2)"
                }}
                transition={{ duration: 0.5 }}
              >
                <span className="text-2xl">🤖</span>
              </motion.div>
              <motion.div 
                className="text-white font-bold"
                whileHover={{ scale: 1.05 }}
              >
                STEMROBO
              </motion.div>
            </motion.div>
          </div>
        </motion.div>

        {/* Copyright */}
        <motion.div 
          className="mt-8 pt-8 border-t border-white/20 text-center text-white text-sm"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.p
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
          >
            Copyright 2024 - STEMROBO Technologies Pvt Ltd. All Rights Reserved - Terms & Conditions Privacy & Policy
          </motion.p>
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer; 