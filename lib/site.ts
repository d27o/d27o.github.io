export const site = {
  name: "d27o",
  title: "d27o — Senior Software Engineer",
  role: "Senior Software Engineer",
  description: "Software Engineer: Vue 3, TypeScript, Pinia, Vitest и Playwright. Коммерческие веб-продукты, надёжные интерфейсы и автоматизация тестирования.",
  url: "https://d27o.github.io",
  email: "kalugin.d27o@gmail.com",
  location: "Москва",
  githubUsername: "d27o",
  githubUrl: "https://github.com/d27o",
  telegramUrl: "https://t.me/d27odev",
  stack: ["Vue 3", "TypeScript", "Pinia", "Vitest", "Playwright"],
} as const;

export const navigation = [
  { label: "Проекты", href: "/" },
  { label: "Обо мне", href: "/about/" },
  { label: "Блог", href: "/blog/" },
  { label: "Контакты", href: "/contact/" },
] as const;
