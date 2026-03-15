import { OptimizationDetail } from "@/components/optimization-detail";
import { Server } from "lucide-react";

export const metadata = {
  title: "Server Side Optimisation | SEO Speeder",
  description: "Backend and server-level performance tuning. Optimise TTFB, server response times, and resource allocation for maximum speed.",
};

export default function ServerSidePage() {
  return (
    <OptimizationDetail
      platform="Server Side"
      title="Backend Performance Scaled."
      description="Backend and server optimisation. We handle configuration tuning, caching layers, and database optimisation to reduce server-side bottlenecks."
      iconName="server"
    />
  );
}
