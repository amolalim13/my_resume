import { resume } from "./data/resumeData";

export default function Projects() {
  return (
    <div>
      <div className="flex flex-col gap-2">
        <h2 className="text-xl font-semibold text-slate-950 dark:text-white">Projects</h2>
        <p className="text-sm text-slate-600 dark:text-slate-400 max-w-2xl">
          Selected finance-focused mobile products showcasing design, development, migration, and performance work.
        </p>
      </div>

      <div className="mt-6 grid gap-5 md:grid-cols-2">
        {resume.projects.map((proj, i) => (
          <div
            key={i}
            className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-lg shadow-slate-200/50 transition duration-300 hover:-translate-y-1 hover:shadow-xl dark:border-slate-700 dark:bg-slate-800 dark:shadow-slate-950/50"
          >
            <div className="h-1 w-16 rounded-full bg-sky-500 transition-all duration-300 group-hover:w-24" />
            <div className="mt-5 flex flex-col gap-4 px-6 pb-6">
              <div>
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{proj.name}</h3>
                {proj.technologies && (
                  <div className="mt-3 flex flex-wrap gap-2">
                    {proj.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="rounded-full border border-slate-200 bg-slate-100 px-3 py-1 text-xs font-medium uppercase tracking-wide text-slate-700 shadow-sm shadow-slate-100 dark:border-slate-700 dark:bg-slate-700 dark:text-slate-200 dark:shadow-slate-950/40"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                )}
              </div>

              {proj.overview && (
                <div>
                  <h4 className="text-sm font-semibold text-slate-800 dark:text-slate-200">Overview</h4>
                  <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">{proj.overview}</p>
                </div>
              )}

              {proj.features && (
                <div>
                  <h4 className="text-sm font-semibold text-slate-800 dark:text-slate-200">Features</h4>
                  <ul className="mt-2 list-disc space-y-2 pl-5 text-sm text-slate-600 dark:text-slate-300">
                    {proj.features.map((feature, j) => (
                      <li key={j}>{feature}</li>
                    ))}
                  </ul>
                </div>
              )}

              {proj.contributions && (
                <div>
                  <h4 className="text-sm font-semibold text-slate-800 dark:text-slate-200">Contributions</h4>
                  <ul className="mt-2 list-disc space-y-2 pl-5 text-sm text-slate-600 dark:text-slate-300">
                    {proj.contributions.map((item, j) => (
                      <li key={j}>{item}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}