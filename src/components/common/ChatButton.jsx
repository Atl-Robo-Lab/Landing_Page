import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const ChatButton = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
  };

  const handleCallClick = () => {
    window.open('tel:1800120500400', '_self');
  };

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent('Hi! I would like to know more about ATLROBOLAB services.');
    window.open(`https://wa.me/1234567890?text=${message}`, '_blank');
  };

  return (
    <>
      {/* Backdrop Overlay */}
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 lg:hidden"
            onClick={toggleExpanded}
          />
        )}
      </AnimatePresence>

      {/* Chat Widget */}
      <div className="fixed bottom-4 right-4 lg:bottom-6 lg:right-6 z-50">
        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ 
                opacity: 0, 
                y: 20, 
                scale: 0.8
              }}
              animate={{ 
                opacity: 1, 
                y: 0, 
                scale: 1
              }}
              exit={{ 
                opacity: 0, 
                y: 20, 
                scale: 0.8
              }}
              transition={{ 
                duration: 0.3,
                ease: "easeOut"
              }}
              className="absolute bottom-16 right-0 bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden
                         w-64 sm:w-72 lg:w-96 max-w-[calc(100vw-2rem)]"
            >
              {/* Header */}
              <div className="bg-gradient-to-r from-green-500 to-emerald-600 text-white p-3 lg:p-4 relative">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2 lg:space-x-3">
                    <div className="w-8 h-8 lg:w-10 lg:h-10 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                      <span className="text-lg lg:text-xl">🤖</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-xs lg:text-sm">ATLROBOLAB Support</h3>
                      <div className="flex items-center space-x-1">
                        <div className="w-1.5 h-1.5 lg:w-2 lg:h-2 bg-green-300 rounded-full animate-pulse"></div>
                        <p className="text-xs text-green-100">Online now</p>
                      </div>
                    </div>
                  </div>
                  <motion.button
                    onClick={toggleExpanded}
                    className="w-7 h-7 lg:w-8 lg:h-8 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-all duration-200"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <svg className="w-3 h-3 lg:w-4 lg:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </motion.button>
                </div>
              </div>

              {/* Content */}
              <div className="p-3 lg:p-4 bg-gradient-to-b from-gray-50 to-white">
                <div className="space-y-2 lg:space-y-3">
                  {/* Call Button */}
                  <motion.button
                    onClick={handleCallClick}
                    className="w-full group bg-white hover:bg-blue-50 border border-gray-200 hover:border-blue-300 rounded-xl p-3 lg:p-4 transition-all duration-300 shadow-sm hover:shadow-md"
                    whileHover={{ scale: 1.02, y: -1 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <div className="flex items-center space-x-2 lg:space-x-3">
                      <div className="w-10 h-10 lg:w-12 lg:h-12 bg-gradient-to-br from-blue-100 to-blue-200 group-hover:from-blue-200 group-hover:to-blue-300 rounded-xl flex items-center justify-center transition-all duration-300">
                        <span className="text-lg lg:text-xl">📞</span>
                      </div>
                      <div className="flex-1 text-left">
                        <h4 className="font-semibold text-gray-900 text-xs lg:text-sm mb-0.5 lg:mb-1">Call Us Now</h4>
                        <p className="text-xs text-gray-600">Toll Free: 1800-120-500-400</p>
                        <p className="text-xs text-blue-600 font-medium">Instant support</p>
                      </div>
                      <div className="w-5 h-5 lg:w-6 lg:h-6 bg-blue-100 group-hover:bg-blue-200 rounded-full flex items-center justify-center transition-all duration-300">
                        <svg className="w-2.5 h-2.5 lg:w-3 lg:h-3 text-blue-600 group-hover:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    </div>
                  </motion.button>

                  {/* WhatsApp Button */}
                  <motion.button
                    onClick={handleWhatsAppClick}
                    className="w-full group bg-white hover:bg-green-50 border border-gray-200 hover:border-green-300 rounded-xl p-3 lg:p-4 transition-all duration-300 shadow-sm hover:shadow-md"
                    whileHover={{ scale: 1.02, y: -1 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <div className="flex items-center space-x-2 lg:space-x-3">
                      <div className="w-10 h-10 lg:w-12 lg:h-12 bg-gradient-to-br from-green-100 to-green-200 group-hover:from-green-200 group-hover:to-green-300 rounded-xl flex items-center justify-center transition-all duration-300">
                        <span className="text-lg lg:text-xl">💬</span>
                      </div>
                      <div className="flex-1 text-left">
                        <h4 className="font-semibold text-gray-900 text-xs lg:text-sm mb-0.5 lg:mb-1">WhatsApp Chat</h4>
                        <p className="text-xs text-gray-600">Chat with our experts</p>
                        <p className="text-xs text-green-600 font-medium">Quick responses</p>
                      </div>
                      <div className="w-5 h-5 lg:w-6 lg:h-6 bg-green-100 group-hover:bg-green-200 rounded-full flex items-center justify-center transition-all duration-300">
                        <svg className="w-2.5 h-2.5 lg:w-3 lg:h-3 text-green-600 group-hover:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    </div>
                  </motion.button>
                </div>

                {/* Footer Message */}
                <div className="mt-3 lg:mt-4 pt-2 lg:pt-3 border-t border-gray-200">
                  <div className="text-center">
                    <p className="text-xs text-gray-500 mb-0.5 lg:mb-1">💡 Need help choosing the right solution?</p>
                    <p className="text-xs text-gray-400">Our experts are ready to assist you!</p>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Main Floating Button */}
        <motion.button
          onClick={toggleExpanded}
          className="relative group bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden
                     w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16"
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ 
            delay: 0.5, 
            type: "spring", 
            stiffness: 200,
            damping: 15
          }}
          whileHover={{ scale: 1.1, y: -2 }}
          whileTap={{ scale: 0.95 }}
        >
          {/* Animated Background */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0"
            animate={{ x: [-200, 200] }}
            transition={{ duration: 3, repeat: Infinity, repeatDelay: 2 }}
          />
          
          {/* Button Content */}
          <div className="relative z-10 flex items-center justify-center w-full h-full">
            <motion.span 
              className="text-lg sm:text-xl lg:text-2xl"
              animate={{ 
                rotate: isExpanded ? 45 : 0,
                scale: isExpanded ? 0.8 : 1
              }}
              transition={{ duration: 0.3 }}
            >
              {isExpanded ? '✕' : '💬'}
            </motion.span>
          </div>

          {/* Pulse Ring */}
          {!isExpanded && (
            <motion.div
              className="absolute inset-0 rounded-full border-2 border-green-300"
              animate={{ 
                scale: [1, 1.5, 1],
                opacity: [0.8, 0, 0.8]
              }}
              transition={{ 
                duration: 2, 
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          )}

          {/* Notification Dot */}
          {!isExpanded && (
            <motion.div
              className="absolute -top-0.5 -right-0.5 sm:-top-1 sm:-right-1 w-2.5 h-2.5 sm:w-3 sm:h-3 lg:w-4 lg:h-4 bg-red-500 rounded-full border-2 border-white"
              animate={{ 
                scale: [1, 1.3, 1],
                opacity: [1, 0.7, 1]
              }}
              transition={{ 
                duration: 1.5, 
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          )}
        </motion.button>

        {/* Tooltip for Desktop */}
        {!isExpanded && (
          <div className="absolute bottom-full right-0 mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none hidden lg:block">
            <div className="bg-gray-800 text-white text-xs px-3 py-2 rounded-lg whitespace-nowrap">
              Need Help? Click to chat!
              <div className="absolute top-full right-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-800"></div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default ChatButton;