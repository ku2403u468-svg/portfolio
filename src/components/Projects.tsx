import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { PROJECTS } from '../constants';
import { ArrowUpRight } from 'lucide-react';

interface ProjectsProps {
  onProjectClick: (project: any) => void;
}

export default function Projects({ onProjectClick }: ProjectsProps) {
  const [filter, setFilter] = useState('All');

  const categories = ['All', ...Array.from(new Set(PROJECTS.map(project => project.category)))];

  const filteredProjects = filter === 'All' 
    ? PROJECTS 
    : PROJECTS.filter(project => project.category === filter);

  return (
    <section id="projects" className="min-h-screen py-20 relative">
      {/* Soft Ambient Glow on the Right Side */}
      <div className="absolute top-1/4 -right-16 w-80 sm:w-[28rem] h-80 bg-gradient-to-l from-brand-orange/20 via-brand-yellow/15 to-transparent rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-1/4 -right-10 w-72 h-72 bg-gradient-to-bl from-brand-red/15 via-brand-yellow/10 to-transparent rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="container mx-auto px-8">
        
        {/* Heading */}
        <div className="flex items-center mb-12 relative">
          <div className="border-b-4 border-brand-red w-full pb-2 flex items-end justify-between relative">
             {/* Subtle Soft Continuous Gradient Glow behind Heading */}
             <div className="absolute -top-12 -left-10 w-96 sm:w-[32rem] h-36 bg-gradient-to-r from-brand-orange/30 via-brand-yellow/30 to-brand-orange/15 rounded-full blur-3xl pointer-events-none -z-10" />
             <h2 className="font-serif text-6xl text-brand-red relative z-10">Projects</h2>
          </div>
        </div>

        {/* Filter Menu */}
        <div className="flex flex-wrap gap-4 mb-12 justify-center">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-6 py-2 rounded-full border transition-all font-sans tracking-wide ${
                filter === category 
                  ? 'bg-brand-red text-white border-brand-red' 
                  : 'bg-transparent text-brand-red border-brand-red hover:bg-brand-red/10'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                layout
                key={project.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                onClick={() => onProjectClick(project)}
                className="cursor-pointer group"
              >
                <div className="flex items-baseline justify-between mb-2 px-1 gap-2">
                  <h3 className="font-sans text-brand-red text-base md:text-lg tracking-wider uppercase font-semibold whitespace-nowrap">
                    {project.title}
                  </h3>
                  {project.date && (
                    <span className="font-mono text-brand-red text-xs md:text-sm font-semibold tracking-widest uppercase whitespace-nowrap">
                      {project.date}
                    </span>
                  )}
                </div>
                
                {/* Double Border Card */}
                <div className="relative">
                  {/* Back Border (Yellow) */}
                  <div className="absolute top-2 left-2 w-full h-64 border border-brand-yellow z-0 transition-transform group-hover:translate-x-2 group-hover:translate-y-2"></div>
                  
                  {/* Front Border (Red/Orange) */}
                  <div className="relative w-full h-64 border border-brand-red/50 bg-brand-cream z-10 flex items-center justify-center overflow-hidden hover:border-brand-red transition-colors">
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity absolute inset-0 flex flex-col items-center justify-center p-4 text-center z-20 bg-black/10 backdrop-blur-[2px]">
                      <div className="bg-brand-red text-white p-4 rounded-full shadow-xl transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                        <ArrowUpRight size={32} strokeWidth={2.5} />
                      </div>
                    </div>
                    <img src={project.image} alt={project.title} className="w-full h-full object-cover z-10" />
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
}
