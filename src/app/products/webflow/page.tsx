import { OptimizationDetail } from "@/components/optimization-detail";
import { Workflow } from "lucide-react";

export const metadata = {
  title: "Webflow Speed Optimisation | SEO Speeder",
  description: "Supercharge your Webflow designs. Advanced speed optimisation for Webflow interactions, assets, and custom code.",
};

export default function WebflowPage() {
  return (
    <OptimizationDetail
      platform="Webflow"
      title="High-Performance Webflow."
      description="No-code platform optimisation for Webflow. We optimise your interactions, clean up your CSS/JS, and ensure your site is lightning fast."
      iconName="workflow"
    />
  );
}
