import React, { useEffect, useRef, useState } from 'react';
import { Badge } from '@/components/ui/badge';
import { MapPin, Calendar } from 'lucide-react';

const experiences = [
  {
    id: 1,
    role: 'Mobile Application Developer',
    company: 'Studiofy',
    type: 'Internship',
    period: 'Apr 2026 – Present',
    duration: '2 mos',
    location: 'Remote',
    isCurrent: true,
    skills: ['Mobile App Dev', 'Android', 'Kotlin', 'Jetpack Compose', 'Firebase'],
    accentClass: 'from-kotlin/80 to-kotlin/30',
    dotClass: 'bg-kotlin',
    borderClass: 'border-kotlin/40',
    logo: 'S',
    logoClass: 'bg-gradient-to-br from-slate-600 to-slate-900',
  },
  {
    id: 2,
    role: 'Android Developer',
    company: 'Think Decor',
    type: 'Internship',
    period: 'Jan 2026 – Present',
    duration: '5 mos',
    location: 'Remote',
    isCurrent: true,
    skills: ['Android', 'Kotlin', 'Jetpack Compose', 'REST APIs'],
    accentClass: 'from-compose/80 to-compose/30',
    dotClass: 'bg-compose',
    borderClass: 'border-compose/40',
    logo: 'D',
    logoClass: 'bg-gradient-to-br from-gray-800 to-black',
  },
  {
    id: 3,
    role: 'Mobile Application Developer',
    company: 'Metry AI',
    type: 'Internship',
    period: 'Oct 2025 – Jan 2026',
    duration: '4 mos',
    location: 'Canada · Remote',
    isCurrent: false,
    skills: ['Mobile Development', 'AI Integration', 'Kotlin'],
    accentClass: 'from-indigo-500/80 to-indigo-500/30',
    dotClass: 'bg-indigo-500',
    borderClass: 'border-indigo-500/40',
    logo: 'M',
    logoClass: 'bg-gradient-to-br from-indigo-600 to-indigo-900',
  },
  {
    id: 4,
    role: 'Open Source Developer',
    company: 'Hacktoberfest',
    type: 'Program',
    period: 'Oct 2025',
    duration: '1 mo',
    location: 'Remote',
    isCurrent: false,
    skills: ['Version Control', 'Jetpack Compose', 'Git', 'Open Source'],
    accentClass: 'from-android/80 to-android/30',
    dotClass: 'bg-android',
    borderClass: 'border-android/40',
    logo: 'HF',
    logoClass: 'bg-gradient-to-br from-orange-500 to-pink-600',
  },
];

const ExperienceCard = ({
  exp,
  index,
}: {
  exp: (typeof experiences)[0];
  index: number;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const isLeft = index % 2 === 0;

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.15 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`relative flex items-center gap-0 md:gap-8 mb-12 transition-all duration-700 ease-out ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      } ${isLeft ? 'md:flex-row' : 'md:flex-row-reverse'}`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      {/* Card */}
      <div className={`flex-1 ${isLeft ? 'md:text-right' : 'md:text-left'} pl-8 md:pl-0`}>
        <div
          className={`group relative overflow-hidden rounded-2xl border bg-card ${exp.borderClass} hover:shadow-xl hover:scale-[1.02] transition-all duration-300`}
        >
          {/* gradient top bar */}
          <div className={`h-1 w-full bg-gradient-to-r ${exp.accentClass}`} />

          <div className="p-5">
            <div className={`flex items-start gap-4 ${isLeft ? 'md:flex-row-reverse' : ''}`}>
              {/* Logo */}
              <div
                className={`shrink-0 w-12 h-12 rounded-xl ${exp.logoClass} flex items-center justify-center text-white font-bold text-sm shadow-md`}
              >
                {exp.logo}
              </div>

              {/* Info */}
              <div className={`flex-1 min-w-0 ${isLeft ? 'md:text-right' : ''}`}>
                <div className={`flex items-center gap-2 flex-wrap ${isLeft ? 'md:justify-end' : ''}`}>
                  <h3 className="font-semibold text-base leading-tight">{exp.role}</h3>
                  {exp.isCurrent && (
                    <span className="flex items-center gap-1 text-[10px] font-semibold uppercase tracking-wider text-android px-2 py-0.5 rounded-full bg-android/10 border border-android/30">
                      <span className="relative flex h-1.5 w-1.5">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-android opacity-75" />
                        <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-android" />
                      </span>
                      Live
                    </span>
                  )}
                </div>

                <p className="text-sm font-medium text-primary mt-0.5">
                  {exp.company}
                  <span className="text-muted-foreground font-normal"> · {exp.type}</span>
                </p>

                <div className={`flex items-center gap-3 mt-2 text-xs text-muted-foreground flex-wrap ${isLeft ? 'md:justify-end' : ''}`}>
                  <span className="flex items-center gap-1">
                    <Calendar size={11} />
                    {exp.period} · {exp.duration}
                  </span>
                  <span className="flex items-center gap-1">
                    <MapPin size={11} />
                    {exp.location}
                  </span>
                </div>

                <div className={`flex flex-wrap gap-1.5 mt-3 ${isLeft ? 'md:justify-end' : ''}`}>
                  {exp.skills.map((skill) => (
                    <Badge
                      key={skill}
                      variant="secondary"
                      className="text-[10px] px-2 py-0.5 rounded-md font-medium"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Center dot — hidden on mobile, shown on md+ */}
      <div className="hidden md:flex shrink-0 flex-col items-center z-10">
        <div className={`w-4 h-4 rounded-full border-4 border-background ${exp.dotClass} shadow-lg`} />
      </div>

      {/* Spacer for opposite side */}
      <div className="hidden md:block flex-1" />

      {/* Mobile dot — absolute on the left edge */}
      <div className={`absolute left-0 top-6 md:hidden flex items-center justify-center`}>
        <div className={`w-3 h-3 rounded-full ${exp.dotClass} shadow-md`} />
      </div>
    </div>
  );
};

const ExperienceSection = () => {
  return (
    <section id="experience" className="section">
      <div className="container">
        <h2 className="section-title">Experience</h2>
        <p className="text-muted-foreground mb-12 mt-6">
          Where I've worked and what I've built
        </p>

        <div className="relative max-w-3xl mx-auto">
          {/* Vertical timeline line */}
          <div className="hidden md:block absolute left-1/2 -translate-x-px top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-border to-transparent" />
          {/* Mobile timeline line */}
          <div className="md:hidden absolute left-1.5 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-border to-transparent" />

          {experiences.map((exp, index) => (
            <ExperienceCard key={exp.id} exp={exp} index={index} />
          ))}
        </div>

        {/* Footer stat row */}
        <div className="mt-4 flex flex-wrap justify-center gap-8">
          {[
            { label: 'Companies', value: '4' },
            { label: 'Months of XP', value: '12+' },
            { label: 'Current Roles', value: '2' },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-2xl font-bold text-primary">{stat.value}</p>
              <p className="text-xs text-muted-foreground uppercase tracking-widest">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
