import type { Metadata } from "next";
import { PlaceholderPage } from "@/components/ui/placeholder-page";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Woodlands Manor Farm — phone, email, address and how to find us.",
  alternates: { canonical: "/contact-us/" },
};

export default function Page() {
  return (
    <PlaceholderPage
      eyebrow="Get in touch"
      title="Contact us"
      description="Phone, email, address and directions. We reply personally to every enquiry."
      sourceFile="design-references/woodlands_contact.html"
    />
  );
}
