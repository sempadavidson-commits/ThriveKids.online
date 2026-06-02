import React, { useState } from 'react';
import { motion } from 'motion/react';
import { GEOGRAPHIC_IMPACT } from '../data';

export default function ImpactDashboard() {
  const [activeCategory, setActiveCategory] = useState<'allocation' | 'efficiency' | 'outposts'>('allocation');

  return (
    <section className="bg-stone-900 py-24 sm:py-32 px-6 lg:px-8 border-b border-stone-850 text-white text-left">
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Header Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end border-b border-stone-800 pb-8">
          <div className="lg:col-span-8 space-y-4">
            <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-[#10b981] font-bold block">
              09 / AUDITED METRICS
            </span>
            <h2 className="font-editorial font-normal italic text-3xl sm:text-5xl text-white tracking-tight">
              Annual Impact Dashboard
            </h2>
            <p className="font-sans text-stone-400 text-sm sm:text-base font-light max-w-xl">
              We maintain absolute transparency. Explore our audited, live ledger of resource efficiency, direct community outposts funding, and operational ratios.
            </p>
          </div>

          <div className="lg:col-span-4 flex justify-start lg:justify-end gap-2">
            <button
              onClick={() => setActiveCategory('allocation')}
              className={`px-3 py-1.5 font-mono text-[10px] uppercase tracking-widest transition-all rounded-sm border cursor-pointer ${
                activeCategory === 'allocation' ? 'bg-white text-stone-950 border-white' : 'bg-stone-950 text-stone-400 border-stone-800 hover:text-white'
              }`}
            >
              Expense Allocation
            </button>
            <button
              onClick={() => setActiveCategory('efficiency')}
              className={`px-3 py-1.5 font-mono text-[10px] uppercase tracking-widest transition-all rounded-sm border cursor-pointer ${
                activeCategory === 'efficiency' ? 'bg-white text-stone-950 border-white' : 'bg-stone-950 text-stone-400 border-stone-800 hover:text-white'
              }`}
            >
              Efficiency Ratio
            </button>
            <button
              onClick={() => setActiveCategory('outposts')}
              className={`px-3 py-1.5 font-mono text-[10px] uppercase tracking-widest transition-all rounded-sm border cursor-pointer ${
                activeCategory === 'outposts' ? 'bg-white text-stone-950 border-white' : 'bg-stone-950 text-stone-400 border-stone-800 hover:text-white'
              }`}
            >
              Direct Outposts
            </button>
          </div>
        </div>

        {/* Dashboard Visualizer cards (Aesthetic pairings) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left panel: Data Visualization Grid */}
          <div className="lg:col-span-7 space-y-8">
            {activeCategory === 'allocation' && (
              <div className="bg-stone-950 border border-stone-850 p-6 sm:p-10 rounded-sm space-y-8">
                <div>
                  <span className="font-mono text-[9px] text-[#10b981] uppercase tracking-wider font-bold">LEDGER INDEX A-11</span>
                  <h3 className="font-editorial italic font-normal text-xl sm:text-2xl text-stone-105 mt-1">
                    Audited Allocations by Sector (FY 2025)
                  </h3>
                </div>

                {/* Simulated clean data bar widgets */}
                <div className="space-y-6">
                  <div className="space-y-2">
                    <div className="flex justify-between font-mono text-xs text-stone-400">
                      <span>Tuition & Direct Primary Classroom Placements</span>
                      <strong className="text-white">38.5% // (US$4,620,000)</strong>
                    </div>
                    <div className="h-2 bg-stone-900 rounded-full overflow-hidden">
                      <div className="h-full bg-emerald-500 rounded-full w-[38.5%]"></div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="flex justify-between font-mono text-xs text-stone-400">
                      <span>Clinical Therapies, Nutrition & Solar Wells Construction</span>
                      <strong className="text-white">28.2% // (US$3,384,000)</strong>
                    </div>
                    <div className="h-2 bg-stone-900 rounded-full overflow-hidden">
                      <div className="h-full bg-[#10b981] rounded-full w-[28.2%]"></div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="flex justify-between font-mono text-xs text-stone-400">
                      <span>Safeguarding Sanctuaries & Legal Rescue Representation</span>
                      <strong className="text-white">20.5% // (US$2,460,000)</strong>
                    </div>
                    <div className="h-2 bg-stone-900 rounded-full overflow-hidden">
                      <div className="h-full bg-[#f59e0b] rounded-full w-[20.5%]"></div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="flex justify-between font-mono text-xs text-stone-400">
                      <span>Administrative Reserves & Independent CPA Auditing Rules</span>
                      <strong className="text-white">12.8% // (US$1,536,000)</strong>
                    </div>
                    <div className="h-2 bg-stone-900 rounded-full overflow-hidden">
                      <div className="h-full bg-stone-700 rounded-full w-[12.8%]"></div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeCategory === 'efficiency' && (
              <div className="bg-stone-950 border border-stone-850 p-6 sm:p-10 rounded-sm space-y-8">
                <div>
                  <span className="font-mono text-[9px] text-[#10b981] uppercase tracking-wider font-bold text-center block">SYSTEM RECONCILIATION DETAIL</span>
                  <h3 className="font-editorial italic font-normal text-xl sm:text-2xl text-stone-105 text-center mt-1">
                    Direct Expenditure VS Administrative Cost
                  </h3>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 text-center divide-y sm:divide-y-0 sm:divide-x divide-stone-800">
                  <div className="space-y-3">
                    <span className="font-mono text-[10px] text-stone-500 uppercase">DIRECT PROJECTS INDEX</span>
                    <strong className="block font-display font-black text-white text-5xl sm:text-6xl text-[#10b981]">
                      87.2%
                    </strong>
                    <p className="text-stone-400 text-xs leading-relaxed max-w-xs mx-auto font-light">
                      Audit verified direct funds released directly into local school uniforms, scholarship bills, wells, and therapeutic supplies.
                    </p>
                  </div>
                  <div className="space-y-3 sm:pl-6">
                    <span className="font-mono text-[10px] text-stone-500 uppercase">ADMINISTRATIVE overheads</span>
                    <strong className="block font-display font-black text-stone-500 text-5xl sm:text-6xl">
                      12.8%
                    </strong>
                    <p className="text-stone-400 text-xs leading-relaxed max-w-xs mx-auto font-light">
                      Fiduciary governance overheads, compliance reviews, independent financial reports, and basic team support pipelines.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {activeCategory === 'outposts' && (
              <div className="bg-stone-950 border border-stone-850 p-6 sm:p-10 rounded-sm space-y-6">
                <div>
                  <span className="font-mono text-[9px] text-[#10b981] uppercase tracking-wider font-bold">DIRECTORY ARCHIVE B_004</span>
                  <h3 className="font-editorial italic font-normal text-xl sm:text-2xl text-stone-105 mt-1">
                    Outposts Audited Summary Registers
                  </h3>
                </div>

                <div className="divide-y divide-stone-850">
                  {GEOGRAPHIC_IMPACT.map((p) => (
                    <div key={p.id} className="py-3 flex justify-between items-baseline text-xs font-mono text-stone-40s">
                      <span className="text-stone-300 font-sans">{p.region}</span>
                      <span className="text-stone-550">………… PLANS ENROLLED: {p.childrenSupported} STUDENTS / {p.schoolsSupported} SCHOOLINGS</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Right panel: Static Fiduciary report summary callout */}
          <div className="lg:col-span-5 bg-stone-950 border border-stone-850 p-6 sm:p-8 rounded-sm h-full flex flex-col justify-between space-y-6">
            <div className="space-y-6">
              <div>
                <span className="font-mono text-[9px] text-[#f59e0b] uppercase font-bold block">
                  FIDUCIARY RATING SUMMARY
                </span>
                <h4 className="font-display font-bold uppercase text-lg text-white mt-1 border-b border-stone-800 pb-3">
                  CPA RATING STATUS
                </h4>
              </div>

              {/* Grid of rating credentials (no icons) */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-stone-900 border border-stone-850 p-4 rounded-sm text-center">
                  <span className="block font-mono text-[8px] text-stone-500">EXPENDITURE REVIEW</span>
                  <strong className="block text-white font-display text-lg font-bold mt-1">APPROVED</strong>
                  <span className="block font-mono text-[8px] text-stone-550">FY 2025 COMPLIANT</span>
                </div>
                <div className="bg-stone-900 border border-stone-850 p-4 rounded-sm text-center">
                  <span className="block font-mono text-[8px] text-stone-500">TRANSPARENCY ACCRED</span>
                  <strong className="block text-[#10b981] font-display text-lg font-bold mt-1">PLATINUM</strong>
                  <span className="block font-mono text-[8px] text-stone-550">LEDGER VERIFIED</span>
                </div>
              </div>

              <div className="border border-stone-800/60 p-4 bg-stone-900/40 text-stone-300 rounded-sm text-xs space-y-2">
                <span className="block font-mono text-[10px] text-stone-400 font-bold">ANNUAL REPORT SYNOPSIS</span>
                <p className="font-editorial italic leading-relaxed text-stone-200">
                  "Our priority remains direct, hyper-localized distribution. By keeping headquarters staff light and leveraging solar technology networks, we bypass regional distribution traps, maximizing field conversions."
                </p>
                <span className="block font-mono text-[9px] text-stone-500 uppercase mt-2">
                  — Annual Report Board of Directors
                </span>
              </div>
            </div>

            <div className="border-t border-stone-800 pt-4 flex justify-between items-center text-[10px] font-mono text-stone-550">
              <span>UNICEF Safeguarding Compliant</span>
              <span>VERIFIED PLATINUM RATING</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
