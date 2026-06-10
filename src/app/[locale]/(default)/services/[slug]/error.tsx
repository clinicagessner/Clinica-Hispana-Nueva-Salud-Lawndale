"use client";

import { useEffect } from "react";
import Link from "next/link";
import { ArrowLeft, WarningCircle } from "@phosphor-icons/react";
import { Button } from "@/components/ui/button";

export default function ServiceError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("Service page error:", error);
  }, [error]);

  return (
    <main className="min-h-screen bg-background flex items-center justify-center px-4">
      <div className="text-center max-w-md">
        <div className="size-16 rounded-full bg-red-100 text-blue-primary flex items-center justify-center mx-auto mb-6">
          <WarningCircle className="size-8" weight="fill" />
        </div>

        <h1 className="text-2xl font-heading font-bold text-slate-dark mb-3">
          Error al cargar el servicio
        </h1>

        <p className="text-muted-foreground mb-6">
          Ocurrió un error al cargar esta página. Por favor intente de nuevo.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Button onClick={reset} className="gap-2">
            Intentar de nuevo
          </Button>

          <Button asChild variant="outline" className="gap-2">
            <Link href="/services">
              <ArrowLeft className="size-4" weight="bold" />
              Ver todos los servicios
            </Link>
          </Button>
        </div>
      </div>
    </main>
  );
}
