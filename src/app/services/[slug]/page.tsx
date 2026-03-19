import React from "react";
import { notFound } from "next/navigation";
import { SERVICES } from "@/config/services";
import { TextEffect } from "@/components/ui/text-effect";
import { CallToAction } from "@/components/cta";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Globe2, Zap, Shield, Gauge, ArrowRight } from "lucide-react";

export async function generateStaticParams() {
  return SERVICES.map((service) => ({
    slug: service.slug,
  }));
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = SERVICES.find((s) => s.slug === slug);

  if (!service) {
    notFound();
  }

  const features = [
    {
      title: "Core Web Vitals",
      description: "Pass LCP, FID, and CLS with confidence. We target the specific metrics Google uses to rank your site.",
      icon: Gauge
    },
    {
      title: "Zero Downtime",
      description: "Our optimisations are non-destructive and performed in a safe staging environment before deployment.",
      icon: Zap
    },
    {
      title: "Long-term Impact",
      description: "We don't just patch issues; we rebuild for performance, ensuring your site stays fast as you grow.",
      icon: Shield
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-44 md:pb-32 overflow-hidden">
        <div className="container mx-auto px-6 max-w-7xl relative z-10">
          <div className="flex flex-col items-center text-center space-y-10">
            {/* Platform Badge - Matching Vercel's subtle slate pill */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border-2 border-neutral-200/50 bg-neutral-100/50 backdrop-blur-sm animate-in fade-in slide-in-from-top-4 duration-1000">
              <Globe2 size={12} className="text-neutral-500" />
              <span className="text-xs font-bold tracking-tight uppercase text-neutral-600">
                {service.title} Optimisation
              </span>
            </div>

            {/* Main Headline - Exact 72px/700 styling with 1.0 line-height */}
            <h1 className="text-[48px] md:text-[80px] lg:text-[96px] font-bold tracking-tighter leading-[0.95] text-[#0A0A0A] dark:text-neutral-100 max-w-5xl">
              <TextEffect preset="fade-in-blur" speedSegment={0.3}>
                {`${service.title} Performance Perfected.`}
              </TextEffect>
            </h1>

            {/* Description - Exact 20px/400 styling with generous max-width */}
            <p className="max-w-3xl text-[18px] md:text-[22px] text-[#737373] font-medium leading-[1.6] font-inter animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-200">
              Speed optimisation for {service.title} sites of all sizes. From complex e-commerce stores to 
              high-traffic blogs, we make them fly. Our specialised {service.title} speed optimisation 
              service eliminates bottlenecks and supercharges your performance metrics.
            </p>

            {/* Global Actions - Spaced and bold */}
            <div className="flex flex-col sm:flex-row items-center gap-5 pt-6 animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-300">
              <Button asChild size="lg" className="h-[56px] px-10 rounded-xl font-bold text-[18px] bg-[#171717] hover:bg-[#171717]/90 text-[#FAFAFA] shadow-2xl shadow-[#171717]/20 transition-all hover:scale-[1.05]">
                <Link href="#audit">Get Free Audit</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="h-[56px] px-10 rounded-xl font-bold text-[18px] border-2 border-neutral-200 hover:bg-neutral-50 transition-all hover:scale-[1.05]">
                <Link href="#how-it-works">See How It Works</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Grid - Large 7xl container with 32px gaps */}
      <section className="py-24 md:py-32">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
            {features.map((feature, i) => (
              <div 
                key={i} 
                className="group relative p-10 rounded-[32px] bg-white dark:bg-neutral-900 border-2 border-neutral-100 dark:border-neutral-800 transition-all hover:border-neutral-200 hover:shadow-xl hover:-translate-y-1"
              >
                <div className="size-14 rounded-[20px] bg-neutral-100 dark:bg-neutral-800 flex items-center justify-center mb-8 text-neutral-600 dark:text-neutral-400 group-hover:bg-[#171717] group-hover:text-white transition-all">
                  <feature.icon size={26} strokeWidth={2} />
                </div>
                <h3 className="text-[24px] font-bold mb-4 text-[#0A0A0A] dark:text-neutral-100">{feature.title}</h3>
                <p className="text-[16px] text-[#737373] font-inter leading-relaxed">
                   {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Transformation CTA */}
      <section className="py-24 md:py-32 container mx-auto px-4 max-w-4xl text-center space-y-10">
        <h2 className="text-3xl font-black tracking-tight leading-[1.1]">
          Start your {service.title} transformation today.
        </h2>
        <p className="text-xl text-muted-foreground mb-8 font-inter">
          Don&apos;t let slow load times kill your conversions. Get a free, detailed manual audit from our specialised engineers.
        </p>
        <div className="pt-2">
          <Link 
            href="#audit" 
            className="inline-flex items-center justify-center gap-2 whitespace-nowrap focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 bg-primary text-primary-foreground hover:bg-primary/90 py-2 relative overflow-hidden h-14 px-10 w-full sm:w-auto rounded-xl font-bold text-lg shadow-2xl shadow-primary/20 hover:shadow-primary/40 transition-all duration-500 group/btn"
          >
            <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-primary-foreground/20 to-transparent -translate-x-[150%] skew-x-[-30deg] group-hover/btn:translate-x-[150%] transition-transform duration-1000 ease-out pointer-events-none z-0"></div>
            <span className="relative z-10 flex items-center gap-2">
              Get free audit
              <div className="relative overflow-hidden flex items-center justify-center size-5 ml-1">
                <ArrowRight className="absolute inset-0 size-5 transition-transform duration-500 ease-out group-hover/btn:translate-x-[200%]" strokeWidth={2.5} />
                <ArrowRight className="absolute inset-0 size-5 -translate-x-[200%] transition-transform duration-500 ease-out group-hover/btn:translate-x-0" strokeWidth={2.5} />
              </div>
            </span>
          </Link>
        </div>
      </section>

      {/* Final Site CTA */}
      <div className="mt-8 border-t border-border/40">
        <CallToAction />
      </div>
    </div>
  );
}
