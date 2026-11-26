import { useState } from 'react';
import { Terminal } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import SkillsSection from '@/components/SkillsSection';
import ExperienceSection from '@/components/ExperienceSection';
import ProjectsSection from '@/components/ProjectsSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import CLITerminal from '@/components/CLITerminal';
import { useSEO } from '@/hooks/useSEO';

const Index = () => {
  const [cliMode, setCLIMode] = useState(false);

  useSEO({
    title: "Aditya More's Portfolio",
    description:
      "Portfolio of Aditya More, Android Developer specializing in Jetpack Compose, Kotlin and clean architecture",
    path: "/",
  });

  if (cliMode) {
    return <CLITerminal onExit={() => setCLIMode(false)} />;
  }

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* CLI Mode Toggle Button - Fixed position */}
      <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-auto sm:left-1/2 sm:-translate-x-1/2 z-50">
        <Button
          onClick={() => setCLIMode(true)}
          className="font-mono text-xs backdrop-blur-xl bg-background/80 border border-border hover:border-primary/50 hover:bg-primary/5 text-muted-foreground hover:text-primary shadow-lg rounded-full h-10 w-10 p-0 sm:w-auto sm:px-4 sm:py-2 transition-all duration-200"
          aria-label="Open CLI mode"
          variant="ghost"
        >
          <Terminal className="h-4 w-4 sm:mr-2 sm:h-3.5 sm:w-3.5" />
          <span className="hidden sm:inline">CLI Mode</span>
        </Button>
      </div>

      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ExperienceSection />
      <ProjectsSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;