import { site } from "@/lib/site";

export function Stack() {
  return <ul className="career__tags" aria-label="Текущий стек">
    {site.stack.map((technology) => <li key={technology}>{technology}</li>)}
  </ul>;
}
