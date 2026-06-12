import PageHeader from "../components/PageHeader";

const slides = ["Title", "Problem", "Solution", "Market", "Roadmap"];
const themes = ["Midnight", "Clean", "Vivid", "Boardroom"];

function PresentationStudio() {
  return (
    <div>
      <PageHeader eyebrow="Presentation Studio" title="PPT Generator and Presentation Creator" description="Turn a topic into editable slides, select a visual theme, and export to PPTX or PDF." />
      <div className="grid gap-5 xl:grid-cols-[320px_1fr_280px]">
        <aside className="rounded-lg border border-slate-200 bg-white p-4 dark:border-white/10 dark:bg-white/5">
          <input className="h-12 w-full rounded-lg border border-slate-200 bg-slate-50 px-4 text-sm outline-none focus:border-blue-500 dark:border-white/10 dark:bg-slate-950" placeholder="Enter presentation topic" />
          <button className="mt-3 w-full rounded-lg bg-blue-600 px-4 py-3 text-sm font-black text-white">Generate Presentation</button>
          <div className="mt-5 space-y-2">
            {slides.map((slide, index) => (
              <button key={slide} className="w-full rounded-lg border border-slate-200 p-3 text-left text-sm font-bold dark:border-white/10">
                {index + 1}. {slide}
              </button>
            ))}
          </div>
        </aside>
        <main className="rounded-lg border border-slate-200 bg-white p-5 dark:border-white/10 dark:bg-white/5">
          <div className="aspect-video rounded-lg bg-gradient-to-br from-slate-950 via-blue-950 to-fuchsia-950 p-10 text-white shadow-xl">
            <p className="text-sm font-black uppercase text-blue-200">Editable slide</p>
            <h2 className="mt-16 max-w-2xl text-5xl font-black">Machine Learning Fundamentals</h2>
            <p className="mt-4 max-w-xl text-lg text-slate-300">A generated deck outline with editable blocks, visual hierarchy, and export-ready structure.</p>
          </div>
        </main>
        <aside className="rounded-lg border border-slate-200 bg-white p-4 dark:border-white/10 dark:bg-white/5">
          <h2 className="font-black">Theme Selection</h2>
          <div className="mt-4 grid gap-3">
            {themes.map((theme) => (
              <button key={theme} className="rounded-lg border border-slate-200 p-3 text-left text-sm font-bold dark:border-white/10">{theme}</button>
            ))}
          </div>
          <button className="mt-5 w-full rounded-lg border border-blue-500 px-4 py-3 text-sm font-black text-blue-600 dark:text-blue-300">Export PPTX</button>
          <button className="mt-3 w-full rounded-lg bg-blue-600 px-4 py-3 text-sm font-black text-white">Export PDF</button>
        </aside>
      </div>
    </div>
  );
}

export default PresentationStudio;
