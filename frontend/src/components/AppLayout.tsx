import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";
import { useCurrentUser } from "../hooks/useCurrentUser";
import { useTheme } from "../hooks/useTheme";

function AppLayout() {
  const { isDark, toggleTheme } = useTheme();
  const currentUser = useCurrentUser();

  return (
    <div className="min-h-screen bg-[#030712] text-white">
      <div className="flex">
        <Sidebar isDark={isDark} onToggleTheme={toggleTheme} />
        <main className="min-w-0 flex-1 bg-[radial-gradient(circle_at_top_left,rgba(37,99,235,0.12),transparent_34%),linear-gradient(180deg,#050A12_0%,#030712_52%,#020617_100%)]">
          <Topbar user={currentUser.user} initials={currentUser.initials} />
          <div className="mx-auto max-w-[1600px] px-4 py-5 sm:px-6">
            <Outlet context={currentUser} />
          </div>
        </main>
      </div>
    </div>
  );
}

export default AppLayout;
