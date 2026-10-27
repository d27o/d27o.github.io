import { site } from "@/lib/site";
import { experiences } from "@/lib/experience";
import { pageMetadata } from "@/lib/metadata";
import { Stack } from "@/components/Stack";

export const metadata = pageMetadata("Обо мне", "Senior Software Engineer. Опыт в Angara Security и Huawei: продуктовая разработка, TypeScript, качество, производительность и менторство.", "/about/");

export default function Page() {
  return <div className="career container">
    <header className="career__intro">
      <p className="career__eyebrow">Обо мне / {site.name}</p>
      <h1>От продуктовой задачи до работающего решения.</h1>
      <p className="career__lead">{site.role}. Разрабатываю коммерческие веб-продукты, улучшаю интерфейсы и выстраиваю практики качества.</p>
    </header>

    <section aria-labelledby="experience-title">
      <div className="section-heading"><h2 id="experience-title">Коммерческий опыт</h2></div>
      {experiences.map((experience) => <article className="experience-detail" key={experience.id} aria-labelledby={`experience-${experience.id}`}>
        <header>
          <h3 id={`experience-${experience.id}`}>{experience.employer}</h3>
          <p>{experience.period}</p>
          <p>{experience.summary}</p>
        </header>
        <ul>{experience.highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}</ul>
      </article>)}
      <p className="section-note">Описания обобщены: закрытые продукты, заказчики и внутренние материалы не раскрываются.</p>
    </section>

    <section className="portfolio-section" aria-labelledby="approach-title">
      <h2 id="approach-title">Инженерный подход</h2>
      <div className="engineering-approach">
        <div>
          <h3>Работа с задачей целиком</h3>
          <p>Уточняю требования и связываю технические решения с пользовательскими сценариями и целями продукта.</p>
        </div>
        <div>
          <h3>Качество и поддержка</h3>
          <p>Развиваю автоматизацию тестирования, типизацию и код-ревью. Работаю с производительностью и существующим кодом.</p>
        </div>
        <div>
          <h3>Обмен опытом</h3>
          <p>Помогаю коллегам адаптироваться, обучаю стажёров и делюсь практиками, полезными всей команде.</p>
        </div>
      </div>
    </section>

    <section className="stack-section" aria-labelledby="stack-title">
      <h2 id="stack-title">Текущий стек</h2>
      <Stack />
      <p>Vue 3 и TypeScript — интерфейсы, Pinia — управление состоянием, Vitest и Playwright — автоматизированные проверки.</p>
    </section>

    <aside className="career__callout">
      <div>
        <h2>Открыт к предложениям</h2>
        <p>{site.location} · Предпочитаю удалённую работу.<br />Русский — родной, английский — C1.</p>
      </div>
      <a className="career__button" href={`mailto:${site.email}`}>Обсудить роль <span aria-hidden="true">↗</span></a>
    </aside>
  </div>;
}
