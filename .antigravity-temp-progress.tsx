"use client";

import React, { useState, useMemo } from "react";
import { motion, AnimatePresence, LayoutGroup } from "motion/react";
import {
  Users,
  ArrowUpRight,
  Search,
  Check,
  BarChart2,
  Info,
  Database,
  Rocket,
  Globe,
  FileText,
  TrendingUp,
} from "lucide-react";
import { cn } from "@/lib/utils";

interface TabConfig {
  id: string;
  label: string;
  icon: React.ElementType;
  badge?: string;
  header: string;
  description: string;
}

const TABS: TabConfig[] = [
  {
    id: "performance",
    label: "Performance",
    icon: Rocket,
    header: "Core Web Vitals",
    description: "Real-time performance metrics.",
  },
  {
    id: "seo",
    label: "SEO Health",
    icon: Globe,
    header: "Technical Audit",
    description: "Comprehensive site health check.",
    badge: "100%",
  },
  {
    id: "traffic",
    label: "Traffic",
    icon: TrendingUp,
    header: "Growth Analytics",
    description: "Organic traffic and ranking trends.",
  },
  {
    id: "reports",
    label: "Reports",
    icon: FileText,
    header: "Audit Logs",
    description: "Detailed performance reports.",
    badge: "New",
  },
];

export function ProvenSection() {
  const [activeTab, setActiveTab] = useState(TABS[0]);

  const content = useMemo(() => {
    switch (activeTab.id) {
      case "performance":
        return <PerformanceDashboard />;
      case "seo":
        return <SeoDashboard />;
      case "traffic":
        return <TrafficDashboard />;
      case "reports":
        return <ReportsDashboard />;
      default:
        return null;
    }
  }, [activeTab.id]);

  return (
    <section className="py-24 bg-zinc-50 dark:bg-zinc-950 font-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
            Data-Driven Results
          </h2>
          <p className="text-lg md:text-xl text-zinc-600 dark:text-zinc-400 font-inter font-medium">
            See exactly how Seospeeder transforms your site&apos;s performance and search visibility.
          </p>
        </div>

        <div className="w-full max-w-5xl mx-auto bg-white dark:bg-zinc-900 border-2 border-zinc-200 dark:border-zinc-800 rounded-2xl shadow-sm overflow-hidden flex flex-col md:flex-row">
          {/* Sidebar */}
          <div className="w-full md:w-64 bg-zinc-50/50 dark:bg-zinc-900/50 border-b-2 md:border-b-0 md:border-r-2 border-zinc-200 dark:border-zinc-800 p-4 flex flex-col gap-2">
            <div className="mb-4 px-2 hidden md:block">
               <span className="text-xs font-semibold text-zinc-400 uppercase tracking-wider">
                  Menu
               </span>
            </div>
            
            <LayoutGroup>
                {TABS.map((tab) => {
                  const isActive = activeTab.id === tab.id;
                  
                  return (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab)}
                      className={cn(
                        "relative flex items-center gap-3 p-3 rounded-xl text-sm font-medium transition-all cursor-pointer text-left outline-none focus-visible:ring-2 focus-visible:ring-primary/20",
                        isActive
                          ? "text-zinc-900 dark:text-zinc-100"
                          : "text-zinc-500 dark:text-zinc-400 hover:text-zinc-700 dark:hover:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-800/50",
                      )}
                    >
                      {isActive && (
                        <motion.div
                          layoutId="activeTab"
                          className="absolute inset-0 bg-white dark:bg-zinc-800 shadow-sm border-2 border-zinc-200 dark:border-zinc-700 rounded-xl"
                          initial={false}
                          transition={{ type: "spring", stiffness: 300, damping: 30 }}
                        />
                      )}
                      
                      <tab.icon 
                        size={18} 
                        className={cn("relative z-10 shrink-0", isActive ? "text-primary" : "text-zinc-400")} 
                      />
                      <span className="relative z-10 truncate">{tab.label}</span>
                      
                      {tab.badge && (
                        <span className={cn(
                            "relative z-10 ml-auto text-[10px] font-semibold px-2 py-0.5 rounded-full",
                             isActive 
                                ? "bg-primary/10 text-primary" 
                                : "bg-zinc-200 dark:bg-zinc-800 text-zinc-500"
                        )}>
                            {tab.badge}
                        </span>
                      )}
                    </button>
                  );
                })}
            </LayoutGroup>
          </div>

          {/* Content Area */}
          <div className="flex-1 p-6 md:p-8 bg-white dark:bg-zinc-900 relative min-h-[400px]">
             <header className="mb-8">
                <h3 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100 flex items-center gap-2">
                    {activeTab.header}
                </h3>
                <p className="text-sm text-zinc-500 dark:text-zinc-400 mt-1 font-inter font-medium">
                    {activeTab.description}
                </p>
             </header>

            <AnimatePresence mode="wait">
                <motion.div
                    key={activeTab.id}
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -10 }}
                    transition={{ duration: 0.2 }}
                    className="h-full"
                >
                    {content}
                </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

const PerformanceDashboard = () => (
  <div className="flex flex-col gap-3 h-full">
    <div className="relative p-3.5 rounded-xl border border-border/40 bg-linear-to-br from-background to-muted/20 overflow-hidden">
      <div className="flex flex-col gap-2 relative z-10">
        <div className="flex items-center justify-between">
          <span className="text-[9px] font-medium text-muted-foreground">
            LCP (Largest Contentful Paint)
          </span>
          <ArrowUpRight
            size={12}
            className="text-primary"
          />
        </div>
        <div className="flex flex-col gap-0.5">
          <span className="text-xl font-medium tracking-tight text-foreground">
            0.8s
          </span>
          <div className="w-full h-1 bg-muted rounded-full overflow-hidden mt-1">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "92%" }}
              className="h-full bg-green-500 rounded-full"
            />
          </div>
        </div>
        <span className="text-[9px] text-muted-foreground font-inter font-medium">
          Top 1% of sites globally
        </span>
      </div>

    </div>

    <div className="grid grid-cols-2 gap-2">
      <div className="p-3 rounded-xl border border-border/40 bg-background/50 flex items-center justify-between">
        <div className="flex flex-col">
          <span className="text-[10px] font-medium text-foreground">0.01</span>
          <span className="text-[8px] text-muted-foreground uppercase font-semibold font-inter">
            CLS
          </span>
        </div>
        <Info size={14} className="opacity-20 text-green-500" />
      </div>
      <div className="p-3 rounded-xl border border-border/40 bg-background/50 flex items-center justify-between">
        <div className="flex flex-col">
          <span className="text-[10px] font-medium text-foreground">12ms</span>
          <span className="text-[8px] text-muted-foreground uppercase font-semibold font-inter">
            INP
          </span>
        </div>
        <Info
          size={14}
          className="opacity-20 text-green-500"
        />
      </div>
    </div>
  </div>
);

const SeoDashboard = () => (
  <div className="flex flex-col h-full not-prose">
    <div className="rounded-xl border border-border/40 overflow-hidden flex flex-col h-full bg-background/50">
      <div className="bg-muted/30 px-3 py-2 border-b border-border/40 flex items-center justify-between">
        <span className="text-[9px] font-semibold text-muted-foreground uppercase tracking-wider">
          Health Checks
        </span>
        <div className="flex items-center gap-1.5 px-2 py-1 rounded-md bg-emerald-100 dark:bg-emerald-500/20 border border-emerald-200 dark:border-emerald-500/30">
          <Check
            size={12}
            className="text-emerald-600 dark:text-emerald-400"
          />
          <span className="text-[10px] font-semibold text-emerald-700 dark:text-emerald-300 font-inter">
            All Passed
          </span>
        </div>
      </div>
      <div className="p-1 flex flex-col gap-0.5">
        {[
          {
            name: "Mobile Usability",
            status: "Passed",
            color: "bg-green-400",
          },
          {
            name: "HTTPS Security",
            status: "Passed",
            color: "bg-green-400",
          },
          {
            name: "Structured Data",
            status: "Valid",
            color: "bg-green-400",
          },
          {
            name: "Canonical Tags",
            status: "Valid",
            color: "bg-green-400",
          },
        ].map((check, i) => (
          <div
            key={i}
            className="flex items-center gap-3 p-2 rounded-lg hover:bg-muted/30 transition-colors group"
          >
            <div className="w-6 h-6 rounded-full bg-muted border border-border/40 flex items-center justify-center relative">
              <Search
                size={10}
                className="text-muted-foreground"
              />
              <div
                className={cn(
                  "absolute -bottom-0.5 -right-0.5 w-2 h-2 rounded-full border border-background",
                  check.color,
                )}
              />
            </div>
            <div className="flex flex-col min-w-0 flex-1">
              <span className="text-[10px] font-medium text-foreground truncate">
                {check.name}
              </span>
              <span className="text-[8px] text-muted-foreground truncate font-inter font-medium">
                {check.status}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

const TrafficDashboard = () => (
  <div className="flex flex-col gap-3 h-full">
    <div className="grid grid-cols-2 gap-3">
      {[
        {
          title: "Organic Users",
          val: "+124%",
          icon: Users,
        },
        {
          title: "Impressions",
          val: "+89%",
          icon: Search,
        },
      ].map((card, i) => (
        <div
          key={i}
          className="p-3.5 rounded-xl border border-border/40 bg-background/50 flex flex-col gap-3 relative overflow-hidden group"
        >
          <div className="flex flex-col gap-1 z-10">
            <span className="text-[12px] font-medium text-foreground leading-tight">
              {card.title}
            </span>
            <span className="text-[9px] text-green-600 font-semibold leading-tight">
              {card.val}
            </span>
          </div>
          <card.icon size={16} className="absolute right-2 bottom-2 opacity-10" />
        </div>
      ))}
    </div>

    <div className="mt-auto p-3 rounded-xl bg-muted/20 border border-border/30 flex items-center justify-between">
      <div className="flex items-center gap-2">
        <div className="p-1 px-1.5 rounded-md bg-background border border-border/40">
          <Info
            size={10}
            className="text-muted-foreground"
          />
        </div>
        <span className="text-[9px] text-muted-foreground font-semibold font-inter">
          Ranking for 500+ keywords
        </span>
      </div>
    </div>
  </div>
);

const ReportsDashboard = () => (
  <div className="flex flex-col gap-3 h-full overflow-hidden">
    <div className="flex-1 rounded-xl border border-border/40 flex flex-col bg-background/50 overflow-hidden">
      <div className="bg-muted/30 px-3 py-2 border-b border-border/40 flex items-center justify-between">
        <span className="text-[9px] font-semibold text-muted-foreground uppercase tracking-wider">
          Recent Exports
        </span>
        <Database
          size={12}
          className="text-muted-foreground/30"
        />
      </div>
      <div className="flex-1 p-1 overflow-y-auto scrollbar-hide">
        {[
          {
            file: "core_vitals_report.pdf",
            size: "1.2 MB",
            type: "PDF",
            icon: Rocket,
          },
          {
            file: "seo_audit_v2.json",
            size: "450 KB",
            type: "JSON",
            icon: Globe,
          },
          {
            file: "backlink_profile.csv",
            size: "2.8 MB",
            type: "CSV",
            icon: TrendingUp,
          },
          {
            file: "competitor_analysis.pdf",
            size: "5.1 MB",
            type: "PDF",
            icon: BarChart2,
          },
        ].map((item, i) => (
          <div
            key={i}
            className="flex items-center gap-2.5 p-2 rounded-lg hover:bg-muted/30 transition-colors cursor-pointer group"
          >
            <div className="w-6 h-6 rounded-md bg-muted/50 border border-border/40 flex items-center justify-center text-muted-foreground/60 group-hover:text-primary group-hover:bg-primary/5 transition-colors">
              <item.icon size={12} />
            </div>
            <div className="flex flex-col min-w-0 flex-1">
              <span className="text-[10px] font-medium text-foreground truncate">
                {item.file}
              </span>
              <span className="text-[8px] text-muted-foreground tabular-nums uppercase font-inter font-medium">
                {item.size} • {item.type}
              </span>
            </div>
            <ArrowUpRight
              size={10}
              className="text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity"
            />
          </div>
        ))}
      </div>
    </div>
  </div>
);
