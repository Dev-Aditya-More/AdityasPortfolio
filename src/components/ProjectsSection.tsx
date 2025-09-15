import React from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger
} from '@/components/ui/tabs';
import { Github } from 'lucide-react';

const androidProjects = [
  {
    title: 'Stashly — Bookmark, Link & File Manager',
    description: 'A modern and intuitive tool to save and organize bookmarks, links, and files.',
    longDesc: 'Built with MVVM and Jetpack Compose, featuring tagging, categorization, search, and Material 3 theming. Optimized release builds with R8 and ProGuard.',
    image: '/StashlyIcon.png',
    tags: ['Jetpack Compose', 'MVVM', 'Material3', 'Room DB', 'Coroutines', 'KoinDI', 'Retrofit', 'Coil'],
    github: 'https://github.com/Dev-Aditya-More/Stashly',
    download: 'https://github.com/Dev-Aditya-More/Stashly/releases/v1.0.0'
  },
  {
    title: 'PokeVerse — Pokédex App',
    description: 'Interactive Pokédex with clean UI and modern architecture.',
    longDesc: 'Fetches and displays paginated data from PokéAPI with caching, type-based animations, and detail screens.',
    image: '/PokeVerseLogo.png',
    tags: ['Jetpack Compose', 'State Management', 'MVVM', 'Kotlin', 'KoinDI', 'Coil', 'Material3, tts', 'Coroutines'],
    github: 'https://github.com/Dev-Aditya-More/PokeVerse',
    download: 'https://github.com/Dev-Aditya-More/PokeVerse/releases/v1.0.2'
  },
  {
    title: 'Breezy — Forecasts That Feel Light',
    description: 'Simple weather forecast app with a clean interface and location-based updates.',
    longDesc: 'Displays real-time weather data via OpenWeatherMap API and integrates location services with Geocoder.',
    image: '/weatherApp.png',
    tags: ['Jetpack Compose', 'State Management', 'MVVM', 'Kotlin', 'Geocoder', 'Material3'],
    github: 'https://github.com/Dev-Aditya-More/BreezyTheApp',
    download: 'https://github.com/Dev-Aditya-More/BreezyTheApp/releases/v1.0.0'
  },
  {
    title: 'Taskly — To-Do List App',
    description: 'Minimal and offline-first task tracker using Room DB.',
    longDesc: 'Built with MVVM and Clean Architecture, Room DB for persistence, and Jetpack Compose UI.',
    image: '/TasklyLogo.png',
    tags: ['Jetpack Compose', 'Room DB', 'MVVM', 'Hilt', 'Coroutines'],
    github: 'https://github.com/Dev-Aditya-More/Taskly',
    download: 'https://github.com/Dev-Aditya-More/Taskly/releases/v1.0.0'
  },
  {
    title: 'TicTacToe Game',
    description: 'Classic two-player TicTacToe game with Jetpack Compose.',
    longDesc: 'Showcases responsive UI states, clean separation of logic, and win/draw detection for a smooth game experience.',
    image: 'https://images.unsplash.com/photo-1668901382969-8c73e450a1f5?q=80&w=2080&auto=format&fit=crop',
    tags: ['Jetpack Compose', 'State Handling', 'Game Logic', 'Kotlin'],
    github: 'https://github.com/Dev-Aditya-More/TicTacToeGame',
    download: 'https://github.com/Dev-Aditya-More/TicTacToeGame/releases/v1.0.0'
  },
  {
    title: 'QR Code Scanner',
    description: 'Android app to scan QR codes using ML Kit and CameraX.',
    longDesc: 'Lightweight scanner using Google ML Kit’s Barcode API, with real-time decoding and camera control via CameraX.',
    image: 'https://images.unsplash.com/photo-1595079676714-d804bc1095b4?q=80&w=2070&auto=format&fit=crop',
    tags: ['CameraX', 'ML Kit', 'QR Scanner', 'Kotlin', 'Jetpack'],
    github: 'https://github.com/Dev-Aditya-More/QRcodeScanner',
    download: 'https://github.com/Dev-Aditya-More/QRcodeScanner/releases/v1.0.0'
  },
  {
    title: 'More Soon',
    description: 'More Android projects coming soon!',
    longDesc: 'Exciting new Jetpack Compose and Kotlin projects are on the way. Stay tuned!',
    image: 'https://images.unsplash.com/photo-1590479773265-7464e5d48118?q=80&w=1170&auto=format&fit=crop',
    tags: ['Coming Soon'],
    github: null,
  }

];

const devopsProjects = [
  {
    title: 'Coming Soon',
    description: 'DevOps projects in development!',
    longDesc: 'Working on advanced DevOps automation, cloud-native solutions, and infrastructure optimization projects. Stay tuned for updates!',
    image: 'https://images.unsplash.com/photo-1590479773265-7464e5d48118?q=80&w=1170&auto=format&fit=crop',
    tags: ['Coming Soon'],
    github: null,
  }
];

const ProjectGrid = ({ projects, githubUrl }) => (
  <>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-10">
      {projects.map((project, index) => (
        <Card key={index} className="flex flex-col h-full rounded-xl overflow-hidden shadow-sm">
          <div className="h-48 sm:h-56 md:h-64 overflow-hidden">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-contain bg-black transition-transform duration-500"
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
          <CardFooter className="flex flex-col sm:flex-row gap-2 mt-auto">
            {project.github && (
              <Button variant="outline" size="sm" asChild className="w-full sm:w-auto">
                <a href={project.github} target="_blank" rel="noopener noreferrer">
                  <Github size={16} className="mr-1" /> GitHub
                </a>
              </Button>
            )}
            {project.download && (
              <Button variant="default" size="sm" asChild className="w-full sm:w-auto">
                <a href={project.download} target="_blank" rel="noopener noreferrer">
                  Download APK
                </a>
              </Button>
            )}
          </CardFooter>
        </Card>
      ))}
    </div>

    <div className="text-center">
      <p className="text-muted-foreground mb-4">Want to see more of my work?</p>
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
    <section id="projects" className="bg-muted/30 py-10 sm:py-14 lg:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl font-bold mb-8 text-center">Featured Projects</h2>

        <Tabs defaultValue="android" className="w-full">
          <div className="overflow-x-auto">
            <TabsList className="flex gap-2 w-max mb-8">
              <TabsTrigger value="android" className="min-w-max">Android Development</TabsTrigger>
              <TabsTrigger value="devops" className="min-w-max">DevOps & Infrastructure</TabsTrigger>
            </TabsList>
          </div>

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
