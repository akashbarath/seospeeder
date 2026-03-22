"use client";

import React, { useState, useEffect, useRef } from 'react';
import { Button } from "@/components/ui/button";
import {
   Zap,
   Clock,
   Search,
   Activity,
   ShieldCheck,
   Globe,
   ArrowRight,
   CheckCircle2,
   TrendingUp,
   Server
} from 'lucide-react';
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { CodeBlock } from "@/components/ui/code-block";
import TextHighlighter from "@/components/fancy/text/text-highlighter";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

const wpBlue = "#0ea5e9";

if (typeof window !== "undefined") {
   gsap.registerPlugin(ScrollTrigger);
}

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
         <div className="mx-auto max-w-7xl px-4 sm:px-6 relative z-10 overflow-hidden">

            {/* Header: Tactical // IO Analysis */}
            <Card className="mb-12 md:mb-20 bg-slate-50/50 dark:bg-transparent border-none sm:border-solid sm:border-2 sm:border-slate-200 sm:dark:border-white/10 shadow-none sm:rounded-3xl overflow-hidden">
               <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 md:gap-10 p-5 sm:p-8 md:p-10 lg:p-12">
                  <CardHeader className="p-0 space-y-4 md:space-y-6 max-w-3xl">
                     <div className="inline-flex w-fit items-center gap-2.5 px-3 py-1.5 rounded-full bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-900 dark:text-white font-jetbrains">
                        <Activity size={14} className="animate-pulse text-sky-500" />
                        <span className="text-[10px] font-bold uppercase tracking-[0.2em]">Hybrid Intelligence Core</span>
                     </div>
                     <CardTitle className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter text-slate-900 dark:text-white leading-[1.1] font-primary">
                        WordPress Accelerated.<br />
                        <span className="text-[#0ea5e9]">Optimized in 48 Hours.</span>
                     </CardTitle>
                     <CardDescription className="text-base sm:text-lg md:text-xl text-slate-500 dark:text-neutral-400 font-medium max-w-2xl leading-relaxed font-inter">
                        <TextHighlighter highlightColor="rgba(14, 165, 233, 0.15)">Expert speed optimisation</TextHighlighter> for WordPress sites of all sizes. From complex <TextHighlighter highlightColor="rgba(14, 165, 233, 0.15)">WooCommerce stores</TextHighlighter> to blogs, we eliminate bottlenecks and supercharge performance.
                     </CardDescription>
                  </CardHeader>

                  <CardContent className="p-0 flex flex-col sm:flex-row w-full lg:w-auto gap-4">
                     <Card className="flex-1 lg:min-w-[160px] bg-white dark:bg-[#0c0c0e] border-2 border-slate-200 dark:border-white/10 shadow-sm rounded-2xl hover:border-slate-900/30 dark:hover:border-white/30 transition-all duration-500 cursor-default">
                        <CardContent className="p-6 text-center flex flex-col justify-center h-full">
                           <p className="text-[10px] font-bold uppercase text-slate-400 dark:text-white/30 tracking-[0.2em] mb-2 font-jetbrains">Result Goal</p>
                           <p className="text-4xl lg:text-5xl font-black text-slate-900 dark:text-white font-primary tracking-tighter">90<span className="text-sky-500">+</span></p>
                        </CardContent>
                     </Card>
                     <Card className="flex-1 lg:min-w-[160px] bg-white dark:bg-[#0c0c0e] border-2 border-slate-200 dark:border-white/10 shadow-sm rounded-2xl hover:border-slate-900/30 dark:hover:border-white/30 transition-all duration-500 cursor-default">
                        <CardContent className="p-6 text-center flex flex-col justify-center h-full">
                           <p className="text-[10px] font-bold uppercase text-slate-400 dark:text-white/30 tracking-[0.2em] mb-2 font-jetbrains">Target</p>
                           <p className="text-4xl lg:text-5xl font-black text-slate-900 dark:text-white font-primary tracking-tighter">48<span className="text-sky-500 text-2xl lg:text-3xl ml-1">h</span></p>
                        </CardContent>
                     </Card>
                  </CardContent>
               </div>
            </Card>

            <div className="grid w-full grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-6 overflow-hidden">

               <div className="wp-feature-card md:col-span-2 lg:col-span-4">
                  <PremiumCard className="h-full">
                     <div className="p-5 sm:p-8 md:p-12 flex flex-col h-full">
                        <div className="flex flex-col gap-8 lg:flex-row lg:gap-16">
                           <div className="space-y-8 flex-1">
                              <Badge icon={Server} text="Infrastructure Sync" color="text-slate-900 dark:text-white" />
                              <div className="space-y-4">
                                 <h3 className="text-3xl font-black text-slate-900 dark:text-white tracking-tighter uppercase font-primary">
                                    Modern WordPress Performance.
                                 </h3>
                                 <p className="text-slate-500 dark:text-white/50 text-base leading-relaxed font-inter font-medium opacity-80">
                                    Our elite engineers provide a <TextHighlighter highlightColor="rgba(14, 165, 233, 0.15)">surgical-grade speed optimization</TextHighlighter> service that transforms slow WordPress sites into <TextHighlighter highlightColor="rgba(14, 165, 233, 0.15)">high-performance assets</TextHighlighter>.
                                 </p>
                              </div>
                              <div className="grid grid-cols-2 gap-8">
                                 <div className="flex flex-col gap-1.5">
                                    <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400 dark:text-white/20">Server TTFB</span>
                                    <span className="font-jetbrains font-semibold text-2xl text-slate-900 dark:text-white">0.2s</span>
                                 </div>
                                 <div className="flex flex-col gap-1.5">
                                    <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400 dark:text-white/20">Asset Payload</span>
                                    <span className="font-jetbrains font-semibold text-2xl text-slate-900 dark:text-white font-black">-1.2MB</span>
                                 </div>
                              </div>
                           </div>

                           <div className="flex-1 flex flex-col justify-center">
                              <CodeBlock className="w-full shadow-xl dark:shadow-2xl border-2 dark:border-white/10" headerTitle={<span className="text-[9px] font-black uppercase tracking-widest text-slate-400 dark:text-white/20">System // Live</span>}>
                                 <div className="space-y-4 font-jetbrains p-1">
                                    <div className="space-y-2">
                                       <div className="flex items-center justify-between">
                                          <span className="text-slate-500 dark:text-white/40 text-[10px] font-bold uppercase truncate pr-4">{'>'} cache.vortex.sync</span>
                                          <span className="text-slate-900 dark:text-white text-[10px] font-black">active</span>
                                       </div>
                                       <div className="flex items-center justify-between">
                                          <span className="text-slate-400 dark:text-white/40 text-[10px] font-bold uppercase truncate pr-4">{'>'} g_latency.filter</span>
                                          <span className="text-slate-900 dark:text-white text-[10px] font-black">optimal</span>
                                       </div>
                                       <div className="flex items-center justify-between">
                                          <span className="text-slate-400 dark:text-white/40 text-[10px] font-bold uppercase truncate pr-4">{'>'} cdn_purge.alpha</span>
                                          <span className="text-slate-900 dark:text-white text-[10px] font-black uppercase">verified</span>
                                       </div>
                                    </div>

                                    <div className="h-px bg-slate-200 dark:bg-white/10 w-full" />

                                    <div className="flex items-end justify-between pt-1">
                                       <div className="space-y-1">
                                          <p className="text-slate-400 dark:text-white/20 text-[8px] font-black uppercase tracking-widest">Optimized Peak</p>
                                          <p className="text-4xl font-black text-slate-900 dark:text-white tracking-tighter">96</p>
                                       </div>
                                       <div className="text-right">
                                          <p className="text-slate-400 dark:text-white/30 text-[10px] font-black uppercase tracking-widest mb-1">Elite Mode</p>
                                          <div className="px-3 py-1 rounded bg-slate-900/10 dark:bg-white/10 text-slate-900 dark:text-white text-[8px] font-black uppercase border border-slate-200 dark:border-white/10">Google Lighthouse</div>
                                       </div>
                                    </div>
                                 </div>
                              </CodeBlock>
                           </div>
                        </div>

                        <div className="mt-8 pt-8 border-t border-slate-200 dark:border-white/10 flex items-center justify-between font-inter">
                           <div className="flex items-center gap-3">
                              <ShieldCheck size={18} className="text-slate-400" />
                              <span className="text-[10px] font-medium text-slate-900 dark:text-white uppercase tracking-widest">Guaranteed 90+ Result Active</span>
                           </div>
                           <div className="size-2 rounded-full bg-slate-400 animate-pulse" />
                        </div>
                     </div>
                  </PremiumCard>
               </div>

               <div className="wp-feature-card md:col-span-2 lg:col-span-2">
                  <PremiumCard className="h-full">
                     <div className="p-6 sm:p-8 md:p-10 space-y-8 h-full flex flex-col">
                        <div className="size-16 rounded-2xl bg-slate-100 dark:bg-white/5 border-2 border-slate-200 dark:border-white/10 flex items-center justify-center text-slate-900 dark:text-white relative">
                           <TrendingUp size={32} />
                           <div className="absolute -top-1 -right-1 size-4 bg-slate-900 dark:bg-white rounded-full border-2 border-slate-200 dark:border-slate-800 flex items-center justify-center">
                              <Zap size={8} className="text-white dark:text-black fill-current" />
                           </div>
                        </div>
                        <div className="space-y-3">
                           <h3 className="text-2xl font-black text-slate-900 dark:text-white uppercase tracking-tight font-primary">Improved Conversions</h3>
                           <p className="text-slate-500 dark:text-white/50 text-base leading-relaxed font-inter font-medium opacity-80">
                              Smooth performance removes friction, helping users complete forms, purchases, or sign-ups more easily.
                           </p>
                        </div>
                        <div className="mt-auto pt-8 border-t border-slate-200 dark:border-white/10">
                           <div className="flex items-center justify-between mb-4">
                              <span className="text-[10px] font-black uppercase tracking-widest text-slate-400 dark:text-white/20">Ranking Boost</span>
                              <span className="text-slate-900 dark:text-white font-black text-sm">+24.8%</span>
                           </div>
                           <div className="h-2 w-full bg-slate-100 dark:bg-white/5 rounded-full overflow-hidden">
                              <motion.div initial={{ width: 0 }} whileInView={{ width: "78%" }} viewport={{ once: true }} transition={{ duration: 1.5, ease: "easeOut" }} className="h-full bg-black dark:bg-white" />
                           </div>
                        </div>
                     </div>
                  </PremiumCard>
               </div>

               <div className="wp-feature-card md:col-span-2 lg:col-span-2">
                  <PremiumCard className="h-full">
                     <div className="p-6 sm:p-8 md:p-10 space-y-8 flex flex-col h-full">
                        <div className="flex items-center gap-4">
                           <div className="size-12 rounded-xl bg-slate-100 dark:bg-white/5 border-2 border-slate-200 dark:border-white/10 flex items-center justify-center text-slate-900 dark:text-white">
                              <Globe size={24} />
                           </div>
                           <div>
                              <h3 className="text-xl font-black text-slate-900 dark:text-white uppercase tracking-tight font-primary">Search Visibility</h3>
                              <p className="text-[9px] font-black text-slate-400 dark:text-white/30 uppercase tracking-[0.2em] font-jetbrains">Signal: Alpha-Optimal</p>
                           </div>
                        </div>
                        <p className="text-slate-500 dark:text-white/50 text-base leading-relaxed font-inter font-medium opacity-80">
                           Google favors faster sites. Our optimization sends powerful speed signals that drive higher organic traffic.
                        </p>
                        <div className="mt-auto grid grid-cols-2 gap-4 font-jetbrains">
                           <div className="p-4 rounded-2xl bg-slate-100 dark:bg-white/5 border-2 border-slate-200 dark:border-white/10">
                              <p className="text-[8px] font-bold text-slate-400 dark:text-white/20 uppercase tracking-widest mb-1">Index Delta</p>
                              <p className="text-2xl font-black text-slate-900 dark:text-white">+12%</p>
                           </div>
                           <div className="p-4 rounded-2xl bg-slate-900/10 dark:bg-white/10 border-2 border-slate-900/10 dark:border-white/20">
                              <p className="text-[8px] font-bold text-slate-400 dark:text-white/30 uppercase tracking-widest mb-1">TTFB Delta</p>
                              <p className="text-2xl font-black text-slate-900 dark:text-white">-84%</p>
                           </div>
                        </div>
                     </div>
                  </PremiumCard>
               </div>

               <div className="wp-feature-card md:col-span-2 lg:col-span-4">
                  <PremiumCard className="h-full">
                     <div className="flex flex-col md:grid md:grid-cols-2 h-full">
                        <div className="p-6 sm:p-8 md:p-10 space-y-6">
                           <Badge icon={Search} text="Node // Audit" color="text-slate-400" />
                           <div className="space-y-3">
                              <h3 className="text-2xl font-black text-slate-900 dark:text-white uppercase tracking-tight leading-none font-primary">Better User Experience</h3>
                              <p className="text-slate-500 dark:text-white/50 text-base leading-relaxed font-inter font-medium opacity-80">
                                 <TextHighlighter highlightColor="rgba(14, 165, 233, 0.15)">Smoother scrolling</TextHighlighter>, quicker interactions, and consistent page layouts ensure <TextHighlighter highlightColor="rgba(14, 165, 233, 0.15)">deep engagement</TextHighlighter>.
                              </p>
                           </div>
                           <div className="space-y-3">
                              {[
                                 { l: "Core Web Vitals Matrix", ok: true },
                                 { l: "Security Audit", ok: true },
                                 { l: "Database Optimization", ok: true },
                              ].map((item, i) => (
                                 <div key={i} className="flex items-center gap-3">
                                    <CheckCircle2 size={12} className="text-slate-400 dark:text-white/20" />
                                    <span className="text-[10px] font-bold text-slate-500 dark:text-white/40 uppercase tracking-widest">{item.l}</span>
                                 </div>
                              ))}
                           </div>
                        </div>
                        <div className="p-6 sm:p-10 bg-slate-100/30 dark:bg-white/[0.02] flex flex-col justify-center items-center text-center space-y-10 group/viz relative overflow-hidden">
                           <div className="relative size-40 flex items-center justify-center">
                              <div className="absolute inset-0 rounded-full border-[6px] border-slate-200 dark:border-white/5" />
                              <div className="absolute inset-0 rotate-12 opacity-60 dark:opacity-20">
                                 {[...Array(8)].map((_, i) => (
                                    <div key={i} className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-full" style={{ transform: `rotate(${i * 45}deg)` }}>
                                       <div className="w-full h-2 bg-slate-900 dark:bg-white" />
                                    </div>
                                 ))}
                              </div>

                              <svg className="size-full -rotate-90 absolute inset-0">
                                 <motion.circle
                                    initial={{ strokeDashoffset: 402 }}
                                    whileInView={{ strokeDashoffset: 402 - (402 * 96) / 100 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 2.5, ease: [0.16, 1, 0.3, 1] }}
                                    strokeWidth="6" strokeDasharray="402" strokeLinecap="round" stroke="#0ea5e9" fill="transparent" r="64" cx="80" cy="80"
                                 />
                              </svg>

                              <div className="relative z-10 flex flex-col items-center">
                                 <div className="flex items-start">
                                    <span className="text-5xl font-black text-slate-900 dark:text-white tracking-tighter leading-none">96</span>
                                    <span className="text-xl font-black text-sky-500 ml-1 mt-1">%</span>
                                 </div>
                                 <p className="text-[10px] font-black text-sky-500 uppercase tracking-[0.3em] mt-2">Optimal</p>
                              </div>
                           </div>
                           <div className="space-y-4 w-full px-4 font-jetbrains">
                              <div className="flex items-end justify-between">
                                 <div className="text-left">
                                    <p className="text-[9px] font-black uppercase text-slate-400 dark:text-white/20 tracking-widest mb-1">Payload Sync</p>
                                    <p className="text-2xl font-black text-slate-900 dark:text-white tracking-tighter">-1.2MB</p>
                                 </div>
                                 <div className="text-right">
                                    <div className="px-3 py-1 rounded bg-emerald-500/10 border-2 border-emerald-500/20 text-emerald-500 text-[8px] font-black uppercase tracking-widest">
                                       Synchronized
                                    </div>
                                 </div>
                              </div>
                              <div className="h-2 w-full bg-slate-200 dark:bg-white/5 rounded-full overflow-hidden relative p-[2px]">
                                 <motion.div initial={{ width: 0 }} whileInView={{ width: "95%" }} viewport={{ once: true }} transition={{ duration: 2.2, ease: "easeOut" }} className="h-full bg-black dark:bg-white rounded-full shadow-[0_0_10px_rgba(255,255,255,0.1)]" />
                              </div>
                           </div>
                        </div>
                     </div>
                  </PremiumCard>
               </div>

               <div className="wp-feature-card md:col-span-2 lg:col-span-2">
                  <PremiumCard className="h-full">
                     <div className="p-6 lg:p-10 flex flex-row items-center lg:justify-center h-full gap-4 sm:gap-8 relative overflow-hidden group/metrics">
                        {/* Segment 1: Grade */}
                        <div className="flex-1 space-y-4 relative z-10 lg:flex lg:flex-col lg:items-center lg:text-center">
                           <div className="relative size-12 rounded-xl bg-neutral-900 border-2 border-white/10 flex items-center justify-center text-white shadow-2xl shrink-0 transition-transform">
                              <BadgePulse />
                              <span className="text-xl font-black font-jetbrains relative z-10">A</span>
                           </div>
                           <div className="space-y-1">
                              <div className="flex items-center lg:justify-center gap-1.5 text-sky-500 mb-0.5">
                                 <TrendingUp size={10} />
                                 <p className="text-[9px] font-black uppercase tracking-[0.2em] font-jetbrains">Peak Verified</p>
                              </div>
                              <h4 className="text-base font-black text-slate-900 dark:text-white uppercase tracking-tighter font-primary leading-tight">GTmetrix Peak</h4>
                              <p className="text-[8px] text-slate-400 dark:text-white/20 font-jetbrains uppercase tracking-widest mt-1">Platform Grade A1</p>
                           </div>
                        </div>

                        {/* Desktop & Mobile Divider (Vertical) */}
                        <div className="w-px bg-slate-200 dark:bg-white/10 self-stretch my-2" />

                        {/* Segment 2: Speed */}
                        <div className="flex-1 space-y-4 relative z-10 lg:flex lg:flex-col lg:items-center lg:text-center">
                           <div className="relative size-12 rounded-xl bg-slate-100 dark:bg-white/5 border-2 border-slate-200 dark:border-white/10 flex items-center justify-center text-slate-900 dark:text-white shadow-sm shrink-0 transition-transform overflow-hidden">
                              <Clock size={24} className="relative z-10" />
                           </div>
                           <div className="space-y-1">
                              <div className="flex items-center lg:justify-center gap-1.5 text-sky-500 mb-0.5">
                                 <p className="text-[9px] font-black uppercase tracking-[0.2em] font-jetbrains">Surgical Deployment</p>
                              </div>
                              <h4 className="text-base font-black text-slate-900 dark:text-white uppercase tracking-tighter font-primary leading-tight">48Hrs Optimization</h4>
                              <p className="text-[8px] text-slate-400 dark:text-white/20 font-jetbrains uppercase tracking-widest mt-1">Node // Speed_Sync</p>
                           </div>
                        </div>
                     </div>
                  </PremiumCard>
               </div>

               <div className="wp-feature-card md:col-span-2 lg:col-span-4">
                  <PremiumCard className="h-full group/engage relative overflow-hidden bg-slate-50 dark:bg-[#0c0c0e] rounded-2xl border-slate-200 dark:border-white/10">
                     {/* Cinematic Background Pulsar - Removed */}


                     <div className="p-6 md:p-10 flex flex-col xl:flex-row items-center justify-between text-center xl:text-left h-full relative z-10 gap-6">
                        <div className="space-y-6 flex flex-col items-center xl:items-start w-full xl:w-auto">
                           <div className="space-y-3">
                              <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-lg bg-emerald-500/10 border-2 border-emerald-500/20 text-emerald-600 dark:text-emerald-500 shadow-[0_0_15px_rgba(16,185,129,0.1)] font-jetbrains">
                                 <div className="size-1.5 rounded-full bg-emerald-500 animate-pulse" />
                                 <span className="text-[10px] font-black uppercase tracking-[0.3em]">Live // Verified</span>
                              </div>
                              <h3 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white uppercase tracking-tighter leading-none font-primary">
                                 Ready for <br className="hidden xl:block" /> <span className="text-slate-400 dark:text-slate-500">Viral Traffic</span>
                              </h3>
                           </div>
                           {/* Button for Desktop Only (xl and above) */}
                           <div className="hidden xl:block pt-2">
                              <Button
                                 size="lg"
                                 className="group/btn h-14 px-8 rounded-xl text-sm font-black uppercase tracking-[0.2em] bg-primary hover:bg-primary/95 text-primary-foreground transition-all duration-300 shadow-[0_0_20px_-10px_rgba(var(--primary),0.5)] hover:shadow-[0_0_30px_-5px_rgba(var(--primary),0.6)] relative overflow-hidden flex items-center gap-4">
                                 <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-primary-foreground/30 to-transparent -translate-x-[150%] skew-x-[-30deg] group-hover/btn:translate-x-[150%] transition-transform duration-1000 ease-out pointer-events-none z-0" />
                                 <span className="relative z-10">Start Optimization</span>
                                 <ArrowRight size={18} className="relative z-10 group-hover/btn:translate-x-2 transition-transform" />
                              </Button>
                           </div>
                        </div>

                        <div className="relative shrink-0 flex items-center justify-center">
                           <div className="relative size-32 flex items-center justify-center">
                              <motion.div
                                 animate={{ rotate: 360 }}
                                 transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                                 className="absolute inset-0 rounded-full border-2 border-dashed border-slate-200 dark:border-white/10"
                              />
                              <div className="relative z-10 size-24 rounded-full bg-slate-100 dark:bg-white/5 border-2 border-slate-200 dark:border-white/10 flex flex-col items-center justify-center gap-1 group-hover/engage:scale-110 transition-transform font-jetbrains">
                                 <CheckCircle2 size={32} className="text-slate-900 dark:text-white" />
                                 <span className="text-[8px] font-black text-slate-400 dark:text-white/20 uppercase tracking-widest text-center px-4">Surgical<br />Success</span>
                              </div>
                           </div>
                           <div className="absolute -top-4 -right-4 text-[8px] font-jetbrains text-slate-400 dark:text-white/10 uppercase tracking-widest">Node_A12</div>
                           <div className="absolute -bottom-4 -left-4 text-[8px] font-jetbrains text-slate-400 dark:text-white/10 uppercase tracking-widest">Alpha_Cmd</div>
                        </div>

                        {/* Button for Mobile Only (below badge) */}
                        <div className="xl:hidden">
                           <Button
                              size="lg"
                              className="group/btn h-14 px-8 rounded-xl text-sm font-black uppercase tracking-[0.2em] bg-primary hover:bg-primary/95 text-primary-foreground transition-all duration-300 shadow-[0_0_20px_-10px_rgba(var(--primary),0.5)] hover:shadow-[0_0_30px_-5px_rgba(var(--primary),0.6)] relative overflow-hidden flex items-center gap-4">
                              <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-primary-foreground/30 to-transparent -translate-x-[150%] skew-x-[-30deg] group-hover/btn:translate-x-[150%] transition-transform duration-1000 ease-out pointer-events-none z-0" />
                              <span className="relative z-10">Start Optimization</span>
                              <ArrowRight size={18} className="relative z-10 group-hover/btn:translate-x-2 transition-transform" />
                           </Button>
                        </div>
                     </div>
                  </PremiumCard>
               </div>

            </div>
         </div>
      </section>
   );
}

function PremiumCard({ children, className }: { children: React.ReactNode; className?: string }) {
   return (
      <div className={cn("group/card relative h-full", className)}>
         <Card className="h-full border-2 border-slate-200 dark:border-white/10 bg-transparent hover:border-slate-900/30 dark:hover:border-white/30 transition-all duration-700 relative isolate overflow-hidden rounded-2xl shadow-none">
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

function BadgePulse() {
   return (
      <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none">
         {[0, 1, 2].map((i) => (
            <motion.div
               key={i}
               initial={{ opacity: 0, scale: 1 }}
               animate={{
                  scale: [1, 2.5],
                  opacity: [0, 0.4, 0]
               }}
               transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: i * 1,
                  times: [0, 0.2, 1],
                  ease: "easeOut"
               }}
               className="absolute inset-0 rounded-full border border-sky-500/30 will-change-transform"
            />
         ))}
      </div>
   );
}

function IconScanner() {
   return (
      <motion.div
         animate={{
            top: ["-20%", "120%"],
            opacity: [0, 1, 0]
         }}
         transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
         }}
         className="absolute left-[-50%] right-[-50%] h-0.5 bg-sky-500/40 blur-[2px] z-30 pointer-events-none"
      />
   );
}

function Badge({ icon: Icon, text, color = "text-primary" }: { icon: React.ElementType; text: string; color?: string }) {
   return (
      <div className={cn("inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-slate-50 dark:bg-white/5 border-2 border-slate-200 dark:border-white/10")}>
         <Icon className={cn("size-3.5", color)} />
         <span className={cn("text-[10px] font-black uppercase tracking-[0.15em] text-slate-600 dark:text-white/60 font-jetbrains")}>{text}</span>
      </div>
   );
}
