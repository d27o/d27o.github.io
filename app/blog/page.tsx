import Link from "next/link";
import { pageMetadata } from "@/lib/metadata";
import { getPosts } from "@/lib/posts";

export const metadata = pageMetadata("Блог", "Архив заметок d27o о веб-разработке. Публикации сохранены с исходными датами и адресами.", "/blog/");

export default function BlogPage() {
  return <section className="career container">
    <header className="career__intro"><p className="career__eyebrow">Архив публикаций</p>
      <h1>Блог</h1><p>Ранние заметки о веб-разработке. Материалы отражают состояние технологий на дату публикации.</p></header>
    <div className="career__grid">
      {getPosts().map((post) => <article className="career__card" key={post.slug}>
        <time dateTime={post.date}>{post.date}</time>
        <h2><Link href={`/${post.slug}/`}>{post.title}</Link></h2>
        <p>{post.description}</p>
      </article>)}
    </div>
  </section>;
}
