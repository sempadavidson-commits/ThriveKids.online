import React from 'react';

const OUTCOMES = [
  '10,000+ CHILDREN SUPPORTED IN LOCAL SCHOOLS',
  '2,500 FAMILIES REUNIFIED AFTER CRISIS RESCUES',
  '45 COMMUNITIES ENGAGED COOPERATIVELY',
  '3.2 MILLION BALANCED PRIMARY SCHOOL MEALS SERVED',
  '240 RURAL MOBILE CLINICS REGULARLY SCHEDULED',
  '110 SOLAR-DRIVEN WATER WELLS COMMISSIONED',
];

const QUOTES = [
  '“Now I can read and paint my own horizon.” — Amina, Age 16',
  '“They didn’t just give me livestock; they taught me how to manage a micro-dairy.” — Maria, Guard',
  '“The mobile clinic saved my twins when drought withered our maize.” — Mwangi family',
  '“Daniel has finished his primary degree and wants to study civil structures.” — Grandmother',
  '“Before the borehole, girls walked 8 miles. Now they are in the classroom.” — Chief elder',
];

export default function ImpactMarquee() {
  return (
    <section className="bg-[#fcfbfa] py-8 sm:py-12 border-t border-b border-stone-200 overflow-hidden select-none">
      <style>{`
        @keyframes scroll-left {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes scroll-right {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
        .marquee-container {
          display: flex;
          width: max-content;
          gap: 4rem;
        }
        .scroll-left-fast {
          animation: scroll-left 35s linear infinite;
        }
        .scroll-right-fast {
          animation: scroll-right 35s linear infinite;
        }
      `}</style>

      <div className="space-y-6">
        {/* Top Marquee: Left-to-Right Scrolling (scroll-right-fast) */}
        <div className="relative py-3 bg-stone-900 border-t border-b border-stone-800">
          <div className="overflow-hidden w-full">
            <div className="marquee-container scroll-right-fast">
              {/* Duplicate contents once for seamless loop */}
              {[...OUTCOMES, ...OUTCOMES].map((stat, idx) => (
                <div key={idx} className="flex items-center gap-4 text-white text-xs sm:text-sm font-mono tracking-[0.2em] font-bold">
                  <span>{stat}</span>
                  <span className="text-[#10b981]">•</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Marquee: Right-to-Left Scrolling (scroll-left-fast) */}
        <div className="relative py-3">
          <div className="overflow-hidden w-full">
            <div className="marquee-container scroll-left-fast">
              {[...QUOTES, ...QUOTES].map((quote, idx) => (
                <div key={idx} className="flex items-center gap-6 text-stone-700 text-sm sm:text-base font-editorial italic">
                  <span>{quote}</span>
                  <span className="text-stone-300 font-sans tracking-tight not-italic">•</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
