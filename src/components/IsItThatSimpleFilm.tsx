import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowLeft, ExternalLink, Film, Play, Sparkles } from 'lucide-react';

interface IsItThatSimpleFilmProps {
  project: any;
  onBack: () => void;
  onSelectProject?: (project: any) => void;
}

// Helper component for cinematic film frame placeholders & stills
function FilmFrame({
  src,
  alt,
  aspectRatio = '16/9',
  label,
  frameNumber,
  className = '',
  imgClassName = '',
  objectFit = 'cover',
  children
}: {
  src?: string;
  alt: string;
  aspectRatio?: string;
  label?: string;
  frameNumber?: string;
  className?: string;
  imgClassName?: string;
  objectFit?: 'cover' | 'contain';
  children?: React.ReactNode;
}) {
  const isAuto = aspectRatio === 'auto';

  return (
    <div className={`group relative flex flex-col ${className}`}>
      <div 
        className={`relative w-full overflow-hidden bg-zinc-900 border border-zinc-800/80 transition-all duration-500 group-hover:border-red-600/60 shadow-2xl rounded-sm ${
          isAuto ? '' : 'flex-1 flex items-center justify-center min-h-0'
        }`}
        style={isAuto ? undefined : { aspectRatio }}
      >
        {/* Subtle Film Grain / Vignette overlay */}
        <div className="absolute inset-0 bg-radial-vignette opacity-40 pointer-events-none z-10" />
        <div className="absolute inset-0 border border-white/5 pointer-events-none z-10" />

        {src ? (
          <img
            src={src}
            alt={alt}
            className={`transition-transform duration-700 ease-out group-hover:scale-[1.01] ${
              isAuto ? 'w-full h-auto block' : 'w-full h-full'
            } ${
              objectFit === 'contain' && !isAuto ? 'object-contain' : 'object-cover'
            } ${imgClassName}`}
          />
        ) : (
          <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center bg-gradient-to-b from-zinc-900 to-zinc-950 border border-dashed border-zinc-800">
            <div className="flex items-center gap-2 text-red-500/80 mb-2">
              <Film size={18} />
              <span className="font-mono text-xs uppercase tracking-widest font-semibold">
                {frameNumber || 'FILM FRAME PLACEHOLDER'}
              </span>
            </div>
            <span className="font-serif text-sm text-zinc-400 italic mb-3 max-w-md">{alt}</span>
          </div>
        )}

        {children}
      </div>

      {frameNumber && (
        <div className="mt-2.5 flex items-baseline justify-between border-t border-zinc-800/60 pt-2 px-0.5 shrink-0">
          <span className="font-mono text-[11px] font-semibold text-red-500 uppercase tracking-widest flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 bg-red-600 rounded-full inline-block animate-pulse" />
            {frameNumber}
          </span>
        </div>
      )}
    </div>
  );
}

export default function IsItThatSimpleFilm({ project, onBack }: IsItThatSimpleFilmProps) {
  const [isPlaying, setIsPlaying] = useState(false);

  // Extract written content from project
  const title = project.title || "Is It That Simple?";
  const category = project.category || "Motion Design";
  const date = project.date || "Jan 2026";
  const tools = project.tools || ['Adobe Premiere Pro', 'Film Editing', 'Color Grading', 'Post Production', 'Pacing & Continuity'];

  const overview = project.overview || project.description;
  const problemStatement = project.problemStatement;
  const concept = project.concept;
  const designDecisions = project.designDecisions || [];
  const researchInsights = project.researchInsights;
  const outcomeText = project.outcomeText;
  const reflectionLearning = project.reflectionLearning;

  const heroImage = project.image || project.processImages?.[0];
  const conceptImage = project.conceptImage || project.ideationImage || project.processImages?.[0] || heroImage;
  const processImage1 = project.processImages?.[0] || heroImage;
  const processImage2 = project.prototypingImage || project.processImages?.[1] || heroImage;
  const processImage3 = project.testingImage || project.processImages?.[2] || heroImage;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-zinc-950 text-zinc-100 relative z-50 selection:bg-red-600 selection:text-white font-sans"
    >
      {/* Floating Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-zinc-950/90 backdrop-blur-md border-b border-zinc-800/80 px-6 py-4 flex items-center justify-between">
        <button
          onClick={onBack}
          className="group flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-red-500 hover:text-red-400 transition-colors"
        >
          <ArrowLeft size={16} className="transition-transform group-hover:-translate-x-1" />
          <span>Return to Portfolio</span>
        </button>

        <div className="hidden md:flex items-center gap-6 font-mono text-xs text-zinc-400 uppercase tracking-widest">
          <span className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-red-600 animate-pulse" />
            SHORT FILM
          </span>
          <span className="text-zinc-700">•</span>
          <span>VISUAL STORYTELLING</span>
        </div>

        <div className="font-mono text-xs font-semibold text-red-500 tracking-widest uppercase">
          {date}
        </div>
      </header>

      {/* Main Container */}
      <main className="pt-28 pb-32 px-6 sm:px-12 lg:px-20 max-w-6xl mx-auto space-y-32 sm:space-y-44">

        {/* =========================================================
            PART 1: PROJECT
           ========================================================= */}
        <section className="space-y-12 border-b border-zinc-800/80 pb-24">
          <div className="flex items-center justify-between border-b border-zinc-800/80 pb-3">
            <span className="font-mono text-xs text-red-500 font-bold uppercase tracking-widest flex items-center gap-2">
              <span className="w-2 h-2 bg-red-600 rounded-full" />
              01 — PROJECT
            </span>
            <span className="font-mono text-xs text-zinc-500 uppercase tracking-widest">
              SHORT FILM | VISUAL STORYTELLING
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 xl:gap-16 items-start">
            {/* Left Column: Title, Description & Metadata (55-60% width) */}
            <div className="md:col-span-7 lg:col-span-7 space-y-8">
              <div>
                <span className="font-mono text-xs tracking-[0.3em] uppercase text-red-500 font-semibold block mb-2">
                  SHORT FILM | VISUAL STORYTELLING
                </span>
                <h1 className="font-serif text-5xl sm:text-7xl lg:text-7xl xl:text-8xl tracking-tight text-white font-normal leading-[0.95] uppercase">
                  IS IT THAT<br />SIMPLE?
                </h1>
              </div>

              {overview && (
                <p className="font-serif text-xl sm:text-2xl text-zinc-300 leading-relaxed border-l-2 border-red-600/80 pl-5">
                  {overview}
                </p>
              )}

              {/* Tools Bar */}
              <div className="pt-2">
                <div className="flex flex-wrap gap-2">
                  {tools.map((t: string) => (
                    <span key={t} className="font-mono text-xs text-red-400 bg-zinc-900 border border-zinc-800 px-3 py-1 uppercase tracking-wider">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column: Whole Uncropped Film Poster (40-45% width) */}
            <div className="md:col-span-5 lg:col-span-5 flex justify-center md:justify-end items-start">
              <div className="w-full max-w-xs sm:max-w-sm md:max-w-md">
                <FilmFrame
                  src={heroImage}
                  alt="Official Film Poster"
                  aspectRatio="auto"
                  frameNumber="OFFICIAL FILM POSTER"
                  className="w-full shadow-2xl"
                />
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================
            PART 2: IDEA
           ========================================================= */}
        <section className="space-y-12 border-b border-zinc-800/80 pb-24">
          <div className="flex items-center justify-between border-b border-zinc-800/80 pb-3">
            <span className="font-mono text-xs text-red-500 font-bold uppercase tracking-widest flex items-center gap-2">
              <span className="w-2 h-2 bg-red-600 rounded-full" />
              02 — IDEA
            </span>
            <span className="font-mono text-xs text-zinc-500 uppercase tracking-widest">
              CONCEPT & NARRATIVE
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            {/* Short Integrated Text */}
            <div className="lg:col-span-8 space-y-6">
              {concept ? (
                <p className="font-serif text-2xl sm:text-3xl text-zinc-100 font-normal leading-snug">
                  "{concept}"
                </p>
              ) : problemStatement ? (
                <p className="font-serif text-xl text-zinc-200 leading-relaxed">
                  {problemStatement}
                </p>
              ) : null}

              {problemStatement && concept && (
                <p className="font-serif text-base sm:text-lg text-zinc-400 leading-relaxed border-l border-zinc-800 pl-4">
                  {problemStatement}
                </p>
              )}
            </div>

            {/* Compact Supporting Visual */}
            <div className="lg:col-span-4 flex justify-center lg:justify-end items-start">
              <div className="w-full max-w-[220px] sm:max-w-[240px]">
                <FilmFrame
                  src={conceptImage}
                  alt="Concept / Visual Reference"
                  aspectRatio="auto"
                  className="w-full shadow-xl"
                />
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================
            PART 3: PROCESS
           ========================================================= */}
        <section className="space-y-12 border-b border-zinc-800/80 pb-24">
          <div className="flex items-center justify-between border-b border-zinc-800/80 pb-3">
            <span className="font-mono text-xs text-red-500 font-bold uppercase tracking-widest flex items-center gap-2">
              <span className="w-2 h-2 bg-red-600 rounded-full" />
              03 — PROCESS
            </span>
            <span className="font-mono text-xs text-zinc-500 uppercase tracking-widest">
              IDEA → DEVELOPMENT → MAKING
            </span>
          </div>

          {/* Process Content Summary */}
          {Array.isArray(designDecisions) && designDecisions.length > 0 && (
            <div className="max-w-3xl space-y-3">
              <p className="font-serif text-xl sm:text-2xl text-zinc-200 leading-relaxed">
                Shaping the narrative required organizing raw footage, refining emotional pacing, and using jump cuts and quiet pauses to convey tension.
              </p>
            </div>
          )}

          {/* Process Images Sequence */}
          <div className="space-y-10 pt-4">
            {/* Image 01: Storyboard / Early Exploration */}
            <FilmFrame
              src={processImage1}
              alt="Storyboard / Early Exploration"
              aspectRatio="3/2"
              frameNumber="03.1 / STORYBOARD & EARLY EXPLORATION"
              className="w-full shadow-xl"
            />

            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
              {/* Image 02: Visual Development / Process */}
              <div className="md:col-span-6">
                <FilmFrame
                  src={processImage2}
                  alt="Visual Development / Process"
                  aspectRatio="16/10"
                  frameNumber="03.2 / VISUAL DEVELOPMENT"
                />
              </div>

              {/* Image 03: Editing / Production / Development */}
              <div className="md:col-span-6">
                <FilmFrame
                  src={processImage3}
                  alt="Editing / Production / Development"
                  aspectRatio="16/10"
                  frameNumber="03.3 / EDITING & PRODUCTION"
                />
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================
            PART 4: FINAL FILM
           ========================================================= */}
        <section className="space-y-12 pt-4 pb-12">
          <div className="flex items-center justify-between border-b border-zinc-800/80 pb-3">
            <span className="font-mono text-xs text-red-500 font-bold uppercase tracking-widest flex items-center gap-2">
              <span className="w-2 h-2 bg-red-600 rounded-full animate-ping" />
              04 — FINAL FILM
            </span>
            <span className="font-mono text-xs text-zinc-500 uppercase tracking-widest">
              MAIN VISUAL CLIMAX
            </span>
          </div>

          {/* Large Main Video / Player Placeholder */}
          <div className="space-y-6">
            <div className="relative w-full overflow-hidden bg-black border border-zinc-800 shadow-2xl rounded-sm aspect-video group">
              {isPlaying ? (
                <iframe
                  src="https://www.youtube.com/embed/L2PLx36Q8Qo?si=yMOFen8XNTmXQSV9&autoplay=1"
                  className="w-full h-full border-0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                  title="YouTube video player"
                />
              ) : (
                <div className="relative w-full h-full">
                  <img
                    src={heroImage}
                    alt="Final Film Cover"
                    className="w-full h-full object-cover opacity-80 group-hover:scale-[1.01] transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center gap-4">
                    <button
                      onClick={() => setIsPlaying(true)}
                      className="w-20 h-20 rounded-full bg-red-600 text-white flex items-center justify-center hover:bg-red-500 hover:scale-105 transition-all shadow-2xl"
                    >
                      <Play size={32} className="ml-1 fill-white" />
                    </button>
                    <span className="font-mono text-xs uppercase tracking-widest text-zinc-200 bg-zinc-900/80 px-4 py-1.5 border border-zinc-800">
                      PLAY SHORT FILM
                    </span>
                  </div>
                </div>
              )}
            </div>

            <div className="flex flex-wrap items-center justify-between gap-4 pt-1">
              {outcomeText && (
                <p className="font-serif text-lg text-zinc-300 max-w-2xl leading-relaxed">
                  {outcomeText}
                </p>
              )}

              <a
                href="https://youtu.be/L2PLx36Q8Qo"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-red-500 hover:text-red-400 bg-zinc-900 px-4 py-2 border border-zinc-800 hover:border-red-600/60 transition-all shrink-0"
              >
                <span>Watch on YouTube</span>
                <ExternalLink size={14} />
              </a>
            </div>
          </div>


        </section>

        {/* =========================================================
            RETURN TO PORTFOLIO
           ========================================================= */}
        <section className="pt-12 border-t border-zinc-800 text-center">
          <button
            onClick={onBack}
            className="px-8 py-4 border border-zinc-800 bg-zinc-900 text-zinc-300 hover:border-red-500 hover:text-white transition-all duration-300 font-mono text-xs uppercase tracking-widest"
          >
            ← Return to All Projects
          </button>
        </section>

      </main>
    </motion.div>
  );
}
