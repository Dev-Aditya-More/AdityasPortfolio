import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Github, Twitter, Linkedin, Coffee, Download } from "lucide-react";

const titles = [
  "Android & KMP Developer",
  "DevOps Enthusiast",
  "Seasonal Web Dev",
];

const floatingBadges = [
  {
    name: "Kotlin",
    style: { top: "-14px", right: "56px" },
    delay: "0s",
    cls: "text-[#7F52FF] border-[#7F52FF]/25 bg-[#7F52FF]/10",
  },
  {
    name: "Compose",
    style: { top: "22%", right: "-72px" },
    delay: "0.9s",
    cls: "text-[#4285F4] border-[#4285F4]/25 bg-[#4285F4]/10",
  },
  {
    name: "Docker",
    style: { bottom: "18%", right: "-68px" },
    delay: "1.8s",
    cls: "text-[#2496ED] border-[#2496ED]/25 bg-[#2496ED]/10",
  },
  {
    name: "KMP",
    style: { bottom: "-14px", left: "48px" },
    delay: "0.4s",
    cls: "text-[#3DDC84] border-[#3DDC84]/25 bg-[#3DDC84]/10",
  },
  {
    name: "Firebase",
    style: { top: "48%", left: "-68px" },
    delay: "1.3s",
    cls: "text-orange-400 border-orange-400/25 bg-orange-400/10",
  },
];

const socialLinks = [
  { href: "https://github.com/Dev-Aditya-More", icon: Github, label: "GitHub" },
  { href: "https://www.linkedin.com/in/adityamore2005", icon: Linkedin, label: "LinkedIn" },
  { href: "https://x.com/@Adityaastwt", icon: Twitter, label: "Twitter" },
  { href: "https://buymeacoffee.com/aditya1875q", icon: Coffee, label: "Buy me a coffee" },
];

const HeroSection = () => {
  const [displayText, setDisplayText] = useState("");
  const [isTyping, setIsTyping] = useState(true);
  const [titleIndex, setTitleIndex] = useState(0);

  const fullText = titles[titleIndex];

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    if (isTyping) {
      if (displayText !== fullText) {
        timeout = setTimeout(
          () => setDisplayText(fullText.slice(0, displayText.length + 1)),
          80
        );
      } else {
        timeout = setTimeout(() => setIsTyping(false), 2200);
      }
    } else {
      if (displayText.length > 0) {
        timeout = setTimeout(
          () => setDisplayText(displayText.slice(0, -1)),
          40
        );
      } else {
        setIsTyping(true);
        setTitleIndex((i) => (i + 1) % titles.length);
      }
    }
    return () => clearTimeout(timeout);
  }, [displayText, isTyping, fullText]);

  return (
    <section className="relative min-h-screen flex flex-col justify-center pt-20 pb-16 overflow-hidden">
      {/* Dot grid */}
      <div className="absolute inset-0 dot-grid" />

      {/* Bottom fade */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background pointer-events-none" />

      {/* Ambient glow */}
      <div
        className="absolute top-1/3 right-1/3 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, hsl(142 71% 50% / 0.06) 0%, transparent 70%)",
        }}
      />

      <div className="container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* ── Left: Text ── */}
          <div className="space-y-7 animate-fadeInUp">
            {/* Available badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-primary/20 bg-primary/5">
              <span className="w-1.5 h-1.5 rounded-full bg-primary android-pulse" />
              <span className="text-xs font-mono text-primary">
                Available for work
              </span>
            </div>

            {/* Name */}
            <div>
              <p className="text-sm font-mono text-muted-foreground mb-3 tracking-wider">
                Hello, I'm
              </p>
              <h1 className="text-6xl sm:text-7xl md:text-8xl font-black tracking-tight leading-none">
                <span className="gradient-text">Aditya</span>
                <br />
                <span className="text-foreground">More</span>
              </h1>
            </div>

            {/* Typing */}
            <div className="h-9 flex items-center">
              <span className="text-lg sm:text-xl font-mono text-muted-foreground">
                &gt;{" "}
                <span className="text-foreground font-medium">
                  {displayText}
                </span>
                <span className="animate-blink text-primary ml-px">█</span>
              </span>
            </div>

            {/* Bio */}
            <p className="text-base text-muted-foreground max-w-md leading-relaxed">
              I build modern Android apps with{" "}
              <span className="highlight">Jetpack Compose & KMP</span>. Focused
              on <span className="highlight">clean architecture</span> and
              crafting experiences users actually love.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-3 pt-1">
              <Button asChild className="btn-primary">
                <a href="#projects">
                  View Projects <ArrowRight size={15} />
                </a>
              </Button>
              <Button
                variant="outline"
                asChild
                className="border-border hover:border-primary/40 hover:bg-primary/5 transition-all"
              >
                <a href="#contact">Get in Touch</a>
              </Button>
              <Button
                variant="ghost"
                size="icon"
                asChild
                className="w-10 h-10 rounded-full border border-border hover:border-primary/40 hover:bg-primary/5"
                title="Download Resume"
              >
                <a href="/AdityaResumeNew.pdf" download>
                  <Download size={16} />
                </a>
              </Button>
            </div>

            {/* Social row */}
            <div className="flex items-center gap-3">
              <span className="text-xs font-mono text-muted-foreground">
                find me on
              </span>
              <div className="flex gap-2">
                {socialLinks.map(({ href, icon: Icon, label }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    title={label}
                    className="w-9 h-9 flex items-center justify-center rounded-full border border-border text-muted-foreground hover:text-primary hover:border-primary/40 hover:bg-primary/5 transition-all duration-200"
                  >
                    <Icon size={15} />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* ── Right: Terminal ── */}
          <div
            className="hidden lg:flex justify-center animate-fadeInUp"
            style={{ animationDelay: "180ms" }}
          >
            <div className="relative w-full max-w-sm">
              {/* Terminal window */}
              <div className="glass-card overflow-hidden shadow-2xl shadow-black/30">
                {/* Window chrome */}
                <div className="flex items-center gap-2 px-4 py-3 border-b border-border bg-secondary/40">
                  <span className="w-3 h-3 rounded-full bg-red-500/70" />
                  <span className="w-3 h-3 rounded-full bg-yellow-500/70" />
                  <span className="w-3 h-3 rounded-full bg-green-500/70" />
                  <span className="ml-2 text-xs font-mono text-muted-foreground">
                    ~/.aditya/profile.kt
                  </span>
                </div>

                {/* Code */}
                <div className="p-5 font-mono text-sm leading-relaxed">
                  <div>
                    <span className="text-[#7F52FF]">val</span>{" "}
                    <span className="text-foreground">developer</span>{" "}
                    <span className="text-muted-foreground">= Developer(</span>
                  </div>
                  <div className="pl-5 space-y-0.5 mt-0.5 mb-0.5">
                    <div>
                      <span className="text-[#3DDC84]">name</span>
                      <span className="text-muted-foreground"> = </span>
                      <span className="text-primary">"Aditya More"</span>
                      <span className="text-muted-foreground">,</span>
                    </div>
                    <div>
                      <span className="text-[#3DDC84]">focus</span>
                      <span className="text-muted-foreground"> = </span>
                      <span className="text-primary">"Android + KMP"</span>
                      <span className="text-muted-foreground">,</span>
                    </div>
                    <div>
                      <span className="text-[#3DDC84]">loves</span>
                      <span className="text-muted-foreground"> = listOf(</span>
                    </div>
                    <div className="pl-5">
                      <span className="text-primary">"Clean Code"</span>
                      <span className="text-muted-foreground">, </span>
                      <span className="text-primary">"Compose"</span>
                      <span className="text-muted-foreground">,</span>
                    </div>
                    <div className="pl-5">
                      <span className="text-primary">"DevOps"</span>
                      <span className="text-muted-foreground">, </span>
                      <span className="text-primary">"Open Source"</span>
                    </div>
                    <div>
                      <span className="text-muted-foreground">),</span>
                    </div>
                    <div>
                      <span className="text-[#3DDC84]">status</span>
                      <span className="text-muted-foreground"> = </span>
                      <span className="text-primary">"open_to_work"</span>
                    </div>
                  </div>
                  <div className="text-muted-foreground">)</div>
                  <div className="mt-3 pt-3 border-t border-border flex items-center gap-2">
                    <span className="text-primary">$</span>
                    <span className="text-muted-foreground">./build.sh</span>
                    <span className="text-[#3DDC84] ml-auto">✓ success</span>
                  </div>
                </div>
              </div>

              {/* Floating tech badges */}
              {floatingBadges.map((badge) => (
                <span
                  key={badge.name}
                  className={`absolute text-[11px] font-mono px-2.5 py-1 rounded-full border font-medium pointer-events-none animate-float ${badge.cls}`}
                  style={{
                    ...badge.style,
                    animationDelay: badge.delay,
                    animationDuration: "5s",
                  }}
                >
                  {badge.name}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Scroll hint */}
        <div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 animate-fadeInUp"
          style={{ animationDelay: "600ms" }}
        >
          <span className="text-[10px] font-mono text-muted-foreground tracking-widest uppercase">
            scroll
          </span>
          <div className="w-px h-10 bg-gradient-to-b from-primary/40 to-transparent" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
