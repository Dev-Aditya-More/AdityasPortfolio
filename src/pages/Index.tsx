
import { useState } from 'react';
import { Terminal } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import SkillsSection from '@/components/SkillsSection';
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
          className="backdrop-blur-md bg-gradient-to-r from-purple-500/80 to-green-400/80 text-white hover:from-purple-600/90 hover:to-green-500/90 shadow-lg border-none rounded-full px-5 py-2 text-sm transition-all duration-300"
        >
          <Terminal className="mr-2 h-4 w-4" />
          CLI Mode
        </Button>


      </div>

      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;