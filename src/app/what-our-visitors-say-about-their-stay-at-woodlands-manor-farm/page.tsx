import type { Metadata } from "next";
import { PlaceholderPage } from "@/components/ui/placeholder-page";

// Alias of /reviews/ — both URLs exist in the WP sitemap.
export const metadata: Metadata = {
  title: "What Our Visitors Say",
  description: "What guests say about staying at Woodlands Manor Farm in Bude, Cornwall.",
  alternates: { canonical: "/reviews/" },
};

export default function Page() {
  return (
    <PlaceholderPage
      eyebrow="Guest stories"
      title="Reviews"
      description="Real guests, real stays — what our visitors have to say."
      sourceFile="design-references/woodlands_reviews.html"
    />
  );
}
