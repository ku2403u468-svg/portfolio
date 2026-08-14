import React from 'react';
import { motion } from 'motion/react';
import { ArrowLeft, BookOpen, Bookmark } from 'lucide-react';

interface GodOfSmallThingsProps {
  project: any;
  onBack: () => void;
  onSelectProject?: (project: any) => void;
}

// Color Swatch Component for literary palette presentation
function ColorSwatch({
  name,
  hex,
  role,
  bgStyle
}: {
  name: string;
  hex: string;
  role: string;
  bgStyle: string;
}) {
  return (
    <div className="group flex flex-col space-y-3">
      <div 
        className={`w-full h-32 sm:h-40 rounded-sm shadow-xl border border-white/10 transition-transform duration-500 group-hover:scale-[1.02] ${bgStyle}`}
      />
      <div className="space-y-1 px-1">
        <div className="flex items-center justify-between">
          <span className="font-serif text-base text-stone-100 font-medium">{name}</span>
          <span className="font-mono text-xs text-amber-200/70">{hex}</span>
        </div>
        <p className="font-sans text-xs text-stone-400 tracking-wide">{role}</p>
      </div>
    </div>
  );
}

// Clean Image Frame for Case Study visuals
function ImageFrame({
  src,
  alt,
  aspectRatio = '3/4',
  className = '',
  objectFit = 'cover'
}: {
  src?: string;
  alt: string;
  aspectRatio?: string;
  className?: string;
  objectFit?: 'cover' | 'contain';
}) {
  return (
    <div className={`group relative flex flex-col ${className}`}>
      <div 
        className="relative w-full overflow-hidden bg-[#0d141e] border border-stone-800/80 shadow-2xl rounded-sm transition-all duration-700 group-hover:border-amber-600/40"
        style={{ aspectRatio }}
      >
        {src ? (
          <img
            src={src}
            alt={alt}
            className={`w-full h-full transition-transform duration-1000 ease-out group-hover:scale-[1.015] ${
              objectFit === 'contain' ? 'object-contain p-2' : 'object-cover'
            }`}
          />
        ) : (
          <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center bg-[#090e15] border border-dashed border-stone-800">
            <BookOpen size={20} className="text-amber-500/70 mb-2" />
            <span className="font-serif text-sm text-stone-300 italic mb-2">{alt}</span>
            <span className="font-mono text-[10px] text-stone-500 uppercase tracking-widest border border-stone-800 px-2.5 py-1">
              Aspect Ratio {aspectRatio}
            </span>
          </div>
        )}
      </div>
    </div>
  );
}

export default function GodOfSmallThingsLiterary({ project, onBack }: GodOfSmallThingsProps) {
  // Primary images from project data or fallback defaults
  const frontCoverImage = project.image || "https://i.ibb.co/23SyfGWX/1000017284.png";
  const wraparoundCoverImage = project.processImages?.[2] || "https://i.ibb.co/HyZZP2j/cover-page-tgost.png";
  const spineDetailImage = project.processImages?.[0] || "https://i.ibb.co/23sQTkth/Untitled45.png";
  const finalMockupImage = project.outcomeImage || "https://i.ibb.co/gLVv7TX7/Chat-GPT-Image-Mar-5-2026-08-51-10-AM.png";

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-[#090d14] text-stone-200 relative z-50 selection:bg-amber-900 selection:text-amber-100 font-sans"
    >
      {/* Floating Minimal Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#090d14]/90 backdrop-blur-md border-b border-stone-800/80 px-6 py-4 flex items-center justify-between">
        <button
          onClick={onBack}
          className="group flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-amber-500 hover:text-amber-400 transition-colors"
        >
          <ArrowLeft size={16} className="transition-transform group-hover:-translate-x-1" />
          <span>Return to Portfolio</span>
        </button>

        <div className="hidden md:flex items-center gap-6 font-mono text-xs text-stone-400 uppercase tracking-widest">
          <span className="flex items-center gap-2">
            <Bookmark size={13} className="text-amber-500" />
            BOOK COVER REDESIGN
          </span>
          <span className="text-stone-700">•</span>
          <span>ARUNDHATI ROY</span>
        </div>

        <div className="font-mono text-xs font-semibold text-amber-500 tracking-widest uppercase">
          2025
        </div>
      </header>

      {/* Main Container */}
      <main className="pt-28 pb-32 px-6 sm:px-12 lg:px-20 max-w-6xl mx-auto space-y-32 sm:space-y-40">

        {/* =========================================================
            1. HERO / COVER
           ========================================================= */}
        <section className="space-y-12 text-center pt-6 pb-8 border-b border-stone-800/80">
          <div className="space-y-4 max-w-3xl mx-auto">
            <div className="flex flex-wrap items-center justify-center gap-3 font-mono text-xs text-amber-500 uppercase tracking-[0.25em]">
              <span>BOOK COVER REDESIGN</span>
              <span className="text-stone-700">•</span>
              <span>PUBLICATION DESIGN</span>
              <span className="text-stone-700">•</span>
              <span>2025</span>
            </div>

            <h1 className="font-serif text-5xl sm:text-7xl lg:text-8xl tracking-tight text-amber-100 font-normal leading-[0.95] uppercase pt-2">
              THE GOD OF<br />SMALL THINGS
            </h1>
            
            <p className="font-serif text-lg sm:text-xl text-stone-400 italic pt-1">
              Novel by Arundhati Roy
            </p>
          </div>

          {/* Dominant Hero Visual - Centered with Compact Bounds so Entire Cover Fits in Single Scroll */}
          <div className="pt-4 max-w-xs sm:max-w-sm mx-auto">
            <ImageFrame
              src={frontCoverImage}
              alt="The God of Small Things — Complete Book Cover Artwork"
              aspectRatio="3/4"
              className="w-full shadow-2xl"
            />
          </div>
        </section>


        {/* =========================================================
            2. THE IDEA
           ========================================================= */}
        <section className="space-y-6 max-w-3xl mx-auto border-b border-stone-800/80 pb-24">
          <span className="font-mono text-xs text-amber-500 font-bold uppercase tracking-widest block">
            02 — THE IDEA
          </span>

          <p className="font-serif text-2xl sm:text-4xl text-stone-100 font-normal leading-snug">
            “An illustrated reinterpretation of <span className="italic text-amber-200">The God of Small Things</span>, exploring the atmosphere of the story through landscape, water and visual storytelling.”
          </p>
        </section>


        {/* =========================================================
            3. THE VISUAL DIRECTION
           ========================================================= */}
        <section className="space-y-12 border-b border-stone-800/80 pb-24">
          <div className="flex items-center justify-between border-b border-stone-800/80 pb-3">
            <span className="font-mono text-xs text-amber-500 font-bold uppercase tracking-widest flex items-center gap-2">
              <span className="w-2 h-2 bg-amber-600 rounded-full" />
              03 — VISUAL DIRECTION
            </span>
            <span className="font-mono text-xs text-stone-500 uppercase tracking-widest">
              LANDSCAPE & ATMOSPHERE
            </span>
          </div>

          <div className="space-y-8 max-w-3xl">
            <p className="font-serif text-xl sm:text-2xl text-stone-200 leading-relaxed font-normal">
              The cover uses the Kerala backwater landscape as the main visual language, creating an atmosphere that feels quiet, lush and emotionally layered. The illustration uses the landscape and water as a way of suggesting the world of the novel rather than literally illustrating its plot.
            </p>
          </div>

          {/* Supporting Visual Detail */}
          <div className="pt-4">
            <ImageFrame
              src={wraparoundCoverImage}
              alt="Kerala Backwater Landscape Illustration — Environmental Crop"
              aspectRatio="16/9"
              className="w-full shadow-xl"
            />
          </div>
        </section>


        {/* =========================================================
            4. COLOUR EXPLORATION
           ========================================================= */}
        <section className="space-y-12 border-b border-stone-800/80 pb-24">
          <div className="flex items-center justify-between border-b border-stone-800/80 pb-3">
            <span className="font-mono text-xs text-amber-500 font-bold uppercase tracking-widest flex items-center gap-2">
              <span className="w-2 h-2 bg-amber-600 rounded-full" />
              04 — COLOUR EXPLORATION
            </span>
            <span className="font-mono text-xs text-stone-500 uppercase tracking-widest">
              LITERARY PALETTE
            </span>
          </div>

          <div className="max-w-3xl space-y-3">
            <p className="font-serif text-xl sm:text-2xl text-stone-200 leading-relaxed">
              A cinematic and nostalgic colour system drawn directly from the tropical lushness and quiet twilight mood of the Kerala backwaters.
            </p>
          </div>

          {/* 5 Prominent Swatches */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 pt-4">
            <ColorSwatch
              name="Deep Indigo"
              hex="#0D1829"
              role="Atmospheric Backwater Sky & Twilight Depths"
              bgStyle="bg-[#0D1829]"
            />
            <ColorSwatch
              name="Dark Forest"
              hex="#152A22"
              role="Lush Tropical Foliage & Palms"
              bgStyle="bg-[#152A22]"
            />
            <ColorSwatch
              name="Warm Cream"
              hex="#F5F0E8"
              role="Literary Paper Tone & Soft Typography"
              bgStyle="bg-[#F5F0E8] border-none"
            />
            <ColorSwatch
              name="Muted Coral"
              hex="#D06D53"
              role="Earthy Terracotta Accents & Sunlight"
              bgStyle="bg-[#D06D53]"
            />
            <ColorSwatch
              name="Soft Pink"
              hex="#E5AAB0"
              role="Subtle Floral & Dusk Glow Accent"
              bgStyle="bg-[#E5AAB0]"
            />
          </div>
        </section>


        {/* =========================================================
            5. COVER DEVELOPMENT
           ========================================================= */}
        <section className="space-y-12 border-b border-stone-800/80 pb-24">
          <div className="flex items-center justify-between border-b border-stone-800/80 pb-3">
            <span className="font-mono text-xs text-amber-500 font-bold uppercase tracking-widest flex items-center gap-2">
              <span className="w-2 h-2 bg-amber-600 rounded-full" />
              05 — COVER DEVELOPMENT
            </span>
            <span className="font-mono text-xs text-stone-500 uppercase tracking-widest">
              FORMAT & LAYOUT EXPLORATION
            </span>
          </div>

          {/* Image Spaces: Front Cover, Full Cover, Spine Detail */}
          <div className="space-y-12 pt-4">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
              {/* Front Cover (1000 x 1400 px) */}
              <div className="lg:col-span-5">
                <ImageFrame
                  src={frontCoverImage}
                  alt="Front Cover Design"
                  aspectRatio="5/7"
                />
              </div>

              {/* Spine / Detail Crop (800 x 1200 px) */}
              <div className="lg:col-span-7 space-y-10">
                <ImageFrame
                  src={spineDetailImage}
                  alt="Spine and Typographic Detail Crop"
                  aspectRatio="3/2"
                />

                <p className="font-serif text-lg text-stone-300 leading-relaxed pt-2">
                  The spine and cover edges continue the painted environment seamlessly, creating an immersive physical object when placed on a bookshelf.
                </p>
              </div>
            </div>

            {/* Full Wraparound Cover (1600 x 1000 px) */}
            <div className="pt-4">
              <ImageFrame
                src={wraparoundCoverImage}
                alt="Full Wraparound Book Cover Layout"
                aspectRatio="16/10"
                className="w-full shadow-2xl"
              />
            </div>
          </div>
        </section>


        {/* =========================================================
            6. TYPOGRAPHY
           ========================================================= */}
        <section className="space-y-12 border-b border-stone-800/80 pb-24">
          <div className="flex items-center justify-between border-b border-stone-800/80 pb-3">
            <span className="font-mono text-xs text-amber-500 font-bold uppercase tracking-widest flex items-center gap-2">
              <span className="w-2 h-2 bg-amber-600 rounded-full" />
              06 — TYPOGRAPHY
            </span>
            <span className="font-mono text-xs text-stone-500 uppercase tracking-widest">
              COVER TYPE SYSTEM
            </span>
          </div>

          {/* Type Specimen Showcase */}
          <div className="bg-[#0e1520] border border-stone-800/90 p-8 sm:p-12 rounded-sm space-y-8 shadow-xl">
            <div className="space-y-2 border-b border-stone-800/80 pb-6">
              <span className="font-mono text-[11px] text-amber-500 uppercase tracking-widest">TITLE</span>
              <div className="font-serif text-3xl sm:text-5xl text-amber-100 font-normal tracking-tight">
                The God of Small Things
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 border-b border-stone-800/80 pb-6">
              <div className="space-y-1">
                <span className="font-mono text-[11px] text-amber-500 uppercase tracking-widest">AUTHOR</span>
                <div className="font-serif text-xl text-stone-200 tracking-wider uppercase">
                  Arundhati Roy
                </div>
              </div>

              <div className="space-y-1">
                <span className="font-mono text-[11px] text-amber-500 uppercase tracking-widest">SUPPORTING TEXT</span>
                <div className="font-sans text-sm text-stone-300 tracking-widest uppercase font-medium">
                  WINNER OF THE BOOKER PRIZE
                </div>
              </div>
            </div>

            <p className="font-serif text-lg text-stone-300 leading-relaxed pt-2">
              The typography is integrated directly into the illustrated backwater scene, using soft, fluid serif letterforms that mirror the organic flow of the water and foliage without overpowering the delicate hand-painted artwork.
            </p>
          </div>
        </section>


        {/* =========================================================
            7. FINAL OUTCOME
           ========================================================= */}
        <section className="space-y-12 pt-4 pb-12">
          <div className="flex items-center justify-between border-b border-stone-800/80 pb-3">
            <span className="font-mono text-xs text-amber-500 font-bold uppercase tracking-widest flex items-center gap-2">
              <span className="w-2 h-2 bg-amber-600 rounded-full animate-ping" />
              07 — FINAL OUTCOME
            </span>
            <span className="font-mono text-xs text-stone-500 uppercase tracking-widest">
              FINAL PRESENTATION
            </span>
          </div>

          <div className="space-y-12">
            {/* Main Mockup (1400 x 900 px) */}
            <ImageFrame
              src={finalMockupImage}
              alt="Final Book Cover Mockup Presentation"
              aspectRatio="14/9"
              className="w-full shadow-2xl"
            />

            {/* Secondary Flat Cover (Compact bounds) */}
            <div className="max-w-xs sm:max-w-sm mx-auto pt-4">
              <ImageFrame
                src={frontCoverImage}
                alt="Final Flat Book Cover Artwork"
                aspectRatio="3/4"
                className="w-full shadow-2xl"
              />
            </div>
          </div>
        </section>


        {/* =========================================================
            RETURN TO PORTFOLIO
           ========================================================= */}
        <section className="pt-12 border-t border-stone-800 text-center">
          <button
            onClick={onBack}
            className="px-8 py-4 border border-stone-800 bg-[#0e1520] text-stone-300 hover:border-amber-500 hover:text-white transition-all duration-300 font-mono text-xs uppercase tracking-widest"
          >
            ← Return to All Projects
          </button>
        </section>

      </main>
    </motion.div>
  );
}
