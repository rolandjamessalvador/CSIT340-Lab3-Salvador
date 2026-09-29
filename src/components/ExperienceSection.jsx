import SectionHeading from "./SectionHeading";
import TimelineItem from "./TimelineItem";

export default function ExperienceSection() {
  return (
    <section id="experience" className="max-w-4xl mx-auto px-6 py-16 border-t border-stone-200 scroll-mt-16">
      <SectionHeading title="Experience" subtitle="What I've been surviving." />
      
      <ol className="mt-8 space-y-8 border-l border-stone-200">
        <TimelineItem 
          period="Current" 
          title="BS Information Technology" 
          place="Cebu Institute of Technology - University" 
          description="Currently a third-year student trying to make things compile without red errors." 
        />
        <TimelineItem 
          period="2026" 
          title="Android App Developer (Student)" 
          place="Mobile Dev Lab" 
          description="Designed and developed 'Quick Quiz Me', a mobile quiz application built using Kotlin and Android Studio." 
        />
        <TimelineItem 
          period="2026" 
          title="Desktop App Developer (Student)" 
          place="Java Lab" 
          description="Built a desktop expense tracker and successfully survived configuring JavaFX Maven dependencies." 
        />
      </ol>
    </section>
  );
}