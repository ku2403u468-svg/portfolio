import React from 'react';
import { motion } from 'motion/react';
import { ArrowLeft } from 'lucide-react';
import FlipBook from './FlipBook';

interface ProjectDetailProps {
  project: any;
  onBack: () => void;
}

export default function ProjectDetail({ project, onBack }: ProjectDetailProps) {
  return (
    <motion.div 
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 100 }}
      className="min-h-screen bg-brand-cream py-20 px-8 relative z-50"
    >
      <button 
        onClick={onBack}
        className="fixed top-24 left-8 z-50 flex items-center text-brand-red hover:text-brand-green transition-colors"
      >
        <ArrowLeft className="mr-2" /> Back to Projects
      </button>

      <div className="container mx-auto max-w-5xl mt-12">
        {/* Header */}
        <div className="mb-20">
          <h1 className="font-serif text-5xl text-brand-red mb-4">{project.title}</h1>
          <p className="font-sans text-brand-red/60 uppercase tracking-widest text-sm">{project.category}</p>
        </div>

        {/* Content Sections */}
        <div className="space-y-24">
          
          {/* Overview Section */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            <div className="md:col-span-3">
              <h3 className="font-sans text-brand-red uppercase tracking-widest text-sm font-semibold">Overview</h3>
            </div>
            <div className="md:col-span-9 flex flex-col md:flex-row gap-8 items-start">
               <p className="font-serif text-xl leading-relaxed text-gray-700 flex-1">
                 {project.overview}
               </p>
               <div className="border border-brand-red/20 p-2 w-full md:w-1/2 shrink-0 bg-white shadow-sm rounded-sm">
                  <img src={project.image} alt="Overview" className="w-full h-auto object-contain max-h-[60vh]" />
               </div>
            </div>
          </div>

          {/* Concept Section */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            <div className="md:col-span-3">
              <h3 className="font-sans text-brand-red uppercase tracking-widest text-sm font-semibold">Concept</h3>
            </div>
            <div className="md:col-span-9">
              <p className="font-serif text-xl leading-relaxed text-gray-700">
                {project.concept}
              </p>
            </div>
          </div>

          {/* Process Section */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            <div className="md:col-span-3">
              <h3 className="font-sans text-brand-red uppercase tracking-widest text-sm font-semibold">Process</h3>
            </div>
            <div className="md:col-span-9 space-y-12">
               {project.processImages && project.processImages.map((img: string, index: number) => (
                 <div key={index} className="border-2 border-brand-red/20 p-4 bg-white shadow-sm rounded-sm aspect-video overflow-hidden">
                   <img src={img} alt={`Process ${index + 1}`} className="w-full h-full object-cover" />
                 </div>
               ))}
            </div>
          </div>

          {/* Outcomes Section */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            <div className="md:col-span-3">
              <h3 className="font-sans text-brand-red uppercase tracking-widest text-sm font-semibold">Outcomes</h3>
            </div>
            <div className="md:col-span-9 flex flex-col md:flex-row gap-8 items-start">
              <div className="flex-1 space-y-8">
                <p className="font-serif text-xl leading-relaxed text-gray-700">
                  {project.outcomeText}
                </p>
                {project.flipbookIframe ? (
                  <div className="w-full flex justify-center py-4">
                    <iframe 
                      style={{ width: '550px', height: '350px' }} 
                      src={project.flipbookIframe} 
                      seamless={true} 
                      scrolling="no" 
                      frameBorder="0" 
                      allowTransparency={true} 
                      allowFullScreen={true}
                      className="shadow-2xl rounded-sm"
                    ></iframe>
                  </div>
                ) : project.flipbookImages && (
                  <div className="w-full flex justify-center py-4">
                    <FlipBook images={project.flipbookImages} />
                  </div>
                )}
                {project.video && (
                  <div className="w-full border-2 border-brand-red/20 p-2 bg-white shadow-sm rounded-sm overflow-hidden">
                    <div className="relative w-full" style={{ paddingBottom: '70.78%' }}>
                      <iframe 
                        src={project.video} 
                        className="absolute top-0 left-0 w-full h-full"
                        frameBorder="0" 
                        allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share" 
                        referrerPolicy="strict-origin-when-cross-origin"
                        title={project.title}
                      ></iframe>
                    </div>
                  </div>
                )}
              </div>
              {!project.video && project.outcomeImage && (
                <div className="border border-brand-red/20 p-2 w-full md:w-1/2 shrink-0 bg-white shadow-sm rounded-sm">
                   <img src={project.outcomeImage} alt="Outcome" className="w-full h-auto object-contain max-h-[60vh]" />
                </div>
              )}
            </div>
          </div>

           {/* Tools Used Section */}
           <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            <div className="md:col-span-3">
              <h3 className="font-sans text-brand-red uppercase tracking-widest text-sm font-semibold">Tools used</h3>
            </div>
            <div className="md:col-span-9 flex gap-4">
               {project.tools && project.tools.map((tool: string) => (
                 <span key={tool} className="text-gray-500 font-mono text-sm border-b border-gray-300 pb-1">{tool}</span>
               ))}
            </div>
          </div>

        </div>
      </div>
    </motion.div>
  );
}
