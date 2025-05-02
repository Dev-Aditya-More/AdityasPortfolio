
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const skills = [
  {
    category: 'Languages',
    items: [
      { name: 'Kotlin', level: 95, color: 'bg-kotlin' },
      { name: 'Java', level: 85, color: 'bg-primary' }
    ]
  },
  {
    category: 'Frameworks',
    items: [
      { name: 'Jetpack Compose', level: 90, color: 'bg-compose' },
      { name: 'Coroutines & Flow', level: 85, color: 'bg-kotlin' },
      { name: 'Hilt/Dagger', level: 80, color: 'bg-primary' },
      { name: 'Room', level: 85, color: 'bg-android' }
    ]
  },
  {
    category: 'Tools',
    items: [
      { name: 'Android Studio', level: 90, color: 'bg-android' },
      { name: 'Git', level: 85, color: 'bg-primary' },
      { name: 'Firebase', level: 80, color: 'bg-compose' },
      { name: 'Retrofit', level: 85, color: 'bg-kotlin' }
    ]
  },
  {
    category: 'Testing',
    items: [
      { name: 'JUnit', level: 75, color: 'bg-primary' },
      { name: 'Espresso', level: 70, color: 'bg-android' },
      { name: 'MockK', level: 75, color: 'bg-kotlin' }
    ]
  }
];

const SkillsSection = () => {
  return (
    <section id="skills" className="section">
      <div className="container">
        <h2 className="section-title">Skills & Tools</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          {skills.map((category, index) => (
            <Card key={index} className="overflow-hidden">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-4">{category.category}</h3>
                <div className="space-y-4">
                  {category.items.map((skill, idx) => (
                    <div key={idx}>
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-medium">{skill.name}</span>
                        <span className="text-sm text-muted-foreground">{skill.level}%</span>
                      </div>
                      <div className="skill-bar">
                        <div 
                          className={`skill-progress ${skill.color}`} 
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-muted/30 rounded-lg p-6">
          <h3 className="text-lg font-semibold mb-4">Additional Knowledge</h3>
          <div className="flex flex-wrap gap-2">
            {[
              'Material Design', 'Animations', 'Navigation Component', 'Gradle', 
              'Glide/Coil', 'WorkManager', 'DataStore', 'MVVM', 'CI/CD', 
              'Performance Optimization', 'Dependency Injection', 'Clean Architecture'
            ].map((tag, index) => (
              <Badge key={index} variant="outline" className="bg-background">{tag}</Badge>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
