import dynamic from "next/dynamic"

import HeroSection from "@/components/hero-section"
import LogoCloud from "@/components/logo-cloud-2"
import { ResultsSection } from "@/components/results-section"

const FeatureSection = dynamic(() => import("@/components/landing-lazy-sections").then(mod => mod.FeatureSection), { ssr: true })
const ProvenSection = dynamic(() => import("@/components/proven-section").then(mod => mod.ProvenSection), { ssr: true })
const EliteMlSection = dynamic(() => import("@/components/elite-ml-section").then(mod => mod.EliteMlSection), { ssr: true })
const InteractiveAiWorkflow = dynamic(() => import("@/components/interactive-ai-workflow").then(mod => mod.InteractiveAiWorkflow), { ssr: true })
const TestimonialSection = dynamic(() => import("@/components/shake-testimonial-card").then(mod => mod.TestimonialSection), { ssr: true })
const FaqsSection = dynamic(() => import("@/components/faqs").then(mod => mod.FaqsSection), { ssr: true })

export default function Home() {
  return (
    <div className="w-full space-y-16 md:space-y-24 pb-20 md:pb-32">
      <HeroSection />
      <LogoCloud />
      <ResultsSection />
      <FeatureSection />
      <ProvenSection />
      <EliteMlSection />
      <InteractiveAiWorkflow />
      <TestimonialSection />
      <FaqsSection />
    </div>
  )
}
