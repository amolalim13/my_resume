import { resume } from "./data/resumeData";

export default function Projects() {
  return (
    <div>
      <h2 className="text-xl font-semibold">Projects</h2>
      {resume.projects.map((proj, i) => (
        <div key={i} className="mt-2">
          <h3 className="font-bold">{proj.name}</h3>
          <p>{proj.description}</p>
        </div>
      ))}
    </div>
  );
}