import Header from "@/components/Header";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";

export default function Home() {
  return (
    <main className="max-w-3xl mx-auto p-6 space-y-6">
      <Header />
      <Skills />
      <Experience />
      <Projects />
    </main>
  );
}