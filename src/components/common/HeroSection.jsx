import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { TbRobot } from 'react-icons/tb';
import { FaBrain, FaMicroscope } from 'react-icons/fa';
import { HiLightningBolt, HiPhone } from 'react-icons/hi';
import { HiRocketLaunch } from 'react-icons/hi2';
// Import banner images
import B1Image from "../../assets/B1.png";
import B2Image from "../../assets/B2.png";

const HeroSection = () => {
  // State for auto-changing images
  const [currentImage, setCurrentImage] = useState(0);
  
  // Image data with sources from assets
  const images = [
    {
      src: B1Image,
      title: "Computer Labs",
      subtitle: "Modern Setup",
      gradient: "from-blue-500 to-indigo-600"
    },
    {
      src: B2Image, 
      title: "Robotics Labs",
      subtitle: "Innovation Hub",
      gradient: "from-purple-500 to-pink-600"
    }
  ];

  // Auto-change images every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const floatingVariants = {
    animate: {
      y: [-8, 8, -8],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };



  return (
    <section className="min-h-[60vh] sm:min-h-[70vh] lg:min-h-screen flex items-center overflow-hidden relative bg-white pt-0">
      {/* Simple Modern Background */}
      <div className="absolute inset-0">
        {/* Clean gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-indigo-50"></div>

        {/* Subtle geometric shapes - smaller on mobile */}
        <div className="absolute top-10 left-10 sm:top-20 sm:left-20 w-32 h-32 sm:w-64 sm:h-64 bg-gradient-to-br from-blue-100/40 to-indigo-100/40 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 sm:bottom-20 sm:right-20 w-40 h-40 sm:w-80 sm:h-80 bg-gradient-to-br from-purple-100/30 to-pink-100/30 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 sm:w-96 sm:h-96 bg-gradient-to-br from-teal-50/50 to-cyan-50/50 rounded-full blur-3xl"></div>

        {/* Modern grid pattern */}
        <div className="absolute inset-0 opacity-5">
          <div
            className="h-full w-full"
            style={{
              backgroundImage: `
              linear-gradient(rgba(37, 99, 235, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(37, 99, 235, 0.1) 1px, transparent 1px)
            `,
              backgroundSize: "30px 30px",
            }}
          ></div>
        </div>
      </div>

      <div className="container mx-auto px-4 pb-8 sm:pb-12 lg:pb-16 relative z-10">
        <motion.div
          className="grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Left Content - Clean Banner with 2 Images */}
          <motion.div
            className="relative mt-4 lg:mt-6"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            {/* Smart Infrastructure Badge - Outside the box */}
            <div className="flex justify-center w-full mb-4">
              <motion.div
                className="bg-gradient-primary-secondary text-white px-3 py-2 rounded-full inline-block text-xs sm:text-sm font-semibold shadow-lg w-fit text-center"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 8px 25px rgba(37, 99, 235, 0.4)",
                  y: -2,
                }}
              >
                <div className="flex items-center justify-center gap-2">
                  <HiRocketLaunch className="text-xs sm:text-sm" />
                  <span>Smart Infrastructure Solutions for Future-Ready Schools & Colleges</span>
                </div>
              </motion.div>
            </div>

            {/* Main Banner Card */}
            <motion.div
              className="bg-white/95 backdrop-blur-lg rounded-2xl p-4 sm:p-6 shadow-2xl border border-gray-200"
              variants={floatingVariants}
              animate="animate"
              whileHover={{
                y: -5,
                boxShadow: "0 25px 50px rgba(0,0,0,0.15)",
                transition: { duration: 0.3 },
              }}
            >
              {/* Header */}
              <div className="text-center mb-4">                
                <h3 className="text-base sm:text-lg md:text-xl font-bold text-gray-900 mb-2 leading-tight">
                  SOLUTION FOR YOUR SCHOOL?
                </h3>
                <p className="text-neutral text-sm md:text-base leading-relaxed">
                  No need to look further - ATLROBO is the One-Stop Solution!
                </p>
              </div>

              {/* Single Auto-Changing Image Banner */}
              <div className="relative mb-4">
                <motion.div
                  key={currentImage}
                  className="relative rounded-xl overflow-hidden h-32 sm:h-40 lg:h-48"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.05 }}
                  transition={{ duration: 0.8, ease: "easeInOut" }}
                  whileHover={{ scale: 1.02 }}
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${images[currentImage].gradient}`}></div>
                  <img
                    src={images[currentImage].src}
                    alt={images[currentImage].title}
                    className="w-full h-full object-cover mix-blend-overlay"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                  <div className="absolute bottom-3 left-3 right-3">
                    <motion.h4 
                      className="text-white text-sm sm:text-base font-semibold leading-tight mb-1"
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.3, duration: 0.6 }}
                    >
                      {images[currentImage].title}
                    </motion.h4>
                    <motion.p 
                      className="text-white/80 text-xs sm:text-sm leading-tight"
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.4, duration: 0.6 }}
                    >
                      {images[currentImage].subtitle}
                    </motion.p>
                  </div>
                </motion.div>
                
                {/* Image Indicators */}
                <div className="flex justify-center gap-2 mt-3">
                  {images.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImage(index)}
                      className={`w-2 h-2 rounded-full transition-all duration-300 ${
                        index === currentImage 
                          ? 'bg-blue-600 w-6' 
                          : 'bg-gray-300 hover:bg-gray-400'
                      }`}
                    />
                  ))}
                </div>
              </div>

              {/* Features Row */}
              <div className="flex justify-center gap-4 sm:gap-6 mb-4">
                <motion.div 
                  className="flex items-center gap-2 text-xs sm:text-sm text-gray-600"
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                    <FaBrain className="text-blue-600 text-sm" />
                  </div>
                  <span className="font-medium">Smart Labs</span>
                </motion.div>
                
                <motion.div 
                  className="flex items-center gap-2 text-xs sm:text-sm text-gray-600"
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="w-8 h-8 bg-yellow-100 rounded-lg flex items-center justify-center">
                    <HiLightningBolt className="text-yellow-600 text-sm" />
                  </div>
                  <span className="font-medium">Fast Wi-Fi</span>
                </motion.div>
                
                <motion.div 
                  className="flex items-center gap-2 text-xs sm:text-sm text-gray-600"
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
                    <FaMicroscope className="text-green-600 text-sm" />
                  </div>
                  <span className="font-medium">Research</span>
                </motion.div>
              </div>

              {/* Statistics Section */}
              <motion.div
                className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-3 sm:p-4 mb-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                whileHover={{ scale: 1.02 }}
              >
                <h4 className="text-center font-bold text-gray-800 text-sm mb-3">Our Impact in Bihar</h4>
                <div className="grid grid-cols-3 gap-2 sm:gap-3">
                  <div className="text-center">
                    <div className="text-lg sm:text-xl font-bold text-blue-600">50+</div>
                    <div className="text-xs text-gray-600">Schools</div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg sm:text-xl font-bold text-green-600">100%</div>
                    <div className="text-xs text-gray-600">Success</div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg sm:text-xl font-bold text-purple-600">24/7</div>
                    <div className="text-xs text-gray-600">Support</div>
                  </div>
                </div>
              </motion.div>

            </motion.div>
          </motion.div>

          {/* Right Content */}
          <div className="text-gray-900 space-y-4 sm:space-y-6 lg:space-y-8 text-center">
            

            <motion.h1
              className="text-lg xs:text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold leading-tight text-center"
              variants={itemVariants}
            >
              <span className="text-gray-900 text-base xs:text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl">
                Building the Future of Education in
              </span>
              <br />
              <span className="text-gradient-primary-secondary text-lg xs:text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl">
                Bihar
              </span>
              {" "}with{" "}
              <span className="text-gradient-secondary-accent text-lg xs:text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl">
                ATL ROBO
              </span>
              <br />
              <span className="text-gradient-accent text-base xs:text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl">
                Modern Labs & Wi-Fi Infrastructure
              </span>
            </motion.h1>

            <motion.div className="space-y-2 sm:space-y-4 text-center" variants={itemVariants}>
              <p className="text-neutral text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed">
                Transforming schools and colleges across Bihar into modern hubs of innovation and learning through state-of-the-art computer labs, reliable Wi-Fi connectivity, and cutting-edge educational tools.
              </p>
            </motion.div>

            <motion.div
              className="bg-white/80 backdrop-blur-md border border-gray-200 p-3 sm:p-4 lg:p-6 rounded-2xl shadow-xl text-center"
              variants={itemVariants}
              whileHover={{
                scale: 1.02,
                boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
                y: -5,
              }}
            >
              <h2 className="text-base sm:text-lg md:text-xl font-bold mb-2 sm:mb-3 text-gray-900 leading-tight">
                Complete Educational Infrastructure Solution
              </h2>
              <p className="text-neutral mb-3 sm:mb-4 text-xs sm:text-sm md:text-base leading-relaxed">
                State-of-the-Art Computer Labs • Campus-Wide Wi-Fi • Robotics Kits • Teacher Training • Complete Setup & Support
              </p>
              <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 justify-center">
                <motion.div
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    to="/contact"
                    className="bg-gradient-primary-secondary text-white px-4 py-2 sm:px-6 sm:py-3 rounded-xl font-semibold hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 text-center block shadow-lg hover:shadow-xl text-xs sm:text-sm md:text-base"
                  >
                    <div className="flex items-center justify-center gap-2">
                      <HiPhone className="text-sm sm:text-base" />
                      <span>Book Demo</span>
                    </div>
                  </Link>
                </motion.div>
                <motion.button
                  className="border-2 border-gray-300 text-gray-700 px-4 py-2 sm:px-6 sm:py-3 rounded-xl font-semibold hover:bg-gray-50 hover:border-gray-400 transition-all duration-300 text-xs sm:text-sm md:text-base"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  📺 Watch Video
                </motion.button>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
