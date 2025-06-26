import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const HeroSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const floatingVariants = {
    animate: {
      y: [-8, 8, -8],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  const rotateVariants = {
    animate: {
      rotate: [0, 360],
      transition: {
        duration: 12,
        repeat: Infinity,
        ease: "linear"
      }
    }
  };

  return (
    <section className="min-h-screen flex items-center overflow-hidden relative bg-white">
      {/* Simple Modern Background */}
      <div className="absolute inset-0">
        {/* Clean gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-indigo-50"></div>
        
        {/* Subtle geometric shapes */}
        <div className="absolute top-20 left-20 w-64 h-64 bg-gradient-to-br from-blue-100/40 to-indigo-100/40 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-br from-purple-100/30 to-pink-100/30 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-teal-50/50 to-cyan-50/50 rounded-full blur-3xl"></div>
        
        {/* Modern grid pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="h-full w-full" style={{
            backgroundImage: `
              linear-gradient(rgba(99, 102, 241, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(99, 102, 241, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px'
          }}></div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16 relative z-10">
        <motion.div 
          className="grid lg:grid-cols-2 gap-12 items-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Left Content */}
          <div className="text-gray-900 space-y-8">
            <motion.div 
              className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-6 py-3 rounded-full inline-block text-sm font-semibold shadow-lg"
              variants={itemVariants}
              whileHover={{ 
                scale: 1.05, 
                boxShadow: "0 8px 25px rgba(59, 130, 246, 0.4)",
                y: -2
              }}
            >
              🚀 Transform Your Lab Today
            </motion.div>
            
            <motion.h1 
              className="text-4xl md:text-5xl lg:text-7xl font-bold leading-tight"
              variants={itemVariants}
            >
              <span className="text-gray-900">Future-Ready</span>
              <br />
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Robotics</span> & <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">AI</span>
              <br />
              <span className="text-gray-700">Laboratory</span>
            </motion.h1>
            
            <motion.p 
              className="text-xl md:text-2xl text-gray-600 leading-relaxed font-light"
              variants={itemVariants}
            >
              Empowering the next generation with cutting-edge robotics, 
              AI technology, and innovative learning experiences.
            </motion.p>
            
            <motion.div 
              className="bg-white/80 backdrop-blur-md border border-gray-200 p-8 rounded-2xl shadow-xl"
              variants={itemVariants}
              whileHover={{ 
                scale: 1.02, 
                boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
                y: -5
              }}
            >
              <h2 className="text-2xl font-bold mb-3 text-gray-900">
                Complete ATLROBOLAB Solution
              </h2>
              <p className="text-gray-600 mb-6 text-lg">
                STEM Lab • Tinkering Lab • AI Lab • AR/VR Lab • IoT Solutions
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <motion.div
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link 
                    to="/contact"
                    className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 text-center block shadow-lg hover:shadow-xl"
                  >
                    🎯 Book Demo
                  </Link>
                </motion.div>
                <motion.button 
                  className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-xl font-semibold hover:bg-gray-50 hover:border-gray-400 transition-all duration-300"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  📺 Watch Demo
                </motion.button>
              </div>
            </motion.div>

            {/* Stats */}
            <motion.div 
              className="grid grid-cols-3 gap-6 pt-4"
              variants={itemVariants}
            >
              {[
                { number: "500+", label: "Schools Equipped" },
                { number: "50K+", label: "Students Impacted" },
                { number: "15+", label: "Countries" }
              ].map((stat, index) => (
                <motion.div 
                  key={index}
                  className="text-center"
                  whileHover={{ scale: 1.1, y: -5 }}
                >
                  <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                    {stat.number}
                  </div>
                  <div className="text-sm text-gray-600">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Right Content - Modern Tech Visual */}
          <motion.div 
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            {/* Main Robot/Tech Hub */}
            <motion.div 
              className="relative bg-white/90 backdrop-blur-lg rounded-3xl p-8 shadow-2xl border border-gray-200"
              whileHover={{ 
                y: -10, 
                boxShadow: "0 30px 60px rgba(0,0,0,0.15)",
                transition: { duration: 0.3 }
              }}
              variants={floatingVariants}
              animate="animate"
            >
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl h-64 flex items-center justify-center relative overflow-hidden">
                <motion.div 
                  className="w-32 h-32 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center shadow-xl"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  variants={rotateVariants}
                  animate="animate"
                >
                  <span className="text-4xl">🤖</span>
                </motion.div>
                
                {/* Tech Particles */}
                <motion.div
                  className="absolute top-4 right-4 w-3 h-3 bg-blue-500 rounded-full"
                  animate={{
                    opacity: [0, 1, 0],
                    scale: [0, 1, 0]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: 0
                  }}
                />
                <motion.div
                  className="absolute bottom-6 left-6 w-2 h-2 bg-indigo-500 rounded-full"
                  animate={{
                    opacity: [0, 1, 0],
                    scale: [0, 1, 0]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: 0.5
                  }}
                />
              </div>
              
              <div className="mt-6 text-center">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  ATLROBOLAB Hub
                </h3>
                <p className="text-gray-600 text-sm">
                  Advanced Learning Ecosystem
                </p>
              </div>
            </motion.div>
            
            {/* Floating Tech Cards */}
            <motion.div 
              className="absolute -top-6 -right-6 bg-gradient-to-br from-yellow-400 to-orange-500 w-20 h-20 rounded-2xl flex items-center justify-center shadow-xl"
              variants={floatingVariants}
              animate="animate"
              whileHover={{ scale: 1.2, rotate: 15 }}
              style={{ animationDelay: "1s" }}
            >
              <span className="text-2xl">🧠</span>
            </motion.div>
            
            <motion.div 
              className="absolute -bottom-6 -left-6 bg-gradient-to-br from-purple-500 to-pink-500 w-16 h-16 rounded-2xl flex items-center justify-center shadow-xl"
              variants={floatingVariants}
              animate="animate"
              whileHover={{ scale: 1.3, rotate: -15 }}
              style={{ animationDelay: "2s" }}
            >
              <span className="text-xl">⚡</span>
            </motion.div>

            <motion.div 
              className="absolute top-1/3 -left-8 bg-gradient-to-br from-cyan-400 to-blue-500 w-12 h-12 rounded-xl flex items-center justify-center shadow-lg"
              variants={floatingVariants}
              animate="animate"
              whileHover={{ scale: 1.2 }}
              style={{ animationDelay: "1.5s" }}
            >
              <span className="text-lg">🔬</span>
            </motion.div>

            {/* Floating Particles */}
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-blue-400 rounded-full"
                style={{
                  top: `${20 + i * 15}%`,
                  right: `${10 + i * 5}%`
                }}
                animate={{
                  y: [-20, 20, -20],
                  opacity: [0.2, 0.8, 0.2],
                  scale: [0.5, 1, 0.5]
                }}
                transition={{
                  duration: 4 + i * 0.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: i * 0.3
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