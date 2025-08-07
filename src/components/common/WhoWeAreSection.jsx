import React from "react";
import { motion } from "framer-motion";
import { HiWifi, HiRocketLaunch } from 'react-icons/hi2';
import { FaSchool, FaHandshake, FaTrophy } from 'react-icons/fa';

const WhoWeAreSection = () => {
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

  const features = [
    {
      icon: FaSchool,
      title: "Modern Lab Setup",
      description: "We design and build state-of-the-art labs with high-performance computers, smart boards, robotics kits, and all necessary peripherals to create dynamic and productive learning spaces tailored to your institution's specific needs.",
      gradient: "bg-gradient-primary-secondary-light",
    },
    {
      icon: HiWifi,
      title: "Campus Wi-Fi Infrastructure",
      description: "We deploy robust, high-speed networking infrastructure providing powerful and stable Wi-Fi coverage across every corner of your campus—from classrooms and libraries to administrative offices and common areas.",
      gradient: "bg-gradient-success-primary-light",
    },
    {
      icon: FaHandshake,
      title: "Complete Support & Training",
      description: "Our commitment extends far beyond installation. We provide comprehensive teacher training, ongoing maintenance, and technical support to ensure your systems run smoothly, maximizing learning time.",
      gradient: "bg-gradient-accent-success-light",
    },
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-20 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-neutral-primary-secondary"></div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="text-center mb-12 sm:mb-16 lg:mb-20"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.div
            className="bg-gradient-primary-secondary text-white px-4 py-2 rounded-full inline-block text-sm font-semibold mb-6 shadow-lg"
            variants={itemVariants}
            whileHover={{
              scale: 1.05,
              boxShadow: "0 8px 25px rgba(249, 115, 22, 0.4)",
              y: -2,
            }}
          >
            <div className="flex items-center gap-2">
              <FaTrophy className="text-lg" />
              <span>Who We Are</span>
            </div>
          </motion.div>

          <motion.h2
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight"
            variants={itemVariants}
          >
            ATL ROBO:{" "}
            <span className="text-gradient-primary-secondary">
              Smart Infrastructure Solutions
            </span>{" "}
            for Bihar's Future
          </motion.h2>

          <motion.p
            className="text-neutral text-base sm:text-lg md:text-xl max-w-4xl mx-auto leading-relaxed"
            variants={itemVariants}
          >
            We are a pioneering force dedicated to transforming schools and colleges across Bihar into modern hubs of innovation and learning. 
            Our mission is clear and resolute: to bridge the critical infrastructure gap in education by designing, deploying, and managing 
            state-of-the-art computer labs, ensuring seamless and reliable Wi-Fi connectivity across entire campuses, and providing the 
            innovative learning tools that make education engaging, effective, and inspiring.
          </motion.p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          className="grid md:grid-cols-3 gap-6 sm:gap-8 lg:gap-10"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="group relative"
              variants={itemVariants}
              whileHover={{
                y: -10,
                transition: { duration: 0.3 },
              }}
            >
              {/* Card */}
              <div className="bg-white/80 backdrop-blur-lg rounded-2xl p-6 sm:p-8 shadow-xl border border-neutral-200/20 relative overflow-hidden">
                {/* Gradient Background */}
                <div className={`absolute inset-0 ${feature.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                
                {/* Content */}
                <div className="relative z-10">
                  {/* Icon */}
                  <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-primary-secondary rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <div className="text-2xl sm:text-3xl text-white">
                      <feature.icon />
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 leading-tight">
                    {feature.title}
                  </h3>

                  {/* Description */}
                  <p className="text-neutral text-sm sm:text-base leading-relaxed">
                    {feature.description}
                  </p>
                </div>

                {/* Decorative Elements */}
                <div className="absolute top-4 right-4 w-2 h-2 bg-accent rounded-full opacity-60"></div>
                <div className="absolute bottom-4 left-4 w-1.5 h-1.5 bg-success rounded-full opacity-60"></div>
              </div>

              {/* Floating Elements */}
              <motion.div
                className="absolute -top-2 -right-2 w-4 h-4 bg-gradient-secondary-accent rounded-full opacity-80"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.8, 0.4, 0.8],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: index * 0.5,
                }}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center mt-12 sm:mt-16 lg:mt-20"
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.div
            className="bg-gradient-primary-secondary text-white px-8 py-4 rounded-2xl inline-block font-semibold shadow-xl"
            whileHover={{
              scale: 1.05,
              boxShadow: "0 15px 35px rgba(249, 115, 22, 0.4)",
              y: -3,
            }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="flex items-center gap-2">
              <HiRocketLaunch className="text-lg" />
              <span>Transform Your Campus Today</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhoWeAreSection;
