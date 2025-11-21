import React from 'react'

// Projects data - separated from component logic
export const projects = [
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
    id: 'car-marketplace',
    title: 'Car Marketplace',
    status: 'In Progress',
    description: (
      <>
        Designed a full‑stack marketplace featuring dynamic listings and a 
        seller review system, centered on an optimized <strong>5‑entity relational MySQL database</strong> 
        and performance‑driven client‑side filtering solutions.
      </>
    ),
    technologies: ['React', 'Node.js', 'Express.js', 'MySQL'],
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
    codeLink: 'https://github.com/madhavpatel249/TicketSale',
    demoLink: 'https://ticketsale-xi.vercel.app/',
  },
]

