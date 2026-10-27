import type { Experience } from "@/lib/experience";

export function ExperienceSummary({ experiences }: { experiences: readonly Experience[] }) {
  return <section className="experience-summary" aria-labelledby="summary-title">
    <h2 id="summary-title">Коммерческий опыт</h2>
    {experiences.map((experience) => <div key={experience.id}>
      <h3>{experience.employer}</h3>
      <p>{experience.period}</p>
    </div>)}
  </section>;
}
