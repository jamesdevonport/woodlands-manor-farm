import type { Metadata } from "next";
import { PlaceholderPage } from "@/components/ui/placeholder-page";

export const metadata: Metadata = {
  title: "On the Farm",
  description: "Daily farm life at Woodlands — animals, gardens, and what to expect from a stay.",
  alternates: { canonical: "/on-the-farm/" },
};

export default function Page() {
  return (
    <PlaceholderPage
      eyebrow="On the farm"
      title="A working Cornish farm"
      description="Animals, the kitchen garden, the indoor pool and the daily rhythm of a real working farm."
      sourceFile="design-references/woodlands_on_the_farm.html"
    />
  );
}
