import React from 'react';
import { motion } from 'framer-motion';

const Card = ({ 
  children, 
  variant = 'default',
  hover = true,
  className = '',
  onClick,
  ...props 
}) => {
  const baseClasses = 'bg-white rounded-xl border border-gray-100 transition-all duration-300';
  
  const variants = {
    default: 'shadow-soft hover:shadow-medium',
    elevated: 'shadow-medium hover:shadow-large',
    flat: 'shadow-none hover:shadow-soft',
    glass: 'bg-glass backdrop-blur-lg border-white/20',
    gradient: 'bg-gradient-primary-secondary-light shadow-soft hover:shadow-medium'
  };

  const cardVariants = {
    initial: { y: 0 },
    hover: hover ? { 
      y: -4,
      transition: { duration: 0.2, ease: "easeOut" }
    } : {},
    tap: onClick ? { 
      scale: 0.98,
      transition: { duration: 0.1 }
    } : {}
  };

  return (
    <motion.div
      className={`${baseClasses} ${variants[variant]} ${onClick ? 'cursor-pointer' : ''} ${className}`}
      variants={cardVariants}
      initial="initial"
      whileHover="hover"
      whileTap="tap"
      onClick={onClick}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export default Card; 