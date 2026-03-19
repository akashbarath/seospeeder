import { OptimizationDetail } from "@/components/optimization-detail";

export const metadata = {
  title: "Core Web Vitals Optimisation | SEO Speeder",
  description: "Directly improve your Google search rankings by passing LCP, FID, and CLS. Data-driven optimisation for Core Web Vitals.",
};

export default function CoreWebVitalsPage() {
  return (
    <OptimizationDetail
      platform="Core Web Vitals"
      title="Mastering Core Web Vitals."
      description="Improve LCP, FID, and CLS metrics. We provide a deep technical audit and implementation roadmap to ensure your site passes Google's performance benchmarks."
      iconName="zap"
    />
  );
}
