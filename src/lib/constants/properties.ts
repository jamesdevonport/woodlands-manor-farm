export type PropertyType = "cottage" | "yurt";

export type Property = {
  slug: string;
  name: string;
  type: PropertyType;
  sleeps: number;
  bedrooms: number;
  shortDescription: string;
  href: string;
  heroImage: string;
};

/**
 * Single source of truth for the 9 letting units. Slugs match the existing
 * WordPress URLs exactly so SEO history is preserved.
 */
export const PROPERTIES: Property[] = [
  {
    slug: "the-manor-house",
    name: "The Manor House",
    type: "cottage",
    sleeps: 12,
    bedrooms: 6,
    shortDescription:
      "The original 17th-century farmhouse — six bedrooms, sleeps twelve, perfect for large family gatherings.",
    href: "/the-manor-house/",
    heroImage: "/images/the-manor-house/hero.jpg",
  },
  {
    slug: "rose-cottage",
    name: "Rose Cottage",
    type: "cottage",
    sleeps: 4,
    bedrooms: 2,
    shortDescription: "A romantic two-bedroom cottage with garden views.",
    href: "/rose-cottage/",
    heroImage: "/images/rose-cottage/hero.jpg",
  },
  {
    slug: "jasmine-cottage",
    name: "Jasmine Cottage",
    type: "cottage",
    sleeps: 4,
    bedrooms: 2,
    shortDescription: "Light-filled cottage with a private patio overlooking the meadow.",
    href: "/jasmine-cottage/",
    heroImage: "/images/jasmine-cottage/hero.jpg",
  },
  {
    slug: "lavender-cottage",
    name: "Lavender Cottage",
    type: "cottage",
    sleeps: 4,
    bedrooms: 2,
    shortDescription: "Cosy stone cottage with woodburner and country-style kitchen.",
    href: "/lavender-cottage/",
    heroImage: "/images/lavender-cottage/hero.jpg",
  },
  {
    slug: "the-coach-house",
    name: "The Coach House",
    type: "cottage",
    sleeps: 6,
    bedrooms: 3,
    shortDescription: "Three-bedroom converted coach house with vaulted ceilings.",
    href: "/the-coach-house/",
    heroImage: "/images/the-coach-house/hero.jpg",
  },
  {
    slug: "the-stables",
    name: "The Stables",
    type: "cottage",
    sleeps: 6,
    bedrooms: 3,
    shortDescription: "Single-storey three-bedroom barn conversion, fully accessible.",
    href: "/the-stables/",
    heroImage: "/images/the-stables/hero.jpg",
  },
  {
    slug: "honeysuckle-cottage",
    name: "Honeysuckle Cottage",
    type: "cottage",
    sleeps: 2,
    bedrooms: 1,
    shortDescription: "Intimate one-bedroom cottage ideal for couples.",
    href: "/honeysuckle-cottage/",
    heroImage: "/images/honeysuckle-cottage/hero.jpg",
  },
  {
    slug: "budhyn-yurt",
    name: "Budhyn Yurt",
    type: "yurt",
    sleeps: 4,
    bedrooms: 1,
    shortDescription: "Hand-crafted Mongolian yurt in its own meadow with private hot tub.",
    href: "/budhyn-yurt/",
    heroImage: "/images/budhyn-yurt/hero.jpg",
  },
  {
    slug: "fenton-yurt",
    name: "Fenton Yurt",
    type: "yurt",
    sleeps: 4,
    bedrooms: 1,
    shortDescription: "Sister yurt to Budhyn — woodburner, big sky, deep quiet.",
    href: "/fenton-yurt/",
    heroImage: "/images/fenton-yurt/hero.jpg",
  },
];

export const COTTAGES = PROPERTIES.filter((p) => p.type === "cottage");
export const YURTS = PROPERTIES.filter((p) => p.type === "yurt");
