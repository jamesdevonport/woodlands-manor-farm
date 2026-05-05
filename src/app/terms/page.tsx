import type { Metadata } from "next";
import TermsConditionsPage from "../terms-conditions/page";

export const metadata: Metadata = {
  title: "Terms",
  description: "Booking terms and conditions for stays at Woodlands Manor Farm.",
  alternates: { canonical: "/terms-conditions/" },
  robots: { index: false, follow: true },
};

export default function Page() {
  return <TermsConditionsPage />;
}
