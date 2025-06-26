import React from 'react';
import { motion } from 'framer-motion';
import { Card, Badge } from '../components/ui';

const About = () => {
  const stats = [
    { number: '7000+', label: 'Schools Worldwide', icon: '🏫' },
    { number: '20M+', label: 'Students Reached', icon: '👨‍🎓' },
    { number: '25+', label: 'Countries', icon: '🌍' },
    { number: '15+', label: 'Years Experience', icon: '⭐' }
  ];

  const values = [
    {
      icon: '💡',
      title: 'Innovation in Education',
      description: 'We continuously innovate to bring cutting-edge technology and methodologies to the classroom, ensuring students are prepared for tomorrow\'s challenges.'
    },
    {
      icon: '🤝',
      title: 'Hands-on Learning',
      description: 'Our approach emphasizes experiential learning through practical projects, enabling students to learn by doing and building real-world skills.'
    },
    {
      icon: '🎯',
      title: 'Future-Ready Skills',
      description: 'We focus on developing critical thinking, problem-solving, and technical skills that prepare students for careers in the digital age.'
    },
    {
      icon: '🌟',
      title: 'Excellence & Quality',
      description: 'Our commitment to excellence drives us to maintain the highest standards in curriculum design, teacher training, and student outcomes.'
    }
  ];

  const timeline = [
    { year: '2008', event: 'Company Founded', description: 'Started with a vision to revolutionize STEM education' },
    { year: '2012', event: 'First 1000 Schools', description: 'Reached our first milestone of 1000 partner schools' },
    { year: '2016', event: 'International Expansion', description: 'Expanded operations to over 15 countries worldwide' },
    { year: '2020', event: 'Digital Transformation', description: 'Launched comprehensive digital learning platforms' },
    { year: '2024', event: 'AI Integration', description: 'Integrated AI and advanced technologies in curriculum' }
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
    <div className="bg-gradient-to-br from-purple-50 via-white to-blue-50">
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
              About STEMROBO
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Transforming Education Through <span className="text-gradient">Innovation</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              For over 15 years, STEMROBO has been at the forefront of educational innovation, 
              empowering millions of students worldwide with cutting-edge STEM education solutions 
              that prepare them for the challenges and opportunities of tomorrow.
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
                  <div className="text-3xl mb-3">{stat.icon}</div>
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
              <div className="bg-gradient-to-br from-purple-600 to-indigo-800 text-white p-8 md:p-12">
                <div className="max-w-4xl mx-auto text-center">
                  <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Mission</h2>
                  <p className="text-xl md:text-2xl leading-relaxed text-purple-100">
                    To drive the future of Science, Technology, Engineering and Mathematics (STEM) 
                    Education through our experiential programs into Robotics, Programming, Science, and Electronics.
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
                  To become the leading EdTech company globally, empowering millions of students 
                  with innovative STEM education solutions that prepare them for the challenges 
                  of tomorrow.
                </p>
                <div className="text-4xl">🚀</div>
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
                    <span className="text-green-500 mr-3">✓</span>
                    <span className="text-gray-700">Innovative Learning Solutions</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-green-500 mr-3">✓</span>
                    <span className="text-gray-700">Global Educational Transformation</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-green-500 mr-3">✓</span>
                    <span className="text-gray-700">Future-Ready Skill Development</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-green-500 mr-3">✓</span>
                    <span className="text-gray-700">Comprehensive Teacher Training</span>
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
                Our <span className="text-gradient">Core Values</span>
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                These principles guide everything we do and help us deliver exceptional 
                educational experiences to students and educators worldwide.
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
                      <div className="text-4xl">{value.icon}</div>
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
                Our <span className="text-gradient">Journey</span>
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                From a small startup to a global leader in STEM education, 
                here are the key milestones that shaped our journey.
              </p>
            </div>

            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-purple-500 transform md:-translate-x-1/2"></div>
              
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
                    <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full transform md:-translate-x-1/2 z-10"></div>
                    
                    {/* Content */}
                    <div className={`w-full md:w-5/12 ml-12 md:ml-0 ${index % 2 === 0 ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'}`}>
                      <Card className="p-6">
                        <div className="text-sm font-semibold text-blue-600 mb-2">{item.year}</div>
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
                  Join the <span className="text-gradient">STEM Revolution</span>
                </h2>
                <p className="text-lg text-gray-600 mb-8">
                  Be part of our mission to transform education and empower the next generation 
                  of innovators, creators, and problem-solvers.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <motion.button
                    className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-medium hover:shadow-lg transition-all duration-300"
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