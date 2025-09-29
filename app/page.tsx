import { AboutSection } from "@/components/site/sections/AboutSection";
import { SkillsSection } from "@/components/site/sections/SkillsSection";
import { WorksSection } from "@/components/site/sections/WorksSection";
import { ContactSection } from "@/components/site/sections/ContactSection";

export default function Home() {
  return (
    <div className="space-y-12">
      <AboutSection />
      <SkillsSection />
      <WorksSection />
      <ContactSection />
    </div>
  );
}
