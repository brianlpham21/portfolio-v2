import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import WorkTimeline from "@/components/sections/WorkTimeline";
import Projects from "@/components/sections/Projects";
import Contact from "@/components/sections/Contact";

// TODO:
// - apply accessibility design
// - apply mobile first design
// - build out reusable ui components
// - display SSR capability of site
// - display lazy loading and performance of site
// - lighthouse active display - research
// - add minimal redux state management to show ability
// - add a nextjs backend
// - input work experience information
// - input project information
// - figure out best way to display skills
//   - input skills
// - create contact form with form and validation
// - figure out how to create hero section with playful interactive animation
// - style header
// - style footer
// - edit about me section
// - add unit testing

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-x-hidden bg-white text-gray-900 dark:bg-gray-950 dark:text-white transition-colors duration-500">
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
