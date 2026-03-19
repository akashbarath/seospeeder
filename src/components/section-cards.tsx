"use client"

import { TrendingUpIcon } from "lucide-react"
import { motion, useInView, useSpring, useMotionValue } from "framer-motion"
import { useRef, useEffect } from "react"
import { Badge } from "@/components/ui/badge"
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { cn } from "@/lib/utils"

function Counter({ value, decimals = 0, prefix = "", suffix = "", inView }: { value: string, decimals?: number, prefix?: string, suffix?: string, inView: boolean }) {
  const ref = useRef<HTMLSpanElement>(null);
  const numericValue = parseFloat(value.replace(/[^0-9.]/g, ''));
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, {
    damping: 30,
    stiffness: 80,
  });

  useEffect(() => {
    if (inView) {
      motionValue.set(numericValue);
    }
  }, [inView, numericValue, motionValue]);

  useEffect(() => {
    const unsub = springValue.on("change", (latest) => {
      if (ref.current) {
        if (value.includes('£')) {
          ref.current.textContent = "£" + latest.toLocaleString(undefined, { minimumFractionDigits: 0, maximumFractionDigits: 0 });
        } else {
          ref.current.textContent = latest.toLocaleString(undefined, { minimumFractionDigits: decimals, maximumFractionDigits: decimals }) + suffix;
        }
      }
    });
    return () => unsub();
  }, [springValue, decimals, suffix, value]);

  return <span ref={ref}>{prefix}0{suffix}</span>;
}

export function SectionCards() {
  const containerRef = useRef(null);
  const isVisible = useInView(containerRef, { once: true, margin: "-50px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.98 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: { type: "spring", stiffness: 100, damping: 20 }
    },
  };

  const stats = [
    {
      label: "Total Revenue",
      value: "£21,018",
      badge: "+43.2%",
      badgeColor: "text-emerald-500",
      footer: "Up £6,336 from last month",
      subFooter: "Previous month: £14,682",
    },
    {
      label: "New Customers",
      value: "20,743",
      badge: "+8.3%",
      badgeColor: "text-sky-500",
      footer: "Up 1,591 from last period",
      subFooter: "Higher avg. spend per customer",
    },
    {
      label: "Active Accounts",
      value: "45,678",
      badge: "+6.2%",
      badgeColor: "text-rose-500",
      footer: "Up 2,666 from last month",
      subFooter: "Strong retention rate",
    },
    {
      label: "Growth Rate",
      value: "43.2%",
      badge: "+3.1%",
      badgeColor: "text-purple-500",
      footer: "Accelerating quarter-on-quarter",
      subFooter: "Up from 40.1% last month",
    }
  ];

  return (
    <motion.div 
      ref={containerRef}
      variants={containerVariants}
      initial="hidden"
      animate={isVisible ? "visible" : "hidden"}
      className="@xl/main:grid-cols-2 @5xl/main:grid-cols-4 grid grid-cols-1 gap-4 px-4 lg:px-6"
    >
      {stats.map((stat, i) => (
        <motion.div key={i} variants={cardVariants}>
          <Card className="@container/card relative group overflow-hidden transition-all duration-500 hover:shadow-xl hover:shadow-primary/5 hover:border-primary/20 bg-gradient-to-br from-card to-primary/[0.02]">
            {/* Subtle glow effect on hover */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            
            <CardHeader className="relative">
              <CardDescription className="font-medium">{stat.label}</CardDescription>
              <CardTitle className="@[250px]/card:text-3xl text-2xl font-black tabular-nums tracking-tighter text-foreground">
                <Counter value={stat.value} inView={isVisible} />
              </CardTitle>
              <div className="absolute right-4 top-4">
                <motion.div
                  initial={{ opacity: 0, x: 10 }}
                  animate={isVisible ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.5 + i * 0.1 }}
                >
                  <Badge variant="outline" className={cn("flex gap-1 rounded-full text-[10px] font-black uppercase tracking-tighter border-2 px-3 py-1 bg-white dark:bg-zinc-900", stat.badgeColor)}>
                    <TrendingUpIcon className="size-3" />
                    {stat.badge}
                  </Badge>
                </motion.div>
              </div>
            </CardHeader>
            <CardFooter className="flex-col items-start gap-1.5 text-xs pb-6">
              <div className="line-clamp-1 flex gap-2 font-bold text-foreground">
                {stat.footer} <TrendingUpIcon className={cn("size-3.5", stat.badgeColor)} />
              </div>
              <div className="text-muted-foreground font-medium opacity-70">
                {stat.subFooter}
              </div>
            </CardFooter>
          </Card>
        </motion.div>
      ))}
    </motion.div>
  )
}
