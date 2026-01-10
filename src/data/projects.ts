export type Project = {
  id: string
  title: string
  description: string
  bulletPoints: string[]
  tech: string[]
  link?: string
  repo?: string
  hasLiveDemo: boolean
}

export const projects: Project[] = [
  {
    id: 'p1',
    title: 'Stock Visualization & Analysis Tool',
    description: 'An interactive dashboard for visualizing stock market trends using charts and analytics powered by a Python-based backend.',
    bulletPoints: [
      'Interactive charts for trend analysis',
      'REST API integration for real-time data'
    ],
    tech: ['React', 'TypeScript', 'Python', 'FastAPI'],
    link: '#',
    repo: '#',
    hasLiveDemo: false
  },
  {
    id: 'p2',
    title: 'Task Management System',
    description: 'A full-stack task management application with CRUD functionality, user authentication, and persistent data storage.',
    bulletPoints: [
      'Complete CRUD operations with MongoDB',
      'User authentication and session management'
    ],
    tech: ['React', 'JavaScript', 'Flask', 'MongoDB'],
    link: '#',
    repo: '#',
    hasLiveDemo: false
  },
  {
    id: 'p3',
    title: 'Face Recognition Web App',
    description: 'A web application that detects human faces from images using a Python backend API and displays results in real time on the frontend.',
    bulletPoints: [
      'Real-time face detection using computer vision',
      'FastAPI backend with image processing'
    ],
    tech: ['React', 'JavaScript', 'Python', 'FastAPI'],
    link: '#',
    repo: '#',
    hasLiveDemo: false
  },
  {
    id: 'p4',
    title: 'Personal Portfolio Website',
    description: 'A modern and fully responsive personal portfolio website showcasing projects, skills, and contact information with smooth UI interactions.',
    bulletPoints: [
      'Responsive design with Tailwind CSS',
      'Smooth animations using Framer Motion'
    ],
    tech: ['React', 'TypeScript', 'Vite', 'Tailwind CSS'],
    link: '#',
    repo: '#',
    hasLiveDemo: true
  },
  {
    id: 'p5',
    title: 'Design Reviewer Application',
    description: 'A web-based application that allows users to submit designs and receive structured feedback, powered by a RESTful backend.',
    bulletPoints: [
      'Design upload and review system',
      'RESTful API with structured feedback'
    ],
    tech: ['React', 'TypeScript', 'Flask', 'MySQL'],
    link: '#',
    repo: '#',
    hasLiveDemo: false
  },
  {
    id: 'p6',
    title: 'Hotstar Clone',
    description: 'A frontend clone of the Hotstar streaming platform featuring a responsive layout, movie listings, and interactive UI components.',
    bulletPoints: [
      'Responsive streaming platform interface',
      'Interactive movie browsing experience'
    ],
    tech: ['HTML', 'CSS', 'JavaScript'],
    link: '#',
    repo: '#',
    hasLiveDemo: false
  }
];

