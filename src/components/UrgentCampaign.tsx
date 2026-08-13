import React, { useState } from 'react';
import { motion } from 'motion/react';
import { AlertCircle, Clock, ShieldCheck, Heart, Sparkles, Check } from 'lucide-react';

interface UrgentCampaignProps {
  onPledge: (amount: number, note: string) => void;
}

export default function UrgentCampaign({ onPledge }: UrgentCampaignProps) {
  const [selectedTier, setSelectedTier] = useState<number>(50);
  const [customAmount, setCustomAmount] = useState<string>('');
  const [frequency, setFrequency] = useState<'one-time' | 'monthly'>('monthly');
  const [isPledged, setIsPledged] = useState(false);

  const goalAmount = 100000;
  const currentRaised = 84650;
  const percentage = Math.min(100, Math.round((currentRaised / goalAmount) * 100));

  const TIERS = [
    { amount: 25, label: '3-Month Nutrition Pack', impact: 'Provides fortified porridge & daily fresh vitamins for 1 child.' },
    { amount: 50, label: 'Emergency Clinic Kit', impact: 'Supplies antibiotics, malaria tests & hydration salts for 4 children.' },
    { amount: 100, label: 'Winter Shelter & Blankets', impact: 'Equips 2 families in highland emergency zones with insulated bedding.' },
    { amount: 250, label: 'Community Water Filtration', impact: 'Delivers a gravity-fed micro-filter for an entire rural classroom.' }
  ];

  const handlePledgeSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const finalAmount = customAmount ? parseFloat(customAmount) : selectedTier;
    if (!finalAmount || finalAmount <= 0) return;

    onPledge(finalAmount, `Emergency Appeal: Seasonal Nutrition & Winter Warmth (${frequency})`);
    setIsPledged(true);
    setTimeout(() => {
      setIsPledged(false);
      setCustomAmount('');
    }, 4000);
  };

  return (
    <section className="bg-stone-900 text-white py-16 sm:py-24 px-6 lg:px-8 relative overflow-hidden border-t border-b border-stone-800">
      {/* Ambient background glow */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Urgent Appeal Narrative & Goal Progress */}
          <div className="lg:col-span-6 space-y-6 text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-amber-500/20 border border-amber-500/40 rounded-full text-amber-400 text-xs font-mono font-bold tracking-wider">
              <AlertCircle className="w-4 h-4 animate-pulse" />
              <span>URGENT CAMPAIGN // CRISIS RELIEF</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight">
              Seasonal Nutrition &amp; Winter Haven Appeal
            </h2>

            <p className="text-stone-300 text-sm sm:text-base font-light leading-relaxed">
              Drought cycles followed by severe cold in our highland field sectors have strained local harvests. 
              Our emergency mobile units are deploying immediate fortified nutritional packets and cold-weather shelters to protect 2,400 children.
            </p>

            {/* Campaign Progress Card */}
            <div className="bg-stone-950/80 border border-stone-800 p-6 rounded-xl space-y-4">
              <div className="flex justify-between items-baseline">
                <div>
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
                <motion.div 
                  initial={{ width: 0 }}
                  whileInView={{ width: `${percentage}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.5, ease: 'easeOut' }}
                  className="h-full bg-gradient-to-r from-emerald-500 to-amber-400 rounded-full"
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
            <div className="flex flex-wrap gap-4 text-xs text-stone-400 pt-2">
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

          {/* Right Column: Interactive Quick-Pledge Box */}
          <div className="lg:col-span-6 bg-white text-stone-900 p-6 sm:p-8 rounded-2xl shadow-2xl border border-stone-200">
            {isPledged ? (
              <div className="text-center py-12 space-y-4">
                <div className="w-16 h-16 bg-emerald-500 text-white rounded-full flex items-center justify-center mx-auto text-3xl shadow-lg">
                  <Check className="w-8 h-8 stroke-[3]" />
                </div>
                <h3 className="text-2xl font-bold text-stone-900">Emergency Pledge Received</h3>
                <p className="text-sm text-stone-600 max-w-md mx-auto">
                  Thank you for standing with these children in their moment of greatest need. A field dispatch confirmation receipt has been recorded.
                </p>
              </div>
            ) : (
              <form onSubmit={handlePledgeSubmit} className="space-y-6 text-left">
                <div className="flex justify-between items-center border-b border-stone-100 pb-4">
                  <span className="font-bold text-base text-stone-900">Select Pledge Level</span>
                  <div className="flex bg-stone-100 p-1 rounded-lg text-xs font-semibold">
                    <button
                      type="button"
                      onClick={() => setFrequency('monthly')}
                      className={`px-3 py-1 rounded-md transition-all ${
                        frequency === 'monthly' ? 'bg-emerald-600 text-white shadow-xs' : 'text-stone-600 hover:text-stone-900'
                      }`}
                    >
                      Monthly Sustainer
                    </button>
                    <button
                      type="button"
                      onClick={() => setFrequency('one-time')}
                      className={`px-3 py-1 rounded-md transition-all ${
                        frequency === 'one-time' ? 'bg-emerald-600 text-white shadow-xs' : 'text-stone-600 hover:text-stone-900'
                      }`}
                    >
                      One-Time
                    </button>
                  </div>
                </div>

                {/* Preset Tiers */}
                <div className="grid grid-cols-2 gap-3">
                  {TIERS.map((tier) => {
                    const isSelected = selectedTier === tier.amount && !customAmount;
                    return (
                      <button
                        type="button"
                        key={tier.amount}
                        onClick={() => {
                          setSelectedTier(tier.amount);
                          setCustomAmount('');
                        }}
                        className={`p-3.5 rounded-xl border-2 text-left transition-all cursor-pointer ${
                          isSelected
                            ? 'border-emerald-600 bg-emerald-50/70 ring-1 ring-emerald-600 shadow-sm'
                            : 'border-stone-200 bg-stone-50 hover:bg-stone-100'
                        }`}
                      >
                        <div className="flex justify-between items-baseline mb-1">
                          <span className="text-lg font-bold text-stone-900">${tier.amount}</span>
                          {frequency === 'monthly' && <span className="text-[10px] text-stone-500 font-mono">/mo</span>}
                        </div>
                        <span className="text-xs font-semibold text-stone-800 block leading-tight">{tier.label}</span>
                        <span className="text-[11px] text-stone-500 block leading-tight mt-1">{tier.impact}</span>
                      </button>
                    );
                  })}
                </div>

                {/* Custom Amount */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-stone-500 mb-1">
                    Or Enter Custom Amount ($USD)
                  </label>
                  <div className="relative">
                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-stone-400 font-bold">$</span>
                    <input
                      type="number"
                      min="5"
                      placeholder="Other Amount"
                      value={customAmount}
                      onChange={(e) => setCustomAmount(e.target.value)}
                      className="w-full pl-8 pr-4 py-2.5 bg-stone-50 border border-stone-300 rounded-xl text-sm font-bold text-stone-900 focus:outline-none focus:border-emerald-600"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full py-4 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm uppercase tracking-wider rounded-xl shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Heart className="w-4 h-4 fill-white" />
                  <span>
                    Confirm ${customAmount || selectedTier} {frequency === 'monthly' ? '/ Month' : 'Pledge'}
                  </span>
                </button>

                <div className="pt-1 flex flex-col sm:flex-row items-center justify-between gap-2 border-t border-stone-100 text-[11px] text-stone-500 font-mono">
                  <div className="flex items-center gap-1.5">
                    <span className="text-stone-400">Questions?</span>
                    <a 
                      href="https://wa.me/256746036194?text=Hello%2C%20I%20have%20a%20question%20about%20the%20Winter%20%26%20Nutrition%20Relief%20Appeal." 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-[#25D366] hover:underline font-bold inline-flex items-center gap-1"
                    >
                      WhatsApp: +256746036194
                    </a>
                  </div>
                  <a 
                    href="https://www.tiktok.com/@thrivekidsfoundation" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-stone-700 hover:text-black font-semibold hover:underline"
                  >
                    TikTok Field Updates →
                  </a>
                </div>

                <p className="text-[10px] text-stone-400 text-center font-mono">
                  Protected by 256-bit encryption. Direct field receipts dispatched instantly.
                </p>
              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}
