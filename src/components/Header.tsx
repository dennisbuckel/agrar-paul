'use client';

import Image from 'next/image';
import { useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="bg-gradient-to-r from-green-50 to-amber-50 shadow-lg sticky top-0 z-50 border-b-2 border-green-200">
      {/* Decorative top border */}
      <div className="h-1 bg-gradient-to-r from-green-600 via-amber-500 to-green-600"></div>
      
      <div className="container mx-auto px-4 py-6">
        <div className="flex items-center justify-between">
          {/* Logo - vergrößert */}
          <div className="flex items-center relative">
            {/* Decorative wheat elements */}
            <div className="absolute -left-4 top-1/2 transform -translate-y-1/2 text-amber-400 opacity-30">
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2L8 8h8l-4-6zm0 8L8 16h8l-4-6zm0 8L8 24h8l-4-6z"/>
              </svg>
            </div>
            
            <Image
              src="/images/logo/logo.png"
              alt="Landwirtschaftsbetrieb Paul"
              width={400}
              height={100}
              className="h-16 w-auto"
              priority
            />
            
            {/* Decorative leaf elements */}
            <div className="absolute -right-4 top-1/2 transform -translate-y-1/2 text-green-400 opacity-30">
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17,8C8,10 5.9,16.17 3.82,21.34L5.71,22L6.66,19.7C7.14,19.87 7.64,20 8,20C19,20 22,3 22,3C21,5 14,5.25 9,6.25C4,7.25 2,11.5 2,13.5C2,15.5 3.75,17.25 3.75,17.25C7,8 17,8 17,8Z"/>
              </svg>
            </div>
          </div>

          {/* Center decorative element */}
          <div className="hidden lg:flex items-center space-x-4 text-green-600 opacity-20">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M7,2V4H8V18A4,4 0 0,0 12,22A4,4 0 0,0 16,18V4H17V2H7M9,4H15V18A2,2 0 0,1 12,20A2,2 0 0,1 10,18V4H9Z"/>
            </svg>
            <div className="h-8 w-px bg-green-300"></div>
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12,2L8,8H16L12,2M12,10L8,16H16L12,10M12,18L8,24H16L12,18Z"/>
            </svg>
            <div className="h-8 w-px bg-green-300"></div>
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17,8C8,10 5.9,16.17 3.82,21.34L5.71,22L6.66,19.7C7.14,19.87 7.64,20 8,20C19,20 22,3 22,3C21,5 14,5.25 9,6.25C4,7.25 2,11.5 2,13.5C2,15.5 3.75,17.25 3.75,17.25C7,8 17,8 17,8Z"/>
            </svg>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <button
              onClick={() => scrollToSection('hero')}
              className="text-gray-700 hover:text-green-600 font-semibold transition-all duration-300 hover:scale-105 relative group"
            >
              Start
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-green-600 transition-all duration-300 group-hover:w-full"></span>
            </button>
            <button
              onClick={() => scrollToSection('services')}
              className="text-gray-700 hover:text-green-600 font-semibold transition-all duration-300 hover:scale-105 relative group"
            >
              Dienstleistungen
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-green-600 transition-all duration-300 group-hover:w-full"></span>
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-gray-700 hover:text-green-600 font-semibold transition-all duration-300 hover:scale-105 relative group"
            >
              Kontakt
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-green-600 transition-all duration-300 group-hover:w-full"></span>
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden flex flex-col space-y-1 p-2 rounded-lg hover:bg-green-100 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <span className={`w-6 h-0.5 bg-gray-700 transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
            <span className={`w-6 h-0.5 bg-gray-700 transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
            <span className={`w-6 h-0.5 bg-gray-700 transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-6 pb-4 border-t border-green-200 bg-white/80 backdrop-blur-sm rounded-lg">
            <div className="flex flex-col space-y-4 pt-4 px-4">
              <button
                onClick={() => scrollToSection('hero')}
                className="text-gray-700 hover:text-green-600 font-semibold transition-colors text-left py-2 hover:bg-green-50 rounded px-2"
              >
                Start
              </button>
              <button
                onClick={() => scrollToSection('services')}
                className="text-gray-700 hover:text-green-600 font-semibold transition-colors text-left py-2 hover:bg-green-50 rounded px-2"
              >
                Dienstleistungen
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="text-gray-700 hover:text-green-600 font-semibold transition-colors text-left py-2 hover:bg-green-50 rounded px-2"
              >
                Kontakt
              </button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
