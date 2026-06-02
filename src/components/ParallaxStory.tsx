import React from 'react';
import { motion } from 'motion/react';

// Live upward counter utility
function CountingStat({ endValue, duration = 2.5 }: { endValue: number; duration?: number }) {
  const [count, setCount] = React.useState(0);
  const elementRef = React.useRef<HTMLSpanElement>(null);
  const [hasTriggered, setHasTriggered] = React.useState(false);

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasTriggered) {
          setHasTriggered(true);
          let start = 0;
          const end = endValue;
          const totalFrames = duration * 60;
          let frame = 0;

          const counter = () => {
            frame++;
            const progress = frame / totalFrames;
            // Ease out quad
            const currentCount = Math.round(end * (progress * (2 - progress)));
            
            if (frame < totalFrames) {
              setCount(currentCount);
              requestAnimationFrame(counter);
            } else {
              setCount(end);
            }
          };
          
          requestAnimationFrame(counter);
        }
      },
      { threshold: 0.1 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [endValue, duration, hasTriggered]);

  return (
    <span ref={elementRef} className="font-display font-black text-white text-5xl sm:text-7xl tracking-tighter">
      {count.toLocaleString()}+
    </span>
  );
}

export default function ParallaxStory() {
  return (
    <section className="relative bg-stone-900 py-24 sm:py-32 overflow-hidden px-6 lg:px-8">
      {/* Background soft ambient glowing circles */}
      <div className="absolute top-1/4 left-1/3 w-96 h-96 rounded-full bg-emerald-950/25 blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-amber-950/20 blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
        {/* Left Side: Overlapping interactive images with parallax offsets */}
        <div className="lg:col-span-7 relative h-[500px] sm:h-[600px] w-full">
          {/* Main big background sheet */}
          <motion.div
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 0.8, y: 0 }}
            viewport={{ once: true, margin: '-10% 0px' }}
            transition={{ duration: 1.2, ease: 'easeOut' }}
            className="absolute top-0 left-0 w-[60%] h-[75%] bg-stone-950 rounded-sm overflow-hidden border border-stone-800"
          >
            <img 
              src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&q=80&w=1200" 
              alt="Children studying closely together in school" 
              className="w-full h-full object-cover scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 to-transparent"></div>
          </motion.div>

          {/* Overlapping foreground offset sheet (moves slightly slower - parallax effect) */}
          <motion.div
            initial={{ opacity: 0, y: 140 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-10% 0px' }}
            transition={{ duration: 1.5, ease: 'easeOut', delay: 0.2 }}
            className="absolute bottom-0 right-4 w-[50%] h-[60%] bg-stone-950 rounded-sm overflow-hidden z-10 border border-stone-800 shadow-2xl"
          >
            <img 
              src="https://images.unsplash.com/photo-1542038784456-1ea8e935640e?auto=format&fit=crop&q=80&w=1200" 
              alt="A smiling child with their mother outside their newly funded business" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-stone-950/60 to-transparent"></div>
          </motion.div>

          {/* Core overlay floating detail text */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="absolute top-1/4 right-[5%] bg-stone-950/90 backdrop-blur-md p-4 max-w-[240px] border border-stone-800 rounded-sm z-20 pointer-events-none text-left"
          >
            <span className="font-mono text-[9px] uppercase tracking-widest text-[#10b981]">01 / FIELD DOCUMENT</span>
            <p className="font-editorial text-stone-200 text-sm italic mt-1 leading-relaxed">
              "We must record families not as targets of charity, but as architects of their own liberation."
            </p>
            <span className="block font-mono text-[80%] text-stone-500 mt-2">— Field Officer Diary, Ngong</span>
          </motion.div>
        </div>

        {/* Right Side: Editorial statement, statistics counting upwards, narrative text */}
        <div className="lg:col-span-5 space-y-12 text-left">
          <div className="space-y-6">
            <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-[#10b981] font-bold block">
              VISUAL REVELATION
            </span>
            <h2 className="font-editorial font-normal italic text-stone-100 text-3xl sm:text-4xl lg:text-5xl tracking-tight leading-tight">
              Honest documentary. <br />
              Captured in the field.
            </h2>
            <p className="font-sans text-stone-405 text-sm sm:text-base leading-relaxed font-light">
              We do not present smiles for marketing quotas. These stories are documents of survival, resilience, and growth. We are there 
              to provide the leverage: drilling solar boreholes, organizing child sanctuaries, and financing mother-led cooperatives.
            </p>
          </div>

          {/* Counting Statistics Stack */}
          <div className="space-y-8 border-t border-stone-800 pt-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div className="space-y-1">
                <span className="block font-mono text-[9px] uppercase tracking-widest text-stone-500">SCHOLARSHIPS LAUNCHED</span>
                <div className="flex items-baseline gap-1">
                  <CountingStat endValue={1420} />
                </div>
                <p className="text-xs text-stone-400 font-light mt-1">Verified secondary and tertiary placements.</p>
              </div>

              <div className="space-y-1">
                <span className="block font-mono text-[9px] uppercase tracking-widest text-stone-500">LIVELIPHOODS ESTABLISHED</span>
                <div className="flex items-baseline gap-1">
                  <CountingStat endValue={560} />
                </div>
                <p className="text-xs text-stone-400 font-light mt-1">Independent women-owned baking and farming firms.</p>
              </div>
            </div>

            <div className="space-y-1">
              <span className="block font-mono text-[9px] uppercase tracking-widest text-stone-500">RESCUED FROM CRITICAL EXPLOITATION</span>
              <div className="flex items-baseline gap-2">
                <CountingStat endValue={345} />
                <span className="text-stone-400 font-mono text-sm">Escaped Child Labor</span>
              </div>
              <p className="text-xs text-stone-450 font-light mt-1">
                Reinserted directly into therapy, child protection structures, and regular local schooling.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
