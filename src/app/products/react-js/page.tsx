import { OptimizationDetail } from "@/components/optimization-detail";

export const metadata = {
  title: "React JS Speed Optimisation | SEO Speeder",
  description: "Optimise your React and Next.js applications. Eliminate re-render issues, optimise bundles, and achieve instant load times.",
};

export default function ReactJsPage() {
  return (
    <OptimizationDetail
      platform="React JS"
      title="React Performance Engineering."
      description="React application optimisation. We fine-tune state management, optimise component rendering, and implement advanced code-splitting."
      iconName="code"
    />
  );
}
