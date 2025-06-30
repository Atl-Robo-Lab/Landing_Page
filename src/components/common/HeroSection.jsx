import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const HeroSection = () => {
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

  const rotateVariants = {
    animate: {
      rotate: [0, 360],
      transition: {
        duration: 12,
        repeat: Infinity,
        ease: "linear",
      },
    },
  };

  return (
    <section className="min-h-[60vh] sm:min-h-[70vh] lg:min-h-screen flex items-center overflow-hidden relative bg-white">
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
              linear-gradient(rgba(99, 102, 241, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(99, 102, 241, 0.1) 1px, transparent 1px)
            `,
              backgroundSize: "30px 30px",
            }}
          ></div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8 sm:py-12 lg:py-16 relative z-10">
        <motion.div
          className="grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Left Content */}
          <div className="text-gray-900 space-y-4 sm:space-y-6 lg:space-y-8">
            <motion.div
              className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-4 py-2 sm:px-6 sm:py-3 lg:px-8 lg:py-4 rounded-full inline-block text-sm sm:text-base font-semibold shadow-lg"
              variants={itemVariants}
              whileHover={{
                scale: 1.05,
                boxShadow: "0 8px 25px rgba(59, 130, 246, 0.4)",
                y: -2,
              }}
            >
              🚀 Looking Robotics Lab For School
            </motion.div>

            <motion.h1
              className="text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight"
              variants={itemVariants}
            >
              <span className="text-gray-900 text-lg xs:text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl">
                Transform Education with
              </span>
              <br />
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl">
                ATL Lab
              </span>
              ,{" "}
              <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl">
                AI Lab
              </span>{" "}
              &
              <br />
              <span className="bg-gradient-to-r from-orange-300 to-red-500 bg-clip-text text-transparent text-lg xs:text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl">
                AR & VR Lab Setup
              </span>
            </motion.h1>

            <motion.div className="space-y-2 sm:space-y-4" variants={itemVariants}>
              <p className="text-gray-600 text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed">
                Advanced Learning Ecosystem
              </p>
            </motion.div>

            <motion.div
              className="bg-white/80 backdrop-blur-md border border-gray-200 p-4 sm:p-6 lg:p-8 rounded-2xl shadow-xl"
              variants={itemVariants}
              whileHover={{
                scale: 1.02,
                boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
                y: -5,
              }}
            >
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold mb-2 sm:mb-4 text-gray-900 leading-tight">
                Complete ATLROBOLAB Solution
              </h2>
              <p className="text-gray-600 mb-4 sm:mb-6 text-sm sm:text-base md:text-lg leading-relaxed">
                Robotics Lab • AI & Coding • AI & IoT Lab • AR & VR • ATL Lab
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <motion.div
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    to="/contact"
                    className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-3 sm:px-8 sm:py-4 rounded-xl font-semibold hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 text-center block shadow-lg hover:shadow-xl text-sm sm:text-base md:text-lg"
                  >
                    📞 Book Demo
                  </Link>
                </motion.div>
                <motion.button
                  className="border-2 border-gray-300 text-gray-700 px-6 py-3 sm:px-8 sm:py-4 rounded-xl font-semibold hover:bg-gray-50 hover:border-gray-400 transition-all duration-300 text-sm sm:text-base md:text-lg"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  📺 Watch Video
                </motion.button>
              </div>
            </motion.div>
          </div>

          {/* Right Content - Modern Tech Visual */}
          <motion.div
            className="relative mt-6 lg:mt-0"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            {/* Main Robot/Tech Hub */}
            <motion.div
              className="relative bg-white/90 backdrop-blur-lg rounded-3xl p-4 sm:p-6 lg:p-8 shadow-2xl border border-gray-200"
              whileHover={{
                y: -10,
                boxShadow: "0 30px 60px rgba(0,0,0,0.15)",
                transition: { duration: 0.3 },
              }}
              variants={floatingVariants}
              animate="animate"
            >
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl h-40 sm:h-48 lg:h-64 flex items-center justify-center relative overflow-hidden">
                <motion.div
                  className="w-20 h-20 sm:w-24 sm:h-24 lg:w-32 lg:h-32 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center shadow-xl"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  variants={rotateVariants}
                  animate="animate"
                >
                  <span className="text-2xl sm:text-3xl lg:text-4xl">🤖</span>
                </motion.div>

                {/* Tech Particles */}
                <motion.div
                  className="absolute top-2 right-2 sm:top-4 sm:right-4 w-2 h-2 sm:w-3 sm:h-3 bg-blue-500 rounded-full"
                  animate={{
                    opacity: [0, 1, 0],
                    scale: [0, 1, 0],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: 0,
                  }}
                />
                <motion.div
                  className="absolute bottom-3 left-3 sm:bottom-6 sm:left-6 w-1.5 h-1.5 sm:w-2 sm:h-2 bg-indigo-500 rounded-full"
                  animate={{
                    opacity: [0, 1, 0],
                    scale: [0, 1, 0],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: 0.5,
                  }}
                />
              </div>

              <div className="mt-3 sm:mt-4 lg:mt-6 text-center">
                <h3 className="text-base sm:text-lg md:text-xl font-bold text-gray-900 mb-1 sm:mb-2 leading-tight">
                  SOLUTION FOR YOUR SCHOOL?
                </h3>
                <p className="text-gray-600 text-xs sm:text-sm md:text-base leading-relaxed">
                  No need to look further - ATLROBO is the One-Stop Solution!
                </p>
              </div>
            </motion.div>

            {/* Floating Tech Cards - smaller on mobile */}
            <motion.div
              className="absolute -top-3 -right-3 sm:-top-6 sm:-right-6 bg-gradient-to-br from-yellow-400 to-orange-500 w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 rounded-2xl flex items-center justify-center shadow-xl"
              variants={floatingVariants}
              animate="animate"
              whileHover={{ scale: 1.2, rotate: 15 }}
              style={{ animationDelay: "1s" }}
            >
              <span className="text-lg sm:text-xl lg:text-2xl">🧠</span>
            </motion.div>

            <motion.div
              className="absolute -bottom-3 -left-3 sm:-bottom-6 sm:-left-6 bg-gradient-to-br from-purple-500 to-pink-500 w-10 h-10 sm:w-12 sm:h-12 lg:w-16 lg:h-16 rounded-2xl flex items-center justify-center shadow-xl"
              variants={floatingVariants}
              animate="animate"
              whileHover={{ scale: 1.3, rotate: -15 }}
              style={{ animationDelay: "2s" }}
            >
              <span className="text-sm sm:text-base lg:text-xl">⚡</span>
            </motion.div>

            <motion.div
              className="absolute top-1/3 -left-4 sm:-left-6 lg:-left-8 bg-gradient-to-br from-cyan-400 to-blue-500 w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 rounded-xl flex items-center justify-center shadow-lg"
              variants={floatingVariants}
              animate="animate"
              whileHover={{ scale: 1.2 }}
              style={{ animationDelay: "1.5s" }}
            >
              <span className="text-sm sm:text-base lg:text-lg">🔬</span>
            </motion.div>

            {/* Floating Particles - fewer on mobile */}
            {[...Array(4)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-0.5 h-0.5 sm:w-1 sm:h-1 bg-blue-400 rounded-full hidden sm:block"
                style={{
                  top: `${20 + i * 15}%`,
                  right: `${10 + i * 5}%`,
                }}
                animate={{
                  y: [-20, 20, -20],
                  opacity: [0.2, 0.8, 0.2],
                  scale: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: 4 + i * 0.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: i * 0.3,
                }}
              />
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
