import type { Project } from "@/data/site";

type ProjectsProps = {
  projects: Project[];
};

export function Projects({ projects }: ProjectsProps) {
  return (
    <section className="space-y-6 border-b border-zinc-200 pb-10">
      <h2 className="text-2xl font-semibold tracking-tight text-zinc-950">Projects</h2>
      <ul className="grid gap-6 sm:grid-cols-2">
        {projects.map((project) => (
          <li key={project.title} className="space-y-3 rounded-lg border border-zinc-200 p-5">
            <h3 className="text-lg font-medium text-zinc-950">
              <a
                href={project.href}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-zinc-700"
              >
                {project.title}
              </a>
            </h3>
            <p className="text-sm leading-7 text-zinc-600">{project.description}</p>
            {project.technologies && project.technologies.length > 0 ? (
              <p className="text-xs uppercase tracking-[0.18em] text-zinc-500">
                {project.technologies.join(" · ")}
              </p>
            ) : null}
          </li>
        ))}
      </ul>
    </section>
  );
}
