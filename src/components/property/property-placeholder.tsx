import { PROPERTIES, type Property } from "@/lib/constants/properties";
import { PlaceholderPage } from "@/components/ui/placeholder-page";

export function PropertyPlaceholder({ slug, sourceFile }: { slug: Property["slug"]; sourceFile: string }) {
  const p = PROPERTIES.find((x) => x.slug === slug);
  if (!p) throw new Error(`Unknown property slug: ${slug}`);
  return (
    <PlaceholderPage
      eyebrow={p.type === "yurt" ? "Glamping yurt" : "Holiday cottage"}
      title={p.name}
      description={`${p.shortDescription} Sleeps ${p.sleeps} · ${p.bedrooms} bedroom${p.bedrooms > 1 ? "s" : ""}.`}
      sourceFile={sourceFile}
    />
  );
}
