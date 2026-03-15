"use client";

import React from 'react';
import { TextEffect } from '@/components/motion-primitives/text-effect';
import { TextHighlighter } from "@/components/fancy/text/text-highlighter";
import { 
  Target
} from 'lucide-react';
import FeaturesGrid11 from "@/components/features-11";
import { CallToAction } from "@/components/cta";
import { CoreValues } from "@/components/core-values";

import { useLayoutEffect } from 'react';

export default function AboutPage() {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div id="about-section" className="container mx-auto px-4 py-16 md:py-24 min-h-screen max-w-5xl scroll-mt-24">
      <div className="grid gap-16 md:gap-24">
        {/* Hero Section */}
        <section className="space-y-6">
          <TextEffect 
            per="char" 
            preset="fade-in-blur" 
            className="text-5xl md:text-7xl font-bold tracking-tight text-foreground"
          >
            About SEO Speeder
          </TextEffect>
          
          <div className="text-xl md:text-2xl text-muted-foreground font-medium leading-relaxed font-inter">
            <TextEffect per='char' preset='fade' as='span'>
              {"Founded with a vision to democratise "}
            </TextEffect>
            <TextHighlighter 
              triggerType="auto" 
              highlightColor="hsl(var(--primary) / 0.15)" 
              className="text-foreground font-semibold"
              transition={{ delay: 1.0, duration: 1 }}
            >
              <TextEffect per='char' preset='fade' as='span' delay={1.0}>
                high-performance web engineering
              </TextEffect>
            </TextHighlighter>
            <TextEffect per='char' preset='fade' as='span' delay={2.2}>
              {", SEO Speeder is more than just an optimisation tool. We are a team of performance-obsessed engineers and SEO strategists dedicated to helping modern businesses thrive in an era where "}
            </TextEffect>
            <TextEffect per='char' preset='fade' as='span' delay={7.8}>
              speed is the ultimate competitive advantage.
            </TextEffect>
          </div>
        </section>

        {/* Philosophy & Stats Section */}
        <section className="grid lg:grid-cols-2 gap-10 md:gap-16 items-start pt-8 md:pt-12 border-t">
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold flex items-center gap-3">
                <Target className="text-primary size-8" />
                Our Philosophy
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed font-medium font-inter">
                Our proprietary AI-driven engine analyses thousands of performance metrics in real-time to deliver {" "}
                <TextHighlighter triggerType="auto" highlightColor="hsl(var(--primary) / 0.15)" className="text-foreground font-semibold">
                  precision optimisations
                </TextHighlighter>
                {" "} that static tools simply cannot match. From {" "}
                <TextHighlighter triggerType="auto" highlightColor="hsl(var(--primary) / 0.15)" className="text-foreground font-semibold">
                  Core Web Vitals
                </TextHighlighter>
                {" "} to deep backend latency, we leave no stone unturned in our pursuit of {" "}
                <TextHighlighter triggerType="auto" highlightColor="hsl(var(--primary) / 0.15)" className="text-foreground font-semibold">
                  digital excellence
                </TextHighlighter>.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed font-medium font-inter">
                We believe that the web should be accessible, fast, and delightful for everyone. By removing the technical barriers to performance, we empower creators and businesses to focus on what they do best: creating value for their users.
              </p>
            </div>
          </div>

          <div className="bg-muted/30 rounded-3xl p-10 border-2 border-primary/10 shadow-inner grid grid-cols-2 gap-8">
            {[
              { label: "Precision", value: "99.9%", desc: "Optimisation Accuracy" },
              { label: "Traffic", value: "2.4x", desc: "Average Growth" },
              { label: "Speed", value: "500ms", desc: "LCP Improvement" },
              { label: "Scale", value: "150M+", desc: "Pages Optimised" }
            ].map((stat, i) => (
              <div key={i} className="space-y-1">
                <span className="text-4xl font-bold text-primary tracking-tight">{stat.value}</span>
                <p className="text-sm font-semibold text-foreground uppercase tracking-wider">{stat.label}</p>
                <p className="text-xs text-muted-foreground">{stat.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <FeaturesGrid11 />

        {/* Our Journey - Timeline */}
        <section className="space-y-8 md:space-y-12 py-8 md:py-12 border-y border-border/50">
          <h2 className="text-3xl font-bold text-center">Our Journey So Far</h2>
          <div className="relative space-y-8 before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-border before:to-transparent">
            {[
              { year: "2022", title: "The Inception", desc: "SEO Speeder was founded with a mission to make speed accessible to all." },
              { year: "2023", title: "Scale Phase", desc: "Surpassed 50M optimised pages and launched our proprietary AI core." },
              { year: "2024", title: "Global Expansion", desc: "Opened 12 new edge locations and secured 500+ enterprise partnerships." },
              { year: "2025", title: "The Future", desc: "Pioneering the next generation of predictive performance engineering." }
            ].map((milestone, i) => (
              <div key={i} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
                <div className="flex items-center justify-center w-10 h-10 rounded-full border border-border bg-background shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                  <div className="size-2.5 rounded-full bg-primary animate-pulse" />
                </div>
                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] relative group/card rounded-[2rem] p-[2px] overflow-hidden shadow-sm hover:shadow-2xl hover:shadow-primary/5 transition-all duration-500 ease-in-out cursor-default">
                  
                  {/* Outer base border color when not hovered */}
                  <div className="absolute inset-0 bg-border/40 transition-opacity duration-500 ease-in-out group-hover/card:opacity-0" />
                  
                  {/* Hardware Accelerated, Stutter-Free Spinning Gradient */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200%] aspect-square opacity-0 group-hover/card:opacity-100 transition-opacity duration-1000 ease-in-out pointer-events-none">
                    <div className="w-full h-full animate-[spin_5s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,transparent_0%,hsl(var(--primary))_10%,transparent_40%,transparent_100%)] will-change-transform" />
                  </div>

                  {/* Core Inner Card Container */}
                  <div className="relative h-full w-full bg-card/90 backdrop-blur-3xl rounded-[calc(2rem-2px)] p-6 md:p-8 z-10 transition-colors duration-500 ease-in-out">
                    
                    {/* Soft smooth interior gradient glow on hover */}
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity duration-500 ease-in-out pointer-events-none rounded-[calc(2rem-2px)]" />

                    {/* Content neatly fading colors */}
                    <div className="relative z-10 space-y-3">
                      <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary font-bold text-sm border-2 border-primary/20 transition-colors duration-500 ease-in-out group-hover/card:bg-primary group-hover/card:text-primary-foreground group-hover/card:border-primary">
                        {milestone.year}
                      </span>
                      <h3 className="font-bold text-2xl tracking-tight text-foreground transition-colors duration-500 ease-in-out">{milestone.title}</h3>
                      <p className="text-muted-foreground text-base leading-relaxed font-medium transition-colors duration-500 ease-in-out group-hover/card:text-foreground/90">{milestone.desc}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Core Values */}
        <CoreValues />

        {/* Minimalist CTA Section */}
        <section className="py-12 md:py-20 relative">
          <CallToAction />
        </section>
      </div>
    </div>
  );
}
