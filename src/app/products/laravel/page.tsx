import { OptimizationDetail } from "@/components/optimization-detail";
import { Code2 } from "lucide-react";

export const metadata = {
  title: "Laravel Speed Optimisation | SEO Speeder",
  description: "High-performance Laravel optimisation. Fine-tune your applications for maximum speed and efficient resource usage.",
};

export default function LaravelPage() {
  return (
    <OptimizationDetail
      platform="Laravel"
      title="Laravel Speed & Efficiency."
      description="Framework optimisation services for Laravel applications. We optimise queries, caching strategies, and asset delivery pipelines."
      iconName="code"
    />
  );
}
