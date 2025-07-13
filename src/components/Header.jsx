import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useTheme } from '../contexts/ThemeContext';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiMenu, FiX, FiSun, FiMoon } = FiIcons;

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { isDark, toggleTheme } = useTheme();
  const location = useLocation();

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/story', label: 'Our Story' },
    { path: '/details', label: 'Details' },
    { path: '/gallery', label: 'Gallery' },
    { path: '/rsvp', label: 'RSVP' },
    { path: '/registry', label: 'Registry' },
    { path: '/guestbook', label: 'Guestbook' }
  ];

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="fixed top-0 left-0 right-0 z-50 glass-effect"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="text-2xl font-script font-bold text-harvest-orange dark:text-harvest-mustard">
            Harvest Moon
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-sm font-medium transition-colors duration-200 ${
                  location.pathname === item.path
                    ? 'text-harvest-orange dark:text-harvest-mustard'
                    : 'text-harvest-brown dark:text-harvest-cream hover:text-harvest-orange dark:hover:text-harvest-mustard'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center space-x-4">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full bg-harvest-orange/20 dark:bg-harvest-mustard/20 text-harvest-orange dark:text-harvest-mustard hover:bg-harvest-orange/30 dark:hover:bg-harvest-mustard/30 transition-colors duration-200"
              aria-label={isDark ? 'Switch to Golden Hour' : 'Switch to Bonfire Night'}
            >
              <SafeIcon icon={isDark ? FiSun : FiMoon} className="w-5 h-5" />
            </button>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-full bg-harvest-orange/20 dark:bg-harvest-mustard/20 text-harvest-orange dark:text-harvest-mustard"
              aria-label="Toggle menu"
            >
              <SafeIcon icon={isMenuOpen ? FiX : FiMenu} className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <motion.nav
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden py-4 border-t border-harvest-orange/20 dark:border-harvest-mustard/20"
          >
            <div className="flex flex-col space-y-2">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                    location.pathname === item.path
                      ? 'text-harvest-orange dark:text-harvest-mustard bg-harvest-orange/10 dark:bg-harvest-mustard/10'
                      : 'text-harvest-brown dark:text-harvest-cream hover:text-harvest-orange dark:hover:text-harvest-mustard hover:bg-harvest-orange/5 dark:hover:bg-harvest-mustard/5'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </motion.nav>
        )}
      </div>
    </motion.header>
  );
};

export default Header;