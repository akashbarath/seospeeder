import React from 'react'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { TextEffect } from '@/components/ui/text-effect'
import { AnimatedGroup } from '@/components/ui/animated-group'
import DashboardPage from '@/app/dashboard/page'


const transitionVariants = {
    item: {
        hidden: {
            opacity: 0,
            filter: 'blur(12px)',
            y: 12,
        },
        visible: {
            opacity: 1,
            filter: 'blur(0.1px)',
            y: 0,
            transition: {
                y: { type: 'spring' as const, bounce: 0.3, duration: 1.5 },
                opacity: { duration: 0.5 },
                filter: { duration: 0.5, ease: 'easeOut' as const },
            },
        },
    },
}

export default function HeroSection() {
    return (
        <>
            <main className="overflow-hidden">

                <section className="relative overflow-visible min-h-[100svh] flex flex-col">
                    <div className="relative z-10 pt-12 pb-6 md:pt-20 lg:pt-24 flex-1 flex flex-col">
                        <div
                            aria-hidden
                            className="absolute inset-0 -z-10 size-full [background:radial-gradient(125%_125%_at_50%_100%,transparent_0%,var(--color-background)_75%)]"
                        />

                        <div className="mx-auto max-w-7xl px-6 flex-1 flex flex-col justify-center">
                            <div className="text-center mx-auto lg:mt-0">
                                <AnimatedGroup variants={transitionVariants}>
                                    <Link
                                        href="#audit"
                                        className="hover:bg-background dark:hover:border-t-border bg-muted group mx-auto flex w-fit items-center gap-3 rounded-full border px-4 py-2 shadow-md shadow-zinc-950/5 transition-colors duration-300 dark:border-t-white/5 dark:shadow-zinc-950">
                                        <span className="text-foreground text-xs md:text-sm font-semibold font-inter">Boost Rankings with AI SEO</span>
                                        <span className="dark:border-background block h-4 w-px bg-zinc-300 dark:bg-zinc-700"></span>

                                        <div className="bg-background group-hover:bg-muted size-6 overflow-hidden rounded-full duration-500">
                                            <div className="flex w-12 -translate-x-1/2 duration-500 ease-in-out group-hover:translate-x-0">
                                                <span className="flex size-6">
                                                    <ArrowRight className="m-auto size-3" />
                                                </span>
                                                <span className="flex size-6">
                                                    <ArrowRight className="m-auto size-3" />
                                                </span>
                                            </div>
                                        </div>
                                    </Link>
                                </AnimatedGroup>

                                <h1 className="mx-auto mt-6 md:mt-8 max-w-5xl text-balance text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-[1.1] text-center">
                                    <TextEffect
                                        preset="fade-in-blur"
                                        speedSegment={0.3}
                                        as="span"
                                    >
                                        Dominate Search.
                                    </TextEffect>
                                    <br />
                                    <TextEffect
                                        preset="fade-in-blur"
                                        speedSegment={0.3}
                                        as="span"
                                        delay={0.2}
                                    >
                                        Not Just Rank.
                                    </TextEffect>
                                </h1>
                                <TextEffect
                                    per="line"
                                    preset="fade-in-blur"
                                    speedSegment={0.3}
                                    delay={0.5}
                                    as="p"
                                    className="mx-auto mt-6 md:mt-6 max-w-2xl text-balance text-xs md:text-base text-muted-foreground opacity-90 font-inter font-medium">
                                    Data-driven SEO strategies to outpace your competition, boost your search visibility, and drive sustainable digital growth.
                                </TextEffect>

                                <AnimatedGroup
                                    variants={{
                                        container: {
                                            visible: {
                                                transition: {
                                                    staggerChildren: 0.1,
                                                    delayChildren: 0.8,
                                                },
                                            },
                                        },
                                        ...transitionVariants,
                                    }}
                                    className="mt-6 md:mt-10 flex flex-col items-center justify-center gap-3 md:flex-row">
                                    <Button
                                        key={1}
                                        asChild
                                        size="lg"
                                        className="group/btn w-full sm:w-auto rounded-xl px-8 text-base font-bold font-inter bg-primary hover:bg-primary/95 text-primary-foreground transition-all duration-300 shadow-[0_0_20px_-10px_rgba(var(--primary),0.5)] hover:shadow-[0_0_30px_-5px_rgba(var(--primary),0.6)] relative overflow-hidden">
                                        <Link href="#audit">
                                            <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-primary-foreground/30 to-transparent -translate-x-[150%] skew-x-[-30deg] group-hover/btn:translate-x-[150%] transition-transform duration-1000 ease-out pointer-events-none z-0" />
                                            <span className="relative z-10 text-nowrap">Test Your Website</span>
                                        </Link>
                                    </Button>
                                    <Button
                                        key={2}
                                        asChild
                                        size="lg"
                                        variant="outline"
                                        className="w-full sm:w-auto rounded-xl px-8 text-base font-inter font-semibold">
                                        <Link href="#services">
                                            <span className="text-nowrap">Explore Services</span>
                                        </Link>
                                    </Button>
                                </AnimatedGroup>
                            </div>
                        </div>

                        <AnimatedGroup
                            variants={{
                                container: {
                                    visible: {
                                        transition: {
                                            staggerChildren: 0.05,
                                            delayChildren: 1,
                                        },
                                    },
                                },
                                ...transitionVariants,
                            }}>
                            <div className="relative mx-auto mt-8 md:mt-16 lg:mt-20 overflow-visible px-4 md:px-6 lg:px-0">
                                <div
                                    className="bg-background relative mx-auto max-w-6xl overflow-hidden rounded-xl md:rounded-2xl border shadow-2xl shadow-zinc-950/20 ring-1 ring-background"
                                    style={{
                                        boxShadow: 'inset 0 1px 2px rgba(0,0,0,0.06), 0 25px 50px -12px rgba(0,0,0,0.25)',
                                        WebkitTransform: 'translateZ(0)',
                                        isolation: 'isolate',
                                    }}
                                >
                                    {/* Blur Gradient Effect Backgrounds */}
                                    <div
                                        className="absolute -top-24 left-1/2 -z-10 h-[20rem] md:h-[30rem] lg:h-[40rem] w-[20rem] md:w-[40rem] lg:w-[60rem] -translate-x-1/2 opacity-20 dark:opacity-10 pointer-events-none"
                                        style={{
                                            filter: 'blur(60px)',
                                            WebkitFilter: 'blur(60px)',
                                            WebkitTransform: 'translateZ(0) translateX(-50%)',
                                        }}
                                    >
                                        <div
                                            className="aspect-[1155/678] w-full bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-40"
                                            style={{
                                                borderRadius: '50%',
                                                WebkitTransform: 'translateZ(0)',
                                            }}
                                        />
                                    </div>
                                    <div
                                        className="relative w-full h-[600px] md:h-[800px] overflow-hidden [&>div]:h-full"
                                        style={{ WebkitTransform: 'translateZ(0)' }}
                                    >
                                        <DashboardPage />
                                    </div>
                                </div>
                            </div>
                        </AnimatedGroup>
                    </div>

                    {/* Hero Section Ending Gradient to cover the dashboard bottom */}
                    <div className="absolute inset-x-0 bottom-0 z-20 h-24 md:h-32 lg:h-40 bg-gradient-to-t from-background to-transparent pointer-events-none" />
                </section>
            </main>
        </>
    )
}
