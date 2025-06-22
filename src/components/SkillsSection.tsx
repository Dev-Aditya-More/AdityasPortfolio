
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Smartphone, 
  Code, 
  Database, 
  GitBranch, 
  TestTube, 
  Cloud, 
  Terminal,
  Settings,
  Zap,
  Layers
} from 'lucide-react';

const skillCategories = [
  {
    title: 'Mobile Development',
    icon: Smartphone,
    skills: [
      { name: 'Kotlin', icon: '🟣', proficiency: 'Expert' },
      { name: 'Java', icon: '☕', proficiency: 'Advanced' },
      { name: 'Jetpack Compose', icon: '🎨', proficiency: 'Expert' },
      { name: 'Android SDK', icon: '🤖', proficiency: 'Expert' }
    ]
  },
  {
    title: 'DevOps & Infrastructure',
    icon: Cloud,
    skills: [
      { name: 'Docker', icon: '🐳', proficiency: 'Advanced' },
      { name: 'Kubernetes', icon: '⚓', proficiency: 'Intermediate' },
      { name: 'AWS', icon: '☁️', proficiency: 'Advanced' },
      { name: 'Terraform', icon: '🏗️', proficiency: 'Intermediate' }
    ]
  },
  {
    title: 'Development Tools',
    icon: Settings,
    skills: [
      { name: 'Git', icon: '📝', proficiency: 'Expert' },
      { name: 'Android Studio', icon: '💻', proficiency: 'Expert' },
      { name: 'Firebase', icon: '🔥', proficiency: 'Advanced' },
      { name: 'Gradle', icon: '⚙️', proficiency: 'Advanced' }
    ]
  },
  {
    title: 'Architecture & Patterns',
    icon: Layers,
    skills: [
      { name: 'MVVM', icon: '🏛️', proficiency: 'Expert' },
      { name: 'Clean Architecture', icon: '🎯', proficiency: 'Advanced' },
      { name: 'Dependency Injection', icon: '🔗', proficiency: 'Advanced' },
      { name: 'Repository Pattern', icon: '📚', proficiency: 'Expert' }
    ]
  }
];

const additionalSkills = [
  'Room Database', 'Coroutines & Flow', 'Retrofit', 'Hilt/Dagger', 
  'Material Design', 'JUnit Testing', 'Espresso', 'MockK',
  'CI/CD Pipelines', 'Prometheus', 'Grafana', 'Ansible',
  'Performance Optimization', 'WorkManager', 'DataStore'
];

const getProficiencyColor = (proficiency: string) => {
  switch (proficiency) {
    case 'Expert':
      return 'text-green-600 bg-green-100 dark:text-green-400 dark:bg-green-900/20';
    case 'Advanced':
      return 'text-blue-600 bg-blue-100 dark:text-blue-400 dark:bg-blue-900/20';
    case 'Intermediate':
      return 'text-yellow-600 bg-yellow-100 dark:text-yellow-400 dark:bg-yellow-900/20';
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
            <Card key={index} className="group hover:shadow-lg transition-all duration-300">
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

        <Card className="overflow-hidden">
          <CardContent className="p-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 rounded-lg bg-primary/10">
                <Zap className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold">Additional Technologies</h3>
            </div>
            
            <div className="flex flex-wrap gap-2">
              {additionalSkills.map((skill, index) => (
                <Badge 
                  key={index} 
                  variant="outline" 
                  className="bg-background/50 hover:bg-background transition-colors cursor-default"
                >
                  {skill}
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