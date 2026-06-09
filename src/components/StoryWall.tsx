import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { SuccessStory } from '../types';
import { Heart, MapPin, Target, TrendingUp, Users, Award } from 'lucide-react';

interface StoryWallProps {
  stories: SuccessStory[];
}

export default function StoryWall({ stories }: StoryWallProps) {
  const [activeId, setActiveId] = useState<string>(stories[0]?.id || '');
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  const activeStory = stories.find(s => s.id === activeId) || stories[0];

  // Extended story data with additional field info
  const storyMetadata: Record<string, any> = {
    'story-1': {
      location: 'Kajiado District, Kenya',
      impact: 'Community Empowerment',
      timeline: '18 months',
      beneficiaries: 'Amina + 42 family members'
    },
    'story-2': {
      location: 'Industrial sector, Kenya',
      impact: 'Child Rescue & Rehabilitation',
      timeline: '24 months',
      beneficiaries: 'Daniel + 15 rescued peers'
    },
    'story-3': {
      location: 'Semi-arid pastoral zone',
      impact: 'Nutrition Recovery',
      timeline: '5 months',
      beneficiaries: 'Twin boys + 230 community members'
    }
  };

  const currentMetadata = storyMetadata[activeId];

  return (
    <section className="bg-gradient-to-b from-stone-50 via-emerald-50/30 to-stone-50 py-24 sm:py-32 px-6 lg:px-8 border-b border-stone-200 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-100/20 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-amber-100/20 rounded-full blur-3xl -z-10"></div>

      <div className="max-w-7xl mx-auto space-y-16 relative z-10">
        
        {/* Enhanced Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end"
        >
          <div className="lg:col-span-8 space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-100/50 border border-emerald-300 rounded-full backdrop-blur-sm">
              <Heart className="w-4 h-4 text-emerald-600" />
              <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-emerald-700 font-bold">
                04 / REAL IMPACT STORIES
              </span>
            </div>
            
            <div>
              <h2 className="font-editorial italic font-normal text-3xl sm:text-5xl text-stone-950 leading-tight mb-2">
                From Crisis to Hope
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-emerald-600 to-transparent"></div>
            </div>
            
            <p className="max-w-2xl font-sans text-stone-605 text-sm sm:text-base font-light leading-relaxed">
              Explore transformative field dossiers documenting our strategic interventions against extreme child vulnerabilities. Each story represents real lives changed through dedicated fieldwork.
            </p>
          </div>
          
          <div className="lg:col-span-4 lg:text-right hidden lg:block">
            <motion.div 
              animate={{ y: [0, 5, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="inline-block"
            >
              <span className="font-mono text-xs text-stone-500 bg-white/50 backdrop-blur px-4 py-2 rounded-lg border border-stone-200">
                ↓ Interact with stories below ↓
              </span>
            </motion.div>
          </div>
        </motion.div>

        {/* Main Interactive Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left: Enhanced Floating Tiles Grid */}
          <div className="lg:col-span-5">
            <div className="grid grid-cols-2 gap-4 sm:gap-6">
              {stories.map((story, idx) => {
                const isActive = story.id === activeId;
                const isHovered = hoveredId === story.id;
                const isEven = idx % 2 === 0;
                const metadata = storyMetadata[story.id];

                return (
                  <motion.div
                    key={story.id}
                    layout
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: idx * 0.1 }}
                    whileHover={{ scale: 1.05, y: -5 }}
                    className={`group cursor-pointer relative overflow-hidden rounded-2xl border-2 transition-all duration-300 ${
                      isActive 
                        ? 'border-emerald-500 shadow-2xl shadow-emerald-500/30 h-80' 
                        : 'border-stone-200 hover:border-emerald-400 h-72'
                    } ${isEven ? 'mt-0' : 'mt-8'}`}
                    onMouseEnter={() => setHoveredId(story.id)}
                    onMouseLeave={() => setHoveredId(null)}
                    onClick={() => setActiveId(story.id)}
                  >
                    {/* Image with overlay */}
                    <div className="absolute inset-0 overflow-hidden">
                      <motion.img 
                        src={story.coverImage} 
                        alt={story.childOrFamilyName}
                        className="w-full h-full object-cover"
                        animate={{ scale: isHovered || isActive ? 1.1 : 1 }}
                        transition={{ duration: 0.5 }}
                      />
                      <div className={`absolute inset-0 transition-all duration-300 ${
                        isActive ? 'bg-gradient-to-t from-emerald-950/95 via-emerald-950/50 to-transparent' 
                        : isHovered ? 'bg-gradient-to-t from-stone-950/90 via-stone-950/40 to-transparent'
                        : 'bg-gradient-to-t from-stone-950/80 via-transparent to-transparent'
                      }`}></div>
                    </div>

                    {/* Content overlay */}
                    <div className="absolute inset-0 flex flex-col justify-between p-4 sm:p-5">
                      {/* Top badge */}
                      <motion.div 
                        className={`flex items-center gap-2 w-fit px-3 py-1 rounded-full backdrop-blur-md text-xs font-mono font-bold transition-all ${
                          isActive 
                            ? 'bg-emerald-500/90 text-white'
                            : 'bg-stone-900/70 text-emerald-300 group-hover:bg-stone-900/90'
                        }`}
                      >
                        <span className="text-lg">{idx === 0 ? '🌟' : idx === 1 ? '🛡️' : '❤️'}</span>
                        [0{idx + 1}]
                      </motion.div>

                      {/* Bottom content */}
                      <div className="space-y-3">
                        <div>
                          <span className={`block text-[9px] font-mono font-bold uppercase transition-colors ${
                            isActive ? 'text-emerald-200' : 'text-emerald-300'
                          }`}>
                            {story.childOrFamilyName}
                          </span>
                          <h4 className="font-editorial text-white text-xs sm:text-sm mt-1 line-clamp-2 leading-snug font-normal italic">
                            {story.title}
                          </h4>
                        </div>

                        {/* Location hint - shows on hover/active */}
                        <motion.div 
                          initial={{ opacity: 0 }}
                          animate={{ opacity: isActive || isHovered ? 1 : 0 }}
                          className="text-[10px] text-emerald-100 flex items-center gap-1"
                        >
                          <MapPin className="w-3 h-3" />
                          {metadata?.location}
                        </motion.div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Right: Immersive Case Study Panel */}
          <div className="lg:col-span-7">
            <AnimatePresence mode="wait">
              {activeStory && (
                <motion.div
                  key={activeStory.id}
                  initial={{ opacity: 0, x: 40 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -40 }}
                  transition={{ duration: 0.5 }}
                  className="bg-white/95 backdrop-blur-sm border border-stone-200 rounded-2xl shadow-2xl overflow-hidden h-full flex flex-col"
                >
                  {/* Header with gradient */}
                  <div className="bg-gradient-to-r from-emerald-600 to-emerald-500 p-6 sm:p-8 text-white space-y-2">
                    <div className="flex items-center gap-2">
                      <span className="text-2xl">
                        {activeStory.id === 'story-1' ? '🌟' : activeStory.id === 'story-2' ? '🛡️' : '❤️'}
                      </span>
                      <span className="font-mono text-xs uppercase tracking-widest opacity-90">
                        CASE STUDY RESUME
                      </span>
                    </div>
                    <h3 className="font-editorial font-normal italic text-2xl sm:text-3xl leading-tight">
                      {activeStory.title}
                    </h3>
                  </div>

                  {/* Content */}
                  <div className="flex-grow overflow-y-auto p-6 sm:p-8 space-y-8">
                    {/* Impact metrics */}
                    <div className="grid grid-cols-2 gap-4">
                      <motion.div 
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.1 }}
                        className="bg-gradient-to-br from-emerald-50 to-emerald-100/50 border border-emerald-200 rounded-lg p-4"
                      >
                        <div className="flex items-center gap-2 mb-2">
                          <MapPin className="w-4 h-4 text-emerald-600" />
                          <span className="text-[10px] font-mono text-emerald-700 font-bold uppercase">Location</span>
                        </div>
                        <p className="text-sm font-semibold text-stone-900">{currentMetadata?.location}</p>
                      </motion.div>

                      <motion.div 
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.2 }}
                        className="bg-gradient-to-br from-amber-50 to-amber-100/50 border border-amber-200 rounded-lg p-4"
                      >
                        <div className="flex items-center gap-2 mb-2">
                          <Target className="w-4 h-4 text-amber-600" />
                          <span className="text-[10px] font-mono text-amber-700 font-bold uppercase">Timeline</span>
                        </div>
                        <p className="text-sm font-semibold text-stone-900">{currentMetadata?.timeline}</p>
                      </motion.div>
                    </div>

                    {/* Three-column intervention breakdown */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      {/* Challenge */}
                      <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="bg-red-50/50 border border-red-200 rounded-lg p-4 space-y-3"
                      >
                        <div className="flex items-center gap-2">
                          <div className="w-8 h-8 rounded-full bg-red-600 text-white flex items-center justify-center text-sm font-bold">1</div>
                          <span className="font-mono text-[9px] text-red-700 font-bold uppercase">THE CRISIS</span>
                        </div>
                        <p className="text-xs text-stone-700 leading-relaxed font-light">
                          {activeStory.challenge}
                        </p>
                      </motion.div>

                      {/* Intervention */}
                      <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                        className="bg-blue-50/50 border border-blue-200 rounded-lg p-4 space-y-3"
                      >
                        <div className="flex items-center gap-2">
                          <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center text-sm font-bold">2</div>
                          <span className="font-mono text-[9px] text-blue-700 font-bold uppercase">OUR ACTION</span>
                        </div>
                        <p className="text-xs text-stone-700 leading-relaxed font-light">
                          {activeStory.intervention}
                        </p>
                      </motion.div>

                      {/* Outcome */}
                      <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                        className="bg-emerald-50/50 border border-emerald-200 rounded-lg p-4 space-y-3"
                      >
                        <div className="flex items-center gap-2">
                          <div className="w-8 h-8 rounded-full bg-emerald-600 text-white flex items-center justify-center text-sm font-bold">3</div>
                          <span className="font-mono text-[9px] text-emerald-700 font-bold uppercase">OUTCOME</span>
                        </div>
                        <p className="text-xs text-stone-900 font-semibold leading-relaxed italic">
                          {activeStory.outcome}
                        </p>
                      </motion.div>
                    </div>

                    {/* Full width image with caption */}
                    <motion.div 
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.6 }}
                      className="space-y-3"
                    >
                      <div className="h-64 bg-stone-900 rounded-xl relative overflow-hidden group/img">
                        <img 
                          src={activeStory.coverImage} 
                          alt="Verified field documentation"
                          className="w-full h-full object-cover group-hover/img:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-transparent"></div>
                        <div className="absolute bottom-4 left-4 right-4">
                          <p className="text-white text-xs font-light italic">
                            Verified field documentation • Impact verified through independent assessment
                          </p>
                        </div>
                      </div>
                    </motion.div>

                    {/* Additional metrics */}
                    <motion.div 
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.7 }}
                      className="grid grid-cols-2 gap-3 pt-4 border-t border-stone-200"
                    >
                      <div className="flex items-center gap-2">
                        <Users className="w-4 h-4 text-emerald-600" />
                        <div>
                          <p className="text-[10px] text-stone-500 font-mono uppercase">Beneficiaries</p>
                          <p className="text-sm font-semibold text-stone-900">{currentMetadata?.beneficiaries}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <TrendingUp className="w-4 h-4 text-amber-600" />
                        <div>
                          <p className="text-[10px] text-stone-500 font-mono uppercase">Impact Area</p>
                          <p className="text-sm font-semibold text-stone-900">{currentMetadata?.impact}</p>
                        </div>
                      </div>
                    </motion.div>
                  </div>

                  {/* Footer */}
                  <div className="border-t border-stone-200 px-6 sm:px-8 py-4 bg-stone-50/50 flex items-center justify-between text-xs">
                    <span className="font-mono text-stone-500">THRIVEKIDS PORTFOLIO CERTIFICATE</span>
                    <div className="flex items-center gap-2">
                      <Award className="w-4 h-4 text-emerald-600" />
                      <span className="font-mono text-emerald-700 font-bold">{activeStory.readsCount.toLocaleString()} community reads</span>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

        </div>

      </div>
    </section>
  );
}
