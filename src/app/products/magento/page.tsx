import { OptimizationDetail } from "@/components/optimization-detail";

export const metadata = {
  title: "Magento Speed Optimisation | SEO Speeder",
  description: "Expert Magento performance tuning. Scale your enterprise e-commerce site with architect-level speed optimisation.",
};

export default function MagentoPage() {
  return (
    <OptimizationDetail
      platform="Magento"
      title="Enterprise Magento Performance."
      description="E-commerce performance optimisation for Magento 2. We handle database tuning, Luma/Hyvä theme optimisation, and server-side scaling."
      iconName="shopping-bag"
    />
  );
}
