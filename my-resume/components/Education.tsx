import { resume } from "./data/resumeData";

export default function Education() {
  return (
    <div className="space-y-5">
      <div className="flex items-center justify-between gap-4">
        <h2 className="text-xl font-semibold text-slate-950 dark:text-white">Education</h2>
        <span className="rounded-full bg-sky-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-sky-700 dark:bg-sky-900 dark:text-sky-200">
          Academic Background
        </span>
      </div>
      <div className="space-y-4">
        {resume.education.map((edu, index) => (
          <div key={index} className="rounded-3xl border border-slate-200/80 bg-slate-50 p-5 shadow-sm shadow-slate-200/50 dark:border-slate-700/80 dark:bg-slate-800 dark:shadow-slate-950/50">
            <h3 className="text-lg font-semibold text-slate-950 dark:text-white">{edu.degree}</h3>
            <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">{edu.institution}</p>
            <p className="mt-2 text-sm font-medium text-slate-700 dark:text-slate-300">{edu.score}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
