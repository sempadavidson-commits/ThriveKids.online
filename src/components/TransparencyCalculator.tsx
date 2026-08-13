import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Calculator, CheckCircle2, ShieldCheck, FileCheck, ArrowRight, Heart } from 'lucide-react';

interface TransparencyCalculatorProps {
  onPledge: (amount: number, note: string) => void;
  currency?: string;
}

export default function TransparencyCalculator({ onPledge, currency = 'USD' }: TransparencyCalculatorProps) {
  const [amount, setAmount] = useState<number>(75);
  const [frequency, setFrequency] = useState<'monthly' | 'one-time'>('monthly');
  const [hasSubmitted, setHasSubmitted] = useState(false);

  const directProgram = Math.round(amount * 0.872 * 100) / 100;
  const fieldSafety = Math.round(amount * 0.081 * 100) / 100;
  const auditGovernance = Math.round(amount * 0.047 * 100) / 100;

  // Derive dynamic real-world impact based on amount
  const getImpactBreakdown = (val: number, freq: 'monthly' | 'one-time') => {
    const annualVal = freq === 'monthly' ? val * 12 : val;

    const scholarships = Math.max(1, Math.floor(annualVal / 150));
    const meals = Math.floor(annualVal * 2.8);
    const clinicalChecks = Math.floor(annualVal / 30);
    const books = Math.floor(annualVal / 12);

    return { scholarships, meals, clinicalChecks, books, annualVal };
  };

  const impact = getImpactBreakdown(amount, frequency);

  const handlePledge = () => {
    onPledge(amount, `Custom Transparent Pledge (${frequency.toUpperCase()}): ${currency} ${amount}`);
    setHasSubmitted(true);
    setTimeout(() => setHasSubmitted(false), 4500);
  };

  return (
    <section className="bg-[#fcfbfa] py-20 sm:py-28 px-6 lg:px-8 border-t border-b border-stone-200">
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-50 border border-emerald-200 rounded-full text-emerald-800 text-xs font-mono font-bold tracking-wider">
            <Calculator className="w-3.5 h-3.5" />
            <span>INTERACTIVE FINANCIAL FIDUCIARY SIMULATOR</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-stone-900 tracking-tight">
            See Exactly Where Every Dollar Goes
          </h2>
          <p className="text-stone-600 text-sm sm:text-base font-light">
            We operate with mathematical openness. 87.2% of every dollar goes directly into field procurement, scholarships, solar water wells, and child safeguarding.
          </p>
        </div>

        {/* Calculator Interactive Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Side: Amount Selector & Frequency Toggle */}
          <div className="lg:col-span-6 bg-white p-6 sm:p-8 rounded-2xl border border-stone-200 shadow-lg space-y-8 text-left">
            
            {/* Frequency switch */}
            <div className="flex justify-between items-center border-b border-stone-100 pb-4">
              <span className="font-bold text-sm text-stone-900">Giving Frequency</span>
              <div className="flex bg-stone-100 p-1 rounded-xl">
                <button
                  type="button"
                  onClick={() => setFrequency('monthly')}
                  className={`px-4 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                    frequency === 'monthly' ? 'bg-emerald-600 text-white shadow-xs' : 'text-stone-600 hover:text-stone-900'
                  }`}
                >
                  Monthly Impact
                </button>
                <button
                  type="button"
                  onClick={() => setFrequency('one-time')}
                  className={`px-4 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                    frequency === 'one-time' ? 'bg-emerald-600 text-white shadow-xs' : 'text-stone-600 hover:text-stone-900'
                  }`}
                >
                  One-Time Gift
                </button>
              </div>
            </div>

            {/* Amount Slider & Presets */}
            <div className="space-y-4">
              <div className="flex justify-between items-baseline">
                <label className="text-xs font-bold uppercase tracking-wider text-stone-500">Contribution Amount</label>
                <span className="text-3xl sm:text-4xl font-black text-stone-900 font-mono">
                  ${amount}
                  <span className="text-xs text-stone-400 font-normal"> {frequency === 'monthly' ? '/ month' : ''}</span>
                </span>
              </div>

              {/* Slider */}
              <input
                type="range"
                min="10"
                max="500"
                step="5"
                value={amount}
                onChange={(e) => setAmount(Number(e.target.value))}
                className="w-full h-2.5 bg-stone-200 rounded-lg appearance-none cursor-pointer accent-emerald-600"
              />

              {/* Quick Preset Buttons */}
              <div className="grid grid-cols-4 gap-2 pt-2">
                {[25, 50, 75, 150].map((preset) => (
                  <button
                    key={preset}
                    type="button"
                    onClick={() => setAmount(preset)}
                    className={`py-2 text-xs font-bold rounded-lg border transition-all cursor-pointer ${
                      amount === preset
                        ? 'bg-stone-900 text-white border-stone-900'
                        : 'bg-stone-50 text-stone-700 border-stone-200 hover:bg-stone-100'
                    }`}
                  >
                    ${preset}
                  </button>
                ))}
              </div>
            </div>

            {/* Fund Allocation Exact Math */}
            <div className="space-y-3 pt-4 border-t border-stone-100">
              <span className="text-xs font-mono uppercase font-bold text-stone-500 block">
                Audited Allocation Distribution:
              </span>

              <div className="space-y-2 text-xs">
                <div className="flex justify-between items-center p-2.5 bg-emerald-50/70 border border-emerald-100 rounded-lg">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-600" />
                    <span className="font-bold text-emerald-950">Direct Field Programs (87.2%)</span>
                  </div>
                  <span className="font-mono font-bold text-emerald-800">${directProgram}</span>
                </div>

                <div className="flex justify-between items-center p-2.5 bg-amber-50/70 border border-amber-100 rounded-lg">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-500" />
                    <span className="font-bold text-amber-950">Field Operations &amp; Child Safety (8.1%)</span>
                  </div>
                  <span className="font-mono font-bold text-amber-800">${fieldSafety}</span>
                </div>

                <div className="flex justify-between items-center p-2.5 bg-stone-50 border border-stone-200 rounded-lg">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-stone-400" />
                    <span className="font-bold text-stone-700">Governance &amp; Audits (4.7%)</span>
                  </div>
                  <span className="font-mono font-bold text-stone-600">${auditGovernance}</span>
                </div>
              </div>
            </div>

            {/* Pledge CTA button */}
            <button
              onClick={handlePledge}
              disabled={hasSubmitted}
              className="w-full py-4 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm uppercase tracking-wider rounded-xl shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer disabled:bg-emerald-400"
            >
              {hasSubmitted ? (
                <>
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Pledge Successfully Docketed!</span>
                </>
              ) : (
                <>
                  <Heart className="w-4 h-4 fill-white" />
                  <span>Pledge ${amount} {frequency === 'monthly' ? '/ Month' : 'Today'}</span>
                </>
              )}
            </button>

          </div>

          {/* Right Side: Simulated Real-World Output Dashboard */}
          <div className="lg:col-span-6 bg-stone-900 text-white p-6 sm:p-8 rounded-2xl border border-stone-800 shadow-xl space-y-8 text-left">
            <div className="space-y-1">
              <span className="text-[10px] font-mono uppercase tracking-widest text-emerald-400 font-bold block">
                SIMULATED 12-MONTH DELIVERABLE OUTCOMES
              </span>
              <h3 className="text-2xl font-bold text-white">Your Tangible Field Impact</h3>
              <p className="text-xs text-stone-400 font-light">
                Projected results generated across 1 year from your continuous support of ${amount}{frequency === 'monthly' ? '/mo' : ''} (${impact.annualVal} total):
              </p>
            </div>

            {/* Impact Metric Cards */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-stone-950/80 border border-stone-800 p-4 rounded-xl space-y-1">
                <span className="text-3xl font-black font-mono text-emerald-400 block">
                  {impact.scholarships}
                </span>
                <span className="text-xs font-bold text-stone-200 block">Full School Scholarships</span>
                <span className="text-[11px] text-stone-400 block">Tuition, uniforms &amp; certified syllabus</span>
              </div>

              <div className="bg-stone-950/80 border border-stone-800 p-4 rounded-xl space-y-1">
                <span className="text-3xl font-black font-mono text-amber-400 block">
                  {impact.meals.toLocaleString()}
                </span>
                <span className="text-xs font-bold text-stone-200 block">Nutritious Hot Meals</span>
                <span className="text-[11px] text-stone-400 block">Served in classroom feeding zones</span>
              </div>

              <div className="bg-stone-950/80 border border-stone-800 p-4 rounded-xl space-y-1">
                <span className="text-3xl font-black font-mono text-emerald-400 block">
                  {impact.clinicalChecks}
                </span>
                <span className="text-xs font-bold text-stone-200 block">Mobile Clinic Checks</span>
                <span className="text-[11px] text-stone-400 block">Pediatric screening &amp; vitamins</span>
              </div>

              <div className="bg-stone-950/80 border border-stone-800 p-4 rounded-xl space-y-1">
                <span className="text-3xl font-black font-mono text-amber-400 block">
                  {impact.books}
                </span>
                <span className="text-xs font-bold text-stone-200 block">Scholastic Book Packs</span>
                <span className="text-[11px] text-stone-400 block">Distributed directly to students</span>
              </div>
            </div>

            {/* Trust Attestation */}
            <div className="border-t border-stone-800 pt-4 flex items-center justify-between text-xs text-stone-400">
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>Audited by Baker Tilly &amp; IRS 501(c)(3)</span>
              </div>
              <span className="font-mono text-[10px] bg-stone-800 text-stone-300 px-2 py-0.5 rounded">
                FIDUCIARY CERTIFIED
              </span>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
