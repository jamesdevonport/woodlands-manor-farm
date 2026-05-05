import type { Metadata } from "next";
import { PlaceholderPage } from "@/components/ui/placeholder-page";

// Alias of /terms-conditions/ — both URLs exist in the WP sitemap.
export const metadata: Metadata = {
  title: "Terms",
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
