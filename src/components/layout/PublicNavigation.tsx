import React, { useState, useRef, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const PublicNavigation: React.FC = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const location = useLocation();
  const isHomePage = location.pathname === '/';
  
  // Handle clicks outside the dropdown to close it
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    }
    
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);
  
  // Close dropdown after navigation
  const handleLinkClick = () => {
    setIsDropdownOpen(false);
    setMobileMenuOpen(false);
  };

  return (
    <nav className="py-3 sm:py-6 px-3 sm:px-10 bg-white shadow-sm fixed top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center">
        <div className="flex items-center">
          <Link to="/" className="text-lg sm:text-xl font-bold text-primary-600 mr-6">SaaS Dashboard</Link>
          <div className="hidden md:flex space-x-6">
            <a href={isHomePage ? "#features" : "/#features"} className="text-gray-600 hover:text-primary-600 transition-colors">
              Features
            </a>
            <Link to="/integrations" className="text-gray-600 hover:text-primary-600 transition-colors">
              Integrations
            </Link>
            <a href={isHomePage ? "#pricing" : "/#pricing"} className="text-gray-600 hover:text-primary-600 transition-colors">
              Pricing
            </a>
            <Link to="/documentation" className="text-gray-600 hover:text-primary-600 transition-colors">
              Docs
            </Link>
            <Link to="/release-notes" className="text-gray-600 hover:text-primary-600 transition-colors">
              Releases
            </Link>
            <div ref={dropdownRef} className="relative">
              <button 
                className="text-gray-600 hover:text-primary-600 transition-colors flex items-center"
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              >
                Company
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {isDropdownOpen && (
                <div className="absolute left-0 top-full mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                  <div className="py-1">
                    <Link to="/about" onClick={handleLinkClick} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">About</Link>
                    <Link to="/careers" onClick={handleLinkClick} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Careers</Link>
                    <Link to="/blog" onClick={handleLinkClick} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Blog</Link>
                    <Link to="/press" onClick={handleLinkClick} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Press</Link>
                    <Link to="/contact" onClick={handleLinkClick} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Contact</Link>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="flex gap-2 md:gap-4">
          <div className="hidden sm:flex">
            <Link to="/login" className="px-3 py-2 text-sm border border-primary-500 text-primary-600 rounded-md hover:bg-primary-50 transition-colors">
              Sign In
            </Link>
          </div>
          <Link to="/register" className="px-3 py-2 text-sm bg-primary-600 text-white rounded-md hover:bg-primary-700 transition-colors">
            Get Started
          </Link>
          
          {/* Mobile menu button */}
          <button 
            type="button"
            className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-primary-600 hover:bg-gray-50"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <span className="sr-only">Open main menu</span>
            {mobileMenuOpen ? (
              <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>
      
      {/* Mobile menu */}
      <div className={`md:hidden ${mobileMenuOpen ? 'block' : 'hidden'} mt-2 pt-2 border-t border-gray-200`}>
        <div className="px-2 space-y-1">
          <a
            href={isHomePage ? "#features" : "/#features"}
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-primary-600 hover:bg-gray-50"
            onClick={handleLinkClick}
          >
            Features
          </a>
          <Link
            to="/integrations"
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-primary-600 hover:bg-gray-50"
            onClick={handleLinkClick}
          >
            Integrations
          </Link>
          <a
            href={isHomePage ? "#pricing" : "/#pricing"}
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-primary-600 hover:bg-gray-50"
            onClick={handleLinkClick}
          >
            Pricing
          </a>
          <Link
            to="/documentation"
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-primary-600 hover:bg-gray-50"
            onClick={handleLinkClick}
          >
            Docs
          </Link>
          <Link
            to="/release-notes"
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-primary-600 hover:bg-gray-50"
            onClick={handleLinkClick}
          >
            Releases
          </Link>
          
          {/* Company submenu in mobile view */}
          <div className="relative">
            <button
              type="button"
              className="w-full flex items-center justify-between px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-primary-600 hover:bg-gray-50"
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            >
              <span>Company</span>
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className={`h-5 w-5 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} 
                viewBox="0 0 20 20" 
                fill="currentColor"
              >
                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </button>
            
            {isDropdownOpen && (
              <div className="mt-1 pl-4 space-y-1">
                <Link
                  to="/about"
                  className="block px-3 py-2 rounded-md text-sm font-medium text-gray-600 hover:text-primary-600 hover:bg-gray-50"
                  onClick={handleLinkClick}
                >
                  About
                </Link>
                <Link
                  to="/careers"
                  className="block px-3 py-2 rounded-md text-sm font-medium text-gray-600 hover:text-primary-600 hover:bg-gray-50"
                  onClick={handleLinkClick}
                >
                  Careers
                </Link>
                <Link
                  to="/blog"
                  className="block px-3 py-2 rounded-md text-sm font-medium text-gray-600 hover:text-primary-600 hover:bg-gray-50"
                  onClick={handleLinkClick}
                >
                  Blog
                </Link>
                <Link
                  to="/press"
                  className="block px-3 py-2 rounded-md text-sm font-medium text-gray-600 hover:text-primary-600 hover:bg-gray-50"
                  onClick={handleLinkClick}
                >
                  Press
                </Link>
                <Link
                  to="/contact"
                  className="block px-3 py-2 rounded-md text-sm font-medium text-gray-600 hover:text-primary-600 hover:bg-gray-50"
                  onClick={handleLinkClick}
                >
                  Contact
                </Link>
              </div>
            )}
          </div>
          
          {/* Sign in link for mobile */}
          <div className="sm:hidden">
            <Link
              to="/login"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-primary-600 hover:bg-gray-50"
              onClick={handleLinkClick}
            >
              Sign In
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default PublicNavigation; 