import React, { useRef } from 'react';
import HTMLFlipBook from 'react-pageflip';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface FlipBookProps {
  images: string[];
}

const FlipBook: React.FC<FlipBookProps> = ({ images }) => {
  const flipBookRef = useRef<any>(null);

  const nextButtonClick = () => {
    if (flipBookRef.current) {
      flipBookRef.current.pageFlip().flipNext();
    }
  };

  const prevButtonClick = () => {
    if (flipBookRef.current) {
      flipBookRef.current.pageFlip().flipPrev();
    }
  };

  return (
    <div className="flex flex-col items-center py-12 gap-10 w-full">
      <div className="relative flex items-center justify-center w-full max-w-5xl px-16">
        {/* Previous Button */}
        <button 
          onClick={prevButtonClick}
          className="absolute left-0 z-30 flex flex-col items-center gap-2 group"
          aria-label="Previous Page"
        >
          <div className="p-5 bg-brand-red text-white rounded-full shadow-2xl group-hover:bg-brand-green transition-all duration-500 transform group-hover:scale-110 group-active:scale-95">
            <ChevronLeft size={36} strokeWidth={2.5} />
          </div>
          <span className="text-brand-red font-sans text-[10px] uppercase tracking-[0.2em] font-black opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">Previous</span>
        </button>

        <div className="relative group/book">
          {/* Book Spine Effect */}
          <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-black/10 z-20 -translate-x-1/2 blur-[1px]"></div>
          
          <div className="shadow-[0_30px_60px_-12px_rgba(0,0,0,0.5),0_18px_36px_-18px_rgba(0,0,0,0.5)] rounded-sm overflow-hidden bg-white ring-1 ring-black/5">
            <HTMLFlipBook 
              width={450} 
              height={600} 
              size="stretch"
              minWidth={300}
              maxWidth={500}
              minHeight={400}
              maxHeight={700}
              maxShadowOpacity={0.7}
              showCover={true}
              mobileScrollSupport={true}
              className="mx-auto"
              style={{}}
              startPage={0}
              drawShadow={true}
              flippingTime={1000}
              usePortrait={true}
              startZIndex={0}
              autoSize={true}
              clickEventForward={true}
              useMouseEvents={true}
              swipeDistance={30}
              showPageCorners={true}
              disableFlipByClick={false}
              ref={flipBookRef}
            >
              {images.map((image, index) => (
                <div key={index} className="bg-white relative h-full w-full">
                  {/* Page Texture/Gradient */}
                  <div className={`absolute inset-0 z-10 pointer-events-none ${index % 2 === 0 ? 'bg-gradient-to-r from-black/5 to-transparent' : 'bg-gradient-to-l from-black/5 to-transparent'}`}></div>
                  
                  {/* Inner Shadow for Spine */}
                  <div className={`absolute top-0 bottom-0 w-8 z-10 pointer-events-none ${index % 2 === 0 ? 'right-0 bg-gradient-to-l from-black/10 to-transparent' : 'left-0 bg-gradient-to-r from-black/10 to-transparent'}`}></div>

                  <img 
                    src={image} 
                    alt={`Page ${index + 1}`} 
                    className="w-full h-full object-contain pointer-events-none p-4" 
                  />
                  
                  {/* Page Number */}
                  <div className={`absolute bottom-6 font-mono text-[10px] text-brand-red/30 tracking-widest ${index % 2 === 0 ? 'left-8' : 'right-8'}`}>
                    {String(index + 1).padStart(2, '0')}
                  </div>
                </div>
              ))}
            </HTMLFlipBook>
          </div>
        </div>

        {/* Next Button */}
        <button 
          onClick={nextButtonClick}
          className="absolute right-0 z-30 flex flex-col items-center gap-2 group"
          aria-label="Next Page"
        >
          <div className="p-5 bg-brand-red text-white rounded-full shadow-2xl group-hover:bg-brand-green transition-all duration-500 transform group-hover:scale-110 group-active:scale-95">
            <ChevronRight size={36} strokeWidth={2.5} />
          </div>
          <span className="text-brand-red font-sans text-[10px] uppercase tracking-[0.2em] font-black opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">Next Flip</span>
        </button>
      </div>
      
      <div className="flex flex-col items-center gap-3 text-center">
        <div className="h-px w-12 bg-brand-red/20 mb-1"></div>
        <h4 className="text-brand-red font-serif text-2xl tracking-tight">
          Louise Fili: <span className="italic">Golden Glyphs</span>
        </h4>
        <div className="flex items-center gap-4">
          <span className="h-px w-8 bg-brand-red/10"></span>
          <p className="text-brand-red/50 font-sans text-[10px] uppercase tracking-[0.3em] font-bold">
            Interactive Archive • {images.length} Plates
          </p>
          <span className="h-px w-8 bg-brand-red/10"></span>
        </div>
      </div>
    </div>
  );
};

export default FlipBook;
