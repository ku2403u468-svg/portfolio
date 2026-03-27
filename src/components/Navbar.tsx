import React from 'react';
import { PERSONAL_INFO } from '../constants';

interface NavbarProps {
  currentSection: string;
  onNavigate: (section: string) => void;
}

export default function Navbar({ currentSection, onNavigate }: NavbarProps) {
  return (
    <nav className="fixed top-0 left-0 right-0 z-[60] px-8 py-6 flex justify-between items-center bg-brand-cream/90 backdrop-blur-sm">
      <div 
        className="text-brand-red font-serif text-3xl font-bold cursor-pointer"
        onClick={() => onNavigate('home')}
      >
        {PERSONAL_INFO.initials}
      </div>
      <div className="flex gap-12">
        {['About', 'Projects', 'Contact'].map((item) => (
          <button
            key={item}
            onClick={() => onNavigate(item.toLowerCase())}
            className={`text-gray-800 font-sans text-lg hover:text-brand-red transition-colors ${
              currentSection === item.toLowerCase() ? 'border-b-2 border-brand-red' : ''
            }`}
          >
            {item}
          </button>
        ))}
      </div>
    </nav>
  );
}
