import type { Metadata } from "next";
import { PlaceholderPage } from "@/components/ui/placeholder-page";

export const metadata: Metadata = {
  title: "Bude Holiday Cottages",
  description:
    "Browse the seven self-catering cottages at Woodlands Manor Farm — sleeping from 2 to 12, with shared indoor pool and farm access.",
  alternates: { canonical: "/bude-holiday-cottages/" },
};

export default function CottagesPage() {
  return (
    <PlaceholderPage
      eyebrow="Cottages"
      title="Holiday cottages in Bude"
      description="Seven cottages on a working farm — from snug couples' boltholes to a six-bedroom manor house."
      sourceFile="design-references/woodlands_cottages.html"
    />
  );
}
