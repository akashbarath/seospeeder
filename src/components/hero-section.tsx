import React from 'react'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import { TextEffect } from '@/components/ui/text-effect'
import { AnimatedGroup } from '@/components/ui/animated-group'
import { LightRays } from '@/components/ui/light-rays'


const transitionVariants = {
    item: {
        hidden: {
            opacity: 0,
            filter: 'blur(12px)',
            y: 12,
        },
        visible: {
            opacity: 1,
            filter: 'blur(0px)',
            y: 0,
            transition: {
                type: 'spring' as const,
                bounce: 0.3,
                duration: 1.5,
            },
        },
    },
}

export default function HeroSection() {
    return (
        <>
            <main className="overflow-hidden">
                <div
                    aria-hidden
                    className="absolute inset-0 isolate hidden opacity-65 contain-strict lg:block">
                    <div className="w-140 h-320 -translate-y-87.5 absolute left-0 top-0 -rotate-45 rounded-full bg-[radial-gradient(68.54%_68.72%_at_55.02%_31.46%,hsla(0,0%,85%,.08)_0,hsla(0,0%,55%,.02)_50%,hsla(0,0%,45%,0)_80%)]" />
                    <div className="h-320 absolute left-0 top-0 w-60 -rotate-45 rounded-full bg-[radial-gradient(50%_50%_at_50%_50%,hsla(0,0%,85%,.06)_0,hsla(0,0%,45%,.02)_80%,transparent_100%)] [translate:5%_-50%]" />
                    <div className="h-320 -translate-y-87.5 absolute left-0 top-0 w-60 -rotate-45 bg-[radial-gradient(50%_50%_at_50%_50%,hsla(0,0%,85%,.04)_0,hsla(0,0%,45%,.02)_80%,transparent_100%)]" />
                </div>
                <section className="relative overflow-visible min-h-[100svh] flex flex-col">
                    <div className="relative pt-12 pb-6 md:pt-24 lg:pt-28 flex-1 flex flex-col">
                        <LightRays />
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
                                        className="w-full sm:w-auto rounded-xl px-8 text-base font-bold font-inter">
                                        <Link href="#audit">
                                            <span className="text-nowrap">Test Your Website</span>
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
                            <div className="mask-b-from-55% relative mx-auto mt-8 md:mt-16 lg:mt-20 overflow-visible px-4 md:px-6 lg:px-0">
                                <div className="inset-shadow-2xs ring-background dark:inset-shadow-white/20 bg-background relative mx-auto max-w-6xl overflow-hidden rounded-xl md:rounded-2xl border shadow-2xl shadow-zinc-950/20 ring-1">
                                    {/* Blur Gradient Effect Backgrounds */}
                                    <div className="absolute -top-24 left-1/2 -z-10 h-[20rem] md:h-[30rem] lg:h-[40rem] w-[20rem] md:w-[40rem] lg:w-[60rem] -translate-x-1/2 opacity-20 blur-[80px] md:blur-[100px] dark:opacity-10 pointer-events-none">
                                        <div className="aspect-[1155/678] w-full bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-40"
                                            style={{ clipPath: 'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)' }}
                                        />
                                    </div>
                                    <Image
                                        className="relative hidden rounded-xl md:rounded-2xl dark:block w-full h-auto"
                                        src="/assets/images/hero-img-dark.png"
                                        alt="seospeeder SEO Dashboard Dark Mode"
                                        width={1899}
                                        height={1080}
                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1200px"
                                        priority
                                    />
                                    <Image
                                        className="relative rounded-xl md:rounded-2xl dark:hidden w-full h-auto"
                                        src="/assets/images/hero-img-light.png"
                                        alt="seospeeder SEO Dashboard Light Mode"
                                        width={1899}
                                        height={1080}
                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1200px"
                                        priority
                                    />

                                    {/* Multi-layered Blur Gradient to Merge with Section Below */}
                                    <div className="absolute inset-x-0 bottom-0 z-10 h-16 md:h-24 lg:h-28 bg-gradient-to-t from-background via-background/40 to-transparent pointer-events-none" />
                                    <div className="absolute inset-x-0 -bottom-1 h-4 md:h-8 lg:h-10 bg-background z-10 pointer-events-none" />
                                </div>
                            </div>
                        </AnimatedGroup>
                    </div>
                </section>
            </main>
        </>
    )
}
