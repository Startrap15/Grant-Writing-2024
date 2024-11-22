import React from 'react';
import { Book } from 'lucide-react';

export default function Header() {
  return (
    <header className="fixed top-0 w-full bg-white z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Book className="h-8 w-8 text-[#4169E1]" />
            <span className="ml-2 text-xl font-bold text-gray-900">GrantCraft Pro</span>
            <img src="https://www.google.com/images/errors/logo_sm.gif" alt="Google" className="h-6 ml-4" />
            <div className="flex items-center ml-2">
              <span className="text-yellow-400">★★★★★</span>
              <span className="ml-1">5.0</span>
            </div>
          </div>
          
          <nav className="hidden md:flex space-x-8">
            <a href="#services" className="text-gray-700 hover:text-[#4169E1] transition-colors">Services</a>
            <a href="#about" className="text-gray-700 hover:text-[#4169E1] transition-colors">About</a>
            <a href="#resources" className="text-gray-700 hover:text-[#4169E1] transition-colors">Resources</a>
            <a href="#blog" className="text-gray-700 hover:text-[#4169E1] transition-colors">Blog</a>
            <a href="#contact" className="text-gray-700 hover:text-[#4169E1] transition-colors">Contact</a>
          </nav>

          <button className="bg-[#4169E1] text-white px-6 py-2 rounded-lg hover:bg-[#3154c4] transition-colors">
            Free Consultation
          </button>
        </div>
      </div>
    </header>
  );
}