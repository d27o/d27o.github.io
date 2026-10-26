import { site } from "@/lib/site";

export function Footer() {
  return <footer className="career-footer"><div className="container">
    <p><strong>{site.name} · {site.role}</strong></p>
    <p>г. {site.location} · Открыт к предложениям</p>
    <div className="career__actions">
      <a href={`mailto:${site.email}`}>{site.email}</a>
      <a href={site.githubUrl}>GitHub</a>
      <a href={site.telegramUrl}>Telegram</a>
      <a href="/feed.xml">RSS</a>
    </div>
  </div></footer>;
}
