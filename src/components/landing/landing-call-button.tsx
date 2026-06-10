import { LANDING_CALLRAIL } from "@/lib/landing-conquesting";

type Props = {
  className?: string;
  ariaLabel?: string;
  children: React.ReactNode;
};

export function LandingCallButton({ className, ariaLabel, children }: Props) {
  return (
    <a
      href={LANDING_CALLRAIL.href}
      className={className}
      aria-label={ariaLabel ?? `Llamar ${LANDING_CALLRAIL.display}`}
    >
      {children}
    </a>
  );
}
