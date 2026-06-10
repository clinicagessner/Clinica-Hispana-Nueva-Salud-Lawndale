import { Phone } from "lucide-react";
import { cn } from "@/lib/utils";
import { LANDING_CALLRAIL } from "@/lib/landing-conquesting";

type TelButtonProps = {
  label: string;
  variant?: "primary" | "ghost" | "white";
  size?: "default" | "lg";
  showNumber?: boolean;
  className?: string;
  iconClassName?: string;
};

export function TelButton({
  label,
  variant = "primary",
  size = "default",
  showNumber = true,
  className,
  iconClassName,
}: TelButtonProps) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2";

  const variants = {
    primary:
      "bg-red-accent text-white shadow-md shadow-red-accent/30 hover:bg-red-accent-dark hover:shadow-lg focus-visible:ring-red-accent",
    ghost:
      "bg-transparent text-blue-primary border border-blue-primary/30 hover:bg-blue-primary/5 focus-visible:ring-blue-primary",
    white:
      "bg-white text-red-accent shadow-md hover:shadow-lg focus-visible:ring-white",
  } as const;

  const sizes = {
    default: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  } as const;

  return (
    <a
      href={LANDING_CALLRAIL.href}
      className={cn(base, variants[variant], sizes[size], className)}
      aria-label={`${label} ${LANDING_CALLRAIL.display}`}
    >
      <Phone className={cn("size-5", iconClassName)} aria-hidden="true" />
      <span>
        {label}
        {showNumber ? ` ${LANDING_CALLRAIL.display}` : ""}
      </span>
    </a>
  );
}
