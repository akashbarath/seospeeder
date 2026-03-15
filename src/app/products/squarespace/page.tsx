import { OptimizationDetail } from "@/components/optimization-detail";
import { Layers } from "lucide-react";

export const metadata = {
  title: "SquareSpace Speed Optimisation | SEO Speeder",
  description: "Professional SquareSpace optimisation services. Enhance your visual portfolio with fast loading times and better SEO.",
};

export default function SquareSpacePage() {
  return (
    <OptimizationDetail
      platform="SquareSpace"
      title="SquareSpace Speed & SEO."
      description="SquareSpace site optimisation. We optimise heavy assets and implement advanced SEO techniques specifically for the SquareSpace platform."
      iconName="layers"
    />
  );
}
