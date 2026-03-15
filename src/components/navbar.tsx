"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { motion, useScroll } from "motion/react"

import { cn } from "@/lib/utils"
import { Icons } from "@/components/icons"
import { DesktopNav } from "@/components/desktop-nav"
import { MobileNav } from "@/components/mobile-nav"
import { ThemeToggle } from "@/components/theme-toggle"
import { Button } from "@/components/ui/button"

const INITIAL_WIDTH = "72rem"
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
    <motion.header
      initial={false}
      animate={{
        y: hasScrolled ? 16 : 0,
      }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
      className="sticky top-0 z-50 flex justify-center w-full px-4"
    >
      <motion.div
        initial={false}
        animate={{ 
          scaleX: hasScrolled ? 1 : 1, // Placeholder if we wanted to scale
          width: hasScrolled 
            ? (typeof window !== 'undefined' && window.innerWidth < 1024 ? "100%" : MAX_WIDTH) 
            : INITIAL_WIDTH 
        }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        className="w-full flex justify-center"
      >
        <div
          className={cn(
            "w-full rounded-2xl transition-all duration-300",
            hasScrolled
              ? "border-border bg-background/80 border-2 px-2 backdrop-blur-md shadow-lg shadow-zinc-950/5"
              : "max-w-7xl px-4 md:px-8 shadow-none"
          )}
        >
          <div className="flex h-[56px] items-center justify-between p-2 md:px-8">
            <Link href="/" className="flex items-center gap-2 group transition-opacity hover:opacity-80">
              <Icons.logo className="-mt-1 size-5 md:size-6 text-primary" />
              <p className="text-primary text-lg font-bold tracking-tight">
                SEO SPEEDER
              </p>
            </Link>

            <DesktopNav />

            <div className="flex shrink-0 flex-row items-center gap-2 md:gap-3 lg:gap-4">
              <div className="flex items-center">
                <Button 
                  asChild 
                  className="hidden lg:flex rounded-xl font-semibold h-9 px-6 shadow-lg shadow-zinc-950/10"
                >
                  <Link href="#audit" className="font-inter font-semibold">
                    Test Your Website
                  </Link>
                </Button>
              </div>
              <ThemeToggle />
              <div className="lg:hidden">
                <MobileNav />
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.header>
  )
}
