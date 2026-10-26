import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

export interface Post {
  slug: string;
  title: string;
  date: string;
  description: string;
  preview: string;
  content: string;
}

export function getPosts(): Post[] {
  const directory = path.join(process.cwd(), "content/posts");
  return fs.readdirSync(directory).filter((name) => name.endsWith(".md")).map((name) => {
    const { data, content } = matter(fs.readFileSync(path.join(directory, name), "utf8"));
    if (typeof data.slug !== "string" || typeof data.title !== "string" || typeof data.date !== "string") {
      throw new Error(`Invalid post metadata: ${name}`);
    }
    return {
      slug: data.slug,
      title: data.title,
      date: data.date.slice(0, 10),
      description: content.trim().split(/\n(?:\s*\n|#{1,6}\s)/)[0].replace(/\s+/g, " ").slice(0, 180),
      preview: data.preview as string,
      content,
    };
  }).sort((a, b) => b.date.localeCompare(a.date));
}

export function getPost(slug: string): Post | undefined {
  return getPosts().find((post) => post.slug === slug);
}
