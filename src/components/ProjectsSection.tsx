import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Github, Link } from 'lucide-react';

const androidProjects = [
  {
    title: 'Taskly - To do List App',
    description: 'Minimal and offline-first task tracker using Room DB.',
    longDesc: 'Built with MVVM and Clean Architecture, Room DB for persistence, and Jetpack Compose UI.',
    image: 'https://images.unsplash.com/photo-1641261689141-ee46b8a0470c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    tags: ['Jetpack Compose', 'Room DB', 'MVVM', 'Hilt', 'Coroutines'],
    github: 'https://github.com/Dev-Aditya-More/Taskly',
  },
  {
    title: 'StopwatchX',
    description: 'Functional stopwatch app built with Compose and State Management.',
    longDesc: 'Implements a clean Compose-based UI with start/pause/reset features, using State and ViewModel to manage lifecycle-aware timing logic.',
    image: 'https://images.unsplash.com/photo-1431499012454-31a9601150c9?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    tags: ['Jetpack Compose', 'State Management', 'ViewModel', 'Kotlin'],
    github: 'https://github.com/Dev-Aditya-More/StopwatchApp',
  },
  {
    title: 'TicTacToe Game',
    description: 'Simple and clean TicTacToe game with Compose.',
    longDesc: 'Classic two-player game with a responsive Compose UI. Showcases logic separation, UI states, and win/draw detection.',
    image: 'https://images.unsplash.com/photo-1668901382969-8c73e450a1f5?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    tags: ['Jetpack Compose', 'State Handling', 'Game Logic', 'Kotlin'],
    github: 'https://github.com/Dev-Aditya-More/TicTacToeGame',
  },
  {
    title: 'QR Code Scanner',
    description: 'Android app to scan QR codes using ML Kit and CameraX.',
    longDesc: 'Lightweight scanner using Google ML Kits Barcode API, with real-time decoding and camera control using CameraX. Kotlin-based implementation.',
    image: 'https://images.unsplash.com/photo-1595079676714-d804bc1095b4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    tags: ['CameraX', 'ML Kit', 'QR Scanner', 'Kotlin', 'Jetpack'],
    github: 'https://github.com/Dev-Aditya-More/QRcodeScanner',
  },
  {
    title: 'More soon',
    description: 'More Android projects coming soon!',
    longDesc: 'Exciting new Jetpack Compose and Kotlin projects are on the way. Stay tuned!',
    image: 'https://images.unsplash.com/photo-1590479773265-7464e5d48118?q=80&w=1170&auto=format&fit=crop',
    tags: ['Coming Soon'],
    github: null,
  }
];

const devopsProjects = [
  {
    
    title: 'coming soon',
    description: 'DevOps projects in development!',
    longDesc: 'Working on advanced DevOps automation, cloud-native solutions, and infrastructure optimization projects. Stay tuned for updates!',
    image: 'https://images.unsplash.com/photo-1590479773265-7464e5d48118?q=80&w=1170&auto=format&fit=crop',
    tags: ['Coming Soon'],
    github: null,

  }
];

const ProjectGrid = ({ projects, githubUrl }) => (
  <>
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
            {project.github && (
              <Button variant="outline" size="sm" asChild className="flex-1">
                <a href={project.github} target="_blank" rel="noopener noreferrer">
                  <Github size={16} className="mr-1" /> Code
                </a>
              </Button>
            )}
          </CardFooter>
        </Card>
      ))}
    </div>

    <div className="text-center">
      <p className="text-muted-foreground mb-4">
        Want to see more of my work?
      </p>
      <Button variant="outline" asChild>
        <a href={githubUrl} target="_blank" rel="noopener noreferrer">
          <Github size={18} className="mr-2" /> View All Projects
        </a>
      </Button>
    </div>
  </>
);

const ProjectsSection = () => {
  return (
    <section id="projects" className="section bg-muted/30">
      <div className="container">
        <h2 className="section-title">Featured Projects</h2>

        <Tabs defaultValue="android" className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-8">
            <TabsTrigger value="android">Android Development</TabsTrigger>
            <TabsTrigger value="devops">DevOps & Infrastructure</TabsTrigger>
          </TabsList>
          
          <TabsContent value="android">
            <ProjectGrid 
              projects={androidProjects} 
              githubUrl="https://github.com/Dev-Aditya-More"
            />
          </TabsContent>
          
          <TabsContent value="devops">
            <ProjectGrid 
              projects={devopsProjects} 
              githubUrl="https://github.com/Dev-Aditya-More"
            />
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default ProjectsSection;
