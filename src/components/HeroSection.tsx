import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

interface HeroSectionProps {
  onExplore: () => void;
}

const HERO_IMAGES = [
  'https://images.unsplash.com/photo-1524061614234-8449607d3bb7?auto=format&fit=crop&q=80&w=1920',
  'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&q=80&w=1920',
  'https://images.unsplash.com/photo-1542038784456-1ea8e935640e?auto=format&fit=crop&q=80&w=1920',
  'https://images.unsplash.com/photo-1509099836639-18ba1795216d?auto=format&fit=crop&q=80&w=1920'
];

export default function HeroSection({ onExplore }: HeroSectionProps) {
  const [currentIdx, setCurrentIdx] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIdx((prev) => (prev + 1) % HERO_IMAGES.length);
    }, 7000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-screen w-full bg-stone-950 overflow-hidden flex items-center justify-center">
      {/* Background Cinematic Crossfader Slider */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIdx}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 0.35, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 2.5, ease: 'easeOut' }}
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${HERO_IMAGES[currentIdx]})` }}
          />
        </AnimatePresence>
        {/* Real-time deep vignette overlay */}
        <div className="absolute inset-0 bg-radial-vignette from-transparent via-stone-950/80 to-stone-950"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-transparent to-stone-950/40"></div>
      </div>

      {/* Floating Statistics - Floating Orbits without generic icons */}
      <div className="absolute inset-0 z-10 pointer-events-none hidden md:block">
        {/* Floating stat 1 */}
        <motion.div
          animate={{
            y: [0, -18, 0],
            x: [0, 10, 0],
          }}
          transition={{
            duration: 9,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-1/4 left-[10%] bg-stone-900/80 backdrop-blur-xl border border-stone-800 p-4 rounded-xl text-left"
        >
          <span className="block text-[10px] font-mono uppercase tracking-widest text-[#10b981]">REGIONAL REACH</span>
          <span className="block text-xl font-bold font-display text-white mt-0.5">395 DISTRICTS</span>
          <span className="block text-[11px] text-stone-400 mt-1">Direct community involvement</span>
        </motion.div>

        {/* Floating stat 2 */}
        <motion.div
          animate={{
            y: [0, 24, 0],
            x: [0, -14, 0],
          }}
          transition={{
            duration: 11,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1.5
          }}
          className="absolute bottom-1/4 right-[8%] bg-stone-900/80 backdrop-blur-xl border border-stone-800 p-4 rounded-xl text-left"
        >
          <span className="block text-[10px] font-mono uppercase tracking-widest text-[#f59e0b]">COGNITIVE PROTECTION</span>
          <span className="block text-xl font-bold font-display text-white mt-0.5">215,050 CHILDREN</span>
          <span className="block text-[11px] text-stone-400 mt-1">Enrolled and verified</span>
        </motion.div>

        {/* Floating stat 3 */}
        <motion.div
          animate={{
            y: [0, -20, 0],
            x: [0, -10, 0],
          }}
          transition={{
            duration: 13,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 3
          }}
          className="absolute top-1/3 right-[15%] bg-stone-900/80 backdrop-blur-xl border border-stone-800 p-4 rounded-xl text-left"
        >
          <span className="block text-[10px] font-mono uppercase tracking-widest text-[#10b981]">AUDITED TRANSPARENCY</span>
          <span className="block text-xl font-bold font-display text-white mt-0.5">87.2% DIRECT FUNDS</span>
          <span className="block text-[11px] text-stone-400 mt-1">Strict fieldwork expenditure</span>
        </motion.div>
      </div>

      {/* Main Content Details */}
      <div className="relative z-20 max-w-5xl mx-auto px-6 text-center space-y-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: 'easeOut' }}
          className="space-y-4"
        >
          <span className="inline-block font-mono text-[10px] uppercase tracking-[0.3em] text-[#10b981] font-bold">
            THRIVEKIDS HUMANITARIAN ACTION
          </span>
          <h1 className="font-editorial italic text-stone-100 text-4xl sm:text-6xl lg:text-7xl leading-tight font-normal tracking-tight">
            “Every Child Deserves A Future <br className="hidden sm:inline" />
            Full Of Possibilities.”
          </h1>
          <p className="max-w-2xl mx-auto font-sans text-stone-300 text-base sm:text-lg font-light leading-relaxed">
            We operate outside the boundaries of conventional charities. By crafting asymmetrical educational, 
            clinical, and safeguarding initiatives, we co-create self-governing sanctuaries in the world’s most vulnerable regions.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 1 }}
          className="flex flex-col sm:flex-row justify-center items-center gap-4 pt-4"
        >
          <button
            onClick={onExplore}
            className="w-full sm:w-auto px-8 py-4 bg-white hover:bg-stone-100 text-stone-950 font-sans font-bold text-xs uppercase tracking-widest transition-all rounded-sm shadow-xl hover:shadow-2xl cursor-pointer"
          >
            Explore Living Narrative
          </button>
        </motion.div>

        {/* Scroll hint line */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 pointer-events-none"
        >
          <span className="font-mono text-[9px] uppercase tracking-widest text-stone-400">SCROLL DOWN</span>
          <div className="w-[1px] h-12 bg-gradient-to-b from-stone-400 to-transparent relative overflow-hidden">
            <motion.div
              animate={{ y: ['-100%', '100%'] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
              className="absolute top-0 left-0 right-0 h-4 bg-white"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
