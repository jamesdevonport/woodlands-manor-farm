import styles from "./legal.module.css";

export type LegalSection = {
  id: string;
  title: string;
  content: React.ReactNode;
};

export function LegalPage({
  eyebrow,
  title,
  titleAccent,
  lastUpdated,
  intro,
  sections,
}: {
  eyebrow: string;
  title: string;
  titleAccent?: string;
  lastUpdated: string;
  intro?: React.ReactNode;
  sections: LegalSection[];
}) {
  return (
    <>
      <header className={styles.header}>
        <div className={styles.headerInner}>
          <p className={styles.eyebrow}>{eyebrow}</p>
          <h1 className={styles.title}>
            {title} {titleAccent ? <em>{titleAccent}</em> : null}
          </h1>
          <p className={styles.meta}>Last updated {lastUpdated}</p>
        </div>
      </header>

      <div className={styles.wrap}>
        <aside className={styles.toc}>
          <div className={styles.tocLabel}>Contents</div>
          {sections.map((s) => (
            <a key={s.id} href={`#${s.id}`}>
              {s.title}
            </a>
          ))}
        </aside>

        <main className={styles.body}>
          <div className={styles.updatedBadge}>Last updated {lastUpdated}</div>
          {intro}
          {sections.map((s) => (
            <section key={s.id} id={s.id} className={styles.section}>
              <h2>{s.title}</h2>
              {s.content}
            </section>
          ))}
        </main>
      </div>
    </>
  );
}

export { styles as legalStyles };
