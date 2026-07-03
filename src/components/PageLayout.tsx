import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import ParallaxBackground from "./ParallaxBackground";
import CursorGradient from "./CursorGradient";
import { useSEO } from "@/hooks/useSEO";

interface PageLayoutProps {
  title: string;
  description: string;
  path: string;
  children: React.ReactNode;
}

const PageLayout = ({ title, description, path, children }: PageLayoutProps) => {
  useSEO({ title, description, path });

  return (
    <div className="min-h-screen">
      <ParallaxBackground />
      <CursorGradient />
      <Navbar />
      <div className="pt-20">{children}</div>
      <Footer />
    </div>
  );
};

export default PageLayout;
