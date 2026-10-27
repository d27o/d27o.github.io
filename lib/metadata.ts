import type { Metadata } from "next";
import { site } from "./site";

export function pageMetadata(title: string, description: string, path: string): Metadata {
  return {
    title: { absolute: `${title} | ${site.title}` },
    description,
    alternates: { canonical: path },
    openGraph: {
      title: `${title} | ${site.title}`,
      description,
      url: path,
      siteName: site.title,
      locale: "ru_RU",
      type: "website",
    },
    twitter: { card: "summary", title: `${title} | ${site.title}`, description },
  };
}
