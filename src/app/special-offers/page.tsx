import type { Metadata } from "next";
import { PlaceholderPage } from "@/components/ui/placeholder-page";

export const metadata: Metadata = {
  title: "Special Offers",
  description: "Last-minute deals, seasonal breaks and multi-night discounts at Woodlands Manor Farm.",
  alternates: { canonical: "/special-offers/" },
};

export default function Page() {
  return (
    <PlaceholderPage
      eyebrow="Deals"
      title="Special offers"
      description="Last-minute availability, seasonal breaks and multi-night discounts."
      sourceFile="design-references/woodlands_special_offers.html"
    />
  );
}
