import React from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const StatisticsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const stats = [
    {
      number: '4,000+',
      label: 'Schools',
      icon: '🏫',
      description: 'Transforming education worldwide',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      number: '2M+',
      label: 'Students',
      icon: '👨‍🎓',
      description: 'Empowering young minds',
      color: 'from-purple-500 to-pink-500'
    },
    {
      number: '30+',
      label: 'Countries',
      icon: '🌍',
      description: 'Global educational impact',
      color: 'from-green-500 to-teal-500'
    },
    {
      number: '30K+',
      label: 'Teachers',
      icon: '👩‍🏫',
      description: 'Trained educators',
      color: 'from-orange-500 to-red-500'
    },
    {
      number: '97%',
      label: 'Success Rate',
      icon: '🎯',
      description: 'Curriculum acceptance',
      color: 'from-indigo-500 to-purple-500'
    }
  ];

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

  const statVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      scale: 0.8
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "backOut"
      }
    }
  };

  const CounterCard = ({ stat, index }) => {
    return (
      <motion.div
        className="group relative"
        variants={statVariants}
        whileHover={{ y: -10, scale: 1.05 }}
        transition={{ duration: 0.3 }}
      >
        {/* Background with gradient */}
        <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} rounded-3xl opacity-10 group-hover:opacity-20 transition-opacity duration-300`}></div>
        
        {/* Main card */}
        <div className="relative bg-white/80 backdrop-blur-sm border border-gray-200/50 rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 text-center">
          {/* Icon */}
          <motion.div
            className={`w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br ${stat.color} flex items-center justify-center text-2xl shadow-lg`}
            whileHover={{ 
              scale: 1.1, 
              rotate: [0, 5, -5, 0],
              transition: { duration: 0.5 }
            }}
          >
            {stat.icon}
          </motion.div>

          {/* Number */}
          <motion.div
            className={`text-4xl md:text-5xl font-black mb-3 bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ 
              duration: 0.8, 
              delay: index * 0.1 + 0.5,
              type: "spring",
              stiffness: 200
            }}
            viewport={{ once: true }}
          >
            {stat.number}
          </motion.div>

          {/* Label */}
          <motion.h3
            className="text-xl font-bold text-gray-900 mb-3"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: index * 0.1 + 0.7 }}
            viewport={{ once: true }}
          >
            {stat.label}
          </motion.h3>

          {/* Description */}
          <motion.p
            className="text-gray-600 text-sm"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: index * 0.1 + 0.9 }}
            viewport={{ once: true }}
          >
            {stat.description}
          </motion.p>

          {/* Floating elements */}
          <motion.div
            className={`absolute top-4 right-4 w-3 h-3 rounded-full bg-gradient-to-r ${stat.color} opacity-30`}
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
      </motion.div>
    );
  };

  return (
    <section className="py-24 relative overflow-hidden bg-gradient-to-br from-emerald-50 via-white to-teal-50" ref={ref}>
      {/* Modern Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-50/50 via-white to-teal-50/50"></div>
        
        {/* Large Submerged Background Text */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
          <div className="text-[15rem] md:text-[20rem] lg:text-[25rem] font-black text-gray-100/15 select-none whitespace-nowrap transform rotate-12">
            IMPACT
          </div>
        </div>
        
        {/* Floating shapes */}
        <div className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-br from-emerald-100/30 to-teal-100/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-br from-cyan-100/25 to-blue-100/15 rounded-full blur-3xl"></div>
        
        {/* Subtle pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="h-full w-full" style={{
            backgroundImage: `
              radial-gradient(circle at 1px 1px, rgba(99, 102, 241, 0.15) 1px, transparent 0)
            `,
            backgroundSize: '50px 50px'
          }}></div>
        </div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="inline-flex items-center gap-2 bg-white border border-gray-200 rounded-full px-6 py-3 shadow-lg mb-8"
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05, y: -2 }}
          >
            <span className="text-2xl">📊</span>
            <span className="font-semibold text-gray-700">Our Global Impact</span>
          </motion.div>

          <motion.h2
            className="text-4xl md:text-6xl lg:text-7xl font-black text-gray-900 mb-8 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            TRANSFORMING
            <span className="block bg-gradient-to-r from-blue-600 via-purple-600 to-teal-600 bg-clip-text text-transparent">
              EDUCATION
            </span>
          </motion.h2>

          <motion.p
            className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            Unlocking new age skills for students and teachers worldwide
          </motion.p>
        </motion.div>

        {/* Statistics Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {stats.map((stat, index) => (
            <CounterCard
              key={index}
              stat={stat}
              index={index}
            />
          ))}
        </motion.div>

        {/* Bottom section */}
        <motion.div
          className="text-center mt-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-3xl p-12 text-white relative overflow-hidden">
            {/* Submerged background text */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
              <span className="text-6xl md:text-8xl font-black text-white/5 select-none">
                EXCELLENCE
              </span>
            </div>
            
            <div className="relative z-10">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                Leading the Future of Education
              </h3>
              <p className="text-lg opacity-90 max-w-2xl mx-auto">
                Join thousands of schools worldwide that trust ATLROBOLAB for innovative STEM education solutions
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default StatisticsSection; 