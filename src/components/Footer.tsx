import React, { useState } from 'react';

interface FooterProps {
  onNavigate: (path: string, subPath?: string) => void;
  currency: string;
  onSetCurrency: (curr: string) => void;
}

export default function Footer({ onNavigate, currency, onSetCurrency }: FooterProps) {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim().includes('@')) {
      setSubscribed(true);
      setTimeout(() => {
        setEmail('');
      }, 3000);
    }
  };

  return (
    <footer className="bg-stone-950 text-stone-300 pt-16 pb-8 border-t border-stone-850">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Grid Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 pb-12 border-b border-stone-850">
          
          {/* Column 1: Monogram & Bio */}
          <div className="space-y-4 text-left">
            <div>
              <span className="font-display font-black text-white text-base tracking-wider block">
                THRIVEKIDS / FOUNDATION
              </span>
              <span className="font-mono text-[8px] uppercase tracking-wider text-emerald-500 font-bold block mt-1">
                direct-impact certified
              </span>
            </div>
            <p className="text-xs sm:text-sm text-stone-400 font-sans leading-relaxed font-light">
              An internationally respected non-profit foundation dedicated to shielding vulnerable youths, funding literacy labs, and equipping families with cooperative micro-business systems.
            </p>
            <div className="pt-2 space-y-1">
              <span className="block text-[9px] uppercase font-mono tracking-widest text-[#10b981] font-bold">
                Tax Deductibility Registration
              </span>
              <p className="font-mono text-[10px] text-stone-500 leading-normal">
                UK Registered Charity No. 1104845 <br />
                US 501(c)(3) Nonprofit ID No. 24-8119042
              </p>
            </div>
          </div>

          {/* Column 2: Structural Navigation Directory */}
          <div className="text-left">
            <h3 className="text-white text-[10px] font-bold uppercase tracking-widest font-mono mb-4">
              Structural Directory
            </h3>
            <ul className="space-y-2 text-xs">
              {[
                { label: '01 / Living Narrative Homepage', path: 'home', sub: '' },
                { label: '02 / Strategic Outpost Program Details', path: 'programs', sub: '' },
                { label: '03 / Deep Livelihoods Stories', path: 'home', sub: 'stories' },
                { label: '04 / Living Annual Impact Ledger', path: 'impact', sub: 'metrics' },
                { label: '05 / Independent CPA Audit Ethics', path: 'about', sub: 'governance' },
                { label: '06 / Child Safeguarding Manuals', path: 'legal', sub: 'safeguarding' }
              ].map((link, idx) => (
                <li key={idx}>
                  <button
                    onClick={() => onNavigate(link.path, link.sub)}
                    className="hover:text-[#10b981] text-stone-400 font-mono tracking-wider text-[10px] uppercase block transition-colors leading-relaxed cursor-pointer"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Newsletter & Localization Settings */}
          <div className="space-y-4 text-left">
            <h3 className="text-white text-[10px] font-bold uppercase tracking-widest font-mono">
              Impact Gazettes
            </h3>
            <p className="text-xs sm:text-sm text-stone-400 leading-relaxed font-sans font-light">
              Receive quarterly audited updates, stories, and policy reflections. No promotional spam.
            </p>
            
            {subscribed ? (
              <div className="p-3 bg-stone-900 border border-[#10b981] text-[#10b981] text-[10px] font-mono uppercase tracking-widest rounded-sm">
                Address registered in secure log.
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex gap-1">
                <input
                  type="email"
                  required
                  placeholder="name@institution.org"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-stone-900 border border-stone-800 rounded-sm px-3 py-2 text-xs font-mono text-white placeholder-stone-600 focus:outline-none focus:border-stone-500 w-full"
                />
                <button
                  type="submit"
                  className="bg-stone-800 hover:bg-[#10b981] hover:text-white px-3 text-stone-300 rounded-sm font-mono text-[10px] uppercase tracking-wider transition-colors cursor-pointer"
                >
                  JOIN
                </button>
              </form>
            )}

            {/* Currency Selector */}
            <div className="pt-2">
              <span className="block text-[9px] uppercase font-mono tracking-widest text-stone-500 mb-2">
                Preferred Currency Display
              </span>
              <div className="flex flex-wrap gap-1">
                {[
                  { code: 'USD', symbol: '$' },
                  { code: 'GBP', symbol: '£' },
                  { code: 'EUR', symbol: '€' },
                  { code: 'KES', symbol: 'KSh' }
                ].map((cur) => (
                  <button
                    key={cur.code}
                    onClick={() => onSetCurrency(cur.code)}
                    className={`px-2 py-1 rounded-xs text-[9px] font-mono font-bold border cursor-pointer transition-all ${
                      currency === cur.code
                        ? 'bg-stone-900 text-white border-stone-800'
                        : 'bg-stone-950 text-stone-500 border-stone-900 hover:text-stone-300'
                    }`}
                  >
                    {cur.code} ({cur.symbol})
                  </button>
                ))}
              </div>
            </div>
          </div>

        </div>

        {/* Global Compliance Seals and Legal */}
        <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-6 text-xs text-stone-500">
          <div className="flex flex-wrap items-center gap-3 font-mono text-[10px]">
            <span className="px-3 py-1 bg-stone-900 rounded-sm border border-stone-800 text-stone-300">
              UNICEF COMPLIANT
            </span>
            <span className="text-stone-800">|</span>
            <span>WCAG AA COMPLIANT</span>
          </div>

          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-[10px] font-mono uppercase tracking-widest">
            <button onClick={() => onNavigate('legal', 'privacy')} className="hover:text-white cursor-pointer">Privacy</button>
            <button onClick={() => onNavigate('legal', 'terms')} className="hover:text-white cursor-pointer">Terms</button>
            <button onClick={() => onNavigate('legal', 'cookies')} className="hover:text-white cursor-pointer font-bold">Safeguarding Code</button>
          </div>
        </div>

        <div className="pt-8 text-center text-[9px] text-stone-600 font-mono uppercase tracking-widest">
          &copy; {new Date().getFullYear()} ThriveKids Global Foundation. Audited resource systems index.
        </div>

      </div>
    </footer>
  );
}
