import type { Metadata } from "next";
import { PlaceholderPage } from "@/components/ui/placeholder-page";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How Woodlands Manor Farm collects, uses and protects your personal data.",
  alternates: { canonical: "/privacy/" },
  robots: { index: false, follow: true },
};

export default function Page() {
  return (
    <PlaceholderPage
      eyebrow="Legal"
      title="Privacy policy"
      sourceFile="design-references/woodlands_privacy.html"
    />
  );
}
