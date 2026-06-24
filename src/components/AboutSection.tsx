import React from "react";
import { Smartphone, Code, Cloud, Rocket, MapPin, GraduationCap } from "lucide-react";
import { useReveal } from "@/hooks/useReveal";

const stats = [
  { value: "12+", label: "Projects Built" },
  { value: "2", label: "Play Store Apps" },
  { value: "5+", label: "Months Exp." },
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
            A little bit{" "}
            <span className="gradient-text">about me</span>
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
            <div className="lg:col-span-3 space-y-4">
              <p className="text-base leading-relaxed text-muted-foreground">
                I'm a passionate{" "}
                <span className="highlight">Android developer</span> focused on
                building elegant, scalable mobile experiences with Jetpack
                Compose and Kotlin MultiPlatform. Currently working across
                multiple internships and personal projects.
              </p>
              <p className="text-base leading-relaxed text-muted-foreground">
                When I'm not shipping apps, I'm diving into DevOps — containerising
                services, exploring Kubernetes, and learning cloud infrastructure.
                I believe in <span className="highlight">clean code</span> and
                love contributing to open source.
              </p>
              <div className="flex flex-wrap gap-4 pt-2 text-sm text-muted-foreground">
                <span className="flex items-center gap-1.5">
                  <MapPin size={13} className="text-primary" />
                  India · Remote-friendly
                </span>
                <span className="flex items-center gap-1.5">
                  <GraduationCap size={13} className="text-primary" />
                  B.E. CS · SPPU · 2027
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
                    <svc.icon size={18} className={`mt-0.5 shrink-0 ${svc.accent}`} />
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
