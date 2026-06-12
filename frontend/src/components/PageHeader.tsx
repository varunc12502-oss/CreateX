type PageHeaderProps = {
  eyebrow: string;
  title: string;
  description: string;
  action?: string;
};

function PageHeader({ eyebrow, title, description, action }: PageHeaderProps) {
  return (
    <div className="mb-6 flex flex-col gap-4 rounded-lg border border-slate-200 bg-white p-5 shadow-sm dark:border-white/10 dark:bg-white/5 sm:flex-row sm:items-center sm:justify-between">
      <div>
        <p className="text-xs font-black uppercase tracking-normal text-blue-500">
          {eyebrow}
        </p>
        <h1 className="mt-2 text-3xl font-black text-slate-950 dark:text-white">
          {title}
        </h1>
        <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-600 dark:text-slate-300">
          {description}
        </p>
      </div>
      {action ? (
        <button className="rounded-lg bg-blue-600 px-4 py-3 text-sm font-black text-white shadow-lg shadow-blue-600/25">
          {action}
        </button>
      ) : null}
    </div>
  );
}

export default PageHeader;
