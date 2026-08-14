import React from 'react';
import { motion } from 'motion/react';

export const FaceIcon = ({ className }: { className?: string }) => (
  <img src="/assets/about-face.svg" alt="Face Illustration" className={className} />
);

export const BrainIcon = ({ className }: { className?: string }) => (
  <img src="/assets/projects-brain.svg" alt="Brain Illustration" className={className} />
);

export const HandIcon = ({ className }: { className?: string }) => (
  <img src="/assets/contact-hand.svg" alt="Hand Illustration" className={className} />
);

export const BackgroundCurves = () => (
  <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden">
    <motion.svg 
      className="absolute top-0 right-0 h-full w-full opacity-60" 
      viewBox="0 0 1000 1000" 
      preserveAspectRatio="none"
    >
       {/* Flowing Organic Lines */}
       <motion.path 
         d="M-100,500 C200,300 400,800 600,600 C800,400 900,100 1200,300" 
         stroke="#D64B55" 
         strokeWidth="1" 
         fill="none"
         initial={{ pathLength: 0, opacity: 0 }}
         animate={{ 
           pathLength: 1, 
           opacity: 0.8,
           d: [
             "M-100,500 C200,300 400,800 600,600 C800,400 900,100 1200,300",
             "M-100,520 C220,320 420,820 620,620 C820,420 920,120 1200,320",
             "M-100,500 C200,300 400,800 600,600 C800,400 900,100 1200,300"
           ]
         }}
         transition={{ 
           pathLength: { duration: 2, ease: "easeOut" },
           d: { duration: 10, repeat: Infinity, ease: "easeInOut" }
         }}
       />
       <motion.path 
         d="M-100,600 C100,800 500,200 800,500 C1000,700 1100,900 1300,600" 
         stroke="#9DC866" 
         strokeWidth="1" 
         fill="none"
         initial={{ pathLength: 0, opacity: 0 }}
         animate={{ 
           pathLength: 1, 
           opacity: 0.6,
           d: [
             "M-100,600 C100,800 500,200 800,500 C1000,700 1100,900 1300,600",
             "M-100,580 C120,780 520,180 820,480 C1020,680 1120,880 1300,580",
             "M-100,600 C100,800 500,200 800,500 C1000,700 1100,900 1300,600"
           ]
         }}
         transition={{ 
           pathLength: { duration: 2.5, ease: "easeOut", delay: 0.5 },
           d: { duration: 12, repeat: Infinity, ease: "easeInOut", delay: 1 }
         }}
       />
       
       {/* Micro-interaction Background Particles */}
       {[...Array(8)].map((_, i) => (
         <motion.circle
           key={i}
           cx={Math.random() * 1000}
           cy={Math.random() * 1000}
           r={Math.random() * 3 + 1}
           fill={i % 2 === 0 ? "#D64B55" : "#9DC866"}
           opacity={0.2}
           animate={{
             y: [0, -30, 0],
             x: [0, 15, 0],
             opacity: [0.2, 0.5, 0.2],
           }}
           transition={{
             duration: 5 + Math.random() * 5,
             repeat: Infinity,
             ease: "easeInOut",
             delay: Math.random() * 5,
           }}
         />
       ))}
    </motion.svg>
  </div>
);

export const GlobalScrollLines = () => (
  <div className="fixed right-0 top-0 bottom-0 flex items-center z-0 pointer-events-none w-24 sm:w-40 md:w-56 lg:w-72 overflow-hidden">
    <svg 
      className="w-full h-full opacity-65 transition-opacity duration-700" 
      preserveAspectRatio="none" 
      viewBox="0 0 200 1000" 
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="wave-gradient-red" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#D64B55" stopOpacity="0.2" />
          <stop offset="30%" stopColor="#D64B55" stopOpacity="0.7" />
          <stop offset="70%" stopColor="#F29D64" stopOpacity="0.8" />
          <stop offset="100%" stopColor="#D64B55" stopOpacity="0.3" />
        </linearGradient>

        <linearGradient id="wave-gradient-orange" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#F29D64" stopOpacity="0.2" />
          <stop offset="40%" stopColor="#E5A93C" stopOpacity="0.75" />
          <stop offset="80%" stopColor="#F29D64" stopOpacity="0.7" />
          <stop offset="100%" stopColor="#E5A93C" stopOpacity="0.2" />
        </linearGradient>

        <linearGradient id="wave-gradient-green" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#9DC866" stopOpacity="0.2" />
          <stop offset="35%" stopColor="#9DC866" stopOpacity="0.65" />
          <stop offset="75%" stopColor="#7EAA49" stopOpacity="0.7" />
          <stop offset="100%" stopColor="#9DC866" stopOpacity="0.2" />
        </linearGradient>
      </defs>

      {/* Primary Flowing Wave - Crimson & Coral */}
      <motion.path
        stroke="url(#wave-gradient-red)"
        strokeWidth="2.5"
        strokeLinecap="round"
        fill="none"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{
          pathLength: 1,
          opacity: 0.85,
          d: [
            "M 140 0 C 190 140, 60 260, 130 400 C 200 540, 70 680, 150 820 C 190 910, 110 970, 130 1000",
            "M 160 0 C 100 150, 190 280, 100 420 C 50 560, 180 700, 110 840 C 70 920, 150 960, 140 1000",
            "M 120 0 C 180 130, 80 270, 150 390 C 210 530, 90 690, 160 810 C 180 900, 100 980, 130 1000",
            "M 140 0 C 190 140, 60 260, 130 400 C 200 540, 70 680, 150 820 C 190 910, 110 970, 130 1000"
          ]
        }}
        transition={{
          pathLength: { duration: 2, ease: "easeOut" },
          opacity: { duration: 1 },
          d: { duration: 16, repeat: Infinity, ease: "easeInOut" }
        }}
      />

      {/* Secondary Harmonizing Ribbon - Warm Sunset Amber */}
      <motion.path
        stroke="url(#wave-gradient-orange)"
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{
          pathLength: 1,
          opacity: 0.75,
          d: [
            "M 100 0 C 40 160, 170 300, 90 450 C 30 590, 160 720, 80 860 C 40 930, 120 970, 90 1000",
            "M 120 0 C 170 140, 50 290, 140 430 C 200 580, 60 710, 130 850 C 160 920, 80 980, 100 1000",
            "M 90 0 C 60 170, 150 310, 80 440 C 20 600, 140 730, 90 870 C 60 940, 130 960, 90 1000",
            "M 100 0 C 40 160, 170 300, 90 450 C 30 590, 160 720, 80 860 C 40 930, 120 970, 90 1000"
          ]
        }}
        transition={{
          pathLength: { duration: 2.4, ease: "easeOut", delay: 0.2 },
          opacity: { duration: 1.2 },
          d: { duration: 19, repeat: Infinity, ease: "easeInOut", delay: 0.5 }
        }}
      />

      {/* Tertiary Delicate Wave - Sage Whisper */}
      <motion.path
        stroke="url(#wave-gradient-green)"
        strokeWidth="1.5"
        strokeDasharray="4 6"
        strokeLinecap="round"
        fill="none"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{
          pathLength: 1,
          opacity: 0.6,
          d: [
            "M 170 0 C 120 180, 190 320, 150 480 C 100 620, 190 760, 140 900 C 120 950, 170 980, 160 1000",
            "M 150 0 C 190 170, 110 330, 170 470 C 210 610, 110 770, 160 890 C 180 940, 130 990, 150 1000",
            "M 170 0 C 120 180, 190 320, 150 480 C 100 620, 190 760, 140 900 C 120 950, 170 980, 160 1000"
          ]
        }}
        transition={{
          pathLength: { duration: 2.8, ease: "easeOut", delay: 0.4 },
          opacity: { duration: 1.5 },
          d: { duration: 22, repeat: Infinity, ease: "easeInOut", delay: 1 }
        }}
      />

      {/* Subtle Floating Ambient Dots along the wave current */}
      <motion.circle
        cx="130"
        cy="320"
        r="2.5"
        fill="#F29D64"
        opacity={0.5}
        animate={{
          cy: [320, 360, 320],
          cx: [130, 115, 130],
          opacity: [0.3, 0.7, 0.3],
          scale: [0.9, 1.2, 0.9]
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.circle
        cx="110"
        cy="680"
        r="2"
        fill="#9DC866"
        opacity={0.4}
        animate={{
          cy: [680, 720, 680],
          cx: [110, 130, 110],
          opacity: [0.2, 0.6, 0.2],
          scale: [1, 1.3, 1]
        }}
        transition={{
          duration: 9,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1.5
        }}
      />
    </svg>
  </div>
);
