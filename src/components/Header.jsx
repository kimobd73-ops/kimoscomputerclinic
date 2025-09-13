import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, Phone, MapPin } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'glass-effect shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center space-x-3"
          >
            <img 
              src="https://horizons-cdn.hostinger.com/831491a5-e5d1-461a-9b35-83c1e465490e/9cf6e0ebbf0eae951d2d013c0d07619e.jpg"
              alt="Kimo's Computer Clinic Logo"
              className="h-12 w-auto rounded-lg shadow-md"
            />
            <div>
              <span className="text-xl font-bold gradient-text">Kimo's</span>
              <div className="text-sm text-gray-600">Computer Clinic</div>
            </div>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {['Home', 'About', 'Services', 'Mission', 'Team', 'Contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="text-gray-700 hover:text-red-600 font-medium transition-colors duration-200 relative group"
              >
                {item}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-red-600 transition-all duration-200 group-hover:w-full"></span>
              </button>
            ))}
          </nav>

          {/* Contact Info */}
          <div className="hidden lg:flex items-center space-x-4 text-sm">
            <div className="flex items-center space-x-1 text-gray-600">
              <Phone className="h-4 w-4" />
              <span>09459707013</span>
            </div>
            <div className="flex items-center space-x-1 text-gray-600">
              <MapPin className="h-4 w-4" />
              <span>San Pablo City</span>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white rounded-lg shadow-lg mt-2 p-4"
          >
            {['Home', 'About', 'Services', 'Mission', 'Team', 'Contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="block w-full text-left py-3 px-4 text-gray-700 hover:text-red-600 hover:bg-gray-50 rounded-lg transition-colors"
              >
                {item}
              </button>
            ))}
            <div className="border-t pt-4 mt-4">
              <div className="flex items-center space-x-2 text-gray-600 mb-2">
                <Phone className="h-4 w-4" />
                <span>09459707013</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-600">
                <MapPin className="h-4 w-4" />
                <span>San Pablo City, Laguna</span>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </motion.header>
  );
};

export default Header;