import ContactSection from "@/components/ContactSection";
import HeroSection from "@/components/HeroSection";
import ProjectSection from "@/components/ProjectSection";
import SkillSection from "@/components/SkillSection";


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
