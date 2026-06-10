import type { ReactNode } from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  other: {
    "facebook-domain-verification": "szssnn6pnh4t40hq44x1z3nz1p7yga",
  },
};

type Props = {
  children: ReactNode;
};

export default function RootLayout({ children }: Props) {
  return children;
}
