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
  <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
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
  <div className="fixed right-4 md:right-8 top-0 bottom-0 flex items-center z-50 pointer-events-none w-16 overflow-hidden">
    <svg width="100%" height="100%" preserveAspectRatio="none" viewBox="0 0 60 1000" xmlns="http://www.w3.org/2000/svg">
      {/* Red Wavy Line - Static */}
      <motion.path
        d="M 40 0 Q 60 166 40 333 T 40 666 T 40 1000"
        stroke="#D64B55"
        strokeWidth="5"
        fill="none"
        strokeOpacity="0.6"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      />

      {/* Green Wavy Line - Static */}
      <motion.path
        d="M 20 0 Q 0 166 20 333 T 20 666 T 20 1000"
        stroke="#9DC866"
        strokeWidth="5"
        fill="none"
        strokeOpacity="0.6"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1.5, ease: "easeOut", delay: 0.2 }}
      />
    </svg>
  </div>
);
