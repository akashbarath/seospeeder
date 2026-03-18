"use client"

import { useEffect, useState } from "react"
import { motion } from "motion/react"
import { cn } from "@/lib/utils"

interface LightRaysProps extends React.HTMLAttributes<HTMLDivElement> {
  ref?: React.Ref<HTMLDivElement>
  count?: number
  color?: string
  blur?: number
  speed?: number
  length?: string
}

type LightRay = {
  id: string
  left: number
  rotate: number
  width: number
  swing: number
  delay: number
  duration: number
  intensity: number
}

const createRays = (count: number, cycle: number): LightRay[] => {
  if (count <= 0) return []
  return Array.from({ length: count }, (_, index) => {
    const left = 8 + Math.random() * 84
    const rotate = -28 + Math.random() * 56
    const width = 140 + Math.random() * 180
    const swing = 0.8 + Math.random() * 1.6
    // Keep delays short so motion is visible immediately
    const delay = Math.random() * (cycle * 0.4)
    const duration = cycle * (0.7 + Math.random() * 0.4)
    const intensity = 0.55 + Math.random() * 0.45

    return {
      id: `${index}-${Math.round(left * 10)}`,
      left,
      rotate,
      width,
      swing,
      delay,
      duration,
      intensity,
    }
  })
}

interface RayProps extends LightRay {
  color: string
  blur: number
  length: string
}

const Ray = ({ left, rotate, width, swing, delay, duration, intensity, color, blur, length }: RayProps) => {
  // Parse the color to extract RGB and build the gradient using inline styles
  // so it works with any CSS-in-JS / Tailwind version
  return (
    <motion.div
      className="pointer-events-none absolute mix-blend-screen rounded-full"
      style={{
        top: "-12%",
        left: `${left}%`,
        height: length,
        width: `${width}px`,
        transformOrigin: "top center",
        translateX: "-50%",
        rotate: rotate,
        background: `linear-gradient(to bottom, ${color} 0%, transparent 100%)`,
        filter: `blur(${blur}px)`,
        opacity: 0,
      }}
      animate={{
        opacity: [0, intensity, 0],
        rotate: [rotate - swing, rotate + swing, rotate - swing],
      }}
      transition={{
        duration: duration,
        repeat: Infinity,
        ease: "easeInOut",
        delay: delay,
        repeatDelay: duration * 0.05,
      }}
    />
  )
}

export function LightRays({
  className,
  style,
  count = 9,
  color = "rgba(140, 200, 255, 0.55)",
  blur = 38,
  speed = 14,
  length = "90vh",
  ref,
  ...props
}: LightRaysProps) {
  const [rays, setRays] = useState<LightRay[]>([])
  const cycleDuration = Math.max(speed, 0.1)

  useEffect(() => {
    setRays(createRays(count, cycleDuration))
  }, [count, cycleDuration])

  return (
    <div
      ref={ref}
      className={cn(
        "pointer-events-none absolute inset-0 overflow-hidden rounded-[inherit]",
        className
      )}
      style={style}
      {...props}
    >
      {/* Ambient radial glows */}
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          background: `radial-gradient(ellipse 70% 50% at 20% 0%, ${color.replace(/[\d.]+\)$/, "0.25)")}, transparent 70%)`,
        }}
      />
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          background: `radial-gradient(ellipse 60% 40% at 80% 0%, ${color.replace(/[\d.]+\)$/, "0.18)")}, transparent 70%)`,
        }}
      />
      {/* Individual animated rays */}
      {rays.map((ray) => (
        <Ray key={ray.id} {...ray} color={color} blur={blur} length={length} />
      ))}
    </div>
  )
}
