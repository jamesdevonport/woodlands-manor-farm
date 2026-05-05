import type { Metadata } from "next";
export { default } from "../things-to-do-in-bude/page";

// Alias of /things-to-do-in-bude/ — both URLs exist in the WP sitemap.
export const metadata: Metadata = {
  title: "Out & About",
  description:
    "Beaches, surf schools, coastal walks, gardens and family days out within easy reach of Woodlands Manor Farm.",
  alternates: { canonical: "/things-to-do-in-bude/" },
};
