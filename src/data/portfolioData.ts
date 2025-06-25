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
    "Python",
    "Java",
    "LeetCode (DSA)",
    "Docker",
    "Git/GitHub",
    "Firebase",
    "Linux",
    "CI/CD",
    "React (Basic)",
    "Flask",
    "REST APIs"
  ],
  projects: [
    {
      name: "Taskly",
      description: "Supports adding, editing, deleting, and persisting tasks using Room and ViewModel.",
      technologies: ["Jetpack Compose", "Kotlin", "LottieAnimations", "Room Database", "Material3", "ViewModel", "State management"],
      github: "https://github.com/Dev-Aditya-More/Taskly"
    },
    {
      name: "TicTacToe",
      description: "built in Kotlin with Jetpack Compose. Features real-time game logic, win/draw detection, and a clean UI.",
      technologies: ["Jetpack Compose", "State management", "Kotlin", "Material3"],
      github: "https://github.com/Dev-Aditya-More/TicTacToe"
    },
    {
      name: "StopWatchApp",
      description: "Functional stopwatch app built with Compose and State Management.",
      technologies: ["Jetpack Compose", "Kotlin", "Coroutines", "Material3"],
      github: "https://github.com/Dev-Aditya-More/StopWatchApp"
    },
    {
      name: "Unit Converter App",
      description: "Android app built using Jetpack Compose that supports dynamic dark/light theme and unit conversions.",
      technologies: ["Kotlin", "Jetpack Compose", "Material 3"],
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
