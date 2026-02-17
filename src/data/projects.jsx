import React from 'react'

export const projects = [
  {
    id: 'pinpoint',
    title: 'Pinpoint',
    subtitle: 'QHacks 2026 Winner · Mayor\'s Innovation Challenge',
    description: (
      <>
        A <strong>QHacks 2026–winning</strong> app that maps rental listings and roommate seekers. Built with React, Next.js, TypeScript, Supabase, and Tailwind CSS. Selected for the <strong>Mayor's Innovation Challenge</strong> with the opportunity to pitch to the Mayor of Kingston in March 2026.
      </>
    ),
    technologies: ['React', 'Next.js', 'TypeScript', 'Gemini'],
    image: '/images/pinpoint.png',
    link: 'https://usepinpoint.vercel.app',
  },
  {
    id: 'mesh',
    title: 'Mesh',
    description: (
      <>
        Inspired by Waterloo's SE Webring, Mesh is a 3D social portfolio network supporting <strong>25+ active users</strong> that visualizes Ontario Tech engineering students and alumni as interactive nodes on a dynamic globe, enabling real-time, immersive discovery of portfolios and professional profiles.
      </>
    ),
    technologies: ['React', 'Next.js', 'TypeScript', 'Three.js', 'PostgreSQL'],
    image: '/images/MeshProjectImage.png',
    link: 'https://mesh-otu.com',
  },
  {
    id: 'nervy',
    title: 'Nervy - AI Interview Coach',
    subtitle: 'HackHive 2026 - Hackathon Participant',
    description: (
      <>
        Full-stack <strong>AI interview coach</strong> that gives real-time feedback on verbal and non-verbal performance. Users practice via webcam; the app analyzes eye contact, posture, and tone and surfaces actionable insights. Includes <strong>Sign Captions</strong>: real-time ASL-to-text so interview practice is accessible to signers.
      </>
    ),
    technologies: ['PyTorch', 'MediaPipe', 'Gemini', 'Next.js', 'React', 'TypeScript'],
    image: '/images/nervy.png',
    demoLink: 'https://www.youtube.com/watch?v=OjtCO2DYJLY',
  },
  {
    id: 'codebuddy',
    title: 'CodeBuddy',
    subtitle: 'Alameda Hacks - Hackathon Participant',
    description: (
      <>
        Built a code documentation platform using <strong>Django REST Framework and Flask</strong> that integrates with GitHub to analyze repositories.
        Developed automated repository processing with <strong>GitHub OAuth authentication</strong> and organization management to help developers understand and document codebases.
      </>
    ),
    technologies: ['Django', 'Flask', 'GitHub API', 'Mistral AI', 'SQLite', 'Jinja'],
    videoLink: 'https://www.youtube.com/watch?v=6t7L8p_sXHs',
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
    technologies: ['React', 'Python', 'FastAPI', 'OpenAI API'],
    codeLink: '#',
    demoLink: '#',
  },
  {
    id: 'battery-health-prediction',
    title: 'Battery Health Prediction System',
    description: (
      <>
        Built a machine learning system using <strong>Python, pandas, and scikit-learn</strong> to process and analyze 670+ battery cell measurements.
        Developed an ETL pipeline with automated feature extraction and achieved <strong>R² = 1.0 accuracy</strong> in predicting battery health.
      </>
    ),
    technologies: ['Python', 'Pandas', 'NumPy', 'Scikit-learn', 'Matplotlib', 'Joblib'],
    codeLink: '#',
    demoLink: '#',
  },
]
