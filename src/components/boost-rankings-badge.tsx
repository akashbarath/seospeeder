import React from 'react'
import Link from 'next/link'
import { LucideIcon, ArrowRight } from 'lucide-react'
import { cn } from '@/lib/utils'

interface BoostRankingsBadgeProps {
  className?: string
  children?: React.ReactNode
  icon?: LucideIcon | React.ElementType
}

export function BoostRankingsBadge({ className, children, icon: Icon = ArrowRight }: BoostRankingsBadgeProps) {
  return (
    <Link
      href="#audit"
      className={cn(
        "hover:bg-background dark:hover:border-t-border bg-muted group mx-auto flex w-fit items-center gap-3 rounded-full border-2 px-4 py-2 shadow-md shadow-zinc-950/5 transition-colors duration-300 dark:border-t-white/5 dark:shadow-zinc-950",
        className
      )}
    >
      <span className="text-foreground text-xs md:text-sm font-semibold font-inter">
        {children || "Boost Rankings with AI SEO"}
      </span>
      <span className="dark:border-background block h-4 w-px bg-zinc-300 dark:bg-zinc-700"></span>

      <div className="bg-background group-hover:bg-muted size-6 overflow-hidden rounded-full duration-500">
        <div className="flex w-12 -translate-x-1/2 duration-500 ease-in-out group-hover:translate-x-0">
          <span className="flex size-6">
            <Icon className="m-auto size-3" />
          </span>
          <span className="flex size-6">
            <Icon className="m-auto size-3" />
          </span>
        </div>
      </div>
    </Link>
  )
}
