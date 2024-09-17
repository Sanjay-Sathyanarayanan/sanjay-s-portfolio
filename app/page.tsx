import ContactSection from "@/app/components/ContactSection";
import HeroSection from "@/app/components/HeroSection";
import ProjectSection from "@/app/components/ProjectSection";
import SkillSection from "@/app/components/SkillSection";

export default function Home() {
  return (
      <main className="flex min-h-screen flex-col ">
      <div className="container">
        <HeroSection />
        <SkillSection/>
        <ProjectSection/>
        <ContactSection/>
  
      </div>
      
      </main>
  );
}
