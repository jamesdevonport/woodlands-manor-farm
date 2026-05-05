import type { Metadata } from "next";
import { ListingPage } from "@/components/listing/listing-page";
import { YURT_CARDS } from "@/lib/data/listing-content";

export const metadata: Metadata = {
  title: "Glamping Yurts in Cornwall — Budhyn & Fenton",
  description:
    "Two hand-crafted Mongolian yurts at Woodlands Manor Farm with woodburner, hot tub, private bathroom cabin, and access to the heated indoor pool.",
  alternates: { canonical: "/yurts/" },
  openGraph: {
    title: "The Yurts — Woodlands Manor Farm",
    description:
      "Authentic Mongolian glamping in the Coombe Valley, Bude — Budhyn & Fenton yurts with hot tubs and big skies.",
    images: ["/images/cottages/178e79588e66b04a.jpg"],
  },
};

export default function YurtsPage() {
  return (
    <ListingPage
      hero={{
        image: "/images/cottages/178e79588e66b04a.jpg",
        alt: "Inside one of the yurts at Woodlands Manor Farm",
        eyebrow: "Woodlands Manor Farm · Bude, Cornwall",
        title: (
          <>
            Glamping <em>in Cornwall</em>
          </>
        ),
        description:
          "Two hand-crafted Mongolian yurts in their own meadow, with private hot tubs, wood burners, and the same access to the indoor pool, games room and farm animals as our cottages.",
      }}
      yurts={YURT_CARDS}
      yurtsHeading="Budhyn & Fenton"
    />
  );
}
