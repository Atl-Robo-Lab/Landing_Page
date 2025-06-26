import React from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const WhoWeAreSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const features = [
    {
      title: "Advanced Robotics",
      description: "State-of-the-art robotics labs with cutting-edge equipment",
      icon: "🤖",
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "AI & Machine Learning",
      description: "Hands-on experience with artificial intelligence and ML algorithms",
      icon: "🧠",
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "IoT Solutions",
      description: "Internet of Things projects connecting the physical and digital world",
      icon: "🌐",
      color: "from-green-500 to-teal-500"
    },
    {
      title: "Innovation Labs",
      description: "Creative spaces for breakthrough thinking and experimentation",
      icon: "💡",
      color: "from-orange-500 to-red-500"
    }
  ];

  const stats = [
    { value: "500+", label: "Active Labs", icon: "⚗️" },
    { value: "25K+", label: "Students", icon: "👨‍🎓" },
    { value: "150+", label: "Educators", icon: "👩‍🏫" },
    { value: "12+", label: "Countries", icon: "🌍" }
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
      y: 50,
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

  const statVariants = {
    hidden: { 
      opacity: 0, 
      scale: 0,
      rotate: -180
    },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: {
        duration: 0.8,
        ease: "backOut"
      }
    }
  };

  return (
    <section className="min-h-screen py-24 relative overflow-hidden" ref={ref}>
      {/* Simple Modern Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-blue-50/30 to-indigo-50/50"></div>
      
      {/* Subtle decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-40 left-10 w-72 h-72 bg-gradient-to-br from-blue-100/20 to-indigo-100/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-40 right-10 w-96 h-96 bg-gradient-to-br from-purple-100/15 to-pink-100/15 rounded-full blur-3xl"></div>
        <div className="absolute top-1/3 right-1/3 w-64 h-64 bg-gradient-to-br from-teal-100/25 to-cyan-100/25 rounded-full blur-3xl"></div>
        
        {/* Clean geometric pattern */}
        <div className="absolute inset-0 opacity-3">
          <div className="h-full w-full" style={{
            backgroundImage: `
              radial-gradient(circle at 2px 2px, rgba(99, 102, 241, 0.15) 1px, transparent 0)
            `,
            backgroundSize: '40px 40px'
          }}></div>
        </div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header Section */}
        <motion.div
          className="text-center mb-20"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.div
            className="inline-flex items-center gap-2 bg-white border border-gray-200 rounded-full px-6 py-3 shadow-lg mb-8"
            variants={cardVariants}
            whileHover={{ scale: 1.05, y: -2 }}
          >
            <span className="text-2xl">🌟</span>
            <span className="font-semibold text-gray-700">About ATLROBOLAB</span>
          </motion.div>

          <motion.h2
            className="text-5xl md:text-7xl font-black text-gray-900 mb-8 leading-tight"
            variants={cardVariants}
          >
            WHO WE
            <span className="block bg-gradient-to-r from-blue-600 via-purple-600 to-teal-600 bg-clip-text text-transparent">
              ARE
            </span>
          </motion.h2>

          <motion.p
            className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed"
            variants={cardVariants}
          >
            We're pioneering the future of education through innovative technology labs,
            empowering students to explore, create, and transform ideas into reality.
          </motion.p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-24"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="group"
              variants={cardVariants}
              whileHover={{ y: -10 }}
            >
              <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 h-full border border-gray-100/50">
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center text-2xl mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Main Content Card */}
        <motion.div
          className="bg-white/70 backdrop-blur-sm rounded-3xl shadow-xl border border-gray-200/50 overflow-hidden mb-24"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="grid lg:grid-cols-2 gap-0">
            {/* Text Content */}
            <div className="p-12 lg:p-16">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
                  Transforming Education Through Technology
                </h3>
                
                <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
                  <p>
                    ATLROBOLAB is revolutionizing STEM education by creating immersive 
                    learning environments where students can explore robotics, artificial 
                    intelligence, and cutting-edge technologies.
                  </p>
                  
                  <p>
                    Our innovative approach combines theoretical knowledge with hands-on 
                    experience, preparing students for the challenges of tomorrow's 
                    technology-driven world.
                  </p>
                  
                  <motion.div
                    className="flex items-center gap-4 pt-6"
                    whileHover={{ x: 10 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                      <span className="text-white text-xl">→</span>
                    </div>
                    <span className="font-semibold text-gray-900">
                      Building Tomorrow's Innovators Today
                    </span>
                  </motion.div>
                </div>
              </motion.div>
            </div>

            {/* Visual Element */}
            <div className="bg-gradient-to-br from-blue-500/90 via-purple-500/90 to-teal-500/90 p-12 lg:p-16 flex items-center justify-center relative">
              <motion.div
                className="text-center text-white"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.8, delay: 0.8 }}
              >
                <div className="text-8xl mb-6">🔬</div>
                <h4 className="text-2xl font-bold mb-4">Innovation Hub</h4>
                <p className="text-lg opacity-90">
                  Where Ideas Meet Technology
                </p>
              </motion.div>
              
              {/* Floating Elements */}
              <motion.div
                className="absolute top-8 right-8 w-6 h-6 bg-white/20 rounded-full"
                animate={{
                  y: [0, -20, 0],
                  opacity: [0.3, 0.8, 0.3]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              <motion.div
                className="absolute bottom-12 left-8 w-4 h-4 bg-white/30 rounded-full"
                animate={{
                  y: [0, -15, 0],
                  opacity: [0.4, 0.9, 0.4]
                }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1
                }}
              />
            </div>
          </div>
        </motion.div>

        {/* Statistics Section */}
        <motion.div
          className="text-center"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.h3
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-16"
            variants={cardVariants}
          >
            Our Growing Impact
          </motion.h3>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="group"
                variants={statVariants}
                custom={index}
                whileHover={{ scale: 1.1, y: -5 }}
              >
                <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100/50">
                  <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    {stat.icon}
                  </div>
                  <div className="text-3xl md:text-4xl font-black bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-2">
                    {stat.value}
                  </div>
                  <div className="text-gray-600 font-medium">
                    {stat.label}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhoWeAreSection; 