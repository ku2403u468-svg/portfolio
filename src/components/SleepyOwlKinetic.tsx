import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowLeft, Play, Pause, Film, Coffee, Sparkles } from 'lucide-react';

interface SleepyOwlKineticProps {
  project: any;
  onBack: () => void;
  onSelectProject?: (project: any) => void;
}

// Swatch Component for horizontal palette presentation
function ColorSwatchBar({
  name,
  hex,
  role,
  colorClass,
  hexTextColor = 'text-amber-200/80'
}: {
  name: string;
  hex: string;
  role: string;
  colorClass: string;
  hexTextColor?: string;
}) {
  return (
    <div className="flex flex-col sm:flex-row sm:items-center justify-between p-4 rounded-sm border border-stone-800/80 bg-[#1e1916] gap-3">
      <div className="flex items-center gap-4">
        <div 
          className={`w-12 h-12 rounded-sm border border-white/10 shrink-0 ${colorClass}`}
        />
        <div>
          <h4 className="font-serif text-base text-stone-100 font-medium">{name}</h4>
          <p className="font-sans text-xs text-stone-400">{role}</p>
        </div>
      </div>
      <span className={`font-mono text-xs font-semibold uppercase tracking-wider ${hexTextColor}`}>
        {hex}
      </span>
    </div>
  );
}

// Motion Frame Container
function MotionFrame({
  src,
  alt,
  aspectRatio = '16/10',
  label,
  className = '',
  objectFit = 'cover',
  children
}: {
  src?: string;
  alt: string;
  aspectRatio?: string;
  label?: string;
  className?: string;
  objectFit?: 'cover' | 'contain';
  children?: React.ReactNode;
}) {
  return (
    <div className={`group relative flex flex-col ${className}`}>
      <div 
        className="relative w-full overflow-hidden bg-[#181412] border border-stone-800/80 shadow-2xl rounded-sm transition-all duration-700 group-hover:border-[#a66a35]/60"
        style={{ aspectRatio }}
      >
        {src ? (
          <img
            src={src}
            alt={alt}
            className={`w-full h-full transition-transform duration-700 ease-out group-hover:scale-[1.015] ${
              objectFit === 'contain' ? 'object-contain p-4' : 'object-cover'
            }`}
          />
        ) : (
          <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center bg-[#14100e] border border-dashed border-stone-800">
            <Coffee size={24} className="text-[#a66a35] mb-2" />
            <span className="font-serif text-sm text-stone-300 italic mb-2">{alt}</span>
            <span className="font-mono text-[10px] text-stone-500 uppercase tracking-widest border border-stone-800 px-2.5 py-1">
              Aspect Ratio {aspectRatio}
            </span>
          </div>
        )}
        {children}
      </div>

      {label && (
        <div className="mt-2.5 flex items-center justify-between px-0.5">
          <span className="font-mono text-xs font-semibold text-[#a66a35] uppercase tracking-widest">
            {label}
          </span>
        </div>
      )}
    </div>
  );
}

export default function SleepyOwlKinetic({ project, onBack }: SleepyOwlKineticProps) {
  const [isPlaying, setIsPlaying] = useState(true);

  // Video and image assets
  const videoUrl = project.video || "https://player.vimeo.com/video/1173576415?badge=0&autopause=0&player_id=0&app_id=58479";

  // Use process images or fallbacks from project data
  const img0 = project.processImages?.[0] || project.image || "https://i.ibb.co/RT3nx1hB/Screenshot-2026-02-15-155056.png";
  const img1 = project.processImages?.[1] || project.image || "https://i.ibb.co/VWJJqrMT/Screenshot-2026-03-28-120852.png";
  const img2 = project.processImages?.[2] || project.image || "https://i.ibb.co/8DcM8hbz/Chat-GPT-Image-Feb-15-2026-05-39-01-PM.png";
  const imgHero = project.image || "https://i.ibb.co/0yqvrDsj/images.png";

  // Flowing motion sequence frames (4 frames)
  const sequenceFrames = [
    { label: "01 — THE OWL WAKES", src: img0, alt: "The Owl Character Wakes Up" },
    { label: "02 — THE EYES", src: img1, alt: "Eye Animation & Expression Shift" },
    { label: "03 — THE COFFEE CUP", src: img2, alt: "Coffee Cup Character Introduced" },
    { label: "04 — THE TRANSITION", src: imgHero, alt: "Energetic Transition & Brand Lock-Up" }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-[#14100e] text-stone-200 relative z-50 selection:bg-[#a66a35] selection:text-white font-sans"
    >
      {/* Floating Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#14100e]/90 backdrop-blur-md border-b border-stone-800/80 px-6 py-4 flex items-center justify-between">
        <button
          onClick={onBack}
          className="group flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-[#a66a35] hover:text-[#c48247] transition-colors"
        >
          <ArrowLeft size={16} className="transition-transform group-hover:-translate-x-1" />
          <span>Return to Portfolio</span>
        </button>

        <div className="hidden md:flex items-center gap-6 font-mono text-xs text-stone-400 uppercase tracking-widest">
          <span className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
            MOTION DESIGN
          </span>
          <span className="text-stone-700">•</span>
          <span>KINETIC BRANDING</span>
        </div>

        <div className="font-mono text-xs font-semibold text-[#a66a35] tracking-widest uppercase">
          2026
        </div>
      </header>

      {/* Main Container */}
      <main className="pt-24 pb-32 px-6 sm:px-12 lg:px-20 max-w-6xl mx-auto space-y-28 sm:space-y-36">

        {/* =========================================================
            1. HERO — SHOW THE MOTION FIRST
           ========================================================= */}
        <section className="space-y-6 pt-4 pb-8 border-b border-stone-800/80">
          
          {/* Main Large Cinematic Video Container (~1400 x 800 px equivalent) */}
          <div className="relative w-full aspect-video max-w-6xl mx-auto bg-[#0d0a09] border border-stone-800/90 shadow-2xl rounded-sm overflow-hidden group">
            {isPlaying ? (
              <iframe
                src={`${videoUrl}&autoplay=1&muted=1&loop=1`}
                className="w-full h-full border-0"
                allow="autoplay; fullscreen; picture-in-picture"
                title="Sleepy Owl Kinetic Branding Motion Graphic"
              />
            ) : (
              <div className="relative w-full h-full">
                <img
                  src={imgHero}
                  alt="Sleepy Owl Motion Cover"
                  className="w-full h-full object-cover opacity-80"
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                  <button
                    onClick={() => setIsPlaying(true)}
                    className="w-20 h-20 rounded-full bg-[#a66a35] text-white flex items-center justify-center hover:bg-[#c48247] transition-all shadow-2xl hover:scale-105"
                  >
                    <Play size={32} className="ml-1 fill-white" />
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Minimal info around video */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-2">
            <div>
              <h1 className="font-serif text-3xl sm:text-5xl text-stone-100 font-normal uppercase tracking-tight">
                SLEEPY OWL
              </h1>
              <p className="font-mono text-xs text-[#a66a35] uppercase tracking-[0.25em] font-semibold mt-1">
                KINETIC BRANDING
              </p>
            </div>

            <div className="flex items-center gap-4 font-mono text-xs text-stone-400 uppercase tracking-widest">
              <span>MOTION DESIGN</span>
              <span className="text-stone-700">•</span>
              <span>2026</span>
              <span className="text-stone-700">•</span>
              <span className="text-stone-300">~20 SECONDS</span>
            </div>
          </div>
        </section>


        {/* =========================================================
            2. PROJECT INTRODUCTION
           ========================================================= */}
        <section className="space-y-4 max-w-3xl mx-auto border-b border-stone-800/80 pb-20">
          <span className="font-mono text-xs text-[#a66a35] font-bold uppercase tracking-widest block">
            A BRAND THAT MOVES
          </span>

          <p className="font-serif text-2xl sm:text-3xl text-stone-100 font-normal leading-snug">
            “A short kinetic branding piece exploring how the Sleepy Owl identity could translate into movement.”
          </p>
        </section>


        {/* =========================================================
            3. THE MOTION SEQUENCE
           ========================================================= */}
        <section className="space-y-12 border-b border-stone-800/80 pb-24">
          <div className="flex items-center justify-between border-b border-stone-800/80 pb-3">
            <span className="font-mono text-xs text-[#a66a35] font-bold uppercase tracking-widest flex items-center gap-2">
              <span className="w-2 h-2 bg-red-500 rounded-full animate-ping" />
              THE MOTION SEQUENCE
            </span>
            <span className="font-mono text-xs text-stone-500 uppercase tracking-widest">
              4-STAGE FRAMEWORK
            </span>
          </div>

          {/* Flowing Sequence of 6 Large Frames (~1000 x 650 px) */}
          <div className="space-y-16">
            {sequenceFrames.map((frame, index) => (
              <div 
                key={index}
                className={`flex flex-col ${index % 2 === 1 ? 'items-end' : 'items-start'}`}
              >
                <div className="w-full max-w-4xl">
                  <MotionFrame
                    src={frame.src}
                    alt={frame.alt}
                    aspectRatio="16/10"
                    label={frame.label}
                    className="shadow-2xl"
                  />
                </div>
              </div>
            ))}
          </div>
        </section>


        {/* =========================================================
            4. VISUAL LANGUAGE
           ========================================================= */}
        <section className="space-y-12 border-b border-stone-800/80 pb-24">
          <div className="flex items-center justify-between border-b border-stone-800/80 pb-3">
            <span className="font-mono text-xs text-[#a66a35] font-bold uppercase tracking-widest flex items-center gap-2">
              <span className="w-2 h-2 bg-[#a66a35] rounded-full" />
              VISUAL LANGUAGE
            </span>
            <span className="font-mono text-xs text-stone-500 uppercase tracking-widest">
              KEY ANIMATED ELEMENTS
            </span>
          </div>

          {/* Overlapping, Editorial Scale Grid for Motion Elements (~800 x 600 px image spaces) */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center pt-4">
            
            {/* Owl Character (Large) */}
            <div className="md:col-span-7">
              <MotionFrame
                src={img0}
                alt="Owl Character"
                aspectRatio="4/3"
                label="OWL CHARACTER"
                className="w-full shadow-xl"
              />
            </div>

            {/* Coffee Cup Character */}
            <div className="md:col-span-5 md:-ml-8 md:mt-12 z-10">
              <MotionFrame
                src={img2}
                alt="Coffee Cup Character"
                aspectRatio="4/3"
                label="COFFEE CUP CHARACTER"
                className="w-full shadow-2xl border-stone-700/80"
              />
            </div>

            {/* Eyes & Expressions */}
            <div className="md:col-span-5 md:mt-6">
              <MotionFrame
                src={img1}
                alt="Eye Animation & Expressions"
                aspectRatio="4/3"
                label="EYE ANIMATION & EXPRESSIONS"
                className="w-full shadow-xl"
              />
            </div>

            {/* Abstract Movement & Logo */}
            <div className="md:col-span-7 md:mt-2">
              <MotionFrame
                src={imgHero}
                alt="Abstract Movement & Sleepy Owl Logo"
                aspectRatio="16/9"
                label="ABSTRACT MOVEMENT & BRAND LOCK-UP"
                className="w-full shadow-xl"
              />
            </div>

          </div>
        </section>


        {/* =========================================================
            5. COLOUR PALETTE
           ========================================================= */}
        <section className="space-y-10 border-b border-stone-800/80 pb-24">
          <div className="flex items-center justify-between border-b border-stone-800/80 pb-3">
            <span className="font-mono text-xs text-[#a66a35] font-bold uppercase tracking-widest flex items-center gap-2">
              <span className="w-2 h-2 bg-[#a66a35] rounded-full" />
              COLOUR PALETTE
            </span>
            <span className="font-mono text-xs text-stone-500 uppercase tracking-widest">
              MOTION ACCENTS & BASE
            </span>
          </div>

          <p className="font-serif text-lg text-stone-300 max-w-3xl leading-relaxed">
            The warm coffee brown and cream form the base identity. Red and green serve as high-energy motion accents during the dynamic transition sequence.
          </p>

          {/* Large Horizontal Swatches */}
          <div className="space-y-4 pt-2">
            <ColorSwatchBar
              name="WARM COFFEE BROWN"
              hex="#765444"
              role="Dominant Background & Brand Atmosphere"
              colorClass="bg-[#765444]"
            />
            <ColorSwatchBar
              name="CREAM"
              hex="#F1F0EC"
              role="Primary Character Lineart & Clean Text"
              colorClass="bg-[#F1F0EC]"
              hexTextColor="text-stone-800"
            />
            <ColorSwatchBar
              name="DARK CHARCOAL"
              hex="#292522"
              role="Contrast Framing & Deep Shadows"
              colorClass="bg-[#292522]"
            />
            <ColorSwatchBar
              name="WARM ORANGE / COFFEE ACCENT"
              hex="#A66A35"
              role="Warm Coffee Tone & Highlight Accents"
              colorClass="bg-[#A66A35]"
            />
            <ColorSwatchBar
              name="GREEN"
              hex="#6F8D3A"
              role="Energetic Motion Accent"
              colorClass="bg-[#6F8D3A]"
            />
            <ColorSwatchBar
              name="RED"
              hex="#C9143A"
              role="High-Impact Transition Accent"
              colorClass="bg-[#C9143A]"
            />
          </div>
        </section>


        {/* =========================================================
            6. MOTION DETAILS
           ========================================================= */}
        <section className="space-y-12 border-b border-stone-800/80 pb-24">
          <div className="flex items-center justify-between border-b border-stone-800/80 pb-3">
            <span className="font-mono text-xs text-[#a66a35] font-bold uppercase tracking-widest flex items-center gap-2">
              <span className="w-2 h-2 bg-[#a66a35] rounded-full" />
              FROM STILL TO MOTION
            </span>
            <span className="font-mono text-xs text-stone-500 uppercase tracking-widest">
              ANIMATION APPROACH
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Concise Editorial Text */}
            <div className="lg:col-span-5 space-y-4">
              <h3 className="font-serif text-3xl sm:text-4xl text-stone-100 font-normal">
                FROM STILL TO MOTION
              </h3>
              <p className="font-serif text-lg sm:text-xl text-stone-300 leading-relaxed">
                The identity is introduced through simple character movement, eye animation, object movement and transitions, gradually building toward the final Sleepy Owl Coffee lock-up.
              </p>
            </div>

            {/* 2-3 Cropped Motion Frames (~600 x 450 px) */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
              <MotionFrame
                src={img0}
                alt="Character Movement Frame"
                aspectRatio="4/3"
                className="w-full shadow-lg"
              />
              <MotionFrame
                src={img1}
                alt="Eye Transition Frame"
                aspectRatio="4/3"
                className="w-full shadow-lg"
              />
            </div>
          </div>
        </section>


        {/* =========================================================
            7. FINAL FRAME
           ========================================================= */}
        <section className="space-y-8 pt-4 pb-12">
          <div className="flex items-center justify-between border-b border-stone-800/80 pb-3">
            <span className="font-mono text-xs text-[#a66a35] font-bold uppercase tracking-widest flex items-center gap-2">
              <span className="w-2 h-2 bg-[#a66a35] rounded-full animate-ping" />
              FINAL MOTION LOCK-UP
            </span>
            <span className="font-mono text-xs text-stone-500 uppercase tracking-widest">
              FINAL IDENTITY
            </span>
          </div>

          {/* Large Final Identity Visual (~1400 x 800 px) */}
          <div className="space-y-6">
            <MotionFrame
              src={imgHero}
              alt="Final Sleepy Owl Coffee Motion Lock-Up"
              aspectRatio="16/9"
              className="w-full max-w-6xl mx-auto shadow-2xl"
            />

            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-2 border-t border-stone-800/60">
              <div>
                <div className="font-serif text-2xl text-stone-100 font-normal uppercase">
                  SLEEPY OWL COFFEE
                </div>
                <span className="font-mono text-xs text-[#a66a35] uppercase tracking-widest font-semibold block mt-0.5">
                  FINAL MOTION LOCK-UP
                </span>
              </div>

              <span className="font-mono text-xs text-stone-500 uppercase tracking-widest">
                KINETIC BRANDING • 2026
              </span>
            </div>
          </div>
        </section>


        {/* =========================================================
            RETURN TO PORTFOLIO
           ========================================================= */}
        <section className="pt-12 border-t border-stone-800 text-center">
          <button
            onClick={onBack}
            className="px-8 py-4 border border-stone-800 bg-[#1a1512] text-stone-300 hover:border-[#a66a35] hover:text-white transition-all duration-300 font-mono text-xs uppercase tracking-widest"
          >
            ← Return to All Projects
          </button>
        </section>

      </main>
    </motion.div>
  );
}
