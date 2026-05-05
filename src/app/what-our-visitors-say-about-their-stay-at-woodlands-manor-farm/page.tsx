// Alias of /reviews/ — the WP site has both URLs in the sitemap.
import type { Metadata } from "next";
export { default } from "../reviews/page";

export const metadata: Metadata = {
  title: "What Our Visitors Say",
  description: "What guests say about staying at Woodlands Manor Farm in Bude, Cornwall.",
  alternates: { canonical: "/reviews/" },
};
