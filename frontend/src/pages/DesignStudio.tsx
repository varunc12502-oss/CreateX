import PageHeader from "../components/PageHeader";

const templates = ["Product launch poster", "Instagram story", "LinkedIn carousel", "Event flyer", "YouTube thumbnail", "Brand kit"];

function DesignStudio() {
  return (
    <div>
      <PageHeader eyebrow="Design Studio" title="Canva-inspired creative canvas" description="Choose templates, arrange blocks on a canvas, and use AI design suggestion placeholders." />
      <div className="grid gap-5 xl:grid-cols-[300px_1fr_300px]">
        <aside className="rounded-lg border border-slate-200 bg-white p-4 dark:border-white/10 dark:bg-white/5">
          <h2 className="font-black">Template Gallery</h2>
          <div className="mt-4 grid gap-3">
            {templates.map((template) => (
              <button key={template} className="rounded-lg border border-slate-200 p-3 text-left text-sm font-bold dark:border-white/10">
                {template}
              </button>
            ))}
          </div>
        </aside>
        <main className="rounded-lg border border-slate-200 bg-slate-100 p-5 dark:border-white/10 dark:bg-slate-900">
          <div className="mx-auto grid aspect-[4/5] max-h-[720px] place-items-center rounded-lg bg-gradient-to-br from-blue-700 via-slate-950 to-red-600 p-10 text-center text-white shadow-2xl">
            <div>
              <p className="text-sm font-black uppercase text-blue-100">Drag-and-drop canvas</p>
              <h2 className="mt-4 text-5xl font-black">Tech Innovation Summit 2026</h2>
              <p className="mt-5 text-lg text-slate-200">Poster template preview</p>
            </div>
          </div>
        </main>
        <aside className="rounded-lg border border-slate-200 bg-white p-4 dark:border-white/10 dark:bg-white/5">
          <h2 className="font-black">AI Suggestions</h2>
          <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-300">Placeholder for layout, palette, typography, and content suggestions.</p>
          <button className="mt-5 w-full rounded-lg bg-blue-600 px-4 py-3 text-sm font-black text-white">Suggest Design</button>
        </aside>
      </div>
    </div>
  );
}

export default DesignStudio;
