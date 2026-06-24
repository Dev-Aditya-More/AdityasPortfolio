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
import ParallaxBackground from '@/components/ParallaxBackground';
import CursorGradient from '@/components/CursorGradient';
import CLITerminal from '@/components/CLITerminal';

const Index = () => {
  const [cliMode, setCLIMode] = useState(false);

  if (cliMode) {
    return <CLITerminal onExit={() => setCLIMode(false)} />;
  }

  return (
    <div className="min-h-screen">
      <ParallaxBackground />
      <CursorGradient />
      <Navbar />

      {/* CLI Mode Toggle Button - Fixed position */}
      <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50">
        <Button
          onClick={() => setCLIMode(true)}
          className="font-mono text-xs backdrop-blur-xl bg-background/80 border border-border hover:border-primary/50 hover:bg-primary/5 text-muted-foreground hover:text-primary shadow-lg rounded-full px-4 py-2 transition-all duration-200"
          variant="ghost"
        >
          <Terminal className="mr-2 h-3.5 w-3.5" />
          CLI Mode
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