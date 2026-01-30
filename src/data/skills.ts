export type Skill = {
  id: string
  name: string
  level: string
  category: 'Frontend' | 'Backend' | 'Database' | 'Tools' | 'Testing & Automation'
  proficiency: number 
}

export const skills: Skill[] = [
  // Frontend
  { id: 'html', name: 'HTML', level: 'Advanced', category: 'Frontend', proficiency: 5 },
  { id: 'css', name: 'CSS', level: 'Advanced', category: 'Frontend', proficiency: 5 },
  { id: 'javascript', name: 'JavaScript', level: 'Advanced', category: 'Frontend', proficiency: 4 },
  { id: 'react', name: 'React', level: 'Intermediate', category: 'Frontend', proficiency: 3 },
  { id: 'typescript', name: 'TypeScript', level: 'Intermediate', category: 'Frontend', proficiency: 3 },
  { id: 'vite', name: 'Vite', level: 'Intermediate', category: 'Frontend', proficiency: 3 },

  // Backend
  { id: 'python', name: 'Python', level: 'Intermediate', category: 'Backend', proficiency: 4 },
  { id: 'flask', name: 'Flask', level: 'Intermediate', category: 'Backend', proficiency: 3 },
  { id: 'fastapi', name: 'FastAPI', level: 'Intermediate', category: 'Backend', proficiency: 3 },

  // Database
  { id: 'mongodb', name: 'MongoDB', level: 'Intermediate', category: 'Database', proficiency: 4 },
  { id: 'sql', name: 'MySQL', level: 'Intermediate', category: 'Database', proficiency: 3 },

  // Tools
  { id: 'git', name: 'Git & GitHub', level: 'Intermediate', category: 'Tools', proficiency: 4 },

  // Testing & Automation
  { id: 'playwright', name: 'Playwright', level: 'Intermediate', category: 'Testing & Automation', proficiency: 3 }
];
