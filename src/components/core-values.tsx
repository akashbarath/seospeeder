"use client";

import { useEffect, useRef } from "react";
import { 
  Eye, 
  Lightbulb, 
  TrendingUp, 
  Users 
} from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { cn } from "@/lib/utils";

gsap.registerPlugin(ScrollTrigger);

const values = [
  {
    title: "Transparency First",
    description: "Honest reporting and clear metrics. We give you full visibility into every optimisation.",
    icon: Eye,
    color: "primary",
    rgb: "rgb(23, 23, 23)"
  },
  {
    title: "Innovation Always",
    description: "Constant iteration is our core. We keep you ahead of every technological shift.",
    icon: Lightbulb,
    color: "primary",
    rgb: "rgb(23, 23, 23)"
  },
  {
    title: "Results Driven",
    description: "Revenue is what matters. Every optimisation is designed to improve your bottom line.",
    icon: TrendingUp,
    color: "primary",
    rgb: "rgb(23, 23, 23)"
  },
  {
    title: "Human Centric",
    description: "We engineer for people. Your team's ease and users' experience are uncompromisable.",
    icon: Users,
    color: "primary",
    rgb: "rgb(23, 23, 23)"
  }
];

function InteractiveCard({ value }: { value: typeof values[0] }) {
  return (
    <div className="core-value-card opacity-0 translate-y-8 h-full">
      {/* Outer wrapper — handles the spinning border via padding-trick */}
      <div className="relative group/card rounded-2xl p-[2px] overflow-hidden shadow-sm hover:shadow-xl hover:shadow-primary/5 transition-shadow duration-500 ease-in-out cursor-default h-full">

        {/* Outer base border color when not hovered */}
        <div className="absolute inset-0 bg-border/40 transition-opacity duration-500 ease-in-out group-hover/card:opacity-0" />

        {/* Hardware Accelerated Spinning Conic Gradient Border */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200%] aspect-square opacity-0 group-hover/card:opacity-100 transition-opacity duration-1000 ease-in-out pointer-events-none">
          <div 
            className="w-full h-full animate-[spin_5s_linear_infinite] will-change-transform" 
            style={{ 
              background: `conic-gradient(from 90deg at 50% 50%, transparent 0%, ${value.rgb} 10%, transparent 40%, transparent 100%)`
            }}
          />
        </div>

        {/* Core Inner Card */}
        <div className="relative w-full h-full bg-card/90 backdrop-blur-xl rounded-[calc(1rem-2px)] px-5 py-6 flex flex-row lg:flex-col items-start gap-4 z-10 transition-colors duration-500 ease-in-out text-left">
          
          {/* Soft interior glow on hover */}
          <div className={cn("absolute inset-0 bg-gradient-to-br via-transparent to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity duration-500 ease-in-out pointer-events-none rounded-[calc(1rem-2px)]", `from-${value.color}/5`)} />
          
          {/* Icon */}
          <div className={cn("flex items-center justify-center size-10 rounded-xl bg-muted border-2 border-border/50 transition-all duration-500 ease-in-out shrink-0 relative z-10", `text-foreground group-hover/card:bg-primary group-hover/card:text-white group-hover/card:border-primary`)}>
            <value.icon className="size-5 transition-transform duration-500 ease-in-out group-hover/card:scale-110" strokeWidth={1.5} />
          </div>

          {/* Content Container */}
          <div className="flex flex-col gap-2 relative z-10">
            <span className={cn("font-bold text-lg sm:text-xl tracking-tight text-foreground transition-colors duration-500 ease-in-out leading-tight", `group-hover/card:text-primary`)}>
              {value.title}
            </span>
            <p className="text-sm text-muted-foreground leading-relaxed transition-colors duration-500 ease-in-out group-hover/card:text-foreground/80">
              {value.description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export function CoreValues() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(".core-value-card", {
        y: 0,
        opacity: 1,
        duration: 0.9,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 85%",
        }
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="space-y-8 py-12">
      <div className="text-center space-y-4 max-w-2xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-foreground">Our Core Values</h2>
        <p className="text-muted-foreground font-inter text-lg">
          The foundational principles that guide every feature we ship and every partnership we build.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-4 relative z-10">
        {values.map((value, i) => (
          <InteractiveCard key={i} value={value} />
        ))}
      </div>
    </section>
  );
}
