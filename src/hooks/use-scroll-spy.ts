"use client";

import { useEffect } from "react";

/**
 * Scroll-spy: refleja en la URL la sección que está en vista mientras se hace
 * scroll. Usa history.replaceState (no pushState) para NO contaminar el historial
 * — así el botón "atrás" sigue funcionando normal en vez de recorrer sección a
 * sección. La primera sección (hero) deja la URL limpia, sin hash.
 *
 * Solo debe montarse en la home, donde viven los <section id> ancla.
 */
export function useScrollSpy() {
  useEffect(() => {
    const sections = Array.from(
      document.querySelectorAll<HTMLElement>("main section[id]")
    );
    if (sections.length === 0) return;

    const order = sections.map((s) => s.id);
    const firstId = order[0]; // hero -> URL limpia
    const visible = new Set<string>();
    let currentId = "";

    function updateHash(id: string) {
      if (id === currentId) return;
      currentId = id;
      const hash = id === firstId ? "" : `#${id}`;
      const { pathname, search } = window.location;
      // replaceState no hace scroll ni dispara navegación de Next: solo reescribe la URL.
      window.history.replaceState(null, "", `${pathname}${search}${hash}`);
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          const id = (entry.target as HTMLElement).id;
          if (entry.isIntersecting) visible.add(id);
          else visible.delete(id);
        }
        if (visible.size === 0) return;
        // La sección activa es la primera (en orden de documento) que cruza la banda.
        const topId = order.find((id) => visible.has(id));
        if (topId) updateHash(topId);
      },
      // Banda de activación ~10% en el centro vertical del viewport: la sección
      // "activa" es la que cruza el medio de la pantalla.
      { rootMargin: "-45% 0px -45% 0px", threshold: 0 }
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);
}
