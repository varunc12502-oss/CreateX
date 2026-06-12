import { Link } from "react-router-dom";

const highlights = ["AI resumes", "PPT generator", "PDF tools", "Docs", "Designs"];

function Landing() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <header className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
        <Link to="/" className="flex items-center gap-3">
          <span className="grid h-11 w-11 place-items-center rounded-lg bg-gradient-to-br from-red-600 via-slate-950 to-blue-500 font-black">
            CX
          </span>
          <span className="text-2xl font-black">
            Create<span className="text-blue-500">X</span>
          </span>
        </Link>
        <nav className="flex items-center gap-3">
          <Link className="rounded-lg px-4 py-2 text-sm font-bold text-slate-300" to="/login">
            Login
          </Link>
          <Link className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-black text-white" to="/signup">
            Start Free
          </Link>
        </nav>
      </header>

      <main className="relative mx-auto grid min-h-[calc(100vh-84px)] max-w-7xl items-center gap-8 px-6 pb-16 lg:grid-cols-[1fr_0.9fr]">
        <section>
          <p className="mb-4 inline-flex rounded-lg border border-blue-400/30 bg-blue-500/10 px-3 py-2 text-sm font-black text-blue-200">
            One creative AI workspace
          </p>
          <h1 className="max-w-4xl text-5xl font-black leading-tight sm:text-6xl">
            CreateX
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-300">
            Build resumes, presentations, PDFs, documents, and visual designs
            from one premium dashboard made for fast creative work.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link className="rounded-lg bg-blue-600 px-5 py-3 text-sm font-black text-white shadow-lg shadow-blue-600/30" to="/dashboard">
              Open Dashboard
            </Link>
            <Link className="rounded-lg border border-white/15 px-5 py-3 text-sm font-black text-white" to="/signup">
              Create Account
            </Link>
          </div>
          <div className="mt-10 flex flex-wrap gap-2">
            {highlights.map((item) => (
              <span key={item} className="rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm font-bold text-slate-300">
                {item}
              </span>
            ))}
          </div>
        </section>

        <section className="rounded-lg border border-white/10 bg-white/5 p-4 shadow-2xl shadow-blue-950/40">
          <div className="rounded-lg bg-slate-900 p-4">
            <div className="mb-4 h-12 rounded-lg border border-white/10 bg-slate-950" />
            <div className="grid grid-cols-3 gap-3">
              {highlights.slice(0, 3).map((item) => (
                <div key={item} className="h-28 rounded-lg border border-white/10 bg-gradient-to-br from-blue-500/20 to-red-500/10 p-3 text-sm font-black">
                  {item}
                </div>
              ))}
            </div>
            <div className="mt-3 h-48 rounded-lg border border-white/10 bg-gradient-to-br from-slate-800 via-slate-950 to-blue-950" />
          </div>
        </section>
      </main>
    </div>
  );
}

export default Landing;
