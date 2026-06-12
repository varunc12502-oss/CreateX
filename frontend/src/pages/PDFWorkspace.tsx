import PageHeader from "../components/PageHeader";

const tools = ["Upload PDFs", "Merge PDFs", "Split PDFs", "Compress PDFs", "Rearrange pages", "PDF to DOCX", "DOCX to PDF", "Download processed files"];

function PDFWorkspace() {
  return (
    <div>
      <PageHeader eyebrow="PDF Workspace" title="Process every PDF workflow" description="Upload, organize, convert, compress, and download documents from one workspace." />
      <div className="grid gap-5 lg:grid-cols-[1fr_360px]">
        <section className="rounded-lg border border-dashed border-blue-400 bg-blue-500/10 p-8 text-center">
          <p className="text-2xl font-black">Drop PDFs here</p>
          <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">Upload files to merge, split, rearrange, compress, or convert.</p>
          <button className="mt-5 rounded-lg bg-blue-600 px-5 py-3 text-sm font-black text-white">Choose Files</button>
          <div className="mt-8 grid gap-3 sm:grid-cols-3">
            {[1, 2, 3].map((page) => (
              <div key={page} className="h-48 rounded-lg border border-slate-200 bg-white p-4 text-left shadow-sm dark:border-white/10 dark:bg-white/5">
                <span className="text-xs font-black text-red-500">PDF</span>
                <p className="mt-20 font-bold">Page {page}</p>
              </div>
            ))}
          </div>
        </section>
        <aside className="rounded-lg border border-slate-200 bg-white p-5 dark:border-white/10 dark:bg-white/5">
          <h2 className="text-xl font-black">Tools</h2>
          <div className="mt-4 grid gap-3">
            {tools.map((tool) => (
              <button key={tool} className="rounded-lg border border-slate-200 px-4 py-3 text-left text-sm font-bold hover:border-blue-500 dark:border-white/10">
                {tool}
              </button>
            ))}
          </div>
        </aside>
      </div>
    </div>
  );
}

export default PDFWorkspace;
