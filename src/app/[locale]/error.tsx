"use client";

import { useEffect } from "react";
import { useTranslations } from "next-intl";
import { WarningCircle, ArrowClockwise } from "@phosphor-icons/react/dist/ssr";
import { Button } from "@/components/ui/button";

interface ErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function Error({ error, reset }: ErrorProps) {
  const t = useTranslations("common");
  const tError = useTranslations("errorPage");

  useEffect(() => {
    console.error("Error:", error);
  }, [error]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-cyan-warm px-4">
      <div className="text-center max-w-md">
        <div className="inline-flex items-center justify-center size-20 rounded-full bg-error-light mb-8">
          <WarningCircle
            className="size-10 text-destructive"
            weight="duotone"
          />
        </div>

        <h1 className="text-3xl font-heading font-bold text-slate-dark mb-4">
          {t("error")}
        </h1>

        <p className="text-muted-foreground mb-8">
          {tError("description")}
        </p>

        <Button onClick={reset} size="lg" className="gap-2">
          <ArrowClockwise className="size-5" />
          {t("tryAgain")}
        </Button>
      </div>
    </div>
  );
}
