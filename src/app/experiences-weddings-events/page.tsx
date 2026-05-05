import type { Metadata } from "next";
import { PlaceholderPage } from "@/components/ui/placeholder-page";

export const metadata: Metadata = {
  title: "Experiences, Weddings & Events",
  description:
    "Hire Woodlands Manor Farm exclusively for weddings, family celebrations or wellness retreats.",
  alternates: { canonical: "/experiences-weddings-events/" },
};

export default function Page() {
  return (
    <PlaceholderPage
      eyebrow="Exclusive use"
      title="Experiences, weddings & events"
      description="The whole farm, exclusively yours — for weddings, big-birthday celebrations and retreats."
      sourceFile="design-references/woodlands_experiences.html"
    />
  );
}
