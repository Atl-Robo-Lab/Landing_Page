import React from 'react';
import { Link } from 'react-router-dom';
// eslint-disable-next-line no-unused-vars
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { HiComputerDesktop, HiRocketLaunch } from 'react-icons/hi2';
import { HiFlag } from 'react-icons/hi';
import { FaChalkboardTeacher, FaTrophy, FaMicroscope, FaMobile, FaGraduationCap } from 'react-icons/fa';

const SolutionSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const solutions = [
    {
      title: 'Digital Learning Platform',
      description: 'Interactive learning experiences with cutting-edge technology',
      icon: HiComputerDesktop,
      gradient: 'bg-gradient-primary-secondary',
      bgColor: 'bg-primary-light',
      features: ['Interactive Content', 'Real-time Assessment', 'Progress Tracking']
    },
    {
      title: 'Teacher Development',
      description: 'Comprehensive training programs for modern educators',
      icon: FaChalkboardTeacher,
      gradient: 'bg-gradient-accent-success',
      bgColor: 'bg-success-light',
      features: ['Skill Enhancement', 'Certification Programs', 'Ongoing Support']
    },
    {
      title: 'Innovation Competitions',
      description: 'National and international contests to showcase talent',
      icon: FaTrophy,
      gradient: 'bg-gradient-secondary-accent',
      bgColor: 'bg-secondary-light',
      features: ['Global Reach', 'Recognition Awards', 'Skill Building']
    },
    {
      title: 'Complete Lab Setup',
      description: 'End-to-end laboratory infrastructure and equipment',
      icon: FaMicroscope,
      gradient: 'bg-gradient-primary-accent',
      bgColor: 'bg-accent-light',
      features: ['Modern Equipment', 'Safety Standards', 'Maintenance Support']
    },
    {
      title: 'Learning Management',
      description: 'Advanced mobile app for seamless learning experience',
      icon: FaMobile,
      gradient: 'bg-gradient-primary-secondary',
      bgColor: 'bg-neutral-light',
      features: ['Mobile Access', 'Offline Content', 'Parent Dashboard']
    },
    {
      title: 'Industry Certification',
      description: 'Globally recognized certificates for students and educators',
      icon: FaGraduationCap,
      gradient: 'bg-gradient-accent-success',
      bgColor: 'bg-success-light',
      features: ['Industry Recognition', 'Career Advancement', 'Skill Validation']
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.15
      }
    }
  };

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 60,
      scale: 0.9
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="py-12 sm:py-16 md:py-24 relative overflow-hidden bg-neutral-dark text-white" ref={ref}>
      {/* Modern Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-neutral-dark opacity-90"></div>
        
        {/* Large Submerged Background Text - Hidden on mobile for better performance */}
        <div className="hidden sm:flex absolute inset-0 items-center justify-center pointer-events-none overflow-hidden">
          <div className="text-[8rem] sm:text-[12rem] md:text-[18rem] lg:text-[22rem] font-black text-white/5 select-none whitespace-nowrap transform -rotate-12">
            SOLUTIONS
          </div>
        </div>
        
        {/* Animated shapes - Smaller on mobile */}
        <motion.div
          className="absolute top-10 sm:top-20 left-10 sm:left-20 w-32 sm:w-48 md:w-64 h-32 sm:h-48 md:h-64 bg-primary opacity-15 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.2, 0.1]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-10 sm:bottom-20 right-10 sm:right-20 w-40 sm:w-60 md:w-80 h-40 sm:h-60 md:h-80 bg-secondary opacity-12 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.1, 0.15, 0.1]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="h-full w-full" style={{
            backgroundImage: `
              linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '30px 30px sm:50px sm:50px'
          }}></div>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Header Section */}
        <motion.div
          className="text-center mb-12 sm:mb-16 md:mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 sm:px-6 py-2 sm:py-3 shadow-lg mb-6 sm:mb-8"
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05, y: -2 }}
          >
            <HiRocketLaunch className="text-lg sm:text-2xl" />
            <span className="font-semibold text-gradient-primary-secondary text-sm sm:text-base">Complete Solutions</span>
          </motion.div>

          <motion.h2
            className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-black text-gradient-primary mb-4 sm:mb-6 md:mb-8 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            END-TO-END
            <span className="block text-gradient-accent-success">
              EDUCATION
            </span>
            <span className="block text-gradient-primary-secondary">SOLUTIONS</span>
          </motion.h2>

          <motion.p
            className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 max-w-4xl mx-auto px-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            Comprehensive 21st century solutions aligned with NEP 2020 for modern schools
          </motion.p>
        </motion.div>

        {/* Solutions Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 mb-12 sm:mb-16 md:mb-20"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {solutions.map((solution, index) => (
            <motion.div
              key={index}
              className="group relative"
              variants={cardVariants}
              whileHover={{ y: -5 }}
            >
              {/* Background gradient */}
              <div className={`absolute inset-0 ${solution.bgColor} rounded-2xl sm:rounded-3xl opacity-20`}></div>
              
              {/* Main card */}
              <div className="relative bg-white/95 backdrop-blur-sm border border-white/20 rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 shadow-xl hover:shadow-2xl transition-all duration-500 h-full">
                {/* Icon section */}
                <div className="relative mb-4 sm:mb-6">
                  <motion.div
                    className={`w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-2xl sm:rounded-3xl ${solution.gradient} flex items-center justify-center text-xl sm:text-2xl md:text-3xl shadow-lg`}
                    whileHover={{ 
                      scale: 1.1, 
                      rotate: [0, 5, -5, 0],
                      transition: { duration: 0.5 }
                    }}
                  >
                    <div className="text-white">
                      <solution.icon />
                    </div>
                  </motion.div>
                  
                  {/* Floating decoration */}
                  <motion.div
                    className={`absolute -top-1 sm:-top-2 -right-1 sm:-right-2 w-4 h-4 sm:w-6 sm:h-6 rounded-full ${solution.gradient} opacity-30`}
                    animate={{
                      scale: [1, 1.2, 1],
                      opacity: [0.3, 0.6, 0.3]
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: index * 0.2
                    }}
                  />
                </div>

                {/* Content */}
                <motion.h3
                  className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 mb-3 sm:mb-4"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: index * 0.1 + 0.3 }}
                  viewport={{ once: true }}
                >
                  {solution.title}
                </motion.h3>

                <motion.p
                  className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6 leading-relaxed"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: index * 0.1 + 0.4 }}
                  viewport={{ once: true }}
                >
                  {solution.description}
                </motion.p>

                {/* Features */}
                <motion.div
                  className="space-y-2 sm:space-y-3 mb-4 sm:mb-6"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 + 0.5 }}
                  viewport={{ once: true }}
                >
                  {solution.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center gap-2 sm:gap-3">
                      <div className={`w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full ${solution.gradient}`}></div>
                      <span className="text-xs sm:text-sm text-gray-600 font-medium">{feature}</span>
                    </div>
                  ))}
                </motion.div>

                {/* Action button */}
                <motion.button
                  className={`w-full ${solution.gradient} text-white py-2.5 sm:py-3 px-4 sm:px-6 rounded-lg sm:rounded-xl font-semibold text-sm sm:text-base shadow-lg hover:shadow-xl transition-all duration-300`}
                  whileHover={{ 
                    scale: 1.02,
                    boxShadow: "0 10px 30px rgba(0,0,0,0.2)"
                  }}
                  whileTap={{ scale: 0.98 }}
                >
                  Learn More →
                </motion.button>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="bg-gradient-primary-accent rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12 relative overflow-hidden"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            {/* Background decoration */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
              <span className="text-4xl sm:text-6xl md:text-8xl lg:text-9xl font-black text-white/10 select-none">
                START
              </span>
            </div>
            
            <div className="relative z-10">
              <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4 sm:mb-6">
                Ready to Transform Your School?
              </h3>
              <p className="text-sm sm:text-base md:text-lg lg:text-xl text-white/90 mb-6 sm:mb-8 max-w-2xl mx-auto px-4">
                Join the education revolution with ATLROBOLAB's comprehensive solutions
              </p>
              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  to="/products"
                  className="inline-block bg-white text-primary px-6 sm:px-8 md:px-10 py-3 sm:py-4 rounded-lg sm:rounded-xl font-bold text-sm sm:text-base md:text-lg shadow-xl hover:shadow-2xl transition-all duration-300"
                >
                  <div className="flex items-center gap-2">
                    <HiFlag className="text-lg" />
                    <span>Explore All Solutions</span>
                  </div>
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default SolutionSection; 