import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Markdown from "react-markdown";
import rehypeSlug from "rehype-slug";
import { getPost, getPosts } from "@/lib/posts";
import { pageMetadata } from "@/lib/metadata";

export const dynamicParams = false;
export function generateStaticParams() {
  return getPosts().map(({ slug }) => ({ slug }));
}

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();
  return pageMetadata(post.title, post.description, `/${post.slug}/`);
}

export default async function PostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();
  return <article className="career container prose">
    <header className="career__intro">
      <p className="career__eyebrow">Архив · <time dateTime={post.date}>{post.date}</time></p>
      <h1>{post.title}</h1>
      <p className="career__muted">Историческая публикация: информация относится к дате написания.</p>
      <Image className="post-image" src={post.preview} alt="" width={900} height={450} />
    </header>
    <Markdown rehypePlugins={[rehypeSlug]}>{post.content}</Markdown>
    <p><Link href="/blog/">← Все публикации</Link></p>
  </article>;
}
