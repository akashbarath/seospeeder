import { OptimizationDetail } from "@/components/optimization-detail";

export const metadata = {
  title: ".Net Application Speed Tuning | SEO Speeder",
  description: "Professional .Net and ASP.NET performance optimisation. Scaling enterprise applications with code and server-side tuning.",
};

export default function DotNetPage() {
  return (
    <OptimizationDetail
      platform=".Net"
      title=".Net Enterprise Performance."
      description=".Net application speed tuning. We optimise CLR performance, SQL queries, and IIS/Server configuration for peak efficiency."
      iconName="server"
    />
  );
}
