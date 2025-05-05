import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Github, Link } from 'lucide-react';

const projects = [
  {
    title: 'Taskly - To-Do List App',
    description: 'Minimal and offline-first task tracker using Room DB.',
    longDesc: 'Built with MVVM and Clean Architecture, Room DB for persistence, and Jetpack Compose UI. Supports Coroutines and Hilt DI for a robust offline experience.',
    image: 'https://unsplash.com/photos/a-notebook-with-a-pen-on-top-of-it-y16ku6si6xI',
    tags: ['Jetpack Compose', 'Room DB', 'MVVM', 'Hilt', 'Coroutines'],
    github: 'https://github.com/Dev-Aditya-More/ToDoList',
    
  },
  {
    title: 'StopwatchX',
    description: 'Functional stopwatch app built with Compose and State Management.',
    longDesc: 'Implements a clean Compose-based UI with start/pause/reset features, using State and ViewModel to manage lifecycle-aware timing logic.',
    image: 'https://unsplash.com/photos/person-holding-white-and-silver-colored-pocket-watch-p3Pj7jOYvnM',
    tags: ['Jetpack Compose', 'State Management', 'ViewModel', 'Kotlin'],
    github: 'https://github.com/Dev-Aditya-More/StopwatchApp',
    
  },
  {
    title: 'TicTacToe Game',
    description: 'Simple and clean TicTacToe game with Compose.',
    longDesc: 'Classic two-player game with a responsive Compose UI. Showcases logic separation, UI states, and win/draw detection.',
    image: 'https://unsplash.com/photos/a-sign-with-letters-and-numbers--yhBOqHOr0c',
    tags: ['Jetpack Compose', 'State Handling', 'Game Logic', 'Kotlin'],
    github: 'https://github.com/Dev-Aditya-More/TicTacToeGame',
    
  },
  {
    title: 'QR Code Scanner',
    description: 'Android app to scan QR codes using ML Kit and CameraX.',
    longDesc: 'Lightweight scanner using Google ML Kits Barcode API, with real-time decoding and camera control using CameraX. Kotlin-based implementation.',
    image: 'https://unsplash.com/photos/black-samsung-android-smartphone-displaying-qr-code-QuZThQoxwm4',
    tags: ['CameraX', 'ML Kit', 'QR Scanner', 'Kotlin', 'Jetpack'],
    github: 'https://github.com/Dev-Aditya-More/QRcodeScanner',
    
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