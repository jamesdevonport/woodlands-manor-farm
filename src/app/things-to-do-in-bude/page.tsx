import type { Metadata } from "next";
import { PlaceholderPage } from "@/components/ui/placeholder-page";

export const metadata: Metadata = {
  title: "Things to Do in Bude",
  description:
    "Beaches, surf schools, coastal walks, gardens and family days out within easy reach of Woodlands Manor Farm.",
  alternates: { canonical: "/things-to-do-in-bude/" },
};

export default function Page() {
  return (
    <PlaceholderPage
      eyebrow="Out & about"
      title="Things to do in Bude"
      description="Beaches, surf, coastal walks, gardens and family days out — everything within an easy drive."
      sourceFile="design-references/woodlands_things_to_do.html"
    />
  );
}
