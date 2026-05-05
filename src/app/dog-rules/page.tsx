import type { Metadata } from "next";
import { PlaceholderPage } from "@/components/ui/placeholder-page";

export const metadata: Metadata = {
  title: "Dog Rules",
  description: "Our dog policy at Woodlands Manor Farm — well-behaved dogs are very welcome.",
  alternates: { canonical: "/dog-rules/" },
};

export default function Page() {
  return (
    <PlaceholderPage
      eyebrow="Pet policy"
      title="Bringing your dog"
      description="Dogs are very welcome — here's how we keep things working for everyone (and the farm animals)."
      sourceFile="design-references/woodlands_dog_rules.html"
    />
  );
}
