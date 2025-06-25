
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
      <div className="fixed top-4 right-4 z-50">
        <Button 
          onClick={() => setCLIMode(true)}
          className="bg-black text-green-400 hover:bg-gray-900 border border-green-400"
          size="sm"
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