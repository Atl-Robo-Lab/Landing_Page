import React from 'react';
import { motion } from 'framer-motion';
import { Card, Badge } from '../components/ui';
import { 
  HiAcademicCap, 
  HiWifi, 
  HiRocketLaunch,
  HiStar
} from 'react-icons/hi2';
import { 
  FaSchool, 
  FaHandshake, 
  FaMoneyBillWave 
} from 'react-icons/fa';

const About = () => {
  const stats = [
    { number: '500+', label: 'Schools in Bihar', icon: FaSchool },
    { number: '100K+', label: 'Students Impacted', icon: HiAcademicCap },
    { number: '₹250-300', label: 'Per Student/Month', icon: FaMoneyBillWave },
    { number: '24/7', label: 'Support Available', icon: FaHandshake }
  ];

  const values = [
    {
      icon: FaSchool,
      title: 'Infrastructure Excellence',
      description: 'We design and build state-of-the-art labs with high-performance computers, smart boards, robotics kits, and all necessary peripherals to create dynamic and productive learning spaces tailored to your institution\'s specific needs.'
    },
    {
      icon: HiWifi,
      title: 'Complete Connectivity',
      description: 'We deploy robust, high-speed networking infrastructure providing powerful and stable Wi-Fi coverage across every corner of your campus—from classrooms and libraries to administrative offices and common areas.'
    },
    {
      icon: FaHandshake,
      title: 'Unwavering Support',
      description: 'Our commitment extends far beyond installation. We provide comprehensive teacher training, ongoing maintenance, and technical support to guarantee that your systems run smoothly, minimizing downtime and maximizing learning time.'
    },
    {
      icon: HiStar,
      title: 'Bihar-Focused Excellence',
      description: 'We are proud to be serving schools and colleges across Bihar, building a reputation for excellence, reliability, and a deep commitment to transforming education in the state.'
    }
  ];

  const timeline = [
    { year: '2020', event: 'ATL ROBO Founded', description: 'Started with a vision to bridge the infrastructure gap in Bihar education' },
    { year: '2021', event: 'First 50 Schools', description: 'Successfully deployed complete infrastructure solutions in our first partner schools' },
    { year: '2022', event: 'Bihar Expansion', description: 'Expanded operations across multiple districts in Bihar' },
    { year: '2023', event: 'Advanced Infrastructure', description: 'Launched comprehensive Wi-Fi and lab solutions for larger institutions' },
    { year: '2024', event: 'Smart Education Hub', description: 'Established ATL ROBO as Bihar\'s leading educational infrastructure provider' }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <div className="bg-primary-light">
      <div className="py-16">
        <div className="container mx-auto px-4">
          {/* Hero Section */}
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Badge variant="gradient" size="lg" className="mb-4">
              About ATL ROBO
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Building the Future of Education in <span className="text-gradient-primary-secondary">Bihar</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              ATL ROBO is a pioneering force dedicated to transforming schools and colleges across Bihar into modern hubs of innovation and learning. 
              Our name is synonymous with "Smart Infrastructure Solutions for Future‑Ready Schools & Colleges." We are not just vendors; 
              we are architects of educational excellence, committed to empowering the next generation with the tools they need to succeed in a digital world.
            </p>
          </motion.div>

          {/* Stats Section */}
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <Card className="p-6 text-center">
                  <div className="text-3xl mb-3 text-blue-600">
                  <stat.icon />
                </div>
                  <div className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
                  <div className="text-gray-600 font-medium">{stat.label}</div>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          {/* Mission Section */}
          <motion.div 
            className="mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Card variant="elevated" className="overflow-hidden">
              <div className="bg-gradient-primary-secondary text-white p-8 md:p-12">
                <div className="max-w-4xl mx-auto text-center">
                  <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Mission</h2>
                  <p className="text-xl md:text-2xl leading-relaxed text-white/90">
                    To bridge the critical infrastructure gap in education across Bihar by designing, deploying, and managing 
                    state-of-the-art computer labs, ensuring seamless and reliable Wi-Fi connectivity across entire campuses, 
                    and providing the innovative learning tools that make education engaging, effective, and inspiring. 
                    We believe that every student in Bihar deserves access to a world-class learning environment.
                  </p>
                </div>
              </div>
            </Card>
          </motion.div>
            
          {/* Vision & Values */}
          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            {/* Vision */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Card variant="gradient" className="p-8 h-full">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
                <p className="text-gray-700 leading-relaxed mb-6">
                  To transform every school and college in Bihar into a modern hub of innovation and learning, 
                  ensuring that students across the state have access to world-class educational infrastructure 
                  that prepares them for success in the digital age.
                </p>
                <div className="text-4xl text-blue-600">
                  <HiRocketLaunch />
                </div>
              </Card>
            </motion.div>

            {/* Values Preview */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Card variant="elevated" className="p-8 h-full">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Impact</h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <span className="text-success mr-3">
                      <HiRocketLaunch className="text-lg" />
                    </span>
                    <span className="text-gray-700">Future-Ready Campus Infrastructure</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-success mr-3">
                      <HiWifi className="text-lg" />
                    </span>
                    <span className="text-gray-700">Seamless Campus-Wide Connectivity</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-success mr-3">
                      <FaSchool className="text-lg" />
                    </span>
                    <span className="text-gray-700">Enhanced Learning Experience</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-success mr-3">
                      <FaHandshake className="text-lg" />
                    </span>
                    <span className="text-gray-700">Complete Support & Training</span>
                  </div>
                </div>
              </Card>
            </motion.div>
          </div>

          {/* Values Section */}
          <motion.div 
            className="mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Our <span className="text-gradient-primary-secondary">Core Values</span>
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                These principles guide everything we do and help us deliver exceptional 
                educational infrastructure solutions to schools and colleges across Bihar.
              </p>
            </div>

            <motion.div 
              className="grid md:grid-cols-2 gap-8"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  <Card className="p-8 h-full">
                    <div className="flex items-start space-x-4">
                      <div className="text-4xl text-blue-600">
                  <value.icon />
                </div>
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-3">{value.title}</h3>
                        <p className="text-gray-600 leading-relaxed">{value.description}</p>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Timeline Section */}
          <motion.div 
            className="mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Our <span className="text-gradient-primary-secondary">Journey</span>
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                From a small startup to a global leader in STEM education, 
                here are the key milestones that shaped our journey.
              </p>
            </div>

            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-primary-secondary transform md:-translate-x-1/2"></div>
              
              <div className="space-y-8">
                {timeline.map((item, index) => (
                  <motion.div
                    key={index}
                    className={`relative flex items-center ${
                      index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                    }`}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    {/* Timeline dot */}
                    <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-gradient-primary-secondary rounded-full transform md:-translate-x-1/2 z-10"></div>
                    
                    {/* Content */}
                    <div className={`w-full md:w-5/12 ml-12 md:ml-0 ${index % 2 === 0 ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'}`}>
                      <Card className="p-6">
                        <div className="text-sm font-semibold text-primary mb-2">{item.year}</div>
                        <h3 className="text-lg font-bold text-gray-900 mb-2">{item.event}</h3>
                        <p className="text-gray-600">{item.description}</p>
                      </Card>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Call to Action */}
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Card variant="elevated" className="p-12">
              <div className="max-w-3xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  Join the <span className="text-gradient-primary-secondary">STEM Revolution</span>
                </h2>
                <p className="text-lg text-gray-600 mb-8">
                  Be part of our mission to transform education and empower the next generation 
                  of innovators, creators, and problem-solvers.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <motion.button
                    className="px-8 py-3 bg-gradient-primary-secondary text-white rounded-lg font-medium hover:shadow-lg transition-all duration-300"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Partner With Us
                  </motion.button>
                  <motion.button
                    className="px-8 py-3 border border-gray-300 text-gray-700 rounded-lg font-medium hover:bg-gray-50 transition-all duration-300"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Learn More
                  </motion.button>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About; 