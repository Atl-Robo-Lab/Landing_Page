import React from 'react';
import { motion } from 'framer-motion';

const Badge = ({ 
  children, 
  variant = 'default',
  size = 'md',
  className = '',
  animate = true,
  ...props 
}) => {
  const baseClasses = 'inline-flex items-center justify-center font-medium rounded-full transition-all duration-200';
  
  const variants = {
    default: 'bg-neutral-light text-neutral-dark',
    primary: 'bg-primary-light text-primary-dark',
    secondary: 'bg-secondary-light text-secondary-dark',
    accent: 'bg-accent-light text-accent-dark',
    success: 'bg-success-light text-success-dark',
    warning: 'bg-accent-light text-accent-dark',
    danger: 'bg-accent-light text-accent-dark',
    info: 'bg-primary-light text-primary-dark',
    gradient: 'bg-gradient-primary-secondary text-white'
  };
  
  const sizes = {
    sm: 'px-2 py-1 text-xs',
    md: 'px-3 py-1 text-sm',
    lg: 'px-4 py-2 text-base'
  };

  const badgeVariants = {
    initial: { scale: 0, opacity: 0 },
    animate: { 
      scale: 1, 
      opacity: 1,
      transition: { 
        type: "spring",
        stiffness: 500,
        damping: 30
      }
    },
    hover: { 
      scale: 1.05,
      transition: { duration: 0.2 }
    }
  };

  const Component = animate ? motion.span : 'span';
  const motionProps = animate ? {
    variants: badgeVariants,
    initial: "initial",
    animate: "animate",
    whileHover: "hover"
  } : {};

  return (
    <Component
      className={`${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`}
      {...motionProps}
      {...props}
    >
      {children}
    </Component>
  );
};

export default Badge; 