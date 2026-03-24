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
                <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-transparent blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
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
                  <ImageComparisonSlider className="w-[2px] bg-gradient-to-b from-zinc-200 via-zinc-500 to-zinc-200 dark:from-white/20 dark:via-white dark:to-white/20 shadow-[0_0_10px_rgba(0,0,0,0.1)] dark:shadow-[0_0_15px_rgba(255,255,255,0.5)]" />
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
                color="text-[#21759b]"
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
              <div className="absolute inset-0 bg-primary/10 blur-[60px] hidden dark:block pointer-events-none" style={{ WebkitFilter: 'blur(60px)', WebkitTransform: 'translateZ(0)' }} />

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
        <motion.div 
          animate={{ y: [0, -2, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          whileHover={{ 
            rotate: [-1, 1, -1, 1, 0],
            transition: { duration: 0.2, repeat: Infinity }
          }}
          className="flex size-10 shrink-0 items-center justify-center rounded-full border-2 bg-card shadow-sm outline outline-border/80 outline-offset-2 group-hover:scale-110 group-hover:bg-primary/5 transition-all duration-500"
        >
           <div className="text-foreground group-hover:text-primary transition-colors duration-300 [&>svg]:size-[18px] leading-none flex">
              {icon}
           </div>
        </motion.div>
        <span className="text-[11px] lg:text-[10px] font-black text-zinc-600 dark:text-zinc-300 uppercase tracking-[0.2em]">{label}</span>
      </div>
      <div className="text-3xl font-black text-zinc-900 dark:text-zinc-50 tracking-tighter leading-none mb-2">
        {prefix}<span ref={ref}>0</span>{suffix}
      </div>
      <p className="text-xs lg:text-[11px] text-zinc-600 dark:text-zinc-400 leading-snug font-bricolage font-medium mb-1 line-clamp-2 md:line-clamp-none opacity-80 group-hover:opacity-100 transition-opacity">{description}</p>
    </MotionCard>
  );
}
