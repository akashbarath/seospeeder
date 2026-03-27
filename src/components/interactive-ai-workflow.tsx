"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence, useInView, LayoutGroup } from "framer-motion";
import { 
  Radar, Wand2, ServerCog, Network, Sparkles, Bot, LineChart, 
  Zap, CheckCircle2, Cpu, ShieldCheck, Globe, TrendingUp, 
  GitCommitVertical, ShoppingCart, Compass, BookOpen, MapPin, 
  Navigation, BarChart3, Brain, Server, Cloud, Satellite, 
  Activity, Wifi, Layers, Trophy, Users, Database, Rocket,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { CodeBlock } from "@/components/ui/code-block";
import { RadialBar, RadialBarChart, LineChart as RechartsLineChart, Line, CartesianGrid, XAxis, YAxis, PolarAngleAxis, PolarGrid, Radar as RechartsRadar, RadarChart } from "recharts";
import { ChartContainer, ChartTooltip, ChartTooltipContent, type ChartConfig } from "@/components/ui/chart";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { OrbitingSkills } from "@/components/unlumen-ui/orbiting-skills";
import CloudFlow from "@/components/ui/cloud-flow";
import BotDetection from "@/components/forgeui/bot-detection";
import { SocialOrbit } from "@/components/ui/social-orbit";

const neuralChartData = [
  { segment: "News", authority: 85, trust: 70 },
  { segment: "Wiki", authority: 92, trust: 80 },
  { segment: "Gov", authority: 78, trust: 65 },
  { segment: "Edu", authority: 82, trust: 75 },
  { segment: "PR", authority: 90, trust: 85 },
  { segment: "Social", authority: 75, trust: 60 },
];

const neuralChartConfig = {
  authority: {
    label: "Authority Score",
    color: "#f97316",
  },
  trust: {
    label: "Trust Flow",
    color: "#f43f5e",
  },
} satisfies ChartConfig;

const processes = [
  {
    id: "keywords",
    title: "Neural Intent Mapping",
    label: "Neural Intent",
    icon: Radar,
    color: "from-blue-500 to-cyan-500",
    shadow: "shadow-blue-500/20",
    bg: "bg-blue-500/10",
    text: "text-blue-500",
    description: "Map entire user vertical journeys with neural transformers to expose high-volume, low-competition gap clusters for rapid market dominance.",
    metrics: [
      { label: "LSI Vector Gap", calc: "Optimized", icon: Layers },
      { label: "Predictive Intent", calc: "98.5%", icon: Brain },
      { label: "Cluster Density", calc: "Maximized", icon: Activity },
    ],
    demo: (
      <div className="w-full h-full rounded-3xl border-2 border-zinc-200 dark:border-zinc-800 bg-gradient-to-b from-zinc-50 to-white dark:from-zinc-950 dark:to-zinc-900 overflow-hidden flex flex-col items-center justify-center gap-5 relative">

        {/* Soft blue radial glow */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-64 rounded-full" style={{ background: "radial-gradient(circle, rgba(59,130,246,0.07) 0%, transparent 70%)" }} />
        </div>

        <OrbitingSkills
          radius={110}
          duration={26}
          showPath={true}
          accentHsl="214 100% 60%"
          items={[
            { label: "Transactional", icon: <ShoppingCart size={11} /> },
            { label: "Navigational", icon: <Navigation size={11} /> },
            { label: "Informational", icon: <BookOpen size={11} /> },
            { label: "Commercial", icon: <BarChart3 size={11} /> },
            { label: "Local", icon: <MapPin size={11} /> },
            { label: "Discovery", icon: <Compass size={11} /> },
          ]}
        >
          {/* Center hub — Instant Speed Audit effect */}
          <div className="relative flex size-20 items-center justify-center rounded-full border-2 bg-background shadow-xl transition-all duration-700">
            {/* Background Glow */}
            <div className="absolute inset-0 z-0 scale-150 bg-radial from-blue-500/10 via-transparent to-transparent blur-2xl" />

            {/* Sonic Pulse Rings */}
            {[0, 1, 2].map((i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 1 }}
                animate={{
                  scale: [1, 2.2],
                  opacity: [0, 0.5, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: i * 1,
                  times: [0, 0.2, 1],
                  ease: "easeOut",
                }}
                className="absolute inset-0 rounded-full border border-blue-500/20 z-0 pointer-events-none will-change-transform"
                style={{ transform: "translateZ(0)" }}
              />
            ))}

            {/* Conic Radar Sweep */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
              className="absolute inset-[-8px] z-10"
            >
              <div className="h-full w-full rounded-full bg-conic-to-r from-blue-500/40 via-transparent to-transparent" />
              <div className="absolute top-0 left-1/2 -translate-x-1/2 h-1/2 w-0.5 bg-linear-to-b from-blue-500 to-transparent" />
            </motion.div>

            {/* Floating Icon */}
            <motion.div
              animate={{ y: [0, -2, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="relative z-20"
            >
              <Brain className="size-7 text-blue-500" strokeWidth={1.5} />
            </motion.div>
          </div>
        </OrbitingSkills>


      </div>
    )
  },
  {
    id: "content",
    title: "E-E-A-T Content Architecture",
    label: "Entity Gen",
    icon: Wand2,
    color: "from-emerald-500 to-teal-500",
    shadow: "shadow-emerald-500/20",
    bg: "bg-emerald-500/10",
    text: "text-emerald-500",
    description: "Architect content using fine-tuned LLMs for E-E-A-T, ensuring 100% entity coverage, topical authority, and algorithmic readability.",
    metrics: [
      { label: "Topical Authority", calc: "Level 5", icon: Trophy },
      { label: "Semantic Score", calc: "99/100", icon: Sparkles },
      { label: "Entity Density", calc: "Ideal", icon: Database },
    ],
    demo: (
      <div className="w-full h-full rounded-3xl border-2 border-zinc-200 dark:border-zinc-800 bg-gradient-to-b from-zinc-50 to-white dark:from-zinc-950 dark:to-zinc-900 overflow-hidden flex flex-col items-center justify-center gap-4 relative">



        <CloudFlow
          className="w-full max-w-sm scale-90"
          accentColor="#10b981"
          centerText="LLM"
          title="E-E-A-T Architecture"
          nodeLabels={{
            topLeft: "Experience",
            topRight: "Expertise",
            bottomLeft: "Authority",
            bottomRight: "Trust",
          }}
          badges={{
            left: "Semantic Score",
            right: "99 / 100",
          }}
        />


      </div>
    )
  },
  {
    id: "technical",
    title: "Critical Path Engineering",
    label: "Engineering",
    icon: ServerCog,
    color: "from-violet-500 to-purple-500",
    shadow: "shadow-violet-500/20",
    bg: "bg-violet-500/10",
    text: "text-violet-500",
    description: "Optimize speed and structure with dynamic hydration and Brotli compression to ensure near-zero latency and instant indexing.",
    metrics: [
      { label: "FID / INP", calc: "< 12ms", icon: Zap },
      { label: "TTFB Latency", calc: "24ms", icon: Activity },
      { label: "DOM Complexity", calc: "Minimal", icon: Layers },
    ],
    demo: (
      <div className="w-full h-full flex flex-col items-center md:items-start justify-center md:justify-start pt-6 md:pt-8 px-4 md:px-6 overflow-hidden">
        <CodeBlock className="w-[95%] sm:w-[90%] max-w-xl h-fit rounded-2xl shadow-sm transition-all duration-500 hover:shadow-xl hover:shadow-black/5">
          <div className="flex-1 overflow-hidden opacity-90 leading-relaxed font-jetbrains text-[11px] px-4 py-2 sm:p-2">
            <p className="text-blue-600 dark:text-blue-400">export <span className="text-emerald-600 dark:text-emerald-400">async</span> function <span className="text-amber-700 dark:text-yellow-200">optimizeLayout</span>() {'{'}</p>
            <p className="text-zinc-400 dark:text-gray-400 ml-5 opacity-60">{'// Auto-inferred via ML'}</p>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, repeat: Infinity, repeatType: "reverse", repeatDelay: 1 }}
              className="ml-5 border-l-2 border-emerald-500/30 pl-4 mt-2"
            >
              <p className="text-blue-700 dark:text-blue-200">hydration: <span className="text-orange-600 dark:text-orange-300">&apos;dynamic&apos;</span>,</p>
              <p className="text-blue-700 dark:text-blue-200">compression: <span className="text-orange-600 dark:text-orange-300">&apos;brotli&apos;</span>,</p>
              <p className="text-blue-700 dark:text-blue-200">priority: <span className="text-emerald-600 dark:text-emerald-400">true</span></p>
            </motion.div>
            <p className="text-blue-600 dark:text-blue-400 mt-2">{'}'}</p>
          </div>
        </CodeBlock>
      </div>
    )
  },
  {
    id: "authority",
    title: "Neural Link Graphs",
    label: "Author Graph",
    icon: Network,
    color: "from-orange-500 to-rose-500",
    shadow: "shadow-orange-500/20",
    bg: "bg-orange-500/10",
    text: "text-orange-500",
    description: "Build impregnable link graphs connecting your brand to high-authority knowledge bases via neural PR and strategic digital footprinting.",
    metrics: [
      { label: "Trust Velocity", calc: "High", icon: Rocket },
      { label: "Entity Match", calc: "A+", icon: CheckCircle2 },
      { label: "Link Diversity", calc: "Tier 1", icon: Network },
    ],
    demo: (
      <div className="w-full h-full p-4 sm:p-6 md:p-8 rounded-3xl border-2 border-zinc-100 dark:border-zinc-800/50 bg-zinc-50/50 dark:bg-zinc-900/50 overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-black/5 flex flex-col items-center justify-center gap-6 relative">
        <Card className="w-full bg-transparent border-none shadow-none">
          <CardHeader className="items-center pb-4 p-0">
            <CardTitle className="text-xl md:text-2xl font-black">Link Graph Authority</CardTitle>
            <CardDescription className="text-[10px] md:text-xs">
              Entity distribution across high-authority networks
            </CardDescription>
          </CardHeader>
          <CardContent className="pb-0 p-0">
            <ChartContainer
              config={neuralChartConfig}
              className="mx-auto aspect-square max-h-[300px] w-full"
            >
              <RadarChart data={neuralChartData}>
                <ChartTooltip
                  cursor={false}
                  content={<ChartTooltipContent indicator="line" />}
                />
                <PolarAngleAxis dataKey="segment" tick={{ fontSize: 10, fontWeight: 600 }} />
                <PolarGrid radialLines={false} />
                <RechartsRadar
                  dataKey="authority"
                  fill="var(--color-authority)"
                  fillOpacity={0}
                  stroke="var(--color-authority)"
                  strokeWidth={2.5}
                />
                <RechartsRadar
                  dataKey="trust"
                  fill="var(--color-trust)"
                  fillOpacity={0}
                  stroke="var(--color-trust)"
                  strokeWidth={2.5}
                />
              </RadarChart>
            </ChartContainer>
          </CardContent>
          <CardFooter className="flex-col gap-2 text-sm p-0 pt-4">
            <div className="flex items-center gap-2 leading-none font-medium">
              Authority trending up by 12.5% this cycle <TrendingUp className="h-4 w-4 text-orange-500" />
            </div>
            <div className="flex items-center gap-2 leading-none text-muted-foreground text-[10px]">
              Live data from Global Entity Graph
            </div>
          </CardFooter>
        </Card>
      </div>
    )
  },
  {
    id: "optimization",
    title: "AI Speed Core Optimization",
    label: "Core Web Vitals",
    icon: Zap,
    color: "from-cyan-500 to-blue-500",
    shadow: "shadow-cyan-500/20",
    bg: "bg-cyan-500/10",
    text: "text-cyan-500",
    description: "AI-driven asset prioritization and CDN orchestration based on user patterns for a flawless, instant browsing experience.",
    metrics: [
      { label: "Asset Size", calc: "-85%", icon: Database },
      { label: "Execution Time", calc: "Optimized", icon: Cpu },
      { label: "CDN Latency", calc: "< 5ms", icon: Globe },
    ],
    demo: (
      <div className="w-full h-full p-4 sm:p-6 md:p-8 rounded-3xl border-2 border-zinc-100 dark:border-zinc-800/50 bg-zinc-50/50 dark:bg-zinc-900/50 overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-black/5 flex flex-col items-center justify-center gap-5 relative">
        {/* Speedometer Visualization */}
        <div className="relative w-40 h-40 md:w-48 md:h-48 flex items-center justify-center">
          {/* Recharts Arc */}
          <ChartContainer
            config={{ performance: { label: "Performance", color: "#06b6d4" } }}
            className="absolute inset-0 w-full h-full [&_.recharts-layer]:origin-center [&_.recharts-layer]:animate-in [&_.recharts-layer]:fade-in [&_.recharts-layer]:zoom-in-95 [&_.recharts-layer]:duration-1000"
          >
            <RadialBarChart
              data={[{ name: "Performance", value: 98, fill: "#06b6d4" }]}
              innerRadius="86%"
              outerRadius="100%"
              startAngle={225}
              endAngle={-45}
            >
              <RadialBar
                dataKey="value"
                cornerRadius={10}
                background={{ fill: 'currentColor', className: 'text-zinc-200 dark:text-zinc-800' }}
                animationDuration={2000}
                animationEasing="ease-in-out"
              />
            </RadialBarChart>
          </ChartContainer>

          {/* Center score */}
          <div className="flex flex-col items-center z-10 pointer-events-none mt-2">
            <motion.span
              className="text-3xl md:text-4xl font-black text-zinc-900 dark:text-white tabular-nums"
              animate={{ opacity: [0.7, 1, 0.7] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              98
            </motion.span>
            <span className="text-[8px] font-black text-cyan-600 dark:text-cyan-400 uppercase tracking-widest">PERF SCORE</span>
          </div>
        </div>

        {/* Metric Tiles */}
        <div className="flex gap-3 w-full max-w-xs">
          {[
            { label: "TTFB", value: "24ms", icon: Activity },
            { label: "FCP", value: "0.8s", icon: Zap },
            { label: "CLS", value: "0.01", icon: Layers },
          ].map((metric, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 + i * 0.15 }}
              className="flex-1 flex flex-col items-center gap-1.5 p-2.5 rounded-xl bg-white dark:bg-zinc-800 border-2 border-zinc-200 dark:border-zinc-800 shadow-sm"
            >
               <div className="size-5 rounded-md bg-zinc-100 dark:bg-zinc-700/50 flex items-center justify-center mb-0.5">
                  <metric.icon size={10} className="text-zinc-500" />
               </div>
              <span className="text-[7px] font-black text-zinc-400 dark:text-zinc-500 uppercase tracking-widest">{metric.label}</span>
              <span className="text-sm font-black tabular-nums text-black dark:text-white leading-none">
                {metric.value}
              </span>
            </motion.div>
          ))}
        </div>

        {/* CDN Status */}
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-cyan-500/10 border-2 border-cyan-500/20">
            <div className="size-1.5 rounded-full bg-cyan-500 animate-pulse" />
            <span className="text-[8px] font-jetbrains font-black text-cyan-600 dark:text-cyan-400 uppercase tracking-wider">CDN Active</span>
          </div>
          <span className="text-[8px] font-jetbrains font-bold text-zinc-400 dark:text-zinc-600">BROTLI + HTTP/3</span>
        </div>
      </div>
    )
  },
  {
    id: "conversion",
    title: "Predictive Conversion AI",
    label: "ROI Engine",
    icon: LineChart,
    color: "from-orange-500 to-amber-500",
    shadow: "shadow-orange-500/20",
    bg: "bg-orange-500/10",
    text: "text-orange-500",
    description: "Identify conversion bottlenecks via predictive modeling to automatically optimize UI elements and maximize business ROI.",
    metrics: [
      { label: "ROI Boost", calc: "+450%", icon: TrendingUp },
      { label: "CPA Reduction", calc: "Significant", icon: ShieldCheck },
      { label: "User Retention", calc: "99.9%", icon: Users },
    ],
    demo: (
      <div className="w-full h-full flex flex-col items-center justify-center p-2 sm:p-4">
        <Card className="w-full max-w-full sm:max-w-[340px] shadow-xl dark:shadow-2xl border-2 dark:border-zinc-800 bg-white dark:bg-zinc-950">
          <CardHeader>
            <CardTitle>Forecasted Conversion Lift</CardTitle>
            <CardDescription>Predictive Conversion AI Analysis</CardDescription>
          </CardHeader>
          <CardContent>
            <ChartContainer config={{ cvr: { label: "CVR (%)", color: "#f97316" } }}>
              <RechartsLineChart
                accessibilityLayer
                data={[
                  { month: "January", cvr: 1.2 },
                  { month: "February", cvr: 1.4 },
                  { month: "March", cvr: 2.1 },
                  { month: "April", cvr: 2.9 },
                  { month: "May", cvr: 3.5 },
                  { month: "June", cvr: 4.8 },
                ]}
                margin={{
                  left: 12,
                  right: 12,
                }}
              >
                <CartesianGrid vertical={false} strokeDasharray="3 3" opacity={0.5} />
                <XAxis
                  dataKey="month"
                  tickLine={false}
                  axisLine={false}
                  tickMargin={8}
                  tickFormatter={(value) => value.slice(0, 3)}
                  className="text-xs font-inter"
                />
                <ChartTooltip
                  cursor={false}
                  content={<ChartTooltipContent hideLabel />}
                />
                <Line
                  dataKey="cvr"
                  type="natural"
                  stroke="var(--color-cvr)"
                  strokeWidth={2}
                  isAnimationActive={true}
                  animationDuration={2000}
                  dot={({ cx, cy, payload }) => {
                    const r = 24
                    return (
                      <GitCommitVertical
                        key={payload.month}
                        x={cx - r / 2}
                        y={cy - r / 2}
                        width={r}
                        height={r}
                        fill="hsl(var(--background))"
                        stroke="var(--color-cvr)"
                      />
                    )
                  }}
                />
              </RechartsLineChart>
            </ChartContainer>
          </CardContent>
          <CardFooter className="flex-col items-start gap-2 text-sm">
            <div className="flex gap-2 leading-none font-medium text-zinc-900 dark:text-zinc-100">
              Projected CVR lift of +300% <TrendingUp className="h-4 w-4 text-orange-500" />
            </div>
            <div className="leading-none text-muted-foreground font-medium">
              Modeled via algorithmic bottleneck resolution
            </div>
          </CardFooter>
        </Card>
      </div>
    )
  },
  {
    id: "security",
    title: "Vulnerability Threat Shield",
    label: "Threat Shield",
    icon: ShieldCheck,
    color: "from-red-500 to-rose-500",
    shadow: "shadow-red-500/20",
    bg: "bg-red-500/10",
    text: "text-red-500",
    description: "Multi-layered AI security grid performing real-time packet inspection and automated patching to ensure brand invulnerability.",
    metrics: [
      { label: "Threat Block", calc: "100%", icon: ShieldCheck },
      { label: "Uptime", calc: "99.999%", icon: Activity },
      { label: "Protocols", calc: "Zero-Trust", icon: Network },
    ],
    demo: (
      <div className="w-full h-full flex items-center justify-center p-4">
        <BotDetection 
          cardTitle="Neural Bot Detection" 
          cardDescription="Sophisticated, AI-driven bot detection that constantly adapts to block fraudulent traffic and automated attacks in real-time."
        />
      </div>
    )
  },
  {
    id: "scaling",
    title: "Predictive Edge Scaling",
    label: "Cloud Scaling",
    icon: Globe,
    color: "from-blue-600 to-indigo-600",
    shadow: "shadow-blue-600/20",
    bg: "bg-blue-600/10",
    text: "text-blue-600",
    description: "Global edge network with predictive auto-scaling to handle traffic spikes instantly, ensuring 0ms latency worldwide.",
    metrics: [
      { label: "Global Ping", calc: "< 1ms", icon: Satellite },
      { label: "Nodes Active", calc: "240+", icon: Server },
      { label: "Scaling", calc: "Elastic", icon: Cloud },
    ],
    demo: (
      <div className="w-full h-full flex items-center justify-center p-0 overflow-hidden min-h-[380px] sm:min-h-0">
        <div className="scale-[0.7] sm:scale-[0.85] md:scale-100 lg:scale-110 flex items-center justify-center transform-gpu">
          <SocialOrbit 
            size={500}
            rippleCount={4}
            orbitDuration={40}
            icons={[
              { icon: <Server size={18} className="text-blue-500" />, orbitIndex: 0 },
              { icon: <Cloud size={18} className="text-zinc-500" />, orbitIndex: 0 },
              { icon: <Zap size={18} className="text-amber-500" />, orbitIndex: 1 },
              { icon: <Satellite size={18} className="text-zinc-500" />, orbitIndex: 1 },
              { icon: <Wifi size={18} className="text-blue-500" />, orbitIndex: 2 },
              { icon: <Activity size={18} className="text-zinc-500" />, orbitIndex: 2 },
              { icon: <Layers size={18} className="text-zinc-500" />, orbitIndex: 3 },
              { icon: <Cpu size={18} className="text-blue-500" />, orbitIndex: 3 },
            ]}
          >
            <div className="relative flex items-center justify-center">
               <div className="absolute inset-0 bg-blue-500/20 blur-3xl rounded-full" />
               <div className="size-14 sm:size-20 rounded-full bg-white dark:bg-zinc-900 border-2 border-blue-500/30 flex flex-col items-center justify-center shadow-lg dark:shadow-2xl relative z-10 overflow-hidden group hover:border-blue-500/60 transition-colors">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-transparent to-transparent" />
                  <Globe size={24} className="text-blue-600 dark:text-blue-400 mb-1 sm:size-[32px]" />
                  <span className="text-[5px] sm:text-[6px] font-black text-blue-600 dark:text-blue-400 uppercase tracking-widest">ORIGIN HUB</span>
               </div>
            </div>
          </SocialOrbit>
        </div>
      </div>
    )
  }
];

const categories = [
  { name: "AI & Semantic Layer", ids: ["keywords", "content", "authority"] },
  { name: "Technical & ROI Layer", ids: ["technical", "optimization", "conversion", "security", "scaling"] }
];

export function InteractiveAiWorkflow() {
  const [activeTab, setActiveTab] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  const activeProcess = processes[activeTab];

  return (
    <section ref={containerRef} className="py-16 sm:py-24 md:py-32 relative overflow-hidden bg-zinc-50 dark:bg-zinc-950 font-primary">
      {/* Divider Line Top */}
      <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-zinc-200 dark:via-zinc-800 to-transparent" />

      <div className="container mx-auto px-4 sm:px-6 max-w-7xl relative z-10 w-full overflow-hidden">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto space-y-5 sm:space-y-6 mb-12 sm:mb-20"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-zinc-900 dark:text-zinc-50 leading-[1.15] sm:leading-[1.05]">
            Elite Execution. <br className="hidden sm:block" />
            <span className="sm:hidden"> </span>Flawless Delivery.
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-zinc-700 dark:text-zinc-300 font-inter font-medium leading-relaxed max-w-2xl mx-auto px-2">
            We don&apos;t rely on guesswork. Our full-stack SEO execution is powered by <span className="font-jetbrains font-bold text-zinc-900 dark:text-white bg-zinc-100 dark:bg-zinc-800 px-1.5 py-0.5 rounded-md text-[0.9em]">seospeeder.ai</span> — our proprietary software tool, mathematically structured and algorithmically perfect.
          </p>

          {/* Software Tool Terminal Badge */}
          <div className="inline-flex flex-col items-center gap-2 sm:gap-3 sm:pt-2 w-full max-w-full px-2 sm:px-0">
            <CodeBlock
              className="w-full max-w-[380px] shadow-xl dark:shadow-2xl border-2 dark:border-zinc-800"
              headerTitle={<span className="text-[9px] font-jetbrains font-bold text-zinc-500 tracking-wider">seospeeder.ai.exe</span>}
              headerRight={
                <div className="flex items-center gap-1.5">
                  <div className="size-1.5 rounded-full bg-emerald-500 animate-pulse shadow-[0_0_6px_rgba(16,185,129,0.5)]" />
                  <span className="text-[8px] font-jetbrains font-bold text-emerald-600 dark:text-emerald-500">RUNNING</span>
                </div>
              }
            >
              <div className="font-jetbrains text-[9px] sm:text-[10px] leading-relaxed space-y-1.5 overflow-x-auto whitespace-nowrap [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden w-full text-left">
                <div className="flex items-center gap-1.5 sm:gap-2">
                  <span className="text-emerald-500 shrink-0">▸</span>
                  <span className="text-zinc-400 dark:text-zinc-500 shrink-0">PID</span>
                  <span className="text-zinc-700 dark:text-zinc-300 shrink-0">4821</span>
                  <span className="text-zinc-300 dark:text-zinc-700 mx-0.5 sm:mx-1 shrink-0">│</span>
                  <span className="text-zinc-400 dark:text-zinc-500 shrink-0">UPTIME</span>
                  <span className="text-zinc-700 dark:text-zinc-300 shrink-0">99.99%</span>
                  <span className="text-zinc-300 dark:text-zinc-700 mx-0.5 sm:mx-1 shrink-0">│</span>
                  <span className="text-zinc-400 dark:text-zinc-500 shrink-0">MEM</span>
                  <span className="text-zinc-700 dark:text-zinc-300 shrink-0">2.4GB</span>
                </div>
                <div className="flex items-center gap-1.5 sm:gap-2">
                  <span className="text-emerald-500 shrink-0">▸</span>
                  <span className="text-zinc-400 dark:text-zinc-500 shrink-0">loading</span>
                  <span className="text-zinc-900 dark:text-white font-bold shrink-0">seo_engine_v4.model</span>
                  <span className="text-emerald-600 dark:text-emerald-500 font-bold ml-auto shrink-0 pl-2">✓ ready</span>
                </div>
                <div className="flex items-center gap-1.5 sm:gap-2">
                  <span className="text-emerald-500 shrink-0">▸</span>
                  <span className="text-zinc-400 dark:text-zinc-500 shrink-0">modules</span>
                  <span className="text-amber-600 dark:text-amber-500 font-bold shrink-0">8 active</span>
                  <span className="text-zinc-300 dark:text-zinc-700 mx-0.5 sm:mx-1 shrink-0">│</span>
                  <span className="text-zinc-400 dark:text-zinc-500 shrink-0">signals</span>
                  <span className="text-violet-600 dark:text-violet-400 font-bold shrink-0">12.4k/s</span>
                </div>
              </div>
            </CodeBlock>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-full max-w-5xl mx-auto bg-white dark:bg-zinc-950 border-2 border-zinc-200 dark:border-zinc-800 rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.05)] dark:shadow-[0_20px_50px_rgba(0,0,0,0.3)] overflow-hidden flex flex-col md:flex-row min-h-[420px] sm:min-h-[520px]"
        >
          {/* Sidebar */}
          <div className="w-full md:w-72 bg-zinc-50/50 dark:bg-zinc-900/50 border-b-2 md:border-b-0 md:border-r-2 border-zinc-200 dark:border-zinc-800 p-4 md:p-6 flex flex-row md:flex-col gap-3 md:gap-2 overflow-x-auto md:overflow-y-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] shrink-0 z-20 relative">
            <LayoutGroup>
              <div className="mb-1 px-2 hidden md:flex items-center gap-2">
                <Cpu size={12} className="text-black dark:text-white" />
                <span className="text-[10px] font-medium text-black dark:text-white uppercase tracking-[0.2em]">
                  Modules
                </span>
              </div>
              <div className="flex flex-row md:flex-col gap-3 md:gap-6 shrink-0 items-center md:items-stretch">
                {categories.map((cat, catIdx) => (
                  <div key={catIdx} className="flex flex-row md:flex-col gap-2 md:gap-0 md:space-y-2 shrink-0 items-center md:items-stretch">
                    <div className="px-2 hidden md:flex items-center gap-1.5 opacity-40 uppercase tracking-[0.2em] font-bold text-[9px] text-black dark:text-white">
                      <span>{cat.name}</span>
                    </div>
                    <div className="flex flex-row md:flex-col gap-2 md:gap-1 shrink-0 items-center md:items-stretch">
                      {processes.filter(p => cat.ids.includes(p.id)).map((process) => {
                        const globalIdx = processes.findIndex(p => p.id === process.id);
                        const isActive = activeTab === globalIdx;
                        return (
                          <button
                            key={process.id}
                            onClick={() => setActiveTab(globalIdx)}
                            className={cn(
                              "relative flex items-center gap-2 md:gap-3 px-4 py-2.5 md:p-3 rounded-full md:rounded-2xl text-[13px] font-medium transition-all cursor-pointer text-left outline-none group whitespace-nowrap shrink-0",
                              isActive
                                ? "text-black dark:text-white"
                                : "text-black/60 dark:text-white/60 hover:text-black dark:hover:text-white"
                            )}
                          >
                            {isActive && (
                              <motion.div
                                layoutId="aiTabPill"
                                className="absolute inset-0 bg-white dark:bg-zinc-800 shadow-sm border-2 border-zinc-200 dark:border-zinc-700 rounded-2xl"
                                initial={false}
                                transition={{ type: "spring", stiffness: 350, damping: 30 }}
                              />
                            )}

                            <div className={cn(
                              "relative z-10 size-7 rounded-xl flex items-center justify-center border-2 transition-all duration-300",
                              isActive
                                ? "bg-black text-white border-black dark:bg-white dark:text-black dark:border-white"
                                : "bg-muted text-black dark:text-white border-transparent"
                            )}>
                              <process.icon size={14} />
                            </div>

                            <span className="relative z-10 truncate">{process.label}</span>
                          </button>
                        );
                      })}
                    </div>
                  </div>
                ))}
              </div>
            </LayoutGroup>

            {/* Status Module */}
            <div className="mt-auto hidden md:block p-4 rounded-2xl bg-zinc-900/[0.03] dark:bg-zinc-100/[0.03] border border-dashed border-zinc-200 dark:border-zinc-800">
              <div className="flex items-center gap-2 mb-2">
                <Zap size={12} className="text-zinc-900 dark:text-white" />
                <span className="text-[10px] font-medium text-zinc-700 dark:text-zinc-300 uppercase tracking-tighter">Live Status</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="size-1.5 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-[11px] font-medium text-zinc-700 dark:text-zinc-300">All Systems Operational</span>
              </div>
            </div>
          </div>

          {/* Content Area */}
          <div className="flex-1 p-5 sm:p-8 md:p-12 bg-white dark:bg-zinc-950 relative flex flex-col overflow-hidden min-w-0">
            <header className="mb-8 sm:mb-10 flex flex-col gap-2 text-left">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeProcess.id}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 10 }}
                  transition={{ duration: 0.3 }}
                >
                  <h3 className="text-2xl font-medium text-zinc-900 dark:text-zinc-100 tracking-tight leading-none">
                    {activeProcess.title}
                  </h3>
                  <p className="text-[15px] text-zinc-700 dark:text-zinc-300 mt-2 font-inter font-medium opacity-80">
                    {activeProcess.description}
                  </p>

                  <div className="grid grid-cols-2 sm:grid-cols-3 sm:flex sm:gap-8 gap-x-4 gap-y-6 mt-8 sm:mt-6">
                    {activeProcess.metrics.map((metric: any, idx) => (
                      <div key={idx} className="flex flex-col gap-2 sm:gap-1.5">
                        <div className="flex items-center gap-2">
                           {metric.icon && (
                              <div className={cn("size-6 rounded-md bg-zinc-100 dark:bg-white/5 flex items-center justify-center shrink-0", activeProcess.bg)}>
                                 <metric.icon size={12} className={activeProcess.text} />
                              </div>
                           )}
                           <span className="text-[9px] sm:text-xs font-bold uppercase tracking-widest text-zinc-500 truncate">{metric.label}</span>
                        </div>
                        <span className={cn("font-jetbrains font-semibold text-lg sm:text-xl md:text-2xl", activeProcess.text)}>{metric.calc}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </AnimatePresence>
            </header>

            <div className="flex-1 relative">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeProcess.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4 }}
                  className="w-full h-full"
                >
                  {/* Demo Content */}
                  <div className="h-full">
                    {activeProcess.demo}
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
