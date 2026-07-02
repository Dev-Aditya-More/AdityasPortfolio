import React from "react";
import {
  Smartphone,
  Code,
  Cloud,
  Rocket,
  MapPin,
  GraduationCap,
} from "lucide-react";
import { useReveal } from "@/hooks/useReveal";

const stats = [
  { value: "12+", label: "Projects Built" },
  { value: "3", label: "Play Store Apps" },
  { value: "10+", label: "Months Exp." },
  { value: "4", label: "Companies" },
];

const services = [
  {
    icon: Smartphone,
    title: "Android Apps",
    description: "Jetpack Compose, Material 3, MVVM",
    accent: "text-[#3DDC84]",
    bg: "bg-[#3DDC84]/8 border-[#3DDC84]/20",
  },
  {
    icon: Code,
    title: "Clean Architecture",
    description: "KMP, modular, testable codebases",
    accent: "text-[#7F52FF]",
    bg: "bg-[#7F52FF]/8 border-[#7F52FF]/20",
  },
  {
    icon: Cloud,
    title: "DevOps",
    description: "Docker, Kubernetes, cloud pipelines",
    accent: "text-[#4285F4]",
    bg: "bg-[#4285F4]/8 border-[#4285F4]/20",
  },
  {
    icon: Rocket,
    title: "Collaboration",
    description: "Cross-functional teams & open source",
    accent: "text-primary",
    bg: "bg-primary/8 border-primary/20",
  },
];

const AboutSection = () => {
  const section = useReveal(0.08);

  return (
    <section id="about" className="section">
      <div className="container">
        <div
          ref={section.ref}
          className={`transition-all duration-700 ease-out ${
            section.visible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
          }`}
        >
          {/* Label */}
          <div className="flex items-center gap-3 mb-4">
            <span className="section-label">01 / about</span>
            <div className="h-px w-16 bg-border" />
          </div>

          <h2 className="section-title mb-10">
            A little bit <span className="gradient-text">about me</span>
          </h2>

          {/* Stats row */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-12">
            {stats.map((stat, i) => (
              <div
                key={i}
                className="glass-card p-5 text-center hover:-translate-y-0.5 transition-transform duration-200"
              >
                <div className="text-3xl font-black text-primary mb-1">
                  {stat.value}
                </div>
                <div className="text-xs text-muted-foreground font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          {/* Bio + Services */}
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
            <div className="lg:col-span-3 space-y-6">
              <p className="text-base leading-8 text-muted-foreground">
                I'm an <span className="highlight">Android Developer</span> who
                enjoys building polished mobile experiences with Kotlin, Jetpack
                Compose, and modern Android architecture. Over the last year
                I've been focused on creating applications that aren't just
                functional, but also smooth, scalable, and enjoyable to use.
              </p>

              <p className="text-base leading-8 text-muted-foreground">
                I've built <span className="highlight">12+ projects</span>,
                published
                <span className="highlight"> 3 apps on Google Play</span>, and
                worked with multiple startups through internships. Those
                experiences taught me how to write production-ready code,
                collaborate with teams, ship features quickly, and continuously
                improve products based on real user feedback.
              </p>

              <p className="text-base leading-8 text-muted-foreground">
                My primary stack revolves around Jetpack Compose, Kotlin, MVVM,
                Clean Architecture, Room, Retrofit, Firebase, and Kotlin
                Multiplatform. I'm also exploring backend engineering, Docker,
                Kubernetes, cloud infrastructure, and DevOps to better
                understand how mobile applications work beyond the client side.
              </p>

              <p className="text-base leading-8 text-muted-foreground">
                Outside of development, I enjoy building personal products,
                experimenting with new UI ideas, contributing to open source,
                and constantly learning. My goal is simple: build software that
                solves real problems while becoming a stronger engineer with
                every project.
              </p>

              <div className="flex flex-wrap gap-6 pt-2 text-sm text-muted-foreground">
                <span className="flex items-center gap-2">
                  <MapPin size={14} className="text-primary" />
                  India · Remote Friendly
                </span>

                <span className="flex items-center gap-2">
                  <GraduationCap size={14} className="text-primary" />
                  B.E. Computer Science · SPPU · 2027
                </span>
              </div>
            </div>

            <div className="lg:col-span-2">
              <h3 className="section-label mb-4">What I do</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-2.5">
                {services.map((svc, i) => (
                  <div
                    key={i}
                    className={`flex items-start gap-3 p-3.5 rounded-xl border transition-all duration-200 hover:-translate-y-0.5 ${svc.bg}`}
                  >
                    <svc.icon
                      size={18}
                      className={`mt-0.5 shrink-0 ${svc.accent}`}
                    />
                    <div>
                      <p className={`text-sm font-semibold ${svc.accent}`}>
                        {svc.title}
                      </p>
                      <p className="text-xs text-muted-foreground mt-0.5">
                        {svc.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
