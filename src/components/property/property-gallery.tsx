"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import styles from "./property.module.css";
import { cn } from "@/lib/utils";

export type GalleryImage = { src: string; alt: string };

export function PropertyGallery({
  images,
  propertyName,
}: {
  images: GalleryImage[];
  propertyName: string;
}) {
  const [active, setActive] = useState(0);
  const total = images.length;

  return (
    <div className={styles.galleryMain}>
      {images.map((img, i) => (
        <Image
          key={img.src}
          src={img.src}
          alt={img.alt}
          fill
          priority={i === 0}
          sizes="(min-width: 900px) 60vw, 100vw"
          className={styles.galleryMainImg}
          style={{ opacity: i === active ? 1 : 0, position: "absolute", inset: 0 }}
        />
      ))}

      <div className={styles.galleryBreadcrumb}>
        <Link href="/">Home</Link>
        <span>/</span>
        <Link href="/bude-holiday-cottages/">Cottages</Link>
        <span>/</span>
        {propertyName}
      </div>

      <div className={styles.galleryCounter}>
        {active + 1} / {total}
      </div>

      <button
        type="button"
        aria-label="Previous image"
        onClick={() => setActive((a) => (a - 1 + total) % total)}
        className={cn(styles.galleryArrow, styles.galleryPrev)}
      >
        ←
      </button>
      <button
        type="button"
        aria-label="Next image"
        onClick={() => setActive((a) => (a + 1) % total)}
        className={cn(styles.galleryArrow, styles.galleryNext)}
      >
        →
      </button>

      <div className={styles.galleryThumbs}>
        {images.map((img, i) => (
          <button
            key={img.src}
            type="button"
            aria-label={`Show image ${i + 1}`}
            onClick={() => setActive(i)}
            className={cn(styles.thumb, i === active && styles.thumbActive)}
          >
            <Image src={img.src} alt="" width={64} height={48} />
          </button>
        ))}
      </div>
    </div>
  );
}
