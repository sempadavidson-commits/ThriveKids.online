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
    { label: 'GET INVOLVED', path: 'sponsor' },
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
          className="cursor-pointer select-none text-left flex flex-col justify-center"
          style={{ fontFamily: '"Roboto", sans-serif' }}
        >
          <div className="flex items-baseline leading-none">
            <span className="text-stone-950 font-black text-3xl tracking-tighter" style={{ color: '#000000', fontWeight: 900 }}>T</span>
            <span className="text-emerald-600 font-black text-3xl tracking-tighter ml-0.5" style={{ color: '#10b981', fontWeight: 900 }}>K</span>
          </div>
          <span 
            className="text-[9px] font-bold tracking-widest text-stone-600 uppercase leading-none block mt-1"
            style={{ letterSpacing: '0.12em' }}
          >
            FOUNDATION (UG)
          </span>
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
        </div>

        {/* Mobile Toggle Button */}
        <div className="flex lg:hidden items-center gap-2">
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
          </div>
        </div>
      )}

    </header>
  );
}
