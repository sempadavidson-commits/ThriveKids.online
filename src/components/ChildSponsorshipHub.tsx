import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Heart, Search, Filter, ShieldCheck, Sparkles, User, MapPin, Check } from 'lucide-react';

export interface ChildProfile {
  id: string;
  name: string;
  age: number;
  region: string;
  continent: 'East Africa' | 'South Asia' | 'Latin America';
  monthlyCost: number;
  ambition: string;
  challenge: string;
  needs: string[];
  image: string;
  isSponsored: boolean;
}

const INITIAL_CHILDREN: ChildProfile[] = [
  {
    id: 'ch-1',
    name: 'Nuru K.',
    age: 8,
    region: 'Kajiado Basin, Kenya',
    continent: 'East Africa',
    monthlyCost: 35,
    ambition: 'Wants to become a school teacher and poet',
    challenge: 'Missed early schooling due to daily 4-mile water walks during rural dry seasons. Newly connected to our local solar borehole.',
    needs: ['First-grade textbook kit', 'Classroom uniform & sturdy shoes', 'Daily midday hot meal program'],
    image: 'https://images.unsplash.com/photo-1509099836639-18ba1795216d?auto=format&fit=crop&q=80&w=600',
    isSponsored: false
  },
  {
    id: 'ch-2',
    name: 'Tariq A.',
    age: 11,
    region: 'Sindh Frontier, South Asia',
    continent: 'South Asia',
    monthlyCost: 40,
    ambition: 'Aspires to be an agricultural mechanical technician',
    challenge: 'Rehabilitated from hazardous brick kiln labor. Enrolled in our accelerated literacy and STEM tutoring bridge classroom.',
    needs: ['Secondary mathematics tutoring', 'Nutritional micro-nutrient supplements', 'Mobile pediatric checkups'],
    image: 'https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&q=80&w=600',
    isSponsored: false
  },
  {
    id: 'ch-3',
    name: 'Elena M.',
    age: 7,
    region: 'Chiapas Highlands, Mexico',
    continent: 'Latin America',
    monthlyCost: 35,
    ambition: 'Dreams of becoming a community pediatric nurse',
    challenge: 'Supported through our Mother-Led Weaving Cooperative after rural frost wiped out family coffee harvest.',
    needs: ['Primary immunization booster kit', 'Bilingual Spanish/indigenous reading library', 'Winter woolen school clothing'],
    image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&q=80&w=600',
    isSponsored: false
  },
  {
    id: 'ch-4',
    name: 'Amina S.',
    age: 13,
    region: 'Turkana Desert, East Africa',
    continent: 'East Africa',
    monthlyCost: 45,
    ambition: 'Wants to study civil water infrastructure engineering',
    challenge: 'First girl in her extended clan to transition into secondary secondary school. Protected from early child marriage.',
    needs: ['Secondary tuition scholarship', 'Solar desk study lamp', 'Sanitary hygiene & health kit'],
    image: 'https://images.unsplash.com/photo-1524061614234-8449607d3bb7?auto=format&fit=crop&q=80&w=600',
    isSponsored: false
  },
  {
    id: 'ch-5',
    name: 'Devraj P.',
    age: 9,
    region: 'Rajasthan Rural Border, South Asia',
    continent: 'South Asia',
    monthlyCost: 35,
    ambition: 'Loves computer science and arithmetic puzzles',
    challenge: 'Enrolled in our container solar computer academy after local municipal school closed.',
    needs: ['Digital literacy tablet access', 'Daily fortified milk & lentil breakfast', 'Classroom supplies pack'],
    image: 'https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&q=80&w=600',
    isSponsored: false
  },
  {
    id: 'ch-6',
    name: 'Mateo R.',
    age: 6,
    region: 'Andean Foothills, Peru',
    continent: 'Latin America',
    monthlyCost: 30,
    ambition: 'Fascinated by environmental biology and forestry',
    challenge: 'Family participates in our organic greenhouse agriculture cooperative, securing steady nutrition.',
    needs: ['Early childhood cognitive developmental pack', 'Warm alpaca winter jacket', 'Pediatric dental screening'],
    image: 'https://images.unsplash.com/photo-1542038784456-1ea8e935640e?auto=format&fit=crop&q=80&w=600',
    isSponsored: false
  }
];

interface ChildSponsorshipHubProps {
  onSponsor: (child: ChildProfile) => void;
}

export default function ChildSponsorshipHub({ onSponsor }: ChildSponsorshipHubProps) {
  const [selectedContinent, setSelectedContinent] = useState<string>('All');
  const [sponsoredIds, setSponsoredIds] = useState<string[]>([]);
  const [activeChildModal, setActiveChildModal] = useState<ChildProfile | null>(null);

  const filteredChildren = selectedContinent === 'All'
    ? INITIAL_CHILDREN
    : INITIAL_CHILDREN.filter(c => c.continent === selectedContinent);

  const handlePledgeSponsor = (child: ChildProfile) => {
    setSponsoredIds(prev => [...prev, child.id]);
    onSponsor(child);
    setActiveChildModal(null);
  };

  return (
    <section className="bg-[#fcfbfa] py-20 sm:py-28 px-6 lg:px-8 border-b border-stone-200 text-stone-900">
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 border-b border-stone-200 pb-8 text-left">
          <div className="space-y-3">
            <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-emerald-600 font-bold block">
              DIRECT 1-TO-1 SPONSORSHIP ALLIANCE
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-stone-950">
              Sponsor a Child. Change a Destiny.
            </h2>
            <p className="text-stone-600 text-sm sm:text-base font-light max-w-2xl">
              100% of your monthly sponsorship goes straight to school tuition, clean water, medical checks, and family protection. Receive verified quarterly progress updates.
            </p>
          </div>

          {/* Region Filter Buttons */}
          <div className="flex flex-wrap gap-2">
            {['All', 'East Africa', 'South Asia', 'Latin America'].map((region) => (
              <button
                key={region}
                type="button"
                onClick={() => setSelectedContinent(region)}
                className={`px-4 py-2 text-xs font-bold rounded-lg border transition-all cursor-pointer ${
                  selectedContinent === region
                    ? 'bg-stone-900 text-white border-stone-900 shadow-sm'
                    : 'bg-white text-stone-600 border-stone-200 hover:bg-stone-100 hover:text-stone-900'
                }`}
              >
                {region}
              </button>
            ))}
          </div>
        </div>

        {/* Children Profile Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredChildren.map((child) => {
            const isSponsored = sponsoredIds.includes(child.id);

            return (
              <div
                key={child.id}
                className="bg-white border border-stone-200 rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all flex flex-col justify-between group text-left"
              >
                <div>
                  {/* Photo with Region Chip */}
                  <div className="h-56 bg-stone-900 relative overflow-hidden">
                    <img
                      src={child.image}
                      alt={child.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-transparent to-transparent" />

                    <div className="absolute top-3 left-3 bg-stone-950/80 backdrop-blur-xs text-white font-mono text-[9px] uppercase tracking-wider px-2.5 py-1 rounded border border-stone-800 flex items-center gap-1">
                      <MapPin className="w-3 h-3 text-emerald-400" />
                      <span>{child.region}</span>
                    </div>

                    <div className="absolute bottom-3 left-3 right-3 flex justify-between items-end text-white">
                      <div>
                        <strong className="text-xl font-bold block">{child.name}</strong>
                        <span className="text-xs text-stone-300 font-mono">Age {child.age}</span>
                      </div>
                      <div className="text-right">
                        <span className="text-lg font-bold font-mono text-emerald-400 block">${child.monthlyCost}</span>
                        <span className="text-[10px] text-stone-300 font-mono">/month</span>
                      </div>
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-6 space-y-4">
                    <div className="space-y-1">
                      <span className="text-[10px] font-mono uppercase text-emerald-700 font-bold block">
                        AMBITION &amp; DREAM
                      </span>
                      <p className="text-xs text-stone-800 font-semibold italic">
                        "{child.ambition}"
                      </p>
                    </div>

                    <p className="text-xs text-stone-600 font-light leading-relaxed">
                      {child.challenge}
                    </p>

                    {/* Needs list */}
                    <div className="space-y-1.5 pt-2 border-t border-stone-100">
                      <span className="text-[9px] font-mono uppercase text-stone-400 font-bold block">
                        Direct Deliverables Covered:
                      </span>
                      {child.needs.map((need, i) => (
                        <div key={i} className="flex items-center gap-1.5 text-[11px] text-stone-700 font-medium">
                          <Check className="w-3 h-3 text-emerald-600 shrink-0" />
                          <span>{need}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Footer Action */}
                <div className="p-6 pt-0">
                  {isSponsored ? (
                    <div className="w-full py-3 bg-emerald-50 text-emerald-800 border border-emerald-200 font-bold text-xs uppercase tracking-wider rounded-xl text-center flex items-center justify-center gap-2">
                      <Check className="w-4 h-4 stroke-[3]" />
                      <span>Sponsorship Active</span>
                    </div>
                  ) : (
                    <button
                      type="button"
                      onClick={() => handlePledgeSponsor(child)}
                      className="w-full py-3.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs uppercase tracking-wider rounded-xl shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <Heart className="w-4 h-4 fill-white" />
                      <span>Sponsor {child.name} (${child.monthlyCost}/mo)</span>
                    </button>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Safeguarding Notice */}
        <div className="bg-emerald-50 border border-emerald-200 p-4 rounded-xl flex items-center gap-3 text-xs text-emerald-950 text-left">
          <ShieldCheck className="w-5 h-5 text-emerald-700 shrink-0" />
          <span>
            <strong>UNICEF Child Shield Protocol:</strong> Child surnames and GPS locations are protected to ensure 100% safety. Sponsors receive secure letters, verified school reports, and direct annual impact updates.
          </span>
        </div>

      </div>
    </section>
  );
}
