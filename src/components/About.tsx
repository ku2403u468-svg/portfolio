import React from 'react';
import { motion } from 'motion/react';
import { SKILLS } from '../constants';

export default function About() {
  return (
    <section id="about" className="min-h-screen py-20 relative overflow-hidden">
      <div className="container mx-auto px-8">
        {/* Heading */}
        <div className="flex items-end mb-16 relative pl-36">
          <div className="absolute -top-16 left-0">
             <img 
               src="https://i.ibb.co/Pv4D9VnX/Screenshot-2026-02-21-at-22-50-54-removebg-preview.png" 
               className="w-32 h-32 object-contain opacity-80" 
             />
          </div>
          <span className="text-brand-green text-6xl mr-4 font-serif">.</span>
          <div className="border-b-4 border-brand-red w-full pb-2 flex items-end justify-between">
             <h2 className="font-serif text-6xl text-brand-red">About</h2>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-16">
          {/* Left - Graphic Removed */}
          
          {/* Right - Content */}
          <div className="w-full space-y-12">
            
            {/* Soft Skills */}
            <div>
              <h3 className="font-serif text-2xl text-brand-red mb-6 italic">Soft Skills</h3>
              <div className="flex flex-wrap gap-4">
                {SKILLS.soft.map((skill) => (
                  <span key={skill.name} className="px-4 py-2 border border-brand-green/50 rounded-full text-gray-700 font-sans text-sm hover:bg-brand-green/10 transition-colors">
                    {skill.name}
                  </span>
                ))}
              </div>
            </div>

            {/* Technical Skills */}
            <div>
              <h3 className="font-serif text-2xl text-brand-red mb-6 italic">Technical Skills</h3>
              <div className="flex flex-wrap gap-4">
                {SKILLS.technical.map((skill) => (
                  <span key={skill.name} className="px-4 py-2 border border-brand-red/50 rounded-full text-gray-700 font-sans text-sm hover:bg-brand-red/10 transition-colors">
                    {skill.name}
                  </span>
                ))}
              </div>
            </div>

             {/* Software Skills */}
             <div>
              <h3 className="font-serif text-2xl text-brand-red mb-6 italic">Software</h3>
              <div className="flex flex-wrap gap-4">
                {SKILLS.software.map((skill) => (
                  <span key={skill.name} className="px-4 py-2 border border-brand-yellow rounded-full text-gray-700 font-sans text-sm hover:bg-brand-yellow/20 transition-colors">
                    {skill.name}
                  </span>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
