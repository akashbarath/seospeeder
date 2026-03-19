'use client'
import React, { useEffect, useState } from 'react'

import { Beacon } from '@/components/ui/svgs/beacon'
import { Bolt } from '@/components/ui/svgs/bolt'
import { Cisco } from '@/components/ui/svgs/cisco'
import { Hulu } from '@/components/ui/svgs/hulu'
import { Supabase } from '@/components/ui/svgs/supabase'
import { AnimatePresence, motion } from 'motion/react'
import { VercelFull } from '@/components/ui/svgs/vercel'
import { Spotify } from '@/components/ui/svgs/spotify'

const searchLogos: React.ReactNode[] = [
    <Bolt
        key="bolt"
        className="h-3.5 lg:h-5 w-full"
    />,
    <Beacon
        key="beacon"
        className="h-3.5 lg:h-5 w-full"
    />,
    <Hulu
        key="hulu"
        className="h-3.5 lg:h-5 w-full"
    />,
]

const performanceLogos: React.ReactNode[] = [
    <Supabase
        key="supabase"
        className="size-5 lg:size-7"
    />,
    <Spotify
        key="spotify"
        className="h-5 lg:h-7 w-full"
    />,
    <VercelFull
        key="vercel"
        className="h-3.5 lg:h-5 w-full"
    />,
]

const aiToolsLogos: React.ReactNode[] = [
    <Hulu
        key="hulu"
        className="h-3.5 lg:h-5 w-full"
    />,
    <VercelFull
        key="vercel"
        className="h-3.5 lg:h-5 w-full"
    />,
    <Spotify
        key="spotify"
        className="h-5 lg:h-7 w-full"
    />,
]

const analyticsLogos: React.ReactNode[] = [
    <Cisco
        key="cisco"
        className="h-5 lg:h-7 w-full"
    />,
    <Hulu
        key="hulu"
        className="h-3.5 lg:h-5 w-full"
    />,
    <Spotify
        key="spotify"
        className="h-5 lg:h-7 w-full"
    />,
]

type LogoGroup = 'search' | 'performance' | 'aiTools' | 'analytics'

const logos: { [key in LogoGroup]: React.ReactNode[] } = {
    search: searchLogos,
    performance: performanceLogos,
    aiTools: aiToolsLogos,
    analytics: analyticsLogos,
}

export default function LogoCloud() {
    const [currentGroup, setCurrentGroup] = useState<LogoGroup>('search')

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentGroup((prev) => {
                const groups = Object.keys(logos) as LogoGroup[]
                const currentIndex = groups.indexOf(prev)
                const nextIndex = (currentIndex + 1) % groups.length
                return groups[nextIndex]
            })
        }, 2500)

        return () => clearInterval(interval)
    }, [])

    return (
        <section className="bg-background relative py-6 md:py-8 lg:py-10 z-20 -mt-12 md:-mt-16 lg:-mt-24">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-6xl h-32 md:h-40 lg:h-48 bg-background/60 blur-[40px] md:blur-[60px] lg:blur-[80px] pointer-events-none -z-10" />
            <div className="absolute inset-x-0 top-0 h-32 md:h-40 lg:h-48 bg-gradient-to-b from-transparent to-background pointer-events-none -z-10" />
            <div className="mx-auto max-w-5xl px-6">
                <div className="mx-auto grid h-8 max-w-2xl grid-cols-3 items-center gap-8 md:gap-12 lg:gap-16">
                    <AnimatePresence
                        initial={false}
                        mode="popLayout">
                        {logos[currentGroup].map((logo, i) => (
                            <motion.div
                                key={`${currentGroup}-${i}`}
                                className="**:fill-foreground! flex items-center justify-center"
                                initial={{ opacity: 0, y: 12, filter: 'blur(6px)' }}
                                animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                                exit={{ opacity: 0, y: 12, filter: 'blur(6px)', scale: 0.5 }}
                                transition={{ delay: i * 0.1, duration: 1.5, type: 'spring', bounce: 0.2 }}>
                                {logo}
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </div>
            </div>
        </section>
    )
}
