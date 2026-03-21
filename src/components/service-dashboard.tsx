"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Zap,
  CheckCircle2,
  Activity,
  TrendingUp,
  Globe,
  Timer,
  Layout,
  MousePointer,
  ChevronRight,
  Monitor,
  Bell,
  Bot,
  ShoppingBag,
  Target,
  ArrowUpRight,
  ShieldCheck,
  BarChart3,
  FileText,
  Gauge,
  Database,
  Cpu,
  Layers,
  Network,
  Terminal,
  Server,
  Code2,
  CreditCard,
  Rocket,
  ArrowRight,
  Plus,
  ArrowDownRight,
  Coins,
  History,
  Trophy,
  Camera,
  UserCheck,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { SERVICES } from "@/config/services";

const MENU_ITEMS = [
  { id: "analytics", label: "Analytics", icon: BarChart3 },
  { id: "performance", label: "Performance", icon: Zap },
  { id: "seo_health", label: "SEO Health", icon: ShieldCheck, badge: "100%" },
  { id: "traffic", label: "Traffic", icon: TrendingUp },
  { id: "reports", label: "Reports", icon: FileText, badge: "New" },
  { id: "speed_metrics", label: "Speed Metrics", icon: Gauge },
];

export default function ServiceDashboard({ slug }: { slug: string }) {
  const service = SERVICES.find((s) => s.slug === slug);
  const isMagento = slug === "magento";
  const isShopify = slug === "shopify";
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  if (isMagento) {
    return <MagentoDashboard slug={slug} service={service} />;
  }

  if (isShopify) {
    return <ShopifyDashboard slug={slug} service={service} />;
  }

  if (slug === "wordpress") {
    return <WordPressDashboard slug={slug} service={service} />;
  }

  return <StandardDashboard slug={slug} service={service} />;
}




/* --- MAGENTO TACTICAL INTELLIGENCE HUB --- */
function MagentoDashboard({ slug, service }: any) {
  return (
    <div className="flex items-center justify-center w-full antialiased p-0 sm:p-2 lg:p-4">
      {/* Tactical Hub Frame */}
      <div className="w-full max-w-[1240px] min-h-[750px] bg-white dark:bg-[#0c0c0e] text-neutral-500 dark:text-[#a1a1aa] relative overflow-hidden rounded-[40px] border border-neutral-200 dark:border-white/5 shadow-2xl flex flex-col font-mono transition-colors duration-500">
        
        {/* Background Grid Pattern - Static */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,currentColor_1px,transparent_1px),linear-gradient(to_bottom,currentColor_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-[0.03] dark:opacity-[0.1]" />
        
        {/* Top Operational Status Bar */}
        <div className="h-20 border-b border-neutral-200 dark:border-white/5 flex items-center justify-between px-10 relative z-20">
           <div className="flex items-center gap-10">
              <div className="flex items-center gap-4">
                 <div className="size-10 bg-[#F06427] rounded-full flex items-center justify-center shadow-lg">
                    <Database size={20} className="text-white" />
                 </div>
                 <div className="flex flex-col">
                    <span className="text-sm font-black text-neutral-900 dark:text-white tracking-widest uppercase mb-0.5">Magento Intelligence</span>
                    <span className="text-[10px] text-[#F06427] font-bold uppercase tracking-[0.3em]">Precision Node 01 // Active</span>
                 </div>
              </div>
              
              <div className="h-8 w-px bg-neutral-200 dark:bg-white/5" />

              <div className="hidden xl:flex items-center gap-6 text-neutral-500 dark:text-neutral-400">
                 {["Network", "Database", "Security", "Scale"].map(t => (
                   <div key={t} className="flex flex-col">
                      <span className="text-[9px] uppercase font-bold opacity-40 dark:opacity-60 tracking-[0.2em] leading-none mb-1">{t}</span>
                      <span className="text-[11px] font-black text-neutral-900 dark:text-white/80 uppercase">Status: <span className="text-emerald-500">Nominal</span></span>
                   </div>
                 ))}
              </div>
           </div>

           <div className="flex items-center gap-6">
              <div className="text-right hidden sm:flex flex-col justify-center">
                 <span className="text-[9px] font-bold text-neutral-400 dark:text-white/40 uppercase tracking-widest mb-0.5 leading-none">Latency Offset</span>
                 <span className="text-sm font-black text-[#F06427] tracking-tighter leading-none">0.08ms</span>
              </div>
              <div className="size-10 rounded-xl border border-neutral-200 dark:border-white/5 flex items-center justify-center text-neutral-500 dark:text-white/80 hover:bg-neutral-100 dark:hover:bg-white/5 cursor-pointer transition-all">
                 <Terminal size={18} />
              </div>
           </div>
        </div>

        <div className="flex-1 p-10 grid grid-cols-12 gap-10 relative z-20 overflow-y-auto custom-scrollbar">
           
           {/* LEFT COLUMN: Infrastructure Clusters */}
           <div className="col-span-12 lg:col-span-3 space-y-10">
              <div className="space-y-2">
                 <p className="text-[10px] uppercase font-bold text-neutral-400 dark:text-white/40 tracking-[0.4em]">Section // 01</p>
                 <h2 className="text-xl font-black text-neutral-900 dark:text-white uppercase tracking-tighter">Diagnostic Clusters</h2>
              </div>
              
              <div className="space-y-6">
                 <MagentoTechnicalCard label="Query Load" value="4ms" sub="MySQL Hub" icon={Database} perc={12} />
                 <MagentoTechnicalCard label="CPU Affinity" value="1.2%" sub="Optimized" icon={Cpu} perc={6} />
                 <MagentoTechnicalCard label="IOPS Delta" value="Elite" sub="NVMe Raid" icon={Layers} perc={100} />
              </div>

              <div className="p-8 rounded-[32px] border border-neutral-200 dark:border-white/5 bg-neutral-100/30 dark:bg-white/[0.01] space-y-6 shadow-sm group relative overflow-hidden">
                 <div className="flex justify-between items-start relative z-10">
                    <div className="space-y-1">
                       <p className="text-[9px] uppercase font-black text-[#F06427] tracking-[0.2em] mb-1 leading-none">Topology</p>
                       <p className="text-sm uppercase font-black text-neutral-900 dark:text-white tracking-widest leading-none">Core Scalability</p>
                    </div>
                    <Server size={20} className="text-[#F06427]" />
                 </div>
                 
                 {/* Structural Frequency Graph */}
                 <div className="flex items-end justify-between h-20 w-full relative z-10 py-2">
                    <div className="absolute top-1/2 left-0 w-full h-[1px] bg-neutral-200 dark:bg-white/10 pointer-events-none" />
                    {[0.6, 0.4, 0.8, 0.5, 0.9, 0.7, 0.4, 0.6, 0.8, 0.5, 0.9, 0.4, 0.7, 0.5, 0.8, 0.6, 0.3, 0.7, 0.5, 0.8, 0.4, 0.9, 0.6, 0.5, 0.8, 0.7, 0.4, 0.6, 0.9, 0.5, 0.7, 0.6].map((h, i) => (
                       <motion.div 
                          key={i} 
                          initial={{ height: "10%" }}
                          animate={{ height: [`${h * 80}%`, `${(h + 0.2) * 80}%`, `${h * 80}%`] }}
                          transition={{ 
                             duration: 2, 
                             repeat: Infinity, 
                             delay: i * 0.05,
                             ease: "easeInOut" 
                          }}
                          className={cn(
                             "w-[2px] rounded-[1px] relative z-10 transition-colors",
                             i % 6 === 0 
                                ? "bg-[#F06427] shadow-[0_0_12px_rgba(240,100,39,0.3)]" 
                                : "bg-neutral-300 dark:bg-white/10 dark:opacity-20 opacity-40 mix-blend-multiply dark:mix-blend-lighten"
                          )}
                       />
                    ))}
                 </div>

                 <div className="flex justify-between items-center relative z-10 pt-4 border-t border-neutral-200 dark:border-white/5">
                    <span className="text-[9px] font-black text-emerald-500 uppercase tracking-widest flex items-center gap-2">
                       <span className="size-1.5 rounded-[1px] bg-emerald-500 animate-pulse shadow-[0_0_8px_rgba(16,185,129,0.4)]" />
                       Nominal State
                    </span>
                    <span className="text-[9px] uppercase font-black text-neutral-400 dark:text-white/30 tracking-[0.2em]">Net // <span className="text-neutral-900 dark:text-white">Active</span></span>
                 </div>
              </div>
           </div>

           {/* CENTER COLUMN: The Architectural Monolith */}
           <div className="col-span-12 lg:col-span-6 flex flex-col items-center justify-center relative px-10">
              
               <div className="relative z-10 w-full max-w-[480px] text-center space-y-4 font-sans mb-12">
                  <h1 className="text-3xl font-black text-neutral-900 dark:text-white uppercase tracking-tighter leading-[0.85] px-4">Magento Optimisation Hub</h1>
                  <div className="flex items-center justify-center gap-6">
                     <div className="h-px w-8 bg-neutral-200 dark:bg-white/10" />
                     <p className="text-[10px] text-neutral-500 dark:text-white/60 font-black leading-relaxed uppercase tracking-[0.25em] whitespace-nowrap">Precision Architectural Stack</p>
                     <div className="h-px w-8 bg-neutral-200 dark:bg-white/10" />
                  </div>
               </div>

               <div className="relative z-10 text-center mb-10 group">
                  <div className="w-[260px] h-[320px] bg-white dark:bg-[#0c0c0e] border border-neutral-200 dark:border-white/10 rounded-[40px] flex flex-col items-center justify-between p-10 relative overflow-hidden shadow-2xl transition-all duration-700">
                     
                     <div className="absolute inset-3 border border-neutral-100 dark:border-white/5 rounded-[32px] pointer-events-none" />
                     <div className="absolute top-0 left-1/2 -translate-x-1/2 w-10 h-[1px] bg-neutral-200 dark:bg-white/10" />
                     <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-10 h-[1px] bg-neutral-200 dark:bg-white/10" />
                     <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[1px] h-10 bg-neutral-200 dark:bg-white/10" />
                     <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[1px] h-10 bg-neutral-200 dark:bg-white/10" />

                     <div className="relative flex flex-col items-center gap-1">
                        <span className="text-[10px] font-black text-neutral-400 dark:text-white/40 uppercase tracking-[0.5em] mb-4 leading-none indent-[0.5em]">Global score</span>
                        <div className="relative">
                           <span className="text-9xl font-black text-neutral-900 dark:text-white tracking-[-0.08em] leading-none mb-2">99</span>
                           <span className="absolute -top-2 -right-6 text-2xl font-black text-[#F06427]">+</span>
                        </div>
                     </div>

                     <div className="flex flex-col items-center relative z-20 mt-2">
                        <div className="px-5 py-2 bg-[#F06427] dark:bg-[#F06427] rounded-full shadow-lg shadow-[#F06427]/20 transition-transform group-hover:scale-105 duration-500">
                           <span className="text-[11px] font-black text-white uppercase tracking-[0.2em] whitespace-nowrap">Enterprise Elite</span>
                        </div>
                        <div className="flex gap-1.5 mt-6 pb-2">
                           {[...Array(5)].map((_, i) => (
                              <div key={i} className="size-1.5 rounded-full bg-[#F06427] shadow-sm shadow-[#F06427]/20" />
                           ))}
                        </div>
                     </div>

                     <div className="absolute bottom-8 right-8 flex flex-col items-end gap-1 opacity-20">
                        <div className="h-[1px] w-6 bg-neutral-500 dark:bg-white" />
                        <div className="h-[1px] w-3 bg-neutral-500 dark:bg-white" />
                     </div>
                  </div>
               </div>

              <div className="mt-16 w-full max-w-[500px] grid grid-cols-3 gap-10 relative z-10">
                 <MagentoMetricBox label="TTFB" value="42ms" status="Elite" />
                 <MagentoMetricBox label="DB Delay" value="0.01ms" status="Nominal" />
                 <MagentoMetricBox label="API Lock" value="0.00" status="Clear" />
              </div>
           </div>

           {/* RIGHT COLUMN: Operation Matrix */}
           <div className="col-span-12 lg:col-span-3 space-y-10">
              <div className="space-y-2 text-right">
                 <p className="text-[10px] uppercase font-bold text-neutral-400 dark:text-white/40 tracking-[0.4em]">Section // 02</p>
                 <h2 className="text-xl font-black text-neutral-900 dark:text-white uppercase tracking-tighter">Operation Matrix</h2>
              </div>

              <div className="space-y-4">
                 <MagentoActionRow label="Edge Caching" value="Enabled" icon={Server} />
                 <MagentoActionRow label="API Middleware" value="Optimized" icon={Layers} />
                 <MagentoActionRow label="Memory Shift" value="Active" icon={Cpu} />
                 <MagentoActionRow label="SSL Profiler" value="Handled" icon={ShieldCheck} />
                 <MagentoActionRow label="Core Profiling" value="Synchronized" icon={Code2} />
              </div>

              <div className="mt-auto p-8 rounded-3xl border border-neutral-200 dark:border-white/5 bg-neutral-100/30 dark:bg-white/[0.01] group relative overflow-hidden flex flex-col justify-between min-h-[160px]">
                 <div className="flex justify-between items-start mb-6 relative z-10">
                    <div className="space-y-1">
                       <p className="text-[10px] font-black text-[#F06427] uppercase tracking-[0.2em] leading-none mb-1">Global infrastructure</p>
                       <p className="text-sm font-black text-neutral-900 dark:text-white uppercase tracking-widest leading-none">Security Active</p>
                    </div>
                    <ShieldCheck size={20} className="text-[#F06427]" />
                 </div>
                 <div className="space-y-4 relative z-10">
                    <div className="flex justify-between items-end">
                       <span className="text-[11px] text-neutral-400 dark:text-white/40 uppercase font-black tracking-widest leading-none">Status // Sync</span>
                       <span className="text-xl font-black text-neutral-900 dark:text-white leading-none">100%</span>
                    </div>
                    <div className="h-1 w-full bg-neutral-200 dark:bg-white/10 rounded-full overflow-hidden">
                       <div className="h-full bg-[#F06427] w-full" />
                    </div>
                 </div>
              </div>
           </div>
        </div>
      </div>
    </div>
  );
}

const MagentoTechnicalCard = ({ label, value, sub, icon: Icon, perc }: any) => (
  <div className="group space-y-3">
     <div className="flex justify-between items-end">
        <div className="flex items-center gap-4">
           <div className="size-9 rounded-xl bg-neutral-100 dark:bg-white/5 flex items-center justify-center text-[#F06427] border border-neutral-200 dark:border-white/5 group-hover:bg-[#F06427] group-hover:text-white transition-all duration-500 shadow-sm">
              <Icon size={18} />
           </div>
           <div>
              <p className="text-[10px] font-black text-neutral-900 dark:text-white uppercase tracking-widest leading-none mb-1.5">{label}</p>
              <p className="text-[9px] text-neutral-400 dark:text-white/30 lowercase tracking-tighter leading-none font-medium">{sub}</p>
           </div>
        </div>
        <span className="text-sm font-black text-neutral-900 dark:text-white tracking-widest">{value}</span>
     </div>
     <div className="h-[2px] w-full bg-neutral-100 dark:bg-white/[0.05] rounded-full overflow-hidden">
        <div style={{ width: `${perc}%` }} className="h-full bg-[#F06427]" />
     </div>
  </div>
);

const MagentoMetricBox = ({ label, value, status }: any) => (
  <div className="p-6 rounded-[32px] border border-neutral-200 dark:border-white/5 bg-neutral-100/30 dark:bg-white/[0.01] text-center space-y-1 relative overflow-hidden transition-all hover:bg-white dark:hover:bg-white/[0.03] shadow-sm">
     <p className="text-[10px] font-black text-neutral-400 dark:text-white/30 uppercase tracking-[0.2em] mb-2 leading-none">{label}</p>
     <p className="text-2xl font-black text-neutral-900 dark:text-white tracking-tighter leading-none">{value}</p>
     <div className="pt-2 flex items-center justify-center gap-2">
        <div className="size-1 rounded-full bg-emerald-500" />
        <span className="text-[9px] font-black text-emerald-500 uppercase tracking-widest leading-none">{status}</span>
     </div>
  </div>
);

const MagentoActionRow = ({ label, value, icon: Icon }: any) => (
  <div className="flex items-center justify-between p-4 rounded-2xl border border-neutral-100 dark:border-white/[0.02] hover:bg-neutral-100/50 dark:hover:bg-white/[0.03] transition-all cursor-default shadow-sm text-neutral-400 dark:text-white/50">
     <div className="flex items-center gap-4">
        <Icon size={14} className="text-neutral-300 dark:text-neutral-500" />
        <span className="text-[10px] font-bold uppercase tracking-[0.1em]">{label}</span>
     </div>
     <span className="text-[11px] font-black text-neutral-900 dark:text-white uppercase tracking-widest">{value}</span>
  </div>
);


/* --- SHOPIFY TACTICAL MERCHANT HUB --- */
function ShopifyDashboard({ slug, service }: any) {
  const shopifyGreen = "#95BF47";
  
  return (
    <div className="flex items-center justify-center w-full antialiased p-0 sm:p-2 lg:p-4 font-mono">
      {/* Tactical Hub Frame */}
      <div className="w-full max-w-[1240px] min-h-[800px] bg-white dark:bg-[#0c0c0e] text-neutral-500 dark:text-[#a1a1aa] relative overflow-hidden rounded-[40px] border border-neutral-200 dark:border-white/5 shadow-2xl flex flex-col transition-colors duration-500">
        
        {/* Background Grid Pattern - Static */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,currentColor_1px,transparent_1px),linear-gradient(to_bottom,currentColor_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-[0.03] dark:opacity-[0.1]" />
        
        {/* Top Operational Status Bar */}
        <div className="h-20 border-b border-neutral-200 dark:border-white/5 flex items-center justify-between px-10 relative z-20 bg-white/50 dark:bg-black/20 backdrop-blur-md">
           <div className="flex items-center gap-10">
              <div className="flex items-center gap-4">
                 <div className="size-10 rounded-full flex items-center justify-center shadow-lg" style={{ backgroundColor: shopifyGreen }}>
                    <Rocket size={20} className="text-white" />
                 </div>
                 <div className="flex flex-col">
                    <span className="text-sm font-black text-neutral-900 dark:text-white tracking-widest uppercase mb-0.5">Shopify Precision</span>
                    <span className="text-[10px] font-bold uppercase tracking-[0.3em]" style={{ color: shopifyGreen }}>Merchant Node 01 // Online</span>
                 </div>
              </div>
              
              <div className="h-8 w-px bg-neutral-200 dark:bg-white/5" />

              <div className="hidden xl:flex items-center gap-8">
                 {["Theme", "Checkout", "Inventory"].map(t => (
                   <div key={t} className="flex flex-col">
                      <span className="text-[9px] uppercase font-bold opacity-40 dark:opacity-60 tracking-[0.2em] leading-none mb-1">{t}</span>
                      <span className="text-[11px] font-black text-neutral-900 dark:text-white/80 uppercase">V-Sync: <span style={{ color: shopifyGreen }}>Nominal</span></span>
                   </div>
                 ))}
              </div>
           </div>

           <div className="flex items-center gap-6">
              <div className="flex items-center gap-3 px-4 py-2 bg-neutral-100 dark:bg-white/5 rounded-xl border border-neutral-200 dark:border-white/5">
                 <div className="size-2 rounded-full animate-pulse" style={{ backgroundColor: shopifyGreen }} />
                 <span className="text-[10px] font-black text-neutral-900 dark:text-white uppercase tracking-widest">Global CDN: Pulse</span>
              </div>
              <div className="size-10 rounded-xl border border-neutral-200 dark:border-white/5 flex items-center justify-center text-neutral-500 dark:text-white/80 hover:bg-neutral-100 dark:hover:bg-white/5 cursor-pointer transition-all">
                 <Terminal size={18} />
              </div>
           </div>
        </div>

        <div className="flex-1 p-10 relative z-20 flex flex-col gap-10 overflow-y-auto custom-scrollbar">
           
           {/* Top Row: Dual Specialized Modules */}
           <div className="grid grid-cols-12 gap-10">
              <div className="col-span-12 lg:col-span-4 space-y-6">
                 <div className="space-y-1">
                    <p className="text-[10px] uppercase font-bold text-neutral-400 dark:text-white/40 tracking-[0.4em]">Sector // DIAGNOSTIC</p>
                    <h2 className="text-xl font-black text-neutral-900 dark:text-white uppercase tracking-tighter">Cluster Analysis</h2>
                 </div>
                 <div className="space-y-4">
                    <ShopifyTacticalCard label="Liquid Render" value="12ms" sub="Theme Engine" icon={Zap} perc={24} color={shopifyGreen} />
                    <ShopifyTacticalCard label="Storefront API" value="Elite" sub="Payload Delta" icon={Database} perc={8} color={shopifyGreen} />
                    <ShopifyTacticalCard label="Asset Throughput" value="100%" sub="Global Edge" icon={Layers} perc={100} color={shopifyGreen} />
                 </div>
              </div>

              <div className="col-span-12 lg:col-span-8 bg-neutral-50/50 dark:bg-white/[0.01] border border-neutral-200 dark:border-white/5 rounded-[40px] p-8 relative overflow-hidden flex flex-col justify-center">
                 <div className="absolute top-0 right-0 p-8">
                    <span className="text-[10px] font-black text-neutral-400 dark:text-white/20 uppercase tracking-[0.5em]">Architecture // View</span>
                 </div>
                 <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
                    <div className="col-span-1 border-r border-neutral-200 dark:border-white/10 pr-8 space-y-6">
                       <ShopifyTacticalMetric label="LCP" value="0.8s" status="Passing" color={shopifyGreen} />
                       <ShopifyTacticalMetric label="CLS" value="0.01" status="Elite" color={shopifyGreen} />
                    </div>
                    <div className="col-span-1 flex flex-col items-center justify-center gap-6 relative py-10">
                       <div className="absolute inset-0 flex items-center justify-center opacity-10">
                          <div className="size-40 rounded-full border border-dashed border-neutral-500 animate-[spin_10s_linear_infinite]" />
                          <div className="absolute size-56 rounded-full border border-dashed border-neutral-500 animate-[spin_15s_linear_infinite_reverse]" />
                       </div>
                       <div className="relative flex flex-col items-center">
                          <span className="text-[9px] font-black text-neutral-400 dark:text-white/40 uppercase tracking-[0.4em] mb-2 leading-none">Global Index</span>
                           <span className="text-8xl font-black text-neutral-900 dark:text-white tracking-tighter leading-none relative">
                              99
                              <span className="text-3xl absolute -top-1 -right-6 font-black" style={{ color: shopifyGreen }}>+</span>
                           </span>
                          <div className="mt-4 px-4 py-1.5 rounded-full border border-emerald-500/20 bg-emerald-500/10 flex items-center gap-2">
                             <div className="size-1.5 rounded-full bg-emerald-500" />
                             <span className="text-[10px] font-black text-emerald-500 uppercase tracking-widest">Enterprise Optimized</span>
                          </div>
                       </div>
                    </div>
                    <div className="col-span-1 border-l border-neutral-200 dark:border-white/10 pl-8 space-y-6">
                       <ShopifyTacticalMetric label="INP" value="12ms" status="Golden" color={shopifyGreen} />
                       <ShopifyTacticalMetric label="SEO" value="100%" status="Handled" color={shopifyGreen} />
                    </div>
                 </div>
              </div>
           </div>

           {/* Bottom Row: Strategy & Operation Matrix */}
           <div className="grid grid-cols-12 gap-10 flex-1">
              <div className="col-span-12 lg:col-span-3 space-y-4">
                 <div className="p-8 rounded-[32px] border border-neutral-200 dark:border-white/5 bg-neutral-100/30 dark:bg-white/[0.01] space-y-4 overflow-hidden relative group">
                    <div className="flex justify-between items-start relative z-10">
                       <div className="space-y-1">
                          <p className="text-[9px] font-black uppercase tracking-[0.2em] mb-1" style={{ color: shopifyGreen }}>ROI Engine</p>
                          <p className="text-sm font-black text-neutral-900 dark:text-white uppercase tracking-widest leading-none">Yield Monitor</p>
                       </div>
                       <Target size={20} style={{ color: shopifyGreen }} />
                    </div>
                     <div className="h-24 flex items-end justify-between gap-[1px] relative z-10 px-1">
                        {[...Array(48)].map((_, i) => (
                           <motion.div 
                              key={i}
                              initial={{ height: 0 }}
                              animate={{ height: `${20 + Math.random() * 80}%` }}
                              transition={{ 
                                 duration: 1.5, 
                                 repeat: Infinity, 
                                 repeatType: "mirror", 
                                 delay: i * 0.03,
                                 ease: "easeInOut"
                              }}
                              className="w-[2px] rounded-t-[1px]"
                              style={{ backgroundColor: shopifyGreen, opacity: 0.2 + (i / 48) * 0.8 }}
                           />
                        ))}
                     </div>
                    <div className="flex justify-between items-center relative z-10 pt-2 border-t border-neutral-200 dark:border-white/5">
                       <span className="text-[9px] font-bold text-neutral-400 dark:text-white/40 uppercase tracking-widest">Efficiency Delta</span>
                       <span className="text-[11px] font-black text-neutral-900 dark:text-white uppercase tracking-widest">+18.4%</span>
                    </div>
                 </div>
              </div>

              <div className="col-span-12 lg:col-span-6 grid grid-cols-2 gap-6">
                 <div className="col-span-2 flex justify-between items-end border-b border-neutral-100 dark:border-white/5 pb-2">
                    <h3 className="text-xs font-black text-neutral-900 dark:text-white uppercase tracking-[0.3em]">Operational Matrix</h3>
                    <span className="text-[9px] font-bold text-neutral-400 dark:text-white/20 uppercase tracking-widest">Active Modules: 05</span>
                 </div>
                  <div className="col-span-1 space-y-4">
                    <ShopifyActionRow label="Edge Caching" value="Active" icon={Server} color={shopifyGreen} />
                    <ShopifyActionRow label="Checkout Sync" value="Elite" icon={CreditCard} color={shopifyGreen} />
                    <ShopifyActionRow label="Font Subset" value="Done" icon={FileText} color={shopifyGreen} />
                 </div>
                 <div className="col-span-1 space-y-4">
                    <ShopifyActionRow label="Image Optim" value="Active" icon={Monitor} color={shopifyGreen} />
                    <ShopifyActionRow label="Script Defer" value="Sync" icon={Code2} color={shopifyGreen} />
                    <ShopifyActionRow label="Liquid SEO" value="Optimised" icon={FileText} color={shopifyGreen} />
                 </div>
              </div>

              <div className="col-span-12 lg:col-span-3">
                 <div className="h-full rounded-[40px] border border-neutral-200 dark:border-white/5 bg-neutral-900 p-8 flex flex-col justify-between relative overflow-hidden group">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-white/[0.05] via-transparent to-transparent pointer-events-none" />
                    <div className="flex justify-between items-start relative z-10">
                       <div className="space-y-1">
                          <p className="text-[10px] font-black text-neutral-400 uppercase tracking-[0.2em] mb-1">Global Security</p>
                          <p className="text-sm font-black text-white uppercase tracking-widest leading-none">Full Protocol</p>
                       </div>
                       <ShieldCheck size={20} style={{ color: shopifyGreen }} />
                    </div>
                    <div className="space-y-4 relative z-10">
                       <div className="flex justify-between items-end">
                          <span className="text-[10px] text-white/40 uppercase font-black tracking-widest leading-none">Status // Encrypted</span>
                          <span className="text-2xl font-black text-white leading-none">100%</span>
                       </div>
                       <div className="h-1.5 w-full bg-white/10 rounded-full overflow-hidden">
                          <motion.div 
                             initial={{ width: 0 }}
                             animate={{ width: "100%" }}
                             transition={{ duration: 2 }}
                             className="h-full" 
                             style={{ backgroundColor: shopifyGreen }}
                          />
                       </div>
                    </div>
                 </div>
              </div>
           </div>
        </div>

        {/* Bottom Technical Ticker */}
        <div className="h-12 border-t border-neutral-200 dark:border-white/5 flex items-center justify-between px-10 bg-neutral-50/50 dark:bg-black/40 relative z-20">
           <div className="flex gap-10">
              <div className="flex items-center gap-2">
                 <div className="size-1.5 rounded-full" style={{ backgroundColor: shopifyGreen }} />
                 <span className="text-[9px] font-black uppercase tracking-widest">Network Logic: 0.08ms</span>
              </div>
              <div className="flex items-center gap-2">
                 <div className="size-1.5 rounded-full" style={{ backgroundColor: shopifyGreen }} />
                 <span className="text-[9px] font-black uppercase tracking-widest">Render Offset: Balanced</span>
              </div>
              <div className="flex items-center gap-2">
                 <div className="size-1.5 rounded-full" style={{ backgroundColor: shopifyGreen }} />
                 <span className="text-[9px] font-black uppercase tracking-widest">Scale Engine: Online</span>
              </div>
           </div>
           <p className="text-[9px] font-bold text-neutral-400 dark:text-white/20 uppercase tracking-[0.5em] hidden sm:block">Tactical Merchant Interface // v2.0</p>
        </div>
      </div>
    </div>
  );
}

const ShopifyTacticalCard = ({ label, value, sub, icon: Icon, perc, color }: any) => (
  <div className="group space-y-3">
     <div className="flex justify-between items-end">
        <div className="flex items-center gap-4">
           <div className="size-9 rounded-xl bg-neutral-100 dark:bg-white/5 flex items-center justify-center border border-neutral-200 dark:border-white/5 group-hover:text-white transition-all duration-500 shadow-sm" style={{ color: color }}>
              <Icon size={18} />
           </div>
           <div>
              <p className="text-[10px] font-black text-neutral-900 dark:text-white uppercase tracking-widest leading-none mb-1.5">{label}</p>
              <p className="text-[9px] text-neutral-400 dark:text-white/30 tracking-tighter leading-none font-medium">{sub}</p>
           </div>
        </div>
        <span className="text-sm font-black text-neutral-900 dark:text-white tracking-widest">{value}</span>
     </div>
     <div className="h-[2px] w-full bg-neutral-100 dark:bg-white/[0.05] rounded-full overflow-hidden">
        <div style={{ width: `${perc}%`, backgroundColor: color }} className="h-full" />
     </div>
  </div>
);

const ShopifyTacticalMetric = ({ label, value, status, color }: any) => (
  <div className="space-y-1">
     <p className="text-[9px] font-black text-neutral-400 dark:text-white/20 uppercase tracking-[0.3em] mb-1">{label}</p>
     <div className="flex items-baseline gap-2">
        <span className="text-2xl font-black text-neutral-900 dark:text-white tracking-tighter leading-none">{value}</span>
        <span className="text-[9px] font-black uppercase tracking-widest" style={{ color: color }}>{status}</span>
     </div>
  </div>
);

const ShopifyActionRow = ({ label, value, icon: Icon, color }: any) => (
  <div className="flex items-center justify-between p-4 rounded-2xl border border-neutral-100 dark:border-white/[0.02] hover:bg-neutral-100/50 dark:hover:bg-white/[0.03] transition-all cursor-default shadow-sm">
     <div className="flex items-center gap-4">
        <Icon size={14} className="text-neutral-300 dark:text-neutral-500" />
        <span className="text-[10px] font-bold text-neutral-400 dark:text-white/50 uppercase tracking-[0.1em]">{label}</span>
     </div>
     <span className="text-[11px] font-black text-neutral-900 dark:text-white uppercase tracking-widest" style={{ color: color }}>{value}</span>
  </div>
);


/* --- STANDARDS --- */

function StandardDashboard({ slug, service }: any) {

  return (
    <div className="flex items-center justify-center w-full antialiased p-4 sm:p-2 lg:p-4">
      <div className="w-full max-w-[1024px] min-h-[720px] flex flex-col rounded-2xl overflow-hidden shadow-2xl border border-neutral-200 dark:border-white/5 bg-white dark:bg-[#09090b] transition-colors duration-500">
        
        <div className="h-14 border-b border-neutral-200 dark:border-white/5 flex items-center justify-between px-6 bg-white/50 dark:bg-[#0c0c0e]/50 backdrop-blur-2xl z-20 transition-colors duration-500">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-3 pr-6 border-r border-neutral-200 dark:border-white/5">
              <div className="size-8 bg-neutral-900 dark:bg-white rounded-lg flex items-center justify-center shadow-lg">
                 <Bot size={18} className="text-white dark:text-black" />
              </div>
              <div className="flex flex-col">
                <span className="text-xs font-black tracking-tight text-neutral-900 dark:text-white uppercase leading-none">seospeeder.ai</span>
                <span className="text-[10px] text-neutral-400 font-bold uppercase tracking-widest mt-0.5">Analytics Portal</span>
              </div>
            </div>
            
            <div className="hidden md:flex items-center gap-1.5 px-3 py-1.5 bg-neutral-100 dark:bg-white/5 rounded-full border border-neutral-200/50 dark:border-white/5">
               <Globe size={14} className="text-neutral-500" />
               <span className="text-[10px] font-extrabold text-neutral-600 dark:text-neutral-400 uppercase tracking-tighter">Instance : {slug}</span>
               <ChevronRight size={12} className="text-neutral-300 dark:text-neutral-700 mx-1" />
               <span className="text-[10px] font-black text-emerald-500 uppercase tracking-tighter animate-pulse">Live</span>
            </div>
          </div>

          <div className="flex items-center gap-4">
             <Bell size={20} className="text-neutral-400" />
             <div className="flex items-center gap-2 pl-4 border-l border-neutral-200 dark:border-white/5">
                <div className="size-8 rounded-full bg-neutral-900 dark:bg-white flex items-center justify-center">
                   <Monitor size={16} className="text-white dark:text-black" />
               </div>
            </div>
         </div>
        </div>

        <div className="flex flex-1 overflow-hidden">
          <div className="w-[220px] bg-neutral-50/50 dark:bg-black/10 flex flex-col py-6 border-r border-neutral-200 dark:border-white/5 z-10 shrink-0">
            {MENU_ITEMS.map((item) => {
              const isActive = item.id === "performance";
              return (
                <button
                  key={item.id}
                  disabled={true}
                  className={cn(
                    "relative w-full flex items-center gap-3 px-6 py-3 transition-all text-sm text-left group pointer-events-none",
                    isActive ? "text-neutral-900 dark:text-white font-bold" : "text-neutral-500"
                  )}
                >
                  {isActive && <motion.div layoutId="nav-active" className="absolute left-0 top-1 bottom-1 w-1 bg-neutral-900 dark:bg-white rounded-r-full" />}
                  <item.icon size={20} className={cn("shrink-0", isActive ? "text-neutral-900 dark:text-white" : "text-neutral-400")} />
                  <span className="truncate flex-1 tracking-tight">{item.label}</span>
                </button>
              );
            })}
          </div>

          <div className="flex-1 flex flex-col bg-white dark:bg-[#09090b]">
            <div className="p-8 flex flex-col gap-8 h-full">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-2 border-b border-neutral-100 dark:border-white/5 pb-4">
                  <div className="space-y-0.5">
                    <h1 className="text-2xl font-black tracking-tighter text-neutral-900 dark:text-white leading-none">
                       {service?.title || "System"} Performance Engine
                    </h1>
                    <p className="text-xs text-neutral-500 font-medium tracking-tight">Real-time performance metrics monitored across your site.</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <PerformanceCard label="LCP" value="0.8s" status="Passing" notes="Top 1% globally" icon={Layout} />
                  <PerformanceCard label="CLS" value="0.01" status="Excellent" notes="Zero layout shift" icon={Activity} />
                  <PerformanceCard label="INP" value="12ms" status="Elite" notes="Optimized interactivity" icon={MousePointer} />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-stretch">
                   <div className="bg-white/80 dark:bg-neutral-900/80 border border-neutral-100 dark:border-white/5 rounded-[24px] p-6 flex flex-col justify-between shadow-sm">
                      <div className="space-y-1.5">
                         <div className="flex items-center gap-2 text-neutral-400 font-bold text-[9px] uppercase tracking-[0.25em] mb-2 font-inter">
                            <span className="size-2 rounded-full bg-emerald-500 animate-pulse"></span>
                            Active Network Diagnostic
                         </div>
                         <h2 className="text-2xl font-bold text-neutral-900 dark:text-neutral-100 tracking-tight leading-none">Systems Operational</h2>
                         <p className="text-neutral-500 dark:text-neutral-400 text-[11px] leading-relaxed mt-1 opacity-80">
                            Global nodes are active. No latency issues detected.
                         </p>
                      </div>
                   </div>

                   <div className="grid grid-cols-2 gap-4">
                      <MetricSquare label="ROI Boost" value="Active" rating="A" icon={TrendingUp} />
                      <MetricSquare label="Indexation" value="100%" rating="A" icon={CheckCircle2} />
                      <div className="col-span-2 bg-neutral-900 dark:bg-white border border-neutral-800 dark:border-neutral-100 rounded-[24px] px-6 py-4 flex justify-between items-center shadow-xl">
                         <h2 className="text-4xl font-black text-emerald-500 tracking-tighter leading-none">99+</h2>
                         <Zap size={16} className="text-emerald-500 fill-current" />
                      </div>
                   </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const PerformanceCard = ({ label, value, status, notes, icon: Icon }: any) => (
  <div className="bg-white/80 dark:bg-neutral-900/80 border border-neutral-100 dark:border-white/5 rounded-[24px] p-5 flex flex-col justify-between shadow-sm">
     <div className="flex justify-between items-start mb-3">
        <Icon size={16} className="text-neutral-400" />
        <span className="px-2 py-0.5 rounded-full text-[9px] font-black uppercase tracking-widest bg-emerald-500/10 text-emerald-600 border border-emerald-500/20">{status}</span>
     </div>
     <div className="space-y-0.5">
        <p className="text-[10px] font-bold text-neutral-500 uppercase tracking-tighter leading-none">{label}</p>
        <h2 className="text-2xl font-black text-neutral-900 dark:text-neutral-100 tracking-tighter leading-none">{value}</h2>
     </div>
     <p className="text-[9px] font-bold text-neutral-400 tracking-widest uppercase mt-4">{notes}</p>
  </div>
);

const MetricSquare = ({ label, value, rating, icon: Icon }: any) => (
  <div className="bg-white dark:bg-neutral-900 border border-neutral-100 dark:border-white/5 rounded-[24px] p-5 flex flex-col justify-between shadow-sm">
     <div className="flex justify-between items-start">
        <Icon size={16} className="text-neutral-400" />
        <span className="text-[8px] font-black w-4 h-4 flex items-center justify-center rounded border bg-emerald-500/10 text-emerald-600 border-emerald-500/20">{rating}</span>
     </div>
     <div className="mt-4">
        <p className="text-[10px] font-black uppercase text-neutral-400 mb-1 leading-none">{label}</p>
        <h3 className="text-xl font-bold text-neutral-900 dark:text-white leading-none">{value}</h3>
     </div>
  </div>
);

const CommerceStatsCard = ({ label, value, sub, color, icon: Icon, trend }: any) => {
  const colors: any = {
    emerald: "text-emerald-500 bg-emerald-500/10 border-emerald-500/20",
    sky: "text-sky-500 bg-sky-500/10 border-sky-500/20",
    purple: "text-purple-500 bg-purple-500/10 border-purple-500/20",
    amber: "text-amber-500 bg-amber-500/10 border-amber-500/20",
    orange: "text-orange-500 bg-orange-500/10 border-orange-500/20",
  };

  return (
    <div className="bg-white dark:bg-neutral-900 border border-neutral-100 dark:border-white/5 p-6 rounded-[28px] shadow-sm overflow-hidden group">
       <div className={cn("size-10 rounded-xl flex items-center justify-center mb-6", colors[color])}>
          <Icon size={20} />
       </div>
       <div className="space-y-1 relative z-10">
          <p className="text-[10px] font-bold text-neutral-400 uppercase tracking-widest">{label}</p>
          <div className="flex items-baseline gap-2">
             <h3 className="text-3xl font-black text-neutral-900 dark:text-white tracking-tighter leading-none">{value}</h3>
             {trend === "up" && <ArrowUpRight size={16} className="text-emerald-500" />}
             {trend === "down" && <ArrowUpRight size={16} className="text-emerald-500 rotate-90" />} 
          </div>
          <p className="text-[9px] font-medium text-neutral-500 dark:text-neutral-400 opacity-60 tracking-tight">{sub}</p>
       </div>
    </div>
  );
}

/* --- WORDPRESS APEX COMMAND CENTER (THE BEST) --- */
const WordPressLogo = ({ size = 24, className = "" }: { size?: number, className?: string }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 512 512" 
    fill="currentColor" 
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M491.5 256c0 130.1-105.4 235.5-235.5 235.5-25.2 0-49.3-4-71.8-11.2l128-350.6c11.5 30.6 19.3 64.9 19.3 90.7 0 21.6-4 44.8-15.1 72.8l-52.6 153.9c25.4 9 52.7 13.9 81.1 13.9 20.3 0 40-2.5 58.9-7.2L348.4 206.1c11.2-25.3 16.3-46.1 16.3-64.4 0-21.7-4.1-42.3-13.8-62.8L491.5 256zm-235.5-235.5c-44 0-84.9 12-119.8 32.8l128.5 330.6c19.1-18.3 33.1-44.5 33.1-66.5 0-20.7-5.1-44-15.4-74.8l-52.1-140c-7.2-19.1-12.3-33-12.3-47.5 0-16.7 5.1-32.9 16.2-46.4-23.7-5.5-48.4-8.2-73.7-8.2zM80.2 126.3c15.6 17.5 26.5 42.1 26.5 63.8 0 20.8-7.3 48.7-18.7 80.8L44.8 395.1c-25.8-37.5-40.8-83-40.8-132.1 0-82.7 41.9-155.6 105.4-198.8L80.2 126.3zM256 512c-141.4 0-256-114.6-256-256S114.6 0 256 0s256 114.6 256 256-114.6 256-256 256zm106.6-434.6c-13.5 13.5-19.3 35.5-19.3 56.4 0 23.3 6.9 48.8 17.4 78.8l43.2 119.7c5.4 15.1 9.1 27.5 9.1 39 0 16.3-4.5 32.6-13.8 45.4 34.3-41.9 54.8-124 54.8-210.7 0-46-7.5-89.8-21-130.4L362.6 77.4z"/>
  </svg>
);

function WordPressDashboard({ slug, service }: any) {
  const wpBlue = "#21759B";
  
  return (
    <div className="flex items-center justify-center w-full antialiased p-0 sm:p-2 lg:p-4 font-mono">
      {/* Tactical Hub Frame */}
      <div className="w-full max-w-[1240px] min-h-[800px] bg-white dark:bg-[#0c0c0e] text-slate-500 dark:text-[#a1a1aa] relative overflow-hidden rounded-[40px] border border-slate-200 dark:border-white/5 shadow-2xl flex flex-col transition-colors duration-500">
        
        {/* Background Grid Pattern - Static */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,currentColor_1px,transparent_1px),linear-gradient(to_bottom,currentColor_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-[0.03] dark:opacity-[0.1]" />
        
        {/* Top Tactical Command Header */}
        <div className="h-24 border-b border-slate-200 dark:border-white/5 flex items-center justify-between px-10 relative z-20 bg-white/50 dark:bg-black/20 backdrop-blur-md">
           <div className="flex items-center gap-12">
              <div className="flex items-center gap-5 group cursor-default">
                 {/* Animated Logo Ring */}
                 <div className="relative size-12 flex items-center justify-center">
                    <div className="absolute inset-0 rounded-full border border-dashed border-slate-300 dark:border-white/20 animate-[spin_10s_linear_infinite]" />
                    <div className="absolute inset-1 rounded-full flex items-center justify-center shadow-lg transition-transform group-hover:scale-105" style={{ backgroundColor: wpBlue }}>
                       <Globe size={24} className="text-white" />
                    </div>
                 </div>
                 <div className="flex flex-col">
                    <span className="text-sm font-black text-slate-900 dark:text-white tracking-widest uppercase mb-1 flex items-center gap-2">
                       WordPress <span className="opacity-30">///</span> Optimization Alpha
                    </span>
                    <div className="flex items-center gap-2">
                       <span className="size-1.5 rounded-sm animate-pulse" style={{ backgroundColor: wpBlue }} />
                       <span className="text-[9px] font-black uppercase tracking-[0.3em]" style={{ color: wpBlue }}>Speed Yield // 48hrs Peak</span>
                    </div>
                 </div>
              </div>
              
              <div className="h-10 w-px bg-slate-200 dark:bg-white/10 skew-x-12" />

               <div className="hidden xl:flex items-center gap-7">
                  {["Network", "Database", "Security", "Discovery"].map((t, i) => (
                    <div key={t} className="flex items-center gap-7 group cursor-default">
                       <div className="flex flex-col">
                          <span className="text-[7px] font-black uppercase tracking-[0.4em] text-slate-400 dark:text-white/20 mb-1.5">{t}</span>
                          <div className="flex items-center gap-1.5 leading-none">
                             <div className="size-1 rounded-sm animate-pulse" style={{ backgroundColor: wpBlue }} />
                             <span className="text-[10px] font-black uppercase tracking-widest text-slate-900 dark:text-white">Nominal</span>
                          </div>
                       </div>
                       {i < 3 && <div className="h-6 w-px bg-slate-200 dark:bg-white/10" />}
                    </div>
                  ))}
               </div>
            </div>

            <div className="flex items-center gap-8">
               <div className="flex flex-col items-end">
                  <span className="text-[7px] font-black uppercase tracking-[0.4em] text-slate-400 dark:text-white/20 mb-1.5 px-3">Telemetry Monitor</span>
                  <div className="flex items-center gap-4 bg-slate-50 dark:bg-white/[0.02] border border-slate-200 dark:border-white/5 py-2 px-4 rounded-2xl group/telemetry hover:border-slate-300 dark:hover:border-white/10 transition-all">
                     <div className="flex gap-[1.5px] h-3 items-end opacity-40 group-hover/telemetry:opacity-100 transition-opacity">
                        {[0.4, 0.8, 0.6, 1, 0.5, 0.3].map((h, i) => (
                            <motion.div 
                               key={i} 
                               className="w-1 rounded-t-[1px]" 
                               style={{ backgroundColor: wpBlue }}
                               animate={{ height: [`${h * 8}px`, `${h * 12}px`, `${h * 8}px`] }}
                               transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.1 }}
                            />
                        ))}
                     </div>
                     <span className="text-[13px] font-black text-slate-900 dark:text-white tabular-nums tracking-widest uppercase">0.02ms</span>
                  </div>
               </div>
              <div className="size-10 rounded-xl border border-slate-200 dark:border-white/5 flex items-center justify-center text-slate-500 dark:text-white/80 hover:bg-slate-100 dark:hover:bg-white/5 hover:text-slate-900 dark:hover:text-white cursor-pointer transition-all">
                 <Terminal size={18} />
              </div>
           </div>
        </div>

        <div className="flex-1 p-10 relative z-20 grid grid-cols-12 gap-10 overflow-y-auto custom-scrollbar">
           
          {/* LEFT COLUMN: Section 01 - Diagnostic */}
           <div className="col-span-12 lg:col-span-3 space-y-10">
              <div className="space-y-1">
                 <p className="text-[10px] uppercase font-bold text-slate-400 dark:text-white/40 tracking-[0.4em]">Tactical // 01</p>
                 <h2 className="text-xl font-black text-slate-900 dark:text-white uppercase tracking-tighter">Diagnostic Cluster</h2>
              </div>
              
              <div className="space-y-4">
                 <WPDataNode label="PHP Pulse" value="4ms" status="WP Hub" density={4} max={5} color={wpBlue} icon={Zap} />
                 <WPDataNode label="Query Density" value="Clean" status="Vitals // 101" density={2} max={5} color={wpBlue} icon={Database} />
                 <WPDataNode label="Asset Tunnel" value="Elite" status="Active" density={5} max={5} color={wpBlue} icon={Layers} />
              </div>

               <div className="p-8 rounded-[32px] border border-slate-200 dark:border-white/5 bg-slate-100/30 dark:bg-white/[0.01] space-y-4 overflow-hidden relative group">
                  <div className="flex justify-between items-start relative z-10">
                     <div className="space-y-1">
                        <p className="text-[9px] font-black uppercase tracking-[0.2em] mb-1" style={{ color: wpBlue }}>Data Synthesis</p>
                        <p className="text-sm font-black text-slate-900 dark:text-white uppercase tracking-widest leading-none">Crawl Velocity</p>
                     </div>
                     <Target size={20} style={{ color: wpBlue }} />
                  </div>
                  
                  {/* Synthesis Matrix Animation */}
                  <div className="h-24 grid grid-cols-6 gap-1.5 relative z-10 py-2">
                     {[...Array(18)].map((_, i) => (
                        <motion.div 
                           key={i}
                           animate={{ 
                              opacity: [0.2, 0.8, 0.2],
                              scale: [1, 1.05, 1],
                           }}
                           transition={{ 
                              duration: 2, 
                              repeat: Infinity, 
                              delay: (i % 6) * 0.15 + Math.floor(i / 6) * 0.2,
                              ease: "easeInOut"
                           }}
                           className="bg-slate-200 dark:bg-white/10 rounded-sm border border-slate-300 dark:border-white/5"
                           style={{ 
                              backgroundColor: Math.random() > 0.6 ? wpBlue : undefined,
                              opacity: 0.3
                           }}
                        />
                     ))}
                  </div>

                  <div className="flex justify-between items-center relative z-10 pt-2 border-t border-slate-200 dark:border-white/5">
                     <span className="text-[9px] font-bold text-slate-400 dark:text-white/40 uppercase tracking-widest">Yield Delta</span>
                     <span className="text-[11px] font-black text-slate-900 dark:text-white uppercase tracking-widest">+24.8% Efficiency</span>
                  </div>
               </div>
           </div>

           {/* CENTER COLUMN: The Architectural Monolith */}
           <div className="col-span-12 lg:col-span-6 flex flex-col items-center justify-center relative px-10">
              
               <div className="relative z-10 w-full max-w-[480px] text-center space-y-4 font-sans mb-12">
                  <h1 className="text-3xl font-black text-slate-900 dark:text-white uppercase tracking-tighter leading-[0.85] px-4">WordPress Tactical Hub</h1>
                  <div className="flex items-center justify-center gap-6">
                     <div className="h-px w-8 bg-slate-200 dark:bg-white/10" />
                     <p className="text-[10px] text-slate-500 dark:text-white/60 font-black leading-relaxed uppercase tracking-[0.25em] whitespace-nowrap">Hybrid Intelligence Core</p>
                     <div className="h-px w-8 bg-slate-200 dark:bg-white/10" />
                  </div>
               </div>

               <div className="relative z-10 text-center mb-10 group">
                  <div className="w-[260px] h-[320px] bg-white dark:bg-[#0c0c0e] border border-slate-200 dark:border-white/10 rounded-[40px] flex flex-col items-center justify-between p-10 relative overflow-hidden shadow-2xl transition-all duration-700">
                     
                     {/* Corner brackets instead of hard lines */}
                     <div className="absolute top-6 left-6 size-4 border-t-2 border-l-2 border-slate-300 dark:border-white/20 transition-all duration-500 group-hover:top-4 group-hover:left-4" />
                     <div className="absolute top-6 right-6 size-4 border-t-2 border-r-2 border-slate-300 dark:border-white/20 transition-all duration-500 group-hover:top-4 group-hover:right-4" />
                     <div className="absolute bottom-6 left-6 size-4 border-b-2 border-l-2 border-slate-300 dark:border-white/20 transition-all duration-500 group-hover:bottom-4 group-hover:left-4" />
                     <div className="absolute bottom-6 right-6 size-4 border-b-2 border-r-2 border-slate-300 dark:border-white/20 transition-all duration-500 group-hover:bottom-4 group-hover:right-4" />

                     {/* Scanning Line Animation */}
                     <motion.div 
                        initial={{ top: -20 }}
                        animate={{ top: "110%" }}
                        transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                        className="absolute left-0 w-full h-px opacity-50 z-20 pointer-events-none"
                        style={{ background: `linear-gradient(90deg, transparent, ${wpBlue}, transparent)` }}
                     />

                     {/* Dot Matrix Background */}
                     <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,theme(colors.slate.300)_1px,transparent_1px)] dark:bg-[radial-gradient(circle_at_center,theme(colors.white)_1px,transparent_1px)] bg-[size:16px_16px] opacity-[0.1] dark:opacity-[0.03] pointer-events-none" />

                     <div className="relative flex flex-col items-center gap-1 z-10 pt-4">
                        <span className="text-[10px] font-black text-slate-400 dark:text-white/40 uppercase tracking-[0.5em] mb-4 leading-none indent-[0.5em]">Discovery Index</span>
                        <div className="relative flex items-center justify-center gap-3">
                           {/* Data Bracket Left */}
                           <span className="text-4xl font-light opacity-30 transition-transform group-hover:-translate-x-2" style={{ color: wpBlue }}>[</span>
                           <span className="text-8xl font-black text-slate-900 dark:text-white tracking-[-0.08em] leading-none mb-2 tabular-nums">99<span className="text-4xl absolute top-0" style={{ color: wpBlue }}>+</span></span>
                           {/* Data Bracket Right */}
                           <span className="text-4xl font-light opacity-30 ml-4 transition-transform group-hover:translate-x-2" style={{ color: wpBlue }}>]</span>
                        </div>
                     </div>

                     <div className="flex flex-col items-center relative z-20 mt-4">
                        <div className="border hover:bg-slate-50 dark:hover:bg-white/[0.02] transition-colors border-current px-6 py-2 rounded-none" style={{ color: wpBlue }}>
                           <span className="text-[11px] font-black uppercase tracking-[0.2em] whitespace-nowrap">Mastery Elite</span>
                        </div>
                        {/* Hex sequence visual */}
                        <div className="flex gap-4 mt-6 pb-2 text-[9px] font-bold text-slate-400 dark:text-white/30 font-mono tracking-[0.2em]">
                           <span>0x1A</span><span>0x99</span><span>0xFF</span>
                        </div>
                     </div>
                  </div>
               </div>

              <div className="mt-16 w-full max-w-[500px] grid grid-cols-3 gap-10 relative z-10">
                 <WPNodeMetric label="LCP Delta" value="0.8s" status="Elite" color={wpBlue} />
                 <WPNodeMetric label="DB Sync" value="Nominal" status="Golden" color={wpBlue} />
                 <WPNodeMetric label="SEO Core" value="Active" status="Sync" color={wpBlue} />
              </div>
           </div>

           {/* RIGHT COLUMN: Section 02 - Operation Matrix */}
           <div className="col-span-12 lg:col-span-3 space-y-10">
              <div className="space-y-2 text-right">
                 <p className="text-[10px] uppercase font-bold text-slate-400 dark:text-white/40 tracking-[0.4em]">Tactical // 02</p>
                 <h2 className="text-xl font-black text-slate-900 dark:text-white uppercase tracking-tighter">Operation Matrix</h2>
              </div>

              <div className="space-y-4">
                 <WPSectorRow label="Edge Sync" value="NOMINAL" icon={Server} color={wpBlue} />
                 <WPSectorRow label="CWR Hardening" value="SECURE" icon={ShieldCheck} color={wpBlue} />
                 <WPSectorRow label="Semantic Core" value="ACTIVE" icon={Layers} color={wpBlue} />
                 <WPSectorRow label="Asset Tunnel" value="ELITE" icon={Zap} color={wpBlue} />
                 <WPSectorRow label="WAF Logic" value="TUNED" icon={Code2} color={wpBlue} />
              </div>

              <div className="mt-auto p-8 rounded-3xl border border-slate-200 dark:border-white/5 bg-slate-100/30 dark:bg-white/[0.01] group relative overflow-hidden flex flex-col justify-between min-h-[160px]">
                 <div className="flex justify-between items-start mb-6 relative z-10">
                    <div className="space-y-1">
                       <p className="text-[10px] font-black uppercase tracking-[0.2em] leading-none mb-1" style={{ color: wpBlue }}>Global Defense</p>
                       <p className="text-sm font-black text-slate-900 dark:text-white uppercase tracking-widest leading-none">Protocol Active // Stable</p>
                    </div>
                    <ShieldCheck size={20} style={{ color: wpBlue }} />
                 </div>
                 <div className="space-y-4 relative z-10">
                    <div className="flex justify-between items-end">
                       <span className="text-[11px] text-slate-400 dark:text-white/40 uppercase font-black tracking-widest leading-none">System Integrity</span>
                       <span className="text-xl font-black text-slate-900 dark:text-white leading-none tabular-nums">100.0%</span>
                    </div>
                    {/* Stepped Progress */}
                    <div className="flex gap-1 h-3 w-full">
                       {[...Array(20)].map((_, i) => (
                           <div key={i} className="flex-1 rounded-[1px]" style={{ backgroundColor: wpBlue }} />
                       ))}
                    </div>
                 </div>
              </div>
           </div>

            {/* STRATEGIC IMPACT MATRIX: Bottom Row */}
            <div className="col-span-12 mt-12 pt-12 border-t border-slate-200 dark:border-white/5 space-y-10">
               <div className="flex justify-between items-end">
                  <div className="space-y-1">
                     <p className="text-[10px] uppercase font-bold text-slate-400 dark:text-white/40 tracking-[0.4em]">Strategic // Advantage</p>
                     <h2 className="text-xl font-black text-slate-900 dark:text-white uppercase tracking-tighter">Impact Analysis Matrix</h2>
                  </div>
                  <div className="flex items-center gap-3 bg-emerald-500/5 px-4 py-1.5 rounded-xl border border-emerald-500/10">
                     <div className="size-2 rounded-full bg-emerald-500 animate-pulse" />
                     <span className="text-[10px] font-black uppercase tracking-widest text-emerald-500">All Metrics Verified</span>
                  </div>
               </div>

               <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pb-10">
                  <WPValueNode 
                     title="Performance Score" 
                     value="Verified 90+" 
                     detail="PageSpeed Optimized" 
                     bullets={["90+ Mobile/Desktop", "Grade A GTmetrix", "Search Visiblity Up"]} 
                     color={wpBlue}
                     icon={Zap}
                  />
                  <WPValueNode 
                     title="Site Integrity" 
                     value="Safe // Verified" 
                     detail="Structure Preserved" 
                     bullets={["No Design Changes", "Content Unaltered", "Tested & Verified"]} 
                     color={wpBlue}
                     icon={ShieldCheck}
                  />
                  <WPValueNode 
                     title="Business Yield" 
                     value="Better Results" 
                     detail="Revenue Catalyst" 
                     bullets={["Lower Bounce Rate", "Higher Engagement", "Maximized Conversions"]} 
                     color={wpBlue}
                     icon={TrendingUp}
                  />
               </div>
            </div>
        </div>

        {/* Bottom Technical Ticker */}
        <div className="h-12 border-t border-slate-200 dark:border-white/5 flex items-center justify-between px-10 bg-slate-50/50 dark:bg-black/40 relative z-20">
           <div className="flex gap-10">
              <div className="flex items-center gap-2">
                 <div className="size-1.5 rounded-full" style={{ backgroundColor: wpBlue }} />
                 <span className="text-[9px] font-black uppercase tracking-widest">Tactical Hybrid // Node-WP</span>
              </div>
              <div className="flex items-center gap-2">
                 <div className="size-1.5 rounded-full" style={{ backgroundColor: wpBlue }} />
                 <span className="text-[9px] font-black uppercase tracking-widest">Global Distributed Edge</span>
              </div>
           </div>
           <p className="text-[9px] font-bold text-slate-400 dark:text-white/20 uppercase tracking-[0.5em] hidden sm:block">Apex // Hybrid Matrix Interface</p>
        </div>
      </div>
    </div>
  );
}

// Custom WordPress Internal Components
const WPDataNode = ({ label, value, status, density, max, color, icon: Icon }: any) => (
  <div className="group space-y-3 p-4 border border-transparent hover:border-slate-200 dark:hover:border-white/5 rounded-2xl transition-all">
     <div className="flex justify-between items-start">
        <div className="flex gap-4">
           <div className="size-8 rounded-lg bg-slate-100 dark:bg-white/5 flex items-center justify-center text-slate-500 dark:text-white/50 group-hover:bg-slate-200 dark:group-hover:bg-white/10 transition-colors">
              <Icon size={16} />
           </div>
           <div>
              <p className="text-[11px] font-black text-slate-900 dark:text-white uppercase tracking-widest leading-none mb-1">{label}</p>
              <p className="text-[9px] text-slate-500 font-bold uppercase tracking-widest">{status}</p>
           </div>
        </div>
        <span className="text-sm font-black tracking-tighter" style={{ color: color }}>{value}</span>
     </div>
     <div className="flex gap-1 ml-12">
        {[...Array(max)].map((_, i) => (
           <div 
             key={i} 
             style={{ 
                backgroundColor: i < density ? color : '', 
                opacity: i < density ? 1 : 0.2 
             }} 
             className={i >= density ? "bg-slate-300 dark:bg-white/20 size-1.5 rounded-full" : "size-1.5 rounded-full"}
           />
        ))}
     </div>
  </div>
);

const WPNodeMetric = ({ label, value, status, color }: any) => (
  <div className="p-4 sm:p-5 rounded-[24px] border border-slate-200 dark:border-white/5 bg-slate-100/30 dark:bg-white/[0.01] flex flex-col items-center justify-center gap-2 relative overflow-hidden transition-all hover:bg-white dark:hover:bg-white/[0.03] shadow-sm group">
     {/* Corner accents */}
     <div className="absolute top-0 left-0 size-12 bg-gradient-to-br from-current to-transparent opacity-[0.03] rounded-br-[100px]" style={{ color: color }} />
     
     <div className="relative flex items-center justify-center gap-1 w-full mt-1">
        <span className="text-xs font-light opacity-30 transition-transform group-hover:-translate-x-1" style={{ color: color }}>&lt;</span>
        <span className="text-sm font-black text-slate-900 dark:text-white tracking-tight whitespace-nowrap">{value}</span>
        <span className="text-xs font-light opacity-30 transition-transform group-hover:translate-x-1" style={{ color: color }}>/&gt;</span>
     </div>
     
     <div className="text-center space-y-1 mt-1 z-10 w-full">
        <p className="text-[9px] font-black text-slate-400 dark:text-white/30 uppercase tracking-[0.15em] leading-none mb-2.5 whitespace-nowrap">{label}</p>
        <div className="flex items-center justify-center gap-1.5 pt-2 border-t border-slate-200 dark:border-white/5 w-[80%] mx-auto">
           <div className="size-1 rounded-sm animate-pulse shrink-0" style={{ backgroundColor: color }} />
           <p className="text-[8px] font-black uppercase tracking-[0.15em] leading-none whitespace-nowrap" style={{ color: color }}>{status}</p>
        </div>
     </div>
  </div>
);

const WPSectorRow = ({ label, value, icon: Icon, color }: any) => (
  <div className="flex items-center justify-between p-4 rounded-xl border border-dashed border-slate-200 dark:border-white/10 hover:border-solid hover:bg-slate-50 dark:hover:bg-white/[0.02] transition-all cursor-default group">
     <div className="flex items-center gap-4">
        <div className="size-6 rounded-md bg-slate-100 dark:bg-white/5 flex items-center justify-center group-hover:scale-110 transition-transform">
           <Icon size={12} className="text-slate-400 dark:text-white/50" />
        </div>
        <span className="text-[10px] font-black text-slate-500 dark:text-white/60 uppercase tracking-widest">{label}</span>
     </div>
     <div className="flex items-center gap-2">
        <span className="text-[10px] font-black uppercase tracking-[0.2em]" style={{ color: color }}>{value}</span>
        <div className="size-1 bg-current rounded-full" style={{ color: color }} />
     </div>
  </div>
);

const WPValueNode = ({ title, value, detail, bullets, color, icon: Icon }: any) => (
  <div className="relative group p-8 rounded-[40px] border border-slate-200 dark:border-white/5 bg-white/50 dark:bg-white/[0.02] backdrop-blur-sm transition-all hover:bg-white dark:hover:bg-white/[0.04] shadow-xl overflow-hidden">
     {/* High-tech animated corner */}
     <div className="absolute top-0 right-0 size-24 pointer-events-none opacity-20">
        <div className="absolute top-8 right-8 size-2 bg-current rounded-full animate-ping" style={{ color: color }} />
        <div className="absolute top-4 right-4 w-12 h-[1px] bg-current opacity-30" style={{ color: color }} />
        <div className="absolute top-4 right-4 h-12 w-[1px] bg-current opacity-30" style={{ color: color }} />
     </div>

     <div className="relative z-10 space-y-6">
        <div className="flex items-center gap-4">
           <div className="size-10 rounded-2xl bg-slate-100 dark:bg-white/5 flex items-center justify-center transition-transform group-hover:scale-110">
              <Icon size={20} style={{ color: color }} />
           </div>
           <p className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400 dark:text-white/30">{title}</p>
        </div>

        <div className="space-y-1">
           <h3 className="text-2xl font-black text-slate-900 dark:text-white uppercase tracking-tighter">{value}</h3>
           <p className="text-[11px] font-black uppercase tracking-widest" style={{ color: color }}>&lt; {detail} /&gt;</p>
        </div>

        <div className="space-y-3 pt-4 border-t border-slate-200 dark:border-white/5">
           {bullets.map((b: string, i: number) => (
              <div key={i} className="flex items-center gap-3">
                 <div className="size-1 rounded-[1px]" style={{ backgroundColor: color }} />
                 <span className="text-[9px] font-bold text-slate-500 dark:text-white/60 uppercase tracking-widest">{b}</span>
              </div>
           ))}
        </div>
     </div>
  </div>
);
