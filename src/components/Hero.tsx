import React from 'react';
import { motion } from 'motion/react';
import { ArrowDown, ArrowUpRight, Sparkles } from 'lucide-react';
import { PERSONAL_INFO } from '../constants';

export default function Hero() {
  const handleScrollToProjects = () => {
    const element = document.getElementById('projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const disciplines = [
    'Typography',
    'Editorial Design',
    'Branding',
    'Motion Design',
    'Film'
  ];

  return (
    <section className="min-h-screen pt-28 sm:pt-32 pb-16 px-6 sm:px-12 lg:px-20 relative flex flex-col justify-between bg-brand-cream">
      
      {/* Decorative Organic Ambient Glows */}
      <div className="absolute top-1/4 -left-20 w-80 h-80 bg-brand-yellow/25 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-1/3 right-4 sm:right-12 w-80 sm:w-96 h-80 bg-gradient-to-bl from-brand-orange/20 via-brand-yellow/20 to-transparent rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute -top-10 right-1/4 w-72 h-72 bg-brand-red/10 rounded-full blur-3xl pointer-events-none -z-10" />

      {/* Main Hero Container */}
      <div className="container mx-auto my-auto py-8">
        <div className="max-w-4xl space-y-8">
          
          {/* Tagline / Subtitle */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="flex items-center gap-3"
          >
            <span className="w-2.5 h-2.5 rounded-full bg-brand-orange animate-pulse" />
            <span className="font-mono text-xs sm:text-sm font-semibold uppercase tracking-[0.25em] text-brand-orange">
              Communication Designer
            </span>
          </motion.div>

          {/* Main Headline */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="space-y-2 relative inline-block"
          >
            {/* Soft Subtle Gradient Glow Behind Name */}
            <div 
              className="absolute -top-10 -left-10 w-72 sm:w-96 h-36 sm:h-44 bg-gradient-to-r from-brand-orange/30 via-brand-yellow/35 to-brand-red/15 rounded-full blur-3xl pointer-events-none -z-10"
            />
            <h1 className="font-serif text-5xl sm:text-7xl lg:text-8xl font-normal leading-[0.95] text-brand-red tracking-tight relative z-10">
              Ananthula <br />
              <span className="italic font-light text-brand-orange">Thanvi</span>
            </h1>
          </motion.div>

          {/* Guiding Statement */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="max-w-2xl"
          >
            <p className="font-serif italic text-2xl sm:text-3xl text-gray-800 leading-snug">
              “I like turning stories, ideas and visual details into <span className="text-brand-red font-normal not-italic underline decoration-brand-yellow decoration-4 underline-offset-4">experiences</span>.”
            </p>
          </motion.div>

          {/* Disciplines Chips */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.45 }}
            className="flex flex-wrap gap-2.5 pt-2"
          >
            {disciplines.map((item) => (
              <span
                key={item}
                className="px-3.5 py-1.5 rounded-full border border-brand-orange/40 bg-brand-orange/5 text-gray-800 text-xs sm:text-sm font-sans tracking-wide transition-all hover:bg-brand-orange/15 hover:border-brand-orange"
              >
                {item}
              </span>
            ))}
          </motion.div>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-wrap items-center gap-5 pt-4"
          >
            <button
              onClick={handleScrollToProjects}
              className="group px-7 py-3.5 rounded-full bg-brand-red text-white font-sans text-sm font-medium tracking-wider uppercase transition-all shadow-lg hover:bg-brand-orange hover:shadow-xl flex items-center gap-2.5 cursor-pointer"
            >
              <span>View Projects</span>
              <ArrowDown size={16} className="transition-transform group-hover:translate-y-1" />
            </button>

            <a
              href="#about"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="px-7 py-3.5 rounded-full border-2 border-brand-red/40 text-brand-red font-sans text-sm font-medium tracking-wider uppercase transition-all hover:border-brand-red hover:bg-brand-red/5 flex items-center gap-2"
            >
              <span>About Me</span>
            </a>
          </motion.div>

        </div>
      </div>

    </section>
  );
}
