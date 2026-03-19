import { OptimizationDetail } from "@/components/optimization-detail";

export const metadata = {
  title: "WordPress Speed Optimisation | SEO Speeder",
  description: "Expert WordPress speed optimisation services. Boost your Core Web Vitals, improve user experience, and dominate search rankings.",
};

export default function WordPressPage() {
  return (
    <OptimizationDetail
      platform="WordPress"
      title="WordPress Performance Perfected."
      description="Speed optimisation for WordPress sites of all sizes. From complex WooCommerce stores to high-traffic blogs, we make them fly."
      iconName="globe"
    />
  );
}
