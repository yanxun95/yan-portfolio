import { Project, SkillCategory, NavItem, Experience } from '@/types';

export const navItems: NavItem[] = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

export const experiences: Experience[] = [
  {
    company: 'Trimble',
    role: 'Software Engineer',
    url: 'https://www.trimble.com/en',
    period: 'Sep 2022 — May 2026',
    highlights: [
      'Contributed to and developed frontend features for a railway monitoring platform that visualizes real-time and historical diagnostic data for complex rail systems',
      'Developed and optimized responsive dashboards to handle high-frequency updates, large-scale datasets, and complex data visualization workflows',
      'Built interactive visualization components, including charts, maps, graphs, and tables using Leaflet and Apache ECharts',
      'Developed customer-specific views and role-based access experiences to support different operational requirements',
      'Collaborated with backend engineers, QA, and product teams in Agile workflows to deliver reliable monitoring solutions',
    ],
    technologies: ['Vue.js', 'JavaScript', 'Vuex', 'REST API', 'Leaflet', 'Apache ECharts', 'SCSS', 'Git', 'Jira', 'Confluence'],
  },
  {
    company: 'Freelance',
    role: 'Frontend Developer',
    url: undefined,
    period: 'Jun 2025 — Feb 2026',
    highlights: [
      'Developed frontend applications using React.js and Vite, building reusable components and responsive user interfaces based on project requirements',
      'Built interactive web experiences using React Router and Three.js',
      'Implemented frontend features with a focus on maintainability, performance optimization, and user experience',
      'Deployed and maintained web applications on Vercel, managing production releases and application updates',
    ],
    technologies: ['React 18', 'Vite', 'React Router', 'i18next', 'Three.js', 'SCSS', 'Vite Image Tools', 'Google reCAPTCHA v3'],
  },
];

export const skillCategories: SkillCategory[] = [
  {
    title: 'Frontend',
    skills: [
      { name: 'React' },
      { name: 'Vue.js' },
      { name: 'JavaScript' },
      { name: 'TypeScript' },
      { name: 'HTML' },
      { name: 'SCSS' },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Node.js' },
      { name: 'Express.js' },
      { name: 'PostgreSQL' },
      { name: 'MongoDB' },
    ],
  },
  {
    title: 'Tools & Workflow',
    skills: [
      { name: 'Git' },
      { name: 'GitHub' },
      { name: 'Bitbucket' },
      { name: 'Vercel' },
      { name: 'Cloudflare' },
      { name: 'Jira' },
      { name: 'Cursor' },
      { name: 'GitHub Copilot' },
    ],
  },
];

export const projects: Project[] = [
  {
    id: 'white-stone',
    title: 'Whitestone',
    description:
      'An interactive stone slab product showcase featuring a custom 3D viewer built with Three.js. Users can explore different products through realistic lighting, materials, and viewing angles, supported by a React-based catalog experience.',
    image: '/images/project-whitestone-screenshot.png',
    technologies: ['React 18', 'Vite', 'React Router', 'i18next', 'Three.js', 'SCSS', 'Vite Image Tools', 'Google reCAPTCHA v3'],
    githubUrl: undefined,
    liveUrl: 'https://www.whitestone.com.my/',
  },
  {
    id: 'node-flow',
    title: 'Node Flow',
    description:
      'A canvas-based layout tool built with React and react-konva that enables users to create, resize, and precisely measure custom shapes. Features real-time dimension editing, mm/inch conversion, and fractional inch display rounded to the nearest 1/16 inch.',
    image: '/images/project-nodeflow-screenshot.png',
    technologies: ['React 19', 'Vite', 'Konva', 'react-konva', 'Zustand', 'jsPDF', 'Sass'],
    githubUrl: 'https://github.com/yanxun95/node-flow',
    liveUrl: 'https://node-flow-chi.vercel.app/',
  },
  {
    id: 'spotify-clone',
    title: 'Spotify Clone',
    description:
      'A Spotify clone built with React and TypeScript, integrating the Deezer API for real music data. Implemented a feature-based architecture with Redux Toolkit for state management, persistent user preferences, client-side routing, and a custom audio player supporting playlist control, playback state, and volume management.',
    image: '/images/project-spotify-screenshot.png',
    technologies: ['React', 'TypeScript', 'Redux Toolkit', 'React Router', 'SCSS', 'MUI', 'Deezer API'],
    githubUrl: 'https://github.com/yanxun95/spotify-clone',
    liveUrl: 'https://spotify-clone-yanxun95.vercel.app/',
  },
];
