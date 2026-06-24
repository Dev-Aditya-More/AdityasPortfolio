import React from "react";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border py-8">
      <div className="container flex flex-col sm:flex-row justify-between items-center gap-4">
        <a href="#" className="font-mono font-bold text-lg tracking-tight">
          <span className="text-primary">~/</span>aditya
        </a>

        <p className="text-sm text-muted-foreground font-mono text-center">
          © {year} Aditya More · Built with React & Tailwind
        </p>
      </div>
    </footer>
  );
};

export default Footer;
