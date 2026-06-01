import { resume } from "./data/resumeData";

export default function Achievements() {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between gap-4">
        <h2 className="text-xl font-semibold text-slate-950 dark:text-white">Achievements</h2>
        <span className="rounded-full bg-sky-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-sky-700 dark:bg-sky-900/40 dark:text-sky-200">
          Career Highlights
        </span>
      </div>
      <ul className="grid gap-3 text-sm text-slate-700 dark:text-slate-300 sm:grid-cols-2">
        {resume.achievements.map((achievement, index) => (
          <li key={index} className="rounded-3xl border border-slate-200/80 bg-slate-50 p-4 shadow-sm shadow-slate-200/50 dark:border-slate-700/80 dark:bg-slate-800 dark:shadow-slate-950/50">
            {achievement}
          </li>
        ))}
      </ul>
    </div>
  );
}
