
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Github, Link } from 'lucide-react';

const projects = [
  {
    title: 'ComposeHub',
    description: 'A showcase app with fully modular Jetpack Compose components.',
    longDesc: 'A comprehensive collection of reusable Compose components following Material 3 guidelines. Features complex UI patterns, animations, and theming support.',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158',
    tags: ['Jetpack Compose', 'Material 3', 'Animation', 'Theming'],
    github: 'https://github.com/Dev-Aditya-More/ComposeHub',
    live: '#'
  },
  {
    title: 'Taskly',
    description: 'A to-do list app with clean architecture and offline support using Room DB.',
    longDesc: 'Feature-rich task management app with clean architecture, offline first approach, and multi-module structure. Utilizes Room database, Coroutines, and Hilt for dependency injection.',
    image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d',
    tags: ['MVVM', 'Room', 'Clean Architecture', 'Coroutines'],
    github: 'https://github.com/Dev-Aditya-More/Taskly',
    live: '#'
  },
  {
    title: 'CryptoX',
    description: 'A real-time crypto tracker using WebSockets and Jetpack Compose animations.',
    longDesc: 'Real-time cryptocurrency tracker that displays market data with smooth animations and transitions. Implements WebSockets for live updates and uses advanced Compose animations.',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085',
    tags: ['WebSockets', 'Compose Animations', 'API Integration', 'MVVM'],
    github: 'https://github.com/Dev-Aditya-More/CryptoX',
    live: '#'
  }
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="section bg-muted/30">
      <div className="container">
        <h2 className="section-title">Featured Projects</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
          {projects.map((project, index) => (
            <Card key={index} className="project-card flex flex-col h-full">
              <div className="h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-sm text-muted-foreground mb-4">{project.longDesc}</p>
                <div className="flex flex-wrap gap-1.5 mt-2">
                  {project.tags.map((tag, idx) => (
                    <Badge key={idx} variant="secondary" className="text-xs">{tag}</Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="flex gap-2">
                <Button variant="outline" size="sm" asChild className="flex-1">
                  <a href={project.github} target="_blank" rel="noopener noreferrer">
                    <Github size={16} className="mr-1" /> Code
                  </a>
                </Button>
                <Button size="sm" asChild className="flex-1">
                  <a href={project.live} target="_blank" rel="noopener noreferrer">
                    <Link size={16} className="mr-1" /> View Demo
                  </a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        
        <div className="text-center">
          <p className="text-muted-foreground mb-4">
            Want to see more of my work?
          </p>
          <Button variant="outline" asChild>
            <a href="https://github.com/Dev-Aditya-More" target="_blank" rel="noopener noreferrer">
              <Github size={18} className="mr-2" /> View All Projects
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
