/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import ProjectDetail from './components/ProjectDetail';
import { AnimatePresence, motion } from 'motion/react';
import { GlobalScrollLines } from './components/Graphics';

import { PERSONAL_INFO } from './constants';

export default function App() {
  const [currentSection, setCurrentSection] = useState('home');
  const [selectedProject, setSelectedProject] = useState<any>(null);

  const handleNavigate = (section: string) => {
    setCurrentSection(section);
    setSelectedProject(null);
    
    // Allow time for the main view to render before scrolling
    setTimeout(() => {
      if (section === 'home') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        const element = document.getElementById(section);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        } else {
          // Fallback if element isn't found immediately (e.g. slow render)
          // Try one more time after a short delay
          setTimeout(() => {
             const retryElement = document.getElementById(section);
             if (retryElement) retryElement.scrollIntoView({ behavior: 'smooth' });
          }, 200);
        }
      }
    }, 300); // Increased delay to ensure AnimatePresence exit/enter completes
  };

  const handleProjectClick = (project: any) => {
    setSelectedProject(project);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-brand-cream text-gray-900 font-sans selection:bg-brand-red selection:text-white">
      <GlobalScrollLines />
      
      <Navbar currentSection={currentSection} onNavigate={handleNavigate} />

      <AnimatePresence mode="wait">
        {selectedProject ? (
          <motion.div key="project-detail" className="w-full">
            <ProjectDetail 
              project={selectedProject} 
              onBack={() => setSelectedProject(null)} 
            />
          </motion.div>
        ) : (
          <motion.main 
            key="main-content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div id="home">
              <Hero />
            </div>
            <About />
            <Projects onProjectClick={handleProjectClick} />
            <Contact />
          </motion.main>
        )}
      </AnimatePresence>
      
      <footer className="py-8 text-center text-brand-red/40 font-sans text-xs uppercase tracking-widest">
        © {new Date().getFullYear()} {PERSONAL_INFO.name}. All rights reserved.
      </footer>
    </div>
  );
}
