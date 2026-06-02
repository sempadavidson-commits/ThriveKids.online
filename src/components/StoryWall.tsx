import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { SuccessStory } from '../types';

interface StoryWallProps {
  stories: SuccessStory[];
}

export default function StoryWall({ stories }: StoryWallProps) {
  const [activeId, setActiveId] = useState<string>(stories[0]?.id || '');

  const activeStory = stories.find(s => s.id === activeId) || stories[0];

  return (
    <section className="bg-stone-50 py-24 sm:py-32 px-6 lg:px-8 border-b border-stone-200">
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Editorial Heading Column */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
          <div className="lg:col-span-8 space-y-4">
            <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-[#10b981] font-bold block">
              04 / STORY ARCHIVE
            </span>
            <h2 className="font-editorial italic font-normal text-3xl sm:text-5xl text-stone-950 leading-tight">
              Interactive Story Wall
            </h2>
            <p className="max-w-2xl font-sans text-stone-605 text-sm sm:text-base font-light">
              Hover or tap on the floating visual tiles to dissect our specific field dossiers, mapping our strategic intervention against extreme vulnerabilities.
            </p>
          </div>
          <div className="lg:col-span-4 lg:text-right hidden lg:block">
            <span className="font-mono text-xs text-stone-400">
              [ DIRECT FIELD JOURNAL ACCESS ]
            </span>
          </div>
        </div>

        {/* Storyboard Layout: Interactive tiles and expansion panel */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left: Asymmetrical Floating Tiles Grid */}
          <div className="lg:col-span-5 grid grid-cols-2 gap-4">
            {stories.map((story, idx) => {
              const isActive = story.id === activeId;
              // Asymmetrical layout spacing offsets
              const isEven = idx % 2 === 0;

              return (
                <motion.div
                  key={story.id}
                  whileHover={{ scale: 1.02 }}
                  className={`bg-stone-900 rounded-sm overflow-hidden h-64 border cursor-pointer relative group transition-all duration-300 ${
                    isActive ? 'border-[#10b981] ring-1 ring-[#10b981]' : 'border-stone-220 hover:border-stone-400'
                  } ${isEven ? 'mt-0' : 'mt-8'}`}
                  onMouseEnter={() => setActiveId(story.id)}
                  onClick={() => setActiveId(story.id)}
                >
                  <img 
                    src={story.coverImage} 
                    alt={story.childOrFamilyName} 
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-950/90 via-stone-950/30 to-transparent"></div>
                  
                  {/* Floating badge */}
                  <div className="absolute top-3 left-3 bg-stone-950/80 backdrop-blur-xs px-2 py-0.5 rounded-xs border border-stone-800 text-[9px] font-mono text-stone-400">
                    [0{idx + 1}]
                  </div>

                  {/* Title text overlaid */}
                  <div className="absolute bottom-4 left-4 right-4">
                    <span className="block text-[10px] font-mono text-[#10b981] font-bold uppercase">
                      {story.childOrFamilyName}
                    </span>
                    <h4 className="font-editorial text-white text-xs sm:text-sm mt-0.5 line-clamp-2 leading-snug font-normal italic">
                      {story.title}
                    </h4>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Right: Immersive Expanded Case Study Panel (National Geographic layout) */}
          <div className="lg:col-span-7 bg-white border border-stone-200 rounded-sm shadow-xl p-6 sm:p-10 space-y-8 min-h-[480px] flex flex-col justify-between">
            <AnimatePresence mode="wait">
              {activeStory && (
                <motion.div
                  key={activeStory.id}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.5 }}
                  className="space-y-6 text-left"
                >
                  <div className="border-b border-stone-100 pb-4">
                    <span className="text-[10px] uppercase font-mono tracking-widest text-[#10b981] font-bold block">
                      CASE STUDY RESUME
                    </span>
                    <h3 className="font-editorial font-normal italic text-2xl sm:text-3xl text-stone-900 mt-2">
                      {activeStory.title}
                    </h3>
                  </div>

                  {/* Case study challenge / intervention / outcome elements */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs sm:text-sm">
                    {/* Column 1: Challenge */}
                    <div className="space-y-2">
                      <span className="block font-mono text-[9px] tracking-wider text-stone-400 uppercase">
                        [01 / THE CRISIS]
                      </span>
                      <p className="text-stone-700 leading-relaxed font-light">
                        {activeStory.challenge}
                      </p>
                    </div>

                    {/* Column 2: Intervention */}
                    <div className="space-y-2">
                      <span className="block font-mono text-[9px] tracking-wider text-[#10b981] uppercase">
                        [02 / THE ACTION]
                      </span>
                      <p className="text-stone-700 leading-relaxed font-light">
                        {activeStory.intervention}
                      </p>
                    </div>

                    {/* Column 3: Outcome */}
                    <div className="space-y-2">
                      <span className="block font-mono text-[9px] tracking-wider text-stone-400 uppercase">
                        [03 / OUTCOME METRICS]
                      </span>
                      <p className="text-stone-900 font-editorial italic font-semibold leading-relaxed">
                        {activeStory.outcome}
                      </p>
                    </div>
                  </div>

                  {/* Wide picture and stats overlay */}
                  <div className="h-56 bg-stone-900 rounded-sm relative overflow-hidden">
                    <img 
                      src={activeStory.coverImage} 
                      alt="Verified Action Document" 
                      className="w-full h-full object-cover opacity-75"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-transparent to-transparent"></div>
                    <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs text-white">
                      <span className="font-mono text-stone-300">verified field dossier</span>
                      <span className="font-mono bg-stone-950/80 px-2 py-1 rounded border border-stone-800 text-[10px]">
                        READS: {activeStory.readsCount}
                      </span>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            <div className="border-t border-stone-100 pt-4 flex flex-col sm:flex-row justify-between items-start sm:items-center text-xs text-stone-500 gap-4 mt-6">
              <span className="font-mono">THRIVEKIDS PORTFOLIO CERTIFICATE</span>
              <span className="font-mono bg-stone-100 text-stone-700 px-3 py-1 rounded uppercase font-bold text-[9px]">
                Active Index: {activeStory?.relatedProgramId}
              </span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
