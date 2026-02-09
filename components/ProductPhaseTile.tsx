import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Package, 
  Zap, 
  UserPlus, 
  TrendingUp, 
  Rocket, 
  Check,
  Activity
} from 'lucide-react';

/**
 * ProductPhaseTile
 * 
 * A self-contained, 600x600 animated visualization component.
 * Uses Framer Motion for high-performance animations and Tailwind CSS for styling.
 * 
 * Scaled internally to fit the 600x600 constraint while maintaining the original 
 * spatial relationships of the 700px+ design.
 */
export default function ProductPhaseTile() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Animation variants
  const pulseVariant = {
    initial: { opacity: 0.5, scale: 1 },
    animate: { 
      opacity: [0.5, 0.8, 0.5], 
      scale: [1, 1.02, 1],
      transition: { duration: 4, repeat: Infinity, ease: "easeInOut" }
    }
  };

  const floatVariant = (delay = 0) => ({
    animate: {
      y: [0, -10, 0],
      transition: { duration: 6, delay, repeat: Infinity, ease: "easeInOut" }
    }
  });

  const cardEntrance = {
    hidden: { opacity: 0, y: 20, scale: 0.9 },
    visible: (custom: number) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { delay: custom * 0.1, duration: 0.5, ease: "backOut" }
    })
  };

  return (
    <div className="relative w-[600px] h-[600px] flex items-center justify-center select-none">
      {/* 
        Scaling Container: 
        The original design requires ~750px of space for the "pop out" cards.
        We scale it down to perfectly fit the 600x600 rigid container.
      */}
      <div className="relative w-[700px] h-[700px] flex items-center justify-center scale-[0.80] origin-center">
        
        {/* --- Background Orbits --- */}
        <motion.div 
          variants={pulseVariant}
          initial="initial"
          animate="animate"
          className="absolute w-[680px] h-[680px] rounded-full border-[1.5px] border-[#3b7ced]/10"
        />
        <motion.div 
          animate={{ opacity: [0.3, 0.6, 0.3], scale: [1, 1.03, 1] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute w-[520px] h-[520px] rounded-full border-[1.5px] border-cyan-500/10"
        />
        <div className="absolute w-[380px] h-[380px] rounded-full border-[1.5px] border-violet-500/10" />

        {/* --- Main Hub Glass Panel --- */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative z-10 w-[580px] h-[440px] rounded-3xl flex flex-col p-8 border border-white/60 bg-white/80 backdrop-blur-xl shadow-[0_0_100px_rgba(59,125,237,0.1),0_0_40px_rgba(139,92,246,0.1)]"
        >
          {/* Header */}
          <div className="flex items-center justify-between mb-10">
            <div className="flex gap-2">
              <div className="w-2.5 h-2.5 rounded-full bg-red-400/80" />
              <div className="w-2.5 h-2.5 rounded-full bg-yellow-400/80" />
              <div className="w-2.5 h-2.5 rounded-full bg-emerald-400/80" />
            </div>
            <div className="px-4 py-1 rounded-full bg-slate-100 border border-slate-200">
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em]">Growth Engine v2.0</span>
            </div>
          </div>

          {/* Phases Grid */}
          <div className="flex items-center justify-around grow px-4">
            
            {/* Phase 01: Setup */}
            <div className="flex flex-col items-center gap-4 group cursor-default">
              <motion.div 
                whileHover={{ scale: 1.05 }}
                className="w-28 h-28 rounded-[2rem] bg-emerald-50 border-2 border-emerald-100 flex items-center justify-center text-emerald-600 shadow-[0_0_50px_rgba(16,185,129,0.25)] transition-colors duration-300"
              >
                <Package size={48} strokeWidth={1.5} />
              </motion.div>
              <div className="text-center">
                <span className="text-[11px] uppercase tracking-widest text-slate-400 font-black block mb-1">Phase 01</span>
                <span className="text-sm font-bold text-slate-800">Setup</span>
              </div>
            </div>

            {/* Connector */}
            <div className="h-px w-12 bg-gradient-to-r from-emerald-200/50 via-cyan-300/50 to-cyan-200/50" />

            {/* Phase 02: Activation */}
            <div className="flex flex-col items-center gap-4 group cursor-default">
              <motion.div 
                whileHover={{ scale: 1.05 }}
                className="w-32 h-32 rounded-[2.25rem] bg-cyan-50 border-2 border-cyan-100 flex items-center justify-center text-cyan-600 shadow-[0_0_50px_rgba(6,182,212,0.25)]"
              >
                <Zap size={56} strokeWidth={1.5} fill="currentColor" className="text-cyan-600" />
              </motion.div>
              <div className="text-center">
                <span className="text-[11px] uppercase tracking-widest text-slate-400 font-black block mb-1">Phase 02</span>
                <span className="text-base font-extrabold text-slate-900">Activation</span>
              </div>
            </div>

            {/* Connector */}
            <div className="h-px w-12 bg-gradient-to-r from-cyan-200/50 via-violet-300/50 to-violet-200/50" />

            {/* Phase 03: Expansion */}
            <div className="flex flex-col items-center gap-4 group cursor-default">
              <motion.div 
                whileHover={{ scale: 1.05 }}
                className="w-28 h-28 rounded-[2rem] bg-violet-50 border-2 border-violet-100 flex items-center justify-center text-violet-600 shadow-[0_0_50px_rgba(139,92,246,0.25)]"
              >
                <UserPlus size={48} strokeWidth={1.5} />
              </motion.div>
              <div className="text-center">
                <span className="text-[11px] uppercase tracking-widest text-slate-400 font-black block mb-1">Phase 03</span>
                <span className="text-sm font-bold text-slate-800">Expansion</span>
              </div>
            </div>
          </div>

          {/* Central Ping (Bottom) */}
          <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
            <div className="relative w-5 h-5 flex items-center justify-center">
              <span className="absolute inline-flex h-full w-full rounded-full bg-[#3b7ced] opacity-30 animate-ping"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-[#3b7ced] border-2 border-white shadow-[0_0_20px_rgba(59,125,237,0.4)]"></span>
            </div>
          </div>
        </motion.div>


        {/* --- Floating Elements --- */}

        {/* Top Right: Champion Network */}
        <motion.div 
          variants={cardEntrance}
          custom={1}
          initial="hidden"
          animate={mounted ? "visible" : "hidden"}
          className="absolute top-12 right-[-20px] z-20 flex flex-col items-end gap-3"
        >
          <motion.div variants={floatVariant(0)} animate="animate" className="flex -space-x-3">
            <img alt="User 1" className="w-10 h-10 rounded-full border-2 border-white shadow-md object-cover" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=100&auto=format&fit=crop" />
            <img alt="User 2" className="w-10 h-10 rounded-full border-2 border-white shadow-md object-cover" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=100&auto=format&fit=crop" />
            <div className="w-10 h-10 rounded-full bg-violet-600 border-2 border-white flex items-center justify-center shadow-md text-white">
              <Check size={16} strokeWidth={4} />
            </div>
          </motion.div>
          <motion.div 
            variants={floatVariant(0.5)} 
            animate="animate" 
            className="px-4 py-1.5 rounded-full bg-white/80 backdrop-blur border border-violet-100 shadow-sm"
          >
            <span className="text-[11px] font-black text-violet-600 tracking-wider uppercase">Champion Network</span>
          </motion.div>
        </motion.div>

        {/* Top Left: Net Revenue Retention */}
        <motion.div 
          variants={cardEntrance}
          custom={2}
          initial="hidden"
          animate={mounted ? "visible" : "hidden"}
          className="absolute -top-16 -left-20 z-30 min-w-[300px]"
        >
          <motion.div 
            variants={floatVariant(1)} 
            animate="animate"
            className="bg-white/90 backdrop-blur-xl p-7 rounded-3xl border border-emerald-100 shadow-[0_20px_50px_-12px_rgba(0,0,0,0.1)]"
          >
            <div className="flex items-center gap-2 mb-2">
              <div className="p-1 rounded bg-emerald-50 text-emerald-600">
                <TrendingUp size={18} strokeWidth={3} />
              </div>
              <span className="text-xs font-black text-slate-400 uppercase tracking-widest">Net Revenue Retention</span>
            </div>
            <div className="text-7xl font-black text-slate-900 tracking-tighter flex items-baseline">
              +47<span className="text-emerald-500 font-medium text-4xl ml-1">%</span>
            </div>
            <div className="mt-5 h-2 w-full bg-slate-100 rounded-full overflow-hidden">
              <motion.div 
                initial={{ width: 0 }}
                animate={{ width: "88%" }}
                transition={{ duration: 1.5, delay: 0.5, ease: "circOut" }}
                className="h-full bg-emerald-500 rounded-full shadow-[0_0_10px_rgba(16,185,129,0.3)]"
              />
            </div>
          </motion.div>
        </motion.div>

        {/* Bottom Right: Expansion Multiple */}
        <motion.div 
          variants={cardEntrance}
          custom={3}
          initial="hidden"
          animate={mounted ? "visible" : "hidden"}
          className="absolute -bottom-20 -right-24 z-30 min-w-[340px]"
        >
          <motion.div 
             variants={floatVariant(1.5)} 
             animate="animate"
             className="bg-white/90 backdrop-blur-xl p-8 rounded-3xl border border-[#3b7ced]/10 shadow-[0_20px_50px_-12px_rgba(0,0,0,0.1)]"
          >
            <div className="flex items-center gap-2 mb-2">
              <div className="p-1 rounded bg-[#3b7ced]/10 text-[#3b7ced]">
                <Rocket size={18} strokeWidth={3} />
              </div>
              <span className="text-xs font-black text-slate-400 uppercase tracking-widest">Expansion Multiple</span>
            </div>
            <div className="text-8xl font-black text-slate-900 tracking-tighter leading-none mb-4 flex items-baseline">
              3.4<span className="text-[#3b7ced] font-medium text-5xl ml-1">x</span>
            </div>
            <div className="flex gap-3">
              <div className="px-3 py-1.5 rounded-lg bg-[#3b7ced]/5 border border-[#3b7ced]/10 text-[10px] text-[#3b7ced] font-black uppercase tracking-wider">
                YoY Growth
              </div>
              <div className="px-3 py-1.5 rounded-lg bg-emerald-500/5 border border-emerald-500/10 text-[10px] text-emerald-600 font-black uppercase tracking-wider">
                +240% Lift
              </div>
            </div>
          </motion.div>
        </motion.div>
        
        {/* Background Blurs inside container */}
        <div className="absolute inset-0 pointer-events-none -z-10">
           <div className="absolute top-1/4 left-1/4 w-3 h-3 bg-[#3b7ced]/20 rounded-full blur-sm" />
           <div className="absolute bottom-1/4 right-1/4 w-4 h-4 bg-cyan-500/20 rounded-full blur-sm" />
           <div className="absolute top-3/4 left-1/3 w-3 h-3 bg-violet-500/20 rounded-full blur-sm" />
        </div>

      </div>
    </div>
  );
}