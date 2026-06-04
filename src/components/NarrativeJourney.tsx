import React from 'react';
import { motion } from 'motion/react';
import { ShieldCheck, Heart, Award, ArrowUpRight } from 'lucide-react';

const ALTERNATING_IMAGES = [
  {
    url: 'https://images.unsplash.com/photo-1518156677180-95a2893f3e9f?auto=format&fit=crop&q=80&w=800',
    caption: 'Safe Haven Classroom Assembly',
    year: '2019'
  },
  {
    url: 'https://images.unsplash.com/photo-1542038784456-1ea8e935640e?auto=format&fit=crop&q=80&w=800',
    caption: 'Mother-Led Agricultural Microgrants',
    year: '2022'
  },
  {
    url: 'https://images.unsplash.com/photo-1509099836639-18ba1795216d?auto=format&fit=crop&q=80&w=800',
    caption: 'Therapeutic Nutrition Stabilization Center',
    year: '2024'
  },
  {
    url: 'https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&q=80&w=800',
    caption: 'Advanced Medical Board Candidates',
    year: '2026'
  },
  {
    url: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&q=80&w=800',
    caption: 'Clean Water Outpost Graduation Day',
    year: '2011'
  }
];

export default function NarrativeJourney() {
  // Triple the images to allow continuous infinite loop wrapping nicely
  const marqueeItems = [...ALTERNATING_IMAGES, ...ALTERNATING_IMAGES, ...ALTERNATING_IMAGES];

  return (
    <section className="bg-stone-900 text-stone-100 py-24 sm:py-32 overflow-hidden px-6 lg:px-8 border-b border-stone-800 text-left">
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Editorial Heading Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-baseline border-b border-stone-800 pb-12">
          <div className="lg:col-span-5 space-y-4">
            <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-[#10b981] font-bold block">
              06 / HISTORY & MISSION CHRONICLE
            </span>
            <h2 className="font-editorial font-normal italic text-4xl sm:text-6xl text-white tracking-tight">
              Why We Started
            </h2>
          </div>
          <div className="lg:col-span-7">
            <p className="font-mono text-xs text-stone-400 tracking-wider leading-relaxed font-light">
              THRIVEKIDS WAS FOUNDED NOT TO ADMINISTER PERPETUAL AID, BUT TO COMMISSION THE VERY INFRASTRUCTURES OF PERMANENT LIBERATION. EACH MILESTONE SIGNS AN ACTIVE LEAP FROM TRANSIENT CRISIS RESPONSE TO DURABLE ACCOUNTABILITY.
            </p>
          </div>
        </div>

        {/* Wordy narrative - Elegant Newspaper Editorial Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-stone-300 font-sans font-light text-sm sm:text-base leading-relaxed tracking-wide">
          
          <div className="space-y-6">
            <div className="flex items-center gap-3 border-b border-stone-800 pb-3">
              <span className="w-8 h-8 rounded-full bg-emerald-950 border border-emerald-500/20 flex items-center justify-center font-mono text-emerald-400 font-extrabold text-[10px]">
                I
              </span>
              <h4 className="font-sans font-bold text-white text-xs uppercase tracking-widest">
                The Outpost in the Sand (2011)
              </h4>
            </div>
            <p>
              In the scorching bone-dry conditions of East African border settlements, childhood was historically measured not in years, but in miles walked searching for water. Dr. Helen Vance, working as a regional pediatric director, witnessed of infants drinking from stagnant muddy potholes. The regional school attendance figures hovered below a bleak <strong className="font-bold text-white">22%</strong>; boys were smuggled to hazardous weavings and stone-breaking quarries, while young girls were bartered into early-marriage covenants as a survival mechanism.
            </p>
            <p>
              Rather than coordinating standard short-lived cargo container shipments, Helen and a handful of local attorneys chose a riskier, structural path: direct legal shielding and solar-powered boreholes. By drilling water right directly into the schoolyards, we instantly severed the primary driver of child labor. Children returned to desks because their daily survival task had been automated.
            </p>
          </div>

          <div className="space-y-6 md:border-l md:border-stone-850 md:pl-8">
            <div className="flex items-center gap-3 border-b border-stone-800 pb-3">
              <span className="w-8 h-8 rounded-full bg-amber-950 border border-amber-500/20 flex items-center justify-center font-mono text-amber-400 font-extrabold text-[10px]">
                II
              </span>
              <h4 className="font-sans font-bold text-white text-xs uppercase tracking-widest">
                Transcending Transient Relief (2016)
              </h4>
            </div>
            <p>
              By 2016, we understood that feeding a child without shielding them is a critical failure. Under Sarah Jenkins-Hume, JD, we authored a custom Child Safeguarding Framework—subsequently validated by UNICEF—that coordinates with local courts and enforcement officers. We launched secret sanctuaries, hotlines, and rescue patrols, physically intervening to pull kids out of illegal weaving mills and sand processing centers.
            </p>
            <p>
              Importantly, we recognized that to rescue the child, we must empower her mother. We established structured mother-owned bakeries, livestock cooperatives, and agro-farms. When family heads possess their own certified economic assets, child safety is organically guaranteed from within the household itself. Kids belong in classrooms, not working as domestic laborers.
            </p>
          </div>

          <div className="space-y-6 lg:border-l lg:border-stone-850 lg:pl-8 md:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-3 border-b border-stone-800 pb-3">
              <span className="w-8 h-8 rounded-full bg-stone-800 border border-stone-700 flex items-center justify-center font-mono text-stone-300 font-extrabold text-[10px]">
                III
              </span>
              <h4 className="font-sans font-bold text-white text-xs uppercase tracking-widest">
                The Ledger of Trust (2025)
              </h4>
            </div>
            <p>
              The greatest threat to philanthropic operations is not environmental droughts, but the erosion of public trust. Marcus Reynolds, CPA, resigned from ex-Deloitte audit directorship in 2021 to ensure our books represent absolute compliance. Under his strict financial guidance, we established a verified ledger protocol where standard overhead waste is squeezed out.
            </p>
            <div className="p-4 bg-stone-950/50 border border-stone-800 rounded-sm space-y-3">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#10b981]" />
                <span className="font-mono text-[9px] text-emerald-400 font-bold uppercase tracking-wider">AUDITOR ASSURED LEAGUE</span>
              </div>
              <p className="text-xs text-stone-400 leading-relaxed font-light">
                Today, a record-breaking <strong className="text-white font-semibold">87.2% of all expenditures</strong> flow programmatically into concrete site assets: tuition scholarships, mobile clinic therapies, solar water boreholes, and seeds. Under 10% goes to operations, and under 3% towards advertising.
              </p>
            </div>
          </div>

        </div>

        {/* ADVANCED MOTION MARQUEE OF ALTERNATING IMAGES */}
        <div className="space-y-3 pt-8 border-t border-stone-800">

          <div className="relative w-full overflow-hidden bg-stone-950/20 py-6 border border-stone-850 rounded-sm">
            {/* Left and Right ambient masks to soften edge transitions */}
            <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-stone-900 to-transparent z-10 pointer-events-none"></div>
            <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-stone-900 to-transparent z-10 pointer-events-none"></div>

            <motion.div
              className="flex gap-6 w-max"
              animate={{ x: [0, -2400] }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: 'loop',
                  duration: 40,
                  ease: 'linear'
                }
              }}
              whileHover={{ animationPlayState: 'paused' }}
            >
              {marqueeItems.map((item, idx) => (
                <div
                  key={idx}
                  className="w-[280px] sm:w-[320px] bg-stone-950 border border-stone-800 p-3.5 rounded-sm shrink-0 hover:border-emerald-500/50 transition-colors group"
                >
                  <div className="h-44 bg-stone-900 overflow-hidden relative rounded-sm border border-stone-850 mb-3">
                    <img
                      src={item.url}
                      alt={item.caption}
                      className="w-full h-full object-cover grayscale brightness-90 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-700"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute bottom-2 left-2 bg-stone-950/90 border border-stone-800 px-2 py-0.5 text-[8px] font-mono text-indigo-350 text-white rounded-sm">
                      YEAR {item.year}
                    </div>
                  </div>
                  <div className="flex justify-between items-start gap-2">
                    <span className="font-sans text-[11px] text-stone-400 font-light leading-snug group-hover:text-white transition-colors">
                      {item.caption}
                    </span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-stone-600 group-hover:text-[#10b981] transition-colors shrink-0 mt-0.5" />
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>

      </div>
    </section>
  );
}
