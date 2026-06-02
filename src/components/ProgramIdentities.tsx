import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Program } from '../types';

interface ProgramIdentitiesProps {
  programs: Program[];
  initialSelectedId?: string;
}

export default function ProgramIdentities({ programs, initialSelectedId = 'education' }: ProgramIdentitiesProps) {
  const [activeId, setActiveId] = useState<string>(initialSelectedId);

  const activeProg = programs.find(p => p.id === activeId) || programs[0];

  return (
    <section className="py-24 sm:py-32 px-6 lg:px-8 bg-stone-50 border-b border-stone-220 text-stone-900">
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Header Block and Tab list */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 border-b border-stone-200 pb-8 text-left">
          <div className="space-y-4">
            <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-[#10b981] font-bold block">
              08 / FOCUS INITIATIVES
            </span>
            <h2 className="font-editorial italic font-normal text-3xl sm:text-5xl text-stone-950 leading-none">
              Strategic Sectors
            </h2>
            <p className="font-sans text-xs sm:text-sm text-stone-605 max-w-sm font-light">
              We execute in the field through five distinct, co-created program sectors. Experience each through its custom-designed visual paradigm.
            </p>
          </div>

          {/* Quick tab controls */}
          <div className="flex flex-wrap gap-2">
            {programs.map((p) => (
              <button
                key={p.id}
                onClick={() => setActiveId(p.id)}
                className={`px-3 py-1.5 font-mono text-[10px] uppercase tracking-widest transition-all duration-300 rounded-sm border cursor-pointer ${
                  activeId === p.id
                    ? 'bg-stone-900 text-white border-stone-900'
                    : 'bg-white text-stone-600 border-stone-205 hover:bg-stone-105'
                }`}
              >
                {p.title.split(' ')[0]}
              </button>
            ))}
          </div>
        </div>

        {/* ========================================================
            DYNAMIC SUB-COMPONENTS: THE UNIQUENESS RENDER ENGINE
            ======================================================== */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeProg.id}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.5 }}
          >
            
            {/* 1. EDUCATION INITIATIVE: SKETCHBOOK/NOTEBOOK LANGUAGE */}
            {activeProg.id === 'education' && (
              <div className="notebook-paper border-2 border-stone-300 p-8 sm:p-12 shadow-inner text-left max-w-5xl mx-auto space-y-8">
                {/* Notebook header lines */}
                <div className="border-b border-stone-300 pb-4 flex justify-between items-center">
                  <span className="font-mono text-xs text-stone-550">[ EDUCATION INDEX // SUBMISSION FILE ]</span>
                  <span className="font-mono text-[10px] text-stone-400">Pencil Draft Rev. 02</span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
                  <div className="md:col-span-7 space-y-6">
                    <h3 className="font-editorial italic font-normal text-3xl sm:text-4xl text-stone-900">
                      {activeProg.title}
                    </h3>
                    <p className="font-sans text-stone-700 text-sm sm:text-base leading-relaxed font-light">
                      {activeProg.fullDescription}
                    </p>
                    
                    {/* Hand-drawn style Notebook objectives layout */}
                    <div className="space-y-3 bg-stone-100/50 border border-stone-300/60 p-6 rounded-md">
                      <span className="block font-mono text-[10px] text-stone-500 uppercase font-bold">CORE FIELD CHALLENGES ARCHIVE:</span>
                      <ul className="space-y-2 text-xs sm:text-sm text-stone-705 list-decimal list-inside pl-1">
                        {activeProg.objectives.map((obj, i) => (
                          <li key={i} className="leading-relaxed">{obj}</li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="md:col-span-5 space-y-6">
                    {/* Sketch style picture */}
                    <div className="h-60 bg-stone-900 rounded-sm relative overflow-hidden border-2 border-stone-300 shadow-sm">
                      <img 
                        src={activeProg.image} 
                        alt="Education Outpost Photo" 
                        className="w-full h-full object-cover opacity-85 hover:scale-103 transition-transform duration-700 select-none grayscale"
                      />
                    </div>

                    {/* Handwriting style blockquote */}
                    <div className="border-l-4 border-[#10b981] pl-4 py-1 italic font-light font-editorial text-stone-800 text-sm sm:text-base">
                      "{activeProg.impactStory}"
                    </div>

                    {/* Simple typewriter highlights stats table */}
                    <div className="border-t-2 border-dashed border-stone-300 pt-4 space-y-2">
                      <span className="block font-mono text-[9px] text-stone-500 uppercase font-semibold">NOTEBOOK MEASURABLES:</span>
                      <div className="grid grid-cols-3 gap-2">
                        {activeProg.stats.map((st, i) => (
                          <div key={i} className="font-mono text-stone-800 bg-[#f7f6f2] border border-stone-220 p-2 text-center rounded-sm">
                            <span className="block text-[8px] text-stone-500 uppercase font-bold leading-none">{st.label.split(' ')[0]}</span>
                            <span className="block font-sans text-xs sm:text-sm font-semibold mt-1">{st.value}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* 2. HEALTH & NUTRITION: STERILE MEDICAL/SCIENTIFIC DESIGN */}
            {activeProg.id === 'health' && (
              <div className="max-w-5xl mx-auto bg-white border-2 border-stone-900 p-8 sm:p-12 text-left rounded-sm space-y-8 shadow-xl">
                {/* Clinical patient report layout */}
                <div className="border-b-2 border-stone-900 pb-4 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
                  <span className="font-mono text-[11px] text-[#10b981] font-bold uppercase tracking-widest">[ CLINICAL DIRECTIVE STATUS: ACTIVE ]</span>
                  <span className="font-mono text-xs text-stone-500">LEDGER REF: HL-904-NUTRITIONAL</span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
                  
                  {/* Left Column: Clinical datasets, objective guidelines */}
                  <div className="md:col-span-8 space-y-8">
                    <div className="space-y-4">
                      <h3 className="font-display font-black uppercase text-xl sm:text-2xl tracking-tighter text-stone-900">
                        {activeProg.title} — OUTPOST ADVISORY
                      </h3>
                      <p className="font-sans text-stone-705 text-xs sm:text-sm leading-relaxed font-light">
                        {activeProg.fullDescription}
                      </p>
                    </div>

                    {/* Scientific outline dataset table */}
                    <div className="border border-stone-900 rounded-sm">
                      <div className="bg-stone-900 text-white font-mono text-[9px] uppercase tracking-widest p-2.5 font-bold">
                        MEDICAL INTERVENTION WORKFLOW PROTOCOLS
                      </div>
                      <div className="divide-y divide-stone-200">
                        {activeProg.objectives.map((obj, i) => (
                          <div key={i} className="p-3 font-mono text-xs text-stone-800 flex gap-4 items-start">
                            <span className="text-[#10b981] font-bold">[0{i+1}]</span>
                            <span className="font-sans font-light text-stone-700">{obj}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Right Column: Imagery with high contrast and laboratory-style specs */}
                  <div className="md:col-span-4 space-y-6">
                    <div className="h-48 bg-stone-105 border-2 border-stone-900 overflow-hidden relative">
                      <img 
                        src={activeProg.image} 
                        alt="Clinic checkup" 
                        className="w-full h-full object-cover grayscale opacity-95 hover:scale-102 transition-transform duration-500"
                      />
                    </div>

                    {/* High intensity summary card */}
                    <div className="p-4 bg-stone-50 border border-stone-250 text-xs space-y-2">
                      <span className="block font-mono text-[9px] text-[#10b981] font-bold">CLINICAL VERBATIM</span>
                      <p className="font-editorial italic text-stone-850 leading-relaxed font-light">
                        "{activeProg.impactStory}"
                      </p>
                    </div>

                    {/* Static metric counts */}
                    <div className="space-y-2.5">
                      <span className="block font-mono text-[9px] text-stone-500 uppercase">MEASURABLES OUTCOMES:</span>
                      {activeProg.stats.map((st, i) => (
                        <div key={i} className="flex justify-between items-baseline border-b border-stone-200 pb-1.5 text-xs">
                          <span className="font-mono text-stone-500">{st.label.toUpperCase()}</span>
                          <strong className="font-display font-bold text-[#10b981]">{st.value}</strong>
                        </div>
                      ))}
                    </div>
                  </div>

                </div>
              </div>
            )}

            {/* 3. CHILD PROTECTION: ALERT & PRECAUTION-STYLE DESIGN */}
            {activeProg.id === 'protection' && (
              <div className="max-w-5xl mx-auto bg-stone-950 text-white p-8 sm:p-12 text-left rounded-sm border-t-8 border-amber-500 space-y-8 relative overflow-hidden">
                {/* Yellow diagonal secure bands style subtle asset */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/10 rotate-45 pointer-events-none"></div>

                <div className="border-b border-stone-800 pb-4 flex justify-between items-center">
                  <span className="font-mono text-[#f59e0b] text-[10px] uppercase tracking-widest font-bold">
                    [ CITIZEN DEFENSE PROTOCOL ACTIVE ]
                  </span>
                  <span className="font-mono text-xs text-stone-500">LEVEL B EXPOSURE SHIELD</span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
                  
                  {/* Left Column: Bold headings and warnings */}
                  <div className="md:col-span-8 space-y-6">
                    <h3 className="font-display font-black text-2xl sm:text-4xl text-white tracking-tight">
                      {activeProg.title.toUpperCase()} PROTOCOLS
                    </h3>
                    <p className="font-sans text-stone-300 text-sm sm:text-base leading-relaxed font-light">
                      {activeProg.fullDescription}
                    </p>

                    {/* Precaution checklist items with heavy amber shapes */}
                    <div className="space-y-4">
                      <span className="block font-mono text-[9px] text-stone-4a0 uppercase">SYSTEM SECURITIES IMPLEMENTED:</span>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {activeProg.objectives.map((obj, i) => (
                          <div key={i} className="p-4 bg-stone-900 border border-stone-800 text-xs flex gap-3 rounded-sm">
                            <span className="text-[#f59e0b] font-mono font-bold">[WARN]</span>
                            <span className="font-sans text-stone-300 leading-relaxed font-light">{obj}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Right Column: Secure dossier notes */}
                  <div className="md:col-span-4 space-y-6 z-10">
                    <div className="h-44 bg-stone-900 rounded-sm relative overflow-hidden border border-stone-800">
                      <img 
                        src={activeProg.image} 
                        alt="Child safety" 
                        className="w-full h-full object-cover grayscale contrast-125 hover:scale-102 transition-transform duration-500"
                      />
                    </div>

                    <div className="border border-stone-800 p-4 bg-stone-900 rounded-sm space-y-2">
                      <span className="block font-mono text-[9px] text-[#f59e0b] uppercase font-bold">VERIFIED SHIELD ACTION</span>
                      <p className="font-editorial italic text-stone-200 text-xs leading-relaxed font-light">
                        "{activeProg.impactStory}"
                      </p>
                    </div>

                    {/* Metric outlines */}
                    <div className="space-y-2">
                      <span className="block font-mono text-[9px] text-stone-500 uppercase">ASSURED RECORDS:</span>
                      <div className="grid grid-cols-2 gap-2">
                        {activeProg.stats.map((st, i) => (
                          <div key={i} className="bg-stone-900 p-2.5 rounded-sm border border-stone-800 text-center">
                            <span className="block text-[8px] text-stone-500 uppercase leading-none">{st.label}</span>
                            <strong className="block font-display font-bold text-white text-md mt-1">{st.value}</strong>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            )}

            {/* 4. FAMILY STRENGTHENING: WARM EDITORIAL MAGAZINE LAYOUT */}
            {activeProg.id === 'family' && (
              <div className="max-w-5xl mx-auto bg-[#faf8f4] border border-stone-250 p-8 sm:p-12 text-left rounded-sm space-y-8 shadow-md">
                
                <div className="border-b border-stone-200 pb-4 text-center">
                  <span className="font-mono text-[9px] text-stone-450 uppercase tracking-[0.2em] font-medium block">
                    — CHAPTER NARRATIVE 04 —
                  </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
                  
                  {/* Left Column: Large display heading, quotes */}
                  <div className="md:col-span-5 space-y-6">
                    <h3 className="font-editorial font-normal italic text-3xl sm:text-4xl text-stone-950 leading-tight">
                      {activeProg.title}
                    </h3>
                    
                    <div className="h-64 bg-stone-105 rounded-sm overflow-hidden relative border border-stone-200">
                      <img 
                        src={activeProg.image} 
                        alt="Family outpost" 
                        className="w-full h-full object-cover grayscale brightness-95"
                      />
                    </div>

                    <div className="font-editorial text-stone-800 italic leading-relaxed text-sm sm:text-base border-l-2 border-stone-400 pl-4">
                      "{activeProg.impactStory}"
                    </div>
                  </div>

                  {/* Right Column: Full description and outcomes */}
                  <div className="md:col-span-7 space-y-8">
                    <p className="font-sans text-stone-750 text-sm sm:text-base leading-relaxed font-light">
                      {activeProg.fullDescription}
                    </p>

                    <div className="space-y-4">
                      <span className="block font-mono text-[9px] text-stone-400 uppercase tracking-widest">
                        [LIVELIHOOD RESTORATION TARGETS]
                      </span>
                      <div className="space-y-3">
                        {activeProg.objectives.map((obj, i) => (
                          <div key={i} className="flex gap-4 items-start text-xs sm:text-sm text-stone-702">
                            <span className="font-mono text-[#10b981] font-bold">✓</span>
                            <p className="font-sans font-light leading-relaxed">{obj}</p>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Stats details */}
                    <div className="border-t border-stone-200 pt-6 grid grid-cols-3 gap-4">
                      {activeProg.stats.map((st, i) => (
                        <div key={i} className="text-left">
                          <span className="block font-mono text-[8px] text-stone-450 uppercase">{st.label}</span>
                          <strong className="font-display font-bold text-stone-900 text-lg sm:text-xl block mt-0.5">{st.value}</strong>
                        </div>
                      ))}
                    </div>
                  </div>

                </div>
              </div>
            )}

            {/* 5. COMMUNITY DEVELOPMENT: MECHANICAL SPECS BLUEPRINTS LAYOUT */}
            {activeProg.id === 'community' && (
              <div className="max-w-5xl mx-auto bg-white border border-stone-200 p-8 sm:p-12 text-left rounded-sm space-y-10 shadow-lg">
                
                <div className="border-b border-stone-200 pb-4 flex justify-between items-center flex-wrap gap-2">
                  <span className="font-mono text-xs text-stone-550">[ STRUCTURAL COMPLIANCE INDEX // COMMISSION RECORD ]</span>
                  <span className="font-mono text-[#10b981] text-xs font-bold font-mono">STABLE DEVELOPMENTAL FRAMEWORK</span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
                  
                  {/* Left Column: Full narrative description, solar gears */}
                  <div className="md:col-span-7 space-y-6">
                    <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-stone-900 uppercase">
                      {activeProg.title} BLUEPRINTS
                    </h3>
                    <p className="font-sans text-stone-705 text-xs sm:text-sm leading-relaxed font-light">
                      {activeProg.fullDescription}
                    </p>

                    {/* Blueprints specs steps */}
                    <div className="space-y-3">
                      <span className="block font-mono text-[9px] text-stone-450 uppercase font-black">INFRASTRUCTURE SPECIFICATION PARAMETERS:</span>
                      <div className="space-y-2">
                        {activeProg.objectives.map((obj, i) => (
                          <div key={i} className="p-3 bg-stone-50 border border-stone-200 rounded-sm font-mono text-xs text-stone-750">
                            <strong>COORD {100 + i * 20}X-Y // </strong>
                            <span className="font-sans font-light">{obj}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Right Column: Photo engineering blueprints specs mapping */}
                  <div className="md:col-span-5 space-y-6">
                    <div className="h-44 bg-stone-900 rounded-sm overflow-hidden relative border border-stone-200">
                      <img 
                        src={activeProg.image} 
                        alt="Community wells blueprint context" 
                        className="w-full h-full object-cover opacity-80 grayscale contrast-125"
                      />
                    </div>

                    <div className="border border-stone-200 p-4 rounded-sm text-xs space-y-1 bg-stone-50">
                      <span className="block font-mono text-[9px] text-[#10b981] font-bold">STRUCTURAL PERFORMANCE CASE STUDY</span>
                      <p className="font-editorial italic text-stone-810 leading-relaxed font-light">
                        "{activeProg.impactStory}"
                      </p>
                    </div>

                    {/* blue stats box grids */}
                    <div className="grid grid-cols-3 gap-2">
                      {activeProg.stats.map((st, i) => (
                        <div key={i} className="border border-stone-220 p-2 text-center bg-stone-50 rounded-sm">
                          <span className="block font-mono text-[7px] text-stone-450 uppercase font-bold leading-none">{st.label.substring(0, 10)}</span>
                          <span className="font-sans font-extrabold text-stone-900 text-xs sm:text-sm mt-1 block">{st.value}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                </div>
              </div>
            )}

          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
}
