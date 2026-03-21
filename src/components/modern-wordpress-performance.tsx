"use client";

import React, { useState, useEffect, useRef } from 'react';
import { 
    Zap, 
    Clock, 
    Search,
    Users,
    Activity,
    Cpu,
    ShieldCheck,
    Monitor,
    Database,
    Globe,
    ArrowRight,
    CheckCircle2,
    TrendingUp,
    Server,
    Layout,
    ArrowUpRight,
    Terminal
} from 'lucide-react';
import { motion, useMotionValue, useSpring, AnimatePresence } from "motion/react";
import { cn } from "@/lib/utils";
import { Card } from "@/components/ui/card";
import { Bar, BarChart, Line, LineChart, ResponsiveContainer, XAxis, YAxis, Tooltip } from "recharts";
import { ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
}

const wpBlue = "#21759B";

// --- Data ---
const performanceData = [
    { label: "TTFB", before: 1.2, after: 0.2 },
    { label: "FCP", before: 2.4, after: 0.6 },
    { label: "LCP", before: 4.8, after: 1.2 },
    { label: "CLS", before: 0.15, after: 0.01 },
];

export const ModernWordPressPerformance = () => {
    const [mounted, setMounted] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        setMounted(true);
    }, []);

    useGSAP(() => {
        if (!mounted) return;

        const cards = gsap.utils.toArray(".wp-feature-card");
        gsap.from(cards, {
            y: 60,
            opacity: 0,
            duration: 1,
            stagger: 0.1,
            ease: "power3.out",
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top 80%",
            }
        });
    }, [mounted]);

    if (!mounted) return <div className="py-24 min-h-[1200px]" />;

    return (
        <section ref={containerRef} className="py-12 md:py-24 overflow-hidden bg-white dark:bg-[#0c0c0e] relative isolate">
            <div className="mx-auto max-w-7xl px-6 relative z-10">
                
                {/* Header: Tactical // IO Analysis */}
                <div className="mb-20 space-y-8">
                   <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-10">
                      <div className="space-y-6 max-w-3xl">
                         <div className="inline-flex items-center gap-2.5 px-3 py-1.5 rounded-full bg-[#21759B]/10 border border-[#21759B]/20 text-[#21759B]">
                            <Activity size={14} className="animate-pulse" />
                            <span className="text-[10px] font-black uppercase tracking-[0.2em]">Tactical // IO Analysis</span>
                         </div>
                         <h2 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tighter text-slate-900 dark:text-white leading-[0.9]">
                            WordPress Accelerated. <br/>
                            <span className="text-[#21759B]">Optimized in 48 Hours.</span>
                         </h2>
                         <p className="text-xl text-slate-500 dark:text-white/40 font-medium max-w-2xl leading-relaxed">
                            Stop losing sales to lag. Our surgical-grade WordPress optimization transforms bloated themes into lightning-fast powerhouses with zero design changes—guaranteed.
                         </p>
                      </div>
                      <div className="flex gap-4">
                         <div className="px-6 py-4 bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-3xl text-center min-w-[140px]">
                            <p className="text-[10px] font-black uppercase text-slate-400 dark:text-white/30 tracking-widest mb-1">Result Goal</p>
                            <p className="text-3xl font-black text-slate-900 dark:text-white">90+</p>
                         </div>
                         <div className="px-6 py-4 bg-emerald-500/10 border border-emerald-500/20 rounded-3xl text-center min-w-[140px]">
                            <p className="text-[10px] font-black uppercase text-emerald-600 dark:text-emerald-500 tracking-widest mb-1">Target</p>
                            <p className="text-3xl font-black text-emerald-600 dark:text-emerald-500">48h</p>
                         </div>
                      </div>
                   </div>
                </div>

                <div className="grid gap-6 sm:grid-cols-6 lg:grid-cols-12">
                    
                    {/* Card 1: Core Performance Transformation (Main Hub) */}
                    <div className="wp-feature-card sm:col-span-12 lg:col-span-8">
                       <PremiumCard className="h-full">
                          <div className="grid md:grid-cols-2 h-full">
                             <div className="p-8 md:p-12 border-r border-slate-200 dark:border-white/10 space-y-10">
                                <Badge icon={Server} text="Infrastructure Sync" color="text-[#21759B]" />
                                <div className="space-y-3">
                                   <div className="flex flex-wrap gap-2 mb-4">
                                      <span className="px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-500 text-[9px] font-black uppercase">GTmetrix A</span>
                                      <span className="px-3 py-1 rounded-full bg-[#21759B]/10 border border-[#21759B]/20 text-[#21759B] text-[9px] font-black uppercase">Node Speed: Max</span>
                                   </div>
                                   <h3 className="text-3xl font-black text-slate-900 dark:text-white tracking-tighter uppercase">Modern WordPress Performance.</h3>
                                   <p className="text-slate-500 dark:text-white/50 text-base leading-relaxed">
                                      Our elite engineers provide a surgical-grade speed optimization service that transforms slow WordPress sites into high-performance assets.
                                   </p>
                                </div>
                                <div className="grid grid-cols-2 gap-6">
                                   <MetricBox label="Server TTFB" value="0.2s" color="text-[#21759B]" subValue="-84% Delta" />
                                   <MetricBox label="Asset Payload" value="-1.2MB" color="text-emerald-500" subValue="Compressed" />
                                </div>
                             </div>
                             <div className="p-8 md:p-12 bg-[#21759B]/[0.02] dark:bg-white/[0.01] flex flex-col justify-center gap-10">
                                {/* Result Terminal HUD */}
                                <div className="bg-slate-900 rounded-3xl p-6 border border-white/10 shadow-2xl relative overflow-hidden group/terminal">
                                   <div className="flex justify-between items-center mb-6 border-b border-white/5 pb-4">
                                      <div className="flex gap-1.5">
                                         <div className="size-2 rounded-full bg-rose-500/30" />
                                         <div className="size-2 rounded-full bg-amber-500/30" />
                                         <div className="size-2 rounded-full bg-emerald-500" />
                                      </div>
                                      <span className="text-[9px] font-bold text-white/30 font-mono tracking-widest uppercase">Live // Node_01</span>
                                   </div>
                                   <div className="space-y-3 font-mono">
                                      <div className="flex items-center justify-between">
                                         <span className="text-[#21759B] text-[10px] font-bold uppercase truncate pr-4">{'>'} cache.vortex.sync</span>
                                         <span className="text-emerald-500 text-[10px] font-black">active</span>
                                      </div>
                                      <div className="flex items-center justify-between">
                                         <span className="text-white/40 text-[10px] font-bold uppercase truncate pr-4">{'>'} g_latency.filter</span>
                                         <span className="text-[#21759B] text-[10px] font-black">optimal</span>
                                      </div>
                                      <div className="flex items-center justify-between mb-6">
                                         <span className="text-white/40 text-[10px] font-bold uppercase truncate pr-4">{'>'} cdn_purge.alpha</span>
                                         <span className="text-white text-[10px] font-black uppercase">verified</span>
                                      </div>
                                      <div className="h-px bg-white/5 w-full my-4" />
                                      <div className="flex items-end justify-between">
                                         <div className="space-y-1">
                                            <p className="text-white/20 text-[8px] font-black uppercase tracking-widest">Optimized Peak</p>
                                            <p className="text-4xl font-black text-white tracking-tighter">96</p>
                                         </div>
                                         <div className="text-right">
                                            <p className="text-emerald-500 text-[10px] font-black uppercase tracking-widest mb-1">Elite Mode</p>
                                            <div className="px-3 py-1 rounded bg-emerald-500/20 text-emerald-500 text-[8px] font-black uppercase border border-emerald-500/20">Google Lighthouse</div>
                                         </div>
                                      </div>
                                   </div>
                                </div>
                                <div className="px-6 py-4 bg-emerald-500/5 border border-emerald-500/10 rounded-2xl flex items-center justify-between">
                                   <div className="flex items-center gap-3">
                                      <ShieldCheck size={18} className="text-emerald-500" />
                                      <span className="text-[10px] font-black text-emerald-600 dark:text-emerald-500 uppercase tracking-widest">Guaranteed 90+ Result Active</span>
                                   </div>
                                   <div className="size-2 rounded-full bg-emerald-500 animate-pulse" />
                                </div>
                             </div>
                          </div>
                       </PremiumCard>
                    </div>

                    {/* Card 2: Strategic Impact (Right Sidebar Top) */}
                    <div className="wp-feature-card sm:col-span-6 lg:col-span-4">
                       <PremiumCard className="h-full">
                          <div className="p-8 md:p-10 space-y-8 h-full flex flex-col">
                             <div className="size-16 rounded-2xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-500 relative">
                                <TrendingUp size={32} />
                                <div className="absolute -top-1 -right-1 size-4 bg-emerald-500 rounded-full border-2 border-white dark:border-black flex items-center justify-center">
                                   <Zap size={8} className="text-white fill-white" />
                                </div>
                             </div>
                             <div className="space-y-3">
                                <h3 className="text-2xl font-black text-slate-900 dark:text-white uppercase tracking-tight">Improved Conversions</h3>
                                <p className="text-slate-500 dark:text-white/40 text-sm leading-relaxed">
                                   Smooth performance removes friction, helping users complete forms, purchases, or sign-ups more easily.
                                </p>
                             </div>
                             <div className="mt-auto pt-8 border-t border-slate-200 dark:border-white/10">
                                <div className="flex items-center justify-between mb-4">
                                   <span className="text-[10px] font-black uppercase tracking-widest text-slate-400 dark:text-white/20">Ranking Boost</span>
                                   <span className="text-emerald-500 font-black text-sm">+24.8%</span>
                                </div>
                                <div className="h-2 w-full bg-slate-100 dark:bg-white/5 rounded-full overflow-hidden">
                                   <motion.div initial={{ width: 0 }} whileInView={{ width: "78%" }} viewport={{ once: true }} transition={{ duration: 1.5, ease: "easeOut" }} className="h-full bg-gradient-to-r from-amber-500 to-emerald-500" />
                                </div>
                             </div>
                          </div>
                       </PremiumCard>
                    </div>

                    {/* Card 3: Search Visibility (Bottom Left) */}
                    <div className="wp-feature-card sm:col-span-6 lg:col-span-5">
                       <PremiumCard className="h-full">
                          <div className="p-8 md:p-10 space-y-8 flex flex-col h-full">
                             <div className="flex items-center gap-4">
                                <div className="size-12 rounded-xl bg-violet-600/10 border border-violet-600/20 flex items-center justify-center text-violet-600">
                                   <Globe size={24} />
                                </div>
                                <div>
                                   <h3 className="text-xl font-black text-slate-900 dark:text-white uppercase tracking-tight">Search Visibility</h3>
                                   <p className="text-[9px] font-black text-slate-400 dark:text-white/30 uppercase tracking-[0.2em]">Signal: Alpha-Optimal</p>
                                </div>
                             </div>
                             <p className="text-sm text-slate-500 dark:text-white/50 leading-relaxed">
                                Google favors faster sites. Our optimization sends powerful speed signals that drive higher organic traffic.
                             </p>
                             <div className="mt-auto grid grid-cols-2 gap-4">
                                <div className="p-4 rounded-2xl bg-violet-600/5 border border-violet-600/10">
                                   <p className="text-[8px] font-bold text-violet-600/60 uppercase tracking-widest mb-1">Index Delta</p>
                                   <p className="text-2xl font-black text-violet-600">+12%</p>
                                </div>
                                <div className="p-4 rounded-2xl bg-emerald-500/5 border border-emerald-500/10">
                                   <p className="text-[8px] font-bold text-emerald-600/60 uppercase tracking-widest mb-1">TTFB Delta</p>
                                   <p className="text-2xl font-black text-emerald-500">-84%</p>
                                </div>
                             </div>
                          </div>
                       </PremiumCard>
                    </div>

                    {/* Card 4: Detailed Audit Metrics (Bottom Center) */}
                    <div className="wp-feature-card sm:col-span-6 lg:col-span-7">
                       <PremiumCard className="h-full">
                          <div className="grid md:grid-cols-2 h-full">
                             <div className="p-8 md:p-10 space-y-6">
                                <Badge icon={Search} text="Node // Audit" color="text-slate-400" />
                                <div className="space-y-3">
                                   <h3 className="text-2xl font-black text-slate-900 dark:text-white uppercase tracking-tight leading-none">Better User Experience</h3>
                                   <p className="text-slate-500 dark:text-white/40 text-xs leading-relaxed">
                                      Smoother scrolling, quicker interactions, and consistent page layouts ensure deep engagement.
                                   </p>
                                </div>
                                <div className="space-y-3">
                                   {[
                                      { l: "Core Web Vitals Matrix", ok: true },
                                      { l: "Security Audit", ok: true },
                                      { l: "Database Optimization", ok: true },
                                   ].map((item, i) => (
                                      <div key={i} className="flex items-center gap-3">
                                         <CheckCircle2 size={12} className="text-emerald-500" />
                                         <span className="text-[10px] font-bold text-slate-500 dark:text-white/40 uppercase tracking-widest">{item.l}</span>
                                      </div>
                                   ))}
                                </div>
                             </div>
                             <div className="p-10 bg-slate-100/30 dark:bg-white/[0.02] flex flex-col justify-center items-center text-center space-y-10 group/viz relative overflow-hidden">
                                {/* Technical Diagnostic Ring */}
                                <div className="relative size-40 flex items-center justify-center">
                                   {/* Outer background ring */}
                                   <div className="absolute inset-0 rounded-full border-[6px] border-slate-200 dark:border-white/5" />
                                   
                                   {/* Rotating scale markers */}
                                   <div className="absolute inset-0 rotate-12 opacity-20">
                                      {[...Array(8)].map((_, i) => (
                                         <div key={i} className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-full" style={{ transform: `rotate(${i * 45}deg)` }}>
                                            <div className="w-full h-2 bg-slate-400 dark:bg-white" />
                                         </div>
                                      ))}
                                   </div>

                                   <svg className="size-full -rotate-90 absolute inset-0">
                                      <motion.circle 
                                         initial={{ strokeDashoffset: 402 }}
                                         whileInView={{ strokeDashoffset: 402 - (402 * 96) / 100 }}
                                         viewport={{ once: true }}
                                         transition={{ duration: 2.5, ease: [0.16, 1, 0.3, 1] }}
                                         strokeWidth="6" strokeDasharray="402" strokeLinecap="round" stroke={wpBlue} fill="transparent" r="64" cx="80" cy="80" 
                                      />
                                   </svg>

                                   {/* Inner HUD Core */}
                                   <div className="relative z-10 flex flex-col items-center">
                                      <div className="flex items-start">
                                         <span className="text-5xl font-black text-slate-900 dark:text-white tracking-tighter leading-none">96</span>
                                         <span className="text-xl font-black text-[#21759B] ml-1 mt-1">%</span>
                                      </div>
                                      <p className="text-[10px] font-black text-[#21759B] uppercase tracking-[0.3em] mt-2 group-hover/viz:tracking-[0.5em] transition-all">Optimal</p>
                                   </div>
                                </div>

                                {/* Payload Status Readout */}
                                <div className="space-y-4 w-full px-4">
                                   <div className="flex items-end justify-between">
                                      <div className="text-left">
                                         <p className="text-[9px] font-black uppercase text-slate-400 dark:text-white/20 tracking-widest mb-1">Payload Sync</p>
                                         <p className="text-2xl font-black text-slate-900 dark:text-white tracking-tighter">-1.2MB</p>
                                      </div>
                                      <div className="text-right">
                                         <div className="px-3 py-1 rounded bg-emerald-500/10 border border-emerald-500/20 text-emerald-500 text-[8px] font-black uppercase tracking-widest">
                                            Synchronized
                                         </div>
                                      </div>
                                   </div>
                                   <div className="h-2 w-full bg-slate-200 dark:bg-white/5 rounded-full overflow-hidden relative p-[2px]">
                                      <motion.div initial={{ width: 0 }} whileInView={{ width: "95%" }} viewport={{ once: true }} transition={{ duration: 2.2, ease: "easeOut" }} className="h-full bg-gradient-to-r from-[#21759B] to-emerald-500 rounded-full shadow-[0_0_10px_rgba(33,117,155,0.3)]" />
                                   </div>
                                </div>
                             </div>
                          </div>
                       </PremiumCard>
                    </div>

                    {/* Card 5: Result Summary (Detailed Bottom Cards) */}
                    <div className="wp-feature-card sm:col-span-6 lg:col-span-3">
                       <PremiumCard className="h-full">
                          <div className="p-8 space-y-6 text-center">
                             <div className="size-16 mx-auto rounded-3xl bg-neutral-900 border border-white/10 flex items-center justify-center text-white shadow-2xl">
                                <span className="text-3xl font-black">A</span>
                             </div>
                             <div className="space-y-1">
                                <p className="text-[10px] font-black text-[#21759B] uppercase tracking-[0.2em]">Platform Grade</p>
                                <h4 className="text-xl font-black text-slate-900 dark:text-white uppercase tracking-tighter">GTmetrix Peak</h4>
                             </div>
                             <div className="h-px bg-slate-200 dark:bg-white/10 w-12 mx-auto" />
                             <p className="text-[10px] font-bold text-slate-500 dark:text-white/40 uppercase tracking-widest leading-relaxed">
                                Verified Grade A across all global testing clusters.
                             </p>
                          </div>
                       </PremiumCard>
                    </div>

                    <div className="wp-feature-card sm:col-span-6 lg:col-span-3">
                       <PremiumCard className="h-full">
                          <div className="p-8 space-y-6 text-center">
                             <div className="size-16 mx-auto rounded-3xl bg-[#21759B]/10 border border-[#21759B]/20 flex items-center justify-center text-[#21759B] shadow-sm">
                                <Clock size={32} />
                             </div>
                             <div className="space-y-1">
                                <p className="text-[10px] font-black text-[#21759B] uppercase tracking-[0.2em]">Deployment Speed</p>
                                <h4 className="text-xl font-black text-slate-900 dark:text-white uppercase tracking-tighter">48Hrs Delivery</h4>
                             </div>
                             <div className="h-px bg-slate-200 dark:bg-white/10 w-12 mx-auto" />
                             <p className="text-[10px] font-bold text-slate-500 dark:text-white/40 uppercase tracking-widest leading-relaxed">
                                Surgically optimized and pushed to production within 48 hours.
                             </p>
                          </div>
                       </PremiumCard>
                    </div>

                    <div className="wp-feature-card sm:col-span-12 lg:col-span-6">
                       <PremiumCard className="h-full group/engage relative overflow-hidden bg-slate-50 dark:bg-[#0c0c0e] rounded-[40px] border-slate-200 dark:border-white/10">
                          {/* Cinematic Background Pulsar - Adaptive */}
                          <div className="absolute inset-0 z-0 opacity-40 dark:opacity-100">
                             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-[600px] bg-[#21759B]/5 dark:bg-[#21759B]/10 rounded-full blur-[120px] opacity-40 group-hover/engage:opacity-60 transition-opacity" />
                             <motion.div animate={{ scale: [1, 1.2, 1], opacity: [0.05, 0.1, 0.05] }} transition={{ duration: 4, repeat: Infinity }} className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(16,185,129,0.1)_0%,transparent_70%)]" />
                          </div>

                          <div className="p-8 md:p-12 flex flex-col md:flex-row items-center justify-between h-full relative z-10 gap-10">
                             <div className="space-y-8 text-center md:text-left">
                                <div className="space-y-3">
                                   <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-500 shadow-[0_0_15px_rgba(16,185,129,0.1)]">
                                      <div className="size-1.5 rounded-full bg-emerald-500 animate-pulse" />
                                      <span className="text-[10px] font-black uppercase tracking-[0.3em]">Live // Verified</span>
                                   </div>
                                   <h3 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white uppercase tracking-tighter leading-none">
                                      Ready for <br/> <span className="text-slate-400 dark:text-slate-500">Viral Traffic</span>
                                   </h3>
                                </div>
                                <div className="pt-2">
                                   <button className="h-16 px-10 bg-[#21759B] text-white hover:bg-[#1a5d7a] dark:bg-white dark:text-black dark:hover:bg-[#f0f0f0] rounded-2xl text-sm font-black uppercase tracking-[0.2em] shadow-[0_20px_40px_-10px_rgba(33,117,155,0.3)] dark:shadow-[0_20px_40px_-10px_rgba(255,255,255,0.1)] transition-all flex items-center gap-4 group/btn">
                                      Start Optimization
                                      <ArrowRight size={18} className="group-hover/btn:translate-x-2 transition-transform" />
                                   </button>
                                </div>
                             </div>

                             <div className="relative">
                                <div className="relative size-32 flex items-center justify-center">
                                   <motion.div 
                                      animate={{ rotate: 360 }}
                                      transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                                      className="absolute inset-0 rounded-full border-2 border-dashed border-emerald-500/10 dark:border-emerald-500/20"
                                   />
                                   <div className="relative z-10 size-24 rounded-full bg-emerald-500/5 dark:bg-emerald-500/10 border border-emerald-500/20 flex flex-col items-center justify-center gap-1 group-hover/engage:scale-110 transition-transform">
                                      <CheckCircle2 size={32} className="text-emerald-600 dark:text-emerald-500" />
                                      <span className="text-[8px] font-black text-emerald-600/60 dark:text-emerald-500/60 uppercase tracking-widest text-center px-4">Surgical<br/>Success</span>
                                   </div>
                                </div>
                                {/* HUD Coordinate Elements */}
                                <div className="absolute -top-4 -right-4 text-[8px] font-mono text-slate-400 dark:text-white/10 uppercase tracking-widest">Node_A12</div>
                                <div className="absolute -bottom-4 -left-4 text-[8px] font-mono text-slate-400 dark:text-white/10 uppercase tracking-widest">Alpha_Cmd</div>
                             </div>
                          </div>
                       </PremiumCard>
                    </div>

                </div>
            </div>
        </section>
    );
}

// --- Specialized Components for Premium Feel ---

function PremiumCard({ children, className }: { children: React.ReactNode; className?: string }) {
    const cardRef = useRef<HTMLDivElement>(null);

    // Interactive Light Shimmer
    const shimmerX = useSpring(0, { stiffness: 250, damping: 50 });
    const shimmerY = useSpring(0, { stiffness: 250, damping: 50 });
    const shimmerOpacity = useMotionValue(0);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!cardRef.current) return;
        const rect = cardRef.current.getBoundingClientRect();
        
        shimmerX.set(e.clientX - rect.left);
        shimmerY.set(e.clientY - rect.top);
        shimmerOpacity.set(1);
    };

    const handleMouseLeave = () => {
        shimmerOpacity.set(0);
    };

    return (
        <div
            ref={cardRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className={cn("group/card relative h-full", className)}
        >
            <Card className="h-full border-[1px] border-slate-200 dark:border-white/10 bg-transparent hover:border-[#21759B]/30 transition-all duration-700 relative isolate overflow-hidden rounded-[40px] shadow-none">
                {/* Advanced Dynamic Reflection */}
                <motion.div 
                    style={{
                        background: `radial-gradient(400px circle at ${shimmerX}px ${shimmerY}px, ${wpBlue}15, transparent 40%)`,
                        opacity: shimmerOpacity
                    }}
                    className="absolute inset-0 pointer-events-none -z-10"
                />

                {/* Glossy Scanline Sweep */}
                <div 
                    className="absolute top-0 bottom-0 w-32 bg-gradient-to-r from-transparent via-white/[0.05] to-transparent skew-x-[-30deg] pointer-events-none -z-10 -left-[100%] group-hover/card:left-[200%] transition-all duration-1000 ease-in-out"
                />

                <div className="relative z-10 h-full">
                    {children}
                </div>
            </Card>
        </div>
    );
}

function MetricBox({ label, value, subValue, color = "text-primary" }: { label: string; value: string; subValue?: string; color?: string }) {
    return (
        <div className="space-y-1">
            <p className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 dark:text-white/20 mb-1">{label}</p>
            <div className="flex items-baseline gap-2">
               <p className={cn("text-3xl font-black tracking-tighter leading-none text-slate-900 dark:text-white")}>{value}</p>
               {subValue && <span className={cn("text-[9px] font-black uppercase tracking-widest", color)}>{subValue}</span>}
            </div>
        </div>
    );
}

function Badge({ icon: Icon, text, color = "text-primary" }: { icon: React.ElementType; text: string; color?: string }) {
    return (
        <div className={cn("inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10")}>
            <Icon className={cn("size-3.5", color)} />
            <span className={cn("text-[10px] font-black uppercase tracking-[0.15em] text-slate-600 dark:text-white/60")}>{text}</span>
        </div>
    );
}
