import ContactSection from "@/sections/ContactSection";
import HeroSection from "@/sections/HeroSection";
import ProjectSection from "@/sections/ProjectSection";
import SkillSection from "@/sections/SkillSection";


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
