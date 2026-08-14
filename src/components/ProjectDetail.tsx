import React from 'react';
import { motion } from 'motion/react';
import { ArrowLeft } from 'lucide-react';
import FlipBook from './FlipBook';
import LouiseFiliEditorial from './LouiseFiliEditorial';
import IsItThatSimpleFilm from './IsItThatSimpleFilm';
import GodOfSmallThingsLiterary from './GodOfSmallThingsLiterary';
import SleepyOwlKinetic from './SleepyOwlKinetic';
import { PROJECTS } from '../constants';

interface ProjectDetailProps {
  project: any;
  onBack: () => void;
  onSelectProject?: (project: any) => void;
}

export default function ProjectDetail({ project, onBack, onSelectProject }: ProjectDetailProps) {
  const handleSelectProject = (proj: any) => {
    if (onSelectProject) {
      if (typeof proj === 'string') {
        const found = PROJECTS.find(p => p.id === proj);
        if (found) onSelectProject(found);
      } else if (proj?.id) {
        const found = PROJECTS.find(p => p.id === proj.id);
        if (found) onSelectProject(found);
        else onSelectProject(proj);
      } else {
        onSelectProject(proj);
      }
    }
  };

  if (project?.id === 'louise-fili') {
    return <LouiseFiliEditorial project={project} onBack={onBack} />;
  }

  if (project?.id === 'is-it-that-simple') {
    return (
      <IsItThatSimpleFilm 
        project={project} 
        onBack={onBack} 
        onSelectProject={handleSelectProject} 
      />
    );
  }

  if (project?.id === 'god-of-small-things') {
    return (
      <GodOfSmallThingsLiterary 
        project={project} 
        onBack={onBack} 
        onSelectProject={handleSelectProject} 
      />
    );
  }

  if (project?.id === 'sleepy-owl-motion') {
    return (
      <SleepyOwlKinetic 
        project={project} 
        onBack={onBack} 
        onSelectProject={handleSelectProject} 
      />
    );
  }

  return (
    <motion.div 
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 100 }}
      className="min-h-screen bg-brand-cream py-20 px-8 relative z-50"
    >
      <button 
        onClick={onBack}
        className="fixed top-24 left-4 md:left-8 z-50 flex items-center text-brand-red hover:text-brand-green transition-colors bg-brand-cream/80 backdrop-blur-sm p-2 rounded-md md:bg-transparent md:p-0"
      >
        <ArrowLeft className="mr-2" /> <span className="hidden md:inline">Back to Projects</span>
      </button>

      <div className="container mx-auto max-w-5xl mt-20 md:mt-12">
        {/* Header */}
        <div className="mb-12 md:mb-20">
          <h1 className="font-serif text-4xl md:text-5xl text-brand-red mb-4">
            {project.title}
            {project.date && <span className="font-sans text-2xl md:text-3xl text-brand-red/70 font-light ml-3">— {project.date}</span>}
          </h1>
          <p className="font-sans text-brand-red/60 uppercase tracking-widest text-sm">{project.category}</p>
        </div>

        {/* Content Sections */}
        <div className="space-y-20">
          
          {/* Overview Section */}
          {project.overview && (
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
              <div className="md:col-span-3">
                <h3 className="font-sans text-brand-red uppercase tracking-widest text-sm font-semibold">Overview</h3>
              </div>
              <div className="md:col-span-9 flex flex-col md:flex-row gap-8 items-start">
                 <p className="font-serif text-xl leading-relaxed text-gray-700 flex-1">
                   {project.overview}
                 </p>
                 {project.image && (
                   <div className="border border-brand-red/20 p-2 w-full md:w-1/2 shrink-0 bg-white shadow-sm rounded-sm">
                      <img src={project.image} alt="Overview" className="w-full h-auto object-contain max-h-[60vh]" />
                   </div>
                 )}
              </div>
            </div>
          )}

          {/* Problem Statement Section */}
          {project.problemStatement && (
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
              <div className="md:col-span-3">
                <h3 className="font-sans text-brand-red uppercase tracking-widest text-sm font-semibold">Problem Statement</h3>
              </div>
              <div className="md:col-span-9">
                <p className="font-serif text-xl leading-relaxed text-gray-700">
                  {project.problemStatement}
                </p>
              </div>
            </div>
          )}

          {/* Objectives Section */}
          {project.objectives && (
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
              <div className="md:col-span-3">
                <h3 className="font-sans text-brand-red uppercase tracking-widest text-sm font-semibold">Objectives</h3>
              </div>
              <div className="md:col-span-9">
                {Array.isArray(project.objectives) ? (
                  <ul className="list-disc list-inside space-y-2 font-serif text-xl text-gray-700">
                    {project.objectives.map((obj: string, i: number) => (
                      <li key={i}>{obj}</li>
                    ))}
                  </ul>
                ) : (
                  <p className="font-serif text-xl leading-relaxed text-gray-700">{project.objectives}</p>
                )}
              </div>
            </div>
          )}

          {/* Brief Section */}
          {project.brief && (
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
              <div className="md:col-span-3">
                <h3 className="font-sans text-brand-red uppercase tracking-widest text-sm font-semibold">Brief</h3>
              </div>
              <div className="md:col-span-9">
                <p className="font-serif text-xl leading-relaxed text-gray-700">
                  {project.brief}
                </p>
              </div>
            </div>
          )}

          {/* Target Audience Section */}
          {project.targetAudience && (
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
              <div className="md:col-span-3">
                <h3 className="font-sans text-brand-red uppercase tracking-widest text-sm font-semibold">Target Audience</h3>
              </div>
              <div className="md:col-span-9">
                {Array.isArray(project.targetAudience) ? (
                  <ul className="list-disc list-inside space-y-2 font-serif text-xl text-gray-700">
                    {project.targetAudience.map((item: string, i: number) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                ) : (
                  <p className="font-serif text-xl leading-relaxed text-gray-700">{project.targetAudience}</p>
                )}
              </div>
            </div>
          )}

          {/* Research & Insights Section */}
          {project.researchInsights && (
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
              <div className="md:col-span-3">
                <h3 className="font-sans text-brand-red uppercase tracking-widest text-sm font-semibold">Research & Insights</h3>
              </div>
              <div className="md:col-span-9">
                <p className="font-serif text-xl leading-relaxed text-gray-700">
                  {project.researchInsights}
                </p>
              </div>
            </div>
          )}

          {/* Concept Section */}
          {project.concept && (
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
          )}

          {/* Ideation & Exploration Section */}
          {(project.ideationExploration || project.ideationPoints || project.ideationImage) && (
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
              <div className="md:col-span-3">
                <h3 className="font-sans text-brand-red uppercase tracking-widest text-sm font-semibold">Ideation & Exploration</h3>
              </div>
              <div className="md:col-span-9 space-y-6">
                {project.ideationExploration && (
                  <p className="font-serif text-xl leading-relaxed text-gray-700">
                    {project.ideationExploration}
                  </p>
                )}
                {project.ideationPoints && (
                  <ul className="list-disc list-inside space-y-2 font-serif text-xl text-gray-700">
                    {project.ideationPoints.map((pt: string, i: number) => (
                      <li key={i}>{pt}</li>
                    ))}
                  </ul>
                )}
                {project.ideationImage && (
                  <div className="border border-brand-red/30 bg-white p-2.5 rounded-sm shadow-sm overflow-hidden w-full max-w-xl aspect-[16/9] flex items-center justify-center">
                    <img src={project.ideationImage} alt="Ideation & Exploration" className="w-full h-full object-cover rounded-sm" />
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Design Decisions Section */}
          {(project.designDecisions || project.designDecisionsImage) && (
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
              <div className="md:col-span-3">
                <h3 className="font-sans text-brand-red uppercase tracking-widest text-sm font-semibold">Design Decisions</h3>
              </div>
              <div className="md:col-span-9 space-y-6">
                {typeof project.designDecisions === 'object' && !Array.isArray(project.designDecisions) ? (
                  <>
                    {project.designDecisions.intro && (
                      <p className="font-serif text-xl leading-relaxed text-gray-700">
                        {project.designDecisions.intro}
                      </p>
                    )}
                    {project.designDecisions.items && (
                      <div className="space-y-4 pt-2">
                        {project.designDecisions.items.map((item: any, i: number) => (
                          <div key={i} className="border-l-2 border-brand-red/30 pl-4 py-1">
                            {item.title && (
                              <h4 className="font-sans text-brand-red font-semibold uppercase tracking-wider text-sm mb-1">{item.title}</h4>
                            )}
                            <p className="font-serif text-lg leading-relaxed text-gray-700">{item.description || item}</p>
                          </div>
                        ))}
                      </div>
                    )}
                  </>
                ) : Array.isArray(project.designDecisions) ? (
                  <ul className="list-disc list-inside space-y-3 font-serif text-xl text-gray-700 leading-relaxed">
                    {project.designDecisions.map((item: any, i: number) => (
                      <li key={i}>{typeof item === 'string' ? item : `${item.title}: ${item.description}`}</li>
                    ))}
                  </ul>
                ) : (
                  <p className="font-serif text-xl leading-relaxed text-gray-700">{project.designDecisions}</p>
                )}

                {project.designDecisionsImage && (
                  <div className="border border-brand-red/30 bg-white p-2.5 rounded-sm shadow-sm overflow-hidden w-full max-w-xl aspect-[16/9] flex items-center justify-center">
                    <img src={project.designDecisionsImage} alt="Design Decisions" className="w-full h-full object-cover rounded-sm" />
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Prototyping Section */}
          {(project.prototyping || project.prototypingPoints || project.prototypingImage) && (
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
              <div className="md:col-span-3">
                <h3 className="font-sans text-brand-red uppercase tracking-widest text-sm font-semibold">Prototyping</h3>
              </div>
              <div className="md:col-span-9 space-y-6">
                {project.prototyping && (
                  <p className="font-serif text-xl leading-relaxed text-gray-700">
                    {project.prototyping}
                  </p>
                )}
                {project.prototypingPoints && (
                  <ul className="list-disc list-inside space-y-2 font-serif text-xl text-gray-700">
                    {project.prototypingPoints.map((pt: string, i: number) => (
                      <li key={i}>{pt}</li>
                    ))}
                  </ul>
                )}
                {project.prototypingImage && (
                  <div className="border border-brand-red/30 bg-white p-2.5 rounded-sm shadow-sm overflow-hidden w-full max-w-xl aspect-[16/9] flex items-center justify-center">
                    <img src={project.prototypingImage} alt="Prototyping" className="w-full h-full object-cover rounded-sm" />
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Testing & Refinement Section */}
          {(project.testingRefinement || project.testingPoints || project.testingImage) && (
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
              <div className="md:col-span-3">
                <h3 className="font-sans text-brand-red uppercase tracking-widest text-sm font-semibold">Testing & Refinement</h3>
              </div>
              <div className="md:col-span-9 space-y-6">
                {project.testingRefinement && (
                  <p className="font-serif text-xl leading-relaxed text-gray-700">
                    {project.testingRefinement}
                  </p>
                )}
                {project.testingPoints && (
                  <ul className="list-disc list-inside space-y-2 font-serif text-xl text-gray-700">
                    {project.testingPoints.map((pt: string, i: number) => (
                      <li key={i}>{pt}</li>
                    ))}
                  </ul>
                )}
                {project.testingImage && (
                  <div className="border border-brand-red/30 bg-white p-2.5 rounded-sm shadow-sm overflow-hidden w-full max-w-xl aspect-[16/9] flex items-center justify-center">
                    <img src={project.testingImage} alt="Testing & Refinement" className="w-full h-full object-cover rounded-sm" />
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Process Section */}
          {project.processImages && project.processImages.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
              <div className="md:col-span-3">
                <h3 className="font-sans text-brand-red uppercase tracking-widest text-sm font-semibold">Process</h3>
              </div>
              <div className="md:col-span-9 space-y-12">
                 {project.processImages.map((img: string, index: number) => (
                   <div key={index} className="border-2 border-brand-red/20 p-4 bg-white shadow-sm rounded-sm aspect-video overflow-hidden">
                     <img src={img} alt={`Process ${index + 1}`} className="w-full h-full object-cover" />
                   </div>
                 ))}
              </div>
            </div>
          )}

          {/* Outcomes Section */}
          {(project.outcomeText || project.flipbookIframe || project.flipbookImages || project.video || project.outcomeImage) && (
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
              <div className="md:col-span-3">
                <h3 className="font-sans text-brand-red uppercase tracking-widest text-sm font-semibold">Final Outcome</h3>
              </div>
              <div className="md:col-span-9 flex flex-col md:flex-row gap-8 items-start">
                <div className="flex-1 space-y-8">
                  {project.outcomeText && (
                    <p className="font-serif text-xl leading-relaxed text-gray-700">
                      {project.outcomeText}
                    </p>
                  )}
                  {project.flipbookIframe ? (
                    <div className="w-full flex justify-center py-4">
                      <div className="relative w-full max-w-[550px]" style={{ paddingBottom: 'min(63.63%, 350px)' }}>
                        <iframe 
                          style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }} 
                          src={project.flipbookIframe} 
                          scrolling="no" 
                          frameBorder="0" 
                          allowFullScreen={true}
                          className="shadow-2xl rounded-sm"
                        ></iframe>
                      </div>
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
          )}

          {/* Reflection & Learning Section */}
          {project.reflectionLearning && (
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
              <div className="md:col-span-3">
                <h3 className="font-sans text-brand-red uppercase tracking-widest text-sm font-semibold">Reflection & Learning</h3>
              </div>
              <div className="md:col-span-9">
                <p className="font-serif text-xl leading-relaxed text-gray-700">
                  {project.reflectionLearning}
                </p>
              </div>
            </div>
          )}

           {/* Tools Used Section */}
           {project.tools && project.tools.length > 0 && (
             <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
              <div className="md:col-span-3">
                <h3 className="font-sans text-brand-red uppercase tracking-widest text-sm font-semibold">Tools used</h3>
              </div>
              <div className="md:col-span-9 flex flex-wrap gap-4">
                 {project.tools.map((tool: string) => (
                   <span key={tool} className="text-gray-500 font-mono text-sm border-b border-gray-300 pb-1">{tool}</span>
                 ))}
              </div>
            </div>
          )}

        </div>

      </div>
    </motion.div>
  );
}
