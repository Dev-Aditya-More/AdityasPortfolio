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
  title: "Android & DevOps Enthusiast",
  bio: "Driven developer from a tier-3 college with a passion for Jetpack Compose, DevOps, and problem-solving. I enjoy building meaningful applications, automating workflows, and guiding others through technical clarity. Currently pursuing DSA via LeetCode and exploring impactful open-source contributions.",
  skills: [
    "Kotlin",
    "Jetpack Compose",
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
    "Coil"
  ],
  projects: [
    {
      name: "Taskly",
      description: "Offline-first to-do list app built with Jetpack Compose, Room DB, and MVVM. Features task creation, editing, and persistence.",
      technologies: ["Jetpack Compose", "Kotlin", "Room Database", "MVVM", "Hilt", "Coroutines", "Material3"],
      github: "https://github.com/Dev-Aditya-More/Taskly"
    },
    {
      name: "PokeVerse",
      description: "Interactive Pokédex app using paginated API data. Built with clean architecture and responsive Compose UI.",
      technologies: ["Jetpack Compose", "State Management", "Kotlin", "Koin", "Coil", "Material3"],
      github: "https://github.com/Dev-Aditya-More/PokeVerse"
    },
    {
      name: "Breezy - Weather App",
      description: "Simple weather forecast app with real-time updates via OpenWeatherMap and geolocation support.",
      technologies: ["Jetpack Compose", "State Management", "Kotlin", "Geocoder", "Material3", "OpenWeatherMap API"],
      github: "https://github.com/Dev-Aditya-More/BreezyTheApp"
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
      platform: "Twitter",
      url: "https://x.com/Adityaastwt"
    },
    {
      platform: "LinkedIn",
      url: "https://linkedin.com/in/adityamore2005"
    },
    {
        platform: "Instagram",
        url: "https://instagram.com/adityamore1875"
    }
  ]
};
