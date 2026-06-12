import PageHeader from "../components/PageHeader";

const settings = ["Profile", "Billing", "Team access", "Notifications", "AI preferences", "Security"];

function Settings() {
  return (
    <div>
      <PageHeader eyebrow="Settings" title="Workspace settings" description="Manage account, team, billing, notifications, and CreateX AI preferences." />
      <div className="grid gap-4 md:grid-cols-2">
        {settings.map((setting) => (
          <section key={setting} className="rounded-lg border border-slate-200 bg-white p-5 dark:border-white/10 dark:bg-white/5">
            <h2 className="text-lg font-black">{setting}</h2>
            <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">Placeholder controls for {setting.toLowerCase()}.</p>
          </section>
        ))}
      </div>
    </div>
  );
}

export default Settings;
