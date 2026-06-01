import { resume } from "./data/resumeData";

export default function Header() {
  return (
    <div className="space-y-5">
      <div className="space-y-2">
        <h1 className="text-4xl font-bold tracking-tight text-slate-950 dark:text-white">{resume.name}</h1>
        <p className="text-sm uppercase tracking-[0.24em] text-sky-600">{resume.title}</p>
      </div>
      <div className="rounded-3xl border border-slate-200/80 bg-sky-50 p-4 text-sm text-slate-700 dark:border-slate-700/80 dark:bg-slate-800 dark:text-slate-300">
        <p>{resume.email}</p>
        <p>{resume.location}</p>
      </div>
    </div>
  );
}