// Alias of /terms-conditions/ — preserved from the WP sitemap.
import type { Metadata } from "next";
export { default } from "../terms-conditions/page";

export const metadata: Metadata = {
  title: "Terms",
  description: "Booking terms and conditions for stays at Woodlands Manor Farm.",
  alternates: { canonical: "/terms-conditions/" },
  robots: { index: false, follow: true },
};
