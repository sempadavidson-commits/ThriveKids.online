import React, { useState } from 'react';

interface ImpactLocation {
  id: string;
  name: string;
  country: string;
  region: string;
  x: number; // SVG percentage coordinate X (0 - 100)
  y: number; // SVG percentage coordinate Y (0 - 60)
  beneficiaries: string;
  focus: string;
  isHQ?: boolean;
}

const IMPACT_LOCATIONS: ImpactLocation[] = [
  {
    id: 'uganda-hq',
    name: 'Kampala Grassroots Hub',
    country: 'Uganda',
    region: 'East Africa',
    x: 55.5,
    y: 33.2,
    beneficiaries: '5,200 Children',
    focus: 'Direct Shelter & Feeding Corridors',
    isHQ: true,
  },
  {
    id: 'kenya',
    name: 'Nairobi Urban Haven',
    country: 'Kenya',
    region: 'East Africa',
    x: 57.0,
    y: 34.5,
    beneficiaries: '3,800 Children',
    focus: 'Mobile Medical & Nutrition Units',
  },
  {
    id: 'nigeria',
    name: 'Lagos Coastal Support',
    country: 'Nigeria',
    region: 'West Africa',
    x: 46.5,
    y: 31.5,
    beneficiaries: '2,950 Children',
    focus: 'Clean Aquifers & Education Kits',
  },
  {
    id: 'south-africa',
    name: 'Cape Town Youth Centre',
    country: 'South Africa',
    region: 'Southern Africa',
    x: 52.0,
    y: 52.0,
    beneficiaries: '2,400 Children',
    focus: 'Trauma Counseling & Arts Therapy',
  },
  {
    id: 'india',
    name: 'Mumbai Learning Studio',
    country: 'India',
    region: 'South Asia',
    x: 69.5,
    y: 27.5,
    beneficiaries: '3,400 Children',
    focus: 'Digital STEM Literacy Labs',
  },
  {
    id: 'philippines',
    name: 'Manila Child Sanctuary',
    country: 'Philippines',
    region: 'Southeast Asia',
    x: 83.5,
    y: 32.0,
    beneficiaries: '2,100 Children',
    focus: 'Disaster Refuge & Daily Breakfast',
  },
  {
    id: 'guatemala',
    name: 'Highland Hope Academy',
    country: 'Guatemala',
    region: 'Central America',
    x: 21.0,
    y: 32.5,
    beneficiaries: '1,750 Children',
    focus: 'Indigenous Multilingual Classes',
  },
  {
    id: 'uk-office',
    name: 'European Donor Coalition',
    country: 'United Kingdom',
    region: 'Europe',
    x: 46.8,
    y: 14.5,
    beneficiaries: 'Strategic Hub',
    focus: 'International Governance & Auditing',
  },
  {
    id: 'us-office',
    name: 'Americas Trust Office',
    country: 'United States',
    region: 'North America',
    x: 25.0,
    y: 19.5,
    beneficiaries: 'Grant Center',
    focus: 'Institutional Philanthropy & Rights',
  },
];

export default function InteractiveMap() {
  const [activeLocation, setActiveLocation] = useState<ImpactLocation | null>(null);

  const hqLocation = IMPACT_LOCATIONS.find((loc) => loc.isHQ) || IMPACT_LOCATIONS[0];

  return (
    <section className="w-full relative py-8 sm:py-14 px-2 sm:px-6 lg:px-12 select-none overflow-hidden font-[Roboto,sans-serif]">
      <style>{`
        @keyframes pulse-ring {
          0% { r: 1.2; opacity: 0.9; }
          100% { r: 4.8; opacity: 0; }
        }
        @keyframes dash-flow {
          0% { stroke-dashoffset: 40; }
          100% { stroke-dashoffset: 0; }
        }
        .map-ping-ring {
          animation: pulse-ring 2.2s cubic-bezier(0.2, 0.6, 0.35, 1) infinite;
        }
        .map-dash-stream {
          stroke-dasharray: 4, 3;
          animation: dash-flow 3s linear infinite;
        }
      `}</style>

      {/* Clean Borderless Map Container */}
      <div className="w-full max-w-6xl mx-auto relative flex flex-col items-center justify-center">
        
        {/* Interactive SVG World Map */}
        <div className="w-full relative">
          <svg
            viewBox="0 0 100 60"
            className="w-full h-auto drop-shadow-sm"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient id="mapArcGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#10b981" stopOpacity="0.7" />
                <stop offset="100%" stopColor="#f59e0b" stopOpacity="0.7" />
              </linearGradient>
            </defs>

            {/* Continents (Stylized Smooth Clean Geometry) */}
            <g className="fill-stone-200 dark:fill-stone-800 transition-colors duration-300">
              {/* North America */}
              <path d="M 6 18 C 8 13, 14 9, 21 10 Q 28 11, 33 13 T 34 21 T 29 25 T 23 28 T 15 27 T 8 24 Z" />
              {/* Central America */}
              <path d="M 23 28 Q 21 31, 20 34 T 23 37 Z" />
              {/* South America */}
              <path d="M 23 37 C 27 36, 30 40, 31 44 Q 32 48, 30 54 T 25 57 T 21 49 T 20 42 Z" />
              {/* Greenland */}
              <path d="M 29 5 C 32 3, 37 4, 38 7 Q 35 11, 30 9 Z" />
              {/* Europe & North Eurasia */}
              <path d="M 43 11 C 47 7, 54 8, 60 9 Q 67 11, 74 9 T 82 8 T 92 11 T 96 16 T 93 22 T 84 27 T 72 26 T 60 24 T 50 20 T 42 16 Z" />
              {/* United Kingdom */}
              <path d="M 45 13 Q 48 12, 48 15 T 46 16 Z" />
              {/* South & East Asia */}
              <path d="M 62 24 C 67 23, 73 24, 78 28 Q 84 31, 88 30 T 93 25 T 87 36 T 78 37 T 68 33 T 63 28 Z" />
              {/* Japan */}
              <path d="M 91 18 Q 93 21, 91 24 Z" />
              {/* Southeast Asian Islands */}
              <path d="M 79 38 Q 83 37, 85 39 Z" />
              <path d="M 86 35 Q 89 34, 91 36 Z" />
              {/* Africa */}
              <path d="M 44 23 C 51 21, 57 23, 61 27 Q 63 32, 62 38 T 57 48 T 52 54 T 48 48 T 44 37 T 42 29 Z" />
              {/* Madagascar */}
              <path d="M 62 44 Q 64 48, 61 50 Z" />
              {/* Australia */}
              <path d="M 80 43 C 85 41, 91 43, 93 47 Q 92 52, 87 53 T 79 50 T 78 45 Z" />
            </g>

            {/* Connecting Telemetry Corridors from Kampala HQ */}
            <g fill="none" stroke="url(#mapArcGradient)" strokeWidth="0.32" opacity="0.85">
              {IMPACT_LOCATIONS.map((loc) => {
                if (loc.id === hqLocation.id) return null;
                const midX = (hqLocation.x + loc.x) / 2;
                const midY = Math.min(hqLocation.y, loc.y) - 6;
                return (
                  <path
                    key={`arc-${loc.id}`}
                    d={`M ${hqLocation.x} ${hqLocation.y} Q ${midX} ${midY}, ${loc.x} ${loc.y}`}
                    className="map-dash-stream"
                  />
                );
              })}
            </g>

            {/* Interactive Location Nodes */}
            {IMPACT_LOCATIONS.map((loc) => {
              const isSelected = activeLocation?.id === loc.id;
              const isHQ = loc.isHQ;

              return (
                <g
                  key={loc.id}
                  className="cursor-pointer group"
                  onMouseEnter={() => setActiveLocation(loc)}
                  onMouseLeave={() => setActiveLocation(null)}
                  onClick={() => setActiveLocation(isSelected ? null : loc)}
                >
                  {/* Ping Animation Ring */}
                  <circle
                    cx={loc.x}
                    cy={loc.y}
                    r="1.5"
                    fill={isHQ ? '#f59e0b' : '#10b981'}
                    className="map-ping-ring pointer-events-none"
                  />

                  {/* Outer Click Boundary */}
                  <circle
                    cx={loc.x}
                    cy={loc.y}
                    r="3.5"
                    fill="transparent"
                  />

                  {/* Core Pin Dot */}
                  <circle
                    cx={loc.x}
                    cy={loc.y}
                    r={isSelected ? 1.4 : isHQ ? 1.2 : 0.9}
                    fill={isHQ ? '#f59e0b' : isSelected ? '#059669' : '#10b981'}
                    stroke="#ffffff"
                    strokeWidth="0.25"
                    className="transition-transform duration-200"
                  />
                </g>
              );
            })}
          </svg>

          {/* Floating Hover/Click Details Badge (Borderless, Clean Aesthetic) */}
          {activeLocation && (
            <div
              className={`absolute pointer-events-none z-30 transition-all duration-200 ${
                activeLocation.y < 22
                  ? '-translate-x-1/2 translate-y-3'
                  : '-translate-x-1/2 -translate-y-full mb-3'
              }`}
              style={{
                left: `${Math.max(14, Math.min(86, activeLocation.x))}%`,
                top: `${activeLocation.y}%`,
              }}
            >
              <div className="bg-stone-900/95 dark:bg-stone-950/95 text-white px-3.5 py-2.5 rounded-xl shadow-xl backdrop-blur-md text-left min-w-[170px] max-w-[240px] space-y-1">
                <div className="flex items-center justify-between gap-2">
                  <span className="text-[10px] uppercase font-bold tracking-wider text-emerald-400">
                    {activeLocation.country}
                  </span>
                  {activeLocation.isHQ && (
                    <span className="text-[9px] font-bold px-1.5 py-0.2 rounded bg-amber-500/20 text-amber-300">
                      HQ
                    </span>
                  )}
                </div>
                <div className="text-xs font-bold leading-tight text-stone-100">
                  {activeLocation.name}
                </div>
                <div className="text-[11px] text-stone-300 leading-tight">
                  {activeLocation.focus}
                </div>
                <div className="text-[10px] font-bold text-emerald-300 pt-0.5">
                  {activeLocation.beneficiaries}
                </div>
              </div>
            </div>
          )}
        </div>

      </div>
    </section>
  );
}
