type StatCardProps = {
  label: string;
  value: string;
  tone?: "blue" | "red" | "green" | "amber";
};

const tones = {
  blue: "bg-blue-500/10 text-blue-600 dark:text-blue-300",
  red: "bg-red-500/10 text-red-600 dark:text-red-300",
  green: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-300",
  amber: "bg-amber-500/10 text-amber-600 dark:text-amber-300",
};

function StatCard({ label, value, tone = "blue" }: StatCardProps) {
  return (
    <div className="rounded-lg border border-slate-200 bg-white p-4 shadow-sm dark:border-white/10 dark:bg-white/5">
      <p className={`inline-flex rounded-md px-2 py-1 text-xs font-black ${tones[tone]}`}>
        {label}
      </p>
      <p className="mt-4 text-2xl font-black text-slate-950 dark:text-white">
        {value}
      </p>
    </div>
  );
}

export default StatCard;
