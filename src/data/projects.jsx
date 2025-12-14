import React from 'react'

export const projects = [
  {
    id: 'mesh',
    title: 'Mesh',
    description: (
      <>
        Inspired by Waterloo's SE Webring, Mesh is a 3D social portfolio network that visualizes Ontario Tech engineering students and alumni as interactive nodes on a dynamic globe, enabling real-time, immersive discovery of portfolios and professional profiles.
      </>
    ),
    technologies: ['Next.js', 'React Three Fiber', 'Supabase', 'TypeScript'],
    image: '/images/MeshProjectImage.png',
    link: 'https://meshtech-alpha.vercel.app/',
  },
  {
    id: 'ai-resume-analyzer',
    title: 'AI Resume Analyzer',
    status: 'In Progress',
    description: (
      <>
        Engineered a production‑grade <strong>AI Resume Analyzer</strong> achieving
        <strong> 85%+ accuracy</strong> in job alignment, underpinned by a robust data parsing pipeline with a
        <strong> 90% success rate</strong> for multi‑format resumes.
      </>
    ),
    technologies: ['React', 'Python', 'FastAPI', 'OpenAI API', 'TailwindCSS', 'Git'],
    codeLink: '#',
    demoLink: '#',
  },
  {
    id: 'task-scheduler',
    title: 'Task Scheduler & Workflow Orchestrator',
    description: (
      <>
        Designed and implemented a Unix-based task scheduling and workflow orchestration system in Bash, enabling automated execution of dependent multi-step processes with intelligent retry logic and real-time Slack notifications. The system enforces sequential dependencies, supports Cron-based recurring execution, and provides centralized logging and CLI-based controls.
      </>
    ),
    technologies: ['Bash', 'Cron', 'Slack Webhooks', 'Linux', 'CLI Design'],
    codeLink: '#',
    demoLink: '#',
  },
  {
    id: 'car-marketplace',
    title: 'Car Marketplace',
    description: (
      <>
        Designed a full‑stack marketplace featuring dynamic listings and a 
        seller review system, centered on an optimized <strong>5‑entity relational MySQL database</strong> 
        and performance‑driven client‑side filtering solutions.
      </>
    ),
    technologies: ['React', 'Node.js', 'Express.js', 'MySQL'],
    image: '/images/CarMarketplaceProjectImage.png',
    codeLink: '#',
    demoLink: '#',
  },
  {
    id: 'evently',
    title: 'Evently',
    description: (
      <>
        Architected and deployed a highly scalable MERN‑stack Event Platform supporting <strong>50+ user events</strong>,
         strategically refactoring its <strong>10+ RESTful APIs</strong> into a professional controller‑based pattern to 
         maximize backend maintainability.
      </>
    ),
    technologies: ['React', 'JavaScript', 'Node.js', 'Express.js', 'MongoDB', 'TailwindCSS', 'Git'],
    image: '/images/EventlyProjectImage.png',
    demoLink: 'https://ticketsale-xi.vercel.app/',
  },
]
