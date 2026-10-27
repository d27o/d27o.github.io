import { site } from "@/lib/site";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata("Контакты", "Связаться с d27o: Senior Software Engineer, Vue 3 и TypeScript. Открыт к предложениям работы.", "/contact/");

export default function Page() {
  return <section className="career container" aria-labelledby="contact-title">
    <header className="career__intro">
      <p className="career__eyebrow">Контакты</p>
      <h1 id="contact-title">Давайте знакомиться.</h1>
      <p className="career__lead">Открыт к предложениям на роль {site.role}. Расскажите о продукте, задачах команды и формате работы.</p>
    </header>
    <div className="contact-list">
      <a className="contact-link" href={`mailto:${site.email}`}>
        <span className="eyebrow">Email</span><strong>{site.email}</strong><span aria-hidden="true">↗</span>
      </a>
      <a className="contact-link" href={site.githubUrl}>
        <span className="eyebrow">GitHub</span><strong>{site.githubUsername}</strong><span aria-hidden="true">↗</span>
      </a>
      <a className="contact-link" href={site.telegramUrl}>
        <span className="eyebrow">Telegram</span><strong>@d27odev</strong><span aria-hidden="true">↗</span>
      </a>
    </div>
    <p className="contact-note">{site.location} · Предпочитаю удалённую работу<br />Русский — родной, английский — C1.</p>
  </section>;
}
