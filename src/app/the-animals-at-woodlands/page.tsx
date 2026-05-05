import type { Metadata } from "next";
import { PlaceholderPage } from "@/components/ui/placeholder-page";

export const metadata: Metadata = {
  title: "The Animals at Woodlands",
  description:
    "Meet the alpacas, donkeys, sheep, chickens and pigs who call Woodlands Manor Farm home.",
  alternates: { canonical: "/the-animals-at-woodlands/" },
};

export default function Page() {
  return (
    <PlaceholderPage
      eyebrow="Meet the animals"
      title="The animals at Woodlands"
      description="Alpacas, donkeys, sheep, chickens, pigs — and the daily feeding routine guests can join in with."
      sourceFile="design-references/woodlands_animals.html"
    />
  );
}
