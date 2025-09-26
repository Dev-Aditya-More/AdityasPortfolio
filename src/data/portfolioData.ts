export interface PortfolioData {
  name: string;
  title: string;
  bio: string;
  skills: string[];
  projects: Array<{
    name: string;
    description: string;
    technologies: string[];
    github?: string;
    demo?: string;
  }>;
  education: Array<{
    degree: string;
    school: string;
    year: string;
  }>;
  contact: {
    email: string;
    github: string;
    linkedin: string;
    website?: string;
  };
  social: Array<{
    platform: string;
    url: string;
  }>;
}

export const portfolioData: PortfolioData = {
  name: "Aditya More",
  title: "Android and KMP Developer | DevOps Enthusiast | Seasonal Web Dev",
  bio: "I'm a passionate Android developer focused on building elegant, scalable, and modern mobile experiences with Jetpack Compose and Kotlin MultiPlatform. I love exploring advanced UI patterns, state management, and clean architecture. When I'm not coding, you'll find me learning DevOps, contributing to open source, or experimenting with the latest in tech.",
  skills: [
    "Kotlin",
    "Jetpack Compose",
    "Kotlin Multiplatform",
    "Room DB",
    "MVVM",
    "Hilt",
    "Coroutines",
    "Python",
    "Java",
    "DSA",
    "Docker",
    "Git/GitHub",
    "CI/CD",
    "Linux",
    "Firebase",
    "Koin",
    "CameraX",
    "ML Kit",
    "Material3",
    "Coil",
    "Retrofit",
    "State Management",
    "OpenWeatherMap API",
    "Geocoder",
    "Barcode Scanning",
    "TypeScript",
    "React",
    "Next.js"
  ],
  projects: [
    {
      name: "Stashly — Bookmark, Link & File Manager",
      description: "A modern and intuitive tool to save and organize bookmarks, links, and files.",
      technologies: ["Jetpack Compose", "MVVM", "Material3", "Room DB", "Coroutines", "KoinDI", "Retrofit", "Coil"],
      github: "https://github.com/Dev-Aditya-More/Stashly"
    },
    {
      name: "PokeVerse — Pokédex App",
      description: "Interactive Pokédex with clean UI and modern architecture.",
      technologies: ["Jetpack Compose", "State Management", "MVVM", "Kotlin", "KoinDI", "Coil", "Material3", "tts", "Coroutines"],
      github: "https://github.com/Dev-Aditya-More/PokeVerse"
    },
    {
      name: "Breezy — Forecasts That Feel Light",
      description: "Simple weather forecast app with a clean interface and location-based updates.",
      technologies: ["Jetpack Compose", "State Management", "MVVM", "Kotlin", "Geocoder", "Material3"],
      github: "https://github.com/Dev-Aditya-More/BreezyTheApp"
    },
    {
      name: "Taskly",
      description: "Offline-first to-do list app built with Jetpack Compose, Room DB, and MVVM. Features task creation, editing, and persistence.",
      technologies: ["Jetpack Compose", "Kotlin", "Room DB", "MVVM", "Hilt", "Coroutines", "Material3"],
      github: "https://github.com/Dev-Aditya-More/Taskly"
    },
    {
      name: "QR Code Scanner",
      description: "Lightweight Android app that scans QR codes in real-time using ML Kit and CameraX.",
      technologies: ["Kotlin", "Jetpack Compose", "ML Kit", "CameraX", "Barcode Scanning"],
      github: "https://github.com/Dev-Aditya-More/QRcodeScanner"
    },
    {
      name: "TicTacToe Game",
      description: "Classic two-player TicTacToe game built in Compose with game logic separation and win/draw detection.",
      technologies: ["Jetpack Compose", "Kotlin", "State Handling", "Material3"],
      github: "https://github.com/Dev-Aditya-More/TicTacToeGame"
    },
    {
      name: "StopWatch App",
      description: "A functional stopwatch built with Kotlin and Compose. Demonstrates clean time state handling and UI updates.",
      technologies: ["Jetpack Compose", "Kotlin", "Coroutines", "Material3"],
      github: "https://github.com/Dev-Aditya-More/StopWatchApp"
    },
    {
      name: "Unit Converter App",
      description: "Compose-based Android app for converting units with support for light/dark mode and responsive UI.",
      technologies: ["Kotlin", "Jetpack Compose", "Material3"],
      github: "https://github.com/Dev-Aditya-More/UnitConverter"
    }
  ],
  education: [
    {
      degree: "Bachelor of Engineering in Computer Engineering",
      school: "SPPU University",
      year: "Expected 2027"
    }
  ],
  contact: {
    email: "aditya1875more@gmail.com",
    github: "https://github.com/Dev-Aditya-More",
    linkedin: "https://linkedin.com/in/adityamore2005",
    website: "https://adityapushes.vercel.app"
  },
  social: [
    {
      platform: "GitHub",
      url: "https://github.com/Dev-Aditya-More"
    },
    {
      platform: "Twitter",
      url: "https://x.com/Adityaastwt"
    },
    {
      platform: "LinkedIn",
      url: "https://linkedin.com/in/adityamore2005"
    },
    {
      platform: "Instagram",
      url: "https://instagram.com/adityblinks"
    }
  ]
};
