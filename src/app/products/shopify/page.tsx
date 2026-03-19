import { OptimizationDetail } from "@/components/optimization-detail";

export const metadata = {
  title: "Shopify Speed Optimisation | SEO Speeder",
  description: "Supercharge your Shopify store. Improve load times, reduce bounce rates, and increase conversions with professional optimisation.",
};

export default function ShopifyPage() {
  return (
    <OptimizationDetail
      platform="Shopify"
      title="Shopify Speed that Converts."
      description="Boost your Shopify store speed and pass Core Web Vitals. We optimise your theme, apps, and assets for maximum sales impact."
      iconName="shopping-bag"
    />
  );
}
