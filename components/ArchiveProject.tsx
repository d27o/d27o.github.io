import Image from "next/image";
import Link from "next/link";
import { archive } from "@/lib/archive";

export function ArchiveProject({ slug }: { slug: keyof typeof archive }) {
  const project = archive[slug];
  return <article className="career container">
    <header className="career__intro"><p className="career__eyebrow">Ранние работы · {project.date}</p>
      <h1>{project.title}</h1><p className="career__lead">{project.description}</p>
      <p className="career__muted">Архивный проект. Моя роль — разработка.</p>
    </header>
    <Image className="archive-image" src={project.header} alt={`Промостраница «${project.title}»`} width={1100} height={650} />
    <section className="career__section"><h2>Реализация</h2>
      <ul className="career__tags" aria-label="Технологии проекта">
        {["JavaScript", "SCSS", "Webpack", "TimePad"].map((item) => <li key={item}>{item}</li>)}
      </ul>
      <Image className="archive-image" src={project.desktop} alt={`Десктопная версия «${project.title}»`} width={1100} height={700} />
      <div className="career__actions"><a href={project.screenshot} download>Скачать полный скриншот</a>
        <Link href="/">← Все проекты</Link></div>
    </section>
  </article>;
}
