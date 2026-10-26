import { site } from "@/lib/site";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata("Контакты", "Связаться с d27o: Senior Software Engineer, Vue 3 и TypeScript. Открыт к предложениям работы.", "/contact/");

export default function Page() {
  return (
<section className="career container" aria-labelledby="contact-title">
  <header className="career__intro">
    <p className="career__eyebrow">Контакты</p>
    <h1 id="contact-title">Давайте знакомиться</h1>
    <p className="career__lead">Открыт к предложениям на роль {site.role}.</p>
    <p>Расскажите о продукте, задачах команды и формате работы.</p>
    <div className="career__actions">
      <a className="career__button" href={`mailto:${site.email}`}>{site.email}</a>
      <a href={site.githubUrl}>GitHub · {site.githubUsername}</a>
      <a href="https://t.me/d27odev">Telegram · @d27odev</a>
    </div>
    <p className="career__muted">{site.location} · Предпочитаю удалённую работу · Русский / English C1</p>
  </header>
</section>
  );
}
