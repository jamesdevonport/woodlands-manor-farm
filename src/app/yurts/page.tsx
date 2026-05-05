import type { Metadata } from "next";
import { PlaceholderPage } from "@/components/ui/placeholder-page";

export const metadata: Metadata = {
  title: "Glamping Yurts in Cornwall",
  description:
    "Two hand-crafted Mongolian yurts at Woodlands Manor Farm — Budhyn and Fenton — each with woodburner and private hot tub.",
  alternates: { canonical: "/yurts/" },
};

export default function YurtsPage() {
  return (
    <PlaceholderPage
      eyebrow="Glamping"
      title="Yurts in Bude, Cornwall"
      description="Two off-grid-feeling yurts on a working farm, with hot tubs and dark skies."
      sourceFile="design-references/woodlands_yurts.html"
    />
  );
}
