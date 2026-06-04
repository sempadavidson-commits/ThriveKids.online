import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Program } from '../types';
import { ArrowRight, ShieldCheck, Activity, Target, Compass, Globe } from 'lucide-react';

interface ProgramIdentitiesProps {
  programs: Program[];
  initialSelectedId?: string;
}

export default function ProgramIdentities({ programs, initialSelectedId = 'education' }: ProgramIdentitiesProps) {
  const [activeId, setActiveId] = useState<string>(initialSelectedId);

  const activeProg = programs.find(p => p.id === activeId) || programs[0];

  const getProgramIcon = (id: string) => {
    if (id === 'education') return <Compass className="w-5 h-5 text-blue-500 animate-spin-slow" />;
    if (id === 'health') return <Activity className="w-5 h-5 text-emerald-500" />;
    if (id === 'protection') return <ShieldCheck className="w-5 h-5 text-amber-500" />;
    if (id === 'family') return <Target className="w-5 h-5 text-rose-500" />;
    return <Globe className="w-5 h-5 text-indigo-500" />;
  };

  const sectorLabels: Record<string, string> = {
    education: 'Sector 01 — Scholarship',
    health: 'Sector 02 — Medical',
    protection: 'Sector 03 — Safeguarding',
    family: 'Sector 04 — Livelihoods',
    community: 'Sector 05 — Infrastructure'
  };

  return (
    <section className="bg-[#fcfbfa] py-24 sm:py-32 px-6 lg:px-8 border-b border-stone-220 text-stone-900 text-left">
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Header Block and Tab navigation */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-6 border-b border-stone-200 pb-8">
          <div className="space-y-4">
            <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-[#10b981] font-bold block leading-none">
              08 / STRATEGIC SECTORS MATRIX
            </span>
            <h2 className="font-editorial italic font-normal text-3xl sm:text-5xl text-stone-950 leading-tight">
              Focus Initiatives
            </h2>
            <p className="font-sans text-xs sm:text-sm text-stone-600 max-w-sm font-light">
              We execute in the field through five distinct, co-created program sectors. Explore each unified under our clean Swiss-modernist architecture.
            </p>
          </div>

          {/* Luxury tab controls */}
          <div className="flex flex-wrap gap-2 pt-2">
            {programs.map((p) => {
              const isActive = activeId === p.id;
              return (
                <button
                  key={p.id}
                  onClick={() => setActiveId(p.id)}
                  className={`px-4 py-2.5 font-mono text-[10px] uppercase tracking-widest transition-all duration-350 rounded-sm border-2 cursor-pointer flex items-center gap-2 ${
                    isActive
                      ? 'bg-stone-900 text-white border-stone-900 shadow-lg scale-102 font-extrabold'
                      : 'bg-white text-stone-500 border-stone-200 hover:text-stone-950 hover:border-stone-900'
                  }`}
                >
                  <span className={`w-1.5 h-1.5 rounded-full ${isActive ? 'bg-[#10b981]' : 'bg-stone-300'}`}></span>
                  {p.title.split(' ')[0]}
                </button>
              );
            })}
          </div>
        </div>

        {/* Dynamic Presentation Panel */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeId}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start"
          >
            
            {/* Left Column: Visual Showcase & Highlight Stats Dashboard */}
            <div className="lg:col-span-5 space-y-6">
              
              {/* Image Frame with active coordinates details */}
              <div className="relative h-[320px] sm:h-[380px] bg-stone-900 border-2 border-stone-900 overflow-hidden rounded-sm group shadow-xl">
                <img
                  src={activeProg.image}
                  alt={activeProg.title}
                  className="w-full h-full object-cover grayscale opacity-90 group-hover:scale-102 transition-transform duration-700 ease-out"
                  referrerPolicy="no-referrer"
                />
                
                {/* Visual Gradients */}
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-stone-950/20 to-transparent"></div>

                {/* Top Corner Badge with Coordinate */}
                <div className="absolute top-4 left-4 bg-stone-950 border border-stone-800 text-white font-mono text-[9px] uppercase tracking-widest px-3 py-1 rounded-sm flex items-center gap-1.5 select-none">
                  {getProgramIcon(activeProg.id)}
                  <span>{sectorLabels[activeProg.id]}</span>
                </div>

                {/* Bottom Stats Banner Overlay overlaying bottom of picture */}
                <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-sm border-2 border-stone-900 p-4 rounded-sm flex justify-between items-center select-none shadow-lg">
                  <div className="space-y-0.5 text-left">
                    <span className="font-mono text-[8px] text-stone-500 uppercase tracking-widest block font-bold">
                      FIELD OUTCOME INDEX
                    </span>
                    <span className="font-sans font-bold text-stone-900 text-xs truncate max-w-[200px] block">
                      {activeProg.stats[0]?.label || 'Direct Impact'}
                    </span>
                  </div>
                  <div className="text-right">
                    <span className="font-editorial italic text-stone-900 font-bold text-lg leading-none block">
                      {activeProg.stats[0]?.value || '100%'}
                    </span>
                  </div>
                </div>

              </div>

              {/* Verified Field Testimonial or Case Quotation */}
              <div className="bg-stone-50 border-l-4 border-emerald-500 border border-stone-200 p-5 rounded-r-sm space-y-2">
                <span className="font-mono text-[8.5px] text-stone-450 uppercase tracking-widest block font-bold">
                  // VERIFIED NARRATIVE ATTESTATION
                </span>
                <p className="font-editorial italic text-stone-800 text-sm leading-relaxed font-light">
                  "{activeProg.impactStory}"
                </p>
              </div>

            </div>

            {/* Right Column: Deep Information & Bento-checklists */}
            <div className="lg:col-span-7 space-y-8">
              
              {/* Introduction Prose */}
              <div className="space-y-4">
                <h3 className="font-editorial italic font-normal text-3xl sm:text-4xl text-stone-950 leading-tight">
                  {activeProg.title} Agenda
                </h3>
                <p className="font-sans text-stone-702 text-xs sm:text-base leading-relaxed tracking-wide font-light">
                  {activeProg.fullDescription}
                </p>
              </div>

              {/* Bento checklist of primary objectives */}
              <div className="space-y-4">
                <span className="font-mono text-[9px] text-stone-450 uppercase tracking-widest block font-bold">
                  CORE PROGRAM OBJECTIVES & ACTIONS:
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {activeProg.objectives.map((obj, i) => (
                    <div
                      key={i}
                      className="p-4 bg-white border border-stone-200 rounded-sm hover:border-stone-900 transition-colors flex gap-3.5 items-start text-xs text-stone-750"
                    >
                      <div className="w-6 h-6 rounded-full bg-stone-100 text-stone-900 font-mono text-[10px] font-bold flex items-center justify-center shrink-0">
                        0{i + 1}
                      </div>
                      <div className="text-left space-y-1">
                        <span className="font-sans font-bold text-stone-900 text-[11px] block uppercase tracking-wide">
                          Task Guideline 0{i + 1}
                        </span>
                        <p className="font-sans font-light leading-relaxed text-stone-600">
                          {obj}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Target beneficiaries and supplementary metrics */}
              <div className="grid grid-cols-1 sm:grid-cols-12 gap-4 pt-4 border-t border-stone-200">
                
                {/* Target cohort block */}
                <div className="sm:col-span-7 p-4 bg-stone-50 border border-stone-200 rounded-sm space-y-2">
                  <span className="font-mono text-[8px] text-stone-500 uppercase tracking-widest block font-bold">
                    [ TARGET COHORT PROFILE ]
                  </span>
                  <p className="font-sans text-[11px] text-stone-600 leading-relaxed font-light">
                    {activeProg.targetBeneficiaries}
                  </p>
                </div>

                {/* Supplementary Metrics */}
                <div className="sm:col-span-5 grid grid-cols-2 gap-2">
                  {activeProg.stats.slice(1).map((st, i) => (
                    <div key={i} className="border border-stone-200 p-3 bg-white hover:bg-stone-50 transition-colors rounded-sm text-center flex flex-col justify-center">
                      <span className="font-mono text-[7px] text-stone-450 uppercase font-black tracking-wider leading-none block">
                        {st.label.split(' ')[0]}
                      </span>
                      <strong className="font-sans font-extrabold text-stone-950 text-base sm:text-lg mt-1 block">
                        {st.value}
                      </strong>
                    </div>
                  ))}
                </div>

              </div>

            </div>

          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
}
