import type { Metadata } from "next";
import {
  AboutSubnav,
  CtaStrip,
  InfoCardGrid,
  InfoHero,
  infoStyles as styles,
} from "@/components/info/info-shell";

export const metadata: Metadata = {
  title: "The Little Extras",
  description:
    "Welcome hampers, breakfast deliveries, hot tubs, EV charging — the optional extras you can pre-book before your stay.",
  alternates: { canonical: "/the-little-extras/" },
};

export default function Page() {
  return (
    <>
      <InfoHero
        image="/images/blog-template/6acc248ff59e6e43.jpg"
        alt="The little extras at Woodlands Manor Farm"
        eyebrow="Woodlands Manor Farm · Optional extras"
        title={
          <>
            The little <em>extras</em>
          </>
        }
        description="Welcome hampers, breakfast deliveries, hot tubs, EV charging — the small things you can add before you arrive."
      />
      <AboutSubnav activeHref="/the-little-extras/" />

      <div className={styles.pageContent}>
        <p className={styles.eyebrow}>Pre-book before you arrive</p>
        <h2 className={styles.sectionTitle}>
          Make your stay <em>easier</em>
        </h2>
        <p className={styles.sectionBody}>
          Some things make a holiday — a hamper waiting for you, a hot tub bubbling on the
          terrace, a Sainsbury&rsquo;s shop already in the fridge. Add these when you book, or
          drop us a line and we&rsquo;ll sort it.
        </p>

        <InfoCardGrid
          cards={[
            {
              icon: "🧺",
              title: "Welcome hamper",
              body: "Tea, coffee, milk, sugar, herbs, salt and pepper waiting on the kitchen counter — included free with every stay. Add a Cornish cream tea or a bottle of Camel Valley fizz for £25.",
            },
            {
              icon: "🍳",
              title: "Breakfast delivery",
              body: "Local sourdough, free-range eggs, smoked bacon and a pint of fresh milk delivered for your first morning — £18 for two, £30 for four.",
              variant: "violet",
            },
            {
              icon: "♨️",
              title: "Private hot tub",
              body: "We can set up a private hot tub on your cottage terrace for the duration of your stay. £150 short break, £250 weekly.",
              variant: "gold",
            },
            {
              icon: "🛒",
              title: "Sainsbury's grocery shop",
              body: "Pre-arrange a Sainsbury's delivery to the farm — we'll receive it and put it in your fridge before you arrive. Just send us the order ref.",
              variant: "dark",
            },
            {
              icon: "⚡",
              title: "EV charging",
              body: "Free type 2 EV charger on site for guests. Plug in when you arrive — no need to pre-book, just let us know if you'd like priority.",
            },
            {
              icon: "🐕",
              title: "Dog-friendly stay pack",
              body: "Bowl, towel, lead, treats and a list of the best dog-friendly pubs and beaches — £15. Dogs welcome in every cottage and yurt.",
              variant: "violet",
            },
          ]}
        />
      </div>

      <CtaStrip
        title="Add the extras when you book"
        body="Or call Andy & Ruth and we'll sort it for you."
      />
    </>
  );
}
