import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

interface FooterProps {
  onNavigate?: (path: string) => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  const [activeModal, setActiveModal] = useState<'privacy' | 'terms' | null>(null);
  const { theme, setTheme, systemTheme } = useTheme();

  return (
    <footer className="relative w-full bg-[#fcfbfa] dark:bg-[#0c0a09] text-stone-700 dark:text-stone-300 py-16 sm:py-24 px-6 sm:px-12 lg:px-20 overflow-hidden select-none transition-colors duration-300">
      
      <div className="max-w-7xl mx-auto space-y-10">
        
        {/* Dynamic Row */}
        <div 
          className="flex flex-col lg:flex-row items-center justify-between gap-8"
        >
          
          {/* Brand & Organization Title */}
          <motion.div 
            layout="position"
            className="flex flex-col items-center lg:items-start text-center lg:text-left space-y-2"
          >
            <div className="flex items-baseline leading-none cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
              <span className="text-stone-950 dark:text-white font-black text-3xl tracking-tighter transition-colors">T</span>
              <span className="text-emerald-600 dark:text-emerald-400 font-black text-3xl tracking-tighter ml-0.5">K</span>
              <span className="ml-3 text-xs font-mono font-bold uppercase tracking-widest text-stone-500 dark:text-stone-400 transition-colors">
                FOUNDATION (UG)
              </span>
            </div>
            <p className="text-xs text-stone-500 dark:text-stone-400 max-w-sm leading-relaxed transition-colors">
              Empowering vulnerable children, street-connected youth, and grassroots families across East Africa.
            </p>
          </motion.div>

          {/* Clean Borderless Link Cluster that Rearranges on Scroll */}
          <motion.div 
            layout="position"
            className="flex flex-wrap items-center justify-center gap-6 sm:gap-8 text-xs sm:text-sm font-semibold text-stone-600 dark:text-stone-300"
          >
            {/* Privacy Policy Link */}
            <button
              type="button"
              onClick={() => setActiveModal('privacy')}
              className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors cursor-pointer"
            >
              Privacy Policy
            </button>

            {/* Terms Link */}
            <button
              type="button"
              onClick={() => setActiveModal('terms')}
              className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors cursor-pointer"
            >
              Terms of Service
            </button>

            {/* Direct WhatsApp Channel */}
            <a
              href="https://wa.me/256746036194?text=Hello%20Thrive%20Kids%20Foundation"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-[#128C7E] dark:text-[#25D366] hover:text-[#075E54] dark:hover:text-[#20bd5a] transition-colors cursor-pointer"
            >
              <svg className="w-4 h-4 fill-current text-[#25D366]" viewBox="0 0 24 24">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
              </svg>
              <span>WhatsApp</span>
            </a>

            {/* Direct TikTok Channel */}
            <a
              href="https://www.tiktok.com/@thrivekidsfoundation"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-stone-800 dark:text-white hover:text-black dark:hover:text-stone-300 transition-colors cursor-pointer"
            >
              <svg className="w-4 h-4 fill-current text-[#fe2c55]" viewBox="0 0 24 24">
                <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.24 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
              </svg>
              <span>TikTok</span>
            </a>
          </motion.div>

          {/* Legal Identification & Small Mode Switcher in Words */}
          <motion.div 
            layout="position"
            className="flex flex-col items-center lg:items-end text-center lg:text-right space-y-2"
          >
            {/* Very small, beautifully designed words for display mode */}
            <div className="flex items-center gap-2 text-[10px] font-mono tracking-wider text-stone-500 dark:text-stone-400">
              <span className="uppercase opacity-70">DISPLAY:</span>
              <div className="inline-flex items-center gap-1.5">
                <button
                  type="button"
                  onClick={() => setTheme('system')}
                  className={`transition-colors cursor-pointer ${
                    theme === 'system'
                      ? 'font-bold text-emerald-600 dark:text-emerald-400 underline decoration-emerald-500/50 underline-offset-4'
                      : 'hover:text-stone-900 dark:hover:text-stone-200'
                  }`}
                  title={`Sensing device preference (${systemTheme})`}
                >
                  AUTO
                </button>
                <span className="text-stone-300 dark:text-stone-700">·</span>
                <button
                  type="button"
                  onClick={() => setTheme('light')}
                  className={`transition-colors cursor-pointer ${
                    theme === 'light'
                      ? 'font-bold text-emerald-600 dark:text-emerald-400 underline decoration-emerald-500/50 underline-offset-4'
                      : 'hover:text-stone-900 dark:hover:text-stone-200'
                  }`}
                >
                  LIGHT
                </button>
                <span className="text-stone-300 dark:text-stone-700">·</span>
                <button
                  type="button"
                  onClick={() => setTheme('dark')}
                  className={`transition-colors cursor-pointer ${
                    theme === 'dark'
                      ? 'font-bold text-emerald-600 dark:text-emerald-400 underline decoration-emerald-500/50 underline-offset-4'
                      : 'hover:text-stone-900 dark:hover:text-stone-200'
                  }`}
                >
                  DARK
                </button>
              </div>
            </div>

            <div className="text-[11px] text-stone-400 dark:text-stone-500 font-mono">
              <p>© {new Date().getFullYear()} Thrive Kids Foundation (UG).</p>
              <p className="mt-0.5">All Rights Reserved • Non-Profit Grassroots Initiative</p>
            </div>
          </motion.div>

        </div>

      </div>

      {/* Privacy Policy & Terms Modal (Borderless Glassmorphic Dialog) */}
      <AnimatePresence>
        {activeModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-950/60 dark:bg-black/80 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              className="relative w-full max-w-2xl bg-white dark:bg-stone-900 rounded-3xl p-6 sm:p-10 shadow-2xl overflow-y-auto max-h-[85vh] text-left transition-colors duration-300"
            >
              <div className="flex items-center justify-between pb-4">
                <div className="space-y-1">
                  <span className="text-[10px] font-mono font-bold text-emerald-700 dark:text-emerald-400 uppercase tracking-widest block">
                    FOUNDATION GOVERNANCE
                  </span>
                  <h3 className="text-xl sm:text-2xl font-black text-stone-900 dark:text-white">
                    {activeModal === 'privacy' ? 'Privacy Policy & Child Safeguarding' : 'Terms of Service & Donor Charter'}
                  </h3>
                </div>
                <button
                  type="button"
                  onClick={() => setActiveModal(null)}
                  className="p-2 bg-stone-100 dark:bg-stone-800 hover:bg-stone-200 dark:hover:bg-stone-700 text-stone-700 dark:text-stone-200 rounded-full cursor-pointer transition-all"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="space-y-4 text-stone-600 dark:text-stone-300 text-sm leading-relaxed pt-2 font-light">
                {activeModal === 'privacy' ? (
                  <>
                    <p>
                      <strong>1. Child Privacy Protection:</strong> In accordance with global child safeguarding standards, Thrive Kids Foundation never discloses surnames, physical home coordinates, or exact locations of vulnerable children.
                    </p>
                    <p>
                      <strong>2. Donor Information:</strong> We respect the confidentiality of all donors. Personal contact information is solely used for issuing official receipts, tax statements, and project progress updates. We never sell, rent, or trade supporter data.
                    </p>
                    <p>
                      <strong>3. Communication Channels:</strong> Direct messaging through WhatsApp or official channels is maintained under strict organizational supervision to ensure accountability and integrity.
                    </p>
                  </>
                ) : (
                  <>
                    <p>
                      <strong>1. Project Allocation:</strong> 87.2% of all financial donations are committed directly to active field operations. Operational and auditing overheads are kept strictly under 13%.
                    </p>
                    <p>
                      <strong>2. Financial Audits:</strong> Comprehensive financial disclosures are audited quarterly by certified CPAs and published annually for complete public accountability.
                    </p>
                    <p>
                      <strong>3. Field Operations:</strong> All programs, mobile medical interventions, and school development initiatives are operated in partnership with local community leadership and compliant with regulatory mandates.
                    </p>
                  </>
                )}
              </div>

              <div className="pt-6 flex justify-end">
                <button
                  type="button"
                  onClick={() => setActiveModal(null)}
                  className="px-6 py-2.5 bg-stone-900 dark:bg-emerald-600 hover:bg-stone-800 dark:hover:bg-emerald-700 text-white text-xs font-bold uppercase tracking-wider rounded-xl transition-all cursor-pointer"
                >
                  Close Document
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </footer>
  );
}
