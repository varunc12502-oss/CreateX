import PageHeader from "../components/PageHeader";
import type { Project } from "../types";

const projects: Project[] = [
  { id: "1", title: "Software Engineer Resume", type: "resume", updatedAt: "2 mins ago", meta: "92% ATS" },
  { id: "2", title: "ML Fundamentals PPT", type: "presentation", updatedAt: "1 hour ago", meta: "12 slides" },
  { id: "3", title: "Tech Summit Poster", type: "design", updatedAt: "Yesterday", meta: "Poster" },
  { id: "4", title: "Healthcare AI Paper", type: "pdf", updatedAt: "2 days ago", meta: "PDF" },
];

function Projects() {
  return (
    <div>
      <PageHeader eyebrow="Projects" title="All CreateX projects" description="Browse, sort, and reopen your resumes, presentations, PDFs, docs, and designs." action="New Project" />
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {projects.map((project) => (
          <article key={project.id} className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm dark:border-white/10 dark:bg-white/5">
            <p className="text-xs font-black uppercase text-blue-500">{project.type}</p>
            <h2 className="mt-4 text-lg font-black">{project.title}</h2>
            <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">{project.updatedAt}</p>
            <p className="mt-6 text-sm font-bold">{project.meta}</p>
          </article>
        ))}
      </div>
    </div>
  );
}

export default Projects;
