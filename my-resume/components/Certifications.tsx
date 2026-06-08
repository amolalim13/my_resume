import { resume } from "./data/resumeData";

export default function Certifications() {
  return (
    <div className="space-y-5">
      <div className="flex items-center justify-between gap-4">
        <h2 className="text-xl font-semibold text-slate-950 dark:text-white">Certifications</h2>
        <span className="rounded-full bg-sky-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-sky-700 dark:bg-sky-900 dark:text-sky-200">
          Verified Credentials
        </span>
      </div>
      <div className="space-y-4">
        {resume.certifications.map((cert, index) => (
          <div key={index} className="rounded-3xl border border-slate-200/80 bg-slate-50 p-5 shadow-sm shadow-slate-200/50 dark:border-slate-700/80 dark:bg-slate-800 dark:shadow-slate-950/50">
            <h3 className="text-lg font-semibold text-slate-950 dark:text-white">{cert.title}</h3>
            <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">{cert.provider}</p>
            <a
              href={cert.url}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-block text-sm font-medium text-sky-600 underline transition-colors duration-150 hover:text-sky-700 dark:text-sky-300 dark:hover:text-sky-200"
            >
              View credential
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
