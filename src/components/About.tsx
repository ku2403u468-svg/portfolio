import React from 'react';
import { motion } from 'motion/react';
import { SKILLS } from '../constants';

export default function About() {
  return (
    <section id="about" className="min-h-screen py-20 relative">
      {/* Soft Ambient Glow on the Right Side */}
      <div className="absolute top-1/4 -right-20 w-80 sm:w-96 h-80 bg-gradient-to-bl from-brand-orange/20 via-brand-yellow/20 to-transparent rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-10 w-64 h-64 bg-brand-green/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="container mx-auto px-8">
        {/* Heading */}
        <div className="flex items-end mb-16 relative">
          <div className="border-b-4 border-brand-red w-full pb-2 flex items-end justify-between relative">
             {/* Organic Soft Continuous Gradient Glow behind Heading that freely blends upwards into hero */}
             <div className="absolute -top-32 -left-16 w-[32rem] sm:w-[42rem] h-64 bg-gradient-to-br from-brand-orange/25 via-brand-yellow/25 to-transparent rounded-full blur-3xl pointer-events-none -z-10" />
             <h2 className="font-serif text-6xl text-brand-red relative z-10">About</h2>
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
