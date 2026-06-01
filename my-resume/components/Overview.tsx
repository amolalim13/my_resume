import { resume } from "./data/resumeData";

export default function Overview() {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between gap-4">
        <h2 className="text-xl font-semibold text-slate-950 dark:text-white">Overview</h2>
        <span className="rounded-full bg-sky-100 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-sky-700 dark:bg-sky-900/40 dark:text-sky-200">
          Profile Summary
        </span>
      </div>
      <p className="leading-7 text-slate-700 dark:text-slate-300">
        {resume.overview}
      </p>
    </div>
  );
}
