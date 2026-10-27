import { site } from "@/lib/site";

export function Footer() {
  return <footer className="career-footer">
    <div className="container career-footer__inner">
      <p><strong>{site.name}</strong> · {site.role}<br />{site.location} · Предпочитаю удалённую работу</p>
      <div className="career-footer__links">
        <a href={site.githubUrl}>GitHub</a>
        <a href={site.telegramUrl}>Telegram</a>
        <a href="/feed.xml">RSS</a>
      </div>
    </div>
  </footer>;
}
