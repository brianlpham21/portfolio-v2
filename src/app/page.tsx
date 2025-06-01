import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import WorkTimeline from "@/components/sections/WorkTimeline";
import Projects from "@/components/sections/Projects";
import Contact from "@/components/sections/Contact";


export default function Home() {
  return (
     <main className="relative min-h-screen overflow-x-hidden bg-white text-gray-900 dark:bg-gray-950 dark:text-white">
      <div className="container mx-auto px-4 max-w-7xl space-y-32 pt-20 pb-16">
        <Hero />
        <About />
        <Skills />
        <WorkTimeline />
        <Projects />
        <Contact />
      </div>
    </main>
  );
}
