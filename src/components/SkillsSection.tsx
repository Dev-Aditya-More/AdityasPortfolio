import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Smartphone, 
  Code, 
  Cloud, 
  Settings,
  Zap,
  Layers,
  TestTube
} from 'lucide-react';

const skillCategories = [
  {
    title: 'Mobile Development',
    icon: Smartphone,
    skills: [
      { name: 'Kotlin', icon: '🟣', proficiency: 'Advanced' },
      { name: 'Java', icon: '☕', proficiency: 'Intermediate' },
      { name: 'Jetpack Compose', icon: '🎨', proficiency: 'Intermediate' },
      { name: 'Android SDK', icon: '🤖', proficiency: 'Intermediate' }
    ]
  },
  {
    title: 'Android Toolkit',
    icon: Code,
    skills: [
      { name: 'Room DB', icon: '💾', proficiency: 'Intermediate' },
      { name: 'WorkManager', icon: '📆', proficiency: 'Intermediate' },
      { name: 'DataStore', icon: '🗂️', proficiency: 'Intermediate' },
      { name: 'Retrofit', icon: '🌐', proficiency: 'Intermediate' }
    ]
  },
  {
    title: 'DevOps & Infrastructure',
    icon: Cloud,
    skills: [
      { name: 'Docker', icon: '🐳', proficiency: 'Intermediate' },
      { name: 'Kubernetes', icon: '⚓', proficiency: 'Intermediate' },
      { name: 'AWS', icon: '☁️', proficiency: 'Beginner' },
      { name: 'Terraform', icon: '🏗️', proficiency: 'Beginner' }
    ]
  },
  {
    title: 'Development Tools',
    icon: Settings,
    skills: [
      { name: 'Git', icon: '📝', proficiency: 'Intermediate' },
      { name: 'Android Studio', icon: '💻', proficiency: 'Intermediate' },
      { name: 'Firebase', icon: '🔥', proficiency: 'Intermediate' },
      { name: 'Gradle', icon: '⚙️', proficiency: 'Intermediate' }
    ]
  },
];

const additionalSkills = {
  'Android': ['Room Database', 'WorkManager', 'DataStore'],
  'Kotlin': ['Coroutines & Flow', 'Hilt/Dagger', 'Retrofit'],
  'DevOps': ['CI/CD Pipelines', 'Prometheus', 'Grafana', 'Ansible']
};

const currentlyLearning = [
  'AWS (Deep Dive)',
  'Working on cool projects',
  'KMP & Flutter'
];

const getProficiencyColor = (proficiency: string) => {
  switch (proficiency) {
    case 'Mastery':
      return 'text-purple-600 bg-purple-100 dark:text-purple-400 dark:bg-purple-900/20';
    case 'Advanced':
      return 'text-blue-600 bg-blue-100 dark:text-blue-400 dark:bg-blue-900/20';
    case 'Intermediate':
      return 'text-yellow-600 bg-yellow-100 dark:text-yellow-400 dark:bg-yellow-900/20';
    case 'Exploring':
      return 'text-gray-600 bg-gray-100 dark:text-gray-400 dark:bg-gray-900/20';
    default:
      return 'text-gray-600 bg-gray-100 dark:text-gray-400 dark:bg-gray-900/20';
  }
};

const SkillsSection = () => {
  return (
    <section id="skills" className="section bg-muted/30">
      <div className="container">
        <h2 className="section-title">Skills & Expertise</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {skillCategories.map((category, index) => (
            <Card key={index} className="group hover:shadow-lg hover:scale-[1.02] transition-all duration-300 ease-in-out">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    <category.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold">{category.title}</h3>
                </div>

                <div className="grid grid-cols-1 gap-4">
                  {category.skills.map((skill, idx) => (
                    <div key={idx} className="flex items-center justify-between p-3 rounded-lg bg-muted/50 hover:bg-muted transition-colors">
                      <div className="flex items-center gap-3">
                        <span className="text-2xl">{skill.icon}</span>
                        <span className="font-medium">{skill.name}</span>
                      </div>
                      <Badge 
                        variant="secondary" 
                        className={`text-xs font-medium ${getProficiencyColor(skill.proficiency)}`}
                      >
                        {skill.proficiency}
                      </Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="overflow-hidden mb-6">
          <CardContent className="p-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 rounded-lg bg-primary/10">
                <Zap className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold">Additional Technologies</h3>
            </div>
            {Object.entries(additionalSkills).map(([category, skills], idx) => (
              <div key={idx} className="mb-4">
                <h4 className="text-sm font-semibold text-muted-foreground mb-2">{category}</h4>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill, i) => (
                    <Badge key={i} variant="outline" className="bg-background/50 hover:bg-background cursor-default">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 rounded-lg bg-primary/10">
                <TestTube className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold"> What next? </h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {currentlyLearning.map((item, index) => (
                <Badge
                  key={index}
                  variant="secondary"
                  className="bg-yellow-100 text-yellow-700 dark:bg-yellow-900/20 dark:text-yellow-400"
                >
                  {item}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default SkillsSection;