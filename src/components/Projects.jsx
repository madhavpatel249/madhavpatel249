import React from 'react'

const cardStyles = `
  .projects-section {
    padding: 12px 0; /* reduce vertical padding */
  }
  .projects-section h2 {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', sans-serif;
    color: #000000;
    font-size: 24px;
    font-weight: 700;
    margin-bottom: 20px;
  }
  .projects-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 20px;
    margin-top: 20px;
  }
  .project-card {
    background-color: #fafafa;
    border: 1px solid #e0e0e0;
    padding: 20px;
    border-radius: 8px;
    transition: all 0.2s ease;
  }
  .project-card:hover {
    background-color: #f3e5f5;
    border-color: #9c27b0;
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(156, 39, 176, 0.15);
  }
  .project-title {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', sans-serif;
    color: #000000;
    font-size: 18px;
    font-weight: 600;
    margin-bottom: 10px;
  }
  .project-description {
    color: #000000;
    line-height: 1.5;
    font-size: 14px;
    margin-bottom: 15px;
  }
  .project-tech {
    display: flex;
    flex-wrap: wrap;
    gap: 5px;
    margin-top: 10px;
  }
  .tech-tag {
    background-color: #e8f5e8;
    border: 1px solid #4caf50;
    color: #2e7d32;
    padding: 3px 8px;
    font-size: 12px;
    border-radius: 4px;
  }
`

function Projects() {
  const projects = [
    {
      title: 'AI Resume Analyzer',
      description: (
        <>
          Engineered a production‑grade <strong>AI Resume Analyzer</strong> achieving
          <strong> 85%+ accuracy</strong> in job alignment, underpinned by a robust data parsing pipeline with a
          <strong> 90% success rate</strong> for multi‑format resumes.
        </>
      ),
      technologies: ['React', 'Python', 'FastAPI', 'OpenAI API', 'TailwindCSS', 'Git']
    },
    {
      title: 'Ticket Sale Platform',
      description: (
        <>
          Architected and deployed a highly scalable MERN‑stack Event Platform supporting <strong>50+ user events</strong>,
           strategically refactoring its <strong>10+ RESTful APIs</strong> into a professional controller‑based pattern to 
           maximize backend maintainability.
        </>
      ),
      technologies: ['React', 'JavaScript', 'Node.js', 'Express.js', 'MongoDB', 'TailwindCSS', 'Git']
    },
    {
      title: 'Car Trading Marketplace',
      description: (
        <>
          Designed a full‑stack marketplace featuring dynamic listings and a 
          seller review system, centered on an optimized <strong>5‑entity relational MySQL database</strong> 
          and performance‑driven client‑side filtering solutions.
        </>
      ),
      technologies: ['React', 'Node.js', 'Express.js', 'MySQL']
    }
  ]

  return (
    <>
      <style>{cardStyles}</style>
      <section className="projects-section">
        <h2>Projects</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <h3 className="project-title">{project.title}</h3>
              <div className="project-description">{project.description}</div>
              {project.technologies && project.technologies.length > 0 && (
                <div className="project-tech">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="tech-tag">{tech}</span>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>
    </>
  )
}

export default Projects
