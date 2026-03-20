"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function Template({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  useEffect(() => {
    // Disable Next.js scroll restoration so we control it
    if ("scrollRestoration" in history) {
      history.scrollRestoration = "manual";
    }

    // Instantly jump to top first (prevent the "staying in place" feel)
    // then let any page enter-animation give the illusion of a smooth transition
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [pathname]);

  return <>{children}</>;
}
