'use client';

import dynamic from "next/dynamic"

export const FeatureSection = dynamic(() => import("@/components/feature-section").then(mod => mod.FeatureSection), {
  ssr: false,
})
