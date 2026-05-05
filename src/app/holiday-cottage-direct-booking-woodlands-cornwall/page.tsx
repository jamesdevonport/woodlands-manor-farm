import type { Metadata } from "next";
import { PlaceholderPage } from "@/components/ui/placeholder-page";

export const metadata: Metadata = {
  title: "Book Direct",
  description:
    "Book a holiday cottage or yurt direct with Woodlands Manor Farm — best price guaranteed.",
  alternates: { canonical: "/holiday-cottage-direct-booking-woodlands-cornwall/" },
};

export default function Page() {
  return (
    <PlaceholderPage
      eyebrow="Best rate"
      title="Book direct & save"
      description="Skip the booking-site fees — book directly with us for the best available rate."
      sourceFile="design-references/woodlands_book_direct.html"
    />
  );
}
