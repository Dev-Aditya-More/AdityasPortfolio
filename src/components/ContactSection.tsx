import React from "react";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Twitter, Coffee, Mail, ArrowUpRight } from "lucide-react";
import { useReveal } from "@/hooks/useReveal";

const socials = [
  { href: "https://buymeacoffee.com/aditya1875q", icon: Coffee, label: "Buy Me Coffee" },
  { href: "https://github.com/Dev-Aditya-More", icon: Github, label: "GitHub" },
  { href: "https://x.com/@Adityaastwt", icon: Twitter, label: "Twitter" },
  { href: "https://www.linkedin.com/in/adityamore2005", icon: Linkedin, label: "LinkedIn" },
];

const ContactSection = () => {
  const section = useReveal(0.1);

  return (
    <section id="contact" className="section">
      <div className="container">
        <div
          ref={section.ref}
          className={`transition-all duration-700 ease-out ${
            section.visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="flex items-center gap-3 mb-4">
            <span className="section-label">05 / contact</span>
            <div className="h-px w-16 bg-border" />
          </div>

          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-tight mb-6">
              Let's build
              <br />
              <span className="gradient-text">something great.</span>
            </h2>

            <p className="text-base text-muted-foreground mb-8 max-w-md leading-relaxed">
              Open to Android freelance work, collaborations, and interesting
              projects. If you're building with Compose, let's talk.
            </p>

            <a
              href="mailto:aditya1875more@gmail.com"
              className="group inline-flex items-center gap-2.5 font-mono text-primary hover:opacity-80 transition-opacity mb-10"
            >
              <Mail size={18} />
              <span className="text-base">aditya1875more@gmail.com</span>
              <ArrowUpRight
                size={15}
                className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </a>

            <div className="flex flex-wrap gap-4 items-center">
              <Button asChild size="lg" className="btn-primary">
                <a href="mailto:aditya1875more@gmail.com">
                  Send a message <ArrowUpRight size={16} />
                </a>
              </Button>

              <div className="flex gap-2">
                {socials.map(({ href, icon: Icon, label }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    title={label}
                    className="w-11 h-11 flex items-center justify-center rounded-full border border-border hover:border-primary/40 hover:bg-primary/5 text-muted-foreground hover:text-primary transition-all duration-200"
                  >
                    <Icon size={18} />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
