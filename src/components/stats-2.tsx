'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Zap, Search, Trophy, Target, ShieldCheck, TrendingUp } from 'lucide-react';
import { Highlighter } from "@/components/ui/highlighter";
import { cn } from "@/lib/utils";

const stats = [
  {
    value: "99+",
    label: "PageSpeed",
    description: "We literally make your site load in the blink of an eye. Google loves fast sites, and we make sure yours passes every Core Web Vitals test with flying colours so you can easily grab those top search spots.",
    icon: Zap,
  },
  {
    value: "3.5x",
    label: "ROI Boost",
    description: "Think of speed as the secret sauce for your bottom line. When your site feels snappy, people actually stick around, read your stuff, and buy what you're selling. We help you turn site speed into real business growth.",
    icon: TrendingUp,
  },
  {
    value: "100%",
    label: "Indexation",
    description: "There's nothing worse than publishing great content that Google never finds. We hook up a priority pipeline straight to search engines, so your new pages get scooped up and ranked the second they go live.",
    icon: Search,
  },
  {
    value: "0.5s",
    label: "LCP",
    description: "Ever click a link and stare at a blank white screen? Yeah, we hate that too. We optimise the biggest stuff on your page so it pops into view instantly. People don't like waiting, so we just remove the wait entirely.",
    icon: Trophy,
  },
  {
    value: "0px",
    label: "CLS",
    description: "We make sure buttons don't jump around when visitors try to click them. By locking everything in place instantly, we deliver a premium, smooth experience that protects your hard-earned traffic.",
    icon: Target,
  },
  {
    value: "24/7",
    label: "Monitoring",
    description: "We're your website's personal bodyguard. We monitor your performance around the clock and alert you if anything drops, so you never have to worry about unnoticed speed issues hurting your rankings.",
    icon: ShieldCheck,
  }
];

export function Stats() {
  const [activeStat, setActiveStat] = useState<number | null>(0);

  return (
    <section className="bg-background py-16 sm:py-24 font-primary overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-10 mb-12 sm:mb-16">
          <div className="max-w-2xl space-y-4 text-center lg:text-left mx-auto lg:mx-0">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground leading-[1.1]">
              Unmatched <Highlighter color="hsl(var(--foreground) / 0.1)" padding={0} strokeWidth={1} iterations={1}>Speed & Reliability</Highlighter>
            </h2>
            <p className="text-muted-foreground text-lg sm:text-xl max-w-xl mx-auto lg:mx-0 font-inter font-medium leading-relaxed">
              Our infrastructure helps you pass Core Web Vitals instantly, boosting SEO and user retention with precision engineering.
            </p>
          </div>
        </div>

        <div className="w-full">
          {/* 
            Mobile: Vertical stack with flexible heights
            Tablet: Horizontal with condensed width
            Desktop: Horizontal with full expansion
          */}
          <div className="flex flex-col lg:flex-row w-full gap-3 md:gap-4 items-stretch justify-center h-auto lg:h-[400px] min-h-[400px] lg:min-h-0">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="relative cursor-pointer group/stat overflow-hidden rounded-[1.8rem] md:rounded-[2rem] lg:rounded-3xl"
                animate={{
                  // Height logic for mobile, Width for desktop
                  flexGrow: activeStat === index ? 3 : 1,
                  // Mobile: Minimum height for non-active, fixed for active
                  minHeight: activeStat === index ? "320px" : "100px",
                }}
                transition={{ 
                  type: "spring",
                  stiffness: 80,
                  damping: 25,
                  mass: 1.2
                }}
                onHoverStart={() => setActiveStat(index)}
                onMouseEnter={() => setActiveStat(index)}
                onClick={() => setActiveStat(index)}
              >
                {/* Core Wall/Border */}
                <div className="absolute inset-0 p-[1.5px] md:p-[2px] rounded-[1.8rem] md:rounded-[2rem] lg:rounded-3xl overflow-hidden">
                   {/* Outer base border color */}
                   <div className={cn(
                     "absolute inset-0 bg-border/40 transition-opacity duration-500 ease-in-out",
                     activeStat === index ? "opacity-0" : "opacity-100"
                   )} />

                   {/* Spinning Conic Gradient Border */}
                   <div className={cn(
                     "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300%] aspect-square transition-opacity duration-1000 ease-in-out pointer-events-none",
                     activeStat === index ? "opacity-100" : "opacity-0"
                   )}>
                     <div className="w-full h-full animate-[spin_6s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,transparent_0%,hsl(var(--primary))_10%,transparent_40%,transparent_100%)] will-change-transform" />
                   </div>

                   {/* Inner Card Content */}
                   <div className={cn(
                     "relative w-full h-full bg-card/95 backdrop-blur-3xl rounded-[calc(1.8rem-1.5px)] md:rounded-[calc(2rem-2px)] lg:rounded-[calc(1.5rem-2px)] p-6 md:p-6 md:pb-5 flex flex-col justify-between z-10 overflow-hidden transition-all duration-500",
                     activeStat !== index ? "items-center lg:items-start" : "items-start"
                   )}>
                     {/* Soft interior glow */}
                     <div className={cn(
                       "absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent transition-opacity duration-500 ease-in-out pointer-events-none",
                       activeStat === index ? "opacity-100" : "opacity-0"
                     )} />

                     {/* Top Section: Icon & Value */}
                     <div className={cn(
                       "flex gap-4 md:gap-6 relative z-10 transition-all duration-500 w-full",
                       activeStat === index ? "flex-col" : "flex-row lg:flex-col items-center lg:items-start justify-between lg:justify-start"
                     )}>
                        <div className={cn(
                          "size-10 md:size-12 lg:size-14 rounded-xl md:rounded-2xl flex items-center justify-center transition-all duration-500 shadow-sm shrink-0 border-2",
                          activeStat === index 
                            ? "bg-primary text-primary-foreground border-primary scale-110 shadow-lg shadow-primary/20" 
                            : "bg-muted/50 text-primary/70 border-border/50 group-hover/stat:border-primary/30"
                        )}>
                          <stat.icon className="size-5 md:size-6 lg:size-7" strokeWidth={2} />
                        </div>
                        
                        <div className={cn(
                          "space-y-1 transition-all duration-500",
                          activeStat !== index ? "flex flex-col lg:block text-right lg:text-left" : "block"
                        )}>
                          <motion.span 
                            layout
                            className={cn(
                              "font-bold tracking-tighter text-foreground block transition-all duration-500 leading-none",
                              activeStat === index ? "text-3xl md:text-5xl lg:text-6xl" : "text-xl md:text-2xl lg:text-3xl"
                            )}
                          >
                            {stat.value}
                          </motion.span>
                          <motion.span 
                            layout
                            className={cn(
                              "font-bold uppercase tracking-[0.2em] text-muted-foreground block transition-all duration-500",
                              activeStat === index ? "text-[8px] md:text-[10px] lg:text-[11px] mt-2" : "text-[7px] md:text-[8px] lg:text-[9px]"
                            )}
                          >
                            {stat.label}
                          </motion.span>
                        </div>
                     </div>

                     {/* Expanded Content: Description */}
                     <AnimatePresence mode="wait">
                        {activeStat === index && (
                          <motion.div
                            initial={{ opacity: 0, y: 15 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 10 }}
                            transition={{ duration: 0.4, ease: "easeOut" }}
                            className="relative z-10 mt-4 lg:mt-0"
                          >
                            <p className="text-muted-foreground/90 text-sm md:text-base lg:text-lg leading-relaxed font-inter font-medium max-w-[400px] lg:max-w-[320px]">
                              {stat.description}
                            </p>
                          </motion.div>
                        )}
                     </AnimatePresence>
                   </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
