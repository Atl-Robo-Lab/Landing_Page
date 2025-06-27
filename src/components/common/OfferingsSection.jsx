import React from 'react';
import { motion } from 'framer-motion';

const OfferingsSection = () => {
  const offerings = [
    {
      title: 'STEM & ROBOTICS LAB',
      shortTitle: 'STEM LAB',
      icon: '🤖',
      description: 'Engage students in hands-on learning, critical thinking, and exploration with our comprehensive STEM & Robotics program.',
      features: ['Robotics Kits', 'STEM Curriculum', 'Project-Based Learning'],
      gradient: 'from-blue-500 to-cyan-500',
      bgPattern: 'from-blue-50 to-cyan-50'
    },
    {
      title: 'AI AND IOT LAB',
      shortTitle: 'AI LAB',
      icon: '🧠',
      description: 'Introduce students to Artificial Intelligence and Internet of Things through practical experiments and real-world applications.',
      features: ['Machine Learning', 'IoT Devices', 'Smart Systems'],
      gradient: 'from-purple-500 to-pink-500',
      bgPattern: 'from-purple-50 to-pink-50'
    },
    {
      title: 'ATAL TINKERING LAB',
      shortTitle: 'ATAL LAB',
      icon: '⚡',
      description: 'Foster curiosity, creativity and imagination in young minds through design thinking and computational problem-solving.',
      features: ['3D Printing', 'Electronics', 'Innovation Hub'],
      gradient: 'from-orange-500 to-red-500',
      bgPattern: 'from-orange-50 to-red-50'
    },
    {
      title: '21ST CENTURY LEARNING',
      shortTitle: 'FUTURE LEARNING',
      icon: '🚀',
      description: 'Boost student achievement by encouraging creative thinking and producing engaging educational experiences.',
      features: ['Digital Literacy', 'Creative Projects', 'Modern Pedagogy'],
      gradient: 'from-green-500 to-teal-500',
      bgPattern: 'from-green-50 to-teal-50'
    },
    {
      title: 'INNOVATION LAB',
      shortTitle: 'INNOVATION',
      icon: '💡',
      description: 'Experience a broad range of STEM activities that converge into integrated solutions through collaborative learning.',
      features: ['Design Thinking', 'Prototyping', 'Research Projects'],
      gradient: 'from-indigo-500 to-blue-500',
      bgPattern: 'from-indigo-50 to-blue-50'
    },
    {
      title: 'ENGINEERING LAB',
      shortTitle: 'ENGINEERING',
      icon: '⚙️',
      description: 'Integrate technology with hands-on engineering through multidisciplinary project-based learning experiences.',
      features: ['CAD Design', 'Engineering Projects', 'Team Collaboration'],
      gradient: 'from-slate-500 to-gray-600',
      bgPattern: 'from-slate-50 to-gray-50'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.15
      }
    }
  };

  const cardVariants = {
    hidden: { 
      y: 60, 
      opacity: 0,
      scale: 0.9
    },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="py-24 relative overflow-hidden bg-gradient-to-br from-violet-600 via-purple-600 to-indigo-700 text-white">
      {/* Modern Background with Submerged Text */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-violet-600/10 via-purple-600/5 to-indigo-700/10"></div>
        
        {/* Large Submerged Background Text */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
          <div className="text-[20rem] md:text-[25rem] lg:text-[30rem] font-black text-white/10 select-none whitespace-nowrap transform -rotate-12">
            LABS
          </div>
        </div>
        
        {/* Floating Shapes */}
        <div className="absolute top-20 left-20 w-64 h-64 bg-gradient-to-br from-white/15 to-violet-300/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-br from-purple-300/15 to-indigo-300/15 rounded-full blur-3xl"></div>
        
        {/* Subtle Grid Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="h-full w-full" style={{
            backgroundImage: `
              linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px'
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
            className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full px-6 py-3 shadow-lg mb-8"
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05, y: -2 }}
          >
            <span className="text-2xl">🎯</span>
            <span className="font-semibold text-white">Our Lab Solutions</span>
          </motion.div>

          <motion.h2 
            className="text-4xl md:text-6xl lg:text-7xl font-black text-white mb-6 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            TRANSFORM YOUR
            <span className="block bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
              EDUCATION
            </span>
          </motion.h2>
          
          <motion.p
            className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            Comprehensive lab solutions designed for the 21st century learning experience
          </motion.p>
        </motion.div>

        {/* Offerings Grid */}
        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {offerings.map((offering, index) => (
            <motion.div
              key={index}
              className="group relative"
              variants={cardVariants}
              whileHover={{ y: -10 }}
            >
              {/* Background Pattern */}
              <div className={`absolute inset-0 bg-gradient-to-br ${offering.bgPattern} rounded-3xl opacity-50`}></div>
              
              {/* Main Card */}
              <div className="relative bg-white/80 backdrop-blur-sm border border-gray-200/50 rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 h-full">
                {/* Icon Header */}
                <div className="flex items-center justify-between mb-6">
                  <motion.div 
                    className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${offering.gradient} flex items-center justify-center text-2xl shadow-lg`}
                    whileHover={{ 
                      scale: 1.1, 
                      rotate: [0, 5, -5, 0],
                      transition: { duration: 0.5 }
                    }}
                  >
                    {offering.icon}
                  </motion.div>
                  
                  {/* Submerged Title in Background */}
                  <div className="absolute top-4 right-4 opacity-10 pointer-events-none">
                    <span className="text-4xl font-black text-gray-600 transform rotate-12">
                      {offering.shortTitle}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <motion.h3 
                  className="text-xl font-bold text-gray-900 mb-4 leading-tight"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: index * 0.1 + 0.3 }}
                  viewport={{ once: true }}
                >
                  {offering.title}
                </motion.h3>
                
                <motion.p 
                  className="text-gray-600 leading-relaxed mb-6"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: index * 0.1 + 0.4 }}
                  viewport={{ once: true }}
                >
                  {offering.description}
                </motion.p>

                {/* Features List */}
                <motion.div 
                  className="space-y-2 mb-6"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 + 0.5 }}
                  viewport={{ once: true }}
                >
                  {offering.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center gap-3">
                      <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${offering.gradient}`}></div>
                      <span className="text-sm text-gray-600 font-medium">{feature}</span>
                    </div>
                  ))}
                </motion.div>
                
                {/* Action Button */}
                <motion.button 
                  className={`w-full bg-gradient-to-r ${offering.gradient} text-white py-3 px-6 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 group-hover:scale-105`}
                  whileHover={{ 
                    scale: 1.02,
                    boxShadow: "0 10px 30px rgba(0,0,0,0.2)"
                  }}
                  whileTap={{ scale: 0.98 }}
                >
                  Explore Lab →
                </motion.button>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA Section */}
        <motion.div
          className="text-center mt-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-12 text-white relative overflow-hidden"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            {/* Background Submerged Text */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
              <span className="text-8xl md:text-9xl font-black text-white/10 select-none">
                FUTURE
              </span>
            </div>
            
            <div className="relative z-10">
              <h3 className="text-3xl md:text-4xl font-bold mb-4">
                Ready to Transform Your School?
              </h3>
              <p className="text-xl mb-8 opacity-90">
                Join hundreds of schools already using ATLROBOLAB solutions
              </p>
              <motion.button
                className="bg-white text-gray-900 px-8 py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                🚀 Get Started Today
              </motion.button>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default OfferingsSection; 