import ContactSection from "@/components/home/contact-section";
import WorkEduSection from "@/components/home/work-edu-section";
import CoolHeroSection from "@/components/home/hero-section";
import ProjectsSection from "@/components/home/project-section";
import SkillsSection from "@/components/home/skill-section";

function page() {
  return (
    <>
      <CoolHeroSection />
      <ProjectsSection />
      <SkillsSection />
      <WorkEduSection />
      <ContactSection />
    </>
  );
}

export default page;
