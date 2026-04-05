import ContactSection from "@/components/home/contact-section";
import CoolHeroSection from "@/components/home/hero-section";
import ProjectsSection from "@/components/home/project-section";
import SkillsSection from "@/components/home/skill-section";

function page() {
  return (
    <>
      <CoolHeroSection />
      <ProjectsSection />
      <SkillsSection />
      <ContactSection />
    </>
  );
}

export default page;
