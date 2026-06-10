"use client";

import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";

/**
 * SPA PageView tracker only — does NOT load the pixel.
 * The pixel base script is loaded via <script> in layout.tsx <head>.
 * This component only fires PageView on client-side route changes.
 */
export function MetaPixelSPATracker() {
  const pathname = usePathname();
  const lastPath = useRef<string>(pathname);

  useEffect(() => {
    if (lastPath.current === pathname) return;
    lastPath.current = pathname;

    if (typeof window.fbq === "function") {
      window.fbq("track", "PageView");
    }
  }, [pathname]);

  return null;
}
