"use client";

import { useState, useEffect } from "react";
import { Phone, MapPin } from "@phosphor-icons/react/dist/ssr";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { CONTACT_INFO } from "@/lib/constants";
import { LANDING_CALLRAIL } from "@/lib/landing-conquesting";
import { cn } from "@/lib/utils";

export function LandingFloatingButtons() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={cn(
        "fixed bottom-6 right-6 z-40 flex flex-col gap-3 transition-all duration-300",
        isVisible
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-10 pointer-events-none"
      )}
    >
      <Tooltip>
        <TooltipTrigger asChild>
          <a
            href={CONTACT_INFO.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="size-12 rounded-full bg-white text-slate-dark border border-slate-200 shadow-md flex items-center justify-center hover:bg-slate-50 hover:shadow-lg transition-all"
            aria-label="Ver ubicación en Google Maps"
          >
            <MapPin className="size-5" weight="fill" />
          </a>
        </TooltipTrigger>
        <TooltipContent side="left">
          <p>Cómo llegar</p>
        </TooltipContent>
      </Tooltip>

      <Tooltip>
        <TooltipTrigger asChild>
          <a
            href={LANDING_CALLRAIL.href}
            className="size-14 rounded-full bg-red-accent text-white shadow-md shadow-red-accent/30 flex items-center justify-center hover:bg-red-accent-dark hover:shadow-lg transition-all animate-pulse-float"
            aria-label={`Llamar ${LANDING_CALLRAIL.display}`}
          >
            <Phone className="size-6" weight="fill" />
          </a>
        </TooltipTrigger>
        <TooltipContent side="left">
          <p>{LANDING_CALLRAIL.display}</p>
        </TooltipContent>
      </Tooltip>
    </div>
  );
}
