"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence, useInView, LayoutGroup } from "framer-motion";
import { Radar, Wand2, ServerCog, Network, Sparkles, Bot, LineChart, Zap, CheckCircle2, Cpu, ShieldCheck, Globe, TrendingUp, GitCommitVertical } from "lucide-react";
import { cn } from "@/lib/utils";
import { CodeBlock } from "@/components/ui/code-block";
import { RadialBar, RadialBarChart, LineChart as RechartsLineChart, Line, CartesianGrid, XAxis, YAxis } from "recharts";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";

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
    description: "Our semantic engines map entire user vertical journeys. We predict search intent clusters, evaluate query difficulty via neural transformers, and expose high-volume, low-competition gap clusters for rapid dominance.",
    metrics: [
      { label: "LSI Vector Gap", calc: "Optimized" },
      { label: "Predictive Intent", calc: "98.5%" },
      { label: "Cluster Density", calc: "Maximized" },
    ],
    demo: (
      <div className="w-full h-full p-4 sm:p-6 md:p-8 rounded-3xl border-2 border-zinc-100 dark:border-zinc-800/50 bg-zinc-50/50 dark:bg-zinc-900/50 overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-black/5 flex flex-col items-center justify-center gap-5 relative">
        {/* Radar Sweep */}
        <div className="relative w-56 h-56 md:w-64 md:h-64 flex items-center justify-center">
          {/* Background rings */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none">
            {[25, 38, 48].map((r, i) => (
              <circle key={i} cx="50%" cy="50%" r={`${r}%`} stroke="currentColor" strokeWidth="0.5" fill="none" className="text-zinc-200 dark:text-zinc-800" />
            ))}
          </svg>

          {/* Rotating sweep line */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0"
          >
            <svg className="w-full h-full overflow-visible">
              <defs>
                <linearGradient id="sweepGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="rgb(59,130,246)" stopOpacity="0.5" />
                  <stop offset="100%" stopColor="rgb(59,130,246)" stopOpacity="0" />
                </linearGradient>
              </defs>
              <line x1="50%" y1="50%" x2="50%" y2="2%" stroke="url(#sweepGrad)" strokeWidth="2" />
            </svg>
          </motion.div>

          {/* Center Hub */}
          <div className="relative z-20 size-14 rounded-full bg-white dark:bg-zinc-900 border-2 border-blue-500/30 flex flex-col items-center justify-center shadow-lg">
            <Radar size={18} className="text-blue-500" />
            <span className="text-[6px] font-black text-blue-600 dark:text-blue-400 uppercase tracking-widest mt-0.5">SCAN</span>
            <motion.div 
              animate={{ scale: [1, 1.4, 1], opacity: [0.2, 0.4, 0.2] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="absolute inset-0 border border-blue-500/20 rounded-full"
            />
          </div>

          {/* Intent Cluster Nodes */}
          {[
            { label: "Transactional", top: "8%", left: "55%", delay: 0.2, size: "w-16" },
            { label: "Navigational", top: "28%", left: "88%", delay: 0.6, size: "w-14" },
            { label: "Informational", top: "72%", left: "82%", delay: 1.0, size: "w-16" },
            { label: "Commercial", top: "85%", left: "35%", delay: 1.4, size: "w-14" },
            { label: "Local", top: "55%", left: "5%", delay: 1.8, size: "w-10" },
            { label: "Discovery", top: "18%", left: "12%", delay: 2.2, size: "w-12" },
          ].map((node, i) => (
            <motion.div
              key={i}
              className="absolute flex flex-col items-center z-10"
              style={{ top: node.top, left: node.left, transform: 'translate(-50%, -50%)' }}
              initial={{ scale: 0, opacity: 0 }}
              animate={{ 
                scale: 1, 
                opacity: 1,
                y: [0, -4, 4, 0]
              }}
              transition={{ 
                scale: { delay: node.delay, duration: 0.4 },
                opacity: { delay: node.delay, duration: 0.4 },
                y: { duration: 3 + i * 0.4, repeat: Infinity, ease: "easeInOut", delay: i * 0.3 }
              }}
            >
              <div className={`${node.size} px-2 py-1.5 rounded-lg bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 shadow-sm flex flex-col items-center gap-0.5`}>
                <motion.div 
                  animate={{ backgroundColor: ["rgba(59,130,246,0.1)", "rgba(59,130,246,0.4)", "rgba(59,130,246,0.1)"] }}
                  transition={{ duration: 2, repeat: Infinity, delay: node.delay }}
                  className="size-1.5 rounded-full"
                />
                <span className="text-[6px] font-black text-zinc-500 dark:text-zinc-400 uppercase tracking-wider text-center leading-tight">{node.label}</span>
              </div>
            </motion.div>
          ))}

          {/* SVG connection lines from center to nodes */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none overflow-visible">
            {[
              { x: "55%", y: "8%" },
              { x: "88%", y: "28%" },
              { x: "82%", y: "72%" },
              { x: "35%", y: "85%" },
              { x: "5%", y: "55%" },
              { x: "12%", y: "18%" },
            ].map((pos, i) => (
              <motion.line
                key={i}
                x1="50%" y1="50%" x2={pos.x} y2={pos.y}
                stroke="currentColor" strokeWidth="0.75" strokeDasharray="3 3"
                className="text-blue-500/20 dark:text-blue-500/15"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ duration: 1.5, delay: i * 0.2 }}
              />
            ))}
          </svg>
        </div>

        {/* Status Bar */}
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-blue-500/10 border-2 border-blue-500/20">
            <div className="size-1.5 rounded-full bg-blue-500 animate-pulse" />
            <span className="text-[8px] font-jetbrains font-black text-blue-600 dark:text-blue-400 uppercase tracking-wider">Mapping Intents</span>
          </div>
          <span className="text-[8px] font-jetbrains font-bold text-zinc-400 dark:text-zinc-600">6 CLUSTERS ACTIVE</span>
        </div>
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
    description: "We architect content using Large Language Models mathematically fine-tuned for E-E-A-T. Utilizing semantic distance mapping, we ensure 100% entity coverage, topical authority, and algorithmic readability.",
    metrics: [
      { label: "Topical Authority", calc: "Level 5" },
      { label: "Semantic Score", calc: "99/100" },
      { label: "Entity Density", calc: "Ideal" },
    ],
    demo: (
      <div className="w-full h-full p-4 sm:p-6 md:p-8 rounded-3xl border-2 border-zinc-100 dark:border-zinc-800/50 bg-zinc-50/50 dark:bg-zinc-900/50 overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-black/5 flex flex-col items-center justify-center gap-5 relative">
        {/* E-E-A-T Pillar Visualization */}
        <div className="relative w-full max-w-xs h-56 md:h-64 flex items-center justify-center">
          {/* Central LLM Core */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
            <motion.div
              animate={{ boxShadow: ["0 0 15px rgba(16,185,129,0.15)", "0 0 35px rgba(16,185,129,0.3)", "0 0 15px rgba(16,185,129,0.15)"] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="size-16 rounded-2xl bg-white dark:bg-zinc-900 border-2 border-emerald-500/30 flex flex-col items-center justify-center shadow-lg"
            >
              <Wand2 size={18} className="text-emerald-500" />
              <span className="text-[6px] font-black text-emerald-600 dark:text-emerald-400 uppercase tracking-widest mt-1">LLM CORE</span>
            </motion.div>
          </div>

          {/* SVG Connections */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none overflow-visible">
            {[
              { x: "20%", y: "15%" },
              { x: "80%", y: "15%" },
              { x: "80%", y: "85%" },
              { x: "20%", y: "85%" },
            ].map((pos, i) => (
              <motion.line
                key={i}
                x1="50%" y1="50%" x2={pos.x} y2={pos.y}
                stroke="currentColor" strokeWidth="1"
                className="text-emerald-500/15 dark:text-emerald-500/10"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ duration: 1.5, delay: i * 0.2 }}
              />
            ))}
          </svg>

          {/* E-E-A-T Pillars */}
          {[
            { letter: "E", label: "Experience", top: "15%", left: "20%", delay: 0.3 },
            { letter: "E", label: "Expertise", top: "15%", left: "80%", delay: 0.6 },
            { letter: "A", label: "Authority", top: "85%", left: "80%", delay: 0.9 },
            { letter: "T", label: "Trust", top: "85%", left: "20%", delay: 1.2 },
          ].map((pillar, i) => (
            <motion.div
              key={i}
              className="absolute flex flex-col items-center z-10"
              style={{ top: pillar.top, left: pillar.left, transform: 'translate(-50%, -50%)' }}
              initial={{ scale: 0, opacity: 0 }}
              animate={{ 
                scale: 1, 
                opacity: 1,
                y: [0, -3, 3, 0]
              }}
              transition={{ 
                scale: { delay: pillar.delay, duration: 0.4, type: "spring" },
                opacity: { delay: pillar.delay, duration: 0.4 },
                y: { duration: 4 + i * 0.5, repeat: Infinity, ease: "easeInOut", delay: i * 0.4 }
              }}
            >
              <div className="w-14 px-2 py-2 rounded-xl bg-white dark:bg-zinc-800 border-2 border-zinc-200 dark:border-zinc-700 shadow-sm flex flex-col items-center gap-1 relative">
                <span className="text-sm font-black text-emerald-600 dark:text-emerald-400 leading-none">{pillar.letter}</span>
                <span className="text-[5px] font-black text-zinc-500 dark:text-zinc-400 uppercase tracking-wider leading-none">{pillar.label}</span>
                {/* Validation pulse */}
                <motion.div 
                  animate={{ scale: [1, 1.5, 1], opacity: [0.3, 0, 0.3] }}
                  transition={{ duration: 2.5, repeat: Infinity, delay: pillar.delay }}
                  className="absolute inset-0 border border-emerald-500/30 rounded-xl pointer-events-none"
                />
              </div>
            </motion.div>
          ))}

          {/* Semantic Coverage Progress Ring */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none overflow-visible">
            <motion.circle 
              cx="50%" cy="50%" r="42%" 
              stroke="currentColor" strokeWidth="1" strokeDasharray="6 4" fill="none"
              className="text-emerald-500/15 dark:text-emerald-500/10"
              animate={{ rotate: 360 }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            />
          </svg>

          {/* Entity Particles floating between pillars */}
          {[0, 1, 2, 3, 4].map((i) => (
            <motion.div
              key={`particle-${i}`}
              className="absolute size-1 bg-emerald-500/40 rounded-full z-10"
              style={{ top: "50%", left: "50%" }}
              animate={{
                x: [0, 40 * Math.cos(i * 72 * Math.PI / 180), -30 * Math.cos((i + 2) * 72 * Math.PI / 180), 0],
                y: [0, 40 * Math.sin(i * 72 * Math.PI / 180), -30 * Math.sin((i + 2) * 72 * Math.PI / 180), 0],
                opacity: [0, 0.8, 0.4, 0]
              }}
              transition={{ duration: 4 + i, repeat: Infinity, delay: i * 0.8, ease: "easeInOut" }}
            />
          ))}
        </div>

        {/* Live Entity Score Footer */}
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-500/10 border-2 border-emerald-500/20">
            <div className="size-1.5 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-[8px] font-jetbrains font-black text-emerald-600 dark:text-emerald-400 uppercase tracking-wider">Scoring Entities</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-[8px] font-jetbrains font-bold text-zinc-400 dark:text-zinc-600">SEMANTIC</span>
            <div className="w-16 h-1 bg-zinc-200 dark:bg-zinc-800 rounded-full overflow-hidden">
              <motion.div 
                initial={{ width: "0%" }}
                animate={{ width: "99%" }}
                transition={{ duration: 3, repeat: Infinity, repeatType: "reverse" }}
                className="h-full bg-emerald-500 rounded-full"
              />
            </div>
            <span className="text-[8px] font-jetbrains font-black text-emerald-600 dark:text-emerald-400">99%</span>
          </div>
        </div>
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
    description: "Google prioritizes speed and structural integrity. We implement dynamic hydration, critical path optimization, and Brotli compression to ensure your site is indexed with near-zero latency.",
    metrics: [
      { label: "FID / INP", calc: "< 12ms" },
      { label: "TTFB Latency", calc: "24ms" },
      { label: "DOM Complexity", calc: "Minimal" },
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
    description: "Modern search authority is about entity validation. We build impregnable link graphs, connecting your brand entity to high-authority knowledge bases via neural PR and strategic digital footprinting.",
    metrics: [
      { label: "Trust Velocity", calc: "High" },
      { label: "Entity Match", calc: "A+" },
      { label: "Link Diversity", calc: "Tier 1" },
    ],
    demo: (
      <div className="w-full h-full p-4 sm:p-6 md:p-8 rounded-3xl border-2 border-zinc-100 dark:border-zinc-800/50 bg-zinc-50/50 dark:bg-zinc-900/50 overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-black/5 flex flex-col items-center justify-center gap-6 relative">
        {/* Scanning overlay */}
        <motion.div 
          animate={{ top: ["-10%", "110%"] }}
          transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
          className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-orange-500/30 to-transparent pointer-events-none z-30"
        />

        {/* Link Graph Visualization */}
        <div className="relative w-56 h-56 md:w-64 md:h-64">
          {/* Central Brand Hub */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
            <motion.div 
              animate={{ boxShadow: ["0 0 15px rgba(249,115,22,0.15)", "0 0 30px rgba(249,115,22,0.3)", "0 0 15px rgba(249,115,22,0.15)"] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="size-16 rounded-2xl bg-white dark:bg-zinc-900 border-2 border-orange-500/30 flex flex-col items-center justify-center shadow-lg"
            >
              <Network size={18} className="text-orange-500" />
              <span className="text-[7px] font-black text-orange-600 dark:text-orange-400 uppercase tracking-widest mt-1">BRAND</span>
            </motion.div>
          </div>

          {/* SVG connection lines */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none overflow-visible">
            {[
              { x: "18%", y: "10%" },
              { x: "82%", y: "15%" },
              { x: "92%", y: "65%" },
              { x: "72%", y: "90%" },
              { x: "12%", y: "75%" },
              { x: "5%", y: "38%" },
            ].map((pos, i) => (
              <motion.line
                key={i}
                x1="50%" y1="50%" x2={pos.x} y2={pos.y}
                stroke="currentColor" strokeWidth="1"
                className="text-orange-500/20 dark:text-orange-500/15"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ duration: 1.5, delay: i * 0.2 }}
              />
            ))}
          </svg>

          {/* Authority Nodes - asymmetric placement */}
          {[
            { label: "News", top: "10%", left: "18%", delay: 0.3, size: "size-10" },
            { label: "Wiki", top: "15%", left: "82%", delay: 0.6, size: "size-9" },
            { label: "Gov", top: "65%", left: "92%", delay: 0.9, size: "size-8" },
            { label: "Edu", top: "90%", left: "72%", delay: 1.2, size: "size-10" },
            { label: "PR", top: "75%", left: "12%", delay: 1.5, size: "size-9" },
            { label: "Dir", top: "38%", left: "5%", delay: 1.8, size: "size-8" },
          ].map((node, i) => (
            <motion.div
              key={i}
              className={`absolute ${node.size} rounded-xl bg-white dark:bg-zinc-800 border-2 border-zinc-200 dark:border-zinc-700 flex flex-col items-center justify-center shadow-sm z-10`}
              style={{ top: node.top, left: node.left, transform: 'translate(-50%, -50%)' }}
              initial={{ scale: 0, opacity: 0 }}
              animate={{ 
                scale: 1, 
                opacity: 1,
                y: [0, -3, 3, 0],
                x: [0, 2, -2, 0]
              }}
              transition={{ 
                scale: { delay: node.delay, duration: 0.4 },
                opacity: { delay: node.delay, duration: 0.4 },
                y: { duration: 4 + i * 0.5, repeat: Infinity, ease: "easeInOut", delay: i * 0.3 },
                x: { duration: 5 + i * 0.3, repeat: Infinity, ease: "easeInOut", delay: i * 0.5 }
              }}
            >
              <span className="text-[7px] font-black text-zinc-500 dark:text-zinc-400 uppercase tracking-wider">{node.label}</span>
              {/* Trust pulse */}
              <motion.div 
                animate={{ scale: [1, 1.8, 1], opacity: [0.3, 0, 0.3] }}
                transition={{ duration: 2, repeat: Infinity, delay: node.delay }}
                className="absolute inset-0 border border-orange-500/30 rounded-xl pointer-events-none"
              />
            </motion.div>
          ))}
        </div>

        {/* Live Status Footer */}
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-orange-500/10 border-2 border-orange-500/20">
            <div className="size-1.5 rounded-full bg-orange-500 animate-pulse" />
            <span className="text-[8px] font-jetbrains font-black text-orange-600 dark:text-orange-400 uppercase tracking-wider">Forging Links</span>
          </div>
          <span className="text-[8px] font-jetbrains font-bold text-zinc-400 dark:text-zinc-600">DA 70+ TARGETS</span>
        </div>
      </div>
    )
  },
  {
    id: "optimization",
    title: "AI Speed Core Optimization",
    label: "Speed Core",
    icon: Zap,
    color: "from-cyan-500 to-blue-500",
    shadow: "shadow-cyan-500/20",
    bg: "bg-cyan-500/10",
    text: "text-cyan-500",
    description: "Our AI engine performs ad-hoc adjustments to asset priority based on user interaction patterns. We intelligently compress, lazy-load, and orchestrate CDN delivery for a flawless, instant experience.",
    metrics: [
      { label: "Asset Size", calc: "-85%" },
      { label: "Execution Time", calc: "Optimized" },
      { label: "CDN Latency", calc: "< 5ms" },
    ],
    demo: (
      <div className="w-full h-full p-4 sm:p-6 md:p-8 rounded-3xl border-2 border-zinc-100 dark:border-zinc-800/50 bg-zinc-50/50 dark:bg-zinc-900/50 overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-black/5 flex flex-col items-center justify-center gap-5 relative">
        {/* Scan overlay */}
        <motion.div 
          animate={{ left: ["-20%", "120%"] }}
          transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
          className="absolute top-0 bottom-0 w-8 bg-gradient-to-r from-transparent via-cyan-500/5 to-transparent pointer-events-none z-30"
        />

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
            { label: "TTFB", value: "24ms" },
            { label: "FCP", value: "0.8s" },
            { label: "CLS", value: "0.01" },
          ].map((metric, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 + i * 0.15 }}
              className="flex-1 flex flex-col items-center gap-1 p-2.5 rounded-xl bg-white dark:bg-zinc-800 border-2 border-zinc-200 dark:border-zinc-800 shadow-sm"
            >
              <span className="text-[7px] font-black text-zinc-400 dark:text-zinc-500 uppercase tracking-widest">{metric.label}</span>
              <span className="text-sm font-black tabular-nums text-black dark:text-white">
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
    description: "Move beyond standard analytics. We use predictive modeling to identify conversion bottlenecks and automatically adjust UI elements to maximize ROI and lower customer acquisition costs.",
    metrics: [
      { label: "ROI Boost", calc: "+450%" },
      { label: "CPA Reduction", calc: "Significant" },
      { label: "User Retention", calc: "99.9%" },
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
    description: "Protection is performance. We implement AI-driven malware scanning, cloud-firewall orchestration, and automated vulnerability patching to ensure your brand remains impregnable and fast.",
    metrics: [
      { label: "Threat Block", calc: "100%" },
      { label: "Uptime", calc: "99.99%" },
      { label: "Security Score", calc: "AAA" },
    ],
    demo: (
      <div className="w-full h-full p-4 sm:p-6 md:p-8 rounded-3xl border-2 border-zinc-100 dark:border-zinc-800/50 bg-zinc-50/50 dark:bg-zinc-900/50 overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-black/5 flex flex-col items-center justify-center gap-5 relative">
        {/* Threat scan line */}
        <motion.div 
          animate={{ top: ["-5%", "105%"] }}
          transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
          className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-red-500/30 to-transparent pointer-events-none z-30"
        />

        {/* Shield Core */}
        <div className="relative w-40 h-40 md:w-48 md:h-48 flex items-center justify-center">
          {/* Scanning Rings */}
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              animate={{ scale: [1, 1.6, 1], opacity: [0.15, 0, 0.15] }}
              transition={{ duration: 3, repeat: Infinity, delay: i * 1, ease: "easeOut" }}
              className="absolute inset-0 border border-red-500/20 rounded-full"
            />
          ))}

          {/* Hexagonal Shield */}
          <motion.div
            animate={{ rotate: [0, 3, -3, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="relative z-20 size-20 flex items-center justify-center"
          >
            <div className="size-20 bg-white dark:bg-zinc-900 rounded-2xl border-2 border-red-500/30 flex flex-col items-center justify-center shadow-lg rotate-45">
              <div className="-rotate-45 flex flex-col items-center">
                <ShieldCheck size={22} className="text-red-500" />
                <span className="text-[6px] font-black text-red-600 dark:text-red-400 uppercase tracking-widest mt-1">ACTIVE</span>
              </div>
            </div>
            <motion.div 
              animate={{ boxShadow: ["0 0 15px rgba(239,68,68,0.1)", "0 0 30px rgba(239,68,68,0.25)", "0 0 15px rgba(239,68,68,0.1)"] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="absolute inset-0 rounded-2xl rotate-45"
            />
          </motion.div>

          {/* Threat Intercept Nodes */}
          {[45, 135, 225, 315].map((angle, i) => (
            <motion.div
              key={i}
              className="absolute size-6 rounded-lg bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 flex items-center justify-center shadow-sm z-10"
              style={{
                top: `${(50 + 38 * Math.sin(angle * Math.PI / 180)).toFixed(1)}%`,
                left: `${(50 + 38 * Math.cos(angle * Math.PI / 180)).toFixed(1)}%`,
                transform: 'translate(-50%, -50%)'
              }}
            >
              <motion.div 
                animate={{ backgroundColor: ["rgba(239,68,68,0.1)", "rgba(239,68,68,0.5)", "rgba(239,68,68,0.1)"] }}
                transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.4 }}
                className="size-2 rounded-full"
              />
            </motion.div>
          ))}
        </div>

        {/* Threat Log */}
        <div className="w-full max-w-xs space-y-1.5">
          {[
            { type: "XSS", status: "BLOCKED", time: "0.2ms" },
            { type: "SQL_INJ", status: "BLOCKED", time: "0.1ms" },
            { type: "DDoS", status: "MITIGATED", time: "< 1ms" },
          ].map((threat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 + i * 0.15 }}
              className="flex items-center justify-between px-3 py-1.5 rounded-lg bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700"
            >
              <span className="text-[8px] font-jetbrains font-black text-zinc-500 dark:text-zinc-400">{threat.type}</span>
              <span className="text-[8px] font-jetbrains font-black text-red-600 dark:text-red-400">{threat.status}</span>
              <span className="text-[8px] font-jetbrains font-bold text-zinc-400 dark:text-zinc-600">{threat.time}</span>
            </motion.div>
          ))}
        </div>

        {/* Status */}
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-red-500/10 border-2 border-red-500/20">
            <div className="size-1.5 rounded-full bg-red-500 animate-pulse" />
            <span className="text-[8px] font-jetbrains font-black text-red-600 dark:text-red-400 uppercase tracking-wider">Threat Monitor</span>
          </div>
          <span className="text-[8px] font-jetbrains font-bold text-zinc-400 dark:text-zinc-600">0 BREACHES</span>
        </div>
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
    description: "Infrastructure that thinks. We deploy your site across a global edge network with predictive auto-scaling that prepares for traffic spikes before they happen, ensuring 0ms latency globally.",
    metrics: [
      { label: "Global Ping", calc: "< 1ms" },
      { label: "Nodes Active", calc: "240+" },
      { label: "Scaling", calc: "Elastic" },
    ],
    demo: (
      <div className="w-full h-full p-4 sm:p-6 md:p-8 rounded-3xl border-2 border-zinc-100 dark:border-zinc-800/50 bg-zinc-50/50 dark:bg-zinc-900/50 overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-black/5 flex flex-col items-center justify-center gap-5 relative">
        {/* Pulse wave */}
        <motion.div 
          animate={{ scale: [0.8, 2.5], opacity: [0.15, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeOut" }}
          className="absolute size-32 border border-blue-500/20 rounded-full pointer-events-none"
        />

        {/* Global Network */}
        <div className="relative w-56 h-56 md:w-64 md:h-64 flex items-center justify-center">
          {/* Central Globe Hub */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
            <motion.div
              animate={{ boxShadow: ["0 0 15px rgba(59,130,246,0.15)", "0 0 35px rgba(59,130,246,0.3)", "0 0 15px rgba(59,130,246,0.15)"] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="size-16 rounded-full bg-white dark:bg-zinc-900 border-2 border-blue-500/30 flex flex-col items-center justify-center shadow-lg"
            >
              <Globe size={20} className="text-blue-600 dark:text-blue-400" />
              <span className="text-[5px] font-black text-blue-600 dark:text-blue-400 uppercase tracking-widest mt-0.5">ORIGIN</span>
            </motion.div>
          </div>

          {/* Connection Lines */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none overflow-visible">
            {[
              { x: "15%", y: "18%" },
              { x: "85%", y: "22%" },
              { x: "92%", y: "58%" },
              { x: "75%", y: "88%" },
              { x: "25%", y: "82%" },
              { x: "5%", y: "50%" },
            ].map((pos, i) => (
              <motion.line
                key={i}
                x1="50%" y1="50%" x2={pos.x} y2={pos.y}
                stroke="currentColor" strokeWidth="0.75" strokeDasharray="4 3"
                className="text-blue-500/15 dark:text-blue-500/10"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ duration: 1.5, delay: i * 0.15 }}
              />
            ))}
          </svg>

          {/* Edge Nodes */}
          {[
            { label: "US-E", top: "18%", left: "15%", delay: 0.2, ping: "2ms" },
            { label: "EU-W", top: "22%", left: "85%", delay: 0.5, ping: "4ms" },
            { label: "APAC", top: "58%", left: "92%", delay: 0.8, ping: "8ms" },
            { label: "SA", top: "88%", left: "75%", delay: 1.1, ping: "6ms" },
            { label: "AF", top: "82%", left: "25%", delay: 1.4, ping: "9ms" },
            { label: "US-W", top: "50%", left: "5%", delay: 1.7, ping: "1ms" },
          ].map((node, i) => (
            <motion.div
              key={i}
              className="absolute flex flex-col items-center z-10"
              style={{ top: node.top, left: node.left, transform: 'translate(-50%, -50%)' }}
              initial={{ scale: 0, opacity: 0 }}
              animate={{ 
                scale: 1, 
                opacity: 1,
                y: [0, -3, 3, 0],
                x: [0, 2, -2, 0]
              }}
              transition={{ 
                scale: { delay: node.delay, duration: 0.4 },
                opacity: { delay: node.delay, duration: 0.4 },
                y: { duration: 4 + i * 0.3, repeat: Infinity, ease: "easeInOut", delay: i * 0.3 },
                x: { duration: 5 + i * 0.4, repeat: Infinity, ease: "easeInOut", delay: i * 0.5 }
              }}
            >
              <div className="w-11 px-1.5 py-1.5 rounded-lg bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 shadow-sm flex flex-col items-center gap-0.5">
                <motion.div 
                  animate={{ backgroundColor: ["rgba(59,130,246,0.2)", "rgba(59,130,246,0.6)", "rgba(59,130,246,0.2)"] }}
                  transition={{ duration: 1.5, repeat: Infinity, delay: node.delay }}
                  className="size-1.5 rounded-full"
                />
                <span className="text-[6px] font-black text-zinc-500 dark:text-zinc-400 uppercase tracking-wider">{node.label}</span>
                <span className="text-[5px] font-jetbrains font-bold text-blue-600 dark:text-blue-400">{node.ping}</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Status */}
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-blue-500/10 border-2 border-blue-500/20">
            <div className="size-1.5 rounded-full bg-blue-500 animate-pulse" />
            <span className="text-[8px] font-jetbrains font-black text-blue-600 dark:text-blue-400 uppercase tracking-wider">Elastic Scale</span>
          </div>
          <span className="text-[8px] font-jetbrains font-bold text-zinc-400 dark:text-zinc-600">240+ EDGE NODES</span>
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
                  
                   <div className="grid grid-cols-2 sm:flex sm:gap-8 gap-x-4 gap-y-6 mt-8 sm:mt-6">
                    {activeProcess.metrics.map((metric, idx) => (
                      <div key={idx} className="flex flex-col gap-1.5 sm:gap-1">
                        <span className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-zinc-500">{metric.label}</span>
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
