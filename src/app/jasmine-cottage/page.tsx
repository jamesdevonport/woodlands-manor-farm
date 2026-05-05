import type { Metadata } from "next";
import { PROPERTIES } from "@/lib/constants/properties";
import { PropertyPlaceholder } from "@/components/property/property-placeholder";

const SLUG = "jasmine-cottage" as const;
const property = PROPERTIES.find((p) => p.slug === SLUG)!;

export const metadata: Metadata = {
  title: property.name,
  description: property.shortDescription,
  alternates: { canonical: property.href },
};

export default function Page() {
  return <PropertyPlaceholder slug={SLUG} sourceFile="design-references/woodlands_jasmine.html" />;
}
