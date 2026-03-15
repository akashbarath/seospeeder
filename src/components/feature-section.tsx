"use client";

import { cn } from "@/lib/utils";
import React, { useRef } from "react";
import { CobeGlobe } from "@/components/cobe-globe";
import { 
	Zap, 
	Bot,
	TrendingUp, 
	LayoutDashboard, 
	Globe,
} from "lucide-react";
import Image from "next/image";
import { motion, useMotionValue, useSpring, useTransform } from "motion/react";
import {
	CartesianGrid,
	Line,
	LineChart,
	XAxis,
	YAxis,
} from "recharts";
import {
	ChartConfig,
	ChartContainer,
	ChartTooltip,
	ChartTooltipContent,
} from "@/components/ui/chart";



const rankingData = [
	{ month: "Jan", google: 45, bing: 52 },
	{ month: "Feb", google: 42, bing: 48 },
	{ month: "Mar", google: 35, bing: 44 },
	{ month: "Apr", google: 28, bing: 38 },
	{ month: "May", google: 20, bing: 32 },
	{ month: "Jun", google: 15, bing: 25 },
	{ month: "Jul", google: 8, bing: 18 },
	{ month: "Aug", google: 2, bing: 12 },
];

const chartConfig = {
	google: {
		label: "Google Rank",
		color: "hsl(var(--primary))",
	},
	bing: {
		label: "Bing Rank",
		color: "hsl(var(--muted-foreground))",
	},
} satisfies ChartConfig;

const features = [
	{
		id: "setup",
		children: <SetupVisual />,
		className: "md:col-span-1 lg:col-span-2",
	},
	{
		id: "user-based-security",
		children: <UserBasedSecurity />,
		className: "md:col-span-1 lg:col-span-2",
	},
	{
		id: "reports",
		children: <ReportsVisual />,
		className: "md:col-span-2 lg:col-span-2",
	},
	{
		id: "dashboard",
		children: <DashboardVisual />,
		className: "md:col-span-2 lg:col-span-3 p-0",
	},
	{
		id: "presence",
		children: <PresenceVisual />,
		className: "md:col-span-2 lg:col-span-3 p-0",
	},
];

export function FeatureSection() {
	const container = useRef<HTMLDivElement>(null);

	// Removed intro animations as per user request

	return (
		<div ref={container} className="relative mx-auto grid w-full max-w-5xl grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-6 px-6 md:px-8 lg:px-4 py-16 md:py-24 overflow-hidden md:overflow-visible">
			{features.map((feature) => (
				<FeatureCard className={cn("feature-card", feature.className)} key={feature.id}>
					{feature.children}
				</FeatureCard>
			))}
		</div>
	);
}

function FeatureCard({
	children,
	className,
}: {
	children: React.ReactNode;
	className?: string;
}) {
	return (
		<div
			className={cn(
				"group relative overflow-hidden rounded-2xl border-2 bg-background px-6 py-8 md:px-8 md:pt-10 md:pb-8",
				className
			)}
		>
			{children}
		</div>
	);
}

function FeatureTitle({ className, ...props }: React.ComponentProps<"h3">) {
	return (
		<h3
			className={cn("font-medium text-foreground text-lg", className)}
			{...props}
		/>
	);
}

function FeatureDescription({
	className,
	...props
}: React.ComponentProps<"p">) {
	return (
		<p className={cn("text-muted-foreground text-sm font-inter font-medium", className)} {...props} />
	);
}

function SetupVisual() {
	return (
		<>
			<div className="relative mx-auto flex size-32 items-center justify-center rounded-full border-2 bg-background shadow-xl transition-all duration-700">
				{/* Background Glow */}
				<div className="absolute inset-0 z-0 scale-150 bg-radial from-primary/10 via-transparent to-transparent blur-2xl group-hover:from-primary/25 transition-all duration-700" />
				
				{/* Sonic Pulse Rings */}
				{[0, 1, 2].map((i) => (
					<motion.div
						key={i}
						initial={{ opacity: 0, scale: 1 }}
						animate={{ 
							scale: [1, 2.2],
							opacity: [0, 0.5, 0]
						}}
						transition={{ 
							duration: 3, 
							repeat: Infinity, 
							delay: i * 1,
							times: [0, 0.2, 1],
							ease: "easeOut" 
						}}
						className="absolute inset-0 rounded-full border border-primary/20 z-0 pointer-events-none will-change-transform"
						style={{ transform: "translateZ(0)" }}
					/>
				))}

				{/* Modern Radar Sweep */}
				<motion.div 
					animate={{ rotate: 360 }}
					transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
					className="absolute inset-[-8px] z-10"
				>
					<div className="h-full w-full rounded-full bg-conic-to-r from-primary/40 via-transparent to-transparent" />
					<div className="absolute top-0 left-1/2 -translate-x-1/2 h-1/2 w-0.5 bg-linear-to-b from-primary to-transparent" />
				</motion.div>

				{/* High-Frequency Icon */}
				<motion.div
					animate={{ 
						y: [0, -2, 0],
					}}
					transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
					whileHover={{ 
						rotate: [-1, 1, -1, 1, 0],
						transition: { duration: 0.2, repeat: Infinity }
					}}
					className="relative z-20"
				>
					<Zap className="visual-zap size-14 text-primary fill-primary/10 filter drop-shadow(0 0 12px hsl(var(--primary)/0.3))" />
				</motion.div>
			</div>

			<div className="relative mt-8 space-y-1.5 text-center">
				<FeatureTitle className="group-hover:text-primary transition-colors duration-300">Instant Speed Audit</FeatureTitle>
				<FeatureDescription>
					Get your website&apos;s performance and SEO grade in under 60 seconds with our AI engine.
				</FeatureDescription>
			</div>
		</>
	);
}

function UserBasedSecurity() {
	const x = useMotionValue(0);
	const y = useMotionValue(0);

	const mouseXSpring = useSpring(x);
	const mouseYSpring = useSpring(y);

	const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["15deg", "-15deg"]);
	const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-15deg", "15deg"]);

	const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
		const rect = event.currentTarget.getBoundingClientRect();
		x.set(event.clientX - rect.left - rect.width / 2);
		y.set(event.clientY - rect.top - rect.height / 2);
	};

	const handleMouseLeave = () => {
		x.set(0);
		y.set(0);
	};

	return (
		<div 
			onMouseMove={handleMouseMove}
			onMouseLeave={handleMouseLeave}
			className="relative overflow-visible cursor-default"
		>
			<motion.div 
				style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
				className="relative mx-auto flex size-32 items-center justify-center rounded-3xl border-2 bg-card shadow-2xl transition-all duration-500 perspective-1000 group-hover:border-primary/40 group-hover:shadow-primary/5"
			>
				{/* Liquid AI Energy */}
				<motion.div
					animate={{
						scale: [1, 1.1, 1],
						rotate: [0, 180, 360],
					}}
					transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
					className="absolute inset-0 z-0 opacity-10 blur-xl"
				>
					<svg viewBox="0 0 200 200" className="w-full h-full fill-primary">
						<path d="M45.2,-61.1C58.9,-54.2,70.5,-41.8,77.3,-27.2C84.1,-12.6,86.2,4.3,81.4,19.2C76.6,34.1,65.1,47.1,51.1,56.5C37.1,65.9,20.7,71.8,4.2,74.5C-12.4,77.1,-29.1,76.6,-43.8,68.9C-58.5,61.1,-71.3,46.1,-77.1,29.3C-82.9,12.4,-81.8,-6.3,-75,-22.4C-68.2,-38.5,-55.8,-52,-41.4,-58.5C-27,-65.1,-13.5,-64.7,1.8,-67C17,-69.3,31.4,-67.9,45.2,-61.1Z" transform="translate(100 100)" />
					</svg>
				</motion.div>

				{/* High-Speed Data Stream */}
				<div className="absolute inset-4 overflow-hidden rounded-2xl opacity-20 pointer-events-none">
					{[...Array(3)].map((_, i) => (
						<motion.div
							key={i}
							animate={{
								y: ["-100%", "100%"],
							}}
							transition={{
								duration: 2 + i,
								repeat: Infinity,
								ease: "linear",
								delay: i * 0.5
							}}
							className="absolute left-1/2 -ms-[0.5px] w-px h-20 bg-linear-to-b from-transparent via-primary to-transparent"
							style={{ left: `${25 + i * 25}%` }}
						/>
					))}
				</div>

				{/* Floating Bot Core */}
				<motion.div
					animate={{ y: [4, -4, 4] }}
					transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
					className="relative z-20 translate-z-10"
				>
					<Bot className="visual-sparkles size-14 text-primary filter drop-shadow(0 0 15px hsl(var(--primary)/0.4))" />
					
					{/* Scanning Ray effect */}
					<motion.div 
						animate={{ 
							top: ["-20%", "120%"],
							opacity: [0, 1, 0]
						}}
						transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
						className="absolute left-[-20%] right-[-20%] h-0.5 bg-primary/40 blur-xs z-30"
					/>
				</motion.div>
			</motion.div>

			<div className="relative mt-8 space-y-1.5 text-center transition-all duration-500 group-hover:translate-z-4 overflow-visible">
				<FeatureTitle className="group-hover:text-primary transition-colors duration-300">AI Intelligence</FeatureTitle>
				<FeatureDescription>
					Leverage advanced machine learning to identify high-intent keywords and ranking opportunities.
				</FeatureDescription>
			</div>
		</div>
	);
}

function ReportsVisual() {
	const [mounted, setMounted] = React.useState(false);

	React.useEffect(() => {
		setMounted(true);
	}, []);

	return (
		<>
			<div className="h-44 md:h-48 w-full pt-2 relative overflow-visible visual-rankings">
				<div className="absolute top-0 left-2 flex items-center gap-1.5 z-20 bg-background/80 backdrop-blur-md px-2.5 py-1 rounded-full border border-border/50 shadow-sm scale-90 md:scale-100 origin-left">
					<div className="flex size-5 items-center justify-center rounded-full bg-primary/10 text-primary">
						<TrendingUp className="size-3" />
					</div>
					<div className="font-bold text-foreground text-[10px] md:text-xs font-inter">Goal: Top 3</div>
				</div>
				
				{mounted ? (
					<ChartContainer config={chartConfig} className="h-full w-full aspect-auto">
						<LineChart
							accessibilityLayer
							data={rankingData}
							margin={{
								top: 30,
								left: 10,
								right: 10,
								bottom: 0,
							}}
						>
							<CartesianGrid vertical={false} strokeDasharray="3 3" strokeOpacity={0.1} />
							<XAxis
								dataKey="month"
								tickLine={false}
								axisLine={false}
								tickMargin={8}
								tickFormatter={(value: string) => value.slice(0, 3)}
								fontSize={10}
								stroke="hsl(var(--muted-foreground))"
							/>
							<YAxis 
								reversed 
								hide 
								domain={[0, 60]}
							/>
							<ChartTooltip
								cursor={false}
								content={<ChartTooltipContent hideLabel />}
							/>
							<Line
							dataKey="google"
							type="monotone"
							stroke="var(--color-google)"
							strokeWidth={3}
							dot={{ r: 4, fill: "hsl(var(--primary))", strokeWidth: 0 }}
							activeDot={{
								r: 6,
								strokeWidth: 0,
							}}
							isAnimationActive={true}
							animationDuration={2000}
							animationEasing="ease-in-out"
						/>
						<Line
							dataKey="bing"
							type="monotone"
							stroke="var(--color-bing)"
							strokeWidth={2}
							strokeDasharray="4 4"
							dot={false}
							opacity={0.5}
							isAnimationActive={true}
							animationDuration={2500}
						/>
					</LineChart>
				</ChartContainer>
			) : (
				<div className="h-full w-full bg-muted/5 animate-pulse rounded-lg" />
			)}
		</div>
			<div className="relative z-10 mt-6 space-y-1.5 text-center">
				<FeatureTitle>Real-Time Rankings</FeatureTitle>
				<FeatureDescription>
					Track your keyword positions and organic growth with precision analytics and reporting.
				</FeatureDescription>
			</div>
		</>
	);
}

function DashboardVisual() {
	const x = useMotionValue(0);
	const y = useMotionValue(0);

	const mouseXSpring = useSpring(x);
	const mouseYSpring = useSpring(y);

	const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["5deg", "-5deg"]);
	const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-5deg", "5deg"]);

	const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
		const rect = event.currentTarget.getBoundingClientRect();
		const width = rect.width;
		const height = rect.height;
		const mouseX = event.clientX - rect.left;
		const mouseY = event.clientY - rect.top;

		x.set(mouseX / width - 0.5);
		y.set(mouseY / height - 0.5);
	};

	const handleMouseLeave = () => {
		x.set(0);
		y.set(0);
	};

	return (
		<div 
			className="grid h-full sm:grid-cols-2"
			onMouseMove={handleMouseMove}
			onMouseLeave={handleMouseLeave}
		>
			<div className="relative z-10 space-y-6 p-6 md:pt-10 md:pb-8 md:pl-10 pointer-events-none">
				<div className="flex size-12 items-center justify-center rounded-full border-2 bg-card shadow-sm outline outline-border/80 outline-offset-2 group-hover:scale-110 transition-transform duration-500">
					<LayoutDashboard className="size-5 text-primary/80" />
				</div>
				<div className="space-y-2">
					<FeatureTitle className="text-base group-hover:text-primary transition-colors duration-300">
						Technical SEO Command Center
					</FeatureTitle>
					<FeatureDescription className="text-pretty pr-4 sm:pr-0 max-w-[340px] md:max-w-[400px]">
						Monitor Core Web Vitals, site health, and backlink profiles from a unified dashboard with real-time alerts and actionable insights.
					</FeatureDescription>
				</div>
			</div>
			{/* Dashboard Screen */}
			<div className="mask-b-from-90% mask-r-from-90% relative aspect-video sm:aspect-auto visual-dashboard-mock overflow-visible mt-4 sm:mt-0 px-4 sm:px-0">
				<motion.div 
					style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
					className="relative sm:absolute sm:-right-1 sm:-bottom-1 aspect-video max-h-60 sm:max-h-42 md:aspect-square md:max-h-50 lg:aspect-16/12 rounded-xl sm:rounded-none sm:rounded-tl-md border-2 bg-card p-1 shadow-2xl transition-shadow duration-500 group-hover:shadow-primary/10"
				>
					<div className="aspect-video h-full overflow-hidden rounded-lg sm:rounded-none sm:rounded-tl-sm border-2 *:pointer-events-none *:size-full *:shrink-0 *:select-none">
						<Image
							alt="Dashboard preview"
							className="dark:hidden"
							height={360}
							src="https://storage.efferd.com/screen/dashboard-light.webp"
							width={640}
						/>
						<Image
							alt="Dashboard preview"
							className="hidden dark:block"
							height={360}
							src="https://storage.efferd.com/screen/dashboard-dark.webp"
							width={640}
						/>
					</div>
				</motion.div>
			</div>
		</div>
	);
}

function PresenceVisual() {
	return (
		<div className="grid max-h-[600px] sm:max-h-120 sm:grid-cols-2 group/globe">
			<div className="space-y-6 p-6 md:pt-10 md:pb-8 md:pl-10">
				<div className="flex size-12 items-center justify-center rounded-full border-2 bg-card shadow-sm outline outline-border/80 outline-offset-2 group-hover:bg-primary/5 transition-colors duration-500">
					<Globe className="size-5 text-primary/80 group-hover:animate-spin" />
				</div>
				<div className="space-y-2">
					<FeatureTitle className="text-base group-hover:text-primary transition-colors duration-300">
						Global Search Dominance
					</FeatureTitle>
					<FeatureDescription className="text-pretty pr-4 sm:pr-0 max-w-[340px] md:max-w-[400px]">
						Optimise for international markets and languages with automated localised SEO strategies and intelligent content mapping.
					</FeatureDescription>
				</div>
			</div>
			<div className="relative h-64 sm:h-auto overflow-hidden sm:overflow-visible visual-globe">
				<motion.div
					animate={{ 
						scale: [1, 1.02, 1],
					}}
					transition={{ 
						duration: 4, 
						repeat: Infinity, 
						ease: "easeInOut" 
					}}
					className="w-full h-full"
				>
					<CobeGlobe className="-top-[10%] sm:-top-[12%] right-[-20%] sm:-right-[15%] absolute" />
				</motion.div>
			</div>
		</div>
	);
}
