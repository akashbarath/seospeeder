import React from "react";
import { notFound } from "next/navigation";
import { SERVICES } from "@/config/services";
import { TextEffect } from "@/components/ui/text-effect";
import { CallToAction } from "@/components/cta";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Icons } from "@/components/icons";
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

  // Get the platform icon - fallback to Globe2 if not found
  const PlatformIcon = (Icons as Record<string, React.ElementType>)[slug] || Globe2;

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-24 pb-20 md:pb-32 overflow-hidden">
        <div className="container mx-auto px-6 max-w-7xl relative z-10">
          <div className="flex flex-col items-center text-center space-y-8">
            {/* Added Platform Icon on top */}
            <div className="mb-2 animate-in fade-in slide-in-from-bottom-2 duration-1000">
              <PlatformIcon className="size-16 md:size-20 text-neutral-800 dark:text-neutral-200 opacity-90" strokeWidth={1.5} />
            </div>


            {/* Platform Badge - Replacing with BoostRankingsBadge for Optimization subpages */}
            {productLinks.some((link) => link.href === `/services/${slug}`) ? (
              <div className="animate-in fade-in slide-in-from-top-4 duration-1000 delay-100">
                <BoostRankingsBadge icon={PlatformIcon}>
                  {service.title} Optimisation
                </BoostRankingsBadge>
              </div>
            ) : (
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border-2 border-neutral-200/50 bg-neutral-100/50 backdrop-blur-sm animate-in fade-in slide-in-from-top-4 duration-1000 delay-100">
                <PlatformIcon size={14} className="text-neutral-500" />
                <span className="text-xs font-bold tracking-tight uppercase text-neutral-600">
                  {service.title} Optimisation
                </span>
              </div>
            )}

            {/* Main Headline - Exact 72px/700 styling with 1.0 line-height */}
            <h1 className="text-[48px] md:text-[80px] lg:text-[96px] font-bold tracking-tighter leading-[0.95] text-[#0A0A0A] dark:text-neutral-100 max-w-5xl">
              <TextEffect preset="fade-in-blur" speedSegment={0.3}>
                {(service as any).heroHeadline || `${service.title} Performance Perfected.`}
              </TextEffect>
            </h1>

            {/* Description - Exact 20px/400 styling with generous max-width */}
            <p className="max-w-3xl text-[18px] md:text-[22px] text-[#737373] font-medium leading-[1.6] font-inter animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-200">
              {(service as any).heroDescription || `Speed optimisation for ${service.title} sites of all sizes. From complex e-commerce stores to high-traffic blogs, we make them fly. Our specialised ${service.title} speed optimisation service eliminates bottlenecks and supercharges your performance metrics.`}
            </p>

            {/* Global Actions - Swapped Variants */}
            <div className="flex flex-col sm:flex-row items-center gap-5 pt-6 animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-300">
              <Button
                asChild
                variant="outline"
                size="lg"
                className="w-full sm:w-auto rounded-xl px-8 text-base font-inter font-semibold hover:scale-[1.05]"
              >
                <Link href="#audit">
                  <span className="text-nowrap">Get Free Audit</span>
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                className="group/btn w-full sm:w-auto rounded-xl px-8 text-base font-bold font-inter bg-primary hover:bg-primary/95 text-primary-foreground transition-all duration-300 shadow-[0_0_20px_-10px_rgba(var(--primary),0.5)] hover:shadow-[0_0_30px_-5px_rgba(var(--primary),0.6)] relative overflow-hidden border-none hover:scale-[1.05]"
              >
                <Link href="#how-it-works">
                  <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-primary-foreground/30 to-transparent -translate-x-[150%] skew-x-[-30deg] group-hover/btn:translate-x-[150%] transition-transform duration-1000 ease-out pointer-events-none z-0" />
                  <span className="relative z-10 text-nowrap">See How It Works</span>
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Analysis Section: Interactive Performance Dashboard */}
      <section className="py-24 md:py-32 bg-neutral-50 dark:bg-neutral-950/50 border-y border-neutral-200 dark:border-neutral-800/50">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="flex flex-col items-center text-center mb-12 space-y-4">
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-black tracking-tighter text-[#0A0A0A] dark:text-neutral-100">
              {slug === "shopify" && "Shopify Growth, Unthrottled."}
              {slug === "magento" && "Magento Speed, Tactically Engineered."}
              {slug === "wordpress" && "WordPress Accelerated. Optimized in 48 Hours."}
              {!["shopify", "magento", "wordpress"].includes(slug) && "Engineered for Viral Performance."}
            </h2>
            <p className="max-w-3xl text-lg md:text-xl text-[#737373] font-medium font-inter leading-relaxed">
              {slug === "shopify" && "We rebuild your Liquid core for sub-millisecond response times. From checkout latency reduction to predictive asset caching, your store is designed to stay fast even during BFCM viral peaks."}
              {slug === "magento" && "We overhaul your Magento PHP core and database indexing for elite-level performance. Optimized for massive catalogs and complex enterprise workflows, ensuring your site remains responsive under extreme volume."}
              {slug === "wordpress" && "Stop losing sales to lag. Our surgical-grade WordPress optimization transforms bloated themes into lightning-fast, 90+ score powerhouses with zero design changes—guaranteed."}
              {!["shopify", "magento", "wordpress"].includes(slug) && `We rebuild your ${service.title} core for sub-millisecond response times. From database indexing to predictive caching, your site is designed to stay fast even during viral traffic peaks.`}
            </p>
          </div>
          <div className="w-full">
            <ServiceDashboard slug={slug} />
          </div>
        </div>
      </section>

      {/* WordPress Accelerated Experience Hub */}
      {slug === "wordpress" && (
        <ModernWordPressPerformance />
      )}

      {/* Mobile Performance Deep Dive */}
      {slug === "wordpress" && (
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="border-t border-neutral-200 dark:border-white/5 pt-24 pb-24">
            <MobilePerformanceShowcase />
          </div>
        </div>
      )}

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
            className="inline-flex items-center justify-center gap-2 whitespace-nowrap focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 bg-primary text-primary-foreground hover:bg-primary/90 py-2 relative overflow-hidden h-11 px-8 w-full sm:w-auto rounded-xl font-bold text-base shadow-2xl shadow-primary/20 hover:shadow-primary/40 transition-all duration-500 group/btn"
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
