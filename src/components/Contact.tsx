import React from 'react';
import { PERSONAL_INFO } from '../constants';

export default function Contact() {
  return (
    <section id="contact" className="min-h-[80vh] py-20 relative">
      <div className="container mx-auto px-8">
        
        {/* Heading */}
        <div className="flex items-center mb-20 relative">
          <div className="absolute -top-4 left-0">
             <img 
               src="https://i.ibb.co/RGb1pccc/Screenshot-2026-02-21-at-22-51-10-removebg-preview.png" 
               className="w-48 h-48 object-contain opacity-40" 
             />
          </div>
          <div className="ml-52 border-b-4 border-brand-red w-full pb-2 flex items-end justify-between">
             <h2 className="font-serif text-6xl text-brand-red">Contact</h2>
          </div>
        </div>

        <div className="max-w-2xl mx-auto mt-20 text-center">
          <p className="font-serif text-3xl text-gray-700 mb-8 italic">
            Let's create something beautiful together.
          </p>
          
          <div className="space-y-6 font-sans text-lg">
            <p>
              <span className="text-brand-red font-bold mr-2">Email:</span>
              <a href={`mailto:${PERSONAL_INFO.email}`} className="text-brand-red underline decoration-2 underline-offset-4 hover:text-brand-green hover:decoration-brand-green transition-colors font-semibold">
                {PERSONAL_INFO.email}
              </a>
            </p>
            
            <div className="flex justify-center gap-8 mt-12 pt-12 border-t border-brand-red/20">
              {Object.entries(PERSONAL_INFO.socials).map(([platform, link]) => (
                <a 
                  key={platform} 
                  href={link} 
                  className="text-gray-500 hover:text-brand-red uppercase tracking-widest text-sm transition-colors"
                >
                  {platform}
                </a>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
