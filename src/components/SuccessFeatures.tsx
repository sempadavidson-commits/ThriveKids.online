import React, { useState } from 'react';
import { motion } from 'motion/react';
import { SuccessStory } from '../types';

interface SuccessFeaturesProps {
  stories: SuccessStory[];
}

export default function SuccessFeatures({ stories }: SuccessFeaturesProps) {
  const [selectedStoryId, setSelectedStoryId] = useState<string>('story-1');

  // Related programs callback list
  const getProgramTitle = (id: string) => {
    if (id === 'education') return 'Education Support Agenda';
    if (id === 'protection') return 'Child Protection Advisory';
    return 'Malnourishment Clinical Response';
  };

  const handleShare = (network: string, title: string) => {
    // Elegant simulation
    alert(`Dossier shared to ${network}: "${title}"`);
  };

  return (
    <section className="bg-[#fcfbfa] py-24 sm:py-32 px-6 lg:px-8 border-b border-stone-220">
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Editorial Directory Navigation */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 border-b border-stone-200 pb-8 text-left">
          <div className="space-y-3">
            <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-[#10b981] font-bold block">
              07 / EDITORIAL DOSSIERS
            </span>
            <h2 className="font-editorial italic font-normal text-3xl sm:text-5xl text-stone-950 leading-none">
              Success Stories
            </h2>
            <p className="font-sans text-xs sm:text-sm text-stone-605 max-w-lg font-light leading-relaxed">
              Every child has a narrative. Selected field studies representing our interventions, compiled in custom, handcrafted layout grids.
            </p>
          </div>
          
          {/* Custom selector representing index files */}
          <div className="flex flex-wrap gap-2">
            {stories.map((s, idx) => (
              <button
                key={s.id}
                onClick={() => setSelectedStoryId(s.id)}
                className={`px-4 py-2 font-mono text-[10px] uppercase tracking-widest transition-all duration-300 rounded-sm border cursor-pointer ${
                  selectedStoryId === s.id
                    ? 'bg-stone-900 border-stone-900 text-white'
                    : 'bg-white border-stone-200 text-stone-600 hover:bg-stone-50'
                }`}
              >
                File 0{idx + 1} — {s.childOrFamilyName.split(' ')[0]}
              </button>
            ))}
          </div>
        </div>

        {/* ========================================================
            LAYOUT 1: AMINA'S STORY - SPLIT ASYMMETRICAL EDITORIAL LAYOUT
            ======================================================== */}
        {selectedStoryId === 'story-1' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start text-left">
            {/* Column Left: Hero Image & Audio/Video Testimonial simulation */}
            <div className="lg:col-span-5 space-y-6">
              <div className="h-[450px] bg-stone-955 rounded-sm overflow-hidden relative border border-stone-220">
                <img 
                  src="https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&q=80&w=800" 
                  alt="Amina Diallo studying" 
                  className="w-full h-full object-cover grayscale brightness-95"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-transparent to-transparent"></div>
                <div className="absolute top-4 left-4 bg-stone-950/80 px-2 py-1 border border-stone-800 text-[10px] font-mono text-stone-300">
                  CASE FILE #DF-110
                </div>
              </div>

              {/* Video/Audio Testimonial Simulator Block */}
              <div className="bg-[#f3f0ea] border border-stone-250 p-6 rounded-sm space-y-4">
                <span className="block font-mono text-[9px] text-stone-500 uppercase">LIVE WITNESS ACCOUNT [SIMULATION]</span>
                <p className="font-editorial text-stone-950 italic text-sm leading-relaxed">
                  "I remember when they brought the uniform and paid my tuition. For the first time in centuries, my name was in a school ledger."
                </p>
                <div className="flex items-center gap-3">
                  {/* Styled audio player bar */}
                  <div className="w-10 h-10 rounded-full bg-stone-900 text-white flex items-center justify-center font-mono text-xs cursor-pointer">
                    PLAY
                  </div>
                  <div className="flex-grow space-y-1">
                    <div className="h-1 bg-stone-300 w-full rounded-full relative overflow-hidden">
                      <div className="absolute left-0 top-0 bottom-0 bg-[#10b981] w-[45%]"></div>
                    </div>
                    <span className="block font-mono text-[9px] text-stone-400">AMINA DIALLO DIRECT INTERVIEW (1:24m)</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Column Right: Case Details, Metrics, and Related program details */}
            <div className="lg:col-span-7 space-y-8">
              <div className="space-y-4">
                <span className="inline-block px-2.5 py-0.5 bg-stone-100 border border-stone-220 text-stone-650 font-mono text-[9px] uppercase tracking-wider rounded-full">
                  Education Scholarship Agenda
                </span>
                <h3 className="font-editorial italic font-normal text-3xl sm:text-4xl text-stone-950 leading-tight">
                  Amina's Horizon: From Forced Labor to Village Scholar
                </h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 border-b border-stone-200 pb-8">
                <div className="space-y-2">
                  <span className="font-mono text-[9px] text-stone-400 uppercase tracking-widest block">[01 / THE CONSTRAINTS]</span>
                  <p className="text-stone-700 font-sans text-xs sm:text-base font-light leading-relaxed">
                    Amina was forced to abandon her primary textbooks at age 11 to break stone blocks in a regional gravel quarry to support her single mother. The household livelihood stood at under US$1.20 a day, exposing them to nutrition crises and early-marriage coercion.
                  </p>
                </div>
                <div className="space-y-2">
                  <span className="font-mono text-[9px] text-[#10b981] uppercase tracking-widest block">[02 / THE RESTRUCTURING]</span>
                  <p className="text-stone-700 font-sans text-xs sm:text-base font-light leading-relaxed">
                    Our local chapter enrolled Amina in our Education Support dossier, funding a full tuition scholarship and school uniforms. We concurrently registered her mother in our Family Strengthening project, distributing a livelihood cash microgrant to build a village canteen.
                  </p>
                </div>
              </div>

              {/* Before vs After Impact Visualizer (No templates!) */}
              <div className="bg-stone-900 text-stone-300 p-6 sm:p-8 rounded-sm space-y-6">
                <h4 className="font-mono text-[10px] text-[#10b981] uppercase tracking-wider font-bold">
                  OUTCOME ASSESSMENT MATRIX
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 divide-y sm:divide-y-0 sm:divide-x divide-stone-800">
                  <div className="space-y-2 text-left">
                    <span className="text-[10px] uppercase font-mono text-stone-500">WITHOUT RESTRUCTURING</span>
                    <strong className="block text-stone-400 font-display text-xl sm:text-2xl font-bold">0% LITERACY TREND</strong>
                    <p className="text-xs text-stone-500 leading-relaxed font-light">
                      Projected to continue hazardous industrial manual work with no formal education or livelihood security.
                    </p>
                  </div>
                  <div className="space-y-2 sm:pl-6 text-left">
                    <span className="text-[10px] uppercase font-mono text-[#10b981]">WITH DIRECT INTERVENTION</span>
                    <strong className="block text-white font-display text-xl sm:text-2xl font-bold">MEDICINE CANDIDATE</strong>
                    <p className="text-xs text-stone-400 leading-relaxed font-light font-editorial italic">
                      "Completed top of class; currently her village's first female university applicant studying medical sciences."
                    </p>
                  </div>
                </div>
              </div>

              {/* Related Program and Social Share */}
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center pt-4 border-t border-stone-200 text-xs text-stone-500 gap-4">
                <span className="font-mono">INDEX PORTFOLIO: {getProgramTitle('education')}</span>
                <div className="flex items-center gap-2">
                  <span className="font-mono text-stone-400">SHARE:</span>
                  <button onClick={() => handleShare('LinkedIn', 'Amina Story')} className="hover:text-stone-900 font-mono tracking-wider text-[10px] uppercase cursor-pointer">LINKEDIN</button>
                  <span className="text-stone-300 font-sans">|</span>
                  <button onClick={() => handleShare('Twitter', 'Amina Story')} className="hover:text-stone-900 font-mono tracking-wider text-[10px] uppercase cursor-pointer">X</button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ========================================================
            LAYOUT 2: DANIEL'S STORY - MONOCHROME INTERVIEW REPORT DESIGN
            ======================================================== */}
        {selectedStoryId === 'story-2' && (
          <div className="bg-stone-950 text-white border border-stone-800 p-8 sm:p-12 rounded-sm space-y-12 text-left">
            
            {/* Header section representing a confidential document report */}
            <div className="border-b border-stone-800 pb-6 flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
              <div className="space-y-2">
                <span className="font-mono text-[#f59e0b] text-[10px] uppercase tracking-widest font-bold block">
                  CONFIDENTIAL DOSSIER / SAFEGUARDING
                </span>
                <h3 className="font-editorial italic font-normal text-3xl text-white">
                  Daniel's Safety: Escaping Hazard to Find Safe Haven
                </h3>
              </div>
              <span className="font-mono text-xs text-stone-500">REF: CP-9022-DANIEL</span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
              
              {/* Left Column: Bold statement, photo with investigative grain */}
              <div className="lg:col-span-4 space-y-6">
                <div className="h-48 bg-stone-900 rounded-sm overflow-hidden relative border border-stone-800">
                  <img 
                    src="https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&q=80&w=800" 
                    alt="Daniel in secure school environment" 
                    className="w-full h-full object-cover grayscale contrast-125 brightness-90"
                  />
                  <div className="absolute inset-0 bg-stone-950/40"></div>
                </div>

                <div className="border border-stone-800 p-4 rounded-sm space-y-2">
                  <span className="block font-mono text-[9px] text-stone-500 uppercase">SUBJECT ASSURANCE PROFILE</span>
                  <span className="block font-semibold text-white text-xs">Daniel, Age 9</span>
                  <p className="text-stone-400 text-xs font-light leading-relaxed">
                    Identity verified under our strict UNICEF compliant Safeguarding policies. Specific village outlines omitted for protective defense.
                  </p>
                </div>
              </div>

              {/* Right Column: Case timeline transcripts, medical charts, and outcomes */}
              <div className="lg:col-span-8 space-y-8">
                
                {/* Transcript narrative layout */}
                <div className="space-y-6">
                  <div className="space-y-1">
                    <span className="block font-mono text-[9px] text-stone-500 uppercase tracking-widest">
                      [01 / DISCOVERY TRANSCRIPT]
                    </span>
                    <blockquote className="font-editorial italic text-stone-300 text-base leading-relaxed pl-4 border-l-2 border-stone-700">
                      "We discovered Daniel smuggled into a hazardous weaving mill. He worked 14-hour manual shifts under extreme hot climates, suffering double pulmonary lung infections and severe physical burn scars."
                    </blockquote>
                  </div>

                  <div className="space-y-1">
                    <span className="block font-mono text-[9px] text-stone-500 uppercase tracking-widest">
                      [02 / REHABILITATION INTERVENTION]
                    </span>
                    <p className="text-stone-300 font-sans text-xs sm:text-sm font-light leading-relaxed">
                      Our Child Protection social representatives coordinated with local courts to secure Daniel’s evacuation, bringing him directly to our Hope Sanctuary. Here, he accepted emergency clinical therapies and psychiatric counseling. We located his grandmother and processed legal guardianship documents and support packets.
                    </p>
                  </div>
                </div>

                {/* Protection metrics layout */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-stone-900 p-6 rounded-sm border border-stone-800">
                  <div>
                    <span className="font-mono text-[9px] text-stone-500 uppercase">OUTPOST RECTIFICATION</span>
                    <strong className="block text-[#f59e0b] font-display text-lg font-bold mt-1">2 YEARS IN COGNITIVE PROTECTION</strong>
                    <p className="text-stone-400 text-xs mt-1 leading-relaxed font-light">
                      Daniel now resides securely with his grandmother. School tuition and tutoring books are fully subsidized by our local education sponsors.
                    </p>
                  </div>
                  <div>
                    <span className="font-mono text-[9px] text-stone-500 uppercase font-bold">PHYSICAL SAFEGUARD VERIFICATION</span>
                    <strong className="block text-[#10b981] font-display text-lg font-bold mt-1">100% HEALTH SCORE STABLE</strong>
                    <p className="text-stone-400 text-xs mt-1 leading-relaxed font-light">
                      Primary pediatric clinic checkups confirm that Daniel’s historical respiratory infections have fully cleared.
                    </p>
                  </div>
                </div>

              </div>

            </div>

            {/* Bottom ledger share details */}
            <div className="border-t border-stone-800 pt-6 flex flex-col sm:flex-row justify-between items-start sm:items-center text-stone-500 text-xs gap-4">
              <span className="font-mono">INDEX COMPLIANCE: {getProgramTitle('protection')}</span>
              <div className="flex items-center gap-2">
                <span className="font-mono text-stone-600">SHARE SECURE PATH:</span>
                <button onClick={() => handleShare('LinkedIn', 'Daniel Confidential')} className="hover:text-white font-mono text-[10px] uppercase cursor-pointer">LINKEDIN</button>
                <span className="text-stone-800">|</span>
                <button onClick={() => handleShare('Twitter', 'Daniel Confidential')} className="hover:text-white font-mono text-[10px] uppercase cursor-pointer">X</button>
              </div>
            </div>

          </div>
        )}

        {/* ========================================================
            LAYOUT 3: MWANGI TWINS - ADVANCED SCIENTIFIC CLINICAL FILE LAYOUT
            ======================================================== */}
        {selectedStoryId === 'story-3' && (
          <div className="bg-white border-2 border-stone-900 p-8 sm:p-12 text-left rounded-sm space-y-12">
            
            {/* National Geographic scientific metadata header */}
            <div className="border-b-2 border-stone-900 pb-4">
              <div className="flex justify-between items-baseline flex-wrap gap-2">
                <span className="font-mono text-[11px] text-[#10b981] font-bold uppercase tracking-widest">
                  [ CLINICAL RECOVERY ASSESSMENT REPORT ]
                </span>
                <span className="font-mono text-xs text-stone-550">PUBLISHED STATUS: VERIFIED 2026</span>
              </div>
              <h3 className="font-editorial font-normal italic text-3xl sm:text-4xl text-stone-900 mt-2">
                Nourishing Joy: Overcoming Severe Malnourishment
              </h3>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              
              {/* Left Column: Clinic photo grid representation */}
              <div className="lg:col-span-5 space-y-4">
                <div className="h-56 bg-stone-100 rounded-sm overflow-hidden relative border border-stone-200">
                  <img 
                    src="https://images.unsplash.com/photo-1509099836639-18ba1795216d?auto=format&fit=crop&q=80&w=800" 
                    alt="MWANGI TWINS nutritional checkup" 
                    className="w-full h-full object-cover grayscale opacity-95"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-950/70 to-transparent"></div>
                  <span className="absolute bottom-3 left-3 font-mono text-[9px] text-white">CLINIC PATIENT FILE #00122</span>
                </div>

                <div className="bg-stone-50 p-4 border border-stone-200 rounded-sm">
                  <span className="block font-mono text-[8px] text-stone-450 uppercase font-bold text-center border-b border-stone-200 pb-1.5 mb-2">PATIENT IDENTIFICATION</span>
                  <div className="grid grid-cols-2 gap-2 text-xs font-mono text-stone-600">
                    <div>NAME: Mwangi Twins</div>
                    <div>SEX: Male (Liam & Noah)</div>
                    <div>COHORT: Ages 14-Months</div>
                    <div>CLASS: Extreme acute marasmus</div>
                  </div>
                </div>
              </div>

              {/* Right Column: Dynamic clinical progress indicators & charts */}
              <div className="lg:col-span-7 space-y-6">
                
                <div className="space-y-4">
                  <span className="block font-mono text-[9px] text-stone-500 uppercase tracking-widest">[CLINICAL DESCRIPTION]</span>
                  <p className="text-stone-700 font-sans text-xs sm:text-sm font-light leading-relaxed">
                    At just 14 months old, rural twins Liam and Noah suffered from extreme acute muscle-wasting malnutrition (marasmus) due to a prolonged regional multi-year drought index. Their guardian spent hours walking arid lands search-seeking raw nutrition with no success.
                  </p>
                  <p className="text-stone-700 font-sans text-xs sm:text-sm font-light leading-relaxed">
                    Our cooperative mobile clinic identified the kids. They were integrated into our severe acute malnourishment outpatient wing, stabilized with crucial pediatric electrolytes, and fed therapeutic Peanut Butter pastes (RUTF) continuously over five months.
                  </p>
                </div>

                {/* Dynamic Patient Progress Bars (No generic templates) */}
                <div className="space-y-4 border-t border-b border-stone-200 py-6">
                  <span className="block font-mono text-[9px] text-stone-400 uppercase tracking-widest">[HEALTH INDICATORS PERFORMANCE]</span>
                  
                  <div className="space-y-1.5">
                    <div className="flex justify-between text-xs font-mono text-stone-700">
                      <span>INITIAL DRY SCISSORS MASS INDEX (BMI)</span>
                      <strong className="text-rose-600 font-bold">CRITICAL RETARDATION [35%]</strong>
                    </div>
                    <div className="h-2 bg-stone-100 rounded-full overflow-hidden border border-stone-200">
                      <div className="h-full bg-rose-500 rounded-full w-[35%]"></div>
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <div className="flex justify-between text-xs font-mono text-stone-700">
                      <span>CURRENT OUTPATIENT WEIGHT CLASS (BMI)</span>
                      <strong className="text-[#10b981] font-bold">DEVELOPMENTAL NORMAL RANGE [92%]</strong>
                    </div>
                    <div className="h-2 bg-stone-100 rounded-full overflow-hidden border border-stone-200">
                      <div className="h-full bg-[#10b981] rounded-full w-[92%]"></div>
                    </div>
                  </div>
                </div>

                {/* Strategic Outcome */}
                <div className="bg-stone-50 border p-4 rounded-sm">
                  <span className="block font-mono text-[9px] text-stone-450 uppercase mb-1 font-bold">LONG-TERM STRUCTURAL OUTCOME:</span>
                  <p className="font-editorial italic text-stone-900 text-sm leading-relaxed">
                    "Both kids recovered to robust health benchmarks. We concurrently engineered and commissioned a deep solar borehole well in their village, allowing families to harvest sustainable organic vegetables to secure nutritional buffers against future dry seasons."
                  </p>
                </div>

              </div>

            </div>

            {/* Magazine footer block */}
            <div className="border-t-2 border-stone-900 pt-6 flex flex-col sm:flex-row justify-between items-start sm:items-center text-stone-500 text-xs gap-4">
              <span className="font-mono">INDEX SPECIFICATION: {getProgramTitle('health')}</span>
              <div className="flex items-center gap-2">
                <span className="font-mono text-stone-500">DOSSIER DISSEMINATION:</span>
                <button onClick={() => handleShare('LinkedIn', 'Mwangi Recovery')} className="hover:text-stone-900 font-mono text-[10px] uppercase font-bold cursor-pointer">LINKEDIN</button>
                <span className="text-stone-300">|</span>
                <button onClick={() => handleShare('Twitter', 'Mwangi Recovery')} className="hover:text-stone-900 font-mono text-[10px] uppercase font-bold cursor-pointer">X</button>
              </div>
            </div>

          </div>
        )}

      </div>
    </section>
  );
}
