import React, { useState } from 'react';
import { Heart, ShieldCheck, Menu, X, ChevronRight } from 'lucide-react';

interface NavbarProps {
  currentPath: string;
  currentSubPath?: string;
  onNavigate: (path: string, subPath?: string) => void;
}

export default function Navbar({ 
  currentPath, 
  currentSubPath, 
  onNavigate 
}: NavbarProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { label: 'HOME', path: 'home' },
    { label: 'PROGRAMS', path: 'programs' },
    { label: 'CALCULATOR', path: 'calculator' },
    { label: 'TIMELINE', path: 'timeline' },
    { label: 'SPONSOR A CHILD', path: 'sponsor' },
    { label: 'TRANSPARENCY', path: 'reports' },
    { label: 'UPDATES', path: 'news-events' },
  ];

  const handleLinkClick = (path: string, subPath?: string) => {
    onNavigate(path, subPath);
    setMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-[#fcfbfa]/95 backdrop-blur-md border-b border-stone-200">
      
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 h-20 flex justify-between items-center">
        
        {/* Brand Monogram */}
        <div 
          onClick={() => handleLinkClick('home')}
          className="cursor-pointer select-none text-left flex items-center gap-3"
        >
          <div className="w-10 h-10 rounded-xl bg-stone-900 text-white flex items-center justify-center font-bold font-mono text-base border border-stone-800 shadow-sm">
            <span className="text-emerald-400 font-extrabold">T</span>K
          </div>
          <div>
            <span className="font-sans font-black text-lg md:text-xl tracking-tight text-stone-950 block leading-tight">
              THRIVEKIDS
            </span>
            <span className="font-mono text-[9px] uppercase tracking-[0.25em] text-emerald-600 font-bold block leading-none">
              GLOBAL FOUNDATION
            </span>
          </div>
        </div>

        {/* Desktop Navigation Items */}
        <nav className="hidden lg:flex items-center gap-6 xl:gap-8 text-xs font-bold tracking-wider text-stone-600">
          {navItems.map((item) => {
            const isActive = currentPath === item.path;
            return (
              <button
                key={item.path}
                type="button"
                onClick={() => handleLinkClick(item.path)}
                className={`hover:text-stone-950 transition-colors cursor-pointer relative py-2 uppercase ${
                  isActive ? 'text-stone-950 font-black' : ''
                }`}
              >
                {item.label}
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-emerald-500 rounded-full" />
                )}
              </button>
            );
          })}
        </nav>

        {/* Action Buttons & Quick Channels */}
        <div className="hidden sm:flex items-center gap-2 xl:gap-3">
          {/* WhatsApp Direct Action */}
          <a
            href="https://wa.me/256746036194?text=Hello%20ThriveKids%20Foundation%2C%20I%20would%20like%20to%20get%20more%20information%20and%20support%20a%20child."
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 bg-emerald-50 hover:bg-[#25D366] text-[#25D366] hover:text-white rounded-xl border border-emerald-200 transition-all cursor-pointer shadow-xs group"
            title="Chat on WhatsApp (+256746036194)"
          >
            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
              <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
            </svg>
          </a>

          {/* TikTok Action */}
          <a
            href="https://www.tiktok.com/@thrivekidsfoundation"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 bg-stone-100 hover:bg-black text-stone-700 hover:text-white rounded-xl border border-stone-200 transition-all cursor-pointer shadow-xs group"
            title="Follow on TikTok"
          >
            <svg className="w-4 h-4 fill-current group-hover:text-[#fe2c55] transition-colors" viewBox="0 0 24 24">
              <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.24 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
            </svg>
          </a>

          <button
            type="button"
            onClick={() => handleLinkClick('donate')}
            className="px-5 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs uppercase tracking-wider rounded-xl shadow-sm hover:shadow-md transition-all flex items-center gap-2 cursor-pointer"
          >
            <Heart className="w-3.5 h-3.5 fill-white" />
            <span>PLEDGE SUPPORT</span>
          </button>
        </div>

        {/* Mobile Toggle Button */}
        <div className="flex lg:hidden items-center gap-2">
          <a
            href="https://wa.me/256746036194?text=Hello%20ThriveKids%20Foundation%2C%20I%20would%20like%20to%20get%20more%20information."
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 bg-emerald-50 text-[#25D366] border border-emerald-200 rounded-lg flex items-center justify-center"
            title="WhatsApp (+256746036194)"
          >
            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
              <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
            </svg>
          </a>

          <button
            type="button"
            onClick={() => handleLinkClick('donate')}
            className="sm:hidden px-3 py-2 bg-emerald-600 text-white font-bold text-xs rounded-lg flex items-center gap-1"
          >
            <Heart className="w-3 h-3 fill-white" />
            <span>GIVE</span>
          </button>
          
          <button
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            className="p-2 border border-stone-300 rounded-lg text-stone-800 hover:bg-stone-100 transition-colors cursor-pointer"
          >
            {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

      </div>

      {/* Mobile Drawer */}
      {menuOpen && (
        <div className="lg:hidden bg-white border-b border-stone-200 shadow-xl p-6 space-y-4">
          <div className="flex items-center justify-between border-b border-stone-100 pb-2 text-left">
            <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-stone-400 font-bold">
              FOUNDATION NAVIGATION
            </span>
            <a 
              href="tel:+256746036194"
              className="text-[11px] font-mono text-emerald-600 font-bold"
            >
              +256746036194
            </a>
          </div>
          <div className="grid grid-cols-1 gap-2 text-left">
            {navItems.map((item) => {
              const isActive = currentPath === item.path;
              return (
                <button
                  key={item.path}
                  type="button"
                  onClick={() => handleLinkClick(item.path)}
                  className={`py-3 px-4 rounded-xl border text-xs font-bold tracking-wide text-left cursor-pointer transition-colors flex justify-between items-center ${
                    isActive 
                      ? 'bg-emerald-50 border-emerald-300 text-emerald-900' 
                      : 'bg-stone-50 border-stone-200 hover:bg-stone-100 text-stone-800'
                  }`}
                >
                  <span>{item.label}</span>
                  <ChevronRight className="w-4 h-4 text-stone-400" />
                </button>
              );
            })}
            
            <button
              type="button"
              onClick={() => handleLinkClick('donate')}
              className="py-3 px-4 rounded-xl bg-emerald-600 text-white font-bold text-xs uppercase tracking-wider text-center flex items-center justify-center gap-2 shadow-md cursor-pointer mt-2"
            >
              <Heart className="w-4 h-4 fill-white" />
              <span>Pledge Support Now</span>
            </button>
          </div>
        </div>
      )}

    </header>
  );
}
