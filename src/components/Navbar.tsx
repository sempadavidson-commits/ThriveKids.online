import React, { useState } from 'react';

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

  // Cleaned navigation list matching structural requirements
  const navItems = [
    { label: 'HOME', path: 'home' },
    { label: 'GET INVOLVED', path: 'get-involved' },
    { label: 'UPDATES', path: 'news-events' },
    { label: 'GALLERY', path: 'gallery' }
  ];

  const handleLinkClick = (path: string, subPath?: string) => {
    onNavigate(path, subPath);
    setMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-[#fcfbfa]/95 backdrop-blur-md border-b border-stone-200">
      
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 h-20 flex justify-between items-center">
        
        {/* Brand Monogram */}
        <div 
          onClick={() => handleLinkClick('home')}
          className="cursor-pointer select-none text-left"
        >
          <span className="font-sans font-black text-lg md:text-xl tracking-wider text-stone-950 block leading-tight">
            THRIVEKIDS
          </span>
          <span className="font-mono text-[9px] uppercase tracking-[0.25em] text-[#10b981] font-bold block leading-none">
            foundation
          </span>
        </div>

        {/* Desktop Navigation Items with perfect padding and hover styling */}
        <nav className="hidden xl:flex items-center gap-8 text-xs font-medium tracking-wider text-stone-600">
          {navItems.map((item) => {
            const isActive = currentPath === item.path;
            return (
              <button
                key={item.path}
                onClick={() => handleLinkClick(item.path)}
                className={`hover:text-stone-950 transition-colors cursor-pointer relative py-2 uppercase ${
                  isActive ? 'text-stone-950 font-bold' : ''
                }`}
              >
                {item.label}
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#10b981]" />
                )}
              </button>
            );
          })}
        </nav>

        {/* Responsive Mobile / Tablet Toggle Header Button */}
        <div className="flex xl:hidden items-center gap-3">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="px-4 py-2 border border-stone-300 rounded font-mono text-[10px] uppercase tracking-widest text-stone-800 hover:bg-stone-100 transition-colors cursor-pointer"
          >
            {menuOpen ? 'CLOSE' : 'MENU'}
          </button>
        </div>

      </div>

      {/* Clean Drawer / Overlay listing of pages */}
      {menuOpen && (
        <div className="absolute top-full left-0 right-0 bg-white border-b border-stone-200 shadow-xl z-50 animate-fadeIn">
          <div className="p-6 space-y-4">
            <span className="block font-mono text-[9px] uppercase tracking-[0.2em] text-stone-400 font-bold border-b border-stone-100 pb-2 text-left font-semibold">
              DIRECTORY PAGES
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-left">
              {navItems.map((item) => {
                const isActive = currentPath === item.path;
                return (
                  <button
                    key={item.path}
                    onClick={() => handleLinkClick(item.path)}
                    className={`py-3 px-4 rounded border text-xs font-semibold tracking-wide text-left cursor-pointer transition-colors ${
                      isActive 
                        ? 'bg-emerald-50 border-emerald-200 text-emerald-800' 
                        : 'bg-stone-50 border-stone-100 hover:bg-stone-100 text-stone-700'
                    }`}
                  >
                    {item.label}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      )}

    </header>
  );
}
