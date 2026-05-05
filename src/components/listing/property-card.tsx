import Image from "next/image";
import Link from "next/link";
import styles from "./listing.module.css";
import { cn } from "@/lib/utils";

export type PropertyCardData = {
  href: string;
  name: string;
  desc: string;
  img: string;
  alt: string;
  tags: { label: string; featured?: boolean }[];
  stats: { val: string; label: string }[];
  featured?: boolean;
};

export function PropertyCard({ data }: { data: PropertyCardData }) {
  return (
    <Link href={data.href} className={cn(styles.card, data.featured && styles.cardFeatured)}>
      <div className={styles.cardImg}>
        <Image src={data.img} alt={data.alt} fill sizes="(min-width: 900px) 33vw, 100vw" />
        <div className={styles.cardTags}>
          {data.tags.map((t) => (
            <span key={t.label} className={cn(styles.cardTag, t.featured && styles.cardTagFeatured)}>
              {t.label}
            </span>
          ))}
        </div>
      </div>
      <div className={styles.cardBody}>
        <div className={styles.cardName}>{data.name}</div>
        <p className={styles.cardDesc}>{data.desc}</p>
        <div className={styles.cardStats}>
          {data.stats.map((s) => (
            <div key={s.label} className={styles.cs}>
              <span className={styles.csVal}>{s.val}</span>
              <span className={styles.csLabel}>{s.label}</span>
            </div>
          ))}
        </div>
        <div className={styles.cardCta}>
          <span className={styles.cardCtaLink}>View &amp; book</span>
          <span className={styles.cardCtaArrow}>→</span>
        </div>
      </div>
    </Link>
  );
}
