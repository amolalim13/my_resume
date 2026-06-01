import Header from "@/components/Header";
import Overview from "@/components/Overview";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Achievements from "@/components/Achievements";
import Education from "../components/Education";
import ThemeToggle from "@/components/ThemeToggle";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50 px-4 py-8 transition-colors duration-300 dark:bg-slate-900">
      <div className="mx-auto w-full max-w-6xl space-y-6">
        {/* <div className="flex items-end justify-end">
          <ThemeToggle />
        </div> */}
        <div className="grid gap-6 lg:grid-cols-[1.4fr_0.8fr]">
          <div className="space-y-6">
            <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-lg shadow-slate-200/50 transition-all duration-200 dark:border-slate-700 dark:bg-slate-800 dark:shadow-slate-950/50">
              <Header />
            </div>
            <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-lg shadow-slate-200/50 transition-all duration-200 dark:border-slate-700 dark:bg-slate-800 dark:shadow-slate-950/50">
              <Overview />
            </div>
            <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-lg shadow-slate-200/50 transition-all duration-200 dark:border-slate-700 dark:bg-slate-800 dark:shadow-slate-950/50">
              <Projects />
            </div>
          </div>
          <div className="space-y-6">
            <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-lg shadow-slate-200/50 transition-all duration-200 dark:border-slate-700 dark:bg-slate-800 dark:shadow-slate-950/50">
              <Skills />
            </div>
            <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-lg shadow-slate-200/50 transition-all duration-200 dark:border-slate-700 dark:bg-slate-800 dark:shadow-slate-950/50">
              <Experience />
            </div>
            <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-lg shadow-slate-200/50 transition-all duration-200 dark:border-slate-700 dark:bg-slate-800 dark:shadow-slate-950/50">
              <Education />
            </div>
            <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-lg shadow-slate-200/50 transition-all duration-200 dark:border-slate-700 dark:bg-slate-800 dark:shadow-slate-950/50">
              <Achievements />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}