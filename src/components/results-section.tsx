'use client';

import { useRef, useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import {
  ImageComparison,
  ImageComparisonImage,
  ImageComparisonSlider,
} from '@/components/core/image-comparison';
import { ArrowUpRight, Zap, Trophy, Activity, Search, MousePointer2 } from 'lucide-react';
import { motion, useSpring, useMotionValue, useInView } from 'framer-motion';
import { useTheme } from 'next-themes';
import { cn } from '@/lib/utils';

export function ResultsSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const headerVariants = {
    hidden: { opacity: 0, y: 30, filter: "blur(10px)" },
    visible: { 
      opacity: 1, 
      y: 0, 
      filter: "blur(0px)",
      transition: { duration: 0.8, ease: [0.23, 1, 0.32, 1] }
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.95, y: 20 },
    visible: { 
      opacity: 1, 
      scale: 1, 
      y: 0,
      transition: { type: "spring", stiffness: 100, damping: 20 }
    }
  };

  return (
    <section ref={containerRef} className="py-24 md:py-32 px-4 sm:px-6 md:px-8 bg-zinc-50 dark:bg-zinc-950 overflow-hidden relative">
      {/* Ambient backgrounds */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-[radial-gradient(circle_at_70%_30%,hsl(var(--primary)/0.03),transparent_70%)] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto space-y-20 relative z-10">
        {/* 1. Section Headline & Subheading */}
        <motion.div 
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={headerVariants}
          className="text-center max-w-4xl mx-auto space-y-6"
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-zinc-900 dark:text-zinc-50 leading-[1.05] md:whitespace-nowrap">
            Engineered for instant rankings.
          </h2>
          <p className="text-lg md:text-xl text-zinc-500 dark:text-zinc-400 font-inter font-medium leading-relaxed max-w-2xl mx-auto opacity-80">
            Performance is the new SEO. See how we transform sluggish sites into lightning-fast experiences that Google loves and competitors fear.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-16 items-start">
          {/* Left Column: Image Comparison */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, delay: 0.4 }}
            className="lg:col-span-7 space-y-6"
          >
            <div className="relative group">
                <div className="absolute -inset-1 bg-linear-to-r from-primary/20 to-transparent blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
                <ImageComparison
                  className="aspect-[16/10] lg:aspect-[1905/1080] w-full rounded-3xl border-2 border-zinc-200 dark:border-zinc-800 bg-zinc-100 dark:bg-zinc-900 shadow-2xl relative z-10"
                  enableHover
                  springOptions={{
                    stiffness: 160,
                    damping: 25
                  }}
                >
                  <ImageComparisonImage
                    src={mounted && resolvedTheme !== 'dark' ? "/assets/images/success-light.png" : "/assets/images/success-dark.png"}
                    alt="SEO Speeder Optimisation"
                    position="left"
                    className="object-cover"
                  />
                  <ImageComparisonImage
                    src={mounted && resolvedTheme !== 'dark' ? "/assets/images/failure-light.png" : "/assets/images/failure-dark.png"}
                    alt="Standard Optimisation"
                    position="right"
                    className="object-cover"
                  />
                  <ImageComparisonSlider className="w-1 bg-white shadow-[0_0_15px_rgba(255,255,255,0.5)]" />
                </ImageComparison>
            </div>
            <motion.div 
               animate={{ y: [0, 5, 0] }}
               transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
               className="flex items-center justify-center gap-2 text-zinc-400 font-bold text-[10px] uppercase tracking-[0.2em]"
            >
               <MousePointer2 size={12} />
               Drag to compare speed impact
            </motion.div>
          </motion.div>

          {/* Right Column: Metrics & Content */}
          <div className="lg:col-span-5 space-y-12">
            {/* 4. Measurable Metrics */}
            <motion.div 
              variants={containerVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              className="grid grid-cols-2 gap-4 md:gap-6"
            >
              <MetricItem 
                icon={<Zap className="w-5 h-5" />}
                value={99}
                suffix="+"
                label="Performance"
                description="Google PageSpeed score, up from 45."
                color="text-emerald-500"
                variant={itemVariants}
                inView={isInView}
              />
              <MetricItem 
                icon={<Activity className="w-5 h-5" />}
                value={0.5}
                suffix="s"
                decimals={1}
                label="LCP Duration"
                description="Reduced from 3.2s. Instant load."
                color="text-sky-500"
                variant={itemVariants}
                inView={isInView}
              />
              <MetricItem 
                icon={<Trophy className="w-5 h-5" />}
                value={100}
                suffix="%"
                label="SEO Health"
                description="Perfect technical audit score."
                color="text-amber-500"
                variant={itemVariants}
                inView={isInView}
              />
              <MetricItem 
                icon={<Search className="w-5 h-5" />}
                value={42}
                prefix="+"
                suffix="%"
                label="Growth"
                description="Observed lift within 14 days."
                color="text-indigo-500"
                variant={itemVariants}
                inView={isInView}
              />
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="border-t border-zinc-200 dark:border-zinc-800 pt-10 space-y-10"
            >
              {/* 5. Mini Case Study */}
              <div className="bg-white dark:bg-zinc-900 rounded-3xl p-8 border-2 border-zinc-100 dark:border-zinc-800 shadow-sm relative overflow-hidden group cursor-default">
                <div className="absolute top-0 left-0 w-1 h-full bg-primary opacity-20 group-hover:opacity-100 transition-opacity" />
                <div className="flex items-center gap-3 mb-4">
                  <div className="size-6 rounded-full bg-primary/10 flex items-center justify-center">
                    <Activity size={12} className="text-primary" />
                  </div>
                  <span className="text-xs font-black text-zinc-900 dark:text-zinc-100 uppercase tracking-widest">Migration Insight</span>
                </div>
                <p className="text-zinc-600 dark:text-zinc-400 text-[15px] leading-relaxed relative z-10 font-inter font-medium italic">
                  &quot;After switching to SEO Speeder, DevScale saw their indexation rate hit 100% in 48 hours. The drop in latency directly correlated with a 20% boost in time-on-page.&quot;
                </p>
                <div className="mt-4 font-bold text-xs text-zinc-400">DEVSCALE CLOUD INFRASTRUCTURE</div>
              </div>

              {/* 6. CTA */}
              <div className="flex flex-col sm:flex-row gap-6 items-start sm:items-center justify-between">
                <div className="space-y-1">
                  <h3 className="text-lg font-black text-zinc-900 dark:text-zinc-100 tracking-tight leading-tight">Stop losing traffic.</h3>
                  <p className="text-sm text-zinc-500 font-inter font-medium">No credit card required for your audit.</p>
                </div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button variant="default" className="group rounded-full px-8 py-6 text-base font-bold transition-all shadow-xl hover:shadow-primary/20">
                    Get Free Audit
                    <ArrowUpRight className="ml-2 w-5 h-5 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" />
                  </Button>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

function MetricItem({ 
  icon, 
  value, 
  label, 
  description, 
  color,
  variant,
  inView,
  suffix = '', 
  prefix = '',
  decimals = 0 
}: { 
  icon: React.ReactNode, 
  value: number, 
  label: string, 
  description: string,
  color: string,
  variant: any,
  inView: boolean,
  suffix?: string,
  prefix?: string,
  decimals?: number
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, {
    damping: 30,
    stiffness: 80,
  });

  useEffect(() => {
    if (inView) {
      motionValue.set(value);
    }
  }, [value, motionValue, inView]);

  useEffect(() => {
    const unsub = springValue.on("change", (latest) => {
      if (ref.current) {
        ref.current.textContent = latest.toFixed(decimals);
      }
    });
    return () => unsub();
  }, [springValue, decimals]);

  return (
    <motion.div 
      variants={variant}
      className="p-6 rounded-3xl transition-all duration-300 bg-white dark:bg-zinc-900 border-2 border-zinc-100 dark:border-zinc-800/50 hover:shadow-xl hover:shadow-black/5 hover:border-zinc-200 group cursor-default"
    >
      <div className="flex items-center gap-4 mb-4">
        <div className={cn("p-2 rounded-xl bg-zinc-50 dark:bg-zinc-800/50 shadow-xs ring-1 ring-zinc-200 dark:ring-zinc-800 transition-colors group-hover:bg-primary group-hover:text-white group-hover:ring-primary", color)}>
           {icon}
        </div>
        <span className="text-[10px] font-black text-zinc-400 uppercase tracking-[0.2em]">{label}</span>
      </div>
      <div className="text-3xl font-black text-zinc-900 dark:text-zinc-50 tracking-tighter leading-none mb-2">
        {prefix}<span ref={ref}>0</span>{suffix}
      </div>
      <p className="text-[11px] text-zinc-500 leading-snug font-inter font-medium opacity-80 group-hover:opacity-100 transition-opacity">{description}</p>
    </motion.div>
  );
}
