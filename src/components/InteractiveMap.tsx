import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { GEOGRAPHIC_IMPACT } from '../data';

// Map images or symbols for each region to show documentary-style pics on map interaction
const REGION_PHOTOS: Record<string, string> = {
  sub_saharan: 'https://images.unsplash.com/photo-1540479859555-17af45c78602?auto=format&fit=crop&q=80&w=400',
  south_asia: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&q=80&w=400',
  latin_america: 'https://images.unsplash.com/photo-1542038784456-1ea8e935640e?auto=format&fit=crop&q=80&w=400',
  central_asia: 'https://images.unsplash.com/photo-1509099836639-18ba1795216d?auto=format&fit=crop&q=80&w=400',
};

export default function InteractiveMap() {
  const [selectedRegion, setSelectedRegion] = useState(GEOGRAPHIC_IMPACT[0]);
  const [hoveredRegionId, setHoveredRegionId] = useState<string | null>(null);

  const currentPhoto = REGION_PHOTOS[selectedRegion.id] || REGION_PHOTOS.sub_saharan;

  return (
    <div className="bg-[#fcfbfa] border border-stone-220 rounded-sm p-6 sm:p-10 shadow-lg">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-10 border-b border-stone-200 pb-6">
        <div className="max-w-xl text-left">
          <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-[#10b981] font-bold block mb-2">
            05 / GEOCLASS SYSTEM
          </span>
          <h3 className="font-editorial italic font-normal text-2xl sm:text-4xl text-stone-900 tracking-tight leading-tight">
            Community Map
          </h3>
          <p className="font-sans text-xs sm:text-sm text-stone-550 mt-2">
            Interactive coordinates mapping the direct physical outposts served by ThriveKids. Hover over the pulsing target regions to explore field diaries, local schools, and clean water wells.
          </p>
        </div>
        <div className="flex flex-wrap gap-1.5 justify-start">
          {GEOGRAPHIC_IMPACT.map((reg) => (
            <button
              key={reg.id}
              onClick={() => setSelectedRegion(reg)}
              className={`px-3 py-1.5 text-[10px] font-mono uppercase tracking-widest transition-all duration-300 rounded-sm border cursor-pointer ${
                selectedRegion.id === reg.id
                  ? 'bg-stone-900 text-white border-stone-900'
                  : 'bg-white text-stone-600 border-stone-200 hover:bg-stone-50'
              }`}
            >
              {reg.region}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Left Side: SVG Map representation with active pulse nodes */}
        <div className="lg:col-span-7 bg-stone-950 rounded-sm relative p-4 border border-stone-900 overflow-hidden min-h-[300px] sm:min-h-[400px] flex items-center justify-center scanline-effect">
          
          {/* Subtle grid lines background overlay */}
          <div className="absolute inset-0 grid grid-cols-12 grid-rows-6 opacity-3 pointer-events-none">
            {Array.from({ length: 72 }).map((_, i) => (
              <div key={i} className="border-t border-l border-white"></div>
            ))}
          </div>

          <svg className="w-full h-auto max-w-[500px]" viewBox="0 0 100 80" xmlns="http://www.w3.org/2000/svg">
            {/* Elegant simplified continent paths */}
            <path d="M10,12 L22,10 L30,15 L25,32 L20,38 L25,48 L22,65 L18,72 L14,75 L16,60 L10,50 L5,45 Z" fill="#1f1c18" />
            <polygon points="28,4 35,6 38,2 32,1" fill="#1f1c18" />
            <path d="M42,28 L55,26 L64,30 L66,38 L62,45 L52,55 L48,68 L44,72 L42,65 L44,52 L38,42 L38,32 Z" fill="#1a1816" />
            <path d="M38,20 L50,15 L62,12 L80,10 L92,8 L95,15 L90,25 L88,38 L80,45 L72,40 L62,38 L55,30 L45,28 Z" fill="#171513" />
            <path d="M68,36 L75,32 L82,35 L86,44 L78,48 L72,44 Z M82,54 L88,52 L92,58 L88,64 L80,62 Z" fill="#1f1c18" />

            {/* Ambient styles for the connection lines animation flow */}
            <style>{`
              @keyframes line-flow {
                0% { stroke-dashoffset: 24; }
                100% { stroke-dashoffset: 0; }
              }
              .map-connection-line {
                stroke-dasharray: 4, 3;
                animation: line-flow 6s linear infinite;
              }
            `}</style>

            {/* Glowing animating connection links from London HQ (42, 22) to each outpost coord */}
            <g opacity="0.65" stroke="#10b981" strokeWidth="0.3" fill="none">
              {GEOGRAPHIC_IMPACT.map((reg) => (
                <line
                  key={`link-${reg.id}`}
                  x1="42"
                  y1="22"
                  x2={reg.clongitude}
                  y2={reg.clatitude}
                  className="map-connection-line"
                />
              ))}
            </g>

            {/* Headquarters (London) */}
            <circle cx="42" cy="22" r="1" fill="#f59e0b" />
            <text x="42" y="19" fill="#f59e0b" fontSize="2.5" fontWeight="bold" textAnchor="middle" fontFamily="monospace">
              TRUST CENTER
            </text>

            {/* Dynamic Interactive Region Pins */}
            {GEOGRAPHIC_IMPACT.map((reg) => {
              const isSelected = selectedRegion.id === reg.id;
              const isHovered = hoveredRegionId === reg.id;
              const active = isSelected || isHovered;

              return (
                <g 
                  key={reg.id} 
                  className="cursor-pointer"
                  onClick={() => setSelectedRegion(reg)}
                  onMouseEnter={() => setHoveredRegionId(reg.id)}
                  onMouseLeave={() => setHoveredRegionId(null)}
                >
                  {/* Outer breathing pulse circle */}
                  <circle 
                    cx={reg.clongitude} 
                    cy={reg.clatitude} 
                    r={active ? "5" : "2.5"} 
                    fill="#10b981" 
                    opacity={active ? "0.35" : "0.15"}
                    className="transition-all duration-300"
                  />
                  {/* Center pin node */}
                  <circle 
                    cx={reg.clongitude} 
                    cy={reg.clatitude} 
                    r="1.2" 
                    fill={active ? "#10b981" : "#78716c"}
                    stroke="#ffffff"
                    strokeWidth="0.3"
                  />
                </g>
              );
            })}
          </svg>

          {/* Glowing coordinates label overlay */}
          <div className="absolute top-4 right-4 text-right">
            <span className="block font-mono text-[9px] text-[#10b981] font-bold">SYSTEM ACTIVE</span>
            <span className="block font-mono text-[10px] text-stone-500">LATENCY 0ms</span>
          </div>
        </div>

        {/* Right Side: Region Details Card (National Geographic Editorial layout) */}
        <div className="lg:col-span-5 h-full flex flex-col justify-between bg-white border border-stone-220 rounded-sm p-6 sm:p-8 space-y-6">
          <div className="space-y-6 text-left">
            <div>
              <span className="font-mono text-[10px] tracking-widest text-stone-400 uppercase font-bold block">
                [ REGIONAL FILE EXPANSION ]
              </span>
              <h4 className="font-editorial italic font-normal text-xl sm:text-2xl text-stone-900 mt-1 border-b border-stone-150 pb-3">
                {selectedRegion.region}
              </h4>
            </div>

            {/* Splendid documentary-style picture showing the actual landscape/group */}
            <div className="h-44 bg-stone-905 overflow-hidden rounded-sm relative">
              <AnimatePresence mode="wait">
                <motion.img
                  key={selectedRegion.id}
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.4 }}
                  src={currentPhoto}
                  alt={selectedRegion.region}
                  className="w-full h-full object-cover grayscale opacity-90"
                />
              </AnimatePresence>
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 to-transparent"></div>
              <div className="absolute bottom-3 left-3 flex justify-between items-center w-[calc(100%-24px)] text-white font-mono text-[9px]">
                <span>Verified Outpost Document</span>
                <span>Active 2026</span>
              </div>
            </div>

            {/* Outpost metrics list (No generic icons) */}
            <div className="grid grid-cols-3 gap-3 border-b border-stone-100 pb-4">
              <div className="bg-stone-50 border border-stone-200 p-2 text-center rounded-sm">
                <span className="block font-mono text-[8px] text-stone-450 uppercase font-bold text-center">STUDENTS</span>
                <span className="font-display font-bold text-stone-900 text-sm">{selectedRegion.childrenSupported}</span>
              </div>
              <div className="bg-stone-50 border border-stone-200 p-2 text-center rounded-sm">
                <span className="block font-mono text-[8px] text-stone-450 uppercase font-bold text-center">SCHOOLS</span>
                <span className="font-display font-bold text-stone-900 text-sm">{selectedRegion.schoolsSupported}</span>
              </div>
              <div className="bg-stone-50 border border-stone-200 p-2 text-center rounded-sm">
                <span className="block font-mono text-[8px] text-stone-450 uppercase font-bold text-center">RESOURCES</span>
                <span className="font-display font-bold text-stone-900 text-sm">
                  {selectedRegion.boreholesBuilt > 0 ? `${selectedRegion.boreholesBuilt} Wells` : 'Farm Kits'}
                </span>
              </div>
            </div>

            {/* Narrative Focus statement */}
            <div className="space-y-1">
              <span className="block font-mono text-[9px] tracking-wider text-stone-400 uppercase">
                [STRATEGIC INTERVENTION OBJECTIVE]
              </span>
              <p className="font-editorial italic text-stone-850 text-sm leading-relaxed">
                "{selectedRegion.mainFocus}"
              </p>
            </div>
          </div>

          <div className="border-t border-stone-150 pt-4 flex justify-between items-center text-[10px] font-mono text-stone-400">
            <span>AUDITED DIRECT INDEX</span>
            <span className="text-[#10b981] font-bold">APPROVED LEDGER</span>
          </div>
        </div>
      </div>
    </div>
  );
}
