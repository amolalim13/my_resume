import { resume } from "./data/resumeData";

export default function Skills() {
  return (
    <div>
      <h2 className="text-xl font-semibold">Skills</h2>
      <ul className="flex gap-2 flex-wrap mt-2">
        {resume.skills.map((skill, i) => (
          <li key={i} className="bg-gray-200 px-3 py-1 rounded">
            {skill}
          </li>
        ))}
      </ul>
    </div>
  );
}