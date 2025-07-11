import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../../assets/logo.svg";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const location = useLocation();

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLinkClick = () => {
    setIsMenuOpen(false);
    setActiveDropdown(null);
  };

  const isActiveLink = (path) => {
    return location.pathname === path;
  };

  const linkClasses = (path) => {
    const baseClasses = "text-white hover:text-blue-200 transition-all duration-200 font-medium text-[15px] relative py-2 px-3";
    const activeClasses = "text-blue-200 font-semibold";
    return isActiveLink(path) ? `${baseClasses} ${activeClasses}` : baseClasses;
  };

  const navigationItems = [
    { path: "/", label: "Home", hasDropdown: false },
    { 
      path: "/company", 
      label: "Company", 
      hasDropdown: true,
      dropdownItems: [
        { path: "/about", label: "About Us" },
        { path: "/team", label: "Team" },
        { path: "/testimonials", label: "Testimonials" },
        { path: "/international", label: "International Expansion" }
      ]
    },
    { 
      path: "/solutions", 
      label: "Our Solution", 
      hasDropdown: true,
      dropdownItems: [
        { path: "/robotics-lab", label: "Robotics Lab" },
        { path: "/ai-lab", label: "AI Lab" },
        { path: "/iot-lab", label: "IoT Lab" },
        { path: "/ar-vr-lab", label: "AR & VR Lab" }
      ]
    },
    { 
      path: "/resources", 
      label: "Resources", 
      hasDropdown: true,
      dropdownItems: [
        { path: "/blog", label: "Blog" },
        { path: "/case-studies", label: "Case Studies" },
        { path: "/downloads", label: "Downloads" }
      ]
    },
    { path: "/pm-shri-school", label: "PM Shri School", hasDropdown: false },
    { path: "/products", label: "Product", hasDropdown: false },
    { path: "/atal-tinkering-lab", label: "ATAL Tinkering Lab", hasDropdown: false },
    { path: "/impact", label: "IMPACT", hasDropdown: false },
    { path: "/sil", label: "SIL", hasDropdown: false },
    { path: "/contact", label: "Contact Us", hasDropdown: false },
  ];

  return (
    <motion.header
      className="bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 shadow-2xl sticky top-0 z-50 border-b border-blue-800/30 backdrop-blur-sm"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      style={{
        background: 'linear-gradient(135deg, #0f172a 0%, #1e3a8a 25%, #065f46 50%, #1e3a8a 75%, #0f172a 100%)',
        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.3), 0 0 40px rgba(59, 130, 246, 0.1)'
      }}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-14 sm:h-16">
          {/* Logo Section */}
          <motion.div 
            className="flex items-center"
            whileHover={{ scale: 1.02 }} 
            whileTap={{ scale: 0.98 }}
          >
            <Link to="/" className="flex items-center space-x-2">
              <motion.img
                src={logo}
                alt="ATLROBOLAB"
                className="h-8 sm:h-10 w-auto drop-shadow-lg"
                initial={{ rotate: 0 }}
                whileHover={{ rotate: 0, filter: "brightness(1.1)" }}
                transition={{ duration: 0.5 }}
              />
              
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navigationItems.map((item, index) => (
              <motion.div
                key={item.path}
                className="relative"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05, duration: 0.3 }}
                onMouseEnter={() => item.hasDropdown && setActiveDropdown(item.path)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link 
                  to={item.path} 
                  className={`${linkClasses(item.path)} flex items-center ${item.hasDropdown ? 'cursor-pointer' : ''} hover:bg-white/10 rounded-lg transition-all duration-200`}
                  onClick={handleLinkClick}
                >
                  {item.label}
                  {item.hasDropdown && (
                    <motion.svg
                      className="ml-1 h-3 w-3 text-blue-200"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      animate={{ rotate: activeDropdown === item.path ? 180 : 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </motion.svg>
                  )}
                </Link>

                {/* Dropdown Menu */}
                {item.hasDropdown && activeDropdown === item.path && (
                  <motion.div
                    className="absolute top-full left-0 mt-1 w-56 bg-white/95 backdrop-blur-md rounded-lg shadow-2xl border border-white/20 py-2"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    {item.dropdownItems.map((dropdownItem, dropdownIndex) => (
                      <motion.div
                        key={dropdownItem.path}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: dropdownIndex * 0.05 }}
                      >
                        <Link
                          to={dropdownItem.path}
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors duration-200"
                          onClick={handleLinkClick}
                        >
                          {dropdownItem.label}
                        </Link>
                      </motion.div>
                    ))}
                  </motion.div>
                )}
              </motion.div>
            ))}
          </nav>

          {/* Mobile menu button */}
          <motion.button
            className="lg:hidden relative p-2 w-8 h-8 sm:w-10 sm:h-10 flex flex-col justify-center items-center hover:bg-white/10 rounded-lg transition-colors"
            onClick={handleMenuToggle}
            aria-label="Toggle menu"
            whileTap={{ scale: 0.9 }}
          >
            <motion.span
              className="block h-0.5 w-5 sm:w-6 bg-white rounded-full"
              animate={{
                rotate: isMenuOpen ? 45 : 0,
                y: isMenuOpen ? 5 : 0,
              }}
              transition={{ duration: 0.3 }}
            />
            <motion.span
              className="block h-0.5 w-5 sm:w-6 bg-white rounded-full mt-1"
              animate={{
                opacity: isMenuOpen ? 0 : 1,
              }}
              transition={{ duration: 0.3 }}
            />
            <motion.span
              className="block h-0.5 w-5 sm:w-6 bg-white rounded-full mt-1"
              animate={{
                rotate: isMenuOpen ? -45 : 0,
                y: isMenuOpen ? -7 : 0,
              }}
              transition={{ duration: 0.3 }}
            />
          </motion.button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.nav
              className="lg:hidden border-t border-white/20 bg-black/20 backdrop-blur-md max-h-[70vh] overflow-y-auto"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              <motion.div
                className="py-2 space-y-0.5"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.1 }}
              >
                {navigationItems.map((item, index) => (
                  <motion.div
                    key={item.path}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.03 }}
                    className="rounded-lg"
                  >
                    <Link
                      to={item.path}
                      className={`block py-2 px-4 text-sm sm:text-base text-white hover:bg-white/10 rounded-lg transition-colors ${
                        isActiveLink(item.path) ? 'bg-blue-600/30 text-blue-200' : ''
                      }`}
                      onClick={handleLinkClick}
                    >
                      {item.label}
                    </Link>
                    
                    {/* Mobile Dropdown Items */}
                    {item.hasDropdown && (
                      <div className="pl-4 space-y-0.5">
                        {item.dropdownItems.map((dropdownItem) => (
                          <Link
                            key={dropdownItem.path}
                            to={dropdownItem.path}
                            className="block py-1.5 px-3 text-xs sm:text-sm text-blue-200 hover:text-white hover:bg-white/10 rounded"
                            onClick={handleLinkClick}
                          >
                            {dropdownItem.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </motion.div>
                ))}
              </motion.div>
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
};

export default Header;
