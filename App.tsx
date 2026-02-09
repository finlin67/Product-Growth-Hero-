import React from 'react';
import ProductPhaseTile from './components/ProductPhaseTile';

export default function App() {
  return (
    <div className="relative min-h-screen w-full bg-slate-50 overflow-hidden font-display text-slate-600 flex items-center justify-center">
      
      {/* Background Grid Pattern */}
      <div 
        className="absolute inset-0 opacity-50 pointer-events-none"
        style={{
            backgroundImage: `
                linear-gradient(to right, rgba(148, 163, 184, 0.1) 1px, transparent 1px),
                linear-gradient(to bottom, rgba(148, 163, 184, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px'
        }}
      />

      {/* Ambient Back Glows */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-cyan-500/5 blur-[160px] -z-10 opacity-60" />
      <div className="absolute bottom-0 left-0 w-[800px] h-[800px] bg-violet-600/5 blur-[160px] -z-10 opacity-60" />

      {/* Main Content Area */}
      <main className="relative z-10 p-10 flex flex-col md:flex-row items-center justify-center gap-12">
        
        {/* The Isolated Animated Component */}
        <div className="flex-shrink-0">
          <ProductPhaseTile />
        </div>
        
      </main>

      {/* Overlay UI: Real-time Streams (Originally absolute bottom-left) */}
      <div className="absolute bottom-12 left-12 flex flex-col gap-3 z-20 hidden md:flex">
        <div className="flex items-center gap-3 px-4 py-2 bg-white/60 rounded-xl backdrop-blur-md border border-slate-200 shadow-sm">
          <div className="w-2.5 h-2.5 rounded-full bg-[#3b7ced] animate-pulse" />
          <span className="text-xs font-bold text-slate-600 tracking-tight">Real-time Adoption Stream</span>
        </div>
        <div className="flex items-center gap-3 px-4 py-2 bg-white/60 rounded-xl backdrop-blur-md border border-slate-200 shadow-sm">
          <div className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
          <span className="text-xs font-bold text-slate-600 tracking-tight">Active Growth Loop</span>
        </div>
      </div>

    </div>
  );
}