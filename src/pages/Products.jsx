import React from 'react';
import { motion } from 'framer-motion';
import { Button, Card, Badge } from '../components/ui';
import { 
  HiComputerDesktop, 
  HiWifi, 
  HiPhone, 
  HiRocketLaunch,
  HiGlobeAlt
} from 'react-icons/hi2';
import { 
  FaChalkboardTeacher, 
  FaSchool,
  FaHandshake,
  FaMoneyBillWave
} from 'react-icons/fa';
import { TbRobot } from 'react-icons/tb';
import { HiDesktopComputer } from 'react-icons/hi';
import { HiCheck } from 'react-icons/hi';

const Products = () => {
  const products = [
    {
      title: 'Complete Computer Lab Setup',
      description: 'State-of-the-art computer labs with high-performance computers, smart boards, and all necessary peripherals tailored to your institution\'s specific needs.',
      icon: HiComputerDesktop,
      color: 'bg-gradient-primary-secondary',
      features: ['High-Performance Desktop Computers', 'Interactive Smart Boards', 'Modern Software Suite', 'Complete Installation & Setup'],
      price: '₹250-300 per student/month',
      badge: 'Most Popular'
    },
    {
      title: 'Campus-Wide Wi-Fi Infrastructure',
      description: 'Robust, high-speed networking infrastructure providing stable Wi-Fi coverage across every corner of your campus.',
      icon: HiWifi,
      color: 'bg-gradient-secondary-accent',
      features: ['Enterprise-Grade Routers', 'High-Density Access Points', 'Network Switches', 'Complete Campus Coverage'],
      price: 'Included in package',
      badge: 'Essential'
    },
    {
      title: 'Robotics & STEM Kits',
      description: 'Advanced robotics kits including Arduino and Raspberry Pi platforms giving students hands-on experience with coding and engineering.',
      icon: TbRobot,
      color: 'bg-gradient-success-primary',
      features: ['Arduino Development Kits', 'Raspberry Pi Systems', 'Sensor Integration', 'Programming Tools'],
      price: 'Included in lab setup',
      badge: 'Innovation Ready'
    },
    {
      title: 'Teacher Training & Support',
      description: 'Comprehensive teacher training programs to ensure your faculty can confidently use the new technology with ongoing support.',
      icon: FaChalkboardTeacher,
      color: 'bg-gradient-accent-primary',
      features: ['Faculty Training Programs', '24/7 Technical Support', 'Regular Maintenance', 'System Monitoring'],
      price: 'Included in package',
      badge: 'Support Included'
    },
    {
      title: 'Network Servers & Management',
      description: 'Powerful servers for managing your network infrastructure and ensuring seamless operation of all connected devices.',
      icon: HiDesktopComputer,
      color: 'bg-gradient-primary-success',
      features: ['Network Management Servers', 'Data Storage Solutions', 'Security Systems', 'Remote Monitoring'],
      price: 'Custom pricing',
      badge: 'Enterprise Grade'
    },
    {
      title: 'Complete Turnkey Solution',
      description: 'All-inclusive package covering equipment, setup, support, and training - everything you need for a modern educational environment.',
      icon: FaSchool,
      color: 'bg-gradient-secondary-success',
      features: ['Complete Setup', 'Equipment Included', 'Training & Support', 'No Hidden Costs'],
      price: '₹250-300 per student/month',
      badge: 'All-Inclusive'
    }
  ];

  const benefits = [
    {
      icon: HiRocketLaunch,
      title: 'Become Future-Ready',
      description: 'Our modern labs and technology inspire a culture of innovation and prepare students for high-demand careers in technology, engineering, and science.'
    },
    {
      icon: HiWifi,
      title: 'Seamless Connectivity',
      description: 'Eliminate the frustration of slow, unreliable internet. Our fast and stable Wi-Fi empowers students and faculty to learn, research, and collaborate without limits.'
    },
    {
      icon: FaSchool,
      title: 'Enhanced Learning Experience',
      description: 'Interactive tools and a dynamic digital environment improve teaching quality, boost student engagement, and make learning more effective and enjoyable.'
    },
    {
      icon: FaHandshake,
      title: 'Complete Support Partnership',
      description: 'We handle everything—from initial planning and installation to ongoing maintenance and professional training. We are your dedicated technology partner every step of the way.'
    },
    {
      icon: HiGlobeAlt,
      title: 'Trusted Network Across Bihar',
      description: 'We are proud to be serving schools and colleges across the state, building a reputation for excellence, reliability, and a deep commitment to education.'
    },
    {
      icon: FaMoneyBillWave,
      title: 'Transparent Pricing',
      description: 'Simple, scalable pricing: ₹250/student/month for institutions over 1000 students, ₹300/student/month for smaller institutions. No hidden fees.'
    }
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

  const cardVariants = {
    hidden: { y: 30, opacity: 0, scale: 0.95 },
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
    <div className="bg-neutral-light">
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
              Our Products
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Complete <span className="text-gradient-primary-secondary">STEM Education</span> Solutions
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive educational solutions designed to prepare students for the future
              with hands-on learning experiences and industry-relevant skills.
            </p>
          </motion.div>

          {/* Products Grid */}
          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {products.map((product, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover={{ y: -8 }}
                transition={{ duration: 0.3 }}
              >
                <Card variant="elevated" className="h-full overflow-hidden">
                  {/* Header with gradient background */}
                  <div className={`${product.color} p-6 text-white relative`}>
                    <div className="absolute top-4 right-4">
                      <Badge variant="default" size="sm" className="bg-white/20 text-white border-white/20">
                        {product.badge}
                      </Badge>
                    </div>
                    <div className="text-4xl mb-3 text-white">
                      <product.icon />
                    </div>
                    <h3 className="text-xl font-bold mb-2">{product.title}</h3>
                    <p className="text-white/90 text-sm leading-relaxed">
                      {product.description}
                    </p>
                  </div>
                  
                  {/* Content */}
                  <div className="p-6">
                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-900 mb-3">Key Features:</h4>
                      <div className="grid grid-cols-2 gap-2">
                        {product.features.map((feature, idx) => (
                          <div key={idx} className="flex items-center text-sm text-gray-600">
                            <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                            {feature}
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div className="mb-6">
                      <div className="text-2xl font-bold text-gray-900 mb-2">{product.price}</div>
                      <div className="text-sm text-gray-500">*Pricing may vary based on requirements</div>
                    </div>
                    
                    <div className="flex flex-col gap-3">
                      <Button variant="primary" size="md" className="w-full">
                        Learn More
                      </Button>
                      <Button variant="secondary" size="md" className="w-full">
                        Request Quote
                      </Button>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          {/* Benefits Section */}
          <motion.div
            className="mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Why Choose <span className="text-gradient-primary-secondary">ALTROBOLAB</span>?
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                We provide comprehensive support and world-class educational solutions
                that transform traditional learning into engaging experiences.
              </p>
            </div>

            <motion.div 
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
            >
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  <Card className="p-6 h-full text-center">
                    <div className="text-4xl mb-4 text-blue-600">
                      <benefit.icon />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">{benefit.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* CTA Section */}
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Card variant="gradient" className="p-12">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  Ready to Transform Your School?
                </h2>
                <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
                  Join thousands of schools worldwide that have already transformed their
                  education system with our comprehensive STEM solutions. Let's build the
                  future of education together.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
                  <Button 
                    variant="gradient" 
                    size="lg"
                    className="flex-1 bg-gradient-primary-secondary shadow-lg hover:shadow-primary/25 transform hover:scale-105 transition-all duration-300"
                    rightIcon={<HiRocketLaunch />}
                  >
                    Get Started Today
                  </Button>
                  <Button 
                    variant="accent" 
                    size="lg"
                    className="flex-1 bg-gradient-success-primary shadow-lg hover:shadow-success/25 transform hover:scale-105 transition-all duration-300"
                    leftIcon={<HiPhone />}
                  >
                    Schedule Demo
                  </Button>
                </div>
                
                <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-gray-500">
                  <div className="flex items-center">
                    <HiCheck className="text-success mr-2" />
                    Free Consultation
                  </div>
                  <div className="flex items-center">
                    <HiCheck className="text-success mr-2" />
                    Custom Solutions
                  </div>
                  <div className="flex items-center">
                    <HiCheck className="text-success mr-2" />
                    24/7 Support
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Products; 