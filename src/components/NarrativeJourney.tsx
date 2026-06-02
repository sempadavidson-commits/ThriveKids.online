import React from 'react';
import { motion } from 'motion/react';

interface Milestone {
  year: string;
  title: string;
  quote: string;
  witness: string;
  achievement: string;
  description: string;
  photoUrl: string;
}

const MILESTONES: Milestone[] = [
  {
    year: '2016',
    title: 'The First Trench Office',
    quote: "“We found infants drinking from stagnant water potholes. The schools were dirt floors. Charity was not helping; they needed infrastructure.”",
    witness: 'Dr. Helen Vance, Founder',
    achievement: 'First 3 Solar Wells commissioned, freeing 1,200 kids for classroom education.',
    description: 'ThriveKids launched with three people in a borrowed room. We rejected standard shipping containers for modular field structures, placing accountability transparently into trust ledgers.',
    photoUrl: 'https://images.unsplash.com/photo-1541976590-7139414bc57d?auto=format&fit=crop&q=80&w=800'
  },
  {
    year: '2019',
    title: 'The Escape Network',
    quote: "“The children we rescued from the industrial loom mills were terrified. They didn’t need blankets—they needed legal shielding and secure sanctuaries.”",
    witness: 'Sarah Jenkins-Hume, Safeguarding Advocate',
    achievement: 'Hope Shelter constructed alongside 15 regional safeguarding committees.',
    description: 'Coordinating with local social attorneys, we launched critical hotlines and legal protection committees, shielding minors from hazardous looms, field labor, or child marriage threats.',
    photoUrl: 'https://images.unsplash.com/photo-1518156677180-95a2893f3e9f?auto=format&fit=crop&q=80&w=800'
  },
  {
    year: '2022',
    title: 'Mother-Owned Cooperatives',
    quote: "“To rescue a child, you must empower the mother. When female guardians establish their own kips or bakeries, families remain together.”",
    witness: 'Marcus Reynolds, CPA',
    achievement: '560 small-business starter grants funded; child separation rates plummeted by 91%.',
    description: 'Through our Family Strengthening programs, we combined psychological consulting with structured small start-up business capitals, enabling moms to take complete ownership of their household economies.',
    photoUrl: 'https://images.unsplash.com/photo-1542038784456-1ea8e935640e?auto=format&fit=crop&q=80&w=800'
  },
  {
    year: '2025',
    title: 'The 87.2% Efficiency Charter',
    quote: "“We proved we could maintain perfect CPA accredited rating reviews while moving millions directly into rural supplies, tuition, and equipment.”",
    witness: 'Global Audit Advisory Council',
    achievement: 'CPA Audit verified 87.2% direct project expenditure index.',
    description: 'A global auditing standard formally verified that ThriveKids operates in the highest tier of financial efficiency, guaranteeing that administrative bloat never crowds out direct humanitarian developments.',
    photoUrl: 'https://images.unsplash.com/photo-1509099836639-18ba1795216d?auto=format&fit=crop&q=80&w=800'
  }
];

export default function NarrativeJourney() {
  return (
    <section className="bg-stone-900 py-24 sm:py-32 text-stone-105-to-stone-400 overflow-hidden px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-24">
        
        {/* Editorial Title Header */}
        <div className="text-center max-w-2xl mx-auto space-y-4">
          <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-[#10b981] font-bold block">
            06 / NARRATIVE CHRONICLE
          </span>
          <h2 className="font-editorial font-normal italic text-4xl sm:text-5xl text-white tracking-tight">
            Why We Started
          </h2>
          <p className="font-sans text-stone-400 text-sm sm:text-base font-light leading-relaxed">
            We do not believe in boring timelines. Discover our decade of systemic resilience—told through the field voices, 
            pivotal achievements, and authentic real-life photography.
          </p>
        </div>

        {/* Scrolling Interactive Timeline Milestones */}
        <div className="relative border-l border-stone-800 ml-4 sm:ml-12 space-y-20 max-w-5xl mx-auto">
          {MILESTONES.map((milestone, idx) => {
            const isEven = idx % 2 === 0;

            return (
              <div key={milestone.year} className="relative pl-8 sm:pl-16 text-left">
                
                {/* Years indicator card */}
                <div className="absolute -left-4 sm:-left-6 top-0 w-8 h-8 sm:w-12 sm:h-12 bg-[#10b981] border-4 border-stone-900 rounded-full flex items-center justify-center font-display font-black text-white text-xs sm:text-base shadow-lg z-15">
                  {milestone.year.substring(2)}
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start bg-stone-950/40 border border-stone-850 p-6 sm:p-10 rounded-sm">
                  
                  {/* Photo & Caption */}
                  <div className="lg:col-span-5 space-y-4">
                    <div className="h-60 bg-stone-900 rounded-sm overflow-hidden relative">
                      <img 
                        src={milestone.photoUrl} 
                        alt={milestone.title} 
                        className="w-full h-full object-cover grayscale opacity-85"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-transparent to-transparent"></div>
                      <div className="absolute bottom-3 left-3 font-mono text-[9px] text-stone-400">
                        [ HISTORIC FIELD JOURNAL ATTESTATION ]
                      </div>
                    </div>
                    <div>
                      <span className="text-[10px] font-mono text-stone-500 uppercase block">KEY ACHIEVEMENT REPORT</span>
                      <strong className="font-sans font-semibold text-[#10b981] text-xs leading-relaxed block mt-1">
                        {milestone.achievement}
                      </strong>
                    </div>
                  </div>

                  {/* Narrative details & Direct Witness Quote */}
                  <div className="lg:col-span-7 space-y-6">
                    <div className="space-y-2">
                      <span className="font-mono text-[9px] text-[#10b981] tracking-[0.2em] uppercase font-bold block">
                        {milestone.year} ARCHIVE / {milestone.title}
                      </span>
                      <p className="font-sans text-stone-300 text-sm sm:text-base font-light leading-relaxed">
                        {milestone.description}
                      </p>
                    </div>

                    <div className="border-l-2 border-stone-800 pl-4 py-1 bg-stone-950/30 rounded-sm">
                      <p className="font-editorial text-stone-200 italic text-sm sm:text-base leading-relaxed">
                        {milestone.quote}
                      </p>
                      <span className="block font-mono text-[9px] text-stone-500 uppercase tracking-wider mt-2">
                        — Witnessed by: {milestone.witness}
                      </span>
                    </div>
                  </div>

                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
