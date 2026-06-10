"use client";

import { useEffect } from "react";

/**
 * Lightweight scroll animation hook using Intersection Observer
 * Adds 'is-visible' class to elements with 'animate-on-scroll' class
 * Uses MutationObserver to handle elements added after client-side navigation
 */
export function useAnimateOnScroll() {
  useEffect(() => {
    const intersectionObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            intersectionObserver.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px",
      }
    );

    // Track observed elements to avoid duplicates
    const observed = new WeakSet<Element>();

    function observeNew() {
      document.querySelectorAll(".animate-on-scroll:not(.is-visible)").forEach((el) => {
        if (!observed.has(el)) {
          observed.add(el);
          intersectionObserver.observe(el);
        }
      });
    }

    // Observe existing elements
    observeNew();

    // Watch for new elements added to the DOM (RSC streaming, client-side nav)
    const mutationObserver = new MutationObserver(observeNew);
    mutationObserver.observe(document.body, { childList: true, subtree: true });

    return () => {
      intersectionObserver.disconnect();
      mutationObserver.disconnect();
    };
  }, []);
}
