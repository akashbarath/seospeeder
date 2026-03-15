import { OptimizationDetail } from "@/components/optimization-detail";
import { Code2 } from "lucide-react";

export const metadata = {
  title: "HTML Speed Optimisation | SEO Speeder",
  description: "Static HTML performance optimisation. Achieve perfect lighthouse scores with optimised assets, clean code, and fast delivery.",
};

export default function HtmlPage() {
  return (
    <OptimizationDetail
      platform="HTML"
      title="Lightweight HTML Performance."
      description="Static HTML performance. We optimise your static sites for maximum delivery speed, ensuring near-instant load times globally."
      iconName="code"
    />
  );
}
