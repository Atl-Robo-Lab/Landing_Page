import React from "react";
import { motion } from "framer-motion";
// Import specific images for each lab type
import stemRoboticsImg from "../../assets/images/stem-robotics-lab.jpg";
import aiIotImg from "../../assets/images/ai-iot-lab.jpg";
import atalTinkeringImg from "../../assets/images/atal-tinkering-lab.jpg";
import centuryLearningImg from "../../assets/images/21st-century-learning.jpg";
import innovationImg from "../../assets/images/innovation-lab.jpg";
import engineeringImg from "../../assets/images/engineering-lab.jpg";

const OfferingsSection = () => {
  const offerings = [
    {
      title: "STEM & ROBOTICS LAB",
      shortTitle: "STEM LAB",
      icon: "🤖",
      description:
        "Engage students in hands-on learning, critical thinking, and exploration with our comprehensive STEM & Robotics program.",
      features: ["Robotics Kits", "STEM Curriculum", "Project-Based Learning"],
      gradient: "from-blue-500 to-cyan-500",
      bgPattern: "from-blue-50 to-cyan-50",
      image: stemRoboticsImg,
    },
    {
      title: "AI AND IOT LAB",
      shortTitle: "AI LAB",
      icon: "🧠",
      description:
        "Introduce students to Artificial Intelligence and Internet of Things through practical experiments and real-world applications.",
      features: ["Machine Learning", "IoT Devices", "Smart Systems"],
      gradient: "from-purple-500 to-pink-500",
      bgPattern: "from-purple-50 to-pink-50",
      image: aiIotImg,
    },
    {
      title: "ATAL TINKERING LAB",
      shortTitle: "ATAL LAB",
      icon: "⚡",
      description:
        "Foster curiosity, creativity and imagination in young minds through design thinking and computational problem-solving.",
      features: ["3D Printing", "Electronics", "Innovation Hub"],
      gradient: "from-orange-500 to-red-500",
      bgPattern: "from-orange-50 to-red-50",
      image: atalTinkeringImg,
    },
    {
      title: "21ST CENTURY LEARNING",
      shortTitle: "FUTURE LEARNING",
      icon: "🚀",
      description:
        "Boost student achievement by encouraging creative thinking and producing engaging educational experiences.",
      features: ["Digital Literacy", "Creative Projects", "Modern Pedagogy"],
      gradient: "from-green-500 to-teal-500",
      bgPattern: "from-green-50 to-teal-50",
      image: centuryLearningImg,
    },
    {
      title: "INNOVATION LAB",
      shortTitle: "INNOVATION",
      icon: "💡",
      description:
        "Experience a broad range of STEM activities that converge into integrated solutions through collaborative learning.",
      features: ["Design Thinking", "Prototyping", "Research Projects"],
      gradient: "from-indigo-500 to-blue-500",
      bgPattern: "from-indigo-50 to-blue-50",
      image: innovationImg,
    },
    {
      title: "ENGINEERING LAB",
      shortTitle: "ENGINEERING",
      icon: "⚙️",
      description:
        "Integrate technology with hands-on engineering through multidisciplinary project-based learning experiences.",
      features: ["CAD Design", "Engineering Projects", "Team Collaboration"],
      gradient: "from-slate-500 to-gray-600",
      bgPattern: "from-slate-50 to-gray-50",
      image: engineeringImg,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.15,
      },
    },
  };

  const cardVariants = {
    hidden: {
      y: 60,
      opacity: 0,
      scale: 0.9,
    },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-24 relative overflow-hidden bg-gradient-to-br from-violet-600 via-purple-600 to-indigo-700 text-white">
      
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-violet-600/95 via-purple-600/90 to-indigo-700/95"></div>

        {/* Large Submerged Background Text */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
          <div className="text-[8rem] sm:text-[12rem] md:text-[20rem] lg:text-[25rem] xl:text-[30rem] font-black text-white/10 select-none whitespace-nowrap transform -rotate-12">
            LABS
          </div>
        </div>

        

        {/* Subtle Grid Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div
            className="h-full w-full"
            style={{
              backgroundImage: `
              linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)
            `,
              backgroundSize: "60px 60px",
            }}
          ></div>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Header Section */}
        <motion.div
          className="text-center mb-8 sm:mb-12 md:mb-16 lg:mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full px-4 sm:px-6 py-2 sm:py-3 shadow-lg mb-4 sm:mb-6 md:mb-8"
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05, y: -2 }}
          >
            <span className="text-lg sm:text-xl md:text-2xl">🎯</span>
            <span className="font-semibold text-white text-sm sm:text-base">Our Lab Solutions</span>
          </motion.div>

          <motion.h2
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black text-white mb-3 sm:mb-4 md:mb-6 leading-tight"
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
            className="text-base sm:text-lg md:text-xl lg:text-2xl text-blue-100 max-w-3xl mx-auto px-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            Comprehensive lab solutions designed for the 21st century learning
            experience
          </motion.p>
        </motion.div>

        {/* Offerings Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8"
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
              {/* Main Card with Background Image */}
              <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500 h-full">
                {/* Background Image */}
                <div
                  className="absolute inset-0"
                  style={{
                    backgroundImage: `url(${offering.image})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                  }}
                ></div>
                
                {/* Dark Overlay for better text readability */}
                <div className="absolute inset-0 bg-black/50"></div>
                
                {/* Gradient Overlay */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${offering.gradient} opacity-70 mix-blend-multiply`}
                ></div>

                {/* Content Container */}
                <div className="relative z-10 p-4 sm:p-6 md:p-8 h-full flex flex-col justify-between text-white">
                  {/* Icon Header */}
                  <div className="flex items-center justify-between mb-4 sm:mb-6">
                    <motion.div
                      className={`w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-xl sm:rounded-2xl bg-white/20 backdrop-blur-sm border border-white/30 flex items-center justify-center text-xl sm:text-2xl shadow-lg`}
                      whileHover={{
                        scale: 1.1,
                        rotate: [0, 5, -5, 0],
                        transition: { duration: 0.5 },
                      }}
                    >
                      {offering.icon}
                    </motion.div>

                    {/* Submerged Title in Background */}
                    <div className="absolute top-2 sm:top-4 right-2 sm:right-4 opacity-20 pointer-events-none">
                      <span className="text-2xl sm:text-3xl md:text-4xl font-black text-white transform rotate-12">
                        {offering.shortTitle}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-grow">
                    <motion.h3
                      className="text-lg sm:text-xl md:text-xl font-bold text-white mb-3 sm:mb-4 leading-tight"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ delay: index * 0.1 + 0.3 }}
                      viewport={{ once: true }}
                    >
                      {offering.title}
                    </motion.h3>

                    <motion.p
                      className="text-white/90 leading-relaxed mb-4 sm:mb-6 text-sm sm:text-base"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ delay: index * 0.1 + 0.4 }}
                      viewport={{ once: true }}
                    >
                      {offering.description}
                    </motion.p>

                    {/* Features List */}
                    <motion.div
                      className="space-y-1.5 sm:space-y-2 mb-4 sm:mb-6"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 + 0.5 }}
                      viewport={{ once: true }}
                    >
                      {offering.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center gap-2 sm:gap-3">
                          <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-white/80"></div>
                          <span className="text-xs sm:text-sm text-white/90 font-medium">
                            {feature}
                          </span>
                        </div>
                      ))}
                    </motion.div>
                  </div>

                  {/* Action Button */}
                  <motion.button
                    className="w-full bg-white/20 backdrop-blur-sm border border-white/30 text-white py-2.5 sm:py-3 px-4 sm:px-6 rounded-lg sm:rounded-xl font-semibold text-sm sm:text-base shadow-lg hover:bg-white/30 hover:shadow-xl transition-all duration-300"
                    whileHover={{
                      scale: 1.02,
                      boxShadow: "0 10px 30px rgba(0,0,0,0.2)",
                    }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Explore Lab →
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA Section */}
        <motion.div
          className="text-center mt-12 sm:mt-16 md:mt-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12 text-white relative overflow-hidden"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            {/* Background Submerged Text */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
              <span className="text-4xl sm:text-6xl md:text-8xl lg:text-9xl font-black text-white/10 select-none">
                FUTURE
              </span>
            </div>

            <div className="relative z-10">
              <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-2 sm:mb-3 md:mb-4">
                Ready to Transform Your School?
              </h3>
              <p className="text-base sm:text-lg md:text-xl mb-6 sm:mb-8 opacity-90">
                Join hundreds of schools already using ATLROBOLAB solutions
              </p>
              <motion.button
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg sm:rounded-xl font-semibold text-base sm:text-lg shadow-lg hover:shadow-xl transition-all duration-300"
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
