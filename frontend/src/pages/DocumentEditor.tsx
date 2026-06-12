import PageHeader from "../components/PageHeader";

const toolbar = ["B", "I", "U", "H1", "List", "Quote", "Link"];

function DocumentEditor() {
  return (
    <div>
      <PageHeader eyebrow="Document Editor" title="Notion-style document editor" description="Draft rich documents with formatting, AI writing support placeholders, summarization, and export controls." />
      <div className="grid gap-5 lg:grid-cols-[1fr_320px]">
        <section className="rounded-lg border border-slate-200 bg-white p-5 dark:border-white/10 dark:bg-white/5">
          <div className="mb-5 flex flex-wrap gap-2 border-b border-slate-200 pb-4 dark:border-white/10">
            {toolbar.map((item) => (
              <button key={item} className="h-10 rounded-lg border border-slate-200 px-3 text-sm font-black dark:border-white/10">
                {item}
              </button>
            ))}
          </div>
          <input className="w-full bg-transparent text-4xl font-black outline-none" defaultValue="Untitled CreateX Document" />
          <textarea className="mt-6 min-h-[520px] w-full resize-none bg-transparent text-base leading-8 text-slate-700 outline-none dark:text-slate-200" defaultValue={"Start writing your document here...\n\nUse the toolbar for rich text formatting and the AI panel for writing assistance."} />
        </section>
        <aside className="space-y-4">
          <div className="rounded-lg border border-slate-200 bg-white p-5 dark:border-white/10 dark:bg-white/5">
            <h2 className="font-black">AI Writing Assistant</h2>
            <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">Placeholder for rewrite, expand, improve tone, and generate section actions.</p>
          </div>
          <div className="rounded-lg border border-slate-200 bg-white p-5 dark:border-white/10 dark:bg-white/5">
            <h2 className="font-black">Summarization</h2>
            <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">Placeholder for concise summary, key points, and action items.</p>
          </div>
          <button className="w-full rounded-lg border border-blue-500 px-4 py-3 text-sm font-black text-blue-600 dark:text-blue-300">Export DOCX</button>
          <button className="w-full rounded-lg bg-blue-600 px-4 py-3 text-sm font-black text-white">Export PDF</button>
        </aside>
      </div>
    </div>
  );
}

export default DocumentEditor;
