"use client";

import { useState, useEffect } from "react";
import { CaretUp } from "@phosphor-icons/react/dist/ssr";
import { useTranslations } from "next-intl";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";

export function ScrollToTop() {
  const t = useTranslations("accessibility");
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 500);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div
      className={cn(
        "fixed bottom-6 left-6 z-40 transition-all duration-300",
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10 pointer-events-none"
      )}
    >
      <Tooltip>
        <TooltipTrigger asChild>
          <button
            onClick={scrollToTop}
            className="size-12 rounded-full bg-blue-light text-blue-dark shadow-md flex items-center justify-center hover:bg-blue-primary hover:text-white transition-all"
            aria-label={t("scrollToTop")}
          >
            <CaretUp className="size-6" weight="bold" />
          </button>
        </TooltipTrigger>
        <TooltipContent side="right">
          <p>{t("scrollToTop")}</p>
        </TooltipContent>
      </Tooltip>
    </div>
  );
}
