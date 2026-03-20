"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { motion } from "motion/react";

export default function Template({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  useEffect(() => {
    // Let the browser never auto-restore scroll — we control it
    if ("scrollRestoration" in history) {
      history.scrollRestoration = "manual";
    }
    // Reset scroll instantly while content is faded-out (opacity: 0 at t=0)
    // so the user never sees the page jump position
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [pathname]);

  return (
    <motion.div
      key={pathname}
      initial={{ opacity: 0, y: 16, filter: "blur(4px)" }}
      animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      transition={{
        duration: 0.35,
        ease: [0.22, 1, 0.36, 1], // Custom ease-out expo
      }}
      // Prevent layout shift during animation
      style={{ willChange: "opacity, transform, filter" }}
    >
      {children}
    </motion.div>
  );
}

