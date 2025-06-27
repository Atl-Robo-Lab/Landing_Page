import React from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const CultureSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const cultureAspects = [
    { 
      id: 1, 
      title: 'Robotics Innovation',
      description: 'Students designing and building next-generation robots', 
      emoji: '🤖',
      gradient: 'from-blue-500 to-cyan-500',
      bgColor: 'from-blue-50/50 to-cyan-50/50'
    },
    { 
      id: 2, 
      title: 'Creative Solutions',
      description: 'Innovation workshops fostering breakthrough thinking', 
      emoji: '💡',
      gradient: 'from-yellow-500 to-orange-500',
      bgColor: 'from-yellow-50/50 to-orange-50/50'
    },
    { 
      id: 3, 
      title: 'Team Collaboration',
      description: 'Building tomorrow through collaborative learning', 
      emoji: '👥',
      gradient: 'from-purple-500 to-pink-500',
      bgColor: 'from-purple-50/50 to-pink-50/50'
    },
    { 
      id: 4, 
      title: 'STEM Excellence',
      description: 'Advanced laboratory environments for discovery', 
      emoji: '🔬',
      gradient: 'from-green-500 to-teal-500',
      bgColor: 'from-green-50/50 to-teal-50/50'
    },
    { 
      id: 5, 
      title: 'Tech Integration',
      description: 'Seamless technology integration in education', 
      emoji: '💻',
      gradient: 'from-indigo-500 to-purple-500',
      bgColor: 'from-indigo-50/50 to-purple-50/50'
    },
    { 
      id: 6, 
      title: 'Future Learning',
      description: 'Creative spaces designed for 21st-century skills', 
      emoji: '🎨',
      gradient: 'from-pink-500 to-rose-500',
      bgColor: 'from-pink-50/50 to-rose-50/50'
    },
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
    <section className="py-24 relative overflow-hidden bg-gradient-to-br from-rose-50 via-pink-50 to-orange-50" ref={ref}>
      {/* Modern Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-rose-50/80 via-pink-50/90 to-orange-50/80"></div>
        
        {/* Large Submerged Background Text */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
          <div className="text-[10rem] md:text-[15rem] lg:text-[20rem] font-black text-gray-100/20 select-none whitespace-nowrap transform rotate-12">
            CULTURE
          </div>
        </div>
        
        {/* Floating decorative elements */}
        <motion.div
          className="absolute top-40 left-20 w-64 h-64 bg-gradient-to-br from-rose-100/40 to-pink-100/30 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.4, 0.2],
            x: [0, 30, 0],
            y: [0, -20, 0]
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-40 right-20 w-80 h-80 bg-gradient-to-br from-orange-100/30 to-amber-100/20 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.15, 0.3, 0.15],
            x: [0, -40, 0],
            y: [0, 25, 0]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        {/* Dot pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="h-full w-full" style={{
            backgroundImage: `
              radial-gradient(circle at 2px 2px, rgba(99, 102, 241, 0.2) 1px, transparent 0)
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
            className="inline-flex items-center gap-2 bg-white border border-gray-200 rounded-full px-6 py-3 shadow-lg mb-8"
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05, y: -2 }}
          >
            <span className="text-2xl">🌟</span>
            <span className="font-semibold text-gray-700">Innovation Culture</span>
          </motion.div>

          <motion.h2
            className="text-4xl md:text-6xl lg:text-7xl font-black text-gray-900 mb-8 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            BUILDING A
            <span className="block bg-gradient-to-r from-blue-600 via-purple-600 to-teal-600 bg-clip-text text-transparent">
              CULTURE
            </span>
            <span className="block text-gray-900">OF INNOVATION</span>
          </motion.h2>

          <motion.p
            className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            Fostering creativity and innovation among students from an early age through 
            hands-on learning experiences
          </motion.p>
        </motion.div>

        {/* Culture Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {cultureAspects.map((aspect, index) => (
            <motion.div
              key={aspect.id}
              className="group relative"
              variants={cardVariants}
              whileHover={{ y: -15, scale: 1.02 }}
            >
              {/* Background gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${aspect.bgColor} rounded-3xl`}></div>
              
              {/* Main card */}
              <div className="relative bg-white/90 backdrop-blur-sm border border-gray-200/50 rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 h-full overflow-hidden">
                {/* Floating background emoji */}
                <div className="absolute top-4 right-4 opacity-10 pointer-events-none">
                  <span className="text-8xl transform rotate-12">
                    {aspect.emoji}
                  </span>
                </div>
                
                {/* Main content */}
                <div className="relative z-10">
                  {/* Icon */}
                  <motion.div
                    className={`w-20 h-20 rounded-3xl bg-gradient-to-br ${aspect.gradient} flex items-center justify-center text-3xl shadow-lg mb-6`}
                    whileHover={{ 
                      scale: 1.1, 
                      rotate: [0, 10, -10, 0],
                      transition: { duration: 0.6 }
                    }}
                  >
                    {aspect.emoji}
                  </motion.div>

                  {/* Title */}
                  <motion.h3
                    className="text-2xl font-bold text-gray-900 mb-4"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: index * 0.1 + 0.3 }}
                    viewport={{ once: true }}
                  >
                    {aspect.title}
                  </motion.h3>

                  {/* Description */}
                  <motion.p
                    className="text-gray-600 leading-relaxed"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: index * 0.1 + 0.4 }}
                    viewport={{ once: true }}
                  >
                    {aspect.description}
                  </motion.p>

                  {/* Floating particles */}
                  <motion.div
                    className={`absolute bottom-4 left-4 w-3 h-3 rounded-full bg-gradient-to-r ${aspect.gradient} opacity-40`}
                    animate={{
                      scale: [1, 1.5, 1],
                      opacity: [0.4, 0.8, 0.4]
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      delay: index * 0.3
                    }}
                  />
                  <motion.div
                    className={`absolute top-20 right-8 w-2 h-2 rounded-full bg-gradient-to-r ${aspect.gradient} opacity-30`}
                    animate={{
                      scale: [1, 1.3, 1],
                      opacity: [0.3, 0.6, 0.3]
                    }}
                    transition={{
                      duration: 2.5,
                      repeat: Infinity,
                      delay: index * 0.2 + 1
                    }}
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom Content Section */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-12 text-white relative overflow-hidden"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            {/* Background decoration */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
              <span className="text-8xl md:text-9xl font-black text-white/10 select-none">
                FUTURE
              </span>
            </div>
            
            <div className="relative z-10 max-w-4xl mx-auto">
              <motion.h3
                className="text-3xl md:text-4xl font-bold mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                Shaping Tomorrow's Innovators
              </motion.h3>
              
              <motion.p
                className="text-xl text-blue-100 mb-8 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                Our innovative approach to education focuses on hands-on learning experiences 
                that prepare students for the challenges of tomorrow. Through collaborative 
                projects and creative problem-solving, we're nurturing the next generation of 
                innovators, leaders, and changemakers.
              </motion.p>
              
              <motion.div
                className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
              >
                {[
                  { icon: '🎯', title: 'Goal-Oriented', desc: 'Purpose-driven learning' },
                  { icon: '🤝', title: 'Collaborative', desc: 'Team-based projects' },
                  { icon: '🚀', title: 'Future-Ready', desc: '21st century skills' }
                ].map((feature, index) => (
                  <motion.div
                    key={index}
                    className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20"
                    whileHover={{ scale: 1.05, y: -5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="text-3xl mb-3">{feature.icon}</div>
                    <h4 className="text-lg font-semibold mb-2">{feature.title}</h4>
                    <p className="text-blue-200 text-sm">{feature.desc}</p>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default CultureSection; 