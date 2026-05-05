import type { Metadata } from "next";
import { PlaceholderPage } from "@/components/ui/placeholder-page";

export const metadata: Metadata = {
  title: "The Little Extras",
  description:
    "Welcome hampers, breakfast deliveries, hot tubs, EV charging — the optional extras you can pre-book before your stay.",
  alternates: { canonical: "/the-little-extras/" },
};

export default function Page() {
  return (
    <PlaceholderPage
      eyebrow="Optional extras"
      title="The little extras"
      description="Welcome hampers, breakfast deliveries, hot tubs, EV charging — what you can add to your stay."
      sourceFile="design-references/woodlands_little_extras.html"
    />
  );
}
