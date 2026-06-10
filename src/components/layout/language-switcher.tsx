"use client";

import { useLocale } from "next-intl";
import { usePathname, useRouter } from "@/i18n/routing";
import { Globe } from "@phosphor-icons/react/dist/ssr";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface LanguageSwitcherProps {
  isScrolled?: boolean;
}

export function LanguageSwitcher({ isScrolled = true }: LanguageSwitcherProps) {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const toggleLocale = () => {
    const newLocale = locale === "es" ? "en" : "es";
    router.replace(pathname, { locale: newLocale });
  };

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={toggleLocale}
      className={cn(
        "gap-1.5 font-medium",
        isScrolled
          ? "text-slate-dark hover:text-blue-primary hover:bg-blue-light/50"
          : "text-white hover:text-white/80 hover:bg-white/10"
      )}
      aria-label={locale === "es" ? "Switch to English" : "Cambiar a Español"}
    >
      <Globe className="size-4" weight="bold" />
      <span className="uppercase">{locale === "es" ? "EN" : "ES"}</span>
    </Button>
  );
}
