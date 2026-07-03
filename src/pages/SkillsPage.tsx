import PageLayout from "@/components/PageLayout";
import SkillsSection from "@/components/SkillsSection";

const SkillsPage = () => (
  <PageLayout
    title="Skills & Tech Stack | Aditya More"
    description="Explore Aditya More's technical skills: Kotlin, Jetpack Compose, Kotlin Multiplatform, Docker, Kubernetes, Firebase, and more."
    path="/skills"
  >
    <SkillsSection />
  </PageLayout>
);

export default SkillsPage;
