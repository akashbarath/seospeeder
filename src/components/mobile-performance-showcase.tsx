"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import TextHighlighter from "@/components/fancy/text/text-highlighter";
import { Globe, Search, UserCheck, CheckCircle2, Zap, ShieldCheck, TrendingUp, Monitor, Cpu, Database, CloudLightning, Activity, Server, Layout, Network, BarChart2, Wifi, Globe2, Radio, Clock } from "lucide-react";
import { cn } from "@/lib/utils";
import { Iphone } from "@/components/ui/iphone";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { ScrollArea } from "@/components/ui/scroll-area";
import { AnimatedGroup } from "@/components/ui/animated-group";
import { Label, PolarGrid, PolarRadiusAxis, RadialBar, RadialBarChart } from "recharts";
import { type ChartConfig, ChartContainer } from "@/components/ui/chart";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
}

const perfChartData = [{ label: "score", value: 96, fill: "#0ea5e9" }];
const perfChartConfig = {
   value: { label: "Score" },
   score: { label: "Score", color: "#0ea5e9" },
} satisfies ChartConfig;

export const MobilePerformanceShowcase = () => {
   const wpBlue = "#0ea5e9";
   const [activeTab, setActiveTab] = useState<'summary' | 'metrics' | 'network'>('summary');
   const [direction, setDirection] = useState(0);

   const handleTabChange = (tab: 'summary' | 'metrics' | 'network') => {
      if (tab === activeTab) return;
      const order = ['summary', 'metrics', 'network'];
      setDirection(order.indexOf(tab) > order.indexOf(activeTab) ? 1 : -1);
      setActiveTab(tab);
   };

   const containerRef = React.useRef<HTMLDivElement>(null);
   const phoneRef = React.useRef<HTMLDivElement>(null);

   // No GSAP for phone - use Framer Motion whileInView instead (guaranteed to fire)

   return (
      <div ref={containerRef} className="w-full max-w-7xl mx-auto py-12 md:py-24 px-5 sm:px-8 md:px-10">
         <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-16 items-start lg:items-center">

            {/* LEFT COLUMN: The Tactical Mobile Mockup */}
            <motion.div ref={phoneRef} initial={{ y: 30 }} whileInView={{ y: 0 }} viewport={{ once: true, amount: 0.1 }} transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1] }} className="col-span-12 lg:col-span-5 flex items-center justify-center relative order-2 lg:order-1 w-full">
               {/* External Hardware Shell via Iphone component */}
               <div className="origin-center transform-gpu mx-auto">
                  <Iphone style={{ width: '300px', maxWidth: '100%' }} className="mx-auto group/phone shadow-[0_0_50px_-12px_rgba(0,0,0,0.5)] dark:shadow-[0_0_50px_-12px_rgba(14,165,233,0.25)] rounded-[44px]">
                  {/* Phone Internal UI - Native iOS Aesthetic */}
                   {/* Phone Internal UI - Native iOS Aesthetic */}
                   <div className="flex size-full flex-col bg-[#F5F5F5] dark:bg-[#0a0a0a] overflow-hidden relative font-bricolage rounded-[34px]">
                      
                      {/* Native iOS Status Bar - Pinned to absolute top */}
                      <div className="absolute top-0 left-0 right-0 h-10 px-6 flex justify-between items-center text-[11px] font-bold tracking-tight text-foreground z-[60] bg-transparent">
                         <span className="mt-1">9:41</span>
                         <div className="flex gap-1.5 items-center opacity-90 mt-1">
                            <svg width="14" height="10" viewBox="0 0 16 10" fill="currentColor"><path d="M1 9h2V5h-2v4zm4 0h2V3h-2v6zm4 0h2V1h-2v8zm4 0h2V7h-2v2z" /></svg>
                            <WifiIcon color="currentColor" />
                            <BatteryIcon color="currentColor" />
                         </div>
                      </div>

                      {/* Native iOS Large Navigation Title - Pinned below status bar */}
                      <div className="px-6 pt-12 pb-2 z-50 relative bg-[#F5F5F5]/80 dark:bg-[#0a0a0a]/80 backdrop-blur-xl border-b border-black/[0.03] dark:border-white/[0.03]">
                         <h1 className="text-3xl font-bold tracking-tight text-foreground">
                            {activeTab === 'summary' && 'Diagnostics'}
                            {activeTab === 'metrics' && 'Core Vitals'}
                            {activeTab === 'network' && 'Edge Network'}
                         </h1>
                      </div>

                      {/* Scrolling Native Content */}
                      <ScrollArea className="flex-1 w-full relative z-30" type="scroll">
                         <div className="p-4 pb-32">
                            <AnimatePresence mode="wait" custom={direction}>
                               <motion.div
                                  key={activeTab}
                                  custom={direction}
                                  initial={{ opacity: 0, x: direction > 0 ? 30 : -30, filter: "blur(4px)" }}
                                  animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                                  exit={{ opacity: 0, x: direction > 0 ? -30 : 30, filter: "blur(4px)" }}
                                  transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                               >
                                  {activeTab === 'summary' && (
                                     <div className="space-y-4">
                                        {/* Apple Health Style Metric Ring */}
                                        <Card className="rounded-2xl shadow-sm border-2 border-black/5 dark:border-white/5 bg-card overflow-hidden">
                                           <CardContent className="p-4 flex items-center justify-between">
                                              <div className="space-y-1">
                                                 <div className="flex items-center gap-2 text-muted-foreground pb-1">
                                                    <Zap size={14} style={{ color: wpBlue }} />
                                                    <span className="text-[10px] font-bold uppercase tracking-wide">Performance</span>
                                                 </div>
                                                 <p className="text-[11px] text-muted-foreground font-medium">Core Web Vitals</p>
                                              </div>
                                              <ChartContainer config={perfChartConfig} className="ml-auto aspect-square size-[90px] -mr-1">
                                                 <RadialBarChart data={perfChartData} endAngle={(96 / 100) * 360} innerRadius={30} outerRadius={42} startAngle={0}>
                                                    <PolarGrid className="first:fill-muted last:fill-background" gridType="circle" polarRadius={[34, 28]} radialLines={false} stroke="none" />
                                                    <RadialBar background cornerRadius={10} dataKey="value" />
                                                    <PolarRadiusAxis axisLine={false} tick={false} tickLine={false}>
                                                       <Label
                                                          content={({ viewBox }) => {
                                                             if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                                                                return (
                                                                   <text dominantBaseline="middle" textAnchor="middle" x={viewBox.cx} y={viewBox.cy}>
                                                                      <tspan className="fill-foreground font-bold text-2xl" x={viewBox.cx} y={viewBox.cy}>96</tspan>
                                                                      <tspan className="fill-muted-foreground text-[10px]" x={viewBox.cx} y={(viewBox.cy || 0) + 16}>/100</tspan>
                                                                   </text>
                                                                );
                                                             }
                                                          }}
                                                       />
                                                    </PolarRadiusAxis>
                                                 </RadialBarChart>
                                              </ChartContainer>
                                           </CardContent>
                                        </Card>

                                        {/* Grid 2x2 iOS Metric Cards */}
                                        <div className="grid grid-cols-2 gap-2.5">
                                           <Card className="rounded-2xl shadow-sm border-2 border-black/5 dark:border-white/5 bg-card">
                                              <CardContent className="p-4 flex flex-col justify-between min-h-[110px]">
                                                 <div className="flex items-center gap-2 text-muted-foreground mb-3">
                                                    <ShieldCheck size={16} className="text-emerald-500" />
                                                    <span className="text-[11px] font-bold uppercase tracking-wide">GTmetrix</span>
                                                 </div>
                                                 <div className="flex items-end justify-between mt-auto">
                                                    <span className="text-4xl font-bold tracking-tight text-foreground leading-none">A</span>
                                                    <span className="text-xs text-emerald-500 font-medium pb-1.5">Secure</span>
                                                 </div>
                                              </CardContent>
                                           </Card>

                                           <Card className="rounded-2xl shadow-sm border-2 border-black/5 dark:border-white/5 bg-card">
                                               <CardContent className="p-4 flex flex-col justify-between min-h-[110px]">
                                                 <div className="flex items-center gap-2 text-muted-foreground mb-3">
                                                    <TrendingUp size={16} style={{ color: wpBlue }} />
                                                    <span className="text-[11px] font-bold uppercase tracking-wide">SEO Boost</span>
                                                 </div>
                                                 <div className="flex items-end justify-between mt-auto">
                                                    <span className="text-3xl font-bold tracking-tight text-foreground leading-none">+24<span className="text-sm">%</span></span>
                                                 </div>
                                              </CardContent>
                                           </Card>
                                        </div>

                                        {/* Infrastructure List */}
                                        <Card className="rounded-2xl shadow-sm border-2 border-black/5 dark:border-white/5 overflow-hidden bg-card">
                                           <div className="px-4 py-3 flex items-center justify-between bg-muted/40 border-b border-border/50">
                                              <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Infrastructure</span>
                                              <span className="text-[10px] font-bold text-sky-500 dark:text-sky-400 uppercase tracking-wide">Active</span>
                                           </div>
                                           <CardContent className="p-0 pl-4">
                                              <div className="flex items-center justify-between py-3.5 pr-4">
                                                 <span className="text-sm text-foreground font-medium">Server TTFB</span>
                                                 <span className="text-sm text-muted-foreground">0.2s</span>
                                              </div>
                                              <Separator className="bg-border/50" />
                                              <div className="flex items-center justify-between py-3.5 pr-4">
                                                 <span className="text-sm text-foreground font-medium">Database Queries</span>
                                                 <span className="text-sm text-muted-foreground">-42ms</span>
                                              </div>
                                              <Separator className="bg-border/50" />
                                              <div className="flex items-center justify-between py-3.5 pr-4">
                                                 <span className="text-sm text-foreground font-medium">Asset Payload</span>
                                                 <span className="text-sm text-muted-foreground">-1.2 MB</span>
                                              </div>
                                           </CardContent>
                                        </Card>
                                     </div>
                                  )}

                                  {activeTab === 'metrics' && (
                                     <div className="space-y-4">
                                        <Card className="rounded-2xl shadow-sm border-2 border-black/5 dark:border-white/5 bg-card overflow-hidden">
                                           <CardContent className="p-5 flex flex-col justify-between min-h-[120px]">
                                              <div className="flex items-center justify-between mb-4">
                                                 <div className="flex items-center gap-1.5 text-muted-foreground">
                                                    <Monitor size={14} style={{ color: wpBlue }} />
                                                    <span className="text-xs font-semibold uppercase tracking-wide">LCP</span>
                                                 </div>
                                                 <span className="text-[10px] font-bold text-emerald-500 uppercase tracking-wide">Good</span>
                                              </div>
                                              <div>
                                                 <h2 className="text-4xl font-bold tracking-tight text-foreground leading-none">0.8<span className="text-2xl text-muted-foreground font-medium ml-1">s</span></h2>
                                                 <p className="text-xs text-muted-foreground font-medium pt-2">Largest Contentful Paint</p>
                                              </div>
                                           </CardContent>
                                        </Card>
                                        <div className="grid grid-cols-2 gap-3.5">
                                           <Card className="rounded-2xl shadow-sm border-2 border-black/5 dark:border-white/5 bg-card">
                                              <CardContent className="p-3.5 flex flex-col justify-between min-h-[100px]">
                                                 <div className="flex items-center gap-1.5 text-muted-foreground mb-2">
                                                    <Layout size={14} className="text-indigo-500" />
                                                    <span className="text-xs font-semibold uppercase tracking-wide">CLS</span>
                                                 </div>
                                                 <div className="flex flex-col mt-auto">
                                                    <span className="text-3xl font-bold tracking-tight text-foreground leading-none">0.00</span>
                                                 </div>
                                              </CardContent>
                                           </Card>
                                           <Card className="rounded-2xl shadow-sm border-2 border-black/5 dark:border-white/5 bg-card">
                                              <CardContent className="p-3.5 flex flex-col justify-between min-h-[100px]">
                                                 <div className="flex items-center gap-1.5 text-muted-foreground mb-2">
                                                    <Zap size={14} className="text-amber-500" />
                                                    <span className="text-xs font-semibold uppercase tracking-wide">INP</span>
                                                 </div>
                                                 <div className="flex flex-col mt-auto">
                                                    <span className="text-3xl font-bold tracking-tight text-foreground leading-none">42<span className="text-sm text-muted-foreground ml-0.5">ms</span></span>
                                                 </div>
                                              </CardContent>
                                           </Card>
                                        </div>
                                     </div>
                                  )}

                                  {activeTab === 'network' && (
                                     <div className="space-y-4">
                                        <Card className="rounded-2xl shadow-sm border-2 border-black/5 dark:border-white/5 bg-card overflow-hidden">
                                           <CardContent className="p-5">
                                              <div className="flex items-center justify-between mb-4">
                                                 <div className="flex items-center gap-1.5 text-muted-foreground">
                                                    <Globe2 size={14} style={{ color: wpBlue }} />
                                                    <span className="text-xs font-semibold uppercase tracking-wide">Cloudflare Edge</span>
                                                 </div>
                                              </div>
                                              <div className="flex justify-center py-6 relative">
                                                 <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-28 rounded-full bg-[#0ea5e9]/5 dark:bg-[#0ea5e9]/10 blur-xl pointer-events-none" />
                                                 <div className="relative mx-auto flex size-20 items-center justify-center rounded-full border-2 border-border/60 dark:border-white/15 bg-background shadow-sm dark:shadow-[0_0_15px_rgba(14,165,233,0.1)]">
                                                    {[0, 1, 2].map((i) => (
                                                       <motion.div
                                                          key={i}
                                                          initial={{ opacity: 0, scale: 1 }}
                                                          animate={{ scale: [1, 2.2], opacity: [0, 0.6, 0] }}
                                                          transition={{ duration: 3, repeat: Infinity, delay: i * 1, times: [0, 0.2, 1], ease: "easeOut" }}
                                                          className="absolute inset-0 rounded-full border border-[#0ea5e9]/30 dark:border-[#0ea5e9]/50 z-0 pointer-events-none will-change-transform"
                                                          style={{ transform: "translateZ(0)" }}
                                                       />
                                                    ))}
                                                    <div className="relative z-20">
                                                       <CloudLightning size={30} style={{ color: wpBlue }} />
                                                    </div>
                                                 </div>
                                              </div>
                                           </CardContent>
                                        </Card>
                                        <Card className="rounded-2xl shadow-sm border-2 border-black/5 dark:border-white/5 overflow-hidden bg-card">
                                           <div className="px-4 py-3 flex items-center justify-between bg-muted/40 border-b border-border/50">
                                              <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Protocol Info</span>
                                              <span className="text-[10px] font-bold text-emerald-500 uppercase tracking-wide">Secure</span>
                                           </div>
                                           <CardContent className="p-0 pl-4">
                                              <div className="flex items-center justify-between py-3.5 pr-4">
                                                 <span className="text-sm text-foreground font-medium">Protocol</span>
                                                 <span className="text-sm text-muted-foreground">HTTP/3 (QUIC)</span>
                                              </div>
                                              <Separator className="bg-border/50" />
                                              <div className="flex items-center justify-between py-3.5 pr-4">
                                                 <span className="text-sm text-foreground font-medium">Encryption</span>
                                                 <span className="text-sm text-muted-foreground">TLS 1.3</span>
                                              </div>
                                              <Separator className="bg-border/50" />
                                              <div className="flex items-center justify-between py-3.5 pr-4">
                                                 <span className="text-sm text-foreground font-medium">Cache Status</span>
                                                 <span className="text-sm text-emerald-500 font-medium">HIT</span>
                                              </div>
                                           </CardContent>
                                        </Card>
                                     </div>
                                  )}
                               </motion.div>
                            </AnimatePresence>
                         </div>
                      </ScrollArea>

                      {/* iOS Bottom Tab Bar - Pinned to absolute bottom */}
                       <div className="absolute bottom-0 left-0 right-0 h-[84px] bg-background/80 backdrop-blur-2xl border-t border-black/5 dark:border-white/5 flex items-start pt-3 pb-6 justify-around z-50">
                         <button onClick={() => handleTabChange('summary')} className={`flex flex-col items-center gap-1 group transition-all duration-300 ${activeTab === 'summary' ? 'text-foreground scale-105' : 'text-muted-foreground opacity-60 hover:opacity-100'}`}>
                            <Layout size={24} style={{ color: activeTab === 'summary' ? wpBlue : '' }} />
                            <span className="text-[10px] font-medium" style={{ color: activeTab === 'summary' ? wpBlue : '' }}>Summary</span>
                         </button>
                         <button onClick={() => handleTabChange('metrics')} className={`flex flex-col items-center gap-1 group transition-all duration-300 ${activeTab === 'metrics' ? 'text-foreground scale-105' : 'text-muted-foreground opacity-60 hover:opacity-100'}`}>
                            <BarChart2 size={24} style={{ color: activeTab === 'metrics' ? wpBlue : '' }} />
                            <span className="text-[10px] font-medium" style={{ color: activeTab === 'metrics' ? wpBlue : '' }}>Metrics</span>
                         </button>
                         <button onClick={() => handleTabChange('network')} className={`flex flex-col items-center gap-1 group transition-all duration-300 ${activeTab === 'network' ? 'text-foreground scale-105' : 'text-muted-foreground opacity-60 hover:opacity-100'}`}>
                            <Network size={24} style={{ color: activeTab === 'network' ? wpBlue : '' }} />
                            <span className="text-[10px] font-medium" style={{ color: activeTab === 'network' ? wpBlue : '' }}>Network</span>
                         </button>
                      </div>
                   </div>
               </Iphone>
               </div>

               {/* Deep Ambient Glows */}
               <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-[350px] md:size-[580px] bg-[#0ea5e9]/10 rounded-full blur-[90px] md:blur-[110px] pointer-events-none opacity-50 md:opacity-40 -z-10" />
            </motion.div>

            {/* RIGHT COLUMN: The Performance Analysis Data */}
            <div className="col-span-12 lg:col-span-7 space-y-5 md:space-y-12 order-1 lg:order-2 w-full min-w-0">

               {/* 1. Subtle Metadata */}
               <div className="flex flex-wrap items-center gap-2 sm:gap-4 gsap-fade-up justify-start w-full">
                  <Badge variant="outline" className="px-3 py-1 rounded-full border-slate-200 dark:border-white/10 text-slate-500 font-medium text-[11px] tracking-tight">
                     Case Study // WordPress
                  </Badge>
                  <span className="h-px w-6 bg-slate-200 dark:bg-white/10 hidden sm:block" />
                  <div className="hidden sm:flex items-center gap-1.5 text-slate-400 dark:text-white/20 font-jetbrains text-[9px] uppercase tracking-widest">
                     System ID: 0EA5E9
                  </div>
               </div>

               {/* 2. Editorial Header */}
               <div className="space-y-6">
                  <h2 className="text-[1.75rem] sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 dark:text-white leading-[1.15] font-primary gsap-fade-up text-left w-full">
                     Modern WordPress{' '}
                     <br className="hidden lg:block" />
                     <span className="text-[#0ea5e9]">Performance.</span>
                  </h2>

                  <p className="text-sm sm:text-base md:text-lg text-slate-500 dark:text-neutral-400 leading-relaxed font-normal font-inter gsap-fade-up text-left w-full">
                     Our elite engineers provide a <TextHighlighter highlightColor="rgba(14, 165, 233, 0.15)">surgical-grade speed optimization</TextHighlighter> service that transforms slow WordPress sites into high-performance assets. Achieve <TextHighlighter highlightColor="rgba(14, 165, 233, 0.15)">90+ PageSpeed scores</TextHighlighter>, Grade A GTmetrix status, and <TextHighlighter highlightColor="rgba(14, 165, 233, 0.15)">sub-2s load times</TextHighlighter>—instantly.
                  </p>
               </div>

               {/* 3. Statistics */}
               <div className="pt-6 sm:pt-10 border-t border-slate-200 dark:border-white/5">
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 text-center lg:text-left">
                     {[
                        { label: "TTFB Delta", value: "-84%" },
                        { label: "Asset Sync", value: "-1.2MB" },
                        { label: "GTmetrix", value: "Grade A" },
                        { label: "Result", value: "48Hrs" }
                     ].map((stat, i) => (
                        <div key={i} className="space-y-1 gsap-fade-up">
                           <p className="text-[10px] font-semibold text-slate-400 dark:text-white/20 uppercase tracking-widest">{stat.label}</p>
                           <p className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white tracking-tighter font-primary leading-tight">{stat.value}</p>
                        </div>
                     ))}
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
