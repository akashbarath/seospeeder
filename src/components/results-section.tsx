'use client';

import { useRef, useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import {
  ImageComparison,
  ImageComparisonImage,
  ImageComparisonSlider,
} from '@/components/core/image-comparison';
import { ArrowUpRight, Zap, Trophy, Activity, Search } from 'lucide-react';
import { motion, useSpring, useMotionValue, useInView, Variants } from 'framer-motion';
import { useTheme } from 'next-themes';
import { cn } from '@/lib/utils';

export function ResultsSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const handle = requestAnimationFrame(() => setMounted(true));
    return () => cancelAnimationFrame(handle);
  }, []);

  const headerVariants: Variants = {
    hidden: { opacity: 0, y: 30, filter: "blur(10px)" },
    visible: { 
      opacity: 1, 
      y: 0, 
      filter: "blur(0.1px)",
      transition: { duration: 0.8, ease: [0.23, 1, 0.32, 1] }
    }
  };

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, scale: 0.95, y: 20 },
    visible: { 
      opacity: 1, 
      scale: 1, 
      y: 0,
      transition: { type: "spring", stiffness: 100, damping: 20 }
    }
  };

  return (
    <section ref={containerRef} className="pt-20 pb-10 md:pt-32 md:pb-16 px-4 sm:px-6 lg:px-8 bg-white dark:bg-black overflow-hidden relative">
      {/* Ambient backgrounds */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-[radial-gradient(circle_at_70%_30%,hsl(var(--primary)/0.03),transparent_70%)] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto space-y-12 md:space-y-20 relative z-10">
        {/* 1. Section Headline & Subheading */}
        <motion.div 
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={headerVariants}
          className="text-center max-w-4xl mx-auto space-y-4 md:space-y-6"
        >
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tight text-zinc-900 dark:text-zinc-50 leading-[1.1] md:leading-[1.05]">
            Engineered for instant rankings.
          </h2>
          <p className="text-base md:text-xl text-zinc-500 dark:text-zinc-400 font-inter font-medium leading-relaxed max-w-2xl mx-auto opacity-80 px-4 md:px-0">
            Performance is the new SEO. See how we transform sluggish sites into lightning-fast experiences that Google loves.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-8 md:gap-16 items-start">
          {/* Left Column: Image Comparison */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, delay: 0.4 }}
            className="lg:col-span-7 space-y-4 md:space-y-6"
          >
            <div className="relative group mx-auto max-w-[500px] lg:max-w-none">
                <div className="absolute -inset-1 bg-linear-to-r from-primary/20 to-transparent blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
                <ImageComparison
                  className="aspect-[1905/1080] w-full rounded-2xl border-2 border-zinc-200 dark:border-zinc-800 bg-zinc-100 dark:bg-zinc-900 shadow-xl relative z-10"
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
            <div 
               className="text-center text-zinc-600 dark:text-zinc-400 font-bold text-[9px] md:text-[10px] uppercase tracking-[0.2em]"
            >
               Drag to compare speed impact
            </div>
          </motion.div>

          {/* Right Column: Metrics Grid */}
          <div className="lg:col-span-5">
            <motion.div 
              variants={containerVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 md:gap-6"
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
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="mt-4 md:mt-6 flex flex-col sm:flex-row gap-6 items-center justify-between p-6 md:p-8 rounded-2xl bg-zinc-900 dark:bg-gradient-to-br dark:from-white/5 dark:to-transparent dark:border dark:border-white/10 dark:shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)] relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-primary/10 blur-[80px] hidden dark:block pointer-events-none" />

              <div className="space-y-1 text-center sm:text-left relative z-10">
                <h3 className="text-lg xl:text-xl font-black text-white tracking-tight leading-tight">Stop losing traffic.</h3>
                <p className="text-xs xl:text-sm text-zinc-400 font-inter font-medium leading-relaxed max-w-[200px] xl:max-w-[240px]">No credit card required for your professional audit.</p>
              </div>
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="relative z-10 w-full sm:w-auto shrink-0"
              >
                <Button 
                  className="w-full group/btn relative overflow-hidden rounded-xl font-bold h-12 px-8 text-base bg-white text-zinc-900 hover:bg-zinc-100 transition-all duration-300 shadow-xl border-none"
                >
                  <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-zinc-400/20 to-transparent -translate-x-[150%] skew-x-[-30deg] group-hover/btn:translate-x-[150%] transition-transform duration-1000 ease-out pointer-events-none z-0" />
                  <span className="relative z-10 flex items-center justify-center">
                    Get Free Audit
                    <ArrowUpRight className="ml-2 w-5 h-5 group-hover/btn:-translate-y-0.5 group-hover/btn:translate-x-0.5 transition-transform" />
                  </span>
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* 5. Full Width Migration Insight */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          {/* Compact Migration Insight Card */}
          <Card className="bg-white dark:bg-zinc-900 rounded-2xl p-6 md:p-8 border-2 border-zinc-100 dark:border-zinc-800 shadow-sm relative overflow-hidden group cursor-default">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8 relative z-10">
              <div className="flex-1 flex flex-col gap-4">
                <div className="flex items-center gap-2">
                  <div className="size-8 rounded-lg bg-zinc-900 dark:bg-zinc-50 flex items-center justify-center border-2 border-zinc-900 dark:border-zinc-50 shadow-sm">
                    <Activity size={14} className="text-white dark:text-zinc-900" />
                  </div>
                  <span className="text-[10px] font-black text-zinc-900 dark:text-white uppercase tracking-widest">Migration Insight</span>
                </div>
                <h3 className="text-xl md:text-2xl font-black text-zinc-900 dark:text-zinc-50 tracking-tight leading-snug">
                  &ldquo;After SEO Speeder, DevScale saw their indexation hit 100% in 48 hours.&rdquo;
                </h3>
              </div>
              
              <div className="flex items-center gap-6 shrink-0 bg-zinc-50 dark:bg-zinc-800/50 p-4 rounded-xl border border-zinc-100 dark:border-zinc-800 transition-colors group-hover:bg-zinc-100 dark:group-hover:bg-zinc-800">
                <div className="flex flex-col text-center">
                  <span className="text-xl font-black text-zinc-900 dark:text-zinc-50 tracking-tighter">+100%</span>
                  <span className="text-[8px] font-black text-zinc-400 uppercase tracking-widest leading-none">Discovery</span>
                </div>
                <div className="w-px h-6 bg-zinc-200 dark:border-zinc-700" />
                <div className="flex flex-col text-center">
                  <span className="text-xl font-black text-emerald-500 tracking-tighter">+20%</span>
                  <span className="text-[8px] font-black text-zinc-400 uppercase tracking-widest leading-none">Retention</span>
                </div>
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}

const MotionCard = motion.create(Card);

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
  variant: Variants,
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
    <MotionCard 
      variants={variant}
      className="p-6 rounded-2xl transition-all duration-300 bg-white dark:bg-zinc-900 border-2 border-zinc-100 dark:border-zinc-800/50 hover:shadow-xl hover:shadow-black/5 hover:border-zinc-300 dark:hover:border-zinc-700 group cursor-default"
    >
      <div className="flex items-center gap-4 mb-4">
        <div className={cn(
            "p-2 rounded-xl bg-zinc-50 dark:bg-zinc-800/50 shadow-xs border-2 border-zinc-200 dark:border-zinc-800 transition-all duration-300 group-hover:bg-zinc-900 group-hover:text-white dark:group-hover:bg-zinc-100 dark:group-hover:text-zinc-900 group-hover:border-zinc-900 dark:group-hover:border-zinc-100 group-hover:scale-110",
            color
        )}>
           {icon}
        </div>
        <span className="text-[11px] lg:text-[10px] font-black text-zinc-600 dark:text-zinc-300 uppercase tracking-[0.2em]">{label}</span>
      </div>
      <div className="text-3xl font-black text-zinc-900 dark:text-zinc-50 tracking-tighter leading-none mb-2">
        {prefix}<span ref={ref}>0</span>{suffix}
      </div>
      <p className="text-xs lg:text-[11px] text-zinc-600 dark:text-zinc-400 leading-snug font-bricolage font-medium mb-1 line-clamp-2 md:line-clamp-none opacity-80 group-hover:opacity-100 transition-opacity">{description}</p>
    </MotionCard>
  );
}
