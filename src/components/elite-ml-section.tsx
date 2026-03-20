"use client";

import { cn } from "@/lib/utils";
import React, { useRef, useState, useEffect } from "react";
import { motion, useInView, useMotionValue, useSpring, useTransform, AnimatePresence } from "framer-motion";
import { 
  Zap, 
  Brain, 
  Network, 
  Cpu, 
  Sparkles, 
  Check,
  TrendingUp,
  Activity,
  LineChart,
  Target,
  Search,
  Bot,
  MessageSquare,
  Binary,
  Layers,
  FileSearch,
  Link2,
  Anchor,
  Globe,
  Database,
  CpuIcon
} from "lucide-react";
import { Highlighter } from "@/components/ui/highlighter";

export function EliteMlSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  return (
    <div ref={containerRef} className="relative mx-auto flex w-full max-w-5xl flex-col gap-12 px-6 md:px-8 lg:px-4 py-20 md:py-32 overflow-hidden md:overflow-visible">
      <div className="text-center space-y-4 max-w-3xl mx-auto">
        <h2 className="text-4xl md:text-5xl lg:text-7xl font-black tracking-tighter text-zinc-900 dark:text-zinc-50 leading-[0.95] md:leading-[1.05]">
          Powered by Elite <br />
          <Highlighter color="hsl(var(--foreground) / 0.1)" padding={0} strokeWidth={1} iterations={1}>
            Machine Learning
          </Highlighter>
        </h2>
        <p className="text-muted-foreground text-lg sm:text-xl font-inter font-medium leading-relaxed max-w-2xl mx-auto">
          We don&apos;t guess. We compute. Our proprietary AI pipelines analyze billions of ranking signals to deliver an unfair mathematical advantage in search.
        </p>
      </div>

      <div className="grid w-full grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-6 items-stretch">
        {/* Predictive Intent Modeling */}
        <InteractiveFeatureCard 
          className="lg:col-span-4 lg:row-span-1"
          title="Predictive Intent Modeling"
          description="Our high-parameter LLMs analyze semantic relationships across trillions of tokens to predict intent shifts before they manifest in search."
          action="Run LLM Inference"
          icon={Brain}
          accentColor="violet"
          isInView={isInView}
          index={0}
          widget={<LlmIntentStream />}
        />

        {/* Neural Link Graphs */}
        <InteractiveFeatureCard 
          className="lg:col-span-2 lg:row-span-1"
          title="Neural Link Graphs"
          description="Modern search authority is about entity validation. We build impregnable link graphs, connecting your brand entity to high-authority nodes."
          action="Validate Entities"
          icon={Link2}
          accentColor="emerald"
          isInView={isInView}
          index={1}
          widget={<NeuralBubbleForge />}
        />

        {/* Algorithmic Reverse-Engineering */}
        <InteractiveFeatureCard 
          className="lg:col-span-2 lg:row-span-1"
          title="Algorithmic Reverse-Engineering"
          description="Reverse-engineer ranking factors via SERP volatility analysis."
          action="Extract Signals"
          icon={Cpu}
          accentColor="amber"
          isInView={isInView}
          index={2}
          widget={<MatrixScannerWidget />}
        />

        {/* AI-Automated Content Gaps */}
        <InteractiveFeatureCard 
          className="lg:col-span-4 lg:row-span-1"
          title="AI-Automated Content Gaps"
          description="Instant competitor sitemap scanning to detect and exploit structural weaknesses and content voids."
          action="Scan Competitors"
          icon={Sparkles}
          accentColor="rose"
          isInView={isInView}
          index={3}
          widget={<ContentGapDiscovery />}
        />
      </div>
    </div>
  );
}

function InteractiveFeatureCard({ 
  className, 
  title, 
  description, 
  action, 
  icon: Icon, 
  accentColor,
  isInView,
  index,
  widget
}: { 
  className?: string;
  title: string;
  description: string;
  action: string;
  icon: any;
  accentColor: "violet" | "rose" | "amber" | "emerald";
  isInView: boolean;
  index: number;
  widget: React.ReactNode;
}) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["4deg", "-4deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-4deg", "4deg"]);

  const colors = {
    violet: {
      light: "bg-violet-500/10 border-violet-500/20 text-violet-600 dark:text-violet-400",
      icon: "text-violet-500",
      accent: "violet-500",
      bgHover: "group-hover:bg-violet-500/[0.02]"
    },
    rose: {
      light: "bg-rose-500/10 border-rose-500/20 text-rose-600 dark:text-rose-400",
      icon: "text-rose-500",
      accent: "rose-500",
      bgHover: "group-hover:bg-rose-500/[0.02]"
    },
    amber: {
      light: "bg-amber-500/10 border-amber-500/20 text-amber-600 dark:text-amber-400",
      icon: "text-amber-500",
      accent: "amber-500",
      bgHover: "group-hover:bg-amber-500/[0.02]"
    },
    emerald: {
      light: "bg-emerald-500/10 border-emerald-500/20 text-emerald-600 dark:text-emerald-400",
      icon: "text-emerald-500",
      accent: "emerald-500",
      bgHover: "group-hover:bg-emerald-500/[0.02]"
    },
  };

  const c = colors[accentColor];

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    x.set(mouseX / width - 0.5);
    y.set(mouseY / height - 0.5);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      className={cn(
        "group relative flex flex-col rounded-[2.5rem] border-2 bg-white dark:bg-zinc-950 p-6 md:p-8 overflow-hidden transition-all duration-300 hover:border-zinc-200 dark:hover:border-zinc-800 shadow-none perspective-1000",
        className,
        c.bgHover
      )}
    >
      <div className="flex flex-col h-full relative z-10 space-y-8">
        <div className="flex items-start justify-between">
          <div className={cn("size-12 rounded-2xl border-2 bg-card flex items-center justify-center shadow-xs transition-colors duration-500 group-hover:bg-background text-black dark:text-white")}>
            <Icon size={24} />
          </div>
          
          <div className={cn("flex items-center gap-1.5 px-3 py-1.5 rounded-xl border-2 transition-all duration-300 active:scale-95 group/btn cursor-pointer", c.light)}>
            <Check size={12} strokeWidth={3} className="shrink-0" />
            <span className="text-[10px] font-black uppercase tracking-[0.1em] leading-none mt-0.5">{action}</span>
          </div>
        </div>

        <div className="flex-1 min-h-[220px] flex items-center justify-center relative">
           {widget}
        </div>
        
        <div className="space-y-3 mt-auto">
          <h3 className="text-xl md:text-2xl font-black tracking-tight text-zinc-900 dark:text-white leading-none">
            {title}
          </h3>
          <p className="text-zinc-500 dark:text-zinc-400 text-sm md:text-base font-inter font-medium leading-relaxed max-w-xl group-hover:text-zinc-900 dark:group-hover:text-zinc-200 transition-colors">
            {description}
          </p>
        </div>
      </div>
    </motion.div>
  );
}

/* ─── Widget Components ─── */

function LlmIntentStream() {
  const tokens = ["prediction", "intent", "cluster", "vector", "semantic", "ranking", "inference", "context", "analysis"];
  
  return (
    <div className="relative w-full h-full flex flex-col items-center justify-center gap-4 overflow-hidden py-4">
       <div className="absolute inset-0 bg-violet-500/[0.02] rounded-[2rem]" />
       
       <div className="flex flex-wrap items-center justify-center gap-2 max-w-[200px]">
          {tokens.map((token, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ 
                opacity: [0, 1, 0], 
                scale: [0.8, 1, 0.8],
                y: [5, -5, 5]
              }}
              transition={{ 
                duration: 3 + i * 0.2, 
                repeat: Infinity, 
                delay: i * 0.4,
                ease: "easeInOut"
              }}
              className="px-2 py-1 rounded-md bg-violet-500/10 border border-violet-500/20 text-[8px] font-mono font-bold text-violet-500 uppercase tracking-tighter"
            >
               {token}
            </motion.div>
          ))}
       </div>

       <div className="relative size-16 flex items-center justify-center">
          <div className="absolute inset-0 bg-violet-500/20 rounded-full blur-xl animate-pulse" />
          <Bot className="size-8 text-violet-500 relative z-10" />
          
          {/* Animated Orbiting Spheres */}
          {[0, 120, 240].map((angle, i) => (
            <motion.div
              key={i}
              className="absolute size-1.5 bg-violet-400 rounded-full"
              animate={{ 
                top: `${(50 + 40 * Math.sin((angle + 360) * Math.PI / 180)).toFixed(3)}%`,
                left: `${(50 + 40 * Math.cos((angle + 360) * Math.PI / 180)).toFixed(3)}%`,
              }}
              transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            />
          ))}
       </div>

       <div className="text-[10px] font-medium text-violet-500/60 font-mono tracking-widest uppercase">
          inference_active
       </div>
    </div>
  );
}

function NeuralBubbleForge() {
  const bubbles = [
    { x: 30, y: -60, size: 24, delay: 0 },
    { x: -80, y: -20, size: 16, delay: 0.5 },
    { x: -40, y: 70, size: 20, delay: 1 },
    { x: 70, y: 40, size: 14, delay: 1.5 },
    { x: 90, y: -10, size: 18, delay: 2 },
    { x: -70, y: -70, size: 12, delay: 2.5 }
  ];

  return (
    <div className="relative size-56 flex items-center justify-center">
       <div className="absolute inset-0 bg-emerald-500/[0.03] rounded-full blur-3xl" />
       
       {/* Central Brand Identity Node */}
       <motion.div 
         animate={{ boxShadow: ["0 0 20px rgba(16,185,129,0.2)", "0 0 40px rgba(16,185,129,0.4)", "0 0 20px rgba(16,185,129,0.2)"] }}
         transition={{ duration: 4, repeat: Infinity }}
         className="relative size-16 bg-emerald-500 rounded-full flex items-center justify-center z-20 border-4 border-white dark:border-zinc-900 shadow-xl"
       >
          <Target className="text-white size-8" />
          <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 whitespace-nowrap text-[8px] font-black text-emerald-500 uppercase tracking-widest bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/20">
             BRAND_ENTITY
          </div>
       </motion.div>

       {/* Asymmetric Floating Bubbles */}
       {bubbles.map((b, i) => (
         <React.Fragment key={i}>
            {/* Liquid Connection */}
            <svg className="absolute inset-0 size-full pointer-events-none overflow-visible">
               <motion.line 
                 x1="50%" y1="50%" 
                 x2={`calc(50% + ${b.x}px)`} 
                 y2={`calc(50% + ${b.y}px)`}
                 stroke="currentColor" 
                 strokeWidth="1.5"
                 className="text-emerald-500/20"
                 initial={{ pathLength: 0, opacity: 0 }}
                 animate={{ pathLength: 1, opacity: 1 }}
                 transition={{ duration: 2, delay: b.delay }}
               />
            </svg>

            {/* Entity Bubble */}
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ 
                scale: 1, 
                opacity: 1,
                x: [b.x, b.x + 5, b.x - 5, b.x],
                y: [b.y, b.y - 5, b.y + 5, b.y]
              }}
              transition={{ 
                type: "spring", 
                delay: b.delay,
                x: { duration: 4 + i, repeat: Infinity, ease: "easeInOut" },
                y: { duration: 5 + i, repeat: Infinity, ease: "easeInOut" }
              }}
              className="absolute rounded-full border-2 border-emerald-500/30 bg-white dark:bg-zinc-800 shadow-sm flex items-center justify-center p-1"
              style={{
                width: b.size,
                height: b.size,
                left: "calc(50% - " + (b.size/2) + "px)",
                top: "calc(50% - " + (b.size/2) + "px)"
              }}
            >
               <div className="size-full bg-emerald-500/10 rounded-full flex items-center justify-center">
                  <motion.div 
                     animate={{ opacity: [0.3, 0.7, 0.3] }}
                     transition={{ duration: 2, repeat: Infinity, delay: i * 0.5 }}
                     className="size-1 bg-emerald-500 rounded-full" 
                  />
               </div>
            </motion.div>
         </React.Fragment>
       ))}
    </div>
  );
}

function ContentGapDiscovery() {
  return (
    <div className="relative w-full h-full p-6 flex items-center justify-center overflow-hidden">
       <div className="absolute inset-0 bg-rose-500/[0.02] rounded-[2rem]" />
       
       <div className="w-full max-w-[280px] space-y-4">
          {/* Competitor Sitemap Visualization */}
          <div className="flex flex-col gap-3">
             {[1, 2, 3].map((row) => (
               <div key={row} className="flex gap-2">
                  {[1, 2, 3, 4, 5].map((item) => {
                    const isGap = (row === 2 && item === 3) || (row === 1 && item === 2) || (row === 3 && item === 5);
                    return (
                      <motion.div
                        key={item}
                        initial={false}
                        animate={isGap ? { 
                          background: ["rgba(244,63,94,0)", "rgba(244,63,94,0.4)", "rgba(244,63,94,0)"],
                          borderColor: ["transparent", "rgba(244,63,94,0.4)", "transparent"]
                        } : {}}
                        transition={{ duration: 3, repeat: Infinity, delay: item * 0.2 }}
                        className={cn(
                          "flex-1 h-3 rounded-md border-2",
                          isGap ? "border-dashed" : "bg-zinc-100 dark:bg-zinc-900 border-zinc-200 dark:border-zinc-800"
                        )}
                      >
                         {isGap && (
                            <motion.div 
                               animate={{ opacity: [0, 1, 0] }}
                               transition={{ duration: 1, repeat: Infinity }}
                               className="w-full h-full flex items-center justify-center"
                            >
                               <Sparkles size={6} className="text-rose-500" />
                            </motion.div>
                         )}
                      </motion.div>
                    );
                  })}
               </div>
             ))}
          </div>

          <div className="flex items-center gap-4 mt-6">
             <div className="flex-1 h-px bg-gradient-to-r from-transparent via-rose-500/20 to-transparent" />
             <div className="flex items-center gap-2 group/status px-3 py-1 rounded-full bg-rose-500/10 border border-rose-500/20">
                <FileSearch size={10} className="text-rose-500 animate-bounce" />
                <span className="text-[8px] font-black font-mono text-rose-500 tracking-tighter uppercase italic">Site_Map_Scanning...</span>
             </div>
             <div className="flex-1 h-px bg-gradient-to-r from-transparent via-rose-500/20 to-transparent" />
          </div>

          <div className="flex justify-between items-center text-[9px] font-medium text-zinc-400 font-mono">
             <span>SITEMAP_INDEX: 4,012</span>
             <span className="text-rose-500 font-black">+32 GAPS DETECTED</span>
          </div>
       </div>
    </div>
  );
}

function MatrixScannerWidget() {
  const [lines, setLines] = useState<string[]>([]);

  useEffect(() => {
    const data = [
      "SIGNALS_DETECTED: 12,401",
      "SERP_VOLATILITY: HIGH",
      "LSI_NODES: VALIDATED",
      "RANK_VELOCITY: +12.4%",
      "E-E-A-T_SCORE: 0.98",
      "DOM_INTEGRITY: OPTIMAL"
    ];
    setLines(data);
  }, []);

  return (
    <div className="w-full max-w-[240px] flex flex-col gap-3 p-5 bg-white dark:bg-zinc-950 rounded-[1.5rem] border-2 border-zinc-200 dark:border-zinc-800/50 shadow-xl dark:shadow-2xl relative overflow-hidden group/scanner">
       <div className="flex items-center justify-between font-mono text-[10px]">
          <div className="flex items-center gap-2 text-amber-600 dark:text-amber-500">
             <div className="size-1.5 rounded-full bg-amber-500 animate-ping shadow-[0_0_8px_rgba(245,158,11,0.5)]" />
             <span className="font-black tracking-widest">LIVE_DATA</span>
          </div>
          <span className="text-zinc-400 dark:text-zinc-600 font-bold">NODE_04</span>
       </div>

       <div className="space-y-2 pt-2 border-l border-zinc-200 dark:border-zinc-800/50 ml-1 pl-4">
          {lines.map((line, i) => (
            <motion.div 
              key={i}
              initial={{ x: -10, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: i * 0.1 }}
              className="flex items-center gap-3 relative"
            >
               <div className="absolute -left-[18px] size-1 bg-amber-500/30 rounded-full" />
               <span className="font-mono text-[9px] text-zinc-600 dark:text-zinc-400 font-bold tracking-tight">{line}</span>
            </motion.div>
          ))}
       </div>

       {/* Scanning line animation */}
       <motion.div 
         animate={{ top: ["-10%", "110%"] }}
         transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
         className="absolute left-0 right-0 h-px bg-amber-500/20 shadow-[0_0_4px_rgba(245,158,11,0.3)] pointer-events-none"
       />

       <div className="mt-4 pt-4 border-t border-zinc-100 dark:border-zinc-900 flex justify-between items-center">
          <div className="flex gap-1">
             {[1,2,3,4].map(k => <div key={k} className="size-1 bg-amber-500/20 rounded-full" />)}
          </div>
          <span className="text-[8px] font-black text-amber-600/60 dark:text-amber-500/60 uppercase tracking-tighter italic">Reverse_Engines_Active</span>
       </div>
    </div>
  );
}
