"use client";

import { cn } from "@/lib/utils";
import React, { useRef, useState, useEffect } from "react";
import { motion, useMotionValue, useSpring, useTransform, AnimatePresence } from "framer-motion";
import {
  Zap,
  TrendingUp,
  ArrowUp,
  CheckCircle2,
  Clock,
  Globe2,
  Activity,
  Layers,
  ScanLine,
  Terminal,
  Link2,
  FileText,
  MousePointerClick,
  CodeXml,
  Tag,
  Smartphone,
  Unlink,
  Waypoints,
} from "lucide-react";
import { Highlighter } from "@/components/ui/highlighter";
import { Card } from "@/components/ui/card";
import {
  CartesianGrid,
  Area,
  AreaChart,
  XAxis,
  YAxis,
  ReferenceLine,
} from "recharts";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

/* ── Data ─────────────────────────────────────────────────── */

const trafficData = [
  { month: "Jan", organic: 4200, paid: 1800 },
  { month: "Feb", organic: 5100, paid: 1900 },
  { month: "Mar", organic: 6800, paid: 2100 },
  { month: "Apr", organic: 7400, paid: 2000 },
  { month: "May", organic: 9200, paid: 2300 },
  { month: "Jun", organic: 11500, paid: 2200 },
  { month: "Jul", organic: 14800, paid: 2400 },
  { month: "Aug", organic: 18021, paid: 2500 },
];

const chartConfig = {
  organic: { label: "Organic", color: "hsl(var(--primary))" },
  paid:    { label: "Paid",    color: "hsl(var(--muted-foreground))" },
} satisfies ChartConfig;

const clusters = [
  { topic: "Page Speed",     icon: Zap,               keywords: 142, share: 88, tags: ["core web vitals", "lcp", "performance", "speed clusters", "mobile flow"] },
  { topic: "On-Page SEO",    icon: FileText,          keywords: 318, share: 76, tags: ["title tags", "meta desc", "headings", "schema", "pillar content"] },
  { topic: "Link Building",  icon: Link2,             keywords: 207, share: 61, tags: ["backlinks", "authority", "anchor text", "niche clusters", "referral flow"] },
  { topic: "Content Gaps",   icon: MousePointerClick, keywords: 91,  share: 94, tags: ["topic clusters", "pillar pages", "voids", "competitor gaps", "intent mapping"] },
];

const vitals = [
  { label: "LCP",         value: "1.2s",  status: "good",  icon: Clock },
  { label: "CLS",         value: "0.03",  status: "good",  icon: Activity },
  { label: "FID",         value: "12ms",  status: "good",  icon: Zap },
  { label: "TTFB",        value: "0.4s",  status: "good",  icon: ScanLine },
  { label: "Back\nLinks",   value: "4,812", status: "info",  icon: Layers },
  { label: "Crawl\nErrors", value: "0",     status: "good",  icon: CheckCircle2 },
];

/* ── Section ──────────────────────────────────────────────── */
export function EliteMlSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.from(".eml-header", {
      y: 40, opacity: 0, duration: 1, ease: "power3.out",
      scrollTrigger: { trigger: containerRef.current, start: "top 85%" },
    });
    gsap.fromTo(gsap.utils.toArray(".eml-card"),
      { y: 60, opacity: 0, scale: 0.97 },
      {
        y: 0, opacity: 1, scale: 1,
        duration: 0.9, stagger: 0.1, ease: "back.out(1.2)",
        scrollTrigger: { trigger: containerRef.current, start: "top 75%" },
      }
    );
  }, { scope: containerRef });

  return (
    <div
      ref={containerRef}
      className="relative mx-auto flex w-full max-w-5xl flex-col gap-12 px-6 md:px-8 lg:px-4 py-20 md:py-28 overflow-hidden md:overflow-visible"
    >
      {/* Header */}
      <div className="text-center space-y-4 md:space-y-6 max-w-4xl mx-auto eml-header">
        <h2 className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tight text-foreground leading-[1.1] md:leading-[1.05]">
          Powered by Elite<br />
          Machine Learning
        </h2>
        <p className="text-base md:text-xl text-muted-foreground font-inter font-medium leading-relaxed max-w-2xl mx-auto opacity-80 px-4 md:px-0">
          We don&apos;t guess. We compute. Our proprietary AI pipelines analyze billions of ranking signals to deliver an unfair mathematical advantage in search.
        </p>
      </div>

      {/* Bento grid */}
      <div className="grid w-full grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-6">

        {/* Card 1 — Organic Traffic Growth (wide) */}
        <BentoCard className="eml-card md:col-span-2 lg:col-span-4">
          <TrafficGrowthVisual />
        </BentoCard>

        {/* Card 2 — AI Crawl Score (narrow) */}
        <BentoCard className="eml-card md:col-span-1 lg:col-span-2">
          <CrawlScoreVisual />
        </BentoCard>

        {/* Card 3 — Semantic Clusters (narrow) */}
        <BentoCard className="eml-card md:col-span-1 lg:col-span-2">
          <SemanticClustersVisual />
        </BentoCard>

        {/* Card 4 — Technical Health (wide, split layout) */}
        <BentoCard className="eml-card md:col-span-2 lg:col-span-4 p-0">
          <TechnicalHealthVisual />
        </BentoCard>

      </div>
    </div>
  );
}

/* ── Shared card shell ────────────────────────────────────── */
function BentoCard({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <Card className={cn(
      "group relative overflow-hidden rounded-2xl border-2 bg-background px-5 py-6 md:px-8 md:pt-10 md:pb-8 flex flex-col shadow-none",
      className
    )}>
      {children}
    </Card>
  );
}

function CardTitle({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <h3 className={cn("font-medium text-foreground text-lg group-hover:text-primary transition-colors duration-300", className)}>
      {children}
    </h3>
  );
}
function CardDesc({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <p className={cn("text-muted-foreground text-sm font-inter font-medium leading-relaxed", className)}>
      {children}
    </p>
  );
}

/* ══════════════════════════════════════════════════════════
   CARD 1 — Organic Traffic Growth
══════════════════════════════════════════════════════════ */
function TrafficGrowthVisual() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <>
      <div className="flex-1 relative">
        {/* Stats row */}
        <div className="flex items-start gap-6 mb-4">
          <div>
            <p className="text-3xl font-bold text-foreground tracking-tight">18,021</p>
            <p className="text-xs text-muted-foreground mt-0.5 font-inter">Organic sessions / mo.</p>
          </div>
          <div className="flex items-center gap-1.5 mt-1.5 px-2.5 py-1 rounded-full border border-primary/20 bg-primary/5">
            <ArrowUp className="size-3 text-primary" />
            <span className="text-xs font-semibold text-primary">+336%</span>
          </div>
          <div className="ml-auto flex items-center gap-4 self-start mt-1">
            <div className="flex items-center gap-1.5">
              <span className="size-2 rounded-full bg-primary inline-block" />
              <span className="text-[11px] text-muted-foreground font-medium">Organic</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="size-2 rounded-full bg-muted-foreground/50 inline-block" />
              <span className="text-[11px] text-muted-foreground font-medium">Paid</span>
            </div>
          </div>
        </div>

        {/* Chart */}
        <div className="h-44 md:h-52 w-full">
          {mounted ? (
            <ChartContainer config={chartConfig} className="h-full w-full aspect-auto">
              <AreaChart data={trafficData} margin={{ top: 8, left: 0, right: 0, bottom: 0 }}>
                <defs>
                  <linearGradient id="organicGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%"  stopColor="hsl(var(--primary))" stopOpacity={0.2} />
                    <stop offset="95%" stopColor="hsl(var(--primary))" stopOpacity={0} />
                  </linearGradient>
                  <linearGradient id="paidGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%"  stopColor="hsl(var(--muted-foreground))" stopOpacity={0.08} />
                    <stop offset="95%" stopColor="hsl(var(--muted-foreground))" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid vertical={false} strokeDasharray="3 3" strokeOpacity={0.1} />
                <XAxis
                  dataKey="month" tickLine={false} axisLine={false}
                  tickMargin={8} fontSize={10} stroke="hsl(var(--muted-foreground))"
                />
                <YAxis hide domain={[0, 22000]} />
                <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
                <Area
                  dataKey="organic" type="monotone"
                  stroke="hsl(var(--primary))" strokeWidth={2.5}
                  fill="url(#organicGrad)"
                  dot={false} activeDot={{ r: 5, strokeWidth: 0 }}
                  isAnimationActive animationDuration={1800} animationEasing="ease-in-out"
                />
                <Area
                  dataKey="paid" type="monotone"
                  stroke="hsl(var(--muted-foreground))" strokeWidth={1.5}
                  strokeDasharray="5 4"
                  fill="url(#paidGrad)"
                  dot={false} opacity={0.6}
                  isAnimationActive animationDuration={2200}
                />
              </AreaChart>
            </ChartContainer>
          ) : (
            <div className="h-full w-full bg-muted/5 animate-pulse rounded-lg" />
          )}
        </div>
      </div>

      <div className="mt-6 space-y-1.5">
        <CardTitle>Organic Traffic Growth</CardTitle>
        <CardDesc>
          Our AI continuously adapts your content strategy to capture rising search demand — turning clicks into compounding organic growth.
        </CardDesc>
      </div>
    </>
  );
}

/* ══════════════════════════════════════════════════════════
   CARD 2 — AI Crawl Score
══════════════════════════════════════════════════════════ */
function CrawlScoreVisual() {
  const score = 97;
  const [val, setVal] = useState(0);
  useEffect(() => {
    let n = 0;
    const t = setInterval(() => {
      n += 2;
      if (n >= score) { setVal(score); clearInterval(t); } else setVal(n);
    }, 18);
    return () => clearInterval(t);
  }, []);

  const r = 45;
  const circ = 2 * Math.PI * r;

  const checks = [
    { label: "Schema markup",    icon: CodeXml },
    { label: "Canonical tags",   icon: Tag },
    { label: "Mobile-first",     icon: Smartphone },
    { label: "Broken links",     icon: Unlink },
    { label: "Redirect chains",  icon: Waypoints },
  ];

  return (
    <>
      <div className="flex flex-col items-center gap-6 flex-1">
        {/* Donut */}
        <div className="relative size-32 flex items-center justify-center mt-2 group">
          {/* Subtle Glow Behind */}
          <div className="absolute inset-0 bg-primary/10 rounded-full blur-[24px] opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
          
          <svg className="absolute inset-0 size-full -rotate-90 drop-shadow-sm" viewBox="0 0 100 100">
            {/* Background Track */}
            <circle cx="50" cy="50" r={r} fill="none" stroke="currentColor"
              strokeWidth="2.5" className="text-border/60" />
            
            {/* Animated Progress */}
            <motion.circle
              cx="50" cy="50" r={r} fill="none"
              stroke="hsl(var(--primary))" strokeWidth="2.5" strokeLinecap="round"
              strokeDasharray={circ}
              initial={{ strokeDashoffset: circ }}
              animate={{ strokeDashoffset: circ - (val / 100) * circ }}
              transition={{ duration: 1.8, ease: "easeOut" }}
              className="drop-shadow-[0_0_8px_rgba(var(--primary),0.8)]"
            />
            
            {/* Outer faint dotted ring */}
            <circle cx="50" cy="50" r={49} fill="none" stroke="currentColor"
              strokeWidth="0.5" strokeDasharray="1 3" className="text-primary/40 opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
          </svg>
          
          <div className="flex flex-col items-center z-10 transform transition-transform duration-500 group-hover:scale-105">
            <span className="text-4xl font-bold font-inter text-foreground tracking-tight leading-none drop-shadow-sm">{val}</span>
            <span className="text-[10px] font-semibold text-muted-foreground uppercase tracking-[0.2em] mt-1.5 opacity-80">Health</span>
          </div>
        </div>

        {/* Checks */}
        <div className="w-max mx-auto space-y-2 mt-2">
          {checks.map((c) => {
            const Icon = c.icon;
            return (
              <div key={c.label} className="flex items-center gap-3">
                <div className="flex size-5 items-center justify-center rounded-md bg-primary/10 border border-primary/20">
                  <Icon className="size-3 text-primary shrink-0 opacity-90" />
                </div>
                <span className="text-xs text-foreground font-medium">{c.label}</span>
              </div>
            );
          })}
        </div>
      </div>

      <div className="mt-6 space-y-1.5 text-center">
        <CardTitle>AI Site Health Audit</CardTitle>
        <CardDesc>
          Crawls 50,000 pages in minutes and surfaces every technical issue before it costs you rankings.
        </CardDesc>
      </div>
    </>
  );
}

/* ══════════════════════════════════════════════════════════
   CARD 3 — Semantic Keyword Clusters
══════════════════════════════════════════════════════════ */
function SemanticClustersVisual() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setActive((p) => (p + 1) % clusters.length), 2800);
    return () => clearInterval(t);
  }, []);

  const cl = clusters[active];

  return (
    <>
      <div className="flex flex-col gap-4 flex-1">
        {/* Premium Animated Icon Tabs */}
        <div className="relative flex w-full bg-muted/40 p-1.5 rounded-xl border border-border/60">
          {clusters.map((c, i) => {
            const isActive = i === active;
            return (
              <button
                key={c.topic}
                onClick={() => setActive(i)}
                className={cn(
                  "group relative z-10 flex flex-1 items-center justify-center p-2.5 sm:py-2.5 rounded-lg transition-all duration-300 outline-none",
                  isActive
                    ? "text-foreground drop-shadow-sm"
                    : "text-muted-foreground hover:text-foreground/80"
                )}
              >
                {isActive && (
                  <motion.div
                    layoutId="cluster-active-pill"
                    className="absolute inset-0 bg-background border border-border/50 shadow-sm rounded-lg"
                    style={{ zIndex: -1 }}
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
                
                <c.icon className="size-5" />
              </button>
            );
          })}
        </div>

        {/* Active cluster detail */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, scale: 0.98, y: 5 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.98, y: -5 }}
            transition={{ duration: 0.3 }}
            className="flex-1 rounded-xl border border-border/70 bg-card p-5 shadow-sm flex flex-col gap-4 relative overflow-hidden group/cluster"
          >
            {/* Subtle aesthetic glow */}
            <div className="absolute top-0 right-0 -m-8 size-32 bg-primary/10 rounded-full blur-3xl pointer-events-none transition-opacity duration-500 opacity-50 group-hover/cluster:opacity-100" />

            <div className="flex items-start justify-between z-10">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <cl.icon className="size-3.5 text-primary" />
                  <span className="text-[13px] font-bold text-foreground uppercase tracking-wide">{cl.topic}</span>
                </div>
                <p className="text-[11px] text-muted-foreground font-medium pl-5">{cl.keywords} high-intent terms</p>
              </div>
              
              <div className="text-right">
                <span className="text-[8px] font-semibold uppercase tracking-[0.1em] text-muted-foreground block mb-0">Opportunity</span>
                <span className="text-lg font-black font-inter text-primary tracking-tighter drop-shadow-sm leading-none">{cl.share}%</span>
              </div>
            </div>

            {/* Keyword pills - Limited to 2 lines */}
            <div className="flex flex-wrap gap-1.5 mt-auto pt-3 border-t border-border/40 z-10 max-h-[60px] overflow-hidden">
              {cl.tags.map((t) => (
                <span 
                  key={t} 
                  className="text-[10px] font-semibold px-2.5 py-1 rounded-md bg-muted/30 border border-border/50 text-foreground/80 hover:text-foreground hover:bg-primary/5 hover:border-primary/30 transition-all duration-300 cursor-default"
                >
                  {t}
                </span>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="mt-6 space-y-1.5 text-center">
        <CardTitle>Semantic Keyword Clusters</CardTitle>
        <CardDesc>
          Groups thousands of keywords by topic so your content strategy always targets what people actually search for.
        </CardDesc>
      </div>
    </>
  );
}

/* ══════════════════════════════════════════════════════════
   CARD 4 — Technical Health (split layout)
══════════════════════════════════════════════════════════ */
function TechnicalHealthVisual() {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(useSpring(y), [-0.5, 0.5], ["5deg", "-5deg"]);
  const rotateY = useTransform(useSpring(x), [-0.5, 0.5], ["-5deg", "5deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const r = e.currentTarget.getBoundingClientRect();
    x.set((e.clientX - r.left) / r.width - 0.5);
    y.set((e.clientY - r.top) / r.height - 0.5);
  };

  return (
    <div
      className="flex flex-col sm:grid sm:h-full sm:grid-cols-2"
      onMouseMove={handleMouseMove}
      onMouseLeave={() => { x.set(0); y.set(0); }}
    >
      {/* Left: copy */}
      <div className="relative z-10 space-y-4 p-6 pt-4 md:pt-6 md:pb-8 md:pl-10 pointer-events-none flex flex-col justify-start">
        <div className="space-y-3">
          <div className="flex items-center gap-2.5 mb-2">
            <span className="relative flex size-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75 duration-1000"></span>
              <span className="relative inline-flex size-2.5 rounded-full bg-primary"></span>
            </span>
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-primary">Live Connection</span>
          </div>
          
          <CardTitle className="text-xl leading-tight">Technical SEO Command Center</CardTitle>
          <CardDesc className="text-pretty max-w-[300px]">
            Core Web Vitals, crawl health, and backlink profiles — monitored in real time with actionable alerts before rankings slip.
          </CardDesc>
        </div>

        {/* Upgraded Stat Grid */}
        <div className="grid grid-cols-2 gap-6 pt-5 mt-2 border-t border-border/50">
          {[
            { label: "Pages Monitored", val: "50,000+", fill: "100%" },
            { label: "Avg. Audit Time", val: "58s",     fill: "85%"  },
          ].map((s) => (
            <div key={s.label} className="flex flex-col">
              <span className="text-2xl font-bold font-inter text-foreground tracking-tight drop-shadow-sm">{s.val}</span>
              <span className="text-[10px] font-medium text-muted-foreground uppercase tracking-wider mt-1">{s.label}</span>
              <div className="h-0.5 w-full bg-muted/40 mt-3 rounded-full overflow-hidden">
                <motion.div 
                  initial={{ width: 0 }}
                  animate={{ width: s.fill }}
                  transition={{ duration: 1.5, ease: "easeOut", delay: 0.2 }}
                  className="h-full bg-primary/80" 
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Right: vitals grid */}
      <div className="mask-b-from-90% mask-r-from-90% relative aspect-video sm:aspect-auto mt-4 sm:mt-0 px-4 sm:px-0 overflow-hidden sm:overflow-visible">
        <motion.div
          style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
          className="relative sm:absolute sm:-right-1 sm:-bottom-1 rounded-xl sm:rounded-none sm:rounded-tl-md border-2 bg-card p-4 shadow-2xl transition-shadow duration-500 group-hover:shadow-primary/10 w-full sm:w-auto"
        >
          <div className="grid grid-cols-2 gap-2 min-w-[160px]">
            {vitals.map((v, i) => {
              const Icon = v.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.35, delay: i * 0.06 }}
                  className="rounded-xl border border-border/60 bg-background px-3 py-2.5 hover:border-primary/30 transition-colors"
                >
                  <div className="flex items-center justify-between mb-1">
                    <p className="text-[8px] font-semibold uppercase tracking-widest text-muted-foreground whitespace-pre-line leading-tight">{v.label}</p>
                    <Icon className="size-2.5 text-foreground" />
                  </div>
                  <p className={cn(
                    "text-xs font-bold",
                    (v.status === "good" || v.status === "info") ? "text-foreground" : "text-muted-foreground"
                  )}>{v.value}</p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
