import React, { useEffect } from 'react';

// Import all 15 assets from src/assets
import imgAde from '../assets/ade-VzAPbOV71pg-unsplash.jpg';
import imgAyano from '../assets/ayano-tosin-qE8HQTIRUc4-unsplash.jpg';
import imgChidy from '../assets/chidy-young-k2BgJaA0kUk-unsplash.jpg';
import imgFray from '../assets/fray-bekele-aBb2Bwg5TIU-unsplash.jpg';
import imgHassan from '../assets/hassan-kibwana-R2Zs1eYfCsU-unsplash.jpg';
import imgJeff from '../assets/jeff-ackley-GdF3dozJUEk-unsplash.jpg';
import imgKamal from '../assets/kamal-ig-ZYtKa6npqMc-unsplash.jpg';
import imgMichael1 from '../assets/michael-ali--GuHCYRhXvA-unsplash.jpg';
import imgMichael2 from '../assets/michael-ali-3sVO9hlU_UY-unsplash.jpg';
import imgMichael3 from '../assets/michael-ali-3yv46-5fp_A-unsplash.jpg';
import imgMichael4 from '../assets/michael-ali-Xo27J9RUjK8-unsplash.jpg';
import imgMichael5 from '../assets/michael-ali-ugQzBfJMg44-unsplash.jpg';
import imgOsborn from '../assets/osborn-bruce-4ZSpiWdlxyU-unsplash.jpg';
import imgSeth from '../assets/seth-doyle-YEK-1BZ7L1s-unsplash.jpg';
import imgToby from '../assets/toby-wong-S9obLDUAhes-unsplash.jpg';

const ROW_1_IMAGES: string[] = [
  imgAyano,
  imgAde,
  imgChidy,
  imgFray,
  imgHassan,
  imgJeff,
  imgKamal,
  imgMichael1
];

const ROW_2_IMAGES: string[] = [
  imgMichael2,
  imgMichael3,
  imgMichael4,
  imgMichael5,
  imgOsborn,
  imgSeth,
  imgToby,
  imgAyano
];

const ALL_IMAGES = [
  imgAde, imgAyano, imgChidy, imgFray, imgHassan, 
  imgJeff, imgKamal, imgMichael1, imgMichael2, imgMichael3, 
  imgMichael4, imgMichael5, imgOsborn, imgSeth, imgToby
];

export default function CommunityAssetsGallery() {
  // Preload all assets immediately to guarantee instant display
  useEffect(() => {
    ALL_IMAGES.forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  }, []);

  return (
    <section className="relative py-6 sm:py-8 bg-[#faf8f5] dark:bg-[#0e0c0b] overflow-hidden select-none transition-colors">
      <style>{`
        @keyframes scroll-left-continuous {
          0% {
            transform: translate3d(0, 0, 0);
          }
          100% {
            transform: translate3d(-50%, 0, 0);
          }
        }

        @keyframes scroll-right-continuous {
          0% {
            transform: translate3d(-50%, 0, 0);
          }
          100% {
            transform: translate3d(0, 0, 0);
          }
        }

        .marquee-track-ltr {
          display: flex;
          width: max-content;
          will-change: transform;
          transform: translate3d(0, 0, 0);
          backface-visibility: hidden;
          perspective: 1000px;
          animation: scroll-left-continuous 38s linear infinite;
        }

        .marquee-track-rtl {
          display: flex;
          width: max-content;
          will-change: transform;
          transform: translate3d(0, 0, 0);
          backface-visibility: hidden;
          perspective: 1000px;
          animation: scroll-right-continuous 38s linear infinite;
        }

        .marquee-track-ltr:hover,
        .marquee-track-rtl:hover {
          animation-play-state: paused;
        }
      `}</style>

      {/* Endless Smooth Image Strips */}
      <div className="space-y-3 sm:space-y-4">
        
        {/* ROW 1: Continuous Smooth Leftward Marquee */}
        <div className="overflow-hidden w-full contain-paint">
          <div className="marquee-track-ltr gap-3 sm:gap-4 pr-3 sm:pr-4">
            {[...ROW_1_IMAGES, ...ROW_1_IMAGES, ...ROW_1_IMAGES, ...ROW_1_IMAGES].map((src, idx) => (
              <div
                key={`r1-${idx}`}
                className="relative w-64 sm:w-80 md:w-96 aspect-[16/10] shrink-0 rounded-xl sm:rounded-2xl overflow-hidden bg-stone-200 dark:bg-stone-800"
              >
                <img
                  src={src}
                  alt=""
                  loading="eager"
                  decoding="sync"
                  className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-500 pointer-events-auto"
                />
              </div>
            ))}
          </div>
        </div>

        {/* ROW 2: Continuous Smooth Rightward Marquee */}
        <div className="overflow-hidden w-full contain-paint">
          <div className="marquee-track-rtl gap-3 sm:gap-4 pr-3 sm:pr-4">
            {[...ROW_2_IMAGES, ...ROW_2_IMAGES, ...ROW_2_IMAGES, ...ROW_2_IMAGES].map((src, idx) => (
              <div
                key={`r2-${idx}`}
                className="relative w-64 sm:w-80 md:w-96 aspect-[16/10] shrink-0 rounded-xl sm:rounded-2xl overflow-hidden bg-stone-200 dark:bg-stone-800"
              >
                <img
                  src={src}
                  alt=""
                  loading="eager"
                  decoding="sync"
                  className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-500 pointer-events-auto"
                />
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
