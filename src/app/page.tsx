import HeroSection from "@/components/hero-section"
import LogoCloud from "@/components/logo-cloud-2"
import { ResultsSection } from "@/components/results-section"
import { ProvenSection } from "@/components/proven-section"
import { TestimonialSection } from "@/components/shake-testimonial-card"
import { FaqsSection } from "@/components/faqs"
import { FeatureSection } from "@/components/landing-lazy-sections"

export default function Home() {
  return (
    <div className="w-full space-y-16 md:space-y-24 pb-20 md:pb-32">
      <HeroSection />
      <LogoCloud />
      <ResultsSection />
      <FeatureSection />
      <ProvenSection />
      <TestimonialSection />
      <FaqsSection />
    </div>
  )
}
