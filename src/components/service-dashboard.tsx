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
import TextHighlighter from "@/components/fancy/text/text-highlighter";
import { SERVICES } from "@/config/services";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { StaggerButton } from "@/components/ui/stagger-button";

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
      <div className="w-full max-w-[1240px] min-h-[600px] lg:min-h-[750px] bg-white dark:bg-[#0c0c0e] text-neutral-500 dark:text-[#a1a1aa] relative overflow-hidden rounded-3xl lg:rounded-[40px] border border-neutral-200 dark:border-white/5 shadow-2xl flex flex-col font-mono transition-colors duration-500">

        {/* Background Grid Pattern - Static */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,currentColor_1px,transparent_1px),linear-gradient(to_bottom,currentColor_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-[0.03] dark:opacity-[0.1]" />

        {/* Top Operational Status Bar */}
        <div className="h-auto py-6 lg:py-0 lg:h-20 border-b border-neutral-200 dark:border-white/5 flex flex-col lg:flex-row items-center justify-between px-6 lg:px-10 relative z-20 gap-4 lg:gap-0">
          <div className="flex items-center gap-4 lg:gap-10">
            <div className="flex items-center gap-4">
              <div className="size-10 bg-[#F06427] rounded-full flex items-center justify-center shadow-lg">
                <Database size={20} className="text-white" />
              </div>
              <div className="flex flex-col">
                <span className="text-sm font-black text-neutral-900 dark:text-white tracking-widest uppercase mb-0.5 font-inter">Magento Intelligence</span>
                <span className="text-[10px] text-[#F06427] font-bold uppercase tracking-[0.3em] font-inter">Precision Node 01 // Active</span>
              </div>
            </div>

            <div className="hidden lg:block h-8 w-px bg-neutral-200 dark:bg-white/5" />

            <div className="hidden xl:flex items-center gap-6 text-neutral-500 dark:text-neutral-400">
              {["Network", "Database", "Security", "Scale"].map(t => (
                <div key={t} className="flex flex-col">
                  <span className="text-[9px] uppercase font-bold opacity-40 dark:opacity-60 tracking-[0.2em] leading-none mb-1 font-inter">{t}</span>
                  <span className="text-[11px] font-black text-neutral-900 dark:text-white/80 uppercase">Status: <span className="text-emerald-500">Nominal</span></span>
                </div>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-6">
            <div className="text-right hidden sm:flex flex-col justify-center">
              <span className="text-[9px] font-bold text-neutral-400 dark:text-white/40 uppercase tracking-widest mb-0.5 leading-none font-inter">Latency Offset</span>
              <span className="text-sm font-black text-[#F06427] tracking-tighter leading-none">0.08ms</span>
            </div>
            <div className="size-10 rounded-xl border border-neutral-200 dark:border-white/5 flex items-center justify-center text-neutral-500 dark:text-white/80 hover:bg-neutral-100 dark:hover:bg-white/5 cursor-pointer transition-all">
              <Terminal size={18} />
            </div>
          </div>
        </div>

        <div className="flex-1 p-6 lg:p-10 grid grid-cols-12 gap-8 lg:gap-10 relative z-20 overflow-y-auto custom-scrollbar">

          {/* LEFT COLUMN: Infrastructure Clusters */}
          <div className="col-span-12 lg:col-span-3 space-y-10">
            <div className="space-y-2">
              <p className="text-[10px] uppercase font-bold text-neutral-400 dark:text-white/40 tracking-[0.4em] font-inter">Section // 01</p>
              <h2 className="text-xl font-black text-neutral-900 dark:text-white uppercase tracking-tighter font-primary">Diagnostic Clusters</h2>
            </div>

            <div className="space-y-6">
              <MagentoTechnicalCard label="Query Load" value="4ms" sub="MySQL Hub" icon={Database} perc={12} />
              <MagentoTechnicalCard label="CPU Affinity" value="1.2%" sub="Optimized" icon={Cpu} perc={6} />
              <MagentoTechnicalCard label="IOPS Delta" value="Elite" sub="NVMe Raid" icon={Layers} perc={100} />
            </div>

            <div className="p-8 rounded-[32px] border border-neutral-200 dark:border-white/5 bg-neutral-100/30 dark:bg-white/[0.01] space-y-6 shadow-sm group relative overflow-hidden">
              <div className="flex justify-between items-start relative z-10">
                <div className="space-y-1">
                  <p className="text-[9px] uppercase font-black text-[#F06427] tracking-[0.2em] mb-1 leading-none font-inter">Topology</p>
                  <p className="text-sm uppercase font-black text-neutral-900 dark:text-white tracking-widest leading-none font-inter">Core Scalability</p>
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
                <span className="text-[9px] font-black text-emerald-500 uppercase tracking-widest flex items-center gap-2 font-inter">
                  <span className="size-1.5 rounded-[1px] bg-emerald-500 animate-pulse shadow-[0_0_8px_rgba(16,185,129,0.4)]" />
                  Nominal State
                </span>
                <span className="text-[9px] uppercase font-black text-neutral-400 dark:text-white/30 tracking-[0.2em] font-inter">Net // <span className="text-neutral-900 dark:text-white">Active</span></span>
              </div>
            </div>
          </div>

          {/* CENTER COLUMN: The Architectural Monolith */}
          <div className="col-span-12 lg:col-span-6 flex flex-col items-center justify-center relative px-4 lg:px-10">

            <div className="relative z-10 w-full max-w-[480px] text-center space-y-4 font-sans mb-12">
              <h1 className="text-3xl font-black text-neutral-900 dark:text-white uppercase tracking-tighter leading-[0.85] px-4 font-primary">Magento Optimisation Hub</h1>
              <div className="flex items-center justify-center gap-6">
                <div className="h-px w-8 bg-neutral-200 dark:bg-white/10" />
                <p className="text-[10px] text-neutral-500 dark:text-white/60 font-black leading-relaxed uppercase tracking-[0.25em] whitespace-nowrap font-inter">Precision Architectural Stack</p>
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
                  <span className="text-[10px] font-black text-neutral-400 dark:text-white/40 uppercase tracking-[0.5em] mb-4 leading-none indent-[0.5em] font-inter">Global score</span>
                  <div className="relative">
                    <span className="text-9xl font-black text-neutral-900 dark:text-white tracking-[-0.08em] mt-3 leading-none mb-2">99</span>
                    <span className="absolute -top-1 -right-6 text-2xl font-black text-[#F06427]">+</span>
                  </div>
                </div>

                <div className="flex flex-col items-center relative z-20 mt-2">
                  <div className="px-5 py-2 bg-[#F06427] dark:bg-[#F06427] rounded-full shadow-lg shadow-[#F06427]/20 transition-transform group-hover:scale-105 duration-500">
                    <span className="text-[11px] font-black text-white uppercase tracking-[0.2em] whitespace-nowrap font-inter">Enterprise Elite</span>
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

            <div className="mt-16 w-full max-w-[500px] grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-10 relative z-10">
              <MagentoMetricBox label="TTFB" value="42ms" status="Elite" />
              <MagentoMetricBox label="DB Delay" value="0.01ms" status="Nominal" />
              <MagentoMetricBox label="API Lock" value="0.00" status="Clear" />
            </div>
          </div>

          {/* RIGHT COLUMN: Operation Matrix */}
          <div className="col-span-12 lg:col-span-3 space-y-10">
            <div className="space-y-2 lg:text-right">
              <p className="text-[10px] uppercase font-bold text-neutral-400 dark:text-white/40 tracking-[0.4em] font-inter">Section // 02</p>
              <h2 className="text-xl font-black text-neutral-900 dark:text-white uppercase tracking-tighter font-primary">Operation Matrix</h2>
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
                  <p className="text-[10px] font-black text-[#F06427] uppercase tracking-[0.2em] leading-none mb-1 font-inter">Global infrastructure</p>
                  <p className="text-sm font-black text-neutral-900 dark:text-white uppercase tracking-widest leading-none font-inter">Security Active</p>
                </div>
                <ShieldCheck size={20} className="text-[#F06427]" />
              </div>
              <div className="space-y-4 relative z-10">
                <div className="flex justify-between items-end">
                  <span className="text-[11px] text-neutral-400 dark:text-white/40 uppercase font-black tracking-widest leading-none font-inter">Status // Sync</span>
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
          <p className="text-[10px] font-black text-neutral-900 dark:text-white uppercase tracking-widest leading-none mb-1.5 font-inter">{label}</p>
          <p className="text-[9px] text-neutral-400 dark:text-white/30 lowercase tracking-tighter leading-none font-medium font-inter">{sub}</p>
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
    <p className="text-[10px] font-black text-neutral-400 dark:text-white/30 uppercase tracking-[0.2em] mb-2 leading-none font-inter">{label}</p>
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
      <div className="w-full max-w-[1240px] min-h-[600px] lg:min-h-[800px] bg-white dark:bg-[#0c0c0e] text-neutral-500 dark:text-[#a1a1aa] relative overflow-hidden rounded-3xl lg:rounded-[40px] border border-neutral-200 dark:border-white/5 shadow-2xl flex flex-col transition-colors duration-500">

        {/* Background Grid Pattern - Static */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,currentColor_1px,transparent_1px),linear-gradient(to_bottom,currentColor_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-[0.03] dark:opacity-[0.1]" />

        {/* Top Operational Status Bar */}
        <div className="h-auto py-6 lg:py-0 lg:h-20 border-b border-neutral-200 dark:border-white/5 flex flex-col lg:flex-row items-center justify-between px-6 lg:px-10 relative z-20 bg-white/50 dark:bg-black/20 backdrop-blur-md gap-6 lg:gap-0">
          <div className="flex items-center gap-10">
            <div className="flex items-center gap-4">
              <div className="size-10 rounded-full flex items-center justify-center shadow-lg" style={{ backgroundColor: shopifyGreen }}>
                <Rocket size={20} className="text-white" />
              </div>
              <div className="flex flex-col">
                <span className="text-sm font-black text-neutral-900 dark:text-white tracking-widest uppercase mb-0.5 font-inter">Shopify Precision</span>
                <span className="text-[10px] font-bold uppercase tracking-[0.3em] font-inter" style={{ color: shopifyGreen }}>Merchant Node 01 // Online</span>
              </div>
            </div>

            <div className="hidden lg:block h-8 w-px bg-neutral-200 dark:bg-white/5" />

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

        <div className="flex-1 p-6 lg:p-10 relative z-20 flex flex-col gap-8 lg:gap-10 overflow-y-auto custom-scrollbar">

          {/* Top Row: Dual Specialized Modules */}
          <div className="grid grid-cols-12 gap-10">
            <div className="col-span-12 lg:col-span-4 space-y-6">
              <div className="space-y-1">
                <p className="text-[10px] uppercase font-bold text-neutral-400 dark:text-white/40 tracking-[0.4em] font-inter">Sector // DIAGNOSTIC</p>
                <h2 className="text-xl font-black text-neutral-900 dark:text-white uppercase tracking-tighter font-primary">Cluster Analysis</h2>
              </div>
              <div className="space-y-4">
                <ShopifyTacticalCard label="Liquid Render" value="12ms" sub="Theme Engine" icon={Zap} perc={24} color={shopifyGreen} />
                <ShopifyTacticalCard label="Storefront API" value="Elite" sub="Payload Delta" icon={Database} perc={8} color={shopifyGreen} />
                <ShopifyTacticalCard label="Asset Throughput" value="100%" sub="Global Edge" icon={Layers} perc={100} color={shopifyGreen} />
              </div>
            </div>

            <div className="col-span-12 lg:col-span-8 bg-neutral-50/50 dark:bg-white/[0.01] border border-neutral-200 dark:border-white/5 rounded-[32px] lg:rounded-[40px] p-6 lg:p-8 relative overflow-hidden flex flex-col justify-center">
              <div className="absolute top-0 right-0 p-8 hidden sm:block">
                <span className="text-[10px] font-black text-neutral-400 dark:text-white/20 uppercase tracking-[0.5em]">Architecture // View</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
                <div className="col-span-1 md:border-r border-neutral-200 dark:border-white/10 md:pr-8 space-y-6">
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
                    <span className="text-7xl lg:text-8xl font-black text-neutral-900 dark:text-white tracking-tighter mt-3 leading-none relative">
                      99
                      <span className="text-3xl absolute -top-1 -right-6 font-black" style={{ color: shopifyGreen }}>+</span>
                    </span>
                    <div className="mt-4 px-4 py-1.5 rounded-full border border-emerald-500/20 bg-emerald-500/10 flex items-center gap-2">
                      <div className="size-1.5 rounded-full bg-emerald-500" />
                      <span className="text-[10px] font-black text-emerald-500 uppercase tracking-widest">Enterprise Optimized</span>
                    </div>
                  </div>
                </div>
                <div className="col-span-1 md:border-l border-neutral-200 dark:border-white/10 md:pl-8 space-y-6">
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

            <div className="col-span-12 lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="col-span-1 sm:col-span-2 flex justify-between items-end border-b border-neutral-100 dark:border-white/5 pb-2">
                <h3 className="text-xs font-black text-neutral-900 dark:text-white uppercase tracking-[0.3em] font-primary">Operational Matrix</h3>
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
              <div className="h-full rounded-[32px] lg:rounded-[40px] border border-neutral-200 dark:border-white/5 bg-neutral-900 p-8 flex flex-col justify-between relative overflow-hidden group min-h-[160px]">
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
        <div className="h-auto py-4 lg:py-0 lg:h-12 border-t border-neutral-200 dark:border-white/5 flex flex-col lg:flex-row items-center justify-between px-6 lg:px-10 bg-neutral-50/50 dark:bg-black/40 relative z-20 gap-4 lg:gap-0">
          <div className="flex flex-wrap lg:flex-nowrap justify-center lg:justify-start gap-4 lg:gap-10">
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
          <p className="text-[10px] font-black text-neutral-900 dark:text-white uppercase tracking-widest leading-none mb-1.5 font-inter">{label}</p>
          <p className="text-[9px] text-neutral-400 dark:text-white/30 tracking-tighter leading-none font-medium font-inter">{sub}</p>
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
    <p className="text-[9px] font-black text-neutral-400 dark:text-white/20 uppercase tracking-[0.3em] mb-1 font-inter">{label}</p>
    <div className="flex items-baseline gap-2">
      <span className="text-2xl font-black text-neutral-900 dark:text-white tracking-tighter leading-none">{value}</span>
      <span className="text-[9px] font-black uppercase tracking-widest font-inter" style={{ color: color }}>{status}</span>
    </div>
  </div>
);

const ShopifyActionRow = ({ label, value, icon: Icon, color }: any) => (
  <div className="flex items-center justify-between p-4 rounded-2xl border border-neutral-100 dark:border-white/[0.02] hover:bg-neutral-100/50 dark:hover:bg-white/[0.03] transition-all cursor-default shadow-sm">
    <div className="flex items-center gap-4">
      <Icon size={14} className="text-neutral-300 dark:text-neutral-500" />
      <span className="text-[10px] font-bold text-neutral-400 dark:text-white/50 uppercase tracking-[0.1em] font-inter">{label}</span>
    </div>
    <span className="text-[11px] font-black text-neutral-900 dark:text-white uppercase tracking-widest font-inter" style={{ color: color }}>{value}</span>
  </div>
);


/* --- STANDARDS --- */

function StandardDashboard({ slug, service }: any) {

  return (
    <div className="flex items-center justify-center w-full antialiased p-0 sm:p-2 lg:p-4">
      <div className="w-full max-w-[1024px] min-h-[600px] lg:min-h-[720px] flex flex-col rounded-2xl overflow-hidden shadow-2xl border border-neutral-200 dark:border-white/5 bg-white dark:bg-[#09090b] transition-colors duration-500">

        <div className="h-auto py-4 lg:py-0 lg:h-14 border-b border-neutral-200 dark:border-white/5 flex flex-col lg:flex-row items-center justify-between px-6 bg-white/50 dark:bg-[#0c0c0e]/50 backdrop-blur-2xl z-20 transition-colors duration-500 gap-4 lg:gap-0">
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

        <div className="flex flex-col lg:flex-row flex-1 overflow-hidden">
          <div className="w-full lg:w-[220px] bg-neutral-50/50 dark:bg-black/10 flex flex-row lg:flex-col py-1 lg:py-6 border-b lg:border-b-0 lg:border-r border-neutral-200 dark:border-white/5 z-10 shrink-0 overflow-x-auto no-scrollbar">
            {MENU_ITEMS.map((item) => {
              const isActive = item.id === "performance";
              return (
                <button
                  key={item.id}
                  disabled={true}
                  className={cn(
                    "relative flex items-center gap-3 px-4 lg:px-6 py-3 transition-all text-sm text-left group pointer-events-none whitespace-nowrap",
                    isActive ? "text-neutral-900 dark:text-white font-bold" : "text-neutral-500"
                  )}
                >
                  {isActive && <motion.div layoutId="nav-active" className="absolute left-0 top-1 bottom-1 w-1 bg-neutral-900 dark:bg-white rounded-r-full hidden lg:block" />}
                  <item.icon size={20} className={cn("shrink-0", isActive ? "text-neutral-900 dark:text-white" : "text-neutral-400")} />
                  <span className="truncate flex-1 tracking-tight">{item.label}</span>
                </button>
              );
            })}
          </div>

          <div className="flex-1 flex flex-col bg-white dark:bg-[#09090b]">
            <div className="p-6 lg:p-8 flex flex-col gap-8 h-full overflow-y-auto custom-scrollbar no-scrollbar">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-2 border-b border-neutral-100 dark:border-white/5 pb-4">
                <div className="space-y-0.5">
                  <h1 className="text-2xl font-black tracking-tighter text-neutral-900 dark:text-white leading-none font-primary">
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
                    <h2 className="text-2xl font-bold text-neutral-900 dark:text-neutral-100 tracking-tight leading-none font-primary">Systems Operational</h2>
                    <p className="text-neutral-500 dark:text-neutral-400 text-[11px] leading-relaxed mt-1 opacity-80">
                      Global nodes are active. No latency issues detected.
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <MetricSquare label="ROI Boost" value="Active" rating="A" icon={TrendingUp} />
                  <MetricSquare label="Indexation" value="100%" rating="A" icon={CheckCircle2} />
                  <div className="col-span-2 bg-neutral-900 dark:bg-white border border-neutral-800 dark:border-neutral-100 rounded-[24px] px-6 py-4 flex justify-between items-center shadow-xl">
                    <h2 className="text-4xl font-black text-emerald-500 tracking-tighter leading-none font-primary">99+</h2>
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
      <p className="text-[10px] font-bold text-neutral-500 uppercase tracking-tighter leading-none font-inter">{label}</p>
      <h2 className="text-2xl font-black text-neutral-900 dark:text-neutral-100 tracking-tighter leading-none font-primary">{value}</h2>
    </div>
    <p className="text-[9px] font-bold text-neutral-400 tracking-widest uppercase mt-4 font-inter">{notes}</p>
  </div>
);

const MetricSquare = ({ label, value, rating, icon: Icon }: any) => (
  <div className="bg-white dark:bg-neutral-900 border border-neutral-100 dark:border-white/5 rounded-[24px] p-5 flex flex-col justify-between shadow-sm">
    <div className="flex justify-between items-start">
      <Icon size={16} className="text-neutral-400" />
      <span className="text-[8px] font-black w-4 h-4 flex items-center justify-center rounded border bg-emerald-500/10 text-emerald-600 border-emerald-500/20">{rating}</span>
    </div>
    <div className="mt-4">
      <p className="text-[10px] font-black uppercase text-neutral-400 mb-1 leading-none font-inter">{label}</p>
      <h3 className="text-xl font-bold text-neutral-900 dark:text-white leading-none font-primary">{value}</h3>
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
        <p className="text-[10px] font-bold text-neutral-400 uppercase tracking-widest font-inter">{label}</p>
        <div className="flex items-baseline gap-2">
          <h3 className="text-3xl font-black text-neutral-900 dark:text-white tracking-tighter leading-none font-primary">{value}</h3>
          {trend === "up" && <ArrowUpRight size={16} className="text-emerald-500" />}
          {trend === "down" && <ArrowUpRight size={16} className="text-emerald-500 rotate-90" />}
        </div>
        <p className="text-[9px] font-medium text-neutral-500 dark:text-neutral-400 opacity-60 tracking-tight font-inter">{sub}</p>
      </div>
    </div>
  );
}


/* --- WORDPRESS DASHBOARD --- */

function WordPressDashboard({ slug, service }: any) {
  return (
    <div className="flex items-center justify-center w-full p-4 sm:p-6 lg:p-8">
      <Card className="w-full max-w-[1240px] shadow-sm bg-white dark:bg-card overflow-hidden">
        {/* Header */}
        <div className="border-b bg-muted/30 px-6 py-6 lg:px-10 lg:py-8 flex flex-col items-center justify-center text-center gap-6">
          <div className="flex flex-col items-center gap-4">
            <div>
              <h1 className="text-2xl font-bold tracking-tight text-foreground">WordPress Performance Hub</h1>
            </div>
          </div>

        </div>

        <div className="p-6 lg:p-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">

          {/* LEFT COLUMN: Diagnostic Cluster */}
          <div className="col-span-1 lg:col-span-3 space-y-6">
            <div>
              <p className="text-xs font-semibold text-muted-foreground uppercase tracking-widest mb-1 font-inter">Sector 01</p>
              <h2 className="text-lg font-bold tracking-tight">Diagnostic Cluster</h2>
            </div>

            <div className="space-y-3">
              <DiagnosticCard label="PHP Pulse" value="4ms" status="WP Hub" icon={Zap} />
              <DiagnosticCard label="Query Density" value="Clean" status="Vitals / 101" icon={Database} />
              <DiagnosticCard label="Asset Tunnel" value="Elite" status="Active" icon={Layers} />
            </div>

            <Card className="bg-sky-50/50 dark:bg-sky-950/20 border-sky-100 dark:border-sky-900/30 overflow-hidden shadow-none">
              <CardContent className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <p className="text-xs font-semibold text-sky-600 dark:text-sky-400 uppercase tracking-widest mb-1 font-inter">Data Synthesis</p>
                    <p className="font-bold tracking-tight">Crawl Velocity</p>
                  </div>
                  <Target size={18} className="text-sky-600 dark:text-sky-400" />
                </div>
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-1 sm:gap-0 pt-4 border-t border-sky-100 dark:border-sky-900/30">
                  <span className="text-xs font-medium text-muted-foreground font-inter">Yield Delta</span>
                  <span className="text-sm font-bold text-foreground">+24.8% Efficiency</span>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* CENTER COLUMN: Hero Metrics */}
          <div className="col-span-1 lg:col-span-6 flex flex-col items-center justify-center">
            <div className="text-center mb-8">
              <h2 className="text-2xl lg:text-3xl font-bold tracking-tighter mb-2 font-primary">Hybrid Intelligence Core</h2>
              <p className="text-sm text-muted-foreground font-inter"><TextHighlighter highlightColor="rgba(14, 165, 233, 0.15)">Advanced WordPress optimization</TextHighlighter> sequence active</p>
            </div>

            <Card className="w-full max-w-[280px] sm:max-w-sm mx-auto aspect-square flex flex-col items-center justify-center relative overflow-hidden shadow-none border-dashed border-2 bg-slate-50 dark:bg-muted/10">
              <div className="relative z-10 flex flex-col items-center text-center p-8">
                <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-4 font-inter">Discovery Index</p>
                <div className="flex items-start justify-center gap-1 mb-6">
                  <span className="text-7xl lg:text-8xl font-black tracking-tighter text-foreground">99</span>
                  <span className="text-3xl font-bold text-sky-600">+</span>
                </div>
                <StaggerButton className="bg-sky-600 hover:bg-sky-700 text-white shadow-none uppercase tracking-widest px-4 py-1.5 text-xs font-bold font-inter rounded-lg">Mastery Elite</StaggerButton>
              </div>
            </Card>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full mt-8">
              <MetricBox label="LCP Delta" value="0.8s" status="Elite" />
              <MetricBox label="DB Sync" value="Nominal" status="Golden" />
              <MetricBox label="SEO Core" value="Active" status="Sync" />
            </div>
          </div>

          {/* RIGHT COLUMN: Operation Matrix */}
          <div className="col-span-1 lg:col-span-3 space-y-6">
            <div className="text-left lg:text-right">
              <p className="text-xs font-semibold text-muted-foreground uppercase tracking-widest mb-1 font-inter">Sector 02</p>
              <h2 className="text-lg font-bold tracking-tight">Operation Matrix</h2>
            </div>

            <div className="space-y-3">
              <OperationRow label="Edge Sync" value="NOMINAL" icon={Server} />
              <OperationRow label="CWR Hardening" value="SECURE" icon={ShieldCheck} />
              <OperationRow label="Semantic Core" value="ACTIVE" icon={Layers} />
              <OperationRow label="Asset Tunnel" value="ELITE" icon={Zap} />
              <OperationRow label="WAF Logic" value="TUNED" icon={Code2} />
            </div>

            <Card className="mt-auto shadow-none">
              <CardContent className="p-6">
                <div className="flex justify-between items-start mb-6">
                  <p className="text-xs font-semibold text-muted-foreground uppercase tracking-widest font-inter">Global Defense</p>
                  <ShieldCheck size={18} className="text-muted-foreground" />
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between items-end mb-2">
                    <span className="text-xs font-medium text-muted-foreground font-inter">System Integrity</span>
                    <span className="text-lg font-bold tracking-tight">100.0%</span>
                  </div>
                  <div className="h-1.5 w-full bg-muted rounded-full overflow-hidden">
                    <motion.div initial={{ width: 0 }} whileInView={{ width: "100%" }} viewport={{ once: true }} transition={{ duration: 1.5, ease: "easeOut" }} className="h-full bg-sky-600" />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* BOTTOM COLUMN: Impact Matrix */}
          <div className="col-span-1 lg:col-span-12 mt-4 space-y-6">
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-end gap-4 border-t pt-8">
              <div>
                <p className="text-xs font-semibold text-muted-foreground uppercase tracking-widest mb-1 font-inter">Strategic Advantage</p>
                <h2 className="text-xl font-bold tracking-tight">Impact Analysis Matrix</h2>
              </div>
              <Badge variant="secondary" className="bg-transparent sm:bg-emerald-500/10 text-emerald-600 hover:bg-transparent sm:hover:bg-emerald-500/20 shadow-none gap-1.5 px-0 sm:px-3 py-1 text-xs border-none sm:border sm:border-emerald-500/20 font-inter">
                <div className="size-1.5 rounded-full bg-emerald-500" />
                All Metrics Verified
              </Badge>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <ImpactCard
                title="Performance Score"
                subtitle="Verified 90+"
                accent="PageSpeed Optimized"
                bullets={["90+ Mobile/Desktop", "Grade A GTmetrix", "Search Visiblity Up"]}
                icon={Zap}
              />
              <ImpactCard
                title="Site Integrity"
                subtitle="Safe // Verified"
                accent="Structure Preserved"
                bullets={["No Design Changes", "Content Unaltered", "Tested & Verified"]}
                icon={ShieldCheck}
              />
              <ImpactCard
                title="Business Yield"
                subtitle="Better Results"
                accent="Revenue Catalyst"
                bullets={["Lower Bounce Rate", "Higher Engagement", "Maximized Conversions"]}
                icon={TrendingUp}
              />
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}

// Minimal Shadcn-based Custom Components
const DiagnosticCard = ({ label, value, status, icon: Icon }: any) => (
  <Card className="shadow-none group hover:border-foreground/20 transition-colors">
    <CardContent className="p-4 flex items-center justify-between">
      <div className="flex items-center gap-4">
        <div className="size-8 rounded-md bg-muted flex items-center justify-center text-muted-foreground group-hover:bg-foreground group-hover:text-background transition-colors">
          <Icon size={16} />
        </div>
        <div className="space-y-0.5">
          <p className="text-[11px] font-semibold uppercase tracking-wider text-foreground leading-none font-inter">{label}</p>
          <p className="text-[10px] text-muted-foreground font-medium font-inter">{status}</p>
        </div>
      </div>
      <span className="text-sm font-bold">{value}</span>
    </CardContent>
  </Card>
);

const MetricBox = ({ label, value, status }: any) => (
  <Card className="shadow-none">
    <CardContent className="p-4 flex flex-col items-center justify-center text-center h-full">
      <span className="text-xl font-bold tracking-tight mb-2">{value}</span>
      <p className="text-[10px] font-semibold text-muted-foreground uppercase tracking-widest mb-3 font-inter">{label}</p>
      <Badge variant="outline" className="text-[10px] shadow-none uppercase px-2 py-0.5 font-inter">{status}</Badge>
    </CardContent>
  </Card>
);

const OperationRow = ({ label, value, icon: Icon }: any) => (
  <div className="flex items-center justify-between p-3 rounded-xl border bg-card hover:bg-muted/50 transition-colors">
    <div className="flex items-center gap-3">
      <Icon size={14} className="text-muted-foreground" />
      <span className="text-[11px] font-semibold text-muted-foreground uppercase tracking-wider font-inter">{label}</span>
    </div>
    <span className="text-[10px] font-bold uppercase text-foreground">{value}</span>
  </div>
);

const ImpactCard = ({ title, subtitle, accent, bullets, icon: Icon }: any) => (
  <Card className="shadow-none hover:shadow-md transition-shadow">
    <CardContent className="p-6">
      <div className="flex flex-col gap-6">
        <div className="flex items-center gap-3">
          <div className="size-8 rounded-lg bg-sky-50 dark:bg-sky-950 flex items-center justify-center text-sky-600">
            <Icon size={16} />
          </div>
          <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground font-inter">{title}</p>
        </div>

        <div>
          <h3 className="text-2xl font-bold tracking-tighter mb-1.5">{subtitle}</h3>
          <Badge variant="secondary" className="shadow-none font-medium font-inter">{accent}</Badge>
        </div>

        <div className="space-y-2 pt-4 border-t">
          {bullets.map((b: string, i: number) => (
            <div key={i} className="flex items-center gap-2">
              <div className="size-1 rounded-full bg-sky-600 shrink-0" />
              <span className="text-xs font-medium text-muted-foreground font-inter">{b}</span>
            </div>
          ))}
        </div>
      </div>
    </CardContent>
  </Card>
);
