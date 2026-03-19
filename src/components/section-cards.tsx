"use client"

import { TrendingUpIcon } from "lucide-react"
import { motion, useInView, Variants } from "framer-motion"
import { useRef } from "react"
import { Badge } from "@/components/ui/badge"
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export function SectionCards() {
  const containerRef = useRef(null)
  const isVisible = useInView(containerRef, { once: true, margin: "-50px" })

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.5, ease: [0.23, 1, 0.32, 1] }
    },
  }

  const cardClassName = "h-full flex flex-col border-2 shadow-sm @container/card relative group overflow-hidden transition-all duration-500 hover:shadow-xl hover:shadow-black/5 hover:border-zinc-300 dark:hover:border-zinc-800 bg-gradient-to-t from-primary/5 to-card dark:bg-card"

  return (
    <motion.div 
      ref={containerRef}
      variants={containerVariants}
      initial="hidden"
      animate={isVisible ? "visible" : "hidden"}
      className="@xl/main:grid-cols-2 @5xl/main:grid-cols-4 grid grid-cols-1 gap-4 px-4 lg:px-6"
    >
      {/* Total Revenue */}
      <motion.div variants={cardVariants} className="h-full">
        <Card className={cardClassName}>
          <CardHeader className="relative">
            <CardDescription className="font-semibold text-foreground">Total Revenue</CardDescription>
            <CardTitle className="@[250px]/card:text-3xl text-2xl font-semibold tabular-nums">
              £21,018
            </CardTitle>
            <div className="absolute right-4 top-4">
              <Badge variant="outline" className="flex gap-1 rounded-lg text-xs font-bold text-emerald-500 border-emerald-500/20 bg-emerald-500/5">
                <TrendingUpIcon className="size-3" />
                +43.2%
              </Badge>
            </div>
          </CardHeader>
          <CardFooter className="flex-col items-start gap-1 text-sm">
            <div className="line-clamp-1 flex gap-2 font-medium">
              Up £6,336 from last month <TrendingUpIcon className="size-4 text-emerald-500" />
            </div>
            <div className="text-muted-foreground">
              Previous month: £14,682
            </div>
          </CardFooter>
        </Card>
      </motion.div>

      {/* New Customers */}
      <motion.div variants={cardVariants} className="h-full">
        <Card className={cardClassName}>
          <CardHeader className="relative">
            <CardDescription className="font-semibold text-foreground">New Customers</CardDescription>
            <CardTitle className="@[250px]/card:text-3xl text-2xl font-semibold tabular-nums">
              20,743
            </CardTitle>
            <div className="absolute right-4 top-4">
              <Badge variant="outline" className="flex gap-1 rounded-lg text-xs font-bold text-sky-500 border-sky-500/20 bg-sky-500/5">
                <TrendingUpIcon className="size-3" />
                +8.3%
              </Badge>
            </div>
          </CardHeader>
          <CardFooter className="flex-col items-start gap-1 text-sm">
            <div className="line-clamp-1 flex gap-2 font-medium">
              Up 1,591 from last period <TrendingUpIcon className="size-4 text-sky-500" />
            </div>
            <div className="text-muted-foreground">
              Higher avg. spend per customer
            </div>
          </CardFooter>
        </Card>
      </motion.div>

      {/* Active Accounts */}
      <motion.div variants={cardVariants} className="h-full">
        <Card className={cardClassName}>
          <CardHeader className="relative">
            <CardDescription className="font-semibold text-foreground">Active Accounts</CardDescription>
            <CardTitle className="@[250px]/card:text-3xl text-2xl font-semibold tabular-nums">
              45,678
            </CardTitle>
            <div className="absolute right-4 top-4">
              <Badge variant="outline" className="flex gap-1 rounded-lg text-xs font-bold text-rose-500 border-rose-500/20 bg-rose-500/5">
                <TrendingUpIcon className="size-3" />
                +6.2%
              </Badge>
            </div>
          </CardHeader>
          <CardFooter className="flex-col items-start gap-1 text-sm">
            <div className="line-clamp-1 flex gap-2 font-medium">
              Up 2,666 from last month <TrendingUpIcon className="size-4 text-rose-500" />
            </div>
            <div className="text-muted-foreground">Strong retention rate</div>
          </CardFooter>
        </Card>
      </motion.div>

      {/* Growth Rate */}
      <motion.div variants={cardVariants} className="h-full">
        <Card className={cardClassName}>
          <CardHeader className="relative">
            <CardDescription className="font-semibold text-foreground">Growth Rate</CardDescription>
            <CardTitle className="@[250px]/card:text-3xl text-2xl font-semibold tabular-nums">
              43.2%
            </CardTitle>
            <div className="absolute right-4 top-4">
              <Badge variant="outline" className="flex gap-1 rounded-lg text-xs font-bold text-purple-500 border-purple-500/20 bg-purple-500/5">
                <TrendingUpIcon className="size-3" />
                +3.1%
              </Badge>
            </div>
          </CardHeader>
          <CardFooter className="flex-col items-start gap-1 text-sm">
            <div className="line-clamp-1 flex gap-2 font-medium">
              Accelerating (QoQ) <TrendingUpIcon className="size-4 text-purple-500" />
            </div>
            <div className="text-muted-foreground">Up from 40.1% prev.</div>
          </CardFooter>
        </Card>
      </motion.div>
    </motion.div>
  )
}
