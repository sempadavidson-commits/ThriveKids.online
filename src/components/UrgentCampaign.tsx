import React from 'react';
import { motion } from 'motion/react';
import { AlertCircle, Clock, ShieldCheck, Sparkles } from 'lucide-react';

interface UrgentCampaignProps {
  onPledge?: (amount: number, note: string) => void;
}

export default function UrgentCampaign({ onPledge }: UrgentCampaignProps) {
  const goalAmount = 100000;
  const currentRaised = 84650;
  const percentage = Math.min(100, Math.round((currentRaised / goalAmount) * 100));

  return (
    <section className="bg-stone-900 text-white py-16 sm:py-24 px-6 lg:px-8 relative overflow-hidden border-t border-b border-stone-800">
      {/* Ambient background glow */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-3xl mx-auto text-center space-y-8">
        
        {/* Top Header */}
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-amber-500/20 border border-amber-500/40 rounded-full text-amber-400 text-xs font-mono font-bold tracking-wider">
          <AlertCircle className="w-4 h-4 animate-pulse" />
          <span>URGENT CAMPAIGN // CRISIS RELIEF</span>
        </div>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight">
          Seasonal Nutrition &amp; Winter Haven Appeal
        </h2>

        <p className="text-stone-300 text-sm sm:text-base font-light leading-relaxed max-w-2xl mx-auto">
          Drought cycles followed by severe cold in our highland field sectors have strained local harvests. 
          Our emergency mobile units are deploying immediate fortified nutritional packets and cold-weather shelters to protect 2,400 children.
        </p>

        {/* Campaign Progress Card */}
        <div className="bg-stone-950/80 border border-stone-800 p-6 sm:p-8 rounded-xl space-y-4 max-w-xl mx-auto">
          <div className="flex justify-between items-baseline">
            <div className="text-left">
              <span className="text-xs font-mono uppercase text-stone-400 block font-semibold">Total Raised</span>
              <span className="text-2xl sm:text-3xl font-bold text-white font-mono">
                ${currentRaised.toLocaleString()}
              </span>
            </div>
            <div className="text-right">
              <span className="text-xs font-mono uppercase text-stone-400 block font-semibold">Campaign Goal</span>
              <span className="text-lg font-mono text-stone-300">
                ${goalAmount.toLocaleString()}
              </span>
            </div>
          </div>

          {/* Progress Bar */}
          <div className="w-full h-3 bg-stone-800 rounded-full overflow-hidden relative">
            <div 
              style={{ width: `${percentage}%` }}
              className="h-full bg-gradient-to-r from-emerald-500 to-amber-400 rounded-full transition-all duration-500"
            />
          </div>

          <div className="flex justify-between items-center text-xs font-mono text-stone-400 pt-1">
            <span className="text-emerald-400 font-bold">{percentage}% Funded</span>
            <span className="flex items-center gap-1">
              <Clock className="w-3.5 h-3.5 text-amber-400" />
              <span>14 Days Remaining</span>
            </span>
            <span>1,420 Backers</span>
          </div>
        </div>

        {/* Reassurance points */}
        <div className="flex flex-wrap justify-center gap-6 text-xs text-stone-400 pt-4">
          <div className="flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>100% Tax-Deductible</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Sparkles className="w-4 h-4 text-amber-400" />
            <span>Direct Field Delivery Within 48 Hours</span>
          </div>
        </div>

      </div>
    </section>
  );
}
