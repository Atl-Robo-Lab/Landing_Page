import React from 'react';
import { motion } from 'framer-motion';

const Button = ({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  disabled = false, 
  loading = false,
  leftIcon,
  rightIcon,
  onClick,
  type = 'button',
  className = '',
  ...props 
}) => {
  const baseClasses = 'inline-flex items-center justify-center font-medium rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed';
  
  const variants = {
    primary: 'bg-primary text-white hover:bg-primary-dark focus:ring-primary shadow-medium hover:shadow-large hover:shadow-primary/25',
    secondary: 'bg-secondary text-white hover:bg-secondary-dark focus:ring-secondary shadow-medium hover:shadow-large hover:shadow-secondary/25',
    accent: 'bg-accent text-white hover:bg-accent-dark focus:ring-accent shadow-medium hover:shadow-large hover:shadow-accent/25',
    success: 'bg-success text-white hover:bg-success-dark focus:ring-success shadow-medium hover:shadow-large hover:shadow-success/25',
    ghost: 'text-gray-700 hover:bg-gray-100 focus:ring-gray-500',
    outline: 'border-2 border-primary text-primary hover:bg-primary-light focus:ring-primary',
    gradient: 'bg-gradient-primary-secondary text-white shadow-medium hover:shadow-large focus:ring-primary'
  };
  
  const sizes = {
    sm: 'px-3 py-2 text-sm',
    md: 'px-6 py-3 text-sm',
    lg: 'px-8 py-4 text-base',
    xl: 'px-10 py-5 text-lg'
  };

  const buttonVariants = {
    hover: { 
      scale: disabled ? 1 : 1.02,
      transition: { duration: 0.2 }
    },
    tap: { 
      scale: disabled ? 1 : 0.98,
      transition: { duration: 0.1 }
    }
  };

  const spinnerVariants = {
    animate: {
      rotate: 360,
      transition: {
        duration: 1,
        repeat: Infinity,
        ease: "linear"
      }
    }
  };

  const handleClick = (e) => {
    if (disabled || loading) return;
    onClick?.(e);
  };

  return (
    <motion.button
      type={type}
      className={`${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`}
      disabled={disabled || loading}
      onClick={handleClick}
      variants={buttonVariants}
      whileHover="hover"
      whileTap="tap"
      {...props}
    >
      {loading && (
        <motion.div
          className="w-4 h-4 border-2 border-current border-t-transparent rounded-full mr-2"
          variants={spinnerVariants}
          animate="animate"
        />
      )}
      
      {leftIcon && !loading && (
        <span className="mr-2">{leftIcon}</span>
      )}
      
      {children}
      
      {rightIcon && (
        <span className="ml-2">{rightIcon}</span>
      )}
    </motion.button>
  );
};

export default Button; 