import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Input = ({ 
  label,
  type = 'text',
  placeholder,
  value,
  onChange,
  error,
  helperText,
  required = false,
  disabled = false,
  leftIcon,
  rightIcon,
  className = '',
  ...props 
}) => {
  const [isFocused, setIsFocused] = useState(false);

  const baseClasses = 'w-full px-4 py-3 border rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-1';
  
  const stateClasses = error 
    ? 'border-red-300 focus:border-red-500 focus:ring-red-500' 
    : 'border-gray-300 focus:border-blue-500 focus:ring-blue-500';
    
  const disabledClasses = disabled 
    ? 'bg-gray-50 text-gray-500 cursor-not-allowed' 
    : 'bg-white text-gray-900';

  const labelVariants = {
    initial: { y: 0, scale: 1 },
    focused: { 
      y: -24, 
      scale: 0.85,
      transition: { duration: 0.2, ease: "easeOut" }
    }
  };

  const hasValue = value && value.length > 0;
  const shouldFloatLabel = isFocused || hasValue;

  return (
    <div className={`relative ${className}`}>
      {label && (
        <motion.label
          className={`absolute left-4 text-gray-500 pointer-events-none transition-colors duration-200 ${
            isFocused ? 'text-blue-500' : ''
          } ${error ? 'text-red-500' : ''}`}
          variants={labelVariants}
          initial="initial"
          animate={shouldFloatLabel ? "focused" : "initial"}
          style={{
            top: shouldFloatLabel ? '0px' : '12px',
            backgroundColor: shouldFloatLabel ? 'white' : 'transparent',
            padding: shouldFloatLabel ? '0 4px' : '0',
            zIndex: 10
          }}
        >
          {label} {required && <span className="text-red-500">*</span>}
        </motion.label>
      )}
      
      <div className="relative">
        {leftIcon && (
          <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
            {leftIcon}
          </div>
        )}
        
        <motion.input
          type={type}
          value={value}
          onChange={onChange}
          placeholder={label ? '' : placeholder}
          required={required}
          disabled={disabled}
          className={`${baseClasses} ${stateClasses} ${disabledClasses} ${
            leftIcon ? 'pl-10' : ''
          } ${rightIcon ? 'pr-10' : ''}`}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          whileFocus={{ scale: 1.01 }}
          transition={{ duration: 0.2 }}
          {...props}
        />
        
        {rightIcon && (
          <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400">
            {rightIcon}
          </div>
        )}
      </div>
      
      {(error || helperText) && (
        <motion.p
          className={`mt-2 text-sm ${error ? 'text-red-500' : 'text-gray-500'}`}
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2 }}
        >
          {error || helperText}
        </motion.p>
      )}
    </div>
  );
};

export default Input; 