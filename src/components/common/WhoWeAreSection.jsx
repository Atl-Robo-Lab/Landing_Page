import React from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const WhoWeAreSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const features = [
    {
      title: "Advanced Robotics",
      description: "State-of-the-art robotics labs with cutting-edge equipment",
      icon: "🤖",
      color: "from-blue-500 to-cyan-500",
    },
    {
      title: "AI & Machine Learning",
      description:
        "Hands-on experience with artificial intelligence and ML algorithms",
      icon: "🧠",
      color: "from-purple-500 to-pink-500",
    },
    {
      title: "IoT Solutions",
      description:
        "Internet of Things projects connecting the physical and digital world",
      icon: "🌐",
      color: "from-green-500 to-teal-500",
    },
    {
      title: "Innovation Labs",
      description:
        "Creative spaces for breakthrough thinking and experimentation",
      icon: "💡",
      color: "from-orange-500 to-red-500",
    },
  ];

  const stats = [
    { value: "500+", label: "Active Labs", icon: "⚗️" },
    { value: "25K+", label: "Students", icon: "👨‍🎓" },
    { value: "150+", label: "Educators", icon: "👩‍🏫" },
    { value: "12+", label: "Countries", icon: "🌍" },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.15,
      },
    },
  };

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 50,
      scale: 0.9,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const statVariants = {
    hidden: {
      opacity: 0,
      scale: 0,
      rotate: -180,
    },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: {
        duration: 0.8,
        ease: "backOut",
      },
    },
  };

  return (
    <section
      className="py-12 md:py-16 lg:py-24 relative overflow-hidden bg-white"
      ref={ref}
    >
      {/* Simple Modern Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-blue-50/30 to-indigo-50/50"></div>

      {/* Subtle decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 md:top-40 left-5 md:left-10 w-36 md:w-72 h-36 md:h-72 bg-gradient-to-br from-blue-100/20 to-indigo-100/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 md:bottom-40 right-5 md:right-10 w-48 md:w-96 h-48 md:h-96 bg-gradient-to-br from-purple-100/15 to-pink-100/15 rounded-full blur-3xl"></div>
        <div className="absolute top-1/3 right-1/3 w-32 md:w-64 h-32 md:h-64 bg-gradient-to-br from-teal-100/25 to-cyan-100/25 rounded-full blur-3xl"></div>

        {/* Clean geometric pattern */}
        <div className="absolute inset-0 opacity-3">
          <div
            className="h-full w-full"
            style={{
              backgroundImage: `
              radial-gradient(circle at 2px 2px, rgba(99, 102, 241, 0.15) 1px, transparent 0)
            `,
              backgroundSize: "40px 40px",
            }}
          ></div>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Header + Features Section */}
        <div className="bg-gradient-to-br from-blue-100 via-indigo-100 to-purple-200 rounded-2xl md:rounded-3xl p-4 md:p-6 lg:p-8 mb-8 md:mb-12 lg:mb-16">
          {/* Header Section */}
          <motion.div
            className="text-center mb-8 md:mb-12 lg:mb-20"
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <motion.div
              className="inline-flex items-center gap-2 bg-white border border-gray-200 rounded-full px-4 md:px-6 py-2 md:py-3 shadow-lg mb-4 md:mb-6 lg:mb-8"
              variants={cardVariants}
              whileHover={{ scale: 1.05, y: -2 }}
            >
              <span className="text-lg md:text-2xl">🌟</span>
              <span className="font-semibold text-gray-700 text-sm md:text-base">
                About ATLROBOLAB
              </span>
            </motion.div>

            <motion.h2
              className="text-3xl md:text-5xl lg:text-7xl font-black text-gray-900 mb-4 md:mb-6 lg:mb-8 leading-tight"
              variants={cardVariants}
            >
              WHO WE
              <span className="block bg-gradient-to-r from-blue-600 via-purple-600 to-teal-600 bg-clip-text text-transparent">
                ARE
              </span>
            </motion.h2>

            <motion.p
              className="text-base md:text-xl lg:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed px-2"
              variants={cardVariants}
            >
              We're pioneering the future of education through innovative
              technology labs, empowering students to explore, create, and
              transform ideas into reality.
            </motion.p>
          </motion.div>

          {/* Features Grid */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8"
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
                <div className="bg-white rounded-2xl md:rounded-3xl p-4 md:p-6 lg:p-8 shadow-lg hover:shadow-xl transition-all duration-500 h-full border border-gray-100/50">
                  <div
                    className={`w-12 md:w-14 lg:w-16 h-12 md:h-14 lg:h-16 rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center text-xl md:text-2xl mb-4 md:mb-6 group-hover:scale-110 transition-transform duration-300`}
                  >
                    {feature.icon}
                  </div>
                  <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2 md:mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Main Content Card Section */}
        <div className="bg-gradient-to-br from-emerald-100 via-teal-100 to-cyan-200 rounded-2xl md:rounded-3xl p-4 md:p-6 lg:p-8">
          {/* Main Content Card */}
          <motion.div
            className="bg-white/80 backdrop-blur-sm rounded-2xl md:rounded-3xl shadow-xl border border-gray-200/50 overflow-hidden"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="grid lg:grid-cols-2 gap-0">
              {/* Text Content */}
              <div className="p-6 md:p-8 lg:p-12 xl:p-16">
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.8, delay: 0.6 }}
                >
                  <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 md:mb-6 lg:mb-8">
                    Transforming Education Through Technology
                  </h3>

                  <div className="space-y-4 md:space-y-6 text-gray-600 text-sm md:text-base lg:text-lg leading-relaxed">
                    <p>
                      ATLROBOLAB is revolutionizing STEM education by creating
                      immersive learning environments where students can explore
                      robotics, artificial intelligence, and cutting-edge
                      technologies.
                    </p>

                    <p>
                      Our innovative approach combines theoretical knowledge
                      with hands-on experience, preparing students for the
                      challenges of tomorrow's technology-driven world.
                    </p>

                    <motion.div
                      className="flex items-center gap-3 md:gap-4 pt-4 md:pt-6"
                      whileHover={{ x: 10 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="w-10 md:w-12 h-10 md:h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                        <span className="text-white text-lg md:text-xl">→</span>
                      </div>
                      <span className="font-semibold text-gray-900 text-sm md:text-base">
                        Building Tomorrow's Innovators Today
                      </span>
                    </motion.div>
                  </div>
                </motion.div>
              </div>

              {/* Visual Element */}
              <div className="bg-gradient-to-br from-blue-500/90 via-purple-500/90 to-teal-500/90 p-6 md:p-8 lg:p-12 xl:p-16 flex items-center justify-center relative min-h-[200px] md:min-h-[300px]">
                <motion.div
                  className="text-center text-white"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.8, delay: 0.8 }}
                >
                  <div className="text-4xl md:text-6xl lg:text-8xl mb-3 md:mb-4 lg:mb-6">🔬</div>
                  <h4 className="text-lg md:text-xl lg:text-2xl font-bold mb-2 md:mb-4">Innovation Hub</h4>
                  <p className="text-sm md:text-base lg:text-lg opacity-90">
                    Where Ideas Meet Technology
                  </p>
                </motion.div>

                {/* Floating Elements */}
                <motion.div
                  className="absolute top-4 md:top-8 right-4 md:right-8 w-4 md:w-6 h-4 md:h-6 bg-white/20 rounded-full"
                  animate={{
                    y: [0, -20, 0],
                    opacity: [0.3, 0.8, 0.3],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
                <motion.div
                  className="absolute bottom-6 md:bottom-12 left-4 md:left-8 w-3 md:w-4 h-3 md:h-4 bg-white/30 rounded-full"
                  animate={{
                    y: [0, -15, 0],
                    opacity: [0.4, 0.9, 0.4],
                  }}
                  transition={{
                    duration: 2.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1,
                  }}
                />
              </div>
            </div>
          </motion.div>
        </div>

        {/* Statistics Section */}
        {/* <div className="bg-gradient-to-br from-rose-100 via-pink-100 to-orange-200 rounded-3xl p-8">
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
        </div> */}
      </div>
    </section>
  );
};

export default WhoWeAreSection;
