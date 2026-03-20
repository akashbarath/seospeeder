"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

export function ScrollToTop() {
  const pathname = usePathname();

  useEffect(() => {
    // We use a small timeout to ensure the DOM has updated
    // and the browser's default scroll restoration doesn't interfere
    const timeout = setTimeout(() => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }, 0);

    return () => clearTimeout(timeout);
  }, [pathname]);

  return null;
}
