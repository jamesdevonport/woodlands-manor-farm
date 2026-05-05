import type { Metadata } from "next";
import { PlaceholderPage } from "@/components/ui/placeholder-page";

export const metadata: Metadata = {
  title: "Holiday Cottage Inventory",
  description:
    "Every appliance, utensil and amenity provided in our self-catering cottages and yurts.",
  alternates: { canonical: "/holiday-cottage-inventory/" },
};

export default function Page() {
  return (
    <PlaceholderPage
      eyebrow="Reference"
      title="Cottage inventory"
      description="A practical, no-surprises list of everything provided in each cottage and yurt."
      sourceFile="design-references/woodlands_inventory.html"
    />
  );
}
