import React from 'react';
import { motion } from 'motion/react';
import { ArrowLeft, BookOpen, ExternalLink } from 'lucide-react';

interface LouiseFiliEditorialProps {
  project: any;
  onBack: () => void;
  onSelectProject?: (project: any) => void;
}

// Helper component for editorial publication frames
function PublicationFrame({
  src,
  alt,
  aspectRatio = '3/4',
  className = '',
  objectFit = 'cover',
  children
}: {
  key?: React.Key;
  src?: string;
  alt: string;
  aspectRatio?: string;
  className?: string;
  objectFit?: 'cover' | 'contain';
  children?: React.ReactNode;
}) {
  const isAuto = aspectRatio === 'auto';

  return (
    <div className={`group relative flex flex-col ${className}`}>
      <div 
        className="relative w-full overflow-hidden bg-brand-cream/60 border border-brand-red/25 shadow-sm transition-all duration-500 hover:border-brand-red/60"
        style={isAuto ? undefined : { aspectRatio }}
      >
        {src ? (
          <img
            src={src}
            alt={alt}
            className={`w-full ${isAuto ? 'h-auto block' : 'h-full'} transition-transform duration-700 ease-out group-hover:scale-[1.02] ${
              objectFit === 'contain' ? 'object-contain p-2' : 'object-cover'
            }`}
          />
        ) : (
          <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center bg-brand-cream/40 border border-dashed border-brand-red/30">
            <div className="flex items-center gap-2 text-brand-red/70 mb-2">
              <BookOpen size={18} />
              <span className="font-mono text-xs uppercase tracking-widest font-semibold">
                {alt || 'PUBLICATION PLACEHOLDER'}
              </span>
            </div>
            <span className="font-mono text-[10px] text-gray-500 uppercase tracking-widest border border-brand-red/20 px-2.5 py-1 bg-white/50">
              Aspect Ratio {aspectRatio}
            </span>
          </div>
        )}

        <div className="absolute inset-0 border border-brand-red/10 pointer-events-none" />
        {children}
      </div>
    </div>
  );
}

export default function LouiseFiliEditorial({ project, onBack }: LouiseFiliEditorialProps) {
  // Extract content
  const title = project.title || "Golden Glyphs";
  const category = project.category || "Editorial & Publication Design";
  const date = project.date || "July 2025";
  const tools = project.tools || ['Editorial Design', 'Grid Systems', 'Typography', 'InDesign', 'Publication Design'];

  const overview = project.overview || project.description;
  const concept = project.concept;
  const researchInsights = project.researchInsights;
  const designDecisions = project.designDecisions;
  const outcomeText = project.outcomeText;
  const flipbookIframe = project.flipbookIframe || "https://heyzine.com/flip-book/c4c68df5fe.html";

  const coverImage = project.image || project.testingImage;
  const ideationImage = project.ideationImage || coverImage;
  const designDecisionsImage = project.designDecisionsImage || coverImage;
  const prototypingImage = project.prototypingImage || coverImage;
  const developmentImage = project.developmentImage || "https://i.ibb.co/gMtqd6h7/Layout-explo.png";
  const ideaImages: string[] = project.ideaImages || [
    "https://i.ibb.co/1Y1tKtVM/lf.jpg",
    "https://i.ibb.co/gZcmtsHX/images.jpg",
    "https://i.ibb.co/j9FjsFFk/elegantissima.webp",
    "https://i.ibb.co/4wrXc02y/Ambessa.webp",
    "https://i.ibb.co/JWLh79cq/Pisellino-Featured-Thumbnail-01.webp",
    "https://i.ibb.co/fVPF6hfX/louise-fili-la-grafica-della-trada-1.jpg"
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-brand-cream text-gray-900 relative z-50 selection:bg-brand-red selection:text-white font-sans"
    >
      {/* Floating Editorial Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-brand-cream/90 backdrop-blur-md border-b border-brand-red/20 px-6 py-4 flex items-center justify-between">
        <button
          onClick={onBack}
          className="group flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-brand-red hover:text-brand-red/80 transition-colors"
        >
          <ArrowLeft size={16} className="transition-transform group-hover:-translate-x-1" />
          <span>Return to Portfolio</span>
        </button>

        <div className="hidden md:flex items-center gap-6 font-mono text-xs text-brand-red/70 uppercase tracking-widest">
          <span>GOLDEN GLYPHS</span>
          <span className="text-brand-red/30">•</span>
          <span>TYPOGRAPHY & PUBLICATION DESIGN</span>
        </div>

        <div className="font-mono text-xs font-semibold text-brand-red tracking-widest uppercase">
          {date}
        </div>
      </header>

      {/* Main Editorial Container */}
      <main className="pt-28 pb-32 px-6 sm:px-12 lg:px-20 max-w-6xl mx-auto space-y-32 sm:space-y-44">

        {/* =========================================================
            01 — PROJECT
           ========================================================= */}
        <section className="space-y-12 border-b border-brand-red/20 pb-24">
          <div className="flex items-center justify-between border-b border-brand-red/20 pb-3">
            <span className="font-mono text-xs text-brand-red font-bold uppercase tracking-widest flex items-center gap-2">
              <span className="w-2 h-2 bg-brand-red rounded-full" />
              01 — PROJECT
            </span>
            <span className="font-mono text-xs text-gray-500 uppercase tracking-widest">
              {category}
            </span>
          </div>

          <div className="space-y-8 max-w-4xl">
            <div>
              <span className="font-mono text-xs tracking-[0.3em] uppercase text-brand-red font-semibold block mb-2">
                EDITORIAL & PUBLICATION DESIGN
              </span>
              <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl tracking-tight text-brand-red font-normal leading-tight uppercase">
                GOLDEN GLYPHS
              </h1>
            </div>

            {overview && (
              <p className="font-serif text-xl sm:text-2xl text-gray-800 leading-relaxed">
                {overview}
              </p>
            )}

            <div className="flex flex-wrap gap-2 pt-2">
              {tools.map((t: string) => (
                <span key={t} className="font-mono text-xs text-brand-red bg-white border border-brand-red/25 px-3 py-1 uppercase tracking-wider">
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* Publication Cover Image (4:3 Aspect Ratio, Reduced Size) */}
          <div className="pt-4 max-w-md">
            <PublicationFrame
              src={coverImage}
              alt="Final Publication Cover"
              aspectRatio="4/3"
              className="w-full shadow-lg"
            />
          </div>
        </section>

        {/* =========================================================
            02 — IDEA
           ========================================================= */}
        <section className="space-y-12 border-b border-brand-red/20 pb-24">
          <div className="flex items-center justify-between border-b border-brand-red/20 pb-3">
            <span className="font-mono text-xs text-brand-red font-bold uppercase tracking-widest flex items-center gap-2">
              <span className="w-2 h-2 bg-brand-red rounded-full" />
              02 — IDEA
            </span>
            <span className="font-mono text-xs text-gray-500 uppercase tracking-widest">
              THE TYPOGRAPHIC CONCEPT
            </span>
          </div>

          <div className="space-y-8 max-w-3xl">
            {concept ? (
              <p className="font-serif text-2xl sm:text-3xl text-brand-red font-normal leading-snug italic border-l-2 border-brand-red pl-6 py-1">
                "{concept}"
              </p>
            ) : null}

            {researchInsights && (
              <p className="font-serif text-lg sm:text-xl text-gray-800 leading-relaxed">
                {researchInsights}
              </p>
            )}
          </div>

          {/* Editorial Grid: 6 Concept & Reference Images (Uniform Size & Reduced Scale) */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-5 sm:gap-6 pt-4">
            {ideaImages.map((imgUrl, index) => (
              <PublicationFrame
                key={index}
                src={imgUrl}
                alt={`Concept Reference ${index + 1}`}
                aspectRatio="4/3"
                objectFit="cover"
                className="w-full shadow-md hover:shadow-lg transition-shadow"
              />
            ))}
          </div>
        </section>

        {/* =========================================================
            03 — DEVELOPMENT
           ========================================================= */}
        <section className="space-y-12 border-b border-brand-red/20 pb-24">
          <div className="flex items-center justify-between border-b border-brand-red/20 pb-3">
            <span className="font-mono text-xs text-brand-red font-bold uppercase tracking-widest flex items-center gap-2">
              <span className="w-2 h-2 bg-brand-red rounded-full" />
              03 — DEVELOPMENT
            </span>
            <span className="font-mono text-xs text-gray-500 uppercase tracking-widest">
              INITIAL IDEA → EXPLORATION → REFINEMENT
            </span>
          </div>

          <p className="font-serif text-xl sm:text-2xl text-gray-800 max-w-3xl leading-relaxed">
            Developing Golden Glyphs required structuring researched material into a cohesive grid system, pairing classic serifs with refined Italian Art Deco flourishes, and testing page hierarchy across multiple iterations.
          </p>

          {/* Development Process Image */}
          <div className="pt-4">
            <PublicationFrame
              src={developmentImage}
              alt="Layout Exploration & Grid Development"
              aspectRatio="auto"
              className="w-full shadow-lg"
            />
          </div>

          {/* Design System Specifications: Colour & Typography Systems */}
          <div className="pt-8 border-t border-brand-red/15 space-y-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
              
              {/* COLOUR SYSTEM */}
              <div className="lg:col-span-5 space-y-4">
                <div className="flex items-center gap-2 border-b border-brand-red/20 pb-2">
                  <span className="font-mono text-xs text-brand-red font-bold uppercase tracking-widest">
                    COLOUR SYSTEM
                  </span>
                </div>

                <div className="grid grid-cols-1 gap-3.5">
                  {/* Primary Orange */}
                  <div className="flex items-start gap-3.5 p-3 bg-white/40 border border-brand-red/20">
                    <div 
                      className="w-10 h-10 shrink-0 border border-black/10 shadow-sm"
                      style={{ backgroundColor: '#F15A22' }}
                    />
                    <div className="space-y-1 text-xs">
                      <div className="flex items-center justify-between gap-2 font-mono font-bold text-gray-900">
                        <span>PRIMARY ORANGE</span>
                        <span className="text-brand-red">#F15A22</span>
                      </div>
                      <div className="font-mono text-[11px] text-gray-500">
                        RGB: 241, 90, 34
                      </div>
                      <p className="font-sans text-[11px] text-gray-600 leading-tight pt-0.5">
                        Primary accent colour, backgrounds, section markers, visual highlights and structural elements.
                      </p>
                    </div>
                  </div>

                  {/* Black */}
                  <div className="flex items-start gap-3.5 p-3 bg-white/40 border border-brand-red/20">
                    <div 
                      className="w-10 h-10 shrink-0 border border-black/10 shadow-sm bg-black"
                    />
                    <div className="space-y-1 text-xs">
                      <div className="flex items-center justify-between gap-2 font-mono font-bold text-gray-900">
                        <span>BLACK</span>
                        <span className="text-gray-700">#000000</span>
                      </div>
                      <p className="font-sans text-[11px] text-gray-600 leading-tight pt-0.5">
                        Primary dark/background colour and strong contrast areas.
                      </p>
                    </div>
                  </div>

                  {/* White */}
                  <div className="flex items-start gap-3.5 p-3 bg-white/40 border border-brand-red/20">
                    <div 
                      className="w-10 h-10 shrink-0 border border-gray-300 shadow-sm bg-white"
                    />
                    <div className="space-y-1 text-xs">
                      <div className="flex items-center justify-between gap-2 font-mono font-bold text-gray-900">
                        <span>WHITE</span>
                        <span className="text-gray-500">#FFFFFF</span>
                      </div>
                      <p className="font-sans text-[11px] text-gray-600 leading-tight pt-0.5">
                        Typography, contrast and light backgrounds where used in the book.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* TYPOGRAPHY SYSTEM */}
              <div className="lg:col-span-7 space-y-4">
                <div className="flex items-center gap-2 border-b border-brand-red/20 pb-2">
                  <span className="font-mono text-xs text-brand-red font-bold uppercase tracking-widest">
                    TYPOGRAPHY SYSTEM
                  </span>
                </div>

                <div className="space-y-3.5">
                  {/* Primary Typeface */}
                  <div className="p-3.5 bg-white/40 border border-brand-red/20 space-y-2">
                    <div className="flex flex-wrap items-baseline justify-between gap-2 border-b border-brand-red/10 pb-1.5">
                      <span className="font-mono text-xs font-bold tracking-wider text-gray-900 uppercase">
                        MONTSERRAT
                      </span>
                      <span className="font-mono text-[11px] text-brand-red uppercase font-semibold">
                        Primary text / supporting information
                      </span>
                    </div>
                    <p className="font-sans text-xs text-gray-700 leading-relaxed">
                      Use Montserrat for the main informational and supporting typography.
                    </p>
                    <div className="flex flex-wrap gap-2 pt-1">
                      {['Light', 'Regular', 'Medium', 'Bold'].map((weight) => (
                        <span 
                          key={weight}
                          className="font-mono text-[10px] text-gray-700 bg-brand-cream border border-brand-red/20 px-2 py-0.5"
                        >
                          Montserrat {weight}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Display & Experimental Typefaces */}
                  <div className="p-3.5 bg-white/40 border border-brand-red/20 space-y-2.5">
                    <div className="border-b border-brand-red/10 pb-1.5">
                      <span className="font-mono text-xs font-bold tracking-wider text-gray-900 uppercase">
                        DISPLAY & EXPERIMENTAL TYPOGRAPHY
                      </span>
                      <p className="font-sans text-[11px] text-gray-600 pt-0.5">
                        Used specifically for the typographic exploration and examples in Golden Glyphs.
                      </p>
                    </div>

                    <div className="divide-y divide-brand-red/10 font-mono text-xs">
                      <div className="py-2 flex flex-wrap items-baseline justify-between gap-2">
                        <span className="font-bold text-gray-900">MARSEILLE BOLD</span>
                        <span className="text-[11px] text-brand-red uppercase font-medium">Display typography</span>
                      </div>

                      <div className="py-2 space-y-1.5">
                        <div className="flex flex-wrap items-baseline justify-between gap-2">
                          <span className="font-bold text-gray-900">MONTECATINI PRO</span>
                          <span className="text-[11px] text-brand-red uppercase font-medium">Experimental / display typography</span>
                        </div>
                        <div className="flex flex-wrap gap-2 pl-0.5">
                          <span className="text-[10px] text-gray-700 bg-brand-cream border border-brand-red/20 px-2 py-0.5">
                            Montecatini Pro — Ampio Ultra
                          </span>
                          <span className="text-[10px] text-gray-700 bg-brand-cream border border-brand-red/20 px-2 py-0.5">
                            Montecatini Pro — Largo Bold
                          </span>
                        </div>
                      </div>

                      <div className="py-2 flex flex-wrap items-baseline justify-between gap-2">
                        <span className="font-bold text-gray-900">HWT MARDELL</span>
                        <span className="text-[11px] text-brand-red uppercase font-medium">Experimental / display typography</span>
                      </div>
                    </div>
                  </div>

                </div>
              </div>

            </div>
          </div>
        </section>

        {/* =========================================================
            04 — FINAL PUBLICATION
           ========================================================= */}
        <section className="space-y-12 pt-4 pb-12">
          <div className="flex items-center justify-between border-b border-brand-red/20 pb-3">
            <span className="font-mono text-xs text-brand-red font-bold uppercase tracking-widest flex items-center gap-2">
              <span className="w-2 h-2 bg-brand-red rounded-full animate-ping" />
              04 — FINAL PUBLICATION
            </span>
            <span className="font-mono text-xs text-gray-500 uppercase tracking-widest">
              FINAL RESULTS & SPREADS
            </span>
          </div>

          <div className="space-y-8">
            {outcomeText && (
              <p className="font-serif text-2xl text-gray-900 max-w-3xl leading-relaxed">
                {outcomeText}
              </p>
            )}

            {/* Flipbook Iframe Embed if available */}
            {flipbookIframe && (
              <div className="py-4">
                <div className="flex items-center justify-between mb-3 border-b border-brand-red/20 pb-2">
                  <span className="font-mono text-xs text-brand-red font-bold uppercase tracking-wider">
                    INTERACTIVE FLIPBOOK PUBLICATION
                  </span>
                  <a
                    href={flipbookIframe}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-mono text-xs text-brand-red hover:underline flex items-center gap-1"
                  >
                    <span>Open Fullscreen</span>
                    <ExternalLink size={12} />
                  </a>
                </div>
                <div className="w-full aspect-[16/10] bg-white border border-brand-red/30 shadow-2xl rounded-sm overflow-hidden">
                  <iframe
                    src={flipbookIframe}
                    className="w-full h-full border-0"
                    title="Golden Glyphs Flipbook"
                  />
                </div>
              </div>
            )}

          </div>
        </section>

        {/* =========================================================
            RETURN TO PORTFOLIO
           ========================================================= */}
        <section className="pt-12 border-t border-brand-red/20 text-center">
          <button
            onClick={onBack}
            className="px-8 py-4 border border-brand-red/30 bg-white text-gray-800 hover:border-brand-red hover:text-brand-red transition-all duration-300 font-mono text-xs uppercase tracking-widest"
          >
            ← Return to All Projects
          </button>
        </section>

      </main>
    </motion.div>
  );
}
