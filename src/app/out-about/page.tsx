// Alias of /things-to-do-in-bude/ — the WP site exposes both URLs.
// Re-exporting keeps both paths live without an HTTP redirect.
export { default } from "../things-to-do-in-bude/page";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Out & About",
  description:
    "Beaches, surf schools, coastal walks, gardens and family days out within easy reach of Woodlands Manor Farm.",
  alternates: { canonical: "/things-to-do-in-bude/" },
};
