import React from 'react';
import { motion } from 'framer-motion';
import { Button, Card, Badge } from '../components/ui';

const Products = () => {
  const products = [
    {
      title: 'STEM & Robotics Lab',
      description: 'Complete robotics learning solution with hands-on kits and curriculum covering basic to advanced robotics concepts.',
      icon: '🤖',
      color: 'from-blue-500 to-cyan-500',
      features: ['Arduino & Raspberry Pi', 'Sensor Integration', 'AI Programming', '3D Design'],
      price: 'Starting from ₹2,50,000',
      badge: 'Most Popular'
    },
    {
      title: 'AI & IoT Lab',
      description: 'Artificial Intelligence and Internet of Things learning modules with real-world project implementations.',
      icon: '🧠',
      color: 'from-purple-500 to-pink-500',
      features: ['Machine Learning', 'IoT Devices', 'Data Analytics', 'Cloud Integration'],
      price: 'Starting from ₹3,00,000',
      badge: 'Advanced'
    },
    {
      title: 'Atal Tinkering Lab',
      description: 'Government initiative focused on innovation and creativity with comprehensive STEM equipment.',
      icon: '🔧',
      color: 'from-green-500 to-emerald-500',
      features: ['3D Printers', 'Electronics Kit', 'Fabrication Tools', 'Innovation Projects'],
      price: 'Starting from ₹20,00,000',
      badge: 'Government Approved'
    },
    {
      title: 'Programming Lab',
      description: 'Learn programming concepts through interactive coding exercises and project-based learning.',
      icon: '💻',
      color: 'from-orange-500 to-red-500',
      features: ['Python & JavaScript', 'Web Development', 'Mobile Apps', 'Game Development'],
      price: 'Starting from ₹1,50,000',
      badge: 'Beginner Friendly'
    },
    {
      title: 'Science Lab',
      description: 'Virtual and physical science experiments for better understanding of scientific concepts.',
      icon: '🔬',
      color: 'from-teal-500 to-blue-500',
      features: ['Virtual Labs', 'Physics Experiments', 'Chemistry Simulations', 'Biology Models'],
      price: 'Starting from ₹1,80,000',
      badge: 'Interactive'
    },
    {
      title: 'Mathematics Lab',
      description: 'Interactive mathematical concepts and problem-solving tools with visual learning aids.',
      icon: '📐',
      color: 'from-pink-500 to-purple-500',
      features: ['Geometry Tools', 'Algebra Software', 'Statistics Analysis', 'Mathematical Models'],
      price: 'Starting from ₹1,20,000',
      badge: 'Visual Learning'
    }
  ];

  const benefits = [
    {
      icon: '🏆',
      title: 'Award-Winning Curriculum',
      description: 'Internationally recognized and award-winning STEM curriculum designed by experts.'
    },
    {
      icon: '👨‍🏫',
      title: 'Teacher Training',
      description: 'Comprehensive teacher training programs to ensure effective implementation.'
    },
    {
      icon: '🔧',
      title: 'Complete Setup',
      description: 'End-to-end setup support including installation, training, and maintenance.'
    },
    {
      icon: '📱',
      title: 'Digital Platform',
      description: 'Advanced learning management system with progress tracking and analytics.'
    },
    {
      icon: '🌍',
      title: 'Global Presence',
      description: 'Trusted by 7000+ schools worldwide with over 20 million learners.'
    },
    {
      icon: '🤝',
      title: '24/7 Support',
      description: 'Round-the-clock technical support and customer service assistance.'
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
    <div className="bg-gradient-to-br from-gray-50 via-white to-blue-50">
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
              Complete <span className="text-gradient">STEM Education</span> Solutions
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
                  <div className={`bg-gradient-to-br ${product.color} p-6 text-white relative`}>
                    <div className="absolute top-4 right-4">
                      <Badge variant="default" size="sm" className="bg-white/20 text-white border-white/20">
                        {product.badge}
                      </Badge>
                    </div>
                    <div className="text-4xl mb-3">{product.icon}</div>
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
                            <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
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
                Why Choose <span className="text-gradient">STEMROBO</span>?
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
                    <div className="text-4xl mb-4">{benefit.icon}</div>
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
                    className="flex-1"
                    rightIcon="🚀"
                  >
                    Get Started Today
                  </Button>
                  <Button 
                    variant="secondary" 
                    size="lg"
                    className="flex-1"
                    leftIcon="📞"
                  >
                    Schedule Demo
                  </Button>
                </div>
                
                <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-gray-500">
                  <div className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    Free Consultation
                  </div>
                  <div className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    Custom Solutions
                  </div>
                  <div className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
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