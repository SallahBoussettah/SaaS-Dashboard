import React, { useState, useRef, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const PublicNavigation: React.FC = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
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
  };
  
  return (
    <nav className="py-6 px-4 md:px-10 bg-white shadow-sm fixed top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <Link to="/" className="text-xl font-bold text-primary-600 mr-10">SaaS Dashboard</Link>
          <div className="hidden md:flex space-x-8">
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
        <div className="flex space-x-4">
          <Link to="/login" className="px-4 py-2 border border-primary-500 text-primary-600 rounded-md hover:bg-primary-50 transition-colors">
            Sign In
          </Link>
          <Link to="/register" className="px-4 py-2 bg-primary-600 text-white rounded-md hover:bg-primary-700 transition-colors">
            Get Started
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default PublicNavigation; 