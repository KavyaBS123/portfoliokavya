import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import DarkModeToggle from './DarkModeToggle';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/projects', label: 'Projects' },
    { path: '/shorts', label: 'Shorts' },
    { path: '/events', label: 'Events' }
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      scrolled ? 'bg-white/80 dark:bg-black/80 backdrop-blur-md py-4' : 'bg-transparent py-6'
    }`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center space-x-8">
          <Link to="/" className="relative group">
            <img
              src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=400"
              alt="Profile"
              className="w-10 h-10 rounded-full object-cover transition-transform duration-300 group-hover:scale-110"
            />
            <div className="absolute inset-0 rounded-full ring-2 ring-purple-400 transition-transform duration-300 group-hover:scale-110" />
          </Link>
          <Link to="/" className="text-2xl font-bold text-gray-900 dark:text-white">
            Sarthak
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          {navItems.map(item => (
            <Link
              key={item.path}
              to={item.path}
              className={`hover:text-purple-400 transition-colors ${
                location.pathname === item.path ? 'text-purple-400' : 'text-gray-900 dark:text-white'
              }`}
            >
              {item.label}
            </Link>
          ))}
          <DarkModeToggle />
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center space-x-4">
          <DarkModeToggle />
          <button 
            className="text-gray-900 dark:text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-white dark:bg-black z-40 pt-20">
          <div className="flex flex-col items-center space-y-8 p-8">
            {navItems.map(item => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setIsMenuOpen(false)}
                className={`text-xl ${
                  location.pathname === item.path ? 'text-purple-400' : 'text-gray-900 dark:text-white'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}