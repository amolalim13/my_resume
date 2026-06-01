import { resume } from "./data/resumeData";

export default function Experience() {
  return (
    <div>
      <h2 className="text-xl font-semibold text-slate-950 dark:text-white">Experience</h2>
      {resume.experience.map((exp, i) => (
        <div key={i} className="mt-2">
          <h3 className="font-bold text-slate-950 dark:text-white">{exp.role} - {exp.company}</h3>
          <p className="text-sm text-slate-600 dark:text-slate-400">{exp.duration}</p>
        </div>
      ))}
    </div>
  );
}