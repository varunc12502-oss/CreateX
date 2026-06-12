import { NavLink } from "react-router-dom";
import Icon from "./Icon";

type SidebarProps = {
  isDark: boolean;
  onToggleTheme: () => void;
};

const navItems = [
  { label: "Home", path: "/dashboard", icon: "home" },
  { label: "AI Assistant", path: "/dashboard#ai", icon: "ai" },
  { label: "Design", path: "/design-studio", icon: "design" },
  { label: "Resume", path: "/resume-builder", icon: "resume" },
  { label: "PDF", path: "/pdf-workspace", icon: "pdf" },
  { label: "Presentation", path: "/presentation-studio", icon: "presentation" },
  { label: "Document", path: "/document-editor", icon: "document" },
  { label: "Projects", path: "/projects", icon: "folder" },
  { label: "Settings", path: "/settings", icon: "settings" },
] as const;

function Sidebar({ isDark, onToggleTheme }: SidebarProps) {
  return (
    <aside className="hidden min-h-screen w-[244px] shrink-0 border-r border-white/8 bg-[#060B15] px-3 py-4 shadow-2xl shadow-black/40 lg:flex lg:flex-col">
      <NavLink to="/" className="mb-5 flex items-center gap-3 rounded-lg px-2 py-2 hover:bg-white/5">
        <img
          src="/createx-logo.jpeg"
          alt="CreateX"
          className="h-10 w-10 rounded-lg object-cover shadow-lg shadow-red-500/20"
        />
        <span className="text-[24px] font-black tracking-normal text-white">
          Create<span className="text-blue-500">X</span>
        </span>
      </NavLink>

      <div className="mb-3 rounded-lg border border-white/8 bg-white/[0.03] px-3 py-2">
        <p className="text-[11px] font-black uppercase text-slate-500">Workspace</p>
        <p className="mt-1 truncate text-sm font-bold text-slate-200">Personal Studio</p>
      </div>

      <nav className="flex flex-1 flex-col gap-1">
        {navItems.map((item) => (
          <NavLink
            key={item.label}
            to={item.path}
            className={({ isActive }) =>
              [
                "flex items-center gap-3 rounded-lg px-3 py-2.5 text-[14px] font-bold transition",
                isActive
                  ? "border border-blue-400/35 bg-blue-600/30 text-white shadow-lg shadow-blue-700/20"
                  : "text-slate-300 hover:bg-white/7 hover:text-white",
              ].join(" ")
            }
          >
            <span className="grid h-7 w-7 place-items-center text-white">
              <Icon name={item.icon} className="h-5 w-5" />
            </span>
            {item.label}
          </NavLink>
        ))}
      </nav>

      <div className="mt-4 rounded-lg border border-blue-400/15 bg-[#0B1220] p-3 shadow-inner">
        <div className="flex items-center justify-between">
          <p className="text-sm font-bold text-white">Pro Tools</p>
          <span className="rounded-md bg-red-500/15 px-2 py-1 text-[10px] font-black text-red-200">
            NEW
          </span>
        </div>
        <p className="mt-2 text-xs leading-5 text-slate-400">
          Premium exports, AI credits, templates, and team sharing.
        </p>
        <button className="mt-3 w-full rounded-lg bg-blue-600 px-3 py-2 text-sm font-bold text-white shadow-lg shadow-blue-600/20">
          Upgrade Now
        </button>
      </div>

      <button
        type="button"
        onClick={onToggleTheme}
        className="mt-3 flex items-center justify-between rounded-lg border border-white/8 bg-white/[0.03] px-3 py-2.5 text-sm font-bold text-white"
      >
        <span className="flex items-center gap-2">
          <Icon name="moon" className="h-4 w-4 text-blue-200" />
          {isDark ? "Dark Mode" : "Light Mode"}
        </span>
        <span className="relative h-6 w-11 rounded-full bg-blue-600">
          <span className="absolute left-1 top-1 h-4 w-4 rounded-full bg-white transition-all dark:left-6" />
        </span>
      </button>
    </aside>
  );
}

export default Sidebar;
