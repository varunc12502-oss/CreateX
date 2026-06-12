import { Link } from "react-router-dom";
import type { CurrentUser } from "../hooks/useCurrentUser";
import Icon from "./Icon";

type TopbarProps = {
  user: CurrentUser;
  initials: string;
};

function Topbar({ user, initials }: TopbarProps) {
  return (
    <header className="sticky top-0 z-20 border-b border-white/7 bg-[#030712]/82 px-4 py-3 backdrop-blur-xl sm:px-6">
      <div className="mx-auto flex max-w-[1600px] items-center gap-3">
        <Link to="/" className="flex items-center gap-2 lg:hidden">
          <img
            src="/createx-logo.jpeg"
            alt="CreateX"
            className="h-10 w-10 rounded-full object-cover"
          />
          <span className="text-xl font-black text-white">
            Create<span className="text-blue-500">X</span>
          </span>
        </Link>

        <label className="relative mx-auto hidden w-full max-w-[720px] md:block">
          <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">
            <Icon name="search" className="h-5 w-5" />
          </span>
          <input
            className="h-11 w-full rounded-lg border border-white/10 bg-white/[0.04] pl-11 pr-20 text-sm font-medium text-white outline-none transition placeholder:text-slate-500 focus:border-blue-500 focus:bg-[#08111F] focus:ring-4 focus:ring-blue-500/10"
            placeholder="Search, create or ask AI anything..."
          />
          <span className="absolute right-3 top-1/2 hidden -translate-y-1/2 rounded-md border border-white/10 px-2 py-1 text-xs font-bold text-slate-400 sm:block">
            Ctrl K
          </span>
        </label>

        <div className="ml-auto flex items-center gap-2">
          <button className="relative grid h-10 w-10 place-items-center rounded-lg border border-white/8 bg-white/[0.03] text-slate-200 transition hover:bg-white/8 hover:text-white">
            <Icon name="bell" className="h-5 w-5" />
            <span className="absolute -right-1 -top-1 grid h-5 w-5 place-items-center rounded-full bg-red-500 text-[10px] text-white">
              3
            </span>
          </button>
          <Link
            to="/settings"
            className="grid h-10 w-10 place-items-center rounded-lg border border-white/8 bg-white/[0.03] text-slate-200 transition hover:bg-white/8 hover:text-white"
          >
            <Icon name="settings" className="h-5 w-5" />
          </Link>
          <div className="flex items-center gap-3 rounded-lg border border-white/8 bg-white/[0.03] px-2.5 py-1.5">
            <div className="grid h-8 w-8 place-items-center rounded-full bg-gradient-to-br from-blue-500 to-red-500 text-xs font-black text-white">
              {initials}
            </div>
            <div className="hidden leading-tight sm:block">
              <p className="text-sm font-bold text-white">{user.fullName}</p>
              <p className="text-xs font-semibold text-amber-500">{user.plan}</p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Topbar;
