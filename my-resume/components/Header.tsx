import { resume } from "./data/resumeData";

export default function Header() {
  return (
    <div className="text-center">
      <h1 className="text-3xl font-bold">{resume.name}</h1>
      <p className="text-gray-500">{resume.title}</p>
    </div>
  );
}