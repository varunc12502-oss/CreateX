import PageHeader from "../components/PageHeader";
import StatCard from "../components/StatCard";

const templates = ["Modern", "Professional", "Minimal"];

function ResumeBuilder() {
  return (
    <div>
      <PageHeader eyebrow="Resume Builder" title="AI Resume Builder" description="Create polished, ATS-friendly resumes from a prompt, an upload, or a blank template." action="Download PDF" />
      <div className="grid gap-5 lg:grid-cols-[0.8fr_1.2fr]">
        <section className="space-y-4">
          <div className="grid gap-4 sm:grid-cols-2">
            <button className="rounded-lg bg-blue-600 p-5 text-left font-black text-white">Build with AI</button>
            <button className="rounded-lg border border-slate-200 bg-white p-5 text-left font-black dark:border-white/10 dark:bg-white/5">Upload Existing Resume</button>
            <button className="rounded-lg border border-slate-200 bg-white p-5 text-left font-black dark:border-white/10 dark:bg-white/5">Start from Scratch</button>
          </div>
          <StatCard label="ATS Score" value="92%" tone="green" />
          <div className="rounded-lg border border-slate-200 bg-white p-5 dark:border-white/10 dark:bg-white/5">
            <h2 className="text-xl font-black">Templates</h2>
            <div className="mt-4 grid gap-3">
              {templates.map((template) => (
                <button key={template} className="rounded-lg border border-slate-200 p-4 text-left font-bold hover:border-blue-500 dark:border-white/10">
                  {template}
                </button>
              ))}
            </div>
          </div>
        </section>
        <section className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm dark:border-white/10 dark:bg-white/5">
          <div className="mx-auto min-h-[680px] max-w-2xl rounded-lg bg-white p-8 text-slate-950 shadow-xl">
            <h2 className="text-3xl font-black">Alex Johnson</h2>
            <p className="mt-2 text-sm font-bold text-blue-600">Software Engineer</p>
            <div className="mt-6 h-2 w-28 rounded bg-slate-900" />
            {["Experience", "Projects", "Education", "Skills"].map((section) => (
              <div key={section} className="mt-8">
                <h3 className="text-sm font-black uppercase">{section}</h3>
                <div className="mt-3 space-y-2">
                  <div className="h-3 rounded bg-slate-200" />
                  <div className="h-3 w-5/6 rounded bg-slate-200" />
                  <div className="h-3 w-3/4 rounded bg-slate-200" />
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

export default ResumeBuilder;
