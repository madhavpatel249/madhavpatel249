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
  .project-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 10px;
    flex-wrap: wrap;
    gap: 10px;
  }
  .project-title {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', sans-serif;
    color: #000000;
    font-size: 18px;
    font-weight: 600;
    margin: 0;
  }
  .project-status {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', sans-serif;
    font-size: 12px;
    font-weight: 500;
    color: #666666;
    background-color: #fff3cd;
    padding: 4px 8px;
    border-radius: 4px;
    border: 1px solid #ffc107;
  }
  .project-links {
    display: flex;
    gap: 10px;
    margin-top: 10px;
    margin-bottom: 10px;
  }
  .project-link {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', sans-serif;
    font-size: 13px;
    color: #000000;
    text-decoration: none;
    border-bottom: 1px dashed transparent;
    transition: all 0.2s ease;
    cursor: pointer;
  }
  .project-link:hover {
    color: #2196f3;
    border-bottom-color: #2196f3;
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
      status: 'In Progress',
      description: (
        <>
          Engineered a production‑grade <strong>AI Resume Analyzer</strong> achieving
          <strong> 85%+ accuracy</strong> in job alignment, underpinned by a robust data parsing pipeline with a
          <strong> 90% success rate</strong> for multi‑format resumes.
        </>
      ),
      technologies: ['React', 'Python', 'FastAPI', 'OpenAI API', 'TailwindCSS', 'Git'],
      codeLink: '#', // TODO: Replace with your GitHub repo URL
      demoLink: '#' // TODO: Replace with your demo URL
    },
    {
      title: 'Car Trading Marketplace',
      status: 'In Progress',
      description: (
        <>
          Designed a full‑stack marketplace featuring dynamic listings and a 
          seller review system, centered on an optimized <strong>5‑entity relational MySQL database</strong> 
          and performance‑driven client‑side filtering solutions.
        </>
      ),
      technologies: ['React', 'Node.js', 'Express.js', 'MySQL'],
      codeLink: '#', // TODO: Replace with your GitHub repo URL
      demoLink: '#' // TODO: Replace with your demo URL
    },
    {
      title: 'Evently',
      description: (
        <>
          Architected and deployed a highly scalable MERN‑stack Event Platform supporting <strong>50+ user events</strong>,
           strategically refactoring its <strong>10+ RESTful APIs</strong> into a professional controller‑based pattern to 
           maximize backend maintainability.
        </>
      ),
      technologies: ['React', 'JavaScript', 'Node.js', 'Express.js', 'MongoDB', 'TailwindCSS', 'Git'],
      codeLink: 'https://github.com/madhavpatel249/TicketSale', // TODO: Replace with your GitHub repo URL
      demoLink: 'https://ticketsale-xi.vercel.app/' // TODO: Replace with your demo URL
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
              <div className="project-header">
                <h3 className="project-title">{project.title}</h3>
                {project.status && (
                  <span className="project-status">{project.status}</span>
                )}
              </div>
              <div className="project-description">{project.description}</div>
              {!project.status && (
                <div className="project-links">
                  <a href={project.codeLink} target="_blank" rel="noopener noreferrer" className="project-link">
                    Code
                  </a>
                  <span> | </span>
                  <a href={project.demoLink} target="_blank" rel="noopener noreferrer" className="project-link">
                    Demo
                  </a>
                </div>
              )}
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
