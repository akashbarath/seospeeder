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
      style={{ background: "transparent" }}
    >
      <motion.div
        initial={false}
        animate={{ 
          scaleX: hasScrolled ? 1 : 1,
          width: hasScrolled 
            ? (typeof window !== 'undefined' && window.innerWidth < 1024 ? "100%" : MAX_WIDTH) 
            : INITIAL_WIDTH 
        }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        className="w-full flex justify-center"
        style={{ background: "transparent" }}
      >
        <div
          className={cn(
            "w-full rounded-2xl transition-all duration-500",
            hasScrolled
              ? "border-border bg-background/80 border-2 px-2 backdrop-blur-md shadow-lg shadow-zinc-950/5"
              : "max-w-7xl px-4 md:px-8"
          )}
        >
          <div className="flex h-[56px] items-center justify-between p-2 md:px-8">
            <Link href="/" className="flex items-center gap-2 group transition-opacity hover:opacity-80">
              <Icons.logo className="-mt-1 size-5 md:size-6 text-primary" />
              <p className="text-primary text-lg font-bold tracking-tight">
                SEO SPEEDER
              </p>
            </Link>

            <DesktopNav hasScrolled={hasScrolled} />

            <div className="flex shrink-0 flex-row items-center gap-2 md:gap-3 lg:gap-4">
              <div className="flex items-center">
                <Button 
                  asChild 
                  className="group/btn hidden lg:flex rounded-xl font-bold h-9 px-6 bg-primary hover:bg-primary/95 text-primary-foreground transition-all duration-300 shadow-[0_0_20px_-10px_rgba(var(--primary),0.5)] hover:shadow-[0_0_30px_-5px_rgba(var(--primary),0.6)] relative overflow-hidden border-none"
                >
                  <Link href="#audit" className="font-inter font-semibold flex items-center justify-center">
                    <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-primary-foreground/30 to-transparent -translate-x-[150%] skew-x-[-30deg] group-hover/btn:translate-x-[150%] transition-transform duration-1000 ease-out pointer-events-none z-0" />
                    <span className="relative z-10">Test Your Website</span>
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