import type { MetadataRoute } from "next";
import { site } from "@/lib/site";
import { getPosts } from "@/lib/posts";
export const dynamic = "force-static";
export default function sitemap(): MetadataRoute.Sitemap {
  return ["", "about/", "contact/", "blog/", "boevaya-classica/", "grant-ib/",
    ...getPosts().map((post) => `${post.slug}/`)].map((route) => ({ url: `${site.url}/${route}` }));
}
