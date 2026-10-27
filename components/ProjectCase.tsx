import type { ProjectCase as ProjectCaseData } from "@/lib/projects";

export function ProjectCase({ project }: { project: ProjectCaseData }) {
  return <article className="project-case" aria-labelledby={`case-${project.id}`}>
    <header>
      <p className="eyebrow">{project.id} / {project.category}</p>
      <h3 id={`case-${project.id}`}>{project.title}</h3>
      <p className="project-case__context">{project.context}</p>
    </header>
    <div>
      <p className="project-case__result"><span className="visually-hidden">Результат. </span>{project.result}</p>
      <h4 className="eyebrow project-case__label">Мой вклад</h4>
      {project.contributions.map((contribution) => <p className="project-case__contribution" key={contribution}>{contribution}</p>)}
      {project.details && project.details.length > 0 && <details>
        <summary>Подробнее о работе</summary>
        {project.details.map((detail) => <p key={detail}>{detail}</p>)}
      </details>}
    </div>
  </article>;
}
