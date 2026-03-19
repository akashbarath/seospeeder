"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { motion, AnimatePresence } from "motion/react"

import { Button } from "@/components/ui/button"
import { useThemeToggle } from "@/components/ui/skiper-ui/skiper26"

export function ThemeToggle() {
  const { theme } = useTheme()
  const [mounted, setMounted] = React.useState(false)
  const { toggleTheme } = useThemeToggle({
    variant: "circle-blur",
    blur: true,
    start: "top-right",
  })

  React.useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <Button variant="outline" size="icon" className="h-8 w-8 rounded-full border-2">
        <Sun className="h-[1.2rem] w-[1.2rem]" />
      </Button>
    )
  }

  return (
    <Button
      variant="outline"
      size="icon"
      onClick={toggleTheme}
      className="h-8 w-8 cursor-pointer rounded-full border-2 relative overflow-hidden"
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
           key={theme}
           initial={{ y: 20, opacity: 0, rotate: -90 }}
           animate={{ y: 0, opacity: 1, rotate: 0 }}
           exit={{ y: -20, opacity: 0, rotate: 90 }}
           transition={{ duration: 0.2, type: "spring", stiffness: 300, damping: 20 }}
           className="flex items-center justify-center"
        >
          {theme === "light" ? (
            <Sun className="text-primary h-[1.2rem] w-[1.2rem]" />
          ) : (
            <Moon className="text-primary h-[1.2rem] w-[1.2rem]" />
          )}
        </motion.div>
      </AnimatePresence>
      <span className="sr-only">Toggle theme</span>
    </Button>
  )
}
