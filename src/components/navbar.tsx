"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { AnimatePresence, motion, useScroll } from "motion/react"

import { cn } from "@/lib/utils"
import { Icons } from "@/components/icons"
import { DesktopNav } from "@/components/desktop-nav"
import { MobileNav } from "@/components/mobile-nav"
import { ThemeToggle } from "@/components/theme-toggle"

const INITIAL_WIDTH = "70rem"
const MAX_WIDTH = "1000px"

export function Navbar() {
  const { scrollY } = useScroll()
  const [hasScrolled, setHasScrolled] = useState(false)

  useEffect(() => {
    const unsubscribe = scrollY.on("change", (latest) => {
      setHasScrolled(latest > 10)
    })
    return unsubscribe
  }, [scrollY])

  return (
    <header
      className={cn(
        "sticky z-50 flex justify-center transition-all duration-300",
        hasScrolled ? "top-4 mx-4 md:top-8" : "top-0 mx-0"
      )}
    >
      <motion.div
        initial={{ width: INITIAL_WIDTH }}
        animate={{ 
          width: hasScrolled 
            ? (typeof window !== 'undefined' && window.innerWidth < 1024 ? "94%" : MAX_WIDTH) 
            : INITIAL_WIDTH 
        }}
        transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
      >
        <div
          className={cn(
            "mx-auto rounded-2xl transition-all duration-300",
            hasScrolled
              ? "border-border bg-background/80 border-2 px-2 backdrop-blur-md shadow-lg shadow-zinc-950/5"
              : "max-w-7xl px-4 md:px-8 shadow-none"
          )}
        >
          <div className="flex h-[56px] items-center justify-between p-2 md:px-8">
            <Link href="/" className="flex items-center gap-3">
              <Icons.logo className="-mt-1 size-4 md:size-6" />
              <p className="text-primary ml-1 text-lg font-bold tracking-tight">
                SEO Speeder
              </p>
            </Link>

            <DesktopNav />

            <div className="flex shrink-0 flex-row items-center gap-2 md:gap-3 lg:gap-4">
              <div className="flex items-center">
                <Link
                  className="text-primary-foreground hidden h-8 w-fit items-center justify-center rounded-full bg-primary px-4 text-sm font-normal tracking-wide shadow-sm lg:flex transition-opacity hover:opacity-90"
                  href="#audit"
                >
                  Test Your Website
                </Link>
              </div>
              <ThemeToggle />
              <div className="lg:hidden">
                <MobileNav />
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </header>
  )
}
