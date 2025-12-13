import React from 'react'
import { projects } from '../data/projects'

const projectsStyles = `
  .projects {
    padding: 40px 0;
    margin-bottom: 30px;
  }
  .section-title {
    font-size: 20px;
    font-weight: 600;
    margin-bottom: 24px;
    color: var(--text);
  }
  .projects-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    gap: 20px;
  }
  .project-card {
    background: var(--bg);
    border: 1px solid var(--border);
    border-radius: 8px;
    overflow: hidden;
    transition: all 0.3s ease;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    height: 100%;
  }
  .project-card:hover {
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
    transform: translateY(-2px);
  }
  .project-visual {
    width: 100%;
    min-height: 240px;
    background: var(--sidebar-bg);
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    position: relative;
    flex-shrink: 0;
  }
  .project-visual img {
    width: 100%;
    height: auto;
    object-fit: contain;
    display: block;
  }
  .project-visual-placeholder {
    width: 100%;
    height: 100%;
    background: var(--sidebar-bg);
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--text-light);
  }
  .project-visual-placeholder svg {
    width: 80px;
    height: 80px;
    opacity: 0.3;
  }
  .project-content {
    padding: 16px;
    flex: 1;
    display: flex;
    flex-direction: column;
  }
  .project-title {
    font-size: 18px;
    font-weight: 600;
    color: var(--text);
    margin-bottom: 8px;
  }
  .project-description {
    font-size: 12px;
    color: var(--text);
    line-height: 1.5;
    margin-bottom: 12px;
    flex: 1;
  }
  .project-description strong {
    font-weight: 600;
  }
  .project-footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: 10px;
    border-top: 1px solid var(--border);
    margin-top: auto;
  }
  .project-tech {
    display: flex;
    flex-wrap: wrap;
    gap: 6px;
  }
  .tech-tag {
    font-size: 11px;
    color: var(--text-light);
    background: var(--border);
    padding: 3px 8px;
    border-radius: 4px;
  }
  .project-links {
    display: flex;
    gap: 12px;
  }
  .project-link {
    font-size: 13px;
    color: var(--accent);
    text-decoration: none;
  }
  .project-link:hover {
    text-decoration: underline;
  }
  .project-status {
    font-size: 10px;
    color: var(--text-light);
    background: var(--border);
    padding: 3px 8px;
    border-radius: 4px;
    white-space: nowrap;
    font-weight: 500;
  }
  @media (max-width: 768px) {
    .projects {
      padding: 30px 0;
    }
    .projects-grid {
      grid-template-columns: 1fr;
      gap: 16px;
    }
    .project-visual {
      min-height: 200px;
    }
    .project-content {
      padding: 14px;
    }
  }
`

function Projects() {
    return (
        <>
            <style>{projectsStyles}</style>
            <section id="projects" className="projects reveal">
                <h2 className="section-title">Projects</h2>
                <div className="projects-grid">
                    {projects.map((project) => (
                        <div key={project.id} className="project-card">
                            <div className="project-visual">
                                {project.image ? (
                                    <img src={project.image} alt={project.title} />
                                ) : (
                                    <div className="project-visual-placeholder">
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
                                        </svg>
                                    </div>
                                )}
                            </div>
                            <div className="project-content">
                                <h3 className="project-title">{project.title}</h3>
                                <div className="project-description">{project.description}</div>
                                <div className="project-footer">
                                    {project.technologies && project.technologies.length > 0 && (
                                        <div className="project-tech">
                                            {project.technologies.slice(0, 4).map((tech, index) => (
                                                <span key={index} className="tech-tag">{tech}</span>
                                            ))}
                                        </div>
                                    )}
                                    <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                                        {project.status && (
                                            <span className="project-status">{project.status}</span>
                                        )}
                                        {!project.status && (
                                            <div className="project-links">
                                                {project.link && (
                                                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">Link</a>
                                                )}
                                                {project.codeLink && project.codeLink !== '#' && (
                                                    <a href={project.codeLink} target="_blank" rel="noopener noreferrer" className="project-link">Code</a>
                                                )}
                                                {project.demoLink && project.demoLink !== '#' && (
                                                    <a href={project.demoLink} target="_blank" rel="noopener noreferrer" className="project-link">Demo</a>
                                                )}
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </>
    )
}

export default Projects
