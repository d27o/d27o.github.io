import Link from "next/link";

export default function NotFound() {
  return <section className="career container"><header className="career__intro">
    <p className="career__eyebrow">Страница не найдена</p><h1>404</h1>
    <p>Возможно, ссылка устарела. Проекты и контакты доступны на главной.</p>
    <Link href="/">Вернуться на главную</Link>
  </header></section>;
}
