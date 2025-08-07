import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button, Card, Input, Badge } from '../components/ui';
import { 
  HiComputerDesktop, 
  HiWifi, 
  HiPhone, 
  HiEnvelope, 
  HiMapPin, 
  HiClock,
  HiGlobeAlt,
  HiRocketLaunch
} from 'react-icons/hi2';
import { TbRobot } from 'react-icons/tb';
import { 
  FaChalkboardTeacher, 
  FaSchool,
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaLinkedin
} from 'react-icons/fa';
import { HiDesktopComputer } from 'react-icons/hi';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    labType: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState({});

  const labTypes = [
    { id: 'computer', name: 'Complete Computer Lab Setup', icon: HiComputerDesktop },
    { id: 'wifi', name: 'Campus-Wide Wi-Fi Infrastructure', icon: HiWifi },
    { id: 'robotics', name: 'Robotics & STEM Kits', icon: TbRobot },
    { id: 'training', name: 'Teacher Training & Support', icon: FaChalkboardTeacher },
    { id: 'servers', name: 'Network Servers & Management', icon: HiDesktopComputer },
    { id: 'turnkey', name: 'Complete Turnkey Solution', icon: FaSchool }
  ];

  const contactInfo = [
    {
      icon: HiEnvelope,
      title: 'Email',
      details: 'info@atlrobo.com',
      subtitle: 'Send us an email anytime!'
    },
    {
      icon: HiPhone,
      title: 'Phone',
      details: '+91 87092 52136',
      subtitle: 'Call us anytime for consultation'
    },
    {
      icon: HiMapPin,
      title: 'Service Area',
      details: 'All Districts in Bihar',
      subtitle: 'Serving schools & colleges across Bihar'
    },
    {
      icon: HiClock,
      title: 'Availability',
      details: '24/7 Support Available',
      subtitle: 'Ready to transform your campus!'
    }
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^\d{10}$/.test(formData.phone.replace(/\D/g, ''))) {
      newErrors.phone = 'Please enter a valid 10-digit phone number';
    }
    
    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }
    
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    
    setIsSubmitting(true);
    
    // Simulate form submission
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      alert('Thank you! Your message has been sent successfully.');
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
        labType: ''
      });
    } catch (error) {
      alert('Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
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
    <div className="bg-secondary-light">
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
              Get In Touch
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Transform Your <span className="text-gradient-primary-secondary">Campus in Bihar</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ready to provide your students with the educational environment they deserve? 
              Contact us today to schedule a free consultation and discuss how ATL ROBO can transform your campus into a beacon of modern education.
            </p>
          </motion.div>

          <motion.div 
            className="grid lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Contact Information */}
            <motion.div className="lg:col-span-1" variants={itemVariants}>
              <Card variant="elevated" className="p-8 h-full">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h2>
                
                <div className="space-y-6">
                  {contactInfo.map((item, index) => (
                    <motion.div 
                      key={index}
                      className="flex items-start space-x-4"
                      whileHover={{ x: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className="text-2xl text-blue-600">
                        <item.icon />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900">{item.title}</h3>
                        <p className="text-gray-700">{item.details}</p>
                        <p className="text-sm text-gray-500">{item.subtitle}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Social Links */}
                <div className="mt-8 pt-8 border-t border-gray-200">
                  <h3 className="font-semibold text-gray-900 mb-4">Follow Us</h3>
                  <div className="flex space-x-4">
                    {[HiGlobeAlt, FaFacebook, FaInstagram, FaTwitter, FaLinkedin].map((IconComponent, index) => (
                      <motion.div
                        key={index}
                        className="w-10 h-10 bg-gradient-primary-secondary rounded-full flex items-center justify-center text-white cursor-pointer"
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <IconComponent className="text-sm" />
                      </motion.div>
                    ))}
                  </div>
                </div>
              </Card>
            </motion.div>

            {/* Contact Form */}
            <motion.div className="lg:col-span-2" variants={itemVariants}>
              <Card variant="elevated" className="p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Send Us a Message</h2>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Lab Type Selection */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-3">
                      Which lab are you interested in? (Optional)
                    </label>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                      {labTypes.map((lab) => (
                        <motion.div
                          key={lab.id}
                          className={`p-3 border-2 rounded-lg cursor-pointer transition-all duration-200 ${
                            formData.labType === lab.id
                              ? 'border-primary bg-primary-light'
                              : 'border-gray-200 hover:border-gray-300'
                          }`}
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          onClick={() => setFormData(prev => ({ ...prev, labType: lab.id }))}
                        >
                          <div className="text-center">
                            <div className="text-2xl mb-1 text-blue-600">
                              <lab.icon />
                            </div>
                            <div className="text-xs font-medium text-gray-700">{lab.name}</div>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* Form Fields */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <Input
                      label="Full Name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      error={errors.name}
                      required
                      leftIcon="👤"
                    />
                    
                    <Input
                      label="Email Address"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      error={errors.email}
                      required
                      leftIcon={<HiEnvelope />}
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <Input
                      label="Phone Number"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleInputChange}
                      error={errors.phone}
                      required
                      leftIcon={<HiPhone />}
                    />
                    
                    <Input
                      label="Subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      error={errors.subject}
                      required
                      leftIcon="📝"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Message <span className="text-accent">*</span>
                    </label>
                    <motion.textarea
                      name="message"
                      rows="5"
                      value={formData.message}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 border rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-1 ${
                        errors.message
                          ? 'border-accent focus:border-accent focus:ring-accent'
                          : 'border-gray-300 focus:border-primary focus:ring-primary'
                      }`}
                      placeholder="Tell us about your requirements, school size, or any specific questions..."
                      whileFocus={{ scale: 1.01 }}
                    />
                    {errors.message && (
                      <motion.p
                        className="mt-2 text-sm text-accent"
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                      >
                        {errors.message}
                      </motion.p>
                    )}
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button
                      type="submit"
                      variant="gradient"
                      size="lg"
                      loading={isSubmitting}
                      className="flex-1"
                      rightIcon={<HiRocketLaunch />}
                    >
                      {isSubmitting ? 'Sending Message...' : 'Send Message'}
                    </Button>
                    
                    <Button
                      type="button"
                      variant="secondary"
                      size="lg"
                      leftIcon={<HiPhone />}
                    >
                      Schedule Call
                    </Button>
                  </div>
                </form>
              </Card>
            </motion.div>
          </motion.div>

          {/* FAQ Section */}
          <motion.div 
            className="mt-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Card variant="gradient" className="p-8 text-center">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-gray-600 mb-6">
                Have questions? Check out our FAQ section or reach out to us directly.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="primary" size="lg">
                  View FAQ
                </Button>
                <Button variant="secondary" size="lg">
                  Download Brochure
                </Button>
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact; 