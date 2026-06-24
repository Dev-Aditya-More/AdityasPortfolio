import React from "react";
import { useReveal } from "@/hooks/useReveal";

const marqueeSkills = [
  { name: "Kotlin", color: "#7F52FF" },
  { name: "Java", color: "#f89820" },
  { name: "Jetpack Compose", color: "#4285F4" },
  { name: "Android SDK", color: "#3DDC84" },
  { name: "KMP", color: "#7F52FF" },
  { name: "Room DB", color: "#3DDC84" },
  { name: "Retrofit", color: "#4285F4" },
  { name: "Coroutines", color: "#7F52FF" },
  { name: "MVVM", color: "#3DDC84" },
  { name: "Docker", color: "#2496ED" },
  { name: "Kubernetes", color: "#326CE5" },
  { name: "Firebase", color: "#FFCA28" },
  { name: "Git", color: "#F05032" },
  { name: "Gradle", color: "#02B3E4" },
  { name: "Material 3", color: "#4285F4" },
  { name: "Hilt / Koin", color: "#7F52FF" },
  { name: "AWS", color: "#FF9900" },
  { name: "WorkManager", color: "#3DDC84" },
];

const skillCategories = [
  {
    title: "Mobile",
    accent: "#7F52FF",
    items: [
      { name: "Kotlin", level: "Advanced" },
      { name: "Java", level: "Intermediate" },
      { name: "Jetpack Compose", level: "Intermediate" },
      { name: "Android SDK", level: "Intermediate" },
      { name: "KMP", level: "Intermediate" },
    ],
  },
  {
    title: "Android Toolkit",
    accent: "#3DDC84",
    items: [
      { name: "Room DB", level: "Intermediate" },
      { name: "WorkManager", level: "Intermediate" },
      { name: "Retrofit", level: "Intermediate" },
      { name: "Coroutines", level: "Intermediate" },
      { name: "Hilt / Koin", level: "Intermediate" },
    ],
  },
  {
    title: "DevOps",
    accent: "#4285F4",
    items: [
      { name: "Docker", level: "Intermediate" },
      { name: "Kubernetes", level: "Intermediate" },
      { name: "Firebase", level: "Intermediate" },
      { name: "AWS", level: "Exploring" },
    ],
  },
  {
    title: "Tooling",
    accent: "#22c55e",
    items: [
      { name: "Git", level: "Intermediate" },
      { name: "Gradle", level: "Intermediate" },
      { name: "Android Studio", level: "Intermediate" },
      { name: "Material 3", level: "Intermediate" },
    ],
  },
];

const levelStyle: Record<string, string> = {
  Advanced: "bg-violet-500/10 text-violet-400 border-violet-500/20",
  Intermediate: "bg-primary/10 text-primary border-primary/20",
  Exploring: "bg-secondary text-muted-foreground border-border",
};

const doubled = [...marqueeSkills, ...marqueeSkills];

const SkillsSection = () => {
  const header = useReveal(0.1);
  const grid = useReveal(0.05);

  return (
    <section id="skills" className="section bg-secondary/20">
      <div className="container">
        {/* Header */}
        <div
          ref={header.ref}
          className={`transition-all duration-700 ${
            header.visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="flex items-center gap-3 mb-4">
            <span className="section-label">02 / skills</span>
            <div className="h-px w-16 bg-border" />
          </div>
          <h2 className="section-title mb-3">
            Tech <span className="gradient-text">stack</span>
          </h2>
          <p className="text-muted-foreground mb-10 max-w-lg text-sm">
            Tools and technologies I work with every day.
          </p>
        </div>

        {/* Marquee */}
        <div className="relative mb-12 overflow-hidden">
          <div className="absolute left-0 top-0 h-full w-20 z-10 bg-gradient-to-r from-background to-transparent pointer-events-none" />
          <div className="absolute right-0 top-0 h-full w-20 z-10 bg-gradient-to-l from-background to-transparent pointer-events-none" />
          <div className="flex gap-3 animate-marquee w-max">
            {doubled.map((skill, i) => (
              <span
                key={i}
                className="flex-shrink-0 px-4 py-1.5 rounded-full text-xs font-mono border font-medium whitespace-nowrap"
                style={{
                  color: skill.color,
                  borderColor: skill.color + "28",
                  backgroundColor: skill.color + "12",
                }}
              >
                {skill.name}
              </span>
            ))}
          </div>
        </div>

        {/* Category grid */}
        <div
          ref={grid.ref}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
        >
          {skillCategories.map((cat, i) => (
            <div
              key={i}
              className={`glass-card p-5 transition-all duration-500 ease-out hover:-translate-y-1 ${
                grid.visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
              style={{
                transitionDelay: grid.visible ? `${i * 80}ms` : "0ms",
                borderTopColor: cat.accent + "50",
                borderTopWidth: "2px",
              }}
            >
              <h3
                className="text-xs font-bold uppercase tracking-widest mb-4 font-mono"
                style={{ color: cat.accent }}
              >
                {cat.title}
              </h3>
              <div className="space-y-3">
                {cat.items.map((item, j) => (
                  <div key={j} className="flex items-center justify-between gap-2">
                    <span className="text-sm font-medium truncate">{item.name}</span>
                    <span
                      className={`shrink-0 text-[10px] px-1.5 py-0.5 rounded border font-medium ${
                        levelStyle[item.level] ?? levelStyle["Exploring"]
                      }`}
                    >
                      {item.level}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Currently exploring */}
        <div
          className={`mt-4 glass-card p-4 border-primary/15 transition-all duration-700 ${
            grid.visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
          style={{ transitionDelay: grid.visible ? "380ms" : "0ms" }}
        >
          <div className="flex items-center gap-3 flex-wrap">
            <span className="section-label">currently exploring →</span>
            {["AWS Deep Dive", "KMP & Flutter", "Jetpack XR"].map((item) => (
              <span
                key={item}
                className="text-xs px-3 py-1 rounded-full bg-yellow-500/10 text-yellow-400 border border-yellow-500/20 font-medium font-mono"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
