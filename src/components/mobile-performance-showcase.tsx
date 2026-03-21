"use client";

import React from "react";
import { motion } from "motion/react";
import { Globe, Search, UserCheck, CheckCircle2, Zap, ShieldCheck, TrendingUp, Monitor, Cpu, Database, CloudLightning, Activity, Server, Layout } from "lucide-react";
import { cn } from "@/lib/utils";

export const MobilePerformanceShowcase = () => {
  const wpBlue = "#21759B";

  return (
    <div className="w-full max-w-[1240px] mx-auto py-24 px-6 md:px-10">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
        
        {/* LEFT COLUMN: The Tactical Mobile Mockup */}
        <div className="col-span-12 lg:col-span-5 flex justify-center relative scale-110 md:scale-100">
          {/* External Hardware Shell with realistic bezel and reflections */}
          <div className="relative w-[310px] h-[640px] bg-[#0c0c0e] rounded-[55px] border-[12px] border-[#1a1a1e] shadow-[0_45px_120px_rgba(0,0,0,0.8)] overflow-hidden transition-all duration-1000 group/phone ring-1 ring-white/10 ring-inset">
            {/* Screen Reflective Overlay */}
            <div className="absolute inset-0 bg-gradient-to-tr from-white/5 via-transparent to-white/5 pointer-events-none z-40" />
            
            {/* Phone Internal UI */}
            <div className="absolute inset-0 bg-white dark:bg-[#08080a] flex flex-col pt-12 overflow-hidden">
               {/* Tactical Status Bar */}
               <div className="h-6 px-8 flex justify-between items-center bg-[#0c0c0e]/90 text-[8px] font-black uppercase tracking-widest text-neutral-400">
                  <div className="flex gap-4">
                     <span className="text-emerald-500">Live // Node_01</span>
                     <span>96% Optimal</span>
                  </div>
                  <div className="flex gap-2 items-center">
                     <Activity size={8} />
                     <WifiIcon color={wpBlue} />
                     <BatteryIcon color={wpBlue} />
                  </div>
               </div>

               {/* Browser Performance Header */}
               <div className="h-14 px-6 border-b border-neutral-100 dark:border-white/5 flex items-center justify-between bg-white dark:bg-[#0c0c0e]/95 backdrop-blur-xl">
                  <div className="flex gap-1.5">
                     <div className="size-2 rounded-full bg-red-400/30" />
                     <div className="size-2 rounded-full bg-amber-400/30" />
                     <div className="size-2 rounded-full bg-emerald-400/30" />
                  </div>
                  <div className="px-4 py-1.5 bg-neutral-100 dark:bg-white/5 rounded-full flex items-center gap-2 border border-neutral-200 dark:border-white/5 shadow-inner">
                     <Globe size={10} className="text-neutral-400" />
                     <span className="text-[8.5px] font-black uppercase tracking-widest text-neutral-400 font-mono italic">speed.seospeeder.io</span>
                  </div>
               </div>

               {/* Scrolling Page Content - DENSE DATA LAYER */}
               <div className="flex-1 px-5 py-4 space-y-6 overflow-y-auto no-scrollbar relative">
                  {/* Grid Background */}
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,theme(colors.slate.300)_1.2px,transparent_1.2px)] dark:bg-[radial-gradient(circle_at_center,theme(colors.white)_1.2px,transparent_1.2px)] bg-[size:20px:20px] opacity-[0.06] pointer-events-none" />
                  
                  {/* Performance Hub Section */}
                  <div className="relative z-10 space-y-4">
                     {/* The PageSpeed Power Ring */}
                     <div className="flex flex-col items-center justify-center p-8 bg-neutral-50 dark:bg-white/[0.02] border border-neutral-100 dark:border-white/5 rounded-[42px] shadow-sm relative group/hub overflow-hidden">
                        <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#21759B] to-transparent opacity-30 shadow-[0_0_10px_rgba(33,117,155,0.5)]" />
                        
                        <div className="relative size-[150px] flex items-center justify-center">
                           <svg className="size-full -rotate-90 absolute inset-0">
                              <circle className="text-slate-100 dark:text-white/5" strokeWidth="10" stroke="currentColor" fill="transparent" r="66" cx="75" cy="75" />
                              <motion.circle 
                                 initial={{ strokeDashoffset: 414 }}
                                 whileInView={{ strokeDashoffset: 414 - (414 * 96) / 100 }}
                                 viewport={{ once: true }}
                                 transition={{ duration: 2.2, ease: [0.16, 1, 0.3, 1] }}
                                 strokeWidth="10" strokeDasharray="414" strokeLinecap="round" stroke={wpBlue} fill="transparent" r="66" cx="75" cy="75" 
                              />
                           </svg>
                           <div className="flex flex-col items-center text-center">
                              <motion.span initial={{ opacity: 0, scale: 0.5 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="text-6xl font-black text-neutral-900 dark:text-white tracking-tighter tabular-nums leading-none">96</motion.span>
                              <div className="mt-1 flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/10 scale-90">
                                 <div className="size-1 rounded-full bg-emerald-500 animate-pulse" />
                                 <span className="text-[9px] font-black uppercase tracking-widest text-emerald-500 leading-none">Elite Mode</span>
                              </div>
                           </div>
                        </div>

                        <div className="mt-4 text-center">
                           <p className="text-[10px] font-black uppercase tracking-[0.5em] text-neutral-400 dark:text-white/30 mb-0.5 ml-1">Google Lighthouse</p>
                           <p className="text-xs font-black text-neutral-900 dark:text-white uppercase tracking-[0.15em]">Core Web Vitals Matrix</p>
                        </div>
                     </div>

                     {/* Tactical Dual Card: GTmetrix + Search Favor */}
                     <div className="grid grid-cols-2 gap-3">
                        <div className="p-5 bg-gradient-to-b from-emerald-500/5 to-emerald-500/[0.02] border border-emerald-500/10 rounded-[30px] flex flex-col justify-between min-h-[120px]">
                           <div className="space-y-1">
                              <p className="text-[8px] font-black uppercase tracking-widest text-emerald-600/60 leading-none">Security Audit</p>
                              <h4 className="text-xs font-black text-neutral-900 dark:text-white uppercase tracking-tight">GTmetrix</h4>
                           </div>
                           <div className="size-12 rounded-full border-4 border-emerald-500/20 flex items-center justify-center bg-white dark:bg-black shadow-lg shadow-emerald-500/5">
                              <span className="text-xl font-black text-emerald-500 leading-none">A</span>
                           </div>
                        </div>
                        <div className="p-5 bg-neutral-50 dark:bg-white/[0.02] border border-neutral-100 dark:border-white/5 rounded-[30px] flex flex-col justify-between min-h-[120px]">
                           <div className="space-y-1">
                              <p className="text-[8px] font-black uppercase tracking-widest text-neutral-400 leading-none">SEO Signal</p>
                              <h4 className="text-xs font-black text-neutral-900 dark:text-white uppercase tracking-tight">Ranking Boost</h4>
                           </div>
                           <div className="size-12 rounded-2xl bg-white dark:bg-black/40 flex items-center justify-center border border-neutral-100 dark:border-white/5">
                              <motion.div animate={{ y: [0, -4, 0] }} transition={{ repeat: Infinity, duration: 2 }} className="flex flex-col items-center">
                                 <TrendingUp size={16} style={{ color: wpBlue }} />
                                 <span className="text-[8px] font-black mt-1" style={{ color: wpBlue }}>+24.8%</span>
                              </motion.div>
                           </div>
                        </div>
                     </div>

                     {/* Integrated Performance Hub: GTmetrix + Infrastructure */}
                     <div className="p-6 bg-neutral-100/50 dark:bg-white/[0.03] border border-neutral-200 dark:border-white/5 rounded-[40px] space-y-6 relative overflow-hidden group shadow-sm">
                        <div className="flex justify-between items-start border-b border-neutral-200 dark:border-white/10 pb-5">
                           <div className="space-y-1">
                              <p className="text-[8px] font-black uppercase tracking-[0.4em] text-neutral-400 dark:text-white/30">Node // Audit</p>
                              <p className="text-[11px] font-black uppercase tracking-widest text-neutral-900 dark:text-white">Infrastructure Sync</p>
                           </div>
                           <div className="flex items-center gap-3 bg-emerald-500/10 px-3 py-1.5 rounded-full border border-emerald-500/20">
                              <span className="text-[10px] font-black text-emerald-600 dark:text-emerald-400">GTmetrix A</span>
                              <div className="size-1.5 rounded-full bg-emerald-500 animate-pulse" />
                           </div>
                        </div>

                        <div className="grid grid-cols-1 gap-4">
                           <div className="flex justify-between items-center px-4 py-3 bg-white dark:bg-white/5 rounded-2xl border border-neutral-200 dark:border-white/5 shadow-sm">
                              <div className="flex items-center gap-3 font-mono">
                                 <Server size={14} className="text-neutral-400" />
                                 <span className="text-[9px] font-black uppercase tracking-widest text-neutral-500 dark:text-white/40 leading-none">Server TTFB</span>
                              </div>
                              <span className="text-xs font-black text-neutral-900 dark:text-white tabular-nums tracking-widest">0.2s</span>
                           </div>
                           <div className="flex justify-between items-center px-4 py-3 bg-white dark:bg-white/5 rounded-2xl border border-neutral-200 dark:border-white/5 shadow-sm">
                              <div className="flex items-center gap-3 font-mono">
                                 <Database size={14} className="text-neutral-400" />
                                 <span className="text-[9px] font-black uppercase tracking-widest text-neutral-500 dark:text-white/40 leading-none">DB Queries</span>
                              </div>
                              <span className="text-xs font-black text-neutral-900 dark:text-white tabular-nums tracking-widest">-42ms</span>
                           </div>
                           <div className="flex justify-between items-center px-4 py-3 bg-white dark:bg-white/5 rounded-2xl border border-neutral-200 dark:border-white/5 shadow-sm">
                              <div className="flex items-center gap-3 font-mono">
                                 <CloudLightning size={14} className="text-neutral-400" />
                                 <span className="text-[9px] font-black uppercase tracking-widest text-neutral-500 dark:text-white/40 leading-none">Asset Payload</span>
                              </div>
                              <span className="text-xs font-black text-neutral-900 dark:text-white tabular-nums tracking-widest">-1.2MB</span>
                           </div>
                        </div>
                     </div>

                     {/* Graph Visualization: Speed Progression */}
                     <div className="p-6 bg-neutral-50 dark:bg-white/[0.02] border border-neutral-100 dark:border-white/5 rounded-[32px] space-y-4">
                        <div className="flex justify-between items-center">
                           <span className="text-[9px] font-black uppercase tracking-widest text-neutral-400">Response Volatility</span>
                           <span className="text-[8px] font-bold text-emerald-500 uppercase tracking-[0.2em] px-2 py-0.5 bg-emerald-500/10 rounded-full">Stabilized</span>
                        </div>
                        <div className="h-16 flex items-end gap-[2px] pt-4">
                           {[...Array(24)].map((_, i) => (
                              <motion.div 
                                 key={i}
                                 initial={{ height: "10%" }}
                                 animate={{ height: `${20 + Math.sin(i * 0.5) * 40 + Math.random() * 40}%` }}
                                 transition={{ duration: 2, repeat: Infinity, repeatType: "mirror", delay: i * 0.05 }}
                                 className="flex-1 rounded-t-[1px]" 
                                 style={{ backgroundColor: i > 12 ? wpBlue : '#cbd5e1', opacity: i > 12 ? 1 : 0.4 }}
                              />
                           ))}
                        </div>
                     </div>

                     {/* Live System Log Stream (Footer) */}
                     <div className="mt-4 p-5 bg-black/[0.03] dark:bg-white/[0.01] rounded-[24px] font-mono border border-dashed border-neutral-300 dark:border-white/10">
                        <div className="flex flex-col gap-2.5">
                           <div className="flex justify-between items-center text-[7.5px] leading-none uppercase">
                              <span className="text-[#21759B] ml-1 opacity-70">&gt; cache.vortex.sync</span>
                              <span className="text-emerald-500 font-bold tracking-widest pr-1">active</span>
                           </div>
                           <div className="flex justify-between items-center text-[7.5px] leading-none uppercase">
                              <span className="text-[#21759B] ml-1 opacity-70">&gt; g_latency.filter</span>
                              <span className="text-emerald-500 font-bold tracking-widest pr-1">optimal</span>
                           </div>
                           <div className="flex justify-between items-center text-[7.5px] leading-none uppercase">
                              <span className="text-[#21759B] ml-1 opacity-70">&gt; cdn_purge.alpha</span>
                              <span className="text-emerald-500 font-bold tracking-widest pr-1">verified</span>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>

               {/* Bottom Interaction Bar */}
               <div className="h-20 border-t border-neutral-100 dark:border-white/5 flex items-center justify-around bg-neutral-50/50 dark:bg-black/30 backdrop-blur-md">
                  <div className="size-11 rounded-2xl border border-neutral-200 dark:border-white/10 flex items-center justify-center bg-white/5 shadow-inner opacity-60 hover:opacity-100 transition-opacity">
                     <Monitor size={16} className="text-neutral-400" />
                  </div>
                  <div className="size-3.5 rounded-full shadow-[0_0_20px_rgba(33,117,155,0.7)] hover:scale-125 transition-transform cursor-pointer" style={{ backgroundColor: wpBlue }} />
                  <div className="size-11 rounded-2xl border border-neutral-200 dark:border-white/10 flex items-center justify-center bg-white/5 shadow-inner opacity-60 hover:opacity-100 transition-opacity">
                     <Cpu size={16} className="text-neutral-400" />
                  </div>
               </div>
            </div>

            {/* Hardware Notch */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-36 h-8 bg-[#1a1a1e] rounded-b-[32px] z-50 flex items-center justify-center gap-3">
               <div className="size-1 rounded-full bg-blue-500/20 shadow-[0_0_8px_rgba(59,130,246,0.3)]" />
               <div className="w-10 h-1 bg-white/10 rounded-full" />
               <div className="size-1 rounded-full bg-blue-500/20 shadow-[0_0_8px_rgba(59,130,246,0.3)]" />
            </div>
          </div>

          {/* Deep Ambient Glows & UI Extensions */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-[650px] bg-[#21759B]/10 rounded-full blur-[130px] pointer-events-none opacity-40 -z-10" />
          
          {/* Diagnostic Decorative Brackets */}
          <div className="absolute -top-12 -left-12 size-40 border-t-2 border-l-2 border-slate-300 dark:border-neutral-800 opacity-20 pointer-events-none" />
          <div className="absolute -bottom-12 -right-12 size-40 border-b-2 border-r-2 border-slate-300 dark:border-neutral-800 opacity-20 pointer-events-none" />
        </div>

        {/* RIGHT COLUMN: The Catchy Modern Content */}
        <div className="col-span-12 lg:col-span-7 space-y-12 pl-0 lg:pl-10">
          <div className="space-y-4">
             <div className="flex flex-wrap items-center gap-4 mb-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20">
                   <div className="size-1.5 rounded-full bg-emerald-500 animate-pulse" />
                   <span className="text-[10px] font-black uppercase tracking-[0.2em] text-emerald-600 dark:text-emerald-400 font-mono">Guaranteed 90+ Result Active</span>
                </div>
                
                {/* Repositioned Tactical Highlights */}
                <div className="flex items-center gap-6 px-4 py-1 rounded-lg bg-neutral-100 dark:bg-white/5 border border-neutral-200 dark:border-white/5 relative overflow-hidden group/highlights">
                   <div className="flex flex-col">
                      <span className="text-[7px] font-black uppercase tracking-[0.3em] text-neutral-400 leading-none mb-1">Tactical // IO</span>
                      <span className="text-[10px] font-black uppercase text-emerald-500 leading-none italic">Node Speed: Max</span>
                   </div>
                   <div className="w-px h-6 bg-neutral-200 dark:bg-white/10" />
                   <div className="flex flex-col">
                      <span className="text-[7px] font-black uppercase tracking-[0.3em] text-neutral-400 leading-none mb-1">Response // Sync</span>
                      <span className="text-[10px] font-black uppercase text-[#21759B] leading-none italic">Payload: -1.2MB</span>
                   </div>
                </div>
             </div>
             
             <h2 className="text-4xl md:text-5xl lg:text-7xl font-black text-neutral-900 dark:text-white uppercase tracking-tighter leading-[0.9]">
               Modern <span style={{ color: wpBlue }}>WordPress</span> Performance.
             </h2>
             <p className="text-lg md:text-xl text-neutral-500 dark:text-white/60 font-medium font-inter leading-relaxed max-w-2xl">
               Our elite engineers provide a surgical-grade speed optimization service that transforms slow WordPress sites into high-performance assets. Achieve 90+ PageSpeed scores, Grade A GTmetrix status, and sub-2s load times—instantly.
             </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
             {/* Benefit 01: Visibility */}
             <div className="p-8 rounded-[40px] bg-neutral-50/50 dark:bg-white/[0.02] border border-neutral-200 dark:border-white/5 space-y-6 hover:bg-white dark:hover:bg-white/[0.04] transition-all group cursor-default shadow-sm hover:shadow-xl">
                <div className="size-14 rounded-2xl bg-white dark:bg-white/5 flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform">
                   <Search size={24} style={{ color: wpBlue }} />
                </div>
                <div className="space-y-2">
                   <h4 className="text-xl font-black text-neutral-900 dark:text-white uppercase tracking-tight leading-none mb-2">Improved Search Visibility</h4>
                   <p className="text-[14px] text-neutral-500 dark:text-white/50 leading-relaxed font-medium">
                     Google favors faster sites. Our performance optimization helps your site send powerful speed signals that drive higher rankings and organic traffic.
                   </p>
                </div>
             </div>

             {/* Benefit 02: UX */}
             <div className="p-8 rounded-[40px] bg-neutral-50/50 dark:bg-white/[0.02] border border-neutral-200 dark:border-white/5 space-y-6 hover:bg-white dark:hover:bg-white/[0.04] transition-all group cursor-default shadow-sm hover:shadow-xl">
                <div className="size-14 rounded-2xl bg-white dark:bg-white/5 flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform">
                   <UserCheck size={24} style={{ color: wpBlue }} />
                </div>
                <div className="space-y-2">
                   <h4 className="text-xl font-black text-neutral-900 dark:text-white uppercase tracking-tight leading-none mb-2">Better User Experience</h4>
                   <p className="text-[14px] text-neutral-500 dark:text-white/50 leading-relaxed font-medium">
                     Smoother scrolling, quicker interactions, and consistent page layouts ensure your visitors stay longer and engage deeper with your content.
                   </p>
                </div>
             </div>
          </div>

          <div className="pt-8 grid grid-cols-2 md:grid-cols-4 gap-8">
             <div className="flex flex-col gap-2">
                <span className="text-[10px] font-black uppercase tracking-[0.3em] text-neutral-400">TTFB Delta</span>
                <span className="text-xl font-black text-neutral-900 dark:text-white leading-none">-84%</span>
             </div>
             <div className="flex flex-col gap-2">
                <span className="text-[10px] font-black uppercase tracking-[0.3em] text-neutral-400">Payload Sync</span>
                <span className="text-xl font-black text-neutral-900 dark:text-white leading-none">-1.2MB</span>
             </div>
             <div className="flex flex-col gap-2">
                <span className="text-[10px] font-black uppercase tracking-[0.3em] text-neutral-400">GTmetrix Grade</span>
                <span className="text-xl font-black text-emerald-500 leading-none">A</span>
             </div>
             <div className="flex flex-col gap-2">
                <span className="text-[10px] font-black uppercase tracking-[0.3em] text-neutral-400">Result Time</span>
                <span className="text-xl font-black text-neutral-900 dark:text-white leading-none">48Hrs</span>
             </div>
          </div>
        </div>

      </div>
    </div>
  );
};

/* Custom Tactical Icons */
const WifiIcon = ({ color }: any) => (
  <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="opacity-60">
    <path d="M12 20h.01" /><path d="M2 8.82a15 15 0 0 1 20 0" /><path d="M5 12.859a10 10 0 0 1 14 0" /><path d="M8.5 16.429a5 5 0 0 1 7 0" />
  </svg>
);

const BatteryIcon = ({ color }: any) => (
  <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="opacity-60">
    <rect width="16" height="10" x="2" y="7" rx="2" ry="2" /><line x1="22" x2="22" y1="11" y2="13" />
  </svg>
);
