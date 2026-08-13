import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Calendar, ChevronRight, CheckCircle, Award, Compass } from 'lucide-react';

interface Milestone {
  year: string;
  title: string;
  subtitle: string;
  description: string;
  stats: { label: string; value: string };
  image: string;
  achievement: string;
}

const MILESTONES: Milestone[] = [
  {
    year: '2011',
    title: 'The First Emergency Outpost',
    subtitle: 'Crisis Intervention in Ngong Basin',
    description: 'Founded by Dr. Helen Vance in response to devastating drought conditions in East Africa where child primary enrollment dropped below 22% due to water walks. Established our first 3 mobile feeding stations.',
    stats: { label: 'Initial Beneficiaries', value: '1,200 Children' },
    image: 'https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&q=80&w=800',
    achievement: 'Zero child mortality in target outposts during 2011 drought'
  },
  {
    year: '2015',
    title: 'The Clean Water Revolution',
    subtitle: '1st Deep Solar Aquifer Commissioned',
    description: 'Recognizing that clean water is the root precursor to school attendance, we deployed deep-well solar boreholes, cutting daily walking distances for girls from 8 miles down to 100 meters.',
    stats: { label: 'Boreholes Built', value: '45 Deep Wells' },
    image: 'https://images.unsplash.com/photo-1509099836639-18ba1795216d?auto=format&fit=crop&q=80&w=800',
    achievement: 'School attendance for young girls increased by 310%'
  },
  {
    year: '2019',
    title: 'Mobile Pediatric & Mental Health Network',
    subtitle: 'Trauma Counseling & Clinical Fleet',
    description: 'Expanded across borders into South Asia and Latin America, introducing containerized clinics, preventative immunization schedules, and certified child trauma counselors for refugee communities.',
    stats: { label: 'Clinical Treatments', value: '65,000+ Screenings' },
    image: 'https://images.unsplash.com/photo-1518156677180-95a2893f3e9f?auto=format&fit=crop&q=80&w=800',
    achievement: 'UNICEF child safeguarding compliance award'
  },
  {
    year: '2022',
    title: 'Mother-Led Cooperative Microfinance',
    subtitle: 'Sustainable Livelihoods Shield',
    description: 'Launched our Family Strengthening fund providing zero-interest micro-grants and financial training to mothers, enabling families to transition from aid recipients to self-sufficient community leaders.',
    stats: { label: 'Cooperatives Founded', value: '560 Enterprises' },
    image: 'https://images.unsplash.com/photo-1542038784456-1ea8e935640e?auto=format&fit=crop&q=80&w=800',
    achievement: '98.4% cooperative micro-loan repayment and reinvestment rate'
  },
  {
    year: '2026',
    title: '232,000+ Children Protected Worldwide',
    subtitle: '395 Districts Across 3 Continents',
    description: 'Today, ThriveKids operates as a gold-standard international foundation with 142 schools supported, 110 solar wells functioning continuously, and 87.2% of all resources flowing straight to front-line field projects.',
    stats: { label: 'Total Global Impact', value: '232,000+ Lives' },
    image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&q=80&w=800',
    achievement: 'Ranked 100/100 for Financial Transparency & Trust'
  }
];

export default function MilestoneTimeline() {
  const [selectedIdx, setSelectedIdx] = useState(4); // Default to current 2026
  const activeMilestone = MILESTONES[selectedIdx];

  return (
    <section className="bg-white py-20 sm:py-28 px-6 lg:px-8 border-b border-stone-200 text-stone-900">
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 border-b border-stone-200 pb-8 text-left">
          <div className="space-y-3">
            <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-emerald-600 font-bold block">
              15-YEAR VERIFIABLE CHRONICLE
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-stone-950">
              Our Journey of Impact (2011 – 2026)
            </h2>
            <p className="text-stone-600 text-sm sm:text-base font-light max-w-xl">
              From an emergency pediatric drought outpost to a global child welfare movement spanning 395 districts.
            </p>
          </div>

          <div className="text-right font-mono text-xs text-stone-400 hidden md:block">
            CHAPTER {selectedIdx + 1} OF {MILESTONES.length}
          </div>
        </div>

        {/* Interactive Year Selector Bar */}
        <div className="relative">
          {/* Connector line */}
          <div className="hidden sm:block absolute top-1/2 left-0 right-0 h-0.5 bg-stone-200 -translate-y-1/2 z-0" />

          <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 relative z-10">
            {MILESTONES.map((m, idx) => {
              const isSelected = selectedIdx === idx;
              return (
                <button
                  key={m.year}
                  type="button"
                  onClick={() => setSelectedIdx(idx)}
                  className={`p-4 rounded-xl border-2 text-left transition-all cursor-pointer ${
                    isSelected
                      ? 'bg-stone-900 text-white border-stone-900 shadow-lg scale-102'
                      : 'bg-stone-50 text-stone-700 border-stone-200 hover:bg-stone-100'
                  }`}
                >
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-lg sm:text-xl font-bold font-mono">{m.year}</span>
                    {isSelected && <span className="w-2 h-2 rounded-full bg-emerald-400" />}
                  </div>
                  <span className={`text-xs block font-semibold truncate ${isSelected ? 'text-emerald-400' : 'text-stone-600'}`}>
                    {m.title}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Milestone Detail Stage */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeMilestone.year}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="bg-stone-50 border border-stone-200 rounded-2xl p-6 sm:p-10 shadow-lg grid grid-cols-1 lg:grid-cols-12 gap-10 items-center text-left"
          >
            {/* Left Detail Content */}
            <div className="lg:col-span-7 space-y-6">
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-xs font-mono font-bold text-emerald-700">
                  <span>CHAPTER {activeMilestone.year}</span>
                  <span>•</span>
                  <span>{activeMilestone.subtitle}</span>
                </div>
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-stone-900 leading-tight">
                  {activeMilestone.title}
                </h3>
              </div>

              <p className="text-stone-700 text-sm sm:text-base leading-relaxed font-light">
                {activeMilestone.description}
              </p>

              {/* Milestone Achievement Badge */}
              <div className="p-4 bg-white border border-stone-200 rounded-xl space-y-1.5 shadow-2xs">
                <div className="flex items-center gap-2 text-xs font-mono font-bold text-amber-700">
                  <Award className="w-4 h-4 text-amber-500" />
                  <span>KEY AUDITED MILESTONE</span>
                </div>
                <p className="text-xs text-stone-800 font-medium">
                  {activeMilestone.achievement}
                </p>
              </div>

              {/* Stat highlight */}
              <div className="flex items-baseline gap-4 pt-2">
                <div>
                  <span className="text-[10px] font-mono uppercase text-stone-400 block font-bold">
                    {activeMilestone.stats.label}
                  </span>
                  <span className="text-2xl sm:text-3xl font-black font-mono text-emerald-700">
                    {activeMilestone.stats.value}
                  </span>
                </div>
              </div>
            </div>

            {/* Right Picture */}
            <div className="lg:col-span-5 h-72 sm:h-80 bg-stone-900 rounded-xl overflow-hidden shadow-md relative border border-stone-200">
              <img
                src={activeMilestone.image}
                alt={activeMilestone.title}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950/70 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 text-white text-xs font-mono">
                Historical Archive Photo // {activeMilestone.year}
              </div>
            </div>

          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
}
