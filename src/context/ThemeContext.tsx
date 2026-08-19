import React, { createContext, useContext, useEffect, useState } from 'react';
import { safeGetItem, safeSetItem } from '../utils/storage';

export type ThemeMode = 'system' | 'light' | 'dark';

interface ThemeContextType {
  theme: ThemeMode;
  setTheme: (mode: ThemeMode) => void;
  isDark: boolean;
  systemTheme: 'light' | 'dark';
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  // Read saved preference or default to 'system'
  const [theme, setThemeState] = useState<ThemeMode>(() => {
    const saved = safeGetItem('tk_display_mode') as ThemeMode;
    return saved && ['system', 'light', 'dark'].includes(saved) ? saved : 'system';
  });

  const [systemTheme, setSystemTheme] = useState<'light' | 'dark'>(() => {
    try {
      if (typeof window !== 'undefined' && window.matchMedia) {
        return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
      }
    } catch {
      // Fallback
    }
    return 'light';
  });

  // Listen to device display mode (prefers-color-scheme) changes in real-time
  useEffect(() => {
    try {
      if (typeof window === 'undefined' || !window.matchMedia) return;

      const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
      
      const handleChange = (e: MediaQueryListEvent) => {
        setSystemTheme(e.matches ? 'dark' : 'light');
      };

      setSystemTheme(mediaQuery.matches ? 'dark' : 'light');

      if (mediaQuery.addEventListener) {
        mediaQuery.addEventListener('change', handleChange);
        return () => mediaQuery.removeEventListener('change', handleChange);
      } else if (mediaQuery.addListener) {
        // Legacy browser fallback
        mediaQuery.addListener(handleChange);
        return () => mediaQuery.removeListener(handleChange);
      }
    } catch {
      // Ignore media query listener issues in sandbox
    }
  }, []);

  const effectiveTheme = theme === 'system' ? systemTheme : theme;
  const isDark = effectiveTheme === 'dark';

  // Apply dark class to document.documentElement
  useEffect(() => {
    try {
      const root = document.documentElement;
      if (isDark) {
        root.classList.add('dark');
        root.style.colorScheme = 'dark';
      } else {
        root.classList.remove('dark');
        root.style.colorScheme = 'light';
      }
    } catch {
      // Ignore DOM style quirks
    }
  }, [isDark]);

  const setTheme = (mode: ThemeMode) => {
    setThemeState(mode);
    safeSetItem('tk_display_mode', mode);
  };

  return (
    <ThemeContext.Provider value={{ theme, setTheme, isDark, systemTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}
