"use client";

import { useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";
import { Brain, Network, Database, Sparkles, Orbit, Cpu, Zap, Activity } from "lucide-react";
import { cn } from "@/lib/utils";
import { Highlighter } from "@/components/ui/highlighter";

const features = [
  {
    title: "Predictive Intent Modeling",
    description: "Our neural networks predict evolving search trends before they peak, positioning your brand ahead of the curve and capturing high-intent traffic.",
    icon: Brain,
    color: "from-blue-500/20 to-violet-500/20",
    border: "group-hover:border-violet-500/50",
    iconColor: "text-violet-500",
    bgIcon: Orbit,
    cta: "Run Prediction",
  },
  {
    title: "Semantic Knowledge Graphs",
    description: "We architect deep topical authority clusters using NLP algorithms, ensuring Google implicitly understands your absolute dominance in your niche.",
    icon: Network,
    color: "from-emerald-500/20 to-teal-500/20",
    border: "group-hover:border-teal-500/50",
    iconColor: "text-teal-500",
    bgIcon: Network,
    cta: "Map Entities",
  },
  {
    title: "Algorithmic Reverse-Engineering",
    description: "Machine learning engines continuously monitor SERP volatility across millions of data points to reverse-engineer exact core ranking factors.",
    icon: Cpu,
    color: "from-amber-500/20 to-orange-500/20",
    border: "group-hover:border-orange-500/50",
    iconColor: "text-orange-500",
    bgIcon: Database,
    cta: "Extract Signals",
  },
  {
    title: "AI-Automated Content Gaps",
    description: "LLMs scan competitor sitemaps instantly to detect lucrative content gaps and structural weaknesses that we can instantly exploit for rapid scale.",
    icon: Sparkles,
    color: "from-rose-500/20 to-pink-500/20",
    border: "group-hover:border-pink-500/50",
    iconColor: "text-pink-500",
    bgIcon: Sparkles,
    cta: "Scan Competitors",
  }
];

export function AiSeoFeaturesSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  return (
    <section ref={containerRef} className="py-24 relative overflow-hidden bg-background">
      {/* Dynamic Background Effects */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[100px] pointer-events-none opacity-50" 
        style={{ WebkitFilter: 'blur(100px)', WebkitTransform: 'translateZ(0)' }} 
      />
      <div 
        className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-primary/20 to-transparent"
      />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
          <motion.h2 
            initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
            animate={isInView ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}}
            transition={{ duration: 0.8, delay: 0.1, type: "spring", bounce: 0.3 }}
            className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-tighter leading-[1.05] mb-6"
          >
            Powered by Elite <br />
            <Highlighter color="hsl(var(--foreground) / 0.1)" padding={0} strokeWidth={1} iterations={1}>
              Machine Learning
            </Highlighter>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-muted-foreground font-inter max-w-2xl mx-auto"
          >
            We don't guess. We compute. Our proprietary AI pipelines analyze billions of ranking signals to deliver an unfair mathematical advantage in search.
          </motion.p>
        </div>

        {/* Feature Grid */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8 max-w-6xl mx-auto">
          {features.map((feature, i) => (
            <motion.div
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.3 + i * 0.1, type: "spring", bounce: 0.2 }}
              key={i}
              className={cn(
                "group relative p-8 md:p-12 rounded-[2rem] bg-card/50 backdrop-blur-sm border border-border hover:shadow-2xl transition-all duration-500 overflow-hidden preserve-3d isolate",
                feature.border
              )}
            >
              {/* Dynamic Hover Gradient */}
              <div 
                className={cn(
                  "absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none -z-10",
                  feature.color
                )} 
              />
              
              {/* Huge Background Icon */}
              <div className="absolute -top-10 -right-10 text-muted/10 group-hover:text-muted/30 transition-colors duration-700 pointer-events-none -z-10 group-hover:rotate-12 group-hover:scale-110">
                 <feature.bgIcon size={240} strokeWidth={1} />
              </div>
              
              <div className="relative z-10 flex flex-col gap-6 h-full">
                <div className={cn(
                  "w-16 h-16 rounded-2xl bg-background border border-border/50 flex items-center justify-center shadow-lg relative overflow-hidden group-hover:scale-110 transition-transform duration-500",
                  feature.iconColor
                )}>
                  {/* Subtle pulsing background for the icon */}
                  <div className="absolute inset-0 bg-current opacity-10 group-hover:animate-ping duration-1000" />
                  <feature.icon size={32} strokeWidth={1.5} className="relative z-10" />
                  
                  {/* Particle effects on hover */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute top-1 left-1 w-1 h-1 bg-current rounded-full animate-ping" style={{ animationDelay: '0.1s' }} />
                    <div className="absolute bottom-2 right-2 w-1.5 h-1.5 bg-current rounded-full animate-ping" style={{ animationDelay: '0.4s' }} />
                    <div className="absolute top-3 right-1 w-0.5 h-0.5 bg-current rounded-full animate-ping" style={{ animationDelay: '0.7s' }} />
                  </div>
                </div>
                
                <div className="space-y-4">
                  <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-foreground transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-lg text-muted-foreground font-inter leading-relaxed max-w-md group-hover:text-muted-foreground/90 transition-colors">
                    {feature.description}
                  </p>
                </div>

                <div className="mt-auto pt-8">
                   <div className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-muted-foreground group-hover:text-primary transition-colors cursor-default">
                     <span className="flex items-center justify-center size-6 rounded-full bg-primary/10 text-primary">
                        <Zap size={12} className="group-hover:fill-primary" />
                     </span>
                     {feature.cta}
                   </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
