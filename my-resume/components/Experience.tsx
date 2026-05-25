import { resume } from "./data/resumeData";

export default function Experience() {
  return (
    <div>
      <h2 className="text-xl font-semibold">Experience</h2>
      {resume.experience.map((exp, i) => (
        <div key={i} className="mt-2">
          <h3 className="font-bold">{exp.role} - {exp.company}</h3>
          <p className="text-sm text-gray-500">{exp.duration}</p>
        </div>
      ))}
    </div>
  );
}