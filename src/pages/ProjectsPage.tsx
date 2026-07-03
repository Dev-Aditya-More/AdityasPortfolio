import PageLayout from "@/components/PageLayout";
import ProjectsSection from "@/components/ProjectsSection";

const ProjectsPage = () => (
  <PageLayout
    title="Projects | Aditya More - Android Developer Portfolio"
    description="Browse Android and DevOps projects built by Aditya More, including Dexverse, Stashly, Facenox, Resona, Baskit, and more."
    path="/projects"
  >
    <ProjectsSection />
  </PageLayout>
);

export default ProjectsPage;
