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
    "Compose Multiplatform",
    "Room DB",
    "MVVM",
    "Hilt",
    "Coroutines",
    "Python",
    "Java",
    "DSA",
    "Docker",
    "VCS",
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
  ],
  projects: [
    {
      name: "PayU — Personal Finance Tracker",
      description:
        "Track income, expenses, and savings with a clean UI and real-time sync using Firebase.",
      technologies: [
        "Jetpack Compose",
        "MVVM",
        "Firebase",
        "Kotlin",
        "Koin",
        "Coroutines",
        "Material3",
        "Clean Architecture",
      ],
      github: "https://github.com/Dev-Aditya-More/PayU",
    },
    {
      name: "MoviesApp — KMP Movie Showcase (Assignment)",
      description:
        "Movie showcase app built with Kotlin Multiplatform demonstrating shared business logic and modern Compose UI.",
      technologies: [
        "Kotlin Multiplatform",
        "Jetpack Compose",
        "Ktor",
        "Coroutines",
        "Flow",
        "Clean Architecture",
      ],
      github: "https://github.com/Dev-Aditya-More/MoviesAppKMP",
    },
    {
      name: "Dexverse — Pokédex App",
      description:
        "Interactive Pokédex with pagination, caching, and type-based animations.",
      technologies: [
        "Jetpack Compose",
        "MVVM",
        "Kotlin",
        "Koin",
        "Coil",
        "Material3",
        "Coroutines",
        "State Management",
      ],
      github: "https://github.com/Dev-Aditya-More/PokeVerse",
    },
    {
      name: "Baskit — Smart Grocery Scanner",
      description:
        "Barcode-based product analysis using OpenFoodFacts API with nutrition and eco scoring.",
      technologies: [
        "Jetpack Compose",
        "MVVM",
        "Kotlin",
        "Retrofit",
        "ML Kit",
        "Coroutines",
        "Material3",
        "OpenFoodFacts API",
      ],
      github: "https://github.com/Dev-Aditya-More/Baskit",
    },
    {
      name: "Stashly — Bookmark & File Manager",
      description:
        "Organize bookmarks, links, and files with tagging, search, and clean Material 3 UI.",
      technologies: [
        "Jetpack Compose",
        "MVVM",
        "Room DB",
        "Koin",
        "Coroutines",
        "Material3",
      ],
      github: "https://github.com/Dev-Aditya-More/Stashly",
    },
    {
      name: "Breezy — Weather App",
      description:
        "Real-time weather forecasting with location-based updates using OpenWeatherMap.",
      technologies: [
        "Jetpack Compose",
        "MVVM",
        "Kotlin",
        "Geocoder",
        "Material3",
      ],
      github: "https://github.com/Dev-Aditya-More/BreezyTheApp",
    },
    {
      name: "Taskly — To-Do App",
      description:
        "Offline-first task manager built with Room DB and clean architecture.",
      technologies: [
        "Jetpack Compose",
        "Room DB",
        "MVVM",
        "Hilt",
        "Coroutines",
      ],
      github: "https://github.com/Dev-Aditya-More/Taskly",
    },
    {
      name: "QR Code Scanner",
      description:
        "Real-time QR scanner using ML Kit and CameraX with lightweight architecture.",
      technologies: ["Kotlin", "Jetpack Compose", "ML Kit", "CameraX"],
      github: "https://github.com/Dev-Aditya-More/QRcodeScanner",
    },
    {
      name: "TicTacToe Game",
      description: "Classic game with clean state handling and Compose UI.",
      technologies: ["Jetpack Compose", "Kotlin", "State Management"],
      github: "https://github.com/Dev-Aditya-More/TicTacToeGame",
    },
  ],
  education: [
    {
      degree: "Bachelor of Engineering in Computer Engineering",
      school: "SPPU University",
      year: "Expected 2027",
    },
  ],
  contact: {
    email: "aditya1875more@gmail.com",
    github: "https://github.com/Dev-Aditya-More",
    linkedin: "https://linkedin.com/in/adityamore2005",
    website: "https://adityapushes.vercel.app",
  },
  social: [
    {
      platform: "BuyMeACoffee",
      url: "https://buymeacoffee.com/aditya1875q",
    },
    {
      platform: "GitHub",
      url: "https://github.com/Dev-Aditya-More",
    },
    {
      platform: "Twitter",
      url: "https://x.com/Adityaastwt",
    },
    {
      platform: "LinkedIn",
      url: "https://linkedin.com/in/adityamore2005",
    },
    {
      platform: "Instagram",
      url: "https://instagram.com/adityblinks",
    },
  ],
};
