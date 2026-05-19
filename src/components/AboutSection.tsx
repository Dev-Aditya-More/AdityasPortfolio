
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Smartphone, Code, Laptop, Rocket } from 'lucide-react';
import { useReveal } from '@/hooks/useReveal';

const services = [
  {
    title: 'Modern Android Apps',
    description: 'Build elegant and scalable apps with Jetpack Compose and Material 3 design',
    icon: Smartphone
  },
  {
    title: 'Clean Architecture',
    description: 'Implement MVVM, Clean Architecture, and modular codebases',
    icon: Code
  },
  {
    title: 'UI/UX Optimization',
    description: 'Optimize UI/UX for performance, accessibility and user experience',
    icon: Laptop
  },
  {
    title: 'Collaboration',
    description: 'Work with designers, product teams, and open-source communities',
    icon: Rocket
  }
];

const AboutSection = () => {
  const left = useReveal();
  const right = useReveal();

  return (
    <section id="about" className="section bg-muted/30">
      <div className="container">
        <h2 className="section-title">About Me</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12 mt-8">
          <div
            ref={left.ref}
            className={`transition-all duration-700 ease-out ${
              left.visible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
            }`}
            style={{ willChange: 'transform, opacity' }}
          >
            <p className="text-lg mb-4">
              I'm a passionate Android developer focused on building elegant, scalable, and
              modern mobile experiences with Jetpack Compose and Kotlin MultiPlatform.
            </p>
            <p className="mb-4">
              Currently exploring advanced UI patterns, state management, and clean architecture.
              I love learning in public and sharing dev insights with the Android community.
            </p>
            <p>
              When I'm not coding, you can find me exploring new technologies, contributing to open source,
              or experimenting with the latest features in the Android ecosystem or learning DevOps by choice
            </p>
          </div>

          <div
            ref={right.ref}
            className={`flex flex-col justify-center transition-all duration-700 ease-out ${
              right.visible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
            }`}
            style={{ transitionDelay: '100ms', willChange: 'transform, opacity' }}
          >
            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <CardTitle>What I Do</CardTitle>
                <CardDescription>My core services and expertise</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {services.map((service, index) => (
                    <div
                      key={index}
                      className="flex items-start space-x-3 group"
                      style={{ transitionDelay: `${index * 60}ms` }}
                    >
                      <div className="mt-0.5 bg-primary/10 p-2 rounded-md text-primary group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-200">
                        <service.icon size={18} />
                      </div>
                      <div>
                        <h3 className="font-medium text-sm">{service.title}</h3>
                        <p className="text-xs text-muted-foreground">{service.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
