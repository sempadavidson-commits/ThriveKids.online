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
      <div className="relative z-20 max-w-4xl mx-auto text-center space-y-8">
        
        {/* Urgent Campaign Pill */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="inline-block"
        >
          <button
            type="button"
            onClick={onUrgentClick}
            className="inline-flex items-center gap-2 px-4 py-1.5 bg-amber-500/20 hover:bg-amber-500/30 border border-amber-500/40 rounded-full text-amber-300 text-xs font-mono font-bold tracking-wider transition-all cursor-pointer shadow-lg"
          >
            <span className="w-2 h-2 rounded-full bg-amber-400 animate-ping" />
            <span>URGENT: Winter &amp; Seasonal Nutrition Relief Active</span>
            <ChevronRight className="w-3.5 h-3.5" />
          </button>
        </motion.div>

        {/* Main Headline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="space-y-5"
        >
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-tight">
            Every Child Deserves A Future Full Of Possibilities.
          </h1>
          
          <p className="max-w-2xl mx-auto text-stone-300 text-base sm:text-lg font-light leading-relaxed">
            We provide deep multi-sector support: building solar-powered schools, deploying mobile pediatric clinics, drilling clean water boreholes, and protecting children from exploitation.
          </p>
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="flex flex-col sm:flex-row justify-center items-center gap-4 pt-2"
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

        {/* Reassuring Badges */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.7 }}
          className="flex flex-wrap justify-center items-center gap-6 pt-6 text-xs text-stone-400 font-mono"
        >
          <div className="flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>501(c)(3) / UK Charity Certified</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Award className="w-4 h-4 text-amber-400" />
            <span>GuideStar Platinum Transparency</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Users className="w-4 h-4 text-emerald-400" />
            <span>232K+ Verified Beneficiaries</span>
          </div>
        </motion.div>

      </div>

    </section>
  );
}
