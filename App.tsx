import React, { useState, useEffect } from 'react';
import { Sun, Moon } from 'lucide-react';
import ProductPhaseTile from './components/ProductPhaseTile';

type Theme = 'light' | 'dark';

export default function App() {
  const [theme, setTheme] = useState<Theme>('light');

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') as Theme | null;
    const userPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

    if (savedTheme) {
      setTheme(savedTheme);
    } else if (userPrefersDark) {
      setTheme('dark');
    }
  }, []);

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <div className="relative min-h-screen w-full bg-[#f6f6f8] dark:bg-[#0B132B] overflow-hidden font-display text-slate-600 dark:text-slate-400 flex items-center justify-center transition-colors duration-300">
      
      {/* Theme Toggle Button */}
      <button
        onClick={toggleTheme}
        className="absolute top-6 right-6 z-30 p-2 rounded-full bg-slate-200/50 dark:bg-[#162447]/50 text-slate-600 dark:text-slate-300 backdrop-blur-sm border border-slate-300/50 dark:border-slate-700/50 hover:bg-slate-200 dark:hover:bg-[#162447] transition-all"
        aria-label="Toggle theme"
      >
        {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
      </button>

      {/* Background Grid Pattern */}
      <div 
        className="absolute inset-0 opacity-50 dark:opacity-20 pointer-events-none"
        style={{
            backgroundImage: `
                linear-gradient(to right, rgba(148, 163, 184, 0.1) 1px, transparent 1px),
                linear-gradient(to bottom, rgba(148, 163, 184, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px'
        }}
      />

      {/* Ambient Back Glows */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#2463eb]/5 dark:bg-[#2463eb]/10 blur-[160px] -z-10 opacity-60" />
      <div className="absolute bottom-0 left-0 w-[800px] h-[800px] bg-[#EAB308]/5 dark:bg-[#EAB308]/10 blur-[160px] -z-10 opacity-60" />

      {/* Main Content Area */}
      <main className="relative z-10 p-10 flex flex-col md:flex-row items-center justify-center gap-12">
        
        {/* The Isolated Animated Component */}
        <div className="flex-shrink-0">
          <ProductPhaseTile />
        </div>
        
      </main>

      {/* Overlay UI: Real-time Streams */}
      <div className="absolute bottom-12 left-12 flex flex-col gap-3 z-20 hidden md:flex">
        <div className="flex items-center gap-3 px-4 py-2 bg-[#F1F4F8]/60 dark:bg-[#162447]/60 rounded-xl backdrop-blur-md border border-slate-200 dark:border-slate-700 shadow-sm">
          <div className="w-2.5 h-2.5 rounded-full bg-[#2463eb] animate-pulse" />
          <span className="text-xs font-bold text-slate-600 dark:text-slate-300 tracking-tight">Real-time Adoption Stream</span>
        </div>
        <div className="flex items-center gap-3 px-4 py-2 bg-[#F1F4F8]/60 dark:bg-[#162447]/60 rounded-xl backdrop-blur-md border border-slate-200 dark:border-slate-700 shadow-sm">
          <div className="w-2.5 h-2.5 rounded-full bg-lime-500" />
          <span className="text-xs font-bold text-slate-600 dark:text-slate-300 tracking-tight">Active Growth Loop</span>
        </div>
      </div>

    </div>
  );
}