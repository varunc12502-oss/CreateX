import { Link, useOutletContext } from "react-router-dom";
import Icon from "../components/Icon";
import type { CurrentUser } from "../hooks/useCurrentUser";
import type { Project } from "../types";

const quickActions = [
  { title: "AI Assistant", body: "Generate, rewrite, summarize", path: "/dashboard#ai", color: "from-blue-600 to-blue-400", icon: "ai" },
  { title: "Design", body: "Posters, social, brand kits", path: "/design-studio", color: "from-violet-600 to-fuchsia-500", icon: "design" },
  { title: "Resume", body: "ATS resumes and profiles", path: "/resume-builder", color: "from-emerald-500 to-green-400", icon: "resume" },
  { title: "PDF", body: "Merge, split, compress, convert", path: "/pdf-workspace", color: "from-red-600 to-rose-400", icon: "pdf" },
  { title: "PPT Creator", body: "Generate editable slide decks", path: "/presentation-studio", color: "from-orange-500 to-amber-400", icon: "presentation" },
  { title: "Document", body: "Docs, reports, exports", path: "/document-editor", color: "from-blue-600 to-sky-400", icon: "document" },
] as const;

const projects: Project[] = [
  { id: "1", title: "Software Engineer Resume", type: "resume", updatedAt: "2 mins ago", meta: "ATS 92%" },
  { id: "2", title: "ML Fundamentals PPT", type: "presentation", updatedAt: "1 hour ago", meta: "12 slides" },
  { id: "3", title: "Tech Summit Poster", type: "design", updatedAt: "Yesterday", meta: "Poster" },
  { id: "4", title: "AI in Healthcare Paper", type: "pdf", updatedAt: "2 days ago", meta: "PDF" },
  { id: "5", title: "Smart Irrigation Report", type: "document", updatedAt: "3 days ago", meta: "DOCX" },
  { id: "6", title: "Startup Pitch Outline", type: "presentation", updatedAt: "4 days ago", meta: "8 slides" },
];

const stats = [
  { label: "Projects", value: "24", delta: "+6 this week" },
  { label: "AI credits", value: "8.4k", delta: "Ready" },
  { label: "Exports", value: "132", delta: "PDF, PPTX, DOCX" },
  { label: "Storage", value: "41%", delta: "12.4 GB used" },
];

const activity = [
  "Resume optimized for ATS scoring",
  "Presentation theme updated",
  "PDF compressed by 62%",
  "Document summary generated",
];

const templates = ["Investor pitch", "Academic report", "Instagram post", "Research PDF", "Minimal resume"];

function Dashboard() {
  const { firstName } = useOutletContext<{ firstName: string; user: CurrentUser }>();

  return (
    <div className="grid gap-5 pb-20 xl:grid-cols-[minmax(0,1fr)_330px]">
      <section className="min-w-0 space-y-5">
        <div className="flex flex-col gap-4 rounded-xl border border-white/8 bg-white/[0.035] p-4 shadow-2xl shadow-black/20 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-blue-400/20 bg-blue-500/10 px-3 py-1 text-xs font-black uppercase text-blue-200">
              <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_14px_rgba(52,211,153,0.9)]" />
              CreateX Studio Online
            </div>
            <h1 className="text-3xl font-black leading-tight text-white sm:text-4xl">
              Welcome back, {firstName}
            </h1>
            <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-400">
              Create, edit, export, and manage every content workflow from one focused workspace.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-2 sm:grid-cols-4 lg:min-w-[520px]">
            {stats.map((stat) => (
              <div key={stat.label} className="rounded-lg border border-white/8 bg-[#07101F] p-3">
                <p className="text-[11px] font-black uppercase text-slate-500">{stat.label}</p>
                <p className="mt-1 text-2xl font-black text-white">{stat.value}</p>
                <p className="mt-1 truncate text-xs font-semibold text-slate-400">{stat.delta}</p>
              </div>
            ))}
          </div>
        </div>

        <section id="ai" className="rounded-xl border border-blue-500/35 bg-[#08111F] p-3 shadow-[0_0_34px_rgba(37,99,235,0.11)]">
          <div className="flex flex-col gap-3 lg:flex-row lg:items-center">
            <div className="flex flex-1 items-center gap-3 rounded-lg border border-white/8 bg-[#030712] px-3">
              <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-blue-600 text-white shadow-lg shadow-blue-600/30">
                <Icon name="ai" className="h-5 w-5" />
              </span>
              <input
                className="h-14 flex-1 bg-transparent text-sm font-medium text-white outline-none placeholder:text-slate-500"
                placeholder="Ask CreateX AI to create a resume, PPT, PDF workflow, poster, or document..."
              />
              <button className="grid h-10 w-10 place-items-center rounded-lg bg-blue-600 text-white transition hover:bg-blue-500">
                <Icon name="send" className="h-5 w-5" />
              </button>
            </div>
            <div className="flex flex-wrap gap-2">
              {["Resume", "PPT", "Poster", "PDF", "Report"].map((chip) => (
                <button key={chip} className="rounded-lg border border-white/8 bg-white/[0.04] px-3 py-2 text-xs font-black text-slate-300 transition hover:border-blue-400/40 hover:text-white">
                  {chip}
                </button>
              ))}
            </div>
          </div>
        </section>

        <section className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-6">
          {quickActions.map((item) => (
            <Link
              key={item.title}
              to={item.path}
              className="group rounded-xl border border-white/8 bg-[#0A1220] p-4 shadow-lg shadow-black/10 transition hover:-translate-y-0.5 hover:border-blue-500/45 hover:bg-[#101D32]"
            >
              <div className="flex items-center justify-between">
                <span className={`grid h-11 w-11 place-items-center rounded-lg bg-gradient-to-br ${item.color} text-white shadow-lg shadow-black/20`}>
                  <Icon name={item.icon} className="h-5 w-5" />
                </span>
                <Icon name="chevron" className="h-4 w-4 text-slate-500 transition group-hover:translate-x-1 group-hover:text-blue-300" />
              </div>
              <h2 className="mt-4 text-base font-black text-white">{item.title}</h2>
              <p className="mt-1 text-xs leading-5 text-slate-400">{item.body}</p>
            </Link>
          ))}
        </section>

        <section className="rounded-xl border border-white/8 bg-[#07101D] p-4 shadow-2xl shadow-black/20">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h2 className="text-xl font-black text-white">Workspace</h2>
              <p className="mt-1 text-sm text-slate-500">Recent files and editable creative assets</p>
            </div>
            <div className="flex flex-wrap gap-1.5">
              {["All", "AI", "Design", "Resume", "PDF", "PPT", "Docs"].map((tab) => (
                <button key={tab} className="rounded-lg px-3 py-2 text-xs font-black text-slate-400 transition first:bg-blue-600 first:text-white hover:bg-white/8 hover:text-white">
                  {tab}
                </button>
              ))}
            </div>
          </div>
          <div className="mt-4 grid gap-3 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-6">
            {projects.map((project, index) => (
              <article key={project.id} className="overflow-hidden rounded-xl border border-white/8 bg-[#0B1424] transition hover:border-blue-400/35">
                <div className={`h-28 p-3 ${index % 3 === 0 ? "bg-gradient-to-br from-slate-100 to-blue-100" : index % 3 === 1 ? "bg-gradient-to-br from-slate-900 via-blue-950 to-fuchsia-950" : "bg-gradient-to-br from-violet-700 via-slate-950 to-red-600"}`}>
                  <span className="rounded-md bg-white/90 px-2 py-1 text-[10px] font-black uppercase text-blue-700">
                    {project.type}
                  </span>
                </div>
                <div className="p-3">
                  <h3 className="line-clamp-2 min-h-10 text-sm font-black text-white">{project.title}</h3>
                  <div className="mt-3 flex items-center justify-between gap-2 text-xs">
                    <span className="truncate text-slate-500">{project.updatedAt}</span>
                    <span className="shrink-0 font-black text-slate-300">{project.meta}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>
      </section>

      <aside className="space-y-5">
        <section className="rounded-xl border border-white/8 bg-[#07101D] p-4 shadow-2xl shadow-black/20">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-black text-white">AI Queue</h2>
            <span className="rounded-full bg-emerald-500/10 px-2 py-1 text-xs font-black text-emerald-300">Live</span>
          </div>
          <div className="mt-4 space-y-3">
            {activity.map((item, index) => (
              <div key={item} className="flex gap-3 rounded-lg border border-white/7 bg-white/[0.03] p-3">
                <span className="grid h-7 w-7 shrink-0 place-items-center rounded-lg bg-blue-500/15 text-xs font-black text-blue-200">
                  {index + 1}
                </span>
                <div>
                  <p className="text-sm font-bold text-slate-200">{item}</p>
                  <p className="mt-1 text-xs text-slate-500">Completed just now</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="rounded-xl border border-white/8 bg-[#07101D] p-4">
          <h2 className="text-lg font-black text-white">Smart Templates</h2>
          <div className="mt-4 grid gap-2">
            {templates.map((template) => (
              <button key={template} className="flex items-center justify-between rounded-lg border border-white/7 bg-white/[0.03] px-3 py-2.5 text-left text-sm font-bold text-slate-300 transition hover:border-blue-400/35 hover:text-white">
                {template}
                <Icon name="chevron" className="h-4 w-4 text-slate-500" />
              </button>
            ))}
          </div>
        </section>

        <section className="rounded-xl border border-blue-400/20 bg-gradient-to-br from-blue-600/18 via-[#07101D] to-red-500/12 p-4">
          <h2 className="text-lg font-black text-white">CreateX Pro</h2>
          <p className="mt-2 text-sm leading-6 text-slate-300">
            Unlock unlimited exports, premium templates, brand kits, and advanced AI generation.
          </p>
          <button className="mt-4 w-full rounded-lg bg-white px-4 py-2.5 text-sm font-black text-slate-950">
            Upgrade Workspace
          </button>
        </section>
      </aside>

      <button className="fixed bottom-5 right-5 flex items-center gap-3 rounded-xl bg-blue-600 px-5 py-3 text-sm font-black text-white shadow-2xl shadow-blue-600/40 transition hover:bg-blue-500">
        <Icon name="ai" className="h-5 w-5" />
        CreateX AI
      </button>
    </div>
  );
}

export default Dashboard;
