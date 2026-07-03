import PageLayout from "@/components/PageLayout";
import AboutSection from "@/components/AboutSection";

const AboutPage = () => (
  <PageLayout
    title="About Aditya More | Android Developer"
    description="Learn about Aditya More's background, skills, and journey as an Android Developer specializing in Jetpack Compose, Kotlin, and clean architecture."
    path="/about"
  >
    <AboutSection />
  </PageLayout>
);

export default AboutPage;
