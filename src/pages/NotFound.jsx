import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Button, Card } from '../components/ui';

const NotFound = () => {
  const suggestions = [
    { icon: '🏠', label: 'Home', path: '/', description: 'Go back to our homepage' },
    { icon: '📚', label: 'Products', path: '/products', description: 'Explore our STEM solutions' },
    { icon: '💬', label: 'Contact', path: '/contact', description: 'Get in touch with us' },
    { icon: 'ℹ️', label: 'About', path: '/about', description: 'Learn more about ALTROBOLAB' }
  ];

  const floatingVariants = {
    animate: {
      y: [-10, 10, -10],
      rotate: [-5, 5, -5],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

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
    <div className="bg-gradient-to-br from-red-50 via-white to-orange-50">
      <div className="py-16">
        <div className="container mx-auto px-4">
          <motion.div 
            className="max-w-4xl mx-auto text-center"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* 404 Illustration */}
            <motion.div 
              className="mb-8"
              variants={itemVariants}
            >
              <div className="relative inline-block">
                <motion.div
                  className="text-9xl md:text-[12rem] font-bold text-gray-200 select-none"
                  animate={{ 
                    textShadow: [
                      "0 0 20px rgba(239, 68, 68, 0.3)",
                      "0 0 40px rgba(239, 68, 68, 0.5)",
                      "0 0 20px rgba(239, 68, 68, 0.3)"
                    ]
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  404
                </motion.div>
                
                {/* Floating robot */}
                <motion.div
                  className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                  variants={floatingVariants}
                  animate="animate"
                >
                  <div className="text-6xl md:text-8xl">🤖</div>
                </motion.div>
              </div>
            </motion.div>

            {/* Main Content */}
            <motion.div variants={itemVariants} className="mb-12">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Oops! Page <span className="text-gradient">Not Found</span>
              </h1>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
                Looks like our robot couldn't find the page you're looking for. 
                It might have been moved, deleted, or you entered the wrong URL.
              </p>
            </motion.div>

            {/* Search Suggestion */}
            <motion.div variants={itemVariants} className="mb-12">
              <Card className="p-8 max-w-md mx-auto">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  Quick Search
                </h3>
                <div className="flex gap-3">
                  <input
                    type="text"
                    placeholder="What are you looking for?"
                    className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                  <Button variant="primary" size="md">
                    Search
                  </Button>
                </div>
              </Card>
            </motion.div>

            {/* Navigation Suggestions */}
            <motion.div variants={itemVariants} className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-8">
                Where would you like to go?
              </h2>
              
              <motion.div 
                className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
              >
                {suggestions.map((item, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    whileHover={{ y: -5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Link to={item.path}>
                      <Card className="p-6 h-full text-center hover:shadow-lg transition-all duration-300">
                        <div className="text-4xl mb-4">{item.icon}</div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">
                          {item.label}
                        </h3>
                        <p className="text-gray-600 text-sm">
                          {item.description}
                        </p>
                      </Card>
                    </Link>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            {/* Help Section */}
            <motion.div variants={itemVariants}>
              <Card variant="gradient" className="p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Still Need Help?
                </h3>
                <p className="text-gray-600 mb-6">
                  Our support team is here to help you find what you're looking for.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button variant="primary" size="lg" leftIcon="📞">
                    Contact Support
                  </Button>
                  <Button variant="secondary" size="lg" leftIcon="📧">
                    Send Email
                  </Button>
                </div>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default NotFound; 