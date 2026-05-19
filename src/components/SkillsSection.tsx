import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Smartphone,
  Code,
  Cloud,
  Settings,
  TestTube,
} from "lucide-react";
import { useReveal } from "@/hooks/useReveal";

const skillCategories = [
  {
    title: "Mobile Development",
    icon: Smartphone,
    skills: [
      { name: "Kotlin", icon: "🟣", proficiency: "Advanced" },
      { name: "Java", icon: "☕", proficiency: "Intermediate" },
      { name: "Jetpack Compose", icon: "🎨", proficiency: "Intermediate" },
      { name: "Android SDK", icon: "🤖", proficiency: "Intermediate" },
    ],
  },
  {
    title: "Android Toolkit",
    icon: Code,
    skills: [
      { name: "Room DB", icon: "💾", proficiency: "Intermediate" },
      { name: "WorkManager", icon: "📆", proficiency: "Intermediate" },
      { name: "DataStore", icon: "🗂️", proficiency: "Intermediate" },
      { name: "Retrofit", icon: "🌐", proficiency: "Intermediate" },
    ],
  },
  {
    title: "DevOps & Infrastructure",
    icon: Cloud,
    skills: [
      { name: "Docker", icon: "🐳", proficiency: "Intermediate" },
      { name: "Kubernetes", icon: "⚓", proficiency: "Intermediate" },
      { name: "AWS", icon: "☁️", proficiency: "Exploring" },
    ],
  },
  {
    title: "Development Tools",
    icon: Settings,
    skills: [
      { name: "Git", icon: "📝", proficiency: "Intermediate" },
      { name: "Android Studio", icon: "💻", proficiency: "Intermediate" },
      { name: "Firebase", icon: "🔥", proficiency: "Intermediate" },
      { name: "Gradle", icon: "⚙️", proficiency: "Intermediate" },
    ],
  },
];

const currentlyLearning = [
  "AWS (Deep Dive)",
  "Working on cool projects",
  "KMP & Flutter",
];

const getProficiencyColor = (proficiency: string) => {
  switch (proficiency) {
    case "Mastery":
      return "text-purple-600 bg-purple-100 dark:text-purple-400 dark:bg-purple-900/20";
    case "Advanced":
      return "text-blue-600 bg-blue-100 dark:text-blue-400 dark:bg-blue-900/20";
    case "Intermediate":
      return "text-yellow-600 bg-yellow-100 dark:text-yellow-400 dark:bg-yellow-900/20";
    case "Exploring":
      return "text-gray-600 bg-gray-100 dark:text-gray-400 dark:bg-gray-900/20";
    default:
      return "text-gray-600 bg-gray-100 dark:text-gray-400 dark:bg-gray-900/20";
  }
};

const SkillsSection = () => {
  const grid = useReveal(0.05);
  const bottom = useReveal(0.12);

  return (
    <section id="skills" className="section bg-muted/30">
      <div className="container">
        <h2 className="section-title mb-5">Skills & Expertise</h2>
        <div className="h-8" />

        <div ref={grid.ref} className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {skillCategories.map((category, index) => (
            <Card
              key={index}
              className={`group hover:shadow-lg hover:scale-[1.02] transition-all duration-500 ease-out ${
                grid.visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: grid.visible ? `${index * 80}ms` : '0ms', willChange: 'transform, opacity' }}
            >
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-200">
                    <category.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold">{category.title}</h3>
                </div>

                <div className="grid grid-cols-1 gap-4">
                  {category.skills.map((skill, idx) => (
                    <div
                      key={idx}
                      className="flex items-center justify-between p-3 rounded-lg bg-muted/50 hover:bg-muted hover:scale-[1.01] transition-all duration-200"
                    >
                      <div className="flex items-center gap-3">
                        <span className="text-2xl">{skill.icon}</span>
                        <span className="font-medium">{skill.name}</span>
                      </div>
                      <Badge
                        variant="secondary"
                        className={`text-xs font-medium ${getProficiencyColor(skill.proficiency)}`}
                      >
                        {skill.proficiency}
                      </Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div
          ref={bottom.ref}
          className={`transition-all duration-700 ease-out ${
            bottom.visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          <Card className="hover:shadow-md transition-shadow duration-300">
            <CardContent className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-lg bg-primary/10">
                  <TestTube className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold"> What next? </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {currentlyLearning.map((item, index) => (
                  <Badge
                    key={index}
                    variant="secondary"
                    className="bg-yellow-100 text-yellow-700 dark:bg-yellow-900/20 dark:text-yellow-400 hover:scale-105 transition-transform duration-150 cursor-default"
                  >
                    {item}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
