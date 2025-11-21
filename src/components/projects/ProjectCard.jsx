import React from 'react'
import Card from '../ui/Card'
import Tag from '../ui/Tag'

const projectCardStyles = `
  .project-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 12px;
    flex-wrap: nowrap;
    gap: 12px;
  }
  .project-title {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', sans-serif;
    color: #1a1a1a;
    font-size: 20px;
    font-weight: 600;
    margin: 0;
    transition: color 0.3s ease;
    flex: 1;
    min-width: 0;
  }
  .dark .project-title {
    color: #e0e0e0;
  }
  .project-description {
    color: #4a4a4a;
    line-height: 1.6;
    font-size: 15px;
    transition: color 0.3s ease;
    margin-bottom: 12px;
  }
  .dark .project-description {
    color: #cccccc;
  }
  .project-links {
    display: flex;
    gap: 16px;
    margin-top: 12px;
    margin-bottom: 12px;
  }
  .project-link {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', sans-serif;
    font-size: 14px;
    font-weight: 500;
    color: #0066cc;
    text-decoration: none;
    border-bottom: 1px solid transparent;
    transition: border-color 0.2s ease;
    cursor: pointer;
  }
  .project-link:hover {
    border-bottom-color: #0066cc;
  }
  .project-tech {
    display: flex;
    flex-wrap: wrap;
    gap: 6px;
    margin-top: 12px;
  }
`

/**
 * ProjectCard component
 * Single Responsibility: Display a single project card
 * Open/Closed: Accepts project data via props, can be extended without modification
 */
function ProjectCard({ project }) {
  return (
    <>
      <style>{projectCardStyles}</style>
      <Card>
        <div className="project-header">
          <h3 className="project-title">{project.title}</h3>
          {project.status && <Tag variant="status">{project.status}</Tag>}
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
            {project.technologies.map((tech, index) => (
              <Tag key={index}>{tech}</Tag>
            ))}
          </div>
        )}
      </Card>
    </>
  )
}

export default ProjectCard

