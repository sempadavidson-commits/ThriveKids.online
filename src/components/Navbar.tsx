import React, { useState, useEffect } from 'react';
import { Menu, X, MessageCircle, Phone, Heart, ChevronRight, HelpCircle } from 'lucide-react';

interface NavbarProps {
  currentPath: string;
  currentSubPath?: string;
  onNavigate: (path: string, subPath?: string) => void;
}

export default function Navbar({ 
  currentPath, 
  onNavigate 
}: NavbarProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  // Close menu on escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMenuOpen(false);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Lock body scroll when menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [menuOpen]);

  const handleLinkClick = (path: string) => {
    onNavigate(path);
    setMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleScrollToSection = (elementId: string) => {
    setMenuOpen(false);
    if (currentPath !== 'home') {
      onNavigate('home');
      setTimeout(() => {
        const el = document.getElementById(elementId);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      const el = document.getElementById(elementId);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-[#fcfbfa]/95 backdrop-blur-md">
      
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

        {/* Quick Action Channels & Hamburger */}
        <div className="flex items-center gap-2.5 sm:gap-3">
          
          {/* WhatsApp Chat Button */}
          <a
            href="https://wa.me/256746036194?text=Hello%20Thrive%20Kids%20Foundation"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-3.5 py-2.5 bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-xs rounded-xl transition-all shadow-md shadow-emerald-900/10 cursor-pointer group"
            title="Chat on WhatsApp"
          >
            <svg 
              className="w-4 h-4 fill-current shrink-0" 
              viewBox="0 0 24 24"
            >
              <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
            </svg>
            <span className="font-mono uppercase tracking-wider text-[11px]">WhatsApp</span>
          </a>

          {/* TikTok Action */}
          <a
            href="https://www.tiktok.com/@thrivekidsfoundation"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 bg-stone-100 hover:bg-black text-stone-700 hover:text-white rounded-xl transition-all cursor-pointer shadow-xs group"
            title="Follow on TikTok"
          >
            <svg className="w-4 h-4 fill-current group-hover:text-[#fe2c55] transition-colors" viewBox="0 0 24 24">
              <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.24 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
            </svg>
          </a>

          {/* Direct Telephone Link */}
          <a
            href="tel:+256746036194"
            className="hidden lg:inline-flex items-center px-4 py-2.5 bg-stone-900 hover:bg-stone-800 text-white text-xs font-mono font-bold tracking-wider rounded-xl transition-all"
          >
            +256 746 036 194
          </a>

          {/* Hamburger Menu Button */}
          <button
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            className="p-2.5 bg-stone-100 hover:bg-stone-200 text-stone-900 rounded-xl transition-all cursor-pointer shadow-xs"
            aria-label="Toggle Navigation Menu"
          >
            {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>

        </div>

      </div>

      {/* Hamburger Overlay Drawer */}
      {menuOpen && (
        <div className="fixed inset-0 top-20 z-40 bg-stone-950/60 backdrop-blur-md transition-all">
          <div className="w-full max-w-md ml-auto h-full bg-[#fcfbfa] shadow-2xl p-6 sm:p-8 flex flex-col justify-between overflow-y-auto">
            
            {/* Menu Header & Links */}
            <div className="space-y-6">
              
              <div className="space-y-1">
                <span className="text-[10px] font-mono font-bold text-emerald-700 uppercase tracking-widest">
                  NAVIGATION &amp; RESOURCES
                </span>
                <h3 className="text-xl font-black text-stone-900">
                  Thrive Kids Foundation
                </h3>
              </div>

              {/* Navigation Items */}
              <nav className="space-y-2">
                <button
                  type="button"
                  onClick={() => handleLinkClick('home')}
                  className="w-full flex items-center justify-between p-3.5 rounded-xl text-left bg-stone-100 hover:bg-stone-200 text-stone-900 font-bold text-sm transition-all cursor-pointer"
                >
                  <span>Home</span>
                  <ChevronRight className="w-4 h-4 text-stone-400" />
                </button>

                <button
                  type="button"
                  onClick={() => handleScrollToSection('ceo-leadership')}
                  className="w-full flex items-center justify-between p-3.5 rounded-xl text-left bg-stone-100 hover:bg-stone-200 text-stone-900 font-bold text-sm transition-all cursor-pointer"
                >
                  <span>Executive Leadership</span>
                  <ChevronRight className="w-4 h-4 text-stone-400" />
                </button>

                <button
                  type="button"
                  onClick={() => handleScrollToSection('faq')}
                  className="w-full flex items-center justify-between p-3.5 rounded-xl text-left bg-stone-100 hover:bg-stone-200 text-stone-900 font-bold text-sm transition-all cursor-pointer"
                >
                  <span>Transparency &amp; FAQ</span>
                  <ChevronRight className="w-4 h-4 text-stone-400" />
                </button>

                <button
                  type="button"
                  onClick={() => handleLinkClick('donate')}
                  className="w-full flex items-center justify-between p-3.5 rounded-xl text-left bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm transition-all cursor-pointer"
                >
                  <span>Donate &amp; Support A Child</span>
                  <Heart className="w-4 h-4 fill-current" />
                </button>
              </nav>

              {/* Direct Reach Out Block */}
              <div className="pt-4 space-y-3">
                <span className="text-[10px] font-mono font-bold text-stone-500 uppercase tracking-widest block">
                  DIRECT CONTACT CHANNELS
                </span>

                <a
                  href="https://wa.me/256746036194?text=Hello%20Thrive%20Kids%20Foundation"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3.5 bg-[#25D366]/10 hover:bg-[#25D366]/20 text-[#128C7E] rounded-xl font-bold text-xs transition-all cursor-pointer"
                >
                  <MessageCircle className="w-4 h-4 shrink-0 text-[#25D366]" />
                  <span>Chat directly on WhatsApp (+256 746 036 194)</span>
                </a>

                <a
                  href="tel:+256746036194"
                  className="flex items-center gap-3 p-3.5 bg-stone-100 hover:bg-stone-200 text-stone-800 rounded-xl font-bold text-xs transition-all cursor-pointer"
                >
                  <Phone className="w-4 h-4 shrink-0 text-stone-600" />
                  <span>Call Us: +256 746 036 194</span>
                </a>

                <a
                  href="https://www.tiktok.com/@thrivekidsfoundation"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3.5 bg-stone-900 hover:bg-black text-white rounded-xl font-bold text-xs transition-all cursor-pointer"
                >
                  <svg className="w-4 h-4 fill-current shrink-0 text-[#fe2c55]" viewBox="0 0 24 24">
                    <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.24 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
                  </svg>
                  <span>Follow @thrivekidsfoundation on TikTok</span>
                </a>
              </div>

            </div>

            {/* Menu Footer */}
            <div className="pt-6 text-center text-[10px] text-stone-500 font-mono">
              <p>Thrive Kids Foundation (UG) • Registered Grassroots Organization</p>
            </div>

          </div>
        </div>
      )}

    </header>
  );
}
