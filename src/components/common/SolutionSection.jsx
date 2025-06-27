import React from 'react';
import { Link } from 'react-router-dom';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const SolutionSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const solutions = [
    {
      title: 'Digital Learning Platform',
      description: 'Interactive learning experiences with cutting-edge technology',
      icon: '💻',
      gradient: 'from-blue-500 to-cyan-500',
      bgColor: 'from-blue-50 to-cyan-50',
      features: ['Interactive Content', 'Real-time Assessment', 'Progress Tracking']
    },
    {
      title: 'Teacher Development',
      description: 'Comprehensive training programs for modern educators',
      icon: '👨‍🏫',
      gradient: 'from-green-500 to-teal-500',
      bgColor: 'from-green-50 to-teal-50',
      features: ['Skill Enhancement', 'Certification Programs', 'Ongoing Support']
    },
    {
      title: 'Innovation Competitions',
      description: 'National and international contests to showcase talent',
      icon: '🏆',
      gradient: 'from-purple-500 to-pink-500',
      bgColor: 'from-purple-50 to-pink-50',
      features: ['Global Reach', 'Recognition Awards', 'Skill Building']
    },
    {
      title: 'Complete Lab Setup',
      description: 'End-to-end laboratory infrastructure and equipment',
      icon: '🔬',
      gradient: 'from-orange-500 to-red-500',
      bgColor: 'from-orange-50 to-red-50',
      features: ['Modern Equipment', 'Safety Standards', 'Maintenance Support']
    },
    {
      title: 'Learning Management',
      description: 'Advanced mobile app for seamless learning experience',
      icon: '📱',
      gradient: 'from-pink-500 to-rose-500',
      bgColor: 'from-pink-50 to-rose-50',
      features: ['Mobile Access', 'Offline Content', 'Parent Dashboard']
    },
    {
      title: 'Industry Certification',
      description: 'Globally recognized certificates for students and educators',
      icon: '🎓',
      gradient: 'from-indigo-500 to-purple-600',
      bgColor: 'from-indigo-50 to-purple-50',
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
    <section className="py-24 relative overflow-hidden bg-gradient-to-br from-gray-900 via-slate-800 to-zinc-900 text-white" ref={ref}>
      {/* Modern Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900/90 via-slate-800/90 to-zinc-900/90"></div>
        
        {/* Large Submerged Background Text */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
          <div className="text-[12rem] md:text-[18rem] lg:text-[22rem] font-black text-white/5 select-none whitespace-nowrap transform -rotate-12">
            SOLUTIONS
          </div>
        </div>
        
        {/* Animated shapes */}
        <motion.div
          className="absolute top-20 left-20 w-64 h-64 bg-violet-500/15 rounded-full blur-3xl"
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
          className="absolute bottom-20 right-20 w-80 h-80 bg-cyan-500/12 rounded-full blur-3xl"
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
            backgroundSize: '50px 50px'
          }}></div>
        </div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header Section */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-6 py-3 shadow-lg mb-8"
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05, y: -2 }}
          >
            <span className="text-2xl">🚀</span>
            <span className="font-semibold text-white">Complete Solutions</span>
          </motion.div>

          <motion.h2
            className="text-4xl md:text-6xl lg:text-7xl font-black text-white mb-8 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            END-TO-END
            <span className="block bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
              EDUCATION
            </span>
            <span className="block text-white">SOLUTIONS</span>
          </motion.h2>

          <motion.p
            className="text-xl md:text-2xl text-blue-100 max-w-4xl mx-auto"
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
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {solutions.map((solution, index) => (
            <motion.div
              key={index}
              className="group relative"
              variants={cardVariants}
              whileHover={{ y: -10 }}
            >
              {/* Background gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${solution.bgColor} rounded-3xl opacity-20`}></div>
              
              {/* Main card */}
              <div className="relative bg-white/95 backdrop-blur-sm border border-white/20 rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 h-full">
                {/* Icon section */}
                <div className="relative mb-6">
                  <motion.div
                    className={`w-20 h-20 rounded-3xl bg-gradient-to-br ${solution.gradient} flex items-center justify-center text-3xl shadow-lg`}
                    whileHover={{ 
                      scale: 1.1, 
                      rotate: [0, 5, -5, 0],
                      transition: { duration: 0.5 }
                    }}
                  >
                    {solution.icon}
                  </motion.div>
                  
                  {/* Floating decoration */}
                  <motion.div
                    className={`absolute -top-2 -right-2 w-6 h-6 rounded-full bg-gradient-to-r ${solution.gradient} opacity-30`}
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
                  className="text-2xl font-bold text-gray-900 mb-4"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: index * 0.1 + 0.3 }}
                  viewport={{ once: true }}
                >
                  {solution.title}
                </motion.h3>

                <motion.p
                  className="text-gray-600 mb-6 leading-relaxed"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: index * 0.1 + 0.4 }}
                  viewport={{ once: true }}
                >
                  {solution.description}
                </motion.p>

                {/* Features */}
                <motion.div
                  className="space-y-3 mb-6"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 + 0.5 }}
                  viewport={{ once: true }}
                >
                  {solution.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center gap-3">
                      <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${solution.gradient}`}></div>
                      <span className="text-sm text-gray-600 font-medium">{feature}</span>
                    </div>
                  ))}
                </motion.div>

                {/* Action button */}
                <motion.button
                  className={`w-full bg-gradient-to-r ${solution.gradient} text-white py-3 px-6 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300`}
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
            className="bg-gradient-to-r from-orange-500 to-red-500 rounded-3xl p-12 relative overflow-hidden"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            {/* Background decoration */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
              <span className="text-8xl md:text-9xl font-black text-white/10 select-none">
                START
              </span>
            </div>
            
            <div className="relative z-10">
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Transform Your School?
              </h3>
              <p className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto">
                Join the education revolution with ATLROBOLAB's comprehensive solutions
              </p>
              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  to="/products"
                  className="inline-block bg-white text-orange-600 px-10 py-4 rounded-xl font-bold text-lg shadow-xl hover:shadow-2xl transition-all duration-300"
                >
                  🎯 Explore All Solutions
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