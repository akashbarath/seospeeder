"use client";

import React, { useState, useEffect, useRef } from 'react';
import { 
    Zap, 
    Clock, 
    Search,
    Users,
    ShoppingCart,
    Cpu
} from 'lucide-react';
import { motion, useMotionValue, useSpring } from "motion/react";
import { cn } from "@/lib/utils";
import { Card } from "@/components/ui/card";
import { Bar, BarChart, Line, LineChart } from "recharts";
import { ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { AvatarStack } from "@/components/ui/avatar-stack";
import { TextHighlighter } from "@/components/fancy/text/text-highlighter";

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
}

const visibilityData = [
    { month: "Jan", score: 40 },
    { month: "Feb", score: 30 },
    { month: "Mar", score: 45 },
    { month: "Apr", score: 40 },
    { month: "May", score: 55 },
    { month: "Jun", score: 50 },
    { month: "Jul", score: 75 },
    { month: "Aug", score: 94 },
];

const visibilityConfig = {
    score: {
        label: "Visibility",
        color: "hsl(var(--primary))",
    },
} satisfies ChartConfig;

const bounceData = [
    { day: "Mon", rate: 65 },
    { day: "Tue", rate: 59 },
    { day: "Wed", rate: 55 },
    { day: "Thu", rate: 48 },
    { day: "Fri", rate: 42 },
    { day: "Sat", rate: 38 },
    { day: "Sun", rate: 32 },
];

const bounceConfig = {
    rate: {
        label: "Bounce Rate (%)",
        color: "hsl(var(--primary))",
    },
} satisfies ChartConfig;

export default function FeaturesGrid11() {
    const [mounted, setMounted] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setMounted(true);
    }, []);

    useGSAP(() => {
        if (!mounted) return;

        const cards = gsap.utils.toArray(".feature-card-wrapper");
        gsap.from(cards, {
            y: 100,
            opacity: 0,
            scale: 0.9,
            duration: 1.2,
            stagger: 0.15,
            ease: "expo.out",
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top 85%",
            }
        });

        // Floating ambient movement for icons
        gsap.to(".floating-icon", {
            y: -10,
            duration: 2,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut",
            stagger: {
                amount: 1,
                from: "random"
            }
        });
    }, [mounted]);

    if (!mounted) return <div className="py-24 md:py-32 min-h-[900px]" />;

    return (
        <section ref={containerRef} className="py-24 md:py-32 overflow-hidden bg-background relative isolate">
            {/* Ultra-Premium Background Gradient */}
            <div className="absolute inset-0 -z-10 pointer-events-none">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_50%_50%,hsl(var(--primary)/0.03),transparent_80%)]" />
            </div>

            <div className="mx-auto max-w-5xl px-6 relative z-10">
                <div className="grid gap-6 sm:grid-cols-6 lg:grid-cols-12">
                    
                    {/* Card 1: IMPROVE UX */}
                    <div className="feature-card-wrapper sm:col-span-6 lg:col-span-8">
                        <PremiumCard className="h-full">
                            <div className="flex flex-col md:flex-row h-full">
                                <div className="p-6 md:p-10 md:w-1/2 space-y-6 relative z-10">
                                    <Badge icon={Cpu} text="Intelligence" />
                                    <div className="space-y-4">
                                        <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-foreground">Improve UX</h3>
                                        <p className="text-muted-foreground font-inter leading-relaxed text-sm">
                                            Cutting page load times by just 1 second boosts customer satisfaction by 16%. Speed is the ultimate user experience metric.
                                        </p>
                                    </div>
                                    <div className="pt-4 flex items-center gap-6">
                                        <MetricBox label="Satisfaction" value="+16%" />
                                    </div>
                                </div>
                                <div className="relative md:w-1/2 min-h-[220px] md:min-h-0 bg-primary/[0.03] border-t-2 md:border-t-0 md:border-l-2 border-primary/10 flex items-center justify-center p-6 md:p-10 overflow-hidden group/viz">
                                    <ParallaxLayer offset={20}>
                                        <div className="w-full max-w-[200px] md:max-w-[240px] bg-background rounded-2xl border-2 border-primary/20 shadow-2xl overflow-hidden relative isolate">
                                            <div className="h-8 bg-primary/5 border-b-2 border-primary/10 flex items-center px-4 gap-2">
                                                <div className="size-2 rounded-full bg-primary/40" />
                                                <div className="size-2 rounded-full bg-primary/40" />
                                            </div>
                                            <div className="p-6 space-y-6">
                                                <div className="space-y-3">
                                                    <div className="h-2 w-full bg-primary/10 rounded-full overflow-hidden">
                                                        <div className="h-full w-3/4 bg-primary" />
                                                    </div>
                                                    <div className="h-2 w-2/3 bg-primary/5 rounded-full" />
                                                </div>
                                                <div className="grid grid-cols-2 gap-3">
                                                    <div className="h-12 bg-background border-2 border-primary/10 rounded-xl flex items-center justify-center">
                                                        <Search className="size-5 text-primary/30" />
                                                    </div>
                                                    <div className="h-12 bg-background border-2 border-primary/10 rounded-xl flex items-center justify-center">
                                                        <Zap className="size-5 text-primary/30" />
                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                    </ParallaxLayer>
                                </div>
                            </div>
                        </PremiumCard>
                    </div>

                    {/* Card 2: REDUCE BOUNCE RATES */}
                    <div className="feature-card-wrapper sm:col-span-6 lg:col-span-4">
                        <PremiumCard className="h-full">
                            <div className="p-6 sm:p-8 md:p-10 space-y-6 md:space-y-8 flex flex-col h-full relative">
                                <div className="size-16 rounded-2xl bg-primary/10 border-2 border-primary/20 flex items-center justify-center text-primary overflow-hidden relative">
                                    <Clock className="size-8 relative z-10" />
                                    <div className="absolute inset-0 bg-primary opacity-0 group-hover:opacity-10" />
                                </div>
                                <div className="space-y-4">
                                    <h3 className="text-xl md:text-2xl font-bold">Reduce Bounce</h3>
                                    <p className="text-muted-foreground font-inter text-sm leading-relaxed">
                                        Eliminate dropout points with site speeds that feel instantaneous.
                                    </p>
                                </div>
                                <div className="mt-auto pt-6 border-t border-primary/10">
                                    <div className="flex items-center justify-between mb-4">
                                        <span className="font-semibold font-inter text-sm text-foreground">
                                            Bounce Rate <span className="text-primary">(32%)</span>
                                        </span>
                                    </div>
                                    <ChartContainer config={bounceConfig} className="h-32 w-full">
                                        <LineChart data={bounceData} margin={{ top: 5, right: 5, left: 5, bottom: 5 }}>
                                            <ChartTooltip
                                                cursor={false}
                                                content={<ChartTooltipContent hideLabel className="font-inter" />}
                                            />
                                            <Line
                                                dataKey="rate"
                                                type="monotone"
                                                stroke="var(--color-rate)"
                                                strokeWidth={3}
                                                dot={{ r: 4, fill: "hsl(var(--background))", stroke: "hsl(var(--primary))", strokeWidth: 2 }}
                                                activeDot={{ r: 6, fill: "hsl(var(--primary))", strokeWidth: 0 }}
                                                isAnimationActive={true}
                                                animationDuration={2000}
                                            />
                                        </LineChart>
                                    </ChartContainer>
                                </div>
                            </div>
                        </PremiumCard>
                    </div>

                    {/* Card 3: IMPROVE VISIBILITY */}
                    <div className="feature-card-wrapper sm:col-span-6 lg:col-span-5">
                        <PremiumCard className="h-full">
                            <div className="p-6 sm:p-8 md:p-10 space-y-6 h-full flex flex-col">
                                <IconBox icon={Search} />
                                <div className="space-y-3">
                                    <h3 className="text-xl md:text-2xl font-bold">Improve Visibility</h3>
                                    <p className="text-muted-foreground font-inter text-sm leading-relaxed">
                                        Dominating SERP rankings with Google-favoured performance signals.
                                    </p>
                                </div>
                                <div className="mt-auto pt-8">
                                    <div className="flex items-center justify-between mb-4">
                                        <div className="text-[10px] font-black tracking-widest text-muted-foreground uppercase">Visibility Score</div>
                                        <div className="text-primary font-black text-sm">94.2%</div>
                                    </div>
                                    <ChartContainer config={visibilityConfig} className="h-32 w-full">
                                        <BarChart data={visibilityData} margin={{ top: 5, right: 5, left: 5, bottom: 5 }}>
                                            <ChartTooltip
                                                cursor={{ fill: 'hsl(var(--primary)/0.1)' }}
                                                content={<ChartTooltipContent hideLabel className="font-inter" />}
                                            />
                                            <Bar
                                                dataKey="score"
                                                fill="var(--color-score)"
                                                radius={[4, 4, 4, 4]}
                                                isAnimationActive={true}
                                                animationDuration={2000}
                                            />
                                        </BarChart>
                                    </ChartContainer>
                                </div>
                            </div>
                        </PremiumCard>
                    </div>

                    {/* Card 4: BOOST CONVERSIONS */}
                    <div className="feature-card-wrapper sm:col-span-6 lg:col-span-7">
                        <PremiumCard className="h-full">
                            <div className="p-6 md:p-10 flex flex-col md:flex-row gap-6 md:gap-10 h-full">
                                <div className="space-y-6 md:w-1/2">
                                    <IconBox icon={Zap} shiny />
                                    <div className="space-y-3">
                                        <h3 className="text-xl md:text-2xl font-bold">Boost Conversions</h3>
                                        <p className="text-muted-foreground font-inter text-sm leading-relaxed">
                                            A mere 1-second delay can result in a 7% drop in conversions. We fix that.
                                        </p>
                                    </div>
                                </div>
                                <div className="md:w-1/2 bg-primary/5 border-2 border-primary/20 rounded-[2rem] p-6 md:p-8 flex flex-col justify-center gap-4 md:gap-6 shadow-inner relative overflow-hidden group/inner">
                                    <div className="space-y-2">
                                        <div className="flex justify-between items-center text-[10px] font-black text-primary tracking-widest">
                                            <span>SPEED LIFT</span>
                                            <span className="text-lg">+7.4%</span>
                                        </div>
                                        <div className="h-4 w-full bg-background border-2 border-primary/10 rounded-full p-0.5 overflow-hidden">
                                            <motion.div 
                                                animate={{ width: ["0%", "100%", "92%"] }}
                                                transition={{ duration: 2, ease: "easeInOut" }}
                                                className="h-full bg-primary rounded-full" 
                                            />
                                        </div>
                                    </div>
                                    <div className="flex gap-2">
                                        <div className="h-2 w-full bg-primary/20 rounded-full" />
                                        <div className="h-2 w-1/2 bg-primary/20 rounded-full" />
                                    </div>
                                    <motion.div 
                                        className="absolute inset-0 bg-primary/5 opacity-0 group-hover/inner:opacity-100 transition-opacity"
                                        animate={{ backgroundPosition: ["0% 0%", "100% 100%"] }}
                                    />
                                </div>
                            </div>
                        </PremiumCard>
                    </div>

                    {/* Card 5: REDUCE ABANDONMENT */}
                    <div className="feature-card-wrapper sm:col-span-6 lg:col-span-6">
                        <PremiumCard className="h-full">
                            <div className="p-6 sm:p-8 md:p-10 flex flex-col h-full gap-6 md:gap-8 relative overflow-hidden">
                                <div className="flex justify-between items-start">
                                    <IconBox icon={ShoppingCart} />
                                    <div className="px-4 py-1.5 rounded-full bg-primary/10 border-2 border-primary/20 text-primary text-[10px] font-black tracking-widest">ROI RECOVERY</div>
                                </div>
                                <div className="space-y-3">
                                    <h3 className="text-xl md:text-2xl font-bold">Reduce Abandonment</h3>
                                    <p className="text-muted-foreground font-inter text-sm leading-relaxed">
                                        Rescue potential revenue by removing the latency hurdles that drive customers away.
                                    </p>
                                </div>
                                <div className="mt-auto p-5 md:p-6 rounded-2xl border-2 border-primary/20 bg-primary/5 relative overflow-hidden transition-all duration-500 group-hover/card:border-primary/40 group-hover/card:bg-primary/10">
                                    <div className="flex justify-between items-end mb-4">
                                        <div className="space-y-1">
                                            <p className="text-2xl md:text-3xl font-black text-primary tracking-tighter transition-colors duration-500">
                                                <span className="inline group-hover/card:hidden">70%</span>
                                                <span className="hidden group-hover/card:inline">30%</span>
                                            </p>
                                            <p className="text-[10px] font-bold uppercase text-muted-foreground tracking-wider group-hover/card:text-primary transition-colors duration-500">Friction Rate</p>
                                        </div>
                                        <div className="text-right opacity-0 group-hover/card:opacity-100 transition-all duration-500 transform translate-y-2 group-hover/card:translate-y-0">
                                            <p className="text-sm font-black italic text-primary">RECOVERED</p>
                                        </div>
                                    </div>
                                    <div className="h-2 w-full bg-background border border-primary/10 rounded-full overflow-hidden relative">
                                        <div className="absolute top-0 bottom-0 left-0 bg-primary/50 w-[70%] group-hover/card:w-[30%] group-hover/card:bg-primary transition-all duration-700 ease-in-out" />
                                    </div>
                                </div>
                            </div>
                        </PremiumCard>
                    </div>

                    {/* Card 6: IMPROVE RETENTION */}
                    <div className="feature-card-wrapper sm:col-span-6 lg:col-span-6">
                        <PremiumCard className="h-full">
                            <div className="p-6 sm:p-8 md:p-10 flex flex-col h-full gap-6 md:gap-8">
                                <div className="flex items-center gap-6">
                                    <IconBox icon={Users} />
                                    <div className="space-y-1">
                                        <h3 className="text-xl md:text-2xl font-bold tracking-tight">Improve Retention</h3>
                                        <p className="text-[10px] font-black text-muted-foreground uppercase opacity-60 tracking-widest">Trust Analytics</p>
                                    </div>
                                </div>
                                <p className="text-muted-foreground font-inter text-sm leading-relaxed">
                                    <TextHighlighter highlightColor="hsl(var(--primary) / 0.15)" triggerType="hover" className="text-foreground font-semibold">79% of shoppers</TextHighlighter> say they&apos;re less likely to buy from a site again if they find its performance <TextHighlighter highlightColor="hsl(var(--primary) / 0.15)" triggerType="hover" className="text-foreground font-semibold">unsatisfactory</TextHighlighter>.
                                </p>
                                <div className="mt-auto flex flex-wrap items-center justify-between gap-4">
                                    <div className="space-y-1">
                                        <p className="text-4xl md:text-5xl font-black text-primary tracking-tighter">79%</p>
                                        <p className="text-[10px] font-black text-muted-foreground uppercase tracking-widest">Brand Erosion Factor</p>
                                    </div>
                                    <AvatarStack 
                                        avatars={["male-3.png", "female-3.png", "male-1.png", "female-1.png", "male-2.png"]}
                                        totalCount="+2k"
                                        size="md"
                                    />
                                </div>
                            </div>
                        </PremiumCard>
                    </div>

                </div>
            </div>
        </section>
    );
}

// --- Specialised Components for Premium Feel ---

function PremiumCard({ children, className }: { children: React.ReactNode; className?: string }) {
    const cardRef = useRef<HTMLDivElement>(null);


    // Interactive Light Shimmer
    const shimmerX = useSpring(0, { stiffness: 250, damping: 50 });
    const shimmerY = useSpring(0, { stiffness: 250, damping: 50 });
    const shimmerOpacity = useMotionValue(0);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!cardRef.current) return;
        const rect = cardRef.current.getBoundingClientRect();
        
        shimmerX.set(e.clientX - rect.left);
        shimmerY.set(e.clientY - rect.top);
        shimmerOpacity.set(1);
    };

    const handleMouseLeave = () => {
        shimmerOpacity.set(0);
    };

    return (
        <div
            ref={cardRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className={cn("group/card relative h-full", className)}
        >
            <Card className="h-full border-[2.5px] border-primary/10 bg-transparent hover:border-primary/30 transition-all duration-700 relative isolate overflow-hidden">
                {/* Advanced Dynamic Reflection */}
                <motion.div 
                    style={{
                        background: `radial-gradient(400px circle at ${shimmerX}px ${shimmerY}px, hsl(var(--primary) / 0.12), transparent 40%)`,
                        opacity: shimmerOpacity
                    }}
                    className="absolute inset-0 pointer-events-none -z-10"
                />

                {/* Glossy Scanline Sweep */}
                <div 
                    className="absolute top-0 bottom-0 w-32 bg-gradient-to-r from-transparent via-white/[0.05] to-transparent skew-x-[-30deg] pointer-events-none -z-10 -left-[100%] group-hover/card:left-[200%] transition-all duration-1000 ease-in-out"
                />

                <div className="relative z-10 h-full">
                    {children}
                </div>
            </Card>
        </div>
    );
}

function IconBox({ 
    icon: Icon, 
    shiny = false 
}: { 
    icon: React.ElementType; 
    shiny?: boolean;
}) {
    return (
        <div className="size-16 rounded-2xl bg-primary/5 border-2 border-primary/20 flex items-center justify-center transition-all duration-500 relative isolate overflow-hidden group-hover:border-primary/40">
            <Icon className="size-8 text-primary transition-transform duration-500 group-hover:scale-110" />
            {shiny && (
                <div className="absolute inset-y-0 w-8 bg-white/5 skew-x-[-20deg] -z-10" />
            )}
        </div>
    );
}

function MetricBox({ label, value }: { label: string; value: string }) {
    return (
        <div className="px-5 py-3 rounded-2xl bg-primary/5 border-2 border-primary/20 shadow-sm">
            <p className="text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground/60 mb-0.5">{label}</p>
            <p className="text-2xl font-black text-primary tracking-tight">{value}</p>
        </div>
    );
}

function Badge({ icon: Icon, text }: { icon: React.ElementType; text: string }) {
    return (
        <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-primary/10 border-2 border-primary/20">
            <Icon className="size-4 text-primary animate-pulse" />
            <span className="text-xs font-black uppercase tracking-[0.15em] text-primary">{text}</span>
        </div>
    );
}

function ParallaxLayer({ children, offset = 20 }: { children: React.ReactNode; offset?: number }) {
    return (
        <motion.div
            style={{ translateZ: offset }}
            className="w-full h-full flex items-center justify-center transform-gpu"
        >
            {children}
        </motion.div>
    );
}
