'use client';

import React, { useState, useMemo, useRef, useEffect } from 'react';
import { motion, AnimatePresence, LayoutGroup, useInView, useMotionValue, useSpring } from 'framer-motion';
import { Zap, Search, Trophy, Target, ShieldCheck, TrendingUp, Activity, Cpu, ArrowUpRight, Check } from 'lucide-react';
import { Highlighter } from "@/components/ui/highlighter";
import { cn } from '@/lib/utils';

interface StatTab {
  id: string;
  label: string;
  icon: React.ElementType;
  badge?: string;
  value: string;
  header: string;
  description: string;
}

const STAT_TABS: StatTab[] = [
  {
    id: "pagespeed",
    label: "PageSpeed",
    icon: Zap,
    badge: "99+",
    value: "99+",
    header: "PageSpeed Score",
    description: "We literally make your site load in the blink of an eye. Google loves fast sites, and we make sure yours passes every Core Web Vitals test with flying colours so you can easily grab those top search spots.",
  },
  {
    id: "roi",
    label: "ROI Boost",
    icon: TrendingUp,
    value: "3.5x",
    header: "Revenue Multiplier",
    description: "Think of speed as the secret sauce for your bottom line. When your site feels snappy, people actually stick around, read your stuff, and buy what you're selling. We help you turn site speed into real business growth.",
  },
  {
    id: "indexation",
    label: "Indexation",
    icon: Search,
    badge: "100%",
    value: "100%",
    header: "Indexation Pipeline",
    description: "There's nothing worse than publishing great content that Google never finds. We hook up a priority pipeline straight to search engines, so your new pages get scooped up and ranked the second they go live.",
  },
  {
    id: "lcp",
    label: "LCP",
    icon: Trophy,
    value: "0.5s",
    header: "Largest Contentful Paint",
    description: "Ever click a link and stare at a blank white screen? Yeah, we hate that too. We optimise the biggest stuff on your page so it pops into view instantly. People don't like waiting, so we just remove the wait entirely.",
  },
  {
    id: "cls",
    label: "CLS",
    icon: Target,
    value: "0px",
    header: "Cumulative Layout Shift",
    description: "We make sure buttons don't jump around when visitors try to click them. By locking everything in place instantly, we deliver a premium, smooth experience that protects your hard-earned traffic.",
  },
  {
    id: "monitoring",
    label: "Monitoring",
    icon: ShieldCheck,
    badge: "24/7",
    value: "24/7",
    header: "Always-On Monitoring",
    description: "We're your website's personal bodyguard. We monitor your performance around the clock and alert you if anything drops, so you never have to worry about unnoticed speed issues hurting your rankings.",
  },
];

const dashboardVariants = {
  hidden: { opacity: 0, y: 10, scale: 0.98, filter: "blur(4px)" },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: {
      duration: 0.4,
      ease: [0.23, 1, 0.32, 1],
      staggerChildren: 0.08,
    },
  },
  exit: {
    opacity: 0,
    scale: 0.98,
    filter: "blur(4px)",
    transition: { duration: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0 },
};

function AnimatedValue({ value, inView }: { value: string; inView: boolean }) {
  const ref = useRef<HTMLSpanElement>(null);
  const numericValue = parseFloat(value.replace(/[^0-9.]/g, ''));
  const suffix = value.replace(/[0-9.]/g, '');
  const hasDecimal = value.includes('.') && !value.endsWith('x');
  const decimals = hasDecimal ? 1 : 0;
  const motionVal = useMotionValue(0);
  const springVal = useSpring(motionVal, { damping: 30, stiffness: 80 });

  useEffect(() => {
    if (inView) motionVal.set(numericValue);
  }, [inView, numericValue, motionVal]);

  useEffect(() => {
    const unsub = springVal.on('change', (latest) => {
      if (ref.current) {
        ref.current.textContent = latest.toFixed(decimals) + suffix;
      }
    });
    return () => unsub();
  }, [springVal, decimals, suffix]);

  return <span ref={ref}>0{suffix}</span>;
}

export function Stats() {
  const [activeTab, setActiveTab] = useState(STAT_TABS[0]);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const content = useMemo(() => {
    return <StatContent tab={activeTab} inView={isInView} />;
  }, [activeTab, isInView]);

  return (
    <section ref={sectionRef} className="bg-background py-16 md:py-28 font-primary overflow-hidden relative">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center text-center gap-6 mb-16 sm:mb-20"
        >
          <div className="max-w-3xl space-y-4 mx-auto">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tighter text-foreground leading-[1.05]">
              Unmatched <Highlighter color="hsl(var(--foreground) / 0.1)" padding={0} strokeWidth={1} iterations={1}>Speed & Reliability</Highlighter>
            </h2>
            <p className="text-muted-foreground text-lg sm:text-xl max-w-2xl mx-auto font-inter font-medium leading-relaxed opacity-80">
              Our infrastructure helps you pass Core Web Vitals instantly, boosting SEO and user retention with precision engineering.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-full max-w-5xl mx-auto bg-white dark:bg-zinc-900 border-2 border-zinc-200 dark:border-zinc-800 rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.05)] dark:shadow-[0_20px_50px_rgba(0,0,0,0.3)] overflow-hidden flex flex-col md:flex-row min-h-[520px]"
        >
          {/* Sidebar */}
          <div className="w-full md:w-72 bg-zinc-50/50 dark:bg-zinc-900/50 border-b-2 md:border-b-0 md:border-r-2 border-zinc-200 dark:border-zinc-800 p-6 flex flex-col gap-3">
            <div className="mb-4 px-2 hidden md:flex items-center gap-2">
              <Cpu size={14} className="text-zinc-400" />
              <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-[0.2em]">
                Metrics
              </span>
            </div>

            <LayoutGroup>
              <div className="flex flex-col gap-1.5">
                {STAT_TABS.map((tab) => {
                  const isActive = activeTab.id === tab.id;
                  return (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab)}
                      className={cn(
                        "relative flex items-center gap-3 p-3.5 rounded-2xl text-[13px] font-bold transition-all cursor-pointer text-left outline-none group",
                        isActive
                          ? "text-zinc-900 dark:text-zinc-100"
                          : "text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-200"
                      )}
                    >
                      {isActive && (
                        <motion.div
                          layoutId="activeStatTab"
                          className="absolute inset-0 bg-white dark:bg-zinc-800 shadow-[0_4px_12px_rgba(0,0,0,0.05)] border-2 border-zinc-200 dark:border-zinc-700 rounded-2xl"
                          initial={false}
                          transition={{ type: "spring", stiffness: 350, damping: 30 }}
                        />
                      )}

                      <div className={cn(
                        "relative z-10 size-8 rounded-xl flex items-center justify-center border-2 transition-all duration-300",
                        isActive
                          ? "bg-zinc-900 text-white border-zinc-900 shadow-lg shadow-zinc-900/20"
                          : "bg-muted text-zinc-400 border-transparent group-hover:scale-110"
                      )}>
                        <tab.icon size={16} />
                      </div>

                      <span className="relative z-10">{tab.label}</span>

                      {tab.badge && (
                        <motion.span
                          initial={{ scale: 0.8 }}
                          animate={{ scale: 1 }}
                          className={cn(
                            "relative z-10 ml-auto text-[9px] font-black px-2 py-0.5 rounded-full tracking-wider",
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
                })}
              </div>
            </LayoutGroup>

            <div className="mt-auto hidden md:block p-4 rounded-2xl bg-zinc-900/[0.03] dark:bg-zinc-100/[0.03] border border-dashed border-zinc-200 dark:border-zinc-800">
              <div className="flex items-center gap-2 mb-2">
                <Activity size={12} className="text-zinc-400" />
                <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-tighter">Live Status</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="size-1.5 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-[11px] font-medium text-zinc-600 dark:text-zinc-400">All Systems Go</span>
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
                    Key performance insight.
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

function StatContent({ tab, inView }: { tab: StatTab; inView: boolean }) {
  return (
    <div className="flex flex-col gap-6 h-full">
      {/* Big Value Header */}
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
            <motion.div
              whileHover={{ scale: 1.1, rotate: 15 }}
              className="size-10 rounded-full bg-zinc-900 dark:bg-white flex items-center justify-center shadow-lg cursor-pointer"
            >
              <ArrowUpRight size={18} className="text-white dark:text-black" />
            </motion.div>
          </div>

          <div className="flex flex-col gap-1">
            <span className="text-5xl font-black tracking-tighter text-zinc-900 dark:text-zinc-50 leading-none">
              <AnimatedValue value={tab.value} inView={inView} />
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

      {/* Description Card */}
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
          {tab.description}
        </p>
      </motion.div>
    </div>
  );
}
