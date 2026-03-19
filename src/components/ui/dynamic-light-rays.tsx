"use client";

import { usePathname } from "next/navigation";
import { LightRays } from "./light-rays";
import { SERVICES } from "@/config/services";
import { useMemo } from "react";

export function DynamicLightRays() {
  const pathname = usePathname();

  const rayColor = useMemo(() => {
    // Default system colors (Violet & Teal)
    const defaultColors = ["rgba(45, 187, 176, 0.35)", "rgba(139, 92, 246, 0.25)"];

    if (!pathname) return defaultColors;

    // Check if it's a service or product page
    const serviceMatch = pathname.match(/\/(services|products)\/([^/]+)/);
    if (serviceMatch) {
      const slug = serviceMatch[2];
      const service = SERVICES.find((s) => s.slug === slug);
      if (service) {
        // Return two-toned brand colors
        // Create a secondary color that's slightly shifted in hue or more vibrant
        const primaryColor = service.color;
        
        // A simple two-toning logic: Emerald/Sky, Rose/Orange, Violet/Indigo
        let secondaryColor = primaryColor.replace(/[\d.]+\)$/, "0.2)");
        
        if (slug === "wordpress") secondaryColor = "rgba(14, 165, 233, 0.25)"; // Sky Blue secondary
        if (slug === "shopify") secondaryColor = "rgba(16, 185, 129, 0.25)";   // Emerald secondary
        if (slug === "magento") secondaryColor = "rgba(245, 158, 11, 0.25)";  // Amber secondary
        if (slug === "laravel") secondaryColor = "rgba(251, 146, 60, 0.25)";  // Orange secondary
        
        return [primaryColor, secondaryColor];
      }
    }

    // Special case for About page
    if (pathname === "/about") {
      return ["rgba(16, 185, 129, 0.35)", "rgba(14, 165, 233, 0.25)"]; // Emerald & Sky Blue two-toned
    }

    return defaultColors;
  }, [pathname]);

  return (
    <LightRays
      className="absolute inset-x-0 top-0 z-0 h-[90vh] pointer-events-none"
      count={12}
      color={rayColor}
      blur={40}
      speed={14}
      length="95vh"
    />
  );
}
