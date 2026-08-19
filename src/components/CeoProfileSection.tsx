import React from 'react';
import { motion } from 'motion/react';
import ceoPortrait from '../assets/images/ceo_davidson_portrait_1786910789294.jpg';

interface CeoProfileSectionProps {
  onExplorePrograms?: () => void;
}

export default function CeoProfileSection({ onExplorePrograms }: CeoProfileSectionProps) {
  return (
    <section 
      id="ceo-leadership" 
      className="relative z-10 py-16 sm:py-24 px-4 sm:px-8 lg:px-12 max-w-7xl mx-auto transition-colors duration-300"
    >
      {/* Decorative ambient background accents */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-emerald-500/5 dark:bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-10 w-96 h-96 bg-amber-500/5 dark:bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

      {/* Header Eyebrow */}
      <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-3">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-stone-900 dark:text-white tracking-tight leading-tight transition-colors">
          Transforming Vulnerability Into Visionary Leadership
        </h2>
        <p className="text-stone-600 dark:text-stone-300 text-sm sm:text-base font-light max-w-2xl mx-auto leading-relaxed transition-colors">
          The driving heart and proven grassroots force behind the movement, dedicated to rewriting the life trajectories of underprivileged families.
        </p>
      </div>

      {/* Main Glassmorphic Profile Card */}
      <div className="relative bg-white/80 dark:bg-stone-900/80 backdrop-blur-xl rounded-[28px] sm:rounded-[36px] p-6 sm:p-10 lg:p-12 shadow-xl shadow-stone-900/5 dark:shadow-black/20 overflow-hidden transition-colors duration-300">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Column 1: Clean CEO Portrait with Credits Below (5 Cols) */}
          <div 
            className="lg:col-span-5 flex flex-col items-center text-center"
          >
            {/* Pure Photo Frame - No Overlaid Text or Floating Cards */}
            <div className="relative w-full max-w-sm sm:max-w-md aspect-[4/5] rounded-[24px] overflow-hidden shadow-2xl bg-stone-100 dark:bg-stone-800">
              <img 
                src={ceoPortrait} 
                alt="CEO of Thrive Kids Foundation" 
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-center"
              />
            </div>

            {/* Clean Credits directly below the photo */}
            <div className="mt-4 text-center space-y-1">
              <h3 className="text-lg font-bold text-stone-900 dark:text-white tracking-tight">
                Chief Executive Officer &amp; Founder
              </h3>
              <p className="text-sm text-stone-600 dark:text-stone-300">
                <strong>Thrive Kids Foundation</strong>
              </p>
              <p className="text-xs text-stone-500 dark:text-stone-400 font-light">
                Grassroots Humanitarian &amp; Community Pioneer
              </p>
            </div>
          </div>

          {/* Column 2: Reframed Paragraphic Narrative (7 Cols) */}
          <div 
            className="lg:col-span-7 text-left space-y-6"
          >
            {/* Leadership Title */}
            <div className="space-y-2">
              <span className="text-emerald-700 dark:text-emerald-400 font-mono text-xs uppercase tracking-widest font-bold">
                EXECUTIVE VISION &amp; FIELD IMPACT
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-stone-900 dark:text-white tracking-tight leading-tight">
                Lifting Lives From Ghetto Streets to Dignity and Purpose
              </h3>
            </div>

            {/* Paragraphic Body Text */}
            <div className="space-y-4 text-stone-700 dark:text-stone-300 text-sm sm:text-base leading-relaxed font-light">
              <p>
                At the helm of <strong>Thrive Kids Foundation</strong>, our Chief Executive Officer stands as a proven beacon of transformative grassroots change. Driven by deep lived understanding and an unrelenting passion for human dignity, he has dedicated his life to bridging the divide between extreme vulnerability and life-changing opportunity.
              </p>

              <p>
                Under his direct personal leadership, <strong>Thrive Kids Foundation</strong> has rescued hundreds of street-connected children and ghetto homeless youths who were previously written off by circumstance. Through holistic shelter, mentorship, educational scholarships, and vocational apprenticeships, he has guided countless vulnerable boys and girls from harsh street survival into becoming skilled artisans, scholars, and proud community leaders.
              </p>

              <p>
                His proven influence is measured not by promises, but by real-world field evidence. By working hand-in-hand with struggling single mothers, vulnerable grandparents, and community elders, he has catalyzed sustainable family livelihoods, built eco-friendly classrooms, and provided clean water access across high-density urban slums and marginalized rural districts.
              </p>
            </div>

            {/* Executive Quote Box */}
            <div className="relative bg-stone-900 dark:bg-stone-950 text-stone-100 p-6 sm:p-7 rounded-2xl shadow-inner space-y-3">
              <p className="italic text-xs sm:text-sm font-light text-stone-200 leading-relaxed">
                "No child’s destiny should be dictated by where they were born or the hardships they were handed. At <strong>Thrive Kids Foundation</strong>, we walk directly into the hardest neighborhoods to prove that with genuine love, mentorship, and opportunity, every homeless youth and struggling family can rise into greatness."
              </p>
              <div className="flex items-center justify-between pt-3 text-xs">
                <span className="font-bold text-white uppercase tracking-wider font-mono">
                  The CEO and Founder, <strong>Thrive Kids Foundation</strong>
                </span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
