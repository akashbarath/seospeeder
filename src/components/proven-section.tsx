'use client';

import React, { useState, useMemo, useRef, useEffect } from "react";
import { motion, AnimatePresence, LayoutGroup, useInView, useMotionValue, useSpring } from "framer-motion";
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
  Activity,
  Cpu,
  Zap,
  Trophy,
  Target,
  ShieldCheck,
} from "lucide-react";
import { cn } from "@/lib/utils";

interface TabConfig {
  id: string;
  label: string;
  icon: React.ElementType;
  badge?: string;
  header: string;
  description: string;
  group: "analytics" | "metrics";
}

const TABS: TabConfig[] = [
  // Analytics Group
  {
    id: "performance",
    label: "Performance",
    icon: Rocket,
    header: "Core Web Vitals",
    description: "Real-time performance metrics across your entire site.",
    group: "analytics",
  },
  {
    id: "seo",
    label: "SEO Health",
    icon: Globe,
    header: "Technical Audit",
    description: "Comprehensive automated site health check.",
    badge: "100%",
    group: "analytics",
  },
  {
    id: "traffic",
    label: "Traffic",
    icon: TrendingUp,
    header: "Growth Analytics",
    description: "Organic traffic and ranking trends.",
    group: "analytics",
  },
  {
    id: "reports",
    label: "Reports",
    icon: FileText,
    header: "Audit Logs",
    description: "Detailed performance reports and exports.",
    badge: "New",
    group: "analytics",
  },
  // Metrics Group
  {
    id: "pagespeed",
    label: "PageSpeed",
    icon: Zap,
    badge: "99+",
    header: "PageSpeed Score",
    description: "Google-verified performance benchmark.",
    group: "metrics",
  },
  {
    id: "roi",
    label: "ROI Boost",
    icon: Trophy,
    header: "Revenue Multiplier",
    description: "Speed-driven business growth impact.",
    group: "metrics",
  },
  {
    id: "indexation",
    label: "Indexation",
    icon: Search,
    badge: "100%",
    header: "Indexation Pipeline",
    description: "Priority crawl and indexation status.",
    group: "metrics",
  },
  {
    id: "monitoring",
    label: "Monitoring",
    icon: ShieldCheck,
    badge: "24/7",
    header: "Always-On Monitoring",
    description: "Round-the-clock performance guard.",
    group: "metrics",
  },
];

const dashboardVariants = {
  hidden: { opacity: 0, y: 10, scale: 0.98, filter: "blur(4px)" },
  visible: { 
    opacity: 1, y: 0, scale: 1, filter: "blur(0px)",
    transition: { duration: 0.4, ease: [0.23, 1, 0.32, 1], staggerChildren: 0.08 }
  },
  exit: { opacity: 0, scale: 0.98, filter: "blur(4px)", transition: { duration: 0.2 } }
};

const itemVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0 }
};

// Animated number for metric tabs
function AnimatedValue({ value, inView }: { value: string; inView: boolean }) {
  const ref = useRef<HTMLSpanElement>(null);
  
  // Check if the value can be meaningfully animated (simple number with optional suffix)
  const match = value.match(/^([0-9.]+)(.*)$/);
  const isAnimatable = match !== null && !value.includes('/');
  
  const numericValue = isAnimatable ? parseFloat(match![1]) : 0;
  const suffix = isAnimatable ? match![2] : '';
  const hasDecimal = isAnimatable && match![1].includes('.');
  const decimals = hasDecimal ? 1 : 0;
  const motionVal = useMotionValue(0);
  const springVal = useSpring(motionVal, { damping: 30, stiffness: 80 });

  useEffect(() => {
    if (inView && isAnimatable) motionVal.set(numericValue);
  }, [inView, numericValue, motionVal, isAnimatable]);

  useEffect(() => {
    if (!isAnimatable) return;
    const unsub = springVal.on('change', (latest) => {
      if (ref.current) {
        ref.current.textContent = latest.toFixed(decimals) + suffix;
      }
    });
    return () => unsub();
  }, [springVal, decimals, suffix, isAnimatable]);

  if (!isAnimatable) return <span>{value}</span>;
  return <span ref={ref}>0{suffix}</span>;
}

// Metric data for the "metrics" group tabs
const METRIC_DATA: Record<string, { value: string; description: string }> = {
  pagespeed: {
    value: "99+",
    description: "We literally make your site load in the blink of an eye. Google loves fast sites, and we make sure yours passes every Core Web Vitals test with flying colours so you can easily grab those top search spots.",
  },
  roi: {
    value: "3.5x",
    description: "Think of speed as the secret sauce for your bottom line. When your site feels snappy, people actually stick around, read your stuff, and buy what you're selling. We help you turn site speed into real business growth.",
  },
  indexation: {
    value: "100%",
    description: "There's nothing worse than publishing great content that Google never finds. We hook up a priority pipeline straight to search engines, so your new pages get scooped up and ranked the second they go live.",
  },
  monitoring: {
    value: "24/7",
    description: "We're your website's personal bodyguard. We monitor your performance around the clock and alert you if anything drops, so you never have to worry about unnoticed speed issues hurting your rankings.",
  },
};

export function ProvenSection() {
  const [activeTab, setActiveTab] = useState(TABS[0]);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const analyticsGroup = TABS.filter(t => t.group === "analytics");
  const metricsGroup = TABS.filter(t => t.group === "metrics");

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
        // Metric tabs use the generic MetricPanel
        const data = METRIC_DATA[activeTab.id];
        if (data) return <MetricPanel tab={activeTab} data={data} inView={isInView} />;
        return null;
    }
  }, [activeTab, isInView]);

  return (
    <section ref={sectionRef} className="py-20 md:py-32 bg-zinc-50 dark:bg-zinc-950 font-primary relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-zinc-200 dark:via-zinc-800 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto space-y-4 mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-black tracking-tight text-zinc-900 dark:text-zinc-50 leading-[1.05]">
            Data-Driven Results
          </h2>
          <p className="text-lg md:text-xl text-zinc-500 dark:text-zinc-400 font-inter font-medium leading-relaxed max-w-2xl mx-auto">
            See exactly how Seospeeder transforms your site&apos;s performance and search visibility with precision analytics.
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-full max-w-5xl mx-auto bg-white dark:bg-zinc-900 border-2 border-zinc-200 dark:border-zinc-800 rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.05)] dark:shadow-[0_20px_50px_rgba(0,0,0,0.3)] overflow-hidden flex flex-col md:flex-row min-h-[520px]"
        >
          {/* Sidebar */}
          <div className="w-full md:w-72 bg-zinc-50/50 dark:bg-zinc-900/50 border-b-2 md:border-b-0 md:border-r-2 border-zinc-200 dark:border-zinc-800 p-6 flex flex-col gap-2 overflow-y-auto">
            <LayoutGroup>
              {/* Analytics Group */}
              <div className="mb-1 px-2 hidden md:flex items-center gap-2">
                <Cpu size={12} className="text-zinc-400" />
                <span className="text-[9px] font-bold text-zinc-400 uppercase tracking-[0.2em]">
                  Analytics
                </span>
              </div>
              <div className="flex flex-col gap-1">
                {analyticsGroup.map((tab) => (
                  <TabButton key={tab.id} tab={tab} activeTab={activeTab} onSelect={setActiveTab} />
                ))}
              </div>

              {/* Divider */}
              <div className="my-3 h-px bg-zinc-200 dark:bg-zinc-800" />

              {/* Metrics Group */}
              <div className="mb-1 px-2 hidden md:flex items-center gap-2">
                <Activity size={12} className="text-zinc-400" />
                <span className="text-[9px] font-bold text-zinc-400 uppercase tracking-[0.2em]">
                  Speed Metrics
                </span>
              </div>
              <div className="flex flex-col gap-1">
                {metricsGroup.map((tab) => (
                  <TabButton key={tab.id} tab={tab} activeTab={activeTab} onSelect={setActiveTab} />
                ))}
              </div>
            </LayoutGroup>

            {/* Status Module */}
            <div className="mt-auto hidden md:block p-4 rounded-2xl bg-zinc-900/[0.03] dark:bg-zinc-100/[0.03] border border-dashed border-zinc-200 dark:border-zinc-800">
              <div className="flex items-center gap-2 mb-2">
                <Activity size={12} className="text-zinc-400" />
                <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-tighter">Live Status</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="size-1.5 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-[11px] font-medium text-zinc-600 dark:text-zinc-400">All Systems Operational</span>
              </div>
            </div>
          </div>

          {/* Content Area */}
          <div className="flex-1 p-8 md:p-12 bg-white dark:bg-zinc-900 relative flex flex-col">
            <header className="mb-10 flex flex-col gap-2">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab.id}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 10 }}
                  transition={{ duration: 0.3 }}
                >
                  <h3 className="text-2xl font-black text-zinc-900 dark:text-zinc-100 tracking-tight leading-none">
                    {activeTab.header}
                  </h3>
                  <p className="text-[15px] text-zinc-500 dark:text-zinc-400 mt-2 font-inter font-medium opacity-80">
                    {activeTab.description}
                  </p>
                </motion.div>
              </AnimatePresence>
            </header>

            <div className="flex-1 relative">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab.id}
                  variants={dashboardVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  className="h-full"
                >
                  {content}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ─── Reusable Sidebar Tab Button ─── */
function TabButton({ tab, activeTab, onSelect }: { tab: TabConfig; activeTab: TabConfig; onSelect: (t: TabConfig) => void }) {
  const isActive = activeTab.id === tab.id;
  return (
    <button
      onClick={() => onSelect(tab)}
      className={cn(
        "relative flex items-center gap-3 p-3 rounded-2xl text-[13px] font-bold transition-all cursor-pointer text-left outline-none group",
        isActive
          ? "text-zinc-900 dark:text-zinc-100"
          : "text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-200"
      )}
    >
      {isActive && (
        <motion.div
          layoutId="activeTabPill"
          className="absolute inset-0 bg-white dark:bg-zinc-800 shadow-[0_4px_12px_rgba(0,0,0,0.05)] border-2 border-zinc-200 dark:border-zinc-700 rounded-2xl"
          initial={false}
          transition={{ type: "spring", stiffness: 350, damping: 30 }}
        />
      )}

      <div className={cn(
        "relative z-10 size-7 rounded-xl flex items-center justify-center border-2 transition-all duration-300",
        isActive
          ? "bg-zinc-900 text-white border-zinc-900 shadow-lg shadow-zinc-900/20"
          : "bg-muted text-zinc-400 border-transparent group-hover:scale-110"
      )}>
        <tab.icon size={14} />
      </div>

      <span className="relative z-10 truncate">{tab.label}</span>

      {tab.badge && (
        <motion.span
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          className={cn(
            "relative z-10 ml-auto text-[9px] font-black px-2 py-0.5 rounded-full tracking-wider shrink-0",
            isActive
              ? "bg-zinc-900 text-white dark:bg-zinc-100 dark:text-black"
              : "bg-zinc-200 dark:bg-zinc-800 text-zinc-500"
          )}
        >
          {tab.badge}
        </motion.span>
      )}
    </button>
  );
}

/* ─── Analytics Dashboards ─── */

const PerformanceDashboard = () => (
  <div className="flex flex-col gap-4 h-full">
    <motion.div variants={itemVariants} className="relative p-6 rounded-3xl border-2 border-zinc-100 dark:border-zinc-800/50 bg-zinc-50/50 dark:bg-zinc-900/50 overflow-hidden group">
      <div className="flex flex-col gap-4 relative z-10">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="size-8 rounded-full bg-emerald-500/10 flex items-center justify-center">
              <Rocket size={14} className="text-emerald-500" />
            </div>
            <span className="text-xs font-bold text-zinc-400 uppercase tracking-widest">
              LCP (Largest Contentful Paint)
            </span>
          </div>
          <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20">
            <Check size={12} className="text-emerald-500" strokeWidth={3} />
            <span className="text-[10px] font-black text-emerald-600 dark:text-emerald-400 uppercase tracking-wider">Passing</span>
          </div>
        </div>
        <div className="flex flex-col gap-1">
          <span className="text-5xl font-black tracking-tighter text-zinc-900 dark:text-zinc-50 leading-none">
            0.8s
          </span>
          <div className="w-full h-2.5 bg-zinc-200 dark:bg-zinc-800 rounded-full overflow-hidden mt-4">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "92%" }}
              transition={{ duration: 1.5, ease: "circOut" }}
              className="h-full bg-emerald-500 rounded-full relative"
            >
              <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.3),transparent)] animate-[shimmer_2s_infinite]" />
            </motion.div>
          </div>
        </div>
        <div className="flex items-center gap-2 mt-1">
          <div className="size-1.5 rounded-full bg-emerald-500" />
          <span className="text-[11px] text-zinc-500 dark:text-zinc-400 font-bold uppercase tracking-wider">
            Top 1% of sites globally
          </span>
        </div>
      </div>
    </motion.div>

    <div className="grid grid-cols-2 gap-4">
      {[
        { val: "0.01", label: "CLS", desc: "Stable Layout" },
        { val: "12ms", label: "INP", desc: "Ultra Responsive" }
      ].map((card, i) => (
        <motion.div 
          key={i}
          variants={itemVariants}
          whileHover={{ y: -5 }}
          className="p-5 rounded-3xl border-2 border-zinc-100 dark:border-zinc-800/50 bg-white dark:bg-zinc-900 flex flex-col gap-3 transition-shadow hover:shadow-xl hover:shadow-black/5"
        >
          <div className="flex items-center justify-between">
            <span className="text-[10px] font-black text-zinc-400 uppercase tracking-[0.2em]">
              {card.label}
            </span>
            <div className="size-5 rounded-md bg-emerald-500/10 flex items-center justify-center">
              <Check size={10} className="text-emerald-500" />
            </div>
          </div>
          <div className="flex flex-col">
            <span className="text-2xl font-black text-zinc-900 dark:text-zinc-50 tracking-tighter leading-none">
              {card.val}
            </span>
            <span className="text-[10px] text-zinc-500 mt-1 font-bold">{card.desc}</span>
          </div>
        </motion.div>
      ))}
    </div>
  </div>
);

const SeoDashboard = () => (
  <div className="flex flex-col h-full not-prose gap-4">
    <div className="rounded-3xl border-2 border-zinc-100 dark:border-zinc-800/50 overflow-hidden flex flex-col h-full bg-zinc-50/50 dark:bg-zinc-900/50">
      <div className="px-5 py-4 border-b border-zinc-100 dark:border-zinc-800/50 flex items-center justify-between">
        <span className="text-[10px] font-black text-zinc-400 uppercase tracking-[0.2em]">
          Automated Health Checks
        </span>
        <div className="flex items-center gap-2 px-2.5 py-1 rounded-full bg-emerald-500 text-white text-[9px] font-black uppercase tracking-tighter">
          <Check size={10} strokeWidth={3} />
          Optimized
        </div>
      </div>
      <div className="p-3 flex flex-col gap-1.5">
        {[
          { name: "Mobile Usability", status: "Perfect Score", icon: Search },
          { name: "HTTPS Security", status: "Encryption Active", icon: Globe },
          { name: "Structured Data", status: "Schema Validated", icon: Database },
          { name: "Canonical Tags", status: "Correctly Routed", icon: Activity },
        ].map((check, i) => (
          <motion.div
            key={i}
            variants={itemVariants}
            whileHover={{ x: 5 }}
            className="flex items-center gap-4 p-3 rounded-2xl bg-white dark:bg-zinc-800/50 border border-zinc-100 dark:border-zinc-700/50 shadow-sm transition-all"
          >
            <div className="size-9 rounded-xl bg-zinc-50 dark:bg-zinc-700 flex items-center justify-center text-zinc-400 group">
              <check.icon size={16} className="group-hover:text-emerald-500 transition-colors" />
            </div>
            <div className="flex flex-col min-w-0 flex-1">
              <span className="text-[12px] font-bold text-zinc-900 dark:text-zinc-50 truncate">
                {check.name}
              </span>
              <span className="text-[10px] text-emerald-600 dark:text-emerald-400 font-bold truncate tracking-tight">
                {check.status}
              </span>
            </div>
            <div className="size-2 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.5)]" />
          </motion.div>
        ))}
      </div>
    </div>
  </div>
);

const TrafficDashboard = () => (
  <div className="flex flex-col gap-4 h-full">
    <div className="grid grid-cols-2 gap-4">
      {[
        { title: "Organic Users", val: "+124%", icon: Users, color: "text-emerald-500" },
        { title: "Impressions", val: "+89%", icon: Search, color: "text-blue-500" },
      ].map((card, i) => (
        <motion.div
          key={i}
          variants={itemVariants}
          whileHover={{ scale: 1.02 }}
          className="p-6 rounded-3xl border-2 border-zinc-100 dark:border-zinc-800/50 bg-white dark:bg-zinc-900 flex flex-col gap-4 relative overflow-hidden group shadow-sm hover:shadow-xl hover:shadow-black/5"
        >
          <div className="flex flex-col gap-1 z-10">
            <span className="text-xs font-black text-zinc-400 uppercase tracking-widest">
              {card.title}
            </span>
            <span className={cn("text-3xl font-black tracking-tighter tabular-nums", card.color)}>
              {card.val}
            </span>
          </div>
          <div className="size-10 rounded-full bg-muted/50 flex items-center justify-center">
            <card.icon size={18} className="text-zinc-400 group-hover:text-zinc-900 dark:group-hover:text-white transition-colors" />
          </div>
        </motion.div>
      ))}
    </div>

    <motion.div variants={itemVariants} className="p-4 rounded-2xl bg-zinc-900 dark:bg-zinc-50 flex items-center justify-between group cursor-default">
      <div className="flex items-center gap-3">
        <div className="size-8 rounded-full bg-white/10 dark:bg-black/10 flex items-center justify-center">
          <Info size={14} className="text-white dark:text-black" />
        </div>
        <div className="flex flex-col">
          <span className="text-[11px] font-black text-white dark:text-black uppercase tracking-widest">
            Search Visibility
          </span>
          <span className="text-[10px] text-zinc-400 dark:text-zinc-500">
            Ranking for 500+ high-intent keywords
          </span>
        </div>
      </div>
      <div className="flex -space-x-2">
        {[1,2,3].map(j => (
          <div key={j} className="size-6 rounded-full border-2 border-zinc-900 dark:border-white bg-zinc-800 dark:bg-zinc-100 flex items-center justify-center text-[8px] font-bold text-white dark:text-black">
            {String.fromCharCode(64 + j)}
          </div>
        ))}
      </div>
    </motion.div>
  </div>
);

const ReportsDashboard = () => (
  <div className="flex flex-col gap-4 h-full overflow-hidden">
    <div className="rounded-3xl border-2 border-zinc-100 dark:border-zinc-800/50 flex flex-col bg-zinc-50/50 dark:bg-zinc-900/50 overflow-hidden">
      <div className="px-5 py-4 border-b border-zinc-100 dark:border-zinc-800/50 flex items-center justify-between">
        <span className="text-[10px] font-black text-zinc-400 uppercase tracking-[0.2em]">
          Export History
        </span>
        <div className="flex items-center gap-1.5 opacity-50">
          <div className="size-1.5 rounded-full bg-zinc-400" />
          <span className="text-[9px] font-black uppercase">CSV/PDF/JSON</span>
        </div>
      </div>
      <div className="p-2 space-y-1">
        {[
          { file: "core_vitals_report.pdf", size: "1.2 MB", type: "PDF", icon: Rocket },
          { file: "seo_audit_v2.json", size: "450 KB", type: "JSON", icon: Globe },
          { file: "backlink_profile.csv", size: "2.8 MB", type: "CSV", icon: TrendingUp },
          { file: "competitor_analysis.pdf", size: "5.1 MB", type: "PDF", icon: BarChart2 },
        ].map((item, i) => (
          <motion.div
            key={i}
            variants={itemVariants}
            whileHover={{ scale: 1.01, x: 2 }}
            className="flex items-center gap-3 p-3 rounded-2xl bg-white dark:bg-zinc-800/50 hover:bg-zinc-100 dark:hover:bg-zinc-800 border border-zinc-100 dark:border-transparent transition-all cursor-pointer group shadow-xs"
          >
            <div className="size-10 rounded-xl bg-zinc-100 dark:bg-zinc-700 flex items-center justify-center group-hover:bg-zinc-900 group-hover:text-white dark:group-hover:bg-white dark:group-hover:text-black transition-all">
              <item.icon size={16} />
            </div>
            <div className="flex flex-col min-w-0 flex-1">
              <span className="text-[12px] font-bold text-zinc-900 dark:text-zinc-50 truncate group-hover:text-primary transition-colors">
                {item.file}
              </span>
              <div className="flex items-center gap-2 mt-0.5">
                <span className="text-[9px] text-zinc-400 tabular-nums font-bold">
                  {item.size}
                </span>
                <div className="size-1 rounded-full bg-zinc-300" />
                <span className="text-[9px] text-zinc-500 font-black uppercase tracking-tighter">
                  {item.type}
                </span>
              </div>
            </div>
            <motion.div 
              whileHover={{ x: 3, y: -3 }}
              className="size-8 rounded-full bg-zinc-50 dark:bg-zinc-700 flex items-center justify-center text-zinc-400 group-hover:text-zinc-900 dark:group-hover:text-white transition-colors"
            >
              <ArrowUpRight size={14} />
            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>
  </div>
);

/* ─── Generic Metric Panel (for PageSpeed, ROI, Indexation, Monitoring) ─── */

function MetricPanel({ tab, data, inView }: { tab: TabConfig; data: { value: string; description: string }; inView: boolean }) {
  return (
    <div className="flex flex-col gap-6 h-full">
      {/* Big Value Hero */}
      <motion.div
        variants={itemVariants}
        className="relative p-8 rounded-3xl border-2 border-zinc-100 dark:border-zinc-800/50 bg-zinc-50/50 dark:bg-zinc-900/50 overflow-hidden group"
      >
        <div className="flex flex-col gap-4 relative z-10">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="size-8 rounded-full bg-emerald-500/10 flex items-center justify-center">
                <tab.icon size={14} className="text-emerald-500" />
              </div>
              <span className="text-xs font-bold text-zinc-400 uppercase tracking-widest">
                {tab.label}
              </span>
            </div>
            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20">
              <Check size={12} className="text-emerald-500" strokeWidth={3} />
              <span className="text-[10px] font-black text-emerald-600 dark:text-emerald-400 uppercase tracking-wider">Verified</span>
            </div>
          </div>

          <div className="flex flex-col gap-1">
            <span className="text-5xl font-black tracking-tighter text-zinc-900 dark:text-zinc-50 leading-none">
              <AnimatedValue value={data.value} inView={inView} />
            </span>
            <div className="w-full h-2.5 bg-zinc-200 dark:bg-zinc-800 rounded-full overflow-hidden mt-4">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "92%" }}
                transition={{ duration: 1.5, ease: "circOut" }}
                className="h-full bg-emerald-500 rounded-full relative"
              >
                <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.3),transparent)] animate-[shimmer_2s_infinite]" />
              </motion.div>
            </div>
          </div>
          <div className="flex items-center gap-2 mt-1">
            <div className="size-1.5 rounded-full bg-emerald-500" />
            <span className="text-[11px] text-zinc-500 dark:text-zinc-400 font-bold uppercase tracking-wider">
              Optimised & Verified
            </span>
          </div>
        </div>
      </motion.div>

      {/* Description */}
      <motion.div
        variants={itemVariants}
        whileHover={{ y: -3 }}
        className="p-6 rounded-3xl border-2 border-zinc-100 dark:border-zinc-800/50 bg-white dark:bg-zinc-900 transition-shadow hover:shadow-xl hover:shadow-black/5"
      >
        <div className="flex items-center gap-2 mb-3">
          <div className="size-5 rounded-md bg-emerald-500/10 flex items-center justify-center">
            <Check size={10} className="text-emerald-500" />
          </div>
          <span className="text-[10px] font-black text-zinc-400 uppercase tracking-[0.2em]">
            What This Means
          </span>
        </div>
        <p className="text-[15px] text-zinc-600 dark:text-zinc-400 leading-relaxed font-inter font-medium">
          {data.description}
        </p>
      </motion.div>
    </div>
  );
}
