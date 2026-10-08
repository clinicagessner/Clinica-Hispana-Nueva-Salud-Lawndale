"use client";

import dynamic from "next/dynamic";
import { useEffect, useRef, useState } from "react";

// El formulario (react-hook-form + zod + server action) es el JS más pesado de
// la home y está al final de la página. Se descarga solo cuando el visitante se
// acerca (IntersectionObserver con 600 px de margen); hasta entonces se reserva
// su alto (medido en producción: 492 px en móvil, 477 px en escritorio) para no
// mover la página (CLS). Misma receta que La Porte, 529 y Cruz 4.
const ContactForm = dynamic(
  () => import("@/components/forms/contact-form").then((m) => m.ContactForm),
  { ssr: false, loading: () => <FormPlaceholder /> },
);

function FormPlaceholder() {
  return <div aria-hidden className="min-h-[492px] md:min-h-[477px] w-full" />;
}

export function LazyContactForm() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof IntersectionObserver === "undefined") {
      setVisible(true);
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setVisible(true);
          io.disconnect();
        }
      },
      { rootMargin: "600px 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return <div ref={ref}>{visible ? <ContactForm /> : <FormPlaceholder />}</div>;
}
