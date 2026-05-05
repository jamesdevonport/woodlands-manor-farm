// Alias of /news/ — the WP site exposes /posts/ as well.
import type { Metadata } from "next";
export { default } from "../news/page";

export const metadata: Metadata = {
  title: "Posts",
  description: "All blog posts and guides from Woodlands Manor Farm.",
  alternates: { canonical: "/news/" },
};
