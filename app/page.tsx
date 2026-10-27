import { site } from "@/lib/site";
import { experiences } from "@/lib/experience";
import { projects } from "@/lib/projects";
import { pageMetadata } from "@/lib/metadata";
import { Stack } from "@/components/Stack";
import { ExperienceSummary } from "@/components/ExperienceSummary";
import { ProjectCase } from "@/components/ProjectCase";

export const metadata = pageMetadata("Проекты", "Software Engineer: коммерческие веб-продукты, обновление интерфейсов, автоматизация тестирования и миграция на TypeScript.", "/");

export default function Page() {
  return <div className="portfolio-home container">
    <section className="portfolio-hero" aria-labelledby="intro-title">
      <p className="eyebrow portfolio-hero__status">Открыт к предложениям · {site.location}</p>
      <div className="portfolio-hero__grid">
        <h1 id="intro-title">{site.role}</h1>
        <div className="portfolio-hero__copy">
          <p className="portfolio-hero__lead">Разрабатываю веб-продукты, которые удобно использовать и развивать.</p>
          <Stack />
          <div className="career__actions">
            <a className="career__button" href={`mailto:${site.email}`}>Обсудить роль <span aria-hidden="true">↗</span></a>
            <a className="text-link" href="/about/">Опыт и подход →</a>
          </div>
        </div>
      </div>
    </section>
    <ExperienceSummary experiences={experiences} />
    <section className="portfolio-section" aria-labelledby="projects-title">
      <div className="section-heading">
        <h2 id="projects-title">Коммерческие проекты</h2>
        <span className="eyebrow section-heading__count" aria-hidden="true">01 — 03</span>
      </div>
      <p className="section-note">Обобщённые кейсы: названия закрытых продуктов, заказчики и внутренние материалы не раскрываются.</p>
      {projects.map((project) => <ProjectCase project={project} key={project.id} />)}
    </section>
    <section className="portfolio-archive" aria-labelledby="archive-title">
      <div>
        <h2 id="archive-title">Ранние работы</h2>
        <p>Архив 2019–2020 · вёрстка и небольшие сайты</p>
      </div>
      <div className="portfolio-archive__links">
        <a href="/boevaya-classica/">LADA 500K <span aria-hidden="true">↗</span></a>
        <a href="/grant-ib/">Грант ИБ <span aria-hidden="true">↗</span></a>
      </div>
    </section>
    <aside className="career__callout">
      <div>
        <h2>Обсудим вашу задачу?</h2>
        <p>Ищу роль {site.role} в продуктовой команде. Интересны развитие веб-продуктов и инженерная самостоятельность.</p>
      </div>
      <a href={`mailto:${site.email}`}>{site.email} <span aria-hidden="true">↗</span></a>
    </aside>
  </div>;
}
