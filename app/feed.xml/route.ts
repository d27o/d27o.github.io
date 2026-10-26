import { getPosts } from "@/lib/posts";
import { site } from "@/lib/site";

export const dynamic = "force-static";
const xml = (value: string) => value.replace(/[<>&"']/g, (char) => ({
  "<": "&lt;", ">": "&gt;", "&": "&amp;", '"': "&quot;", "'": "&apos;",
}[char]!));

export function GET() {
  const posts = getPosts();
  const entries = posts.map((post) => `<entry><title>${xml(post.title)}</title>
    <id>${site.url}/${post.slug}</id><link href="${site.url}/${post.slug}/"/>
    <published>${post.date}T00:00:00Z</published><updated>${post.date}T00:00:00Z</updated>
    <summary>${xml(post.description)}</summary></entry>`).join("");
  return new Response(`<?xml version="1.0" encoding="utf-8"?>
    <feed xmlns="http://www.w3.org/2005/Atom" xml:lang="ru">
    <id>${site.url}/</id><title>${xml(site.title)}</title><subtitle>${xml(site.description)}</subtitle>
    <link href="${site.url}/feed.xml" rel="self"/><link href="${site.url}/"/>
    <author><name>${site.name}</name></author><updated>${posts[0].date}T00:00:00Z</updated>${entries}</feed>`,
    { headers: { "Content-Type": "application/atom+xml; charset=utf-8" } });
}
