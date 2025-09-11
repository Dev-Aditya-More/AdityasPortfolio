
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Smartphone, Code, Laptop, Rocket } from 'lucide-react';

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
  return (
    <section id="about" className="section bg-muted/30">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        
        <div>
            <p className="text-lg mb-4">
              Hi! I’m a passionate <span className="font-semibold text-primary">Android developer</span> dedicated to crafting elegant, scalable, and modern mobile experiences using <span className="highlight">Jetpack Compose</span> and <span className="highlight">Kotlin Multiplatform</span>.
            </p>
            <p className="mb-4">
              My focus is on building robust apps with <span className="highlight">clean architecture</span>, advanced UI patterns, and seamless state management. I enjoy learning in public and sharing insights with the Android community.
            </p>
            <p>
              When I’m not coding, you’ll find me exploring new technologies, contributing to open source, or diving into <span className="highlight">DevOps</span> and the latest features in the Android ecosystem.
            </p>
          </div>
          <div className="flex flex-col justify-center">
            <Card>
              <CardHeader>
                <CardTitle>What I Do</CardTitle>
                <CardDescription>My core services and expertise</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {services.map((service, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="mt-0.5 bg-primary/10 p-2 rounded-md text-primary">
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
    </section>
  );
};

export default AboutSection;
