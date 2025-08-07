import React from "react";
import { motion } from "framer-motion";
import { FaInstagram, FaFacebook, FaLinkedin, FaYoutube } from "react-icons/fa";
import { HiDeviceMobile } from 'react-icons/hi';
import { FaXTwitter } from "react-icons/fa6";
import logo from "../../assets/logo.png";

const Footer = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <motion.footer
      className="bg-gradient-accent-success py-6 sm:py-8 md:py-12 relative overflow-hidden"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-gradient-accent-success opacity-90"></div>
      <div className="absolute top-10 left-10 w-32 h-32 bg-white opacity-5 rounded-full"></div>
      <div className="absolute bottom-10 right-10 w-24 h-24 bg-white opacity-5 rounded-full"></div>
      <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-white opacity-3 rounded-full"></div>

      <div className="w-full px-3 sm:px-4 md:px-6 lg:container lg:mx-auto relative z-10">
        {/* Main Content */}
        <motion.div
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-4 md:gap-6 lg:gap-8 text-white mb-6 sm:mb-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Company Logo and Info */}
          <motion.div
            className="col-span-2 sm:col-span-3 md:col-span-2 lg:col-span-1 flex flex-col items-start"
            variants={itemVariants}
          >
            <div className="mb-4 sm:mb-6 w-full">
              <img
                src={logo}
                alt="ATLROBOLAB"
                className="h-12 sm:h-14 md:h-16 w-auto mb-3 sm:mb-4"
              />
              <div className="text-xs sm:text-sm leading-relaxed">
                <p className="mb-1">
                  Changing the Education Landscape for K-12 Students by
                  leveraging Technology and 21st century skills in line with NEP
                  2020.
                </p>
                <p className="text-xs opacity-90 mt-2">
                  ISO 9001:2015, ISO 14001:2015, ISO 20000-1:2018
                </p>
                <p className="mt-2 font-semibold text-xs sm:text-sm">
                  Toll Free No: 1800-120-500-400
                </p>
              </div>
            </div>
          </motion.div>

          {/* Support Section */}
          <motion.div className="col-span-1" variants={itemVariants}>
            <h3 className="text-sm sm:text-base md:text-lg font-bold mb-3">
              Support
            </h3>
            <div className="space-y-1 text-xs sm:text-sm">
              {[
                "Contact Us",
                "Career",
                "Privacy Policy",
                "Terms and Conditions",
                "Expert Guidance",
              ].map((item, index) => (
                <motion.p
                  key={index}
                  className="cursor-pointer hover:text-primary-light transition-colors duration-200 leading-tight"
                  whileHover={{ x: 5 }}
                >
                  {item}
                </motion.p>
              ))}
            </div>
          </motion.div>

          {/* Resources Section */}
          <motion.div className="col-span-1" variants={itemVariants}>
            <h3 className="text-sm sm:text-base md:text-lg font-bold mb-3">
              Resources
            </h3>
            <div className="space-y-1 text-xs sm:text-sm">
              {[
                "Events",
                "Knowledge Base",
                "Social Media",
                "Media Coverage",
                "Blogs",
                "Press",
                "Composite Skill Lab",
                "SIL",
              ].map((item, index) => (
                <motion.p
                  key={index}
                  className="cursor-pointer hover:text-primary-light transition-colors duration-200 leading-tight"
                  whileHover={{ x: 5 }}
                >
                  {item}
                </motion.p>
              ))}
            </div>
          </motion.div>

          {/* Our Platforms Section */}
          <motion.div
            className="col-span-1 sm:col-span-1 md:col-span-1"
            variants={itemVariants}
          >
            <h3 className="text-sm sm:text-base md:text-lg font-bold mb-3">
              Our Platforms
            </h3>
            <div className="space-y-1 text-xs sm:text-sm">
              {["AI Connect", "LMS", "TinkerCoders"].map((item, index) => (
                <motion.p
                  key={index}
                  className="cursor-pointer hover:text-primary-light transition-colors duration-200 leading-tight"
                  whileHover={{ x: 5 }}
                >
                  {item}
                </motion.p>
              ))}
            </div>
          </motion.div>

          {/* Our Apps Section */}
          <motion.div
            className="col-span-1 sm:col-span-1 md:col-span-1"
            variants={itemVariants}
          >
            <h3 className="text-sm sm:text-base md:text-lg font-bold mb-3">
              Our Apps
            </h3>
            <div className="space-y-1 text-xs sm:text-sm mb-3">
              {["Atlrobo Learn App", "Tinker Orbit", "AR App"].map(
                (item, index) => (
                  <motion.p
                    key={index}
                    className="cursor-pointer hover:text-primary-light transition-colors duration-200 leading-tight"
                    whileHover={{ x: 5 }}
                  >
                    {item}
                  </motion.p>
                )
              )}
            </div>

            {/* App Download Section - Hidden on very small screens, shown as separate row */}
            <div className="hidden sm:block space-y-2">
              <p className="text-xs font-semibold">Download App</p>
              <div className="flex flex-col gap-1">
                <motion.a
                  href="#"
                  className="flex items-center bg-black text-white px-2 py-1 rounded text-xs hover:bg-gray-800 transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="text-xs mr-1">🍎</span>
                  <span className="text-xs">App Store</span>
                </motion.a>

                <motion.a
                  href="#"
                  className="flex items-center bg-black text-white px-2 py-1 rounded text-xs hover:bg-gray-800 transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <HiDeviceMobile className="text-xs mr-1" />
                  <span className="text-xs">Google Play</span>
                </motion.a>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* App Download Section for small screens */}
        <motion.div className="sm:hidden mb-6 w-full" variants={itemVariants}>
          <p className="text-sm font-semibold text-white mb-3 text-center">
            Download The ATLROBOLAB App
          </p>
          <div className="flex justify-center gap-3">
            <motion.a
              href="#"
              className="flex items-center bg-black text-white px-3 py-2 rounded-lg text-xs hover:bg-gray-800 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="text-sm mr-2">🍎</span>
              <div>
                <div className="text-xs opacity-75">Download on</div>
                <div className="font-semibold text-xs">App Store</div>
              </div>
            </motion.a>

            <motion.a
              href="#"
              className="flex items-center bg-black text-white px-3 py-2 rounded-lg text-xs hover:bg-gray-800 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <HiDeviceMobile className="text-sm mr-2" />
              <div>
                <div className="text-xs opacity-75">Get it on</div>
                <div className="font-semibold text-xs">Google Play</div>
              </div>
            </motion.a>
          </div>
        </motion.div>

        {/* Social Media Section */}
        <motion.div
          className="text-center mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <div className="flex justify-center gap-4">
            <motion.div
              whileHover={{ scale: 1.2, y: -5 }}
              whileTap={{ scale: 0.9 }}
              transition={{ duration: 0.2 }}
            >
              <FaInstagram size={24} />
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.2, y: -5 }}
              whileTap={{ scale: 0.9 }}
              transition={{ duration: 0.2 }}
            >
              <FaFacebook size={24} />
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.2, y: -5 }}
              whileTap={{ scale: 0.9 }}
              transition={{ duration: 0.2 }}
            >
              <FaLinkedin size={24} />
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.2, y: -5 }}
              whileTap={{ scale: 0.9 }}
              transition={{ duration: 0.2 }}
            >
              <FaYoutube size={24} />
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.2, y: -5 }}
              whileTap={{ scale: 0.9 }}
              transition={{ duration: 0.2 }}
            >
              <FaXTwitter size={24} />
            </motion.div>
          </div>
        </motion.div>

        {/* Copyright */}
        <motion.div
          className="text-center text-white text-xs sm:text-sm border-t border-white border-opacity-20 pt-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <p className="leading-tight">
            Copyright 2025 - Atlrobo Lab Technologies Pvt. Ltd. All Rights
            Reserved - Terms & Conditions | Privacy & Policy
          </p>
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer;
