import React, { useState } from 'react';

interface DonationCalculatorProps {
  currency: string;
  onRecordDonation?: (amount: number, frequency: 'one-time' | 'monthly' | 'annual', isAnonymous: boolean) => void;
}

export default function DonationCalculator({ currency, onRecordDonation }: DonationCalculatorProps) {
  const [amount, setAmount] = useState<number>(50);
  const [frequency, setFrequency] = useState<'one-time' | 'monthly' | 'annual'>('monthly');
  const [isAnonymous, setIsAnonymous] = useState(false);
  const [donorName, setDonorName] = useState('');
  const [donorEmail, setDonorEmail] = useState('');
  const [checkoutStep, setCheckoutStep] = useState<'select' | 'payment' | 'done'>('select');
  const [paymentMethod, setPaymentMethod] = useState<'stripe' | 'paypal' | 'mobile'>('stripe');

  const currencySymbol = currency === 'USD' ? '$' : currency === 'GBP' ? '£' : currency === 'EUR' ? '€' : 'KSh ';
  const currencyRate = currency === 'KES' ? 130 : 1; // exchange rate helper

  const presets = [25, 50, 100, 250, 500];

  const getImpactMessage = (val: number) => {
    const usdVal = val / currencyRate;
    if (usdVal < 30) {
      return {
        tag: '[EDU]',
        text: 'School supplies & exercise books',
        desc: 'Equips a vulnerable child with a complete academic kit—textbooks, writing implements, school uniforms, and tutoring guides.'
      };
    } else if (usdVal < 75) {
      return {
        tag: '[PRO]',
        text: 'A family emergency support packet',
        desc: 'Supplies a multi-child single guardian with cooking oil, emergency rice, clean sanitation items, and a commercial baking skill course.'
      };
    } else if (usdVal < 180) {
      return {
        tag: '[HLT]',
        text: 'Vital child healthcare assistance',
        desc: 'Secures primary vaccines, therapeutic peanut-paste treatments for severe malnourishment, and doctor consultations for two infants.'
      };
    } else if (usdVal < 400) {
      return {
        tag: '[SCH]',
        text: 'Educational scholarships & school laptops',
        desc: 'Finances a full term of secondary education tuition and provides a solar-equipped computing notebook for a regional container lab.'
      };
    } else {
      return {
        tag: '[WLL]',
        text: 'High-Impact Community Water drill',
        desc: 'Drills deep water aquifers, helping communities maintain localized family organic vegetable farming and solar pumping grids.'
      };
    }
  };

  const impact = getImpactMessage(amount);

  const handleSubmitDonation = (e: React.FormEvent) => {
    e.preventDefault();
    if (checkoutStep === 'select') {
      setCheckoutStep('payment');
    } else if (checkoutStep === 'payment') {
      if (onRecordDonation) {
        onRecordDonation(amount, frequency, isAnonymous);
      }
      setCheckoutStep('done');
    }
  };

  return (
    <div className="bg-white border-2 border-stone-900 rounded-sm overflow-hidden shadow-xl text-stone-900 text-left">
      
      {/* Banner / Header accent with zero icons */}
      <div className="bg-stone-900 px-6 py-5 text-white flex justify-between items-center">
        <div>
          <span className="text-emerald-400 font-mono text-[9px] uppercase tracking-[0.2em] font-extrabold block mb-1">
            [SECURE VERIFIED DONATION PORTAL]
          </span>
          <h3 className="font-editorial italic font-normal text-lg sm:text-xl text-stone-105">
            Resource Allocation System
          </h3>
        </div>
        <div className="bg-stone-800 border border-stone-700 rounded-sm px-2.5 py-1 text-[9px] font-mono text-stone-300">
          501(c)(3) DEDUCTIBLE
        </div>
      </div>

      <div className="p-6 sm:p-8">
        
        {checkoutStep === 'select' && (
          <form onSubmit={handleSubmitDonation} className="space-y-6">
            
            {/* Frequency Selector */}
            <div>
              <span className="block text-[9px] font-mono font-bold uppercase tracking-widest text-stone-500 mb-2">
                RECURRENCE CYCLE
              </span>
              <div className="grid grid-cols-3 gap-2 bg-stone-50 border border-stone-200 rounded-sm p-1.5">
                {[
                  { id: 'one-time', label: 'One-Time' },
                  { id: 'monthly', label: 'Monthly' },
                  { id: 'annual', label: 'Annually' }
                ].map((freq) => (
                  <button
                    key={freq.id}
                    type="button"
                    onClick={() => setFrequency(freq.id as any)}
                    className={`py-2 text-[10px] font-mono uppercase tracking-widest rounded-sm transition-all cursor-pointer ${
                      frequency === freq.id
                        ? 'bg-stone-900 text-white font-bold'
                        : 'text-stone-500 hover:bg-stone-105'
                    }`}
                  >
                    {freq.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Presets and Custom Input */}
            <div>
              <span className="block text-[9px] font-mono font-bold uppercase tracking-widest text-stone-500 mb-2">
                RESOURCE ALLOCATION LEVEL ({currency})
              </span>
              <div className="grid grid-cols-5 gap-1.5 mb-4">
                {presets.map((val) => {
                  const localVal = val * currencyRate;
                  return (
                    <button
                      key={val}
                      type="button"
                      onClick={() => setAmount(localVal)}
                      className={`py-2 px-1 rounded-sm border text-[11px] font-mono font-bold transition-all cursor-pointer ${
                        Math.round(amount / currencyRate) === val
                          ? 'bg-stone-900 text-white border-stone-900 shadow-sm'
                          : 'bg-white text-stone-700 border-stone-200 hover:bg-stone-50'
                      }`}
                    >
                      {currencySymbol}{localVal}
                    </button>
                  );
                })}
              </div>

              {/* Slider Input */}
              <div className="space-y-2">
                <input
                  type="range"
                  min={10 * currencyRate}
                  max={1000 * currencyRate}
                  step={10 * currencyRate}
                  value={amount}
                  onChange={(e) => setAmount(Number(e.target.value))}
                  className="w-full accent-stone-900 cursor-pointer h-1.5 bg-stone-200 rounded-lg appearance-none"
                />
                <div className="flex justify-between items-center text-[10px] font-mono text-stone-500">
                  <span>Min: {currencySymbol}{10 * currencyRate}</span>
                  <div className="flex items-center gap-1 bg-stone-50 py-1 px-2.5 border border-stone-200 rounded-sm text-stone-900 font-mono font-bold text-xs">
                    <span>{currencySymbol}</span>
                    <input
                      type="number"
                      value={amount}
                      onChange={(e) => setAmount(Math.max(1, Number(e.target.value)))}
                      className="w-16 bg-transparent text-center font-bold focus:outline-none focus:ring-0 border-none p-0 inline-block focus:border-transparent"
                    />
                  </div>
                  <span>Max: {currencySymbol}{1000 * currencyRate}</span>
                </div>
              </div>
            </div>

            {/* Dynamic Real-Time Impact Projection */}
            <div className="bg-[#fcfbfa] border border-stone-200 p-5 space-y-3 rounded-sm">
              <div className="flex gap-2 items-center text-stone-900 font-mono text-[11px] font-bold border-b border-stone-200 pb-2 uppercase text-left">
                <span className="text-[#10b981]">{impact.tag}</span>
                <span>Direct Fuel: {impact.text}</span>
              </div>
              <p className="text-stone-700 text-xs leading-relaxed font-sans font-light">
                {impact.desc}
              </p>
              <div className="bg-white border border-stone-200 rounded-sm p-3 text-[10px] text-stone-500 font-mono text-left">
                <strong>AUDITED EFFICIENCY PROMISE // </strong>
                87.2% of your {currencySymbol}{amount} ({frequency}) goes directly to verified program deployments with zero administrative bloat.
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-stone-900 hover:bg-stone-850 text-white font-mono text-[11px] uppercase tracking-widest py-3.5 px-4 rounded-sm transition-all cursor-pointer flex items-center justify-center gap-2"
            >
              <span>Continue with Allocation</span>
              <span>→</span>
            </button>

          </form>
        )}

        {checkoutStep === 'payment' && (
          <form onSubmit={handleSubmitDonation} className="space-y-5">
            <div className="border-b border-stone-150 pb-3 mb-3">
              <h4 className="font-mono text-[10px] text-stone-400 uppercase tracking-wider">
                CONFIRM {frequency.toUpperCase()} RESOURCE LEVEL:
              </h4>
              <span className="font-display font-black text-2xl text-stone-900 inline-block mt-1">
                {currencySymbol}{amount}
              </span>
            </div>

            {/* Donor Fields */}
            <div className="space-y-4">
              <div>
                <label className="block text-[10px] font-mono font-bold uppercase tracking-widest text-stone-500 mb-1">
                  SUPPORTER FULL NAME
                </label>
                <input
                  type="text"
                  required
                  placeholder="Dr. Elizabeth Vance"
                  value={donorName}
                  onChange={(e) => setDonorName(e.target.value)}
                  className="bg-stone-50 border border-stone-220 rounded-sm px-3 py-2 text-xs font-mono text-stone-900 focus:outline-none focus:border-stone-900 w-full"
                />
              </div>

              <div>
                <label className="block text-[10px] font-mono font-bold uppercase tracking-widest text-stone-500 mb-1">
                  AUDITED RECEIPT EMAIL (SYSTEM COMPLIANCE)
                </label>
                <input
                  type="email"
                  required
                  placeholder="elizabeth.vance@ledger.org"
                  value={donorEmail}
                  onChange={(e) => setDonorEmail(e.target.value)}
                  className="bg-stone-50 border border-stone-220 rounded-sm px-3 py-2 text-xs font-mono text-stone-900 focus:outline-none focus:border-stone-900 w-full"
                />
              </div>

              <div className="flex items-center gap-2 pt-1">
                <input
                  type="checkbox"
                  id="anon_chk"
                  checked={isAnonymous}
                  onChange={(e) => setIsAnonymous(e.target.checked)}
                  className="rounded text-stone-900 focus:ring-stone-900 border-stone-300"
                />
                <label htmlFor="anon_chk" className="text-[10px] font-mono text-stone-500 cursor-pointer select-none">
                  MAKE THIS ALLOCATION ANONYMOUS IN DIRECT PUBLIC STREAMS
                </label>
              </div>
            </div>

            {/* Payment Method Selector */}
            <div>
              <span className="block text-[10px] font-mono font-bold uppercase tracking-widest text-stone-500 mb-2">
                CORE PAYMENT NETWORK API
              </span>
              <div className="grid grid-cols-3 gap-2">
                {[
                  { id: 'stripe', label: 'STRIPE ENGINE' },
                  { id: 'paypal', label: 'PAYPAL SECURE' },
                  { id: 'mobile', label: 'MOBILE DIRECT' }
                ].map((method) => (
                  <button
                    key={method.id}
                    type="button"
                    onClick={() => setPaymentMethod(method.id as any)}
                    className={`py-2 border text-[10px] font-mono uppercase tracking-widest rounded-sm transition-all cursor-pointer ${
                      paymentMethod === method.id
                        ? 'border-stone-900 bg-stone-900 text-white font-bold'
                        : 'border-stone-200 bg-stone-50 text-stone-500 hover:bg-stone-105'
                    }`}
                  >
                    {method.label}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex gap-2">
              <button
                type="button"
                onClick={() => setCheckoutStep('select')}
                className="w-1/3 bg-stone-100 hover:bg-stone-205 text-stone-700 font-mono text-[10px] uppercase py-3.5 px-2 rounded-sm transition-colors cursor-pointer"
              >
                BACK
              </button>
              <button
                type="submit"
                className="w-2/3 bg-stone-900 hover:bg-stone-850 text-white font-mono text-[10px] uppercase tracking-widest py-3.5 px-4 rounded-sm transition-colors cursor-pointer flex items-center justify-center gap-2"
              >
                <span>[CONFIRM {currencySymbol}{amount} DISPATCH]</span>
              </button>
            </div>
          </form>
        )}

        {checkoutStep === 'done' && (
          <div className="text-center py-6 space-y-4">
            <div className="w-14 h-14 bg-stone-900 text-white rounded-full flex items-center justify-center mx-auto text-xl font-mono shadow-sm">
              OK
            </div>
            <div>
              <h4 className="font-editorial italic font-normal text-xl text-stone-900">
                Resource Allocation Complete
              </h4>
              <p className="text-[9px] text-[#10b981] font-mono mt-1">
                LEDGER ID: TK-FY26-{Math.floor(Math.random() * 89999 + 10000)}
              </p>
            </div>
            <p className="text-xs text-stone-605 max-w-sm mx-auto leading-relaxed font-sans font-light">
              Dearest {isAnonymous ? 'Supporter' : donorName}, your allocation is fully compiled. A certified 501(c)(3) tax invoice is dispatched to <strong>{donorEmail || 'your email'}</strong>. Your resource immediately powers: {impact.text}!
            </p>
            <button
              onClick={() => {
                setCheckoutStep('select');
                setDonorName('');
                setDonorEmail('');
                setIsAnonymous(false);
              }}
              className="px-6 py-2.5 bg-stone-900 hover:bg-[#10b981] text-white text-[10px] font-mono uppercase tracking-widest rounded-sm cursor-pointer"
            >
              Allocate Again
            </button>
          </div>
        )}

        {/* Fiduciary compliance bottom shield */}
        <div className="mt-6 pt-5 border-t border-stone-150 text-center text-[9px] text-stone-450 font-mono uppercase leading-relaxed">
          SECURE ENCRYPTED TUNNEL ACTIVE // NO THIRD-PARTY DATABASE RETENTION COMPANION CERTIFIED BY PLATINUM TRUSTEE ORGANIZATIONS
        </div>

      </div>
    </div>
  );
}
