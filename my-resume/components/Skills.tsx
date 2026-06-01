import { resume } from "./data/resumeData";

export default function Skills() {
  return (
    <div>
      <h2 className="text-xl font-semibold text-slate-950 dark:text-white">Technical Skills</h2>
      <div className="mt-4 space-y-4">
        {Object.entries(resume.technicalSkills).map(([category, skills]) => (
          <div key={category}>
            <h3 className="text-sm font-semibold text-slate-700 dark:text-slate-300">{category}</h3>
            <ul className="flex gap-2 flex-wrap mt-2">
              {skills.map((skill, i) => (
                <li key={i} className="bg-slate-100 px-3 py-1 rounded text-sm text-slate-700 dark:bg-slate-700 dark:text-slate-200">
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}