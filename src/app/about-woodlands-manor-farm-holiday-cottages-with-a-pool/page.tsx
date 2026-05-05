import type { Metadata } from "next";
import { PlaceholderPage } from "@/components/ui/placeholder-page";

export const metadata: Metadata = {
  title: "About Woodlands Manor Farm",
  description:
    "Holiday cottages with a pool in Bude, Cornwall — the story of a 17th-century farm and the family who run it.",
  alternates: {
    canonical: "/about-woodlands-manor-farm-holiday-cottages-with-a-pool/",
  },
};

export default function AboutPage() {
  return (
    <PlaceholderPage
      eyebrow="About"
      title="A 17th-century farm in the Coombe Valley"
      description="Our story, the buildings, the family, and what makes a stay at Woodlands different."
      sourceFile="design-references/woodlands_about.html"
    />
  );
}
