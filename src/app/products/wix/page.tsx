import { OptimizationDetail } from "@/components/optimization-detail";
import { Layers } from "lucide-react";

export const metadata = {
  title: "Wix Speed Optimisation | SEO Speeder",
  description: "Get the most out of your Wix site. Improve loading speed and SEO rankings for your Wix business or portfolio site.",
};

export default function WixPage() {
  return (
    <OptimizationDetail
      platform="Wix"
      title="Wix Performance Tuning."
      description="Website builder performance tuning for Wix. We push the limits of the platform to ensure your site loads fast and ranks high."
      iconName="layers"
    />
  );
}
