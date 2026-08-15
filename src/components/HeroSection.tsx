import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, ShieldCheck, Heart, Sparkles, ChevronRight, Globe, Users, Award } from 'lucide-react';

interface HeroSectionProps {
  onExplore: () => void;
  onDonateClick: () => void;
  onUrgentClick: () => void;
}

const HERO_IMAGES = [
  'https://images.unsplash.com/photo-1524061614234-8449607d3bb7?auto=format&fit=crop&q=80&w=1920',
  'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&q=80&w=1920',
  'https://images.unsplash.com/photo-1542038784456-1ea8e935640e?auto=format&fit=crop&q=80&w=1920',
  'https://images.unsplash.com/photo-1509099836639-18ba1795216d?auto=format&fit=crop&q=80&w=1920'
];

export default function HeroSection({ onExplore, onDonateClick, onUrgentClick }: HeroSectionProps) {
  const [currentIdx, setCurrentIdx] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIdx((prev) => (prev + 1) % HERO_IMAGES.length);
    }, 6500);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-[92vh] w-full bg-stone-950 overflow-hidden flex items-center justify-center py-20 px-6 sm:px-10 lg:px-16">
      
      {/* Background Cinematic Crossfader Slider */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIdx}
            initial={{ opacity: 0, scale: 1.06 }}
            animate={{ opacity: 0.38, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 2.2, ease: 'easeOut' }}
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${HERO_IMAGES[currentIdx]})` }}
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
          className="absolute top-28 left-[6%] bg-stone-900/90 backdrop-blur-md border border-stone-800 p-4 rounded-xl text-left shadow-2xl"
        >
          <span className="block text-[10px] font-mono uppercase tracking-widest text-emerald-400 font-bold">VERIFIED REACH</span>
          <span className="block text-2xl font-bold font-mono text-white mt-0.5">395 DISTRICTS</span>
          <span className="block text-[11px] text-stone-400 mt-0.5">East Africa • S. Asia • Latin America</span>
        </motion.div>

        {/* Metric 2 */}
        <motion.div
          animate={{ y: [0, 14, 0] }}
          transition={{ duration: 8.5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
          className="absolute bottom-28 right-[6%] bg-stone-900/90 backdrop-blur-md border border-stone-800 p-4 rounded-xl text-left shadow-2xl"
        >
          <span className="block text-[10px] font-mono uppercase tracking-widest text-amber-400 font-bold">LIVES IMPACTED</span>
          <span className="block text-2xl font-bold font-mono text-white mt-0.5">232,000+ CHILDREN</span>
          <span className="block text-[11px] text-stone-400 mt-0.5">Continuous healthcare &amp; education</span>
        </motion.div>

        {/* Metric 3 */}
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
          className="absolute top-36 right-[8%] bg-stone-900/90 backdrop-blur-md border border-stone-800 p-4 rounded-xl text-left shadow-2xl"
        >
          <span className="block text-[10px] font-mono uppercase tracking-widest text-emerald-400 font-bold">DIRECT FIELD FLOW</span>
          <span className="block text-2xl font-bold font-mono text-white mt-0.5">87.2% ALLOCATED</span>
          <span className="block text-[11px] text-stone-400 mt-0.5">Audited quarterly by certified CPAs</span>
        </motion.div>
      </div>

      {/* Center Content Stage */}
      <div className="relative z-20 max-w-4xl mx-auto w-full">
        
        {/* Glassmorphic Container with Subtle Glows */}
        <div className="relative bg-white/[0.03] backdrop-blur-xl border border-white/10 rounded-[36px] p-8 sm:p-14 lg:p-20 shadow-2xl overflow-hidden flex flex-col items-center justify-center">
          
          {/* Decorative Glowing Orbs behind Glass */}
          <div className="absolute top-0 left-1/4 w-48 h-48 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 right-1/4 w-48 h-48 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

          {/* Curved SVG Word Art - Upright Dome Arch Shape */}
          <div className="absolute inset-0 w-full h-full pointer-events-none select-none z-10 flex items-center justify-center">
            <svg 
              viewBox="0 0 800 500" 
              className="w-full h-full opacity-30 sm:opacity-50"
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path 
                id="archCurve" 
                d="M 60,380 A 340,340 0 0,1 740,380" 
                fill="none" 
              />
              <text 
                className="uppercase tracking-[0.22em] font-black fill-emerald-500" 
                dy="-10"
                style={{ 
                  fontFamily: '"Roboto", sans-serif',
                  fontSize: '24px',
                  fontWeight: 900
                }}
              >
                <textPath href="#archCurve" startOffset="50%" textAnchor="middle">
                  THRIVE KIDS FOUNDATION (UG) • ENRICHING LIVES TOGETHER
                </textPath>
              </text>
            </svg>
          </div>

          {/* Main Headline & Narrative */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="space-y-6 relative z-20 max-w-2xl"
          >
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
              Every Child Deserves A Future Full Of Possibilities.
            </h1>
            
            <p className="max-w-xl mx-auto text-stone-300 text-sm sm:text-base font-light leading-relaxed">
              We provide deep multi-sector support: building solar-powered schools, deploying mobile pediatric clinics, drilling clean water boreholes, and protecting children from exploitation.
            </p>
          </motion.div>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="flex flex-col sm:flex-row justify-center items-center gap-4 pt-8 relative z-20 w-full sm:w-auto"
          >
            <button
              type="button"
              onClick={onDonateClick}
              className="w-full sm:w-auto px-8 py-4 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm uppercase tracking-wider rounded-xl shadow-xl hover:shadow-2xl transition-all cursor-pointer flex items-center justify-center gap-2"
            >
              <Heart className="w-4 h-4 fill-white" />
              <span>Support A Child Today</span>
            </button>

            <button
              type="button"
              onClick={onExplore}
              className="w-full sm:w-auto px-8 py-4 bg-stone-900/90 hover:bg-stone-800 text-stone-100 border border-stone-700 font-bold text-sm uppercase tracking-wider rounded-xl shadow-lg transition-all cursor-pointer flex items-center justify-center gap-2"
            >
              <span>Explore Living Initiatives</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </motion.div>

        </div>
      </div>

    </section>
  );
}
