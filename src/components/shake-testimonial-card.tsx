"use client";

import React, { useState, useEffect, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { cn } from "@/lib/utils";
import { CheckCircle2, Star } from "lucide-react";
import Image from "next/image";
import { AvatarStack } from "@/components/ui/avatar-stack";



interface Testimonial {
  id: number;
  name: string;
  role: string;
  avatar: string;
  content: string;
  rating: number;
  date: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Alex Chen",
    role: "Technologist",
    avatar: "/assets/avatars/male-1.png",
    content:
      "Implementation was seamless. Our Core Web Vitals score went from 65 to 98 overnight. The automated optimisations are a game-changer for our engineering team.",
    rating: 5,
    date: "2 days ago",
  },
  {
    id: 2,
    name: "Sarah Miller",
    role: "SEO Specialist",
    avatar: "/assets/avatars/female-1.png",
    content:
      "The automated speed audits saved us hours of manual work every week. Finally, a tool that actually improves performance instead of just reporting on it.",
    rating: 5,
    date: "1 week ago",
  },
  {
    id: 3,
    name: "James Wilson",
    role: "DevOps Lead",
    avatar: "/assets/avatars/male-2.png",
    content:
      "Scaling our infrastructure used to be a nightmare until we found SEOSpeeder. Now we can focus on building features while the tool handles performance.",
    rating: 5,
    date: "3 days ago",
  },
  {
    id: 4,
    name: "Emily Davis",
    role: "CMO",
    avatar: "/assets/avatars/female-2.png",
    content:
      "Our organic traffic increased by 40% within the first month. The investment paid for itself ten times over in improved conversion rates.",
    rating: 5,
    date: "5 hours ago",
  },
];

export function TestimonialSection() {
  const container = useRef<HTMLDivElement>(null);
  const [cards, setCards] = useState(testimonials);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isIntroComplete, setIsIntroComplete] = useState(false);

  // Auto-rotate testimonials - Only start after intro is complete
  const handleNext = useCallback(() => {
    if (isAnimating) return;
    setIsAnimating(true);

    setTimeout(() => {
      setCards((prev) => {
        const [first, ...rest] = prev;
        return [...rest, first];
      });
      setIsAnimating(false);
    }, 600);
  }, [isAnimating]);

  useEffect(() => {
    if (!isIntroComplete) return;

    const interval = window.setInterval(() => {
      handleNext();
    }, 5000); 
    return () => clearInterval(interval);
  }, [handleNext, isIntroComplete]);

  // Intro animations removed as per user request
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setIsIntroComplete(true);
  }, []);

  return (
    <section ref={container} className="relative w-full py-16 md:py-24 overflow-hidden bg-background">
      {/* SVG Gradient Definition */}
      <svg width="0" height="0" className="absolute pointer-events-none">
        <defs>
          <linearGradient id="star-gradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.4" />
            <stop offset="100%" stopColor="hsl(var(--primary))" />
          </linearGradient>
        </defs>
      </svg>
      {/* Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />
      
      {/* Static Ambient Glow */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/20 blur-[120px] rounded-full pointer-events-none opacity-40 dark:opacity-60"
      />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Left Content */}
          <div className="flex flex-col gap-8 max-w-2xl">

            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground leading-[1.1]">
              <span className="section-title-word inline-block mr-2 md:mr-3">Trusted</span>
              <span className="section-title-word inline-block mr-2 md:mr-3">by</span>
              <span className="section-title-word inline-block mr-2 md:mr-3">fast-growing</span>
              <span className="section-title-word inline-block text-primary">companies</span>
              <span className="section-title-word inline-block ml-2 md:ml-3">worldwide.</span>
            </h2>
            <p className="section-desc text-muted-foreground text-lg md:text-xl font-primary leading-relaxed max-w-lg">
              Don&apos;t just take our word for it. See how seospeeder transforms website performance and rankings for businesses like yours.
            </p>
            
             <div className="trust-stats flex items-center gap-6 pt-4 border-t border-border/50">
                <AvatarStack 
                  avatars={["male-3.png", "female-3.png", "male-1.png", "female-1.png"]}
                  totalCount="+2k"
                  size="lg"
                />
                <div className="flex flex-col">
                   <div className="flex items-center gap-1 text-yellow-500">
                      {[1, 2, 3, 4, 5].map((s) => (
                        <Star key={s} className="w-4 h-4 fill-current" />
                      ))}
                   </div>
                   <div className="flex items-center gap-2">
                       <span className="text-sm font-semibold text-foreground">4.9/5 Rating</span>
                       <span className="text-xs text-muted-foreground font-inter">from 2,000+ reviews</span>
                   </div>
                </div>
             </div>
          </div>

          {/* Right Content - Cards */}
          <div className="testimonial-card-container relative h-[400px] md:h-[500px] w-full flex items-center justify-center -mt-8 md:mt-0">
            {/* Ambient Glow behind cards */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-primary/30 blur-[120px] rounded-full pointer-events-none opacity-50" />
            
            <div
              className="relative w-[90vw] max-w-[340px] h-[260px] sm:max-w-[400px] sm:h-[280px] md:max-w-[450px] md:h-[300px]"
              style={{ perspective: "1000px" }}
            >
              <AnimatePresence mode="popLayout">
                {cards.map((card, index) => {
                  const isTop = index === 0;
                  return (
                    <motion.div
                      key={card.id}
                      layout
                      style={{
                        zIndex: cards.length - index,
                        position: "absolute",
                        top: 0,
                        left: 0,
                        transformOrigin: "center center",
                        willChange: "transform, filter",
                      }}
                      initial={{
                        scale: 0.7,
                        opacity: 0,
                        y: 40,
                        rotateX: -20,
                      }}
                      animate={{
                        scale:
                            isTop && isAnimating
                            ? [1, 1.02, 0.98, 1.02, 1, 1, 0.9]
                            : 1 - index * 0.05,
                        y:
                            isTop && isAnimating
                            ? [0, 0, 0, 0, 0, -50, -300]
                            : index * 15,
                        rotateX:
                            isTop && isAnimating ? [0, 0, 0, 0, 0, 20, 60] : -index * 2,
                        x: isTop && isAnimating ? [0, -3, 3, -3, 0, 40, 150] : 0,
                        rotate: isTop && isAnimating ? [0, -2, 2, -2, 0, 10, 25] : 0,
                        filter: isTop && isAnimating ? ["blur(0.1px)", "blur(0.1px)", "blur(0.1px)", "blur(0.1px)", "blur(0.1px)", "blur(2px)", "blur(4px)"] : "blur(0.1px)",
                        opacity: index < 4 ? 1 : 0,
                        zIndex: cards.length - index,

                        transition:
                            isTop && isAnimating
                            ? {
                                duration: 0.55, 
                                times: [0, 0.1, 0.2, 0.3, 0.4, 0.6, 1],
                                ease: [0.4, 0.0, 0.2, 1], 
                            }
                            : {
                                scale: { type: "spring", stiffness: 260, damping: 20 },
                                y: { type: "spring", stiffness: 260, damping: 20 },
                                rotateX: { type: "spring", stiffness: 260, damping: 20 },
                                x: { type: "spring", stiffness: 260, damping: 20 },
                                rotate: { type: "spring", stiffness: 260, damping: 20 },
                                opacity: { duration: 0.3 },
                                filter: { duration: 0.3, ease: "easeOut" }
                            },
                      }}
                       className={cn(
                        "w-full h-full rounded-2xl md:rounded-3xl p-5 md:p-8",
                        "bg-card/95 border border-white/10 shadow-2xl backdrop-blur-md",
                        "flex flex-col justify-between overflow-hidden",
                        "cursor-grab active:cursor-grabbing preserve-3d",
                        isTop ? "shadow-[0_20px_50px_-12px_rgba(0,0,0,0.15)] ring-1 ring-white/20" : "opacity-50 grayscale-[0.5]"
                      )}
                      onClick={() => {
                          if(!isAnimating) handleNext();
                      }}
                    >
                        {/* Glass Shine Effect */}
                        <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-50 pointer-events-none" />
                        
                      <div className="flex flex-col gap-4 relative z-10">
                        <div className="flex items-center justify-between">
                           <div className="flex items-center gap-3">
                              <div className="relative w-12 h-12 shrink-0 rounded-full bg-primary/10 flex items-center justify-center overflow-hidden ring-2 ring-background">
                                <Image 
                                  src={card.avatar} 
                                  alt={card.name} 
                                  fill
                                  className="object-cover"
                                  sizes="(max-width: 768px) 48px, 48px"
                                />
                              </div>
                              <div>
                                <h3 className="font-semibold text-foreground text-lg leading-tight">{card.name}</h3>
                                <p className="text-xs text-muted-foreground font-inter uppercase tracking-wide font-medium">{card.role}</p>
                              </div>
                           </div>
                           <div className="flex items-center gap-0.5 px-2 py-1 rounded-full border border-white/10 bg-black/5">
                             {[...Array(card.rating)].map((_, i) => (
                               <Star 
                                 key={i} 
                                 className="w-3.5 h-3.5 text-primary/20" 
                                 fill="url(#star-gradient)" 
                                 strokeWidth={1}
                               />
                             ))}
                           </div>
                        </div>
                        <p className="text-base sm:text-lg md:text-xl text-foreground font-medium leading-relaxed tracking-tight">
                          &quot;{card.content}&quot;
                        </p>
                      </div>
                      
                      <div className="flex items-center justify-between mt-auto pt-4 border-t border-border/40 relative z-10">
                          <div className="flex items-center gap-2 text-muted-foreground">
                              <CheckCircle2 className="w-4 h-4 text-green-500" />
                              <span className="text-xs font-inter font-medium">Verified Customer</span>
                          </div>
                          <span className="text-xs text-muted-foreground/60 font-inter">{card.date}</span>
                      </div>
                    </motion.div>
                  );
                })}
              </AnimatePresence>
            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
}

