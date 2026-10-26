import { site } from "@/lib/site";
import { pageMetadata } from "@/lib/metadata";
import { Stack } from "@/components/Stack";

export const metadata = pageMetadata("Проекты", "Software Engineer: коммерческие веб-продукты, обновление интерфейсов, автоматизация тестирования и миграция на TypeScript.", "/");

export default function Page() {
  return (
<section className="career container" aria-labelledby="intro-title">
  <header className="career__intro">
    <p className="career__eyebrow">d27o · Открыт к предложениям</p>
    <h1 id="intro-title">{site.role}</h1>
    <p className="career__lead">Разрабатываю веб-продукты, которые удобно использовать и развивать.</p>
    <p>Проектирую и реализую функциональность, улучшаю производительность интерфейсов,
      выстраиваю автоматизацию тестирования и помогаю команде выпускать изменения увереннее.</p>
    <Stack />
    <div className="career__actions">
      <a className="career__button" href={`mailto:${site.email}`}>Обсудить вакансию</a>
      <a href="/about/">Опыт и подход к работе →</a>
    </div>
  </header>

  <section className="career__section" aria-labelledby="projects-title">
    <h2 id="projects-title">Коммерческие проекты</h2>
    <p className="career__muted">Ниже — обобщённые описания моей работы. Названия закрытых продуктов,
      заказчики, внутренние материалы и детали реализации не публикуются из-за обязательств конфиденциальности.</p>
    <div className="career__grid">
      <article className="career__card">
        <p className="career__eyebrow">Продуктовая разработка</p>
        <h3>Развитие корпоративных веб-продуктов</h3>
        <p><strong>Задача.</strong> Развивать функциональность и обновить устаревший интерфейс.</p>
        <p><strong>Мой вклад.</strong> Проектировал и разрабатывал возможности двух продуктов,
          переработал UI и пользовательские сценарии, устранял существовавшие ошибки.</p>
        <p><strong>Результат.</strong> Обновлённый интерфейс и процесс автоматизированной проверки
          новой функциональности. Совместно с QA выстроил пирамиду тестирования
          и внедрил тесты внешнего вида интерфейса.</p>
      </article>
      <article className="career__card">
        <p className="career__eyebrow">Производительность и доставка</p>
        <h3>Сервис визуализации данных</h3>
        <p><strong>Задача.</strong> Создать сервис отображения данных и обеспечить его дальнейшее развитие.</p>
        <p><strong>Мой вклад.</strong> Спроектировал и разработал сервис с нуля,
          оптимизировал первую отрисовку, устранил утечки памяти и организовал сбор продуктовых метрик.</p>
        <p><strong>Результат.</strong> Ускорение отображения интерфейса и устранение выявленных утечек памяти.
          Настроил в Jenkins запуск юнит-тестов, линтинг, сборку и выкладку на тестовый стенд.</p>
      </article>
      <article className="career__card">
        <p className="career__eyebrow">Типизация и сопровождаемость</p>
        <h3>Сервис с электронными документами</h3>
        <p><strong>Задача.</strong> Развивать продуктовую функциональность и упростить поддержку приложения.</p>
        <p><strong>Мой вклад.</strong> Разработал большую часть функциональности сервиса,
          выполнил миграцию с JavaScript на TypeScript и внедрил электронную подпись.
          Перенёс управление состоянием с самописного решения на Vuex.</p>
        <p><strong>Результат.</strong> Система типов позволила начинать разработку до готовности backend.
          Внедрил единый процесс код-ревью и делился с командой практиками работы с GraphQL.</p>
      </article>
    </div>
  </section>

  <section className="career__section" aria-labelledby="archive-title">
    <h2 id="archive-title">Ранние работы · архив 2019–2020</h2>
    <p>Ранние примеры вёрстки и небольших сайтов. Актуальный инженерный опыт описан выше.</p>
    <ul className="career__archive">
      <li><a href="/boevaya-classica/">LADA 500K</a> — промостраница.</li>
      <li><a href="/grant-ib/">Грант ИБ</a> — страница конкурса.</li>
    </ul>
  </section>
  <aside className="career__callout">
    <h2>Обсудим вашу задачу?</h2>
    <p>Ищу роль {site.role} в продуктовой команде.
      Мне интересны развитие веб-продуктов, качество и инженерная самостоятельность.</p>
    <a href={`mailto:${site.email}`}>{site.email}</a>
  </aside>
</section>
  );
}
