import HeroSection from "@/components/hero-section"
import LogoCloud from "@/components/logo-cloud-2"
import { ResultsSection } from "@/components/results-section"
import { ProvenSection } from "@/components/proven-section"
import { TestimonialSection } from "@/components/shake-testimonial-card"
import { FaqsSection } from "@/components/faqs"
import { Stats, FeatureSection } from "@/components/landing-lazy-sections"

export default function Home() {
  return (
    <div className="w-full flex flex-col gap-16 md:gap-24 pb-20 md:pb-32">
      <HeroSection />
      <LogoCloud />
      <ResultsSection />
      <FeatureSection />
      <ProvenSection />
      <Stats />
      <TestimonialSection />
      <FaqsSection />
    </div>
  )
}
