import type { Metadata } from "next";
import { PlaceholderPage } from "@/components/ui/placeholder-page";

export const metadata: Metadata = {
  title: "Places to Eat in Bude",
  description: "Our hand-picked guide to restaurants, pubs, cafés and farm shops near Bude.",
  alternates: { canonical: "/places-to-eat-in-bude/" },
};

export default function Page() {
  return (
    <PlaceholderPage
      eyebrow="Local eats"
      title="Places to eat in Bude"
      description="Where the family go — restaurants, pubs, cafés and farm shops within a short drive."
      sourceFile="design-references/woodlands_places_to_eat.html"
    />
  );
}
