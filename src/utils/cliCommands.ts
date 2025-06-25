import { PortfolioData } from '@/data/portfolioData';

export const executeCommand = (command: string, data: PortfolioData): string[] => {
  const cmd = command.toLowerCase().trim();
  
  switch (cmd) {
    case 'help':
    case '?':
      return [
        'Available commands:',
        '',
        '  help        - Show this help message',
        '  about       - Display information about me',
        '  skills      - List my technical skills',
        '  projects    - Show my projects',
        '  education   - Display education background',
        '  contact     - Show contact information',
        '  social      - List social media profiles',
        '  clear       - Clear the terminal screen',
        '  exit        - Return to portfolio view',
        '',
        'Pro tip: Use arrow keys to navigate command history!'
      ];

    case 'about':
    case 'bio':
      return [
        `Name: ${data.name}`,
        `Title: ${data.title}`,
        '',
        'About:',
        data.bio,
        ''
      ];

    case 'skills':
    case 'tech':
      return [
        'Technical Skills:',
        '',
        ...data.skills.map(skill => `  • ${skill}`),
        ''
      ];

    case 'projects':
    case 'work':
      const projectOutput = ['My Projects:', ''];
      data.projects.forEach((project, index) => {
        projectOutput.push(`${index + 1}. ${project.name}`);
        projectOutput.push(`   ${project.description}`);
        projectOutput.push(`   Tech: ${project.technologies.join(', ')}`);
        if (project.github) {
          projectOutput.push(`   GitHub: ${project.github}`);
        }
        if (project.demo) {
          projectOutput.push(`   Demo: ${project.demo}`);
        }
        projectOutput.push('');
      });
      return projectOutput;

    case 'education':
    case 'edu':
      const eduOutput = ['Education:', ''];
      data.education.forEach(edu => {
        eduOutput.push(`  ${edu.degree}`);
        eduOutput.push(`  ${edu.school} (${edu.year})`);
        eduOutput.push('');
      });
      return eduOutput;

    case 'contact':
    case 'reach':
      return [
        'Contact Information:',
        '',
        `  Email: ${data.contact.email}`,
        `  GitHub: ${data.contact.github}`,
        `  LinkedIn: ${data.contact.linkedin}`,
        ...(data.contact.website ? [`  Website: ${data.contact.website}`] : []),
        ''
      ];

    case 'social':
      const socialOutput = ['Social Media:', ''];
      data.social.forEach(social => {
        socialOutput.push(`  ${social.platform}: ${social.url}`);
      });
      socialOutput.push('');
      return socialOutput;

    case 'clear':
    case 'cls':
      return ['Terminal cleared.', ''];

    case 'whoami':
      return [`${data.name} - ${data.title}`];

    case 'pwd':
      return ['/home/portfolio'];

    case 'ls':
    case 'dir':
      return [
        'about.txt    skills.json    projects/',
        'education/   contact.info   social.links',
        ''
      ];

    case 'date':
      return [new Date().toString()];

    case 'uptime':
      return ['Portfolio has been running since page load.'];

    default:
      return [
        `Command '${command}' not found.`,
        'Type "help" to see available commands.',
        ''
      ];
  }
};