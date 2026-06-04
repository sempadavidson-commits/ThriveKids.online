import React from 'react';
import { motion } from 'motion/react';
import { SuccessStory } from '../types';
import { CheckCircle2, AlertCircle, Sparkles, Share2, ArrowRight } from 'lucide-react';

interface SuccessFeaturesProps {
  stories: SuccessStory[];
  onShare?: (network: string, title: string) => void;
}

export default function SuccessFeatures({ stories, onShare }: SuccessFeaturesProps) {
  
  const handleShare = (e: React.MouseEvent, network: string, title: string) => {
    e.stopPropagation();
    if (onShare) {
      onShare(network, title);
    } else {
      alert(`Dossier shared to ${network}: "${title}"`);
    }
  };

  // We duplicate stories to ensure continuous smooth scrolling with absolutely no blank gaps
  const doubledStories = [...stories, ...stories, ...stories, ...stories];

  const getProgramTag = (id: string) => {
    if (id === 'education') return { label: 'EDUCATION INCLUSION', color: 'text-blue-600 bg-blue-50 border-blue-200' };
    if (id === 'protection') return { label: 'CHILD DEFENSE', color: 'text-amber-600 bg-amber-50 border-amber-200' };
    if (id === 'health') return { label: 'CLINICAL CLINIC', color: 'text-emerald-600 bg-emerald-50 border-emerald-200' };
    return { label: 'FIELD DIRECTIVE', color: 'text-stone-600 bg-stone-50 border-stone-200' };
  };

  return (
    <section className="bg-stone-50 py-24 sm:py-32 px-6 lg:px-8 border-b border-stone-200 overflow-hidden text-left">
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Section Editorial Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 border-b border-stone-200 pb-8">
          <div className="space-y-3">
            <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-[#10b981] font-bold block">
              07 / FIELD IMPACT LEDGER REVIEWS
            </span>
            <h2 className="font-editorial italic font-normal text-3xl sm:text-5xl text-stone-950 leading-none">
              Success Stories
            </h2>
            <p className="font-sans text-xs sm:text-sm text-stone-600 max-w-xl font-light leading-relaxed">
              Every index dossier represents a child rescued, supported, and structurally secured. Review our verified case files in this live animating impact marquee.
            </p>
          </div>
          <div className="flex items-center gap-1 bg-stone-100 px-3 py-1.5 rounded border border-stone-200">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping"></span>
            <span className="font-mono text-[9px] uppercase tracking-wider text-stone-500 font-extrabold">
              Hover to Pause Scanning
            </span>
          </div>
        </div>

        {/* ADVANCED LIVE MOTION MARQUEE */}
        <div className="relative py-4">
          {/* Edge Ambient Visual Overlays */}
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-stone-50 to-transparent z-10 pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-stone-50 to-transparent z-10 pointer-events-none"></div>

          <motion.div
            className="flex gap-8 w-max"
            animate={{ x: [0, -3200] }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: 'loop',
                duration: 50,
                ease: 'linear'
              }
            }}
            whileHover={{ animationPlayState: 'paused' }}
          >
            {doubledStories.map((story, idx) => {
              const tag = getProgramTag(story.relatedProgramId);
              return (
                <div
                  key={`${story.id}-${idx}`}
                  className="w-[480px] bg-white border-2 border-stone-900 rounded-sm p-6 sm:p-8 shrink-0 hover:shadow-2xl transition-all duration-300 flex flex-col justify-between space-y-6 relative"
                >
                  {/* Ledger index indicator */}
                  <div className="absolute top-0 right-8 transform -translate-y-1/2 bg-stone-900 text-white font-mono text-[9px] uppercase tracking-widest px-3 py-1 rounded-sm border border-stone-900">
                    DOSSIER FD-0{ (idx % 3) + 1 }
                  </div>

                  {/* Top Bar with Tags */}
                  <div className="flex justify-between items-center select-none pt-2">
                    <span className={`px-2.5 py-1 rounded-sm border text-[8px] font-mono font-extrabold ${tag.color}`}>
                      {tag.label}
                    </span>
                    <span className="font-mono text-[9px] text-stone-400">
                      FILED: {story.date}
                    </span>
                  </div>

                  {/* Main Subject Intro */}
                  <div className="space-y-2">
                    <h3 className="font-editorial italic font-normal text-2xl text-stone-950 leading-tight">
                      {story.title}
                    </h3>
                    <div className="font-sans text-xs font-bold text-stone-900">
                      Subject: {story.childOrFamilyName}
                    </div>
                  </div>

                  {/* Asymmetrical Narrative Sections (Before / Intervention / After) */}
                  <div className="space-y-4 pt-4 border-t border-stone-100 flex-grow">
                    
                    {/* The Challenge */}
                    <div className="space-y-1">
                      <div className="flex items-center gap-1.5">
                        <AlertCircle className="w-3.5 h-3.5 text-rose-500 shrink-0" />
                        <span className="font-mono text-[8.5px] text-rose-600 font-extrabold uppercase tracking-wide">THE CONSTRAINTS</span>
                      </div>
                      <p className="font-sans text-[11.5px] text-stone-600 font-light leading-relaxed">
                        {story.challenge}
                      </p>
                    </div>

                    {/* The Strategic Action */}
                    <div className="space-y-1">
                      <div className="flex items-center gap-1.5">
                        <Sparkles className="w-3.5 h-3.5 text-blue-500 shrink-0" />
                        <span className="font-mono text-[8.5px] text-blue-600 font-extrabold uppercase tracking-wide">STRAPEGIC INTERVENTION</span>
                      </div>
                      <p className="font-sans text-[11.5px] text-stone-600 font-light leading-relaxed">
                        {story.intervention}
                      </p>
                    </div>

                    {/* The Outcome */}
                    <div className="space-y-1 bg-stone-50 p-3 rounded border border-stone-200">
                      <div className="flex items-center gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                        <span className="font-mono text-[8.5px] text-emerald-600 font-extrabold uppercase tracking-wide">VERIFIED FIELD OUTCOME</span>
                      </div>
                      <p className="font-editorial italic text-[12px] text-stone-850 font-medium leading-relaxed mt-1">
                        "{story.outcome}"
                      </p>
                    </div>

                  </div>

                  {/* Bottom Panel with Verification and Share Channels */}
                  <div className="flex items-center justify-between pt-4 border-t border-stone-200 text-xs select-none">
                    <div className="flex items-center gap-1.5 text-emerald-700">
                      <span className="inline-block w-1.5 h-1.5 bg-emerald-500 rounded-full"></span>
                      <span className="font-mono text-[9px] font-bold uppercase tracking-wider">CPA VERIFIED STATUS</span>
                    </div>

                    <div className="flex items-center gap-3">
                      <Share2 className="w-3.5 h-3.5 text-stone-400" />
                      <button
                        onClick={(e) => handleShare(e, 'LinkedIn', story.title)}
                        className="hover:text-stone-950 font-mono text-[9px] uppercase tracking-wider cursor-pointer font-bold"
                      >
                        LN
                      </button>
                      <span className="text-stone-300 font-sans">|</span>
                      <button
                        onClick={(e) => handleShare(e, 'Twitter', story.title)}
                        className="hover:text-stone-950 font-mono text-[9px] uppercase tracking-wider cursor-pointer font-bold"
                      >
                        X
                      </button>
                    </div>
                  </div>

                </div>
              );
            })}
          </motion.div>
        </div>

      </div>
    </section>
  );
}
