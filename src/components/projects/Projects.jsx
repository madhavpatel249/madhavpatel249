import React from 'react'
import { projects } from '../../data/projects'
import SectionTitle from '../ui/SectionTitle'
import ProjectCard from './ProjectCard'

const projectsSectionStyles = `
  .projects-section {
    padding: 0;
  }
  .projects-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 20px;
    margin-top: 0;
  }
`

/**
 * Projects component
 * Single Responsibility: Display projects section
 * KISS: Simple component that maps over data and renders ProjectCard components
 */
function Projects() {
  return (
    <>
      <style>{projectsSectionStyles}</style>
      <section className="projects-section">
        <SectionTitle>Projects</SectionTitle>
        <div className="projects-grid">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>
    </>
  )
}

export default Projects

