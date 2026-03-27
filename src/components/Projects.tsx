import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { PROJECTS } from '../constants';
import { ArrowUpRight } from 'lucide-react';

interface ProjectsProps {
  onProjectClick: (project: any) => void;
}

export default function Projects({ onProjectClick }: ProjectsProps) {
  const [filter, setFilter] = useState('All');

  const categories = ['All', 'Typography', 'Research', 'Motion Design'];

  const filteredProjects = filter === 'All' 
    ? PROJECTS 
    : PROJECTS.filter(project => project.category === filter);

  return (
    <section id="projects" className="min-h-screen py-20 relative">
      <div className="container mx-auto px-8">
        
        {/* Heading */}
        <div className="flex items-center mb-12 relative pl-0 md:pl-20 lg:pl-36">
          <div className="absolute -top-16 left-0 hidden lg:block">
             <img 
               src="https://i.ibb.co/whQVYWGH/Screenshot-2026-02-21-at-22-51-03-removebg-preview.png" 
               className="w-32 h-32 object-contain opacity-80" 
               alt="Projects decorative"
             />
          </div>
          <div className="border-b-4 border-brand-red w-full pb-2 flex items-end justify-between">
             <h2 className="font-serif text-6xl text-brand-red">Projects</h2>
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
                <h3 className="font-sans text-brand-red text-lg tracking-widest uppercase mb-2 pl-2">
                  {project.id.replace(/-/g, ' ')}
                </h3>
                
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
