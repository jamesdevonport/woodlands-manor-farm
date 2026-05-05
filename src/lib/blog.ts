import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import { remark } from "remark";
import remarkHtml from "remark-html";

const BLOG_DIR = path.join(process.cwd(), "content", "blog");

export type BlogPost = {
  slug: string;
  title: string;
  date: string;
  author?: string;
  excerpt?: string;
  featureImage?: string;
};

export type BlogPostFull = BlogPost & {
  contentHtml: string;
};

function readPostFiles(): string[] {
  if (!fs.existsSync(BLOG_DIR)) return [];
  return fs.readdirSync(BLOG_DIR).filter((f) => f.endsWith(".md"));
}

function parseFile(filename: string): BlogPost & { raw: string } {
  const fullPath = path.join(BLOG_DIR, filename);
  const file = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(file);
  const slug = (data.slug as string) ?? filename.replace(/\.md$/, "");
  return {
    slug,
    title: (data.title as string) ?? slug,
    date: (data.date as string) ?? "",
    author: data.author as string | undefined,
    excerpt: data.excerpt as string | undefined,
    featureImage: (data.feature_image as string | undefined) ?? (data.featureImage as string | undefined),
    raw: content,
  };
}

export function getAllPosts(): BlogPost[] {
  return readPostFiles()
    .map((f) => {
      const { raw: _raw, ...meta } = parseFile(f);
      return meta;
    })
    .sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getAllPostSlugs(): string[] {
  return readPostFiles().map((f) => parseFile(f).slug);
}

export async function getPostBySlug(slug: string): Promise<BlogPostFull | null> {
  const file = readPostFiles().find((f) => parseFile(f).slug === slug);
  if (!file) return null;
  const { raw, ...meta } = parseFile(file);
  const processed = await remark().use(remarkHtml).process(raw);
  return { ...meta, contentHtml: processed.toString() };
}
