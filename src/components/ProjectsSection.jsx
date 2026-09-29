import SectionHeading from "./SectionHeading";
import ProjectCard from "./ProjectCard";

export default function ProjectsSection() {
  return (
    <section id="projects" className="max-w-4xl mx-auto px-6 py-16 border-t border-stone-200 scroll-mt-16">
      <SectionHeading title="Projects" subtitle="Things I have built." />
      
      <div className="mt-8 grid gap-6 sm:grid-cols-2">
        <ProjectCard 
          year="2026" 
          title="GottaGo App" 
          description="An Android mobile app slice for creating task and packing checklists, built using MVP architecture." 
          tech="Kotlin · Android Studio" 
          link="#" 
        />
        <ProjectCard 
          year="2026" 
          title="Expense Tracker" 
          description="A desktop application utilizing module paths to track and manage personal expenses." 
          tech="JavaFX · Maven" 
          link="#" 
        />
        <ProjectCard 
          year="2026" 
          title="Smart Flood Warning Proposal" 
          description="A collaborative AI research proposal and competitive analysis for a climate alert system." 
          tech="System Analysis · AI" 
          link="#" 
        />
        <ProjectCard 
          year="2026" 
          title="Database Profiling Lab" 
          description="Data manipulation and schema modifications running queries on raw datasets." 
          tech="MySQL · XAMPP" 
          link="#" 
        />
      </div>
    </section>
  );
}