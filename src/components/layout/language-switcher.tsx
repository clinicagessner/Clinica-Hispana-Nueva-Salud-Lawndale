"use client";

import Link from "next/link";
import { useLocale } from "next-intl";
import { usePathname } from "@/i18n/routing";
import { Globe } from "@phosphor-icons/react/dist/ssr";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface LanguageSwitcherProps {
  isScrolled?: boolean;
}

// Enlace real (<a href>) en vez de router.replace: los rastreadores no ejecutan
// onClick, y sin este href ninguna página en español enlazaba a su versión /en.
// El href se construye a mano porque el Link de next-intl con `locale="es"`
// genera /es/... (que redirige 307); con localePrefix "as-needed" el español
// va sin prefijo.
export function LanguageSwitcher({ isScrolled = true }: LanguageSwitcherProps) {
  const locale = useLocale();
  const pathname = usePathname();
  const targetLocale = locale === "es" ? "en" : "es";
  const href =
    targetLocale === "es" ? pathname : pathname === "/" ? "/en" : `/en${pathname}`;

  return (
    <Link
      href={href}
      replace
      className={cn(
        buttonVariants({ variant: "ghost", size: "sm" }),
        "gap-1.5 font-medium",
        isScrolled
          ? "text-slate-dark hover:text-blue-primary hover:bg-blue-light/50"
          : "text-white hover:text-white/80 hover:bg-white/10"
      )}
      aria-label={locale === "es" ? "Switch to English" : "Cambiar a Español"}
    >
      <Globe className="size-4" weight="bold" />
      <span className="uppercase">{targetLocale}</span>
    </Link>
  );
}
