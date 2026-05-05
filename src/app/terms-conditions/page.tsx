import type { Metadata } from "next";
import { PlaceholderPage } from "@/components/ui/placeholder-page";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description: "Booking terms and conditions for stays at Woodlands Manor Farm.",
  alternates: { canonical: "/terms-conditions/" },
  robots: { index: false, follow: true },
};

export default function Page() {
  return (
    <PlaceholderPage
      eyebrow="Legal"
      title="Terms & conditions"
      sourceFile="design-references/woodlands_terms.html"
    />
  );
}
