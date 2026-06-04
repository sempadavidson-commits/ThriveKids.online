import React from 'react';
import { GEOGRAPHIC_IMPACT } from '../data';

export default function InteractiveMap() {
  return (
    <div className="bg-[#fcfbfa] border border-stone-220 rounded-sm p-6 sm:p-10 shadow-lg">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-10 border-b border-stone-200 pb-6">
        <div className="max-w-xl text-left">
          <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-[#10b981] font-bold block mb-2">
            05 / GEOCLASS SYSTEM
          </span>
          <h3 className="font-sans font-bold text-2xl sm:text-4xl text-stone-900 tracking-tight leading-tight">
            Community Map
          </h3>
          <p className="font-sans text-xs sm:text-sm text-stone-550 mt-2">
            Continuous global live connectivity mapping the exact physical outposts and direct relief corridors served by ThriveKids. Real-time telemetry connection vectors flow directly from our Global Trust Center.
          </p>
        </div>
      </div>

      {/* Full-width Realistic Style World Map Container */}
      <div className="w-full bg-stone-950 rounded-sm relative p-4 border border-stone-900 overflow-hidden min-h-[350px] sm:min-h-[480px] flex flex-col justify-between scanline-effect">
        
        {/* Subtle grid lines background overlay */}
        <div className="absolute inset-0 grid grid-cols-12 grid-rows-6 opacity-[0.03] pointer-events-none">
          {Array.from({ length: 72 }).map((_, i) => (
            <div key={i} className="border-t border-l border-white"></div>
          ))}
        </div>

        {/* Floating coordinates indicator labels */}
        <div className="flex justify-between items-center text-[9px] font-mono tracking-wider text-stone-500 relative z-10 p-2">
          <span>SYSTEM CORRIDOR STATUS: GREEN</span>
          <span>LATENCY OVERRIDE: STABLE</span>
        </div>

        {/* Map SVG element */}
        <div className="w-full flex justify-center items-center my-auto p-2 sm:p-6">
          <svg className="w-full h-auto max-w-[850px]" viewBox="0 0 100 60" xmlns="http://www.w3.org/2000/svg">
            
            <style>{`
              @keyframes line-flow {
                0% { stroke-dashoffset: 60; }
                100% { stroke-dashoffset: 0; }
              }
              @keyframes pulse-ring {
                0% { r: 1.5; opacity: 0.8; }
                100% { r: 6; opacity: 0; }
              }
              .telemetry-link {
                stroke-dasharray: 6, 4;
                animation: line-flow 3.5s linear infinite;
              }
              .ping-ring {
                animation: pulse-ring 2s cubic-bezier(0.215, 0.61, 0.355, 1) infinite;
              }
            `}</style>

            {/* HIGHLY REALISTIC CONTINENT OUTLINES (Sleek Dark Mode Stylization) */}
            <g fill="#1a1816" stroke="#2a2724" strokeWidth="0.25">
              {/* North America */}
              <path d="M 5 22 C 5 15, 8 13, 12 11 Q 16 10, 20 12 T 26 15 T 30 14 T 30 20 T 26 23 T 23 26 T 17 28 T 12 28 Z" />
              {/* Central America connection */}
              <path d="M 23 26 Q 22 28, 22 30 T 21 33 T 22 35 Z" />
              {/* South America */}
              <path d="M 22 35 C 24 35, 26 38, 27 41 Q 28 44, 29 48 T 26 56 T 22 50 T 20 44 T 21 38 Z" />
              {/* Eurasia (Europe + Asia) */}
              <path d="M 37 12 C 40 8, 45 8, 50 10 Q 55 12, 60 11 T 65 9 T 72 10 T 78 8 T 85 10 T 92 12 T 96 17 T 95 24 T 91 30 T 85 34 T 78 32 T 72 30 T 65 31 T 56 27 T 48 24 T 42 21 T 36 17 Z" strokeLinejoin="round" />
              {/* United Kingdom & Ireland */}
              <path d="M 41 12 Q 43 11, 44 12 T 42 14 Z M 39 13 Q 40 13, 41 14 Z" />
              {/* Japan */}
              <path d="M 88 17 Q 89 21, 88 24" />
              {/* Indonesia & Southern Islands */}
              <path d="M 76 34 Q 78 35, 80 34" />
              <path d="M 82 32 Q 84 31, 86 33" />
              {/* Africa */}
              <path d="M 40 22 C 45 20, 51 21, 54 25 Q 56 28, 55 33 T 50 43 T 47 48 T 45 42 T 41 33 T 39 27 Z" />
              {/* Madagascar */}
              <path d="M 55 42 Q 56 46, 54 48 Z" />
              {/* Australia */}
              <path d="M 78 40 Q 82 38, 86 40 T 90 45 T 88 49 T 82 49 T 76 46 T 76 42 Z" />
              {/* Greenland */}
              <path d="M 24 5 C 26 3, 30 3, 32 6 Q 30 10, 26 9 Z" />
            </g>

            {/* Glowing curves representing relief vectors flowing from Global Trust Center (N 44, W 13) */}
            <g stroke="#10b981" strokeWidth="0.35" fill="none" opacity="0.8">
              {/* Flow to Sub-Saharan Africa (longitude 50, latitude 33) */}
              <path d="M 44 13 Q 48 22, 50 33" className="telemetry-link" />
              {/* Flow to South Asia (longitude 66, latitude 28) */}
              <path d="M 44 13 Q 55 18, 66 28" className="telemetry-link" />
              {/* Flow to Latin America & Caribbean (longitude 24, latitude 39) */}
              <path d="M 44 13 Q 32 23, 24 39" className="telemetry-link" />
            </g>

            {/* Global Trust Center (London Anchor) */}
            <g>
              <circle cx="44" cy="13" r="2" fill="#f59e0b" opacity="0.3" />
              <circle cx="44" cy="13" r="0.8" fill="#f59e0b" />
              <text x="44" y="10.5" fill="#f59e0b" fontSize="1.8" fontWeight="bold" textAnchor="middle" fontFamily="monospace" letterSpacing="0.1">
                TRUST CENTER HQ
              </text>
            </g>

            {/* Active Core Corridors Details & Pulses */}
            {/* Sub-Saharan Africa Node */}
            <g>
              <circle cx="50" cy="33" r="1.5" fill="#10b981" className="ping-ring" />
              <circle cx="50" cy="33" r="0.9" fill="#10b981" stroke="#ffffff" strokeWidth="0.2" />
              <rect x="42" y="35" width="16" height="5.5" fill="#12100e/90" stroke="#10b981" strokeWidth="0.15" rx="0.5" />
              <text x="50" y="37.5" fill="#e5e5e5" fontSize="1.2" textAnchor="middle" fontFamily="monospace" fontWeight="bold">
                SUB-SAHARAN AFRICA
              </text>
              <text x="50" y="39.5" fill="#10b981" fontSize="1" textAnchor="middle" fontFamily="monospace">
                142 Schools • 120k Students
              </text>
            </g>

            {/* South Asia Node */}
            <g>
              <circle cx="66" cy="28" r="1.5" fill="#10b981" className="ping-ring" />
              <circle cx="66" cy="28" r="0.9" fill="#10b981" stroke="#ffffff" strokeWidth="0.2" />
              <rect x="58" y="20.5" width="16" height="5.5" fill="#12100e/90" stroke="#10b981" strokeWidth="0.15" rx="0.5" />
              <text x="66" y="23" fill="#e5e5e5" fontSize="1.2" textAnchor="middle" fontFamily="monospace" fontWeight="bold">
                SOUTH ASIA SECTOR
              </text>
              <text x="66" y="25" fill="#10b981" fontSize="1" textAnchor="middle" fontFamily="monospace">
                85 Schools • 74k Students
              </text>
            </g>

            {/* Latin America Node */}
            <g>
              <circle cx="24" cy="39" r="1.5" fill="#10b981" className="ping-ring" />
              <circle cx="24" cy="39" r="0.9" fill="#10b981" stroke="#ffffff" strokeWidth="0.2" />
              <rect x="16" y="41.5" width="16" height="5.5" fill="#12100e/90" stroke="#10b981" strokeWidth="0.15" rx="0.5" />
              <text x="24" y="44" fill="#e5e5e5" fontSize="1.2" textAnchor="middle" fontFamily="monospace" fontWeight="bold">
                LATIN AMERICA
              </text>
              <text x="24" y="46" fill="#10b981" fontSize="1" textAnchor="middle" fontFamily="monospace">
                42 Schools • 38k Students
              </text>
            </g>

          </svg>
        </div>

        {/* Global summary stats panel overlay at the bottom inside dark map */}
        <div className="border-t border-stone-900 bg-stone-950/80 backdrop-blur-sm p-4 rounded-b-sm flex flex-col sm:flex-row justify-between items-center gap-4 text-left relative z-10">
          <div className="space-y-1">
            <span className="font-mono text-[9px] text-[#10b981] font-bold block">SUPPORT CORRIDORS STATUS</span>
            <p className="font-sans text-xs text-stone-400">
              Corridors are fully automated, bypass intermediary friction points, and output 87.2% spending directly on site equipment.
            </p>
          </div>
          <div className="flex gap-4 shrink-0 font-mono text-[10px]">
            <div>
              <span className="text-stone-500 block uppercase">Outposts</span>
              <strong className="text-white text-xs">269 Sites</strong>
            </div>
            <div className="border-l border-stone-800 pl-3">
              <span className="text-stone-500 block uppercase">Total Served</span>
              <strong className="text-[#10b981] text-xs">232,000+</strong>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
