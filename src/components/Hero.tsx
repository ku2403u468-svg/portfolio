import React from 'react';
import { motion } from 'motion/react';
import { PERSONAL_INFO } from '../constants';

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center relative pt-20">
      <div className="container mx-auto px-8 flex flex-col md:flex-row items-center gap-16">
        
        {/* Left Side - Image & Shapes */}
        <div className="relative w-full md:w-1/2 flex justify-center">
          {/* Yellow Background Shape */}
          <div className="absolute top-0 left-10 w-[80%] h-[90%] bg-brand-yellow rounded-tl-[100px] rounded-br-[20px] -z-10 transform -rotate-2"></div>
          
          {/* Green Shape */}
          <div className="absolute bottom-10 left-0 w-16 h-64 bg-brand-green/80 transform skew-y-12 -z-10"></div>
          
          {/* Orange Shape */}
          <div className="absolute bottom-0 left-[-20px] w-24 h-32 bg-brand-orange/80 transform -rotate-12 -z-10" style={{ clipPath: 'polygon(0 100%, 100% 100%, 100% 0)' }}></div>

          {/* Image */}
          <div className="relative z-10 w-full max-w-[350px] aspect-[350/450] overflow-hidden rounded-t-full border-b-0">
             <img 
               src="https://i.ibb.co/0pYWHGPK/68be6548-5dae-46b3-bcd5-a6e9a5255e7c-removebg-preview.png" 
               alt={PERSONAL_INFO.name}
               className="w-full h-full object-cover"
             />
          </div>
        </div>

        {/* Right Side - Text */}
        <div className="w-full md:w-1/2 text-left">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-serif text-5xl md:text-7xl lg:text-8xl text-brand-red mb-6 leading-tight"
          >
            {PERSONAL_INFO.name.split(' ')[0]} <br />
            {PERSONAL_INFO.name.split(' ')[1]}
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="font-sans text-brand-red text-xl tracking-[0.2em] uppercase"
          >
            {PERSONAL_INFO.title}
          </motion.p>
        </div>
      </div>
      
      {/* Bottom accent line removed */}
    </section>
  );
}
