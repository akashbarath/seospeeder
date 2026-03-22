"use client";

import React from "react";
import { motion } from "motion/react";
import { Zap, Shield, Gauge, Globe, ShoppingBag, Code2, Flame, Server, Layers, Workflow } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { TextEffect } from "@/components/ui/text-effect";
import { AnimatedGroup } from "@/components/ui/animated-group";
import { BoostRankingsBadge } from "@/components/boost-rankings-badge";
import { CallToAction } from "@/components/cta";

interface OptimizationDetailProps {
	title: string;
	description: string;
	platform: string;
	iconName: "globe" | "shopping-bag" | "code" | "flame" | "server" | "layers" | "workflow" | "zap";
}

const transitionVariants = {
	item: {
		hidden: {
			opacity: 0,
			filter: "blur(12px)",
			y: 12,
		},
		visible: {
			opacity: 1,
			filter: "blur(0.1px)",
			y: 0,
			transition: {
				y: { type: "spring" as const, bounce: 0.3, duration: 0.8 },
				opacity: { duration: 0.4 },
				filter: { duration: 0.4, ease: "easeOut" as const },
			},
		},
	},
};

const iconMap = {
	globe: Globe,
	"shopping-bag": ShoppingBag,
	code: Code2,
	flame: Flame,
	server: Server,
	layers: Layers,
	workflow: Workflow,
	zap: Zap,
};

export function OptimizationDetail({ title, description, platform, iconName }: OptimizationDetailProps) {
	const Icon = iconMap[iconName];

	return (
		<main className="relative min-h-screen overflow-visible pt-24 md:pt-32 pb-20">
			<div
				aria-hidden
				className="absolute inset-0 -z-10 size-full [background:radial-gradient(125%_125%_at_50%_100%,transparent_0%,var(--color-background)_75%)]"
			/>
			{/* Ambient Background Elements */}
			<div className="absolute top-0 left-1/2 -z-10 h-[600px] w-full -translate-x-1/2 bg-[radial-gradient(ellipse_at_center,hsl(var(--primary)/0.05),transparent_70%)] opacity-50" />
			<div className="absolute top-[10%] right-[10%] -z-10 h-64 w-64 rounded-full bg-primary/10 blur-[60px]" style={{ WebkitFilter: 'blur(60px)', WebkitTransform: 'translateZ(0)' }} />
			<div className="absolute bottom-[20%] left-[5%] -z-10 h-96 w-96 rounded-full bg-primary/5 blur-[60px]" style={{ WebkitFilter: 'blur(60px)', WebkitTransform: 'translateZ(0)' }} />

			<div className="container relative z-10 mx-auto px-4 md:px-6">
				{/* Hero Section */}
				<div className="max-w-4xl mx-auto text-center mb-16 md:mb-24">
					<AnimatedGroup variants={transitionVariants}>
						<div className="mb-6">
							<BoostRankingsBadge icon={Icon}>
								{platform} Optimisation
							</BoostRankingsBadge>
						</div>
					</AnimatedGroup>

					<h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 font-primary">
						<TextEffect preset="fade-in-blur" speedSegment={0.3}>
							{title}
						</TextEffect>
					</h1>

					<TextEffect
						per="line"
						preset="fade-in-blur"
						speedSegment={0.3}
						delay={0.2}
						className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto font-inter mb-10"
					>
						{`${description} Our specialised ${platform} speed optimisation service eliminates bottlenecks and supercharges your performance metrics.`}
					</TextEffect>

					<AnimatedGroup variants={transitionVariants} className="flex flex-col sm:flex-row items-center justify-center gap-4">
						<Button
							asChild
							variant="outline"
							size="lg"
							className="w-full sm:w-auto rounded-xl px-8 text-base font-inter font-semibold border-2"
						>
							<Link href="/contact">
								<span className="text-nowrap">Get Free Audit</span>
							</Link>
						</Button>
						<Button
							asChild
							size="lg"
							className="group/btn w-full sm:w-auto rounded-xl px-8 text-base font-bold font-inter bg-primary hover:bg-primary/95 text-primary-foreground transition-all duration-300 shadow-[0_0_20px_-10px_rgba(var(--primary),0.5)] hover:shadow-[0_0_30px_-5px_rgba(var(--primary),0.6)] relative overflow-hidden border-none"
						>
							<Link href="#features">
								<div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-primary-foreground/30 to-transparent -translate-x-[150%] skew-x-[-30deg] group-hover/btn:translate-x-[150%] transition-transform duration-1000 ease-out pointer-events-none z-0" />
								<span className="relative z-10 text-nowrap">See How It Works</span>
							</Link>
						</Button>
					</AnimatedGroup>
				</div>

				{/* Feature Grid */}
				<section id="features" className="relative mb-24">
					<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
						{[
							{
								icon: Gauge,
								title: "Core Web Vitals",
								text: "Pass LCP, FID, and CLS with confidence. We target the specific metrics Google uses to rank your site.",
							},
							{
								icon: Zap,
								title: "Zero Downtime",
								text: "Our optimisations are non-destructive and performed in a safe staging environment before deployment.",
							},
							{
								icon: Shield,
								title: "Long-term Impact",
								text: "We don't just patch issues; we rebuild for performance, ensuring your site stays fast as you grow.",
							},
						].map((feature, i) => (
							<motion.div
								key={i}
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ delay: i * 0.1 }}
								className="group relative p-8 rounded-3xl border-2 border-border/50 bg-card hover:border-primary transition-all duration-500"
							>
								<div className="size-12 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
									<feature.icon className="size-6" />
								</div>
								<h3 className="text-xl font-bold mb-3 font-primary">{feature.title}</h3>
								<p className="text-muted-foreground font-inter leading-relaxed">{feature.text}</p>
							</motion.div>
						))}
					</div>
				</section>



				{/* CTA Section */}
				<section className="relative">
					<CallToAction />
				</section>
			</div>
		</main>
	);
}
