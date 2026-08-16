import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

interface HeroSectionProps {
  onExplore?: () => void;
  onDonateClick?: () => void;
  onUrgentClick?: () => void;
}

const HERO_BACKGROUNDS = [
  'https://images.unsplash.com/photo-1524061614234-8449607d3bb7?auto=format&fit=crop&q=80&w=1920',
  'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&q=80&w=1920',
  'https://images.unsplash.com/photo-1542038784456-1ea8e935640e?auto=format&fit=crop&q=80&w=1920',
  'https://images.unsplash.com/photo-1509099836639-18ba1795216d?auto=format&fit=crop&q=80&w=1920'
];

export default function HeroSection({ onExplore }: HeroSectionProps) {
  const [bgIdx, setBgIdx] = useState(0);

  // Background slow crossfader
  useEffect(() => {
    const timer = setInterval(() => {
      setBgIdx((prev) => (prev + 1) % HERO_BACKGROUNDS.length);
    }, 8000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-[85vh] sm:min-h-[90vh] w-full bg-stone-950 overflow-hidden flex items-center justify-center py-20 px-4 sm:px-8 lg:px-12">
      
      {/* Background Cinematic Crossfader Slider */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={bgIdx}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 0.4, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 2.2, ease: 'easeOut' }}
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${HERO_BACKGROUNDS[bgIdx]})` }}
          />
        </AnimatePresence>
        {/* Soft Vignette Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/60 to-stone-950/80" />
        <div className="absolute inset-0 bg-radial from-transparent via-stone-950/40 to-stone-950" />
      </div>

      {/* Floating Field Metrics (Desktop view) */}
      <div className="absolute inset-0 z-10 pointer-events-none hidden xl:block">
        {/* Metric 1 */}
        <motion.div
          animate={{ y: [0, -12, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-28 left-[5%] bg-stone-900/80 backdrop-blur-md p-4 rounded-xl text-left shadow-2xl"
        >
          <span className="block text-[10px] font-mono uppercase tracking-widest text-emerald-400 font-bold">VERIFIED REACH</span>
          <span className="block text-2xl font-bold font-mono text-white mt-0.5">395 DISTRICTS</span>
          <span className="block text-[11px] text-stone-400 mt-0.5">East Africa • Grassroots Coverage</span>
        </motion.div>

        {/* Metric 2 */}
        <motion.div
          animate={{ y: [0, 14, 0] }}
          transition={{ duration: 8.5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
          className="absolute bottom-24 right-[5%] bg-stone-900/80 backdrop-blur-md p-4 rounded-xl text-left shadow-2xl"
        >
          <span className="block text-[10px] font-mono uppercase tracking-widest text-amber-400 font-bold">LIVES IMPACTED</span>
          <span className="block text-2xl font-bold font-mono text-white mt-0.5">232,000+ CHILDREN</span>
          <span className="block text-[11px] text-stone-400 mt-0.5">Continuous healthcare &amp; education</span>
        </motion.div>

        {/* Metric 3 */}
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
          className="absolute top-36 right-[6%] bg-stone-900/80 backdrop-blur-md p-4 rounded-xl text-left shadow-2xl"
        >
          <span className="block text-[10px] font-mono uppercase tracking-widest text-emerald-400 font-bold">DIRECT FIELD FLOW</span>
          <span className="block text-2xl font-bold font-mono text-white mt-0.5">87.2% ALLOCATED</span>
          <span className="block text-[11px] text-stone-400 mt-0.5">Audited quarterly by certified CPAs</span>
        </motion.div>
      </div>

      {/* Center Content Stage - Sits directly on the background without any container */}
      <div className="relative z-20 max-w-4xl mx-auto w-full text-center px-4">
        
        {/* Curved SVG Word Art - Upright Dome Arch Shape */}
        <div className="w-full max-w-2xl mx-auto h-24 sm:h-28 pointer-events-none select-none flex items-center justify-center mb-2">
          <svg 
            viewBox="0 0 800 240" 
            className="w-full h-full opacity-70 sm:opacity-85 drop-shadow-md"
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <path 
              id="archCurve" 
              d="M 50,210 A 380,240 0 0,1 750,210" 
              fill="none" 
            />
            <text 
              className="uppercase tracking-[0.25em] font-black fill-emerald-400" 
              dy="-8"
              style={{ 
                fontFamily: '"Roboto", sans-serif',
                fontSize: '25px',
                fontWeight: 900
              }}
            >
              <textPath href="#archCurve" startOffset="50%" textAnchor="middle">
                THRIVE KIDS FOUNDATION (UG) • ENRICHING LIVES TOGETHER
              </textPath>
            </text>
          </svg>
        </div>

        {/* Main Headline & Narrative sitting directly on the background */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="space-y-6 max-w-3xl mx-auto text-center"
        >
          <h2 
            className="text-2xl sm:text-3xl lg:text-4xl font-black text-emerald-400 tracking-wider uppercase drop-shadow-lg"
            style={{ fontFamily: '"Roboto", sans-serif' }}
          >
            SUPPORT A CHILD
          </h2>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight drop-shadow-md">
            Every Child Deserves A Future Full Of Possibilities.
          </h1>
          
          <p className="max-w-2xl mx-auto text-stone-200 text-sm sm:text-base font-light leading-relaxed drop-shadow-sm">
            We provide deep multi-sector support: building solar-powered schools, deploying mobile pediatric clinics, drilling clean water boreholes, and protecting children from exploitation.
          </p>

          {/* Action Button */}
          <div className="pt-4 flex items-center justify-center">
            <button
              type="button"
              onClick={onExplore}
              className="px-8 py-4 bg-stone-800/90 hover:bg-stone-700 text-white font-bold text-xs sm:text-sm uppercase tracking-wider rounded-xl backdrop-blur-md transition-all cursor-pointer shadow-xl"
            >
              Discover Leadership
            </button>
          </div>
        </motion.div>

      </div>

    </section>
  );
}
